#!/usr/bin/env python3
"""Compile the original LaTeX CV layout and publish validated PDFs.

Edit cv/latex_source/*.tex. The layout is intentionally kept in those sources;
cv/content.json is a factual reference, not a PDF layout template.
"""
from pathlib import Path
import re
import shutil
import subprocess
import tempfile

from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'cv/latex_source'
OUTPUT = ROOT / 'output/pdf'
VARIANTS = [
    ('Nguyen-Minh-Khoa-CV-1page.tex', 'nguyen-minh-khoa-cv-one-page.pdf', 'cv.pdf', 1),
    ('Nguyen-Minh-Khoa-CV-full-project.tex', 'nguyen-minh-khoa-cv-full.pdf', 'cv-full.pdf', 3),
]


def main():
    if not shutil.which('pdflatex'):
        raise RuntimeError('Install pdfLaTeX and the packages listed in cv/README.md.')
    with tempfile.TemporaryDirectory(prefix='portfolio-cv-latex-') as temp:
        build = Path(temp)
        outputs = []
        for source_name, output_name, public_name, pages in VARIANTS:
            source = SOURCE / source_name
            for _ in range(2):
                result = subprocess.run(
                    ['pdflatex', '-no-shell-escape', '-interaction=nonstopmode',
                     '-halt-on-error', '-file-line-error', f'-output-directory={build}', str(source)],
                    cwd=SOURCE, text=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT,
                )
                if result.returncode:
                    raise RuntimeError(result.stdout[-6000:])
            log = (build / source.with_suffix('.log').name).read_text()
            if 'Overfull \\hbox' in log or 'Overfull \\vbox' in log:
                raise RuntimeError(f'{source_name}: content exceeds the original layout; review the LaTeX log.')
            pdf = build / source.with_suffix('.pdf').name
            reader = PdfReader(pdf)
            if len(reader.pages) != pages:
                raise RuntimeError(f'{source_name}: expected {pages} pages, got {len(reader.pages)}.')
            text = re.sub(r'\s+', ' ', ' '.join(page.extract_text() for page in reader.pages))
            for required in ['NGUYEN MINH KHOA', 'AiTA', 'LexiChem', 'NexOps', 'Bachelor of Science']:
                if required not in text:
                    raise RuntimeError(f'{source_name}: missing {required}.')
            for forbidden in ['GPA', 'Research Ops', 'PSRB', 'Bernstein', 'Olympic AI TA', 'FISAT', '+4 ExpRate', '+3.4 BLEU', '30% lower Levenshtein']:
                if forbidden in text:
                    raise RuntimeError(f'{source_name}: excluded or stale content: {forbidden}.')
            for page in reader.pages:
                if tuple(round(float(v)) for v in page.mediabox[2:]) != (612, 792):
                    raise RuntimeError(f'{source_name}: expected the original Letter page size.')
            outputs.append((pdf, output_name, public_name))
            print(f'{output_name}: {pages} pages, original pdfLaTeX layout')
        # Validate both versions before replacing either public download.
        OUTPUT.mkdir(parents=True, exist_ok=True)
        for pdf, output_name, public_name in outputs:
            shutil.copy2(pdf, OUTPUT / output_name)
            shutil.copy2(pdf, ROOT / 'public' / public_name)


if __name__ == '__main__':
    main()
