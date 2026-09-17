#!/usr/bin/env python3
"""Build both CVs from cv/content.json and the portfolio credential catalogue.

Install scripts/requirements-cv.txt in a virtualenv, then run this from any cwd.
Outputs are validated before replacing public PDFs; the original CV is backed up.
"""
import json
import os
from pathlib import Path
import shutil
import subprocess
from html import escape

from pypdf import PdfReader
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, KeepTogether, PageBreak

ROOT = Path(__file__).resolve().parents[1]
DATA = json.loads((ROOT / 'cv/content.json').read_text())
NAVY = '#203E5B'
OUT = ROOT / 'output/pdf'
OUT.mkdir(parents=True, exist_ok=True)
FONT_DIR = Path(os.environ.get('CV_FONT_DIR', '/usr/share/fonts/truetype/liberation'))
for suffix, filename in [('', 'Regular'), ('-Bold', 'Bold'), ('-Italic', 'Italic'), ('-BoldItalic', 'BoldItalic')]:
    pdfmetrics.registerFont(TTFont('CV' + suffix, str(FONT_DIR / f'LiberationSerif-{filename}.ttf')))
pdfmetrics.registerFontFamily('CV', normal='CV', bold='CV-Bold', italic='CV-Italic', boldItalic='CV-BoldItalic')
CREDENTIALS = json.loads(subprocess.check_output([
    'node', '--input-type=module', '-e',
    "import {credentials,aioModules} from './src/data/credentials.mjs'; console.log(JSON.stringify({credentials,aioModules}));"
], cwd=ROOT))


def link(label, url):
    return f'<a href="{escape(url, quote=True)}" color="{NAVY}">{escape(label)}</a>'


class CV:
    def __init__(self, full=False):
        self.full = full
        self.story = []
        size, leading = (10.5, 13) if full else (10, 12)
        self.body = ParagraphStyle('body', fontName='CV', fontSize=size, leading=leading,
                                   textColor=colors.HexColor('#20252B'), spaceAfter=3 if full else 2)
        self.small = ParagraphStyle('small', parent=self.body, fontSize=10, leading=12)
        self.heading = ParagraphStyle('heading', parent=self.body, fontName='CV-Bold',
                                      textColor=colors.HexColor(NAVY), fontSize=11, leading=13,
                                      spaceBefore=11 if full else 4, spaceAfter=3, keepWithNext=True)
        self.entry = ParagraphStyle('entry', parent=self.body, fontName='CV-Bold', keepWithNext=True)
        self.bullet = ParagraphStyle('bullet', parent=self.body, leftIndent=10, firstLineIndent=-8)

    def p(self, text, style=None):
        return Paragraph(text, style or self.body)

    def add(self, text, style=None):
        self.story.append(self.p(text, style))

    def section(self, title):
        self.add(title.upper(), self.heading)
        self.story.append(HRFlowable(width='100%', thickness=0.55, color=colors.HexColor(NAVY), spaceAfter=5 if self.full else 3))

    def header(self):
        self.add(escape(DATA['name']), ParagraphStyle('name', parent=self.body, fontName='CV-Bold', fontSize=25, leading=29, alignment=TA_CENTER, spaceAfter=3))
        self.add(DATA['title'], ParagraphStyle('title', parent=self.body, fontSize=11, alignment=TA_CENTER, textColor=colors.HexColor(NAVY)))
        contacts = escape(DATA['location']) + ' | ' + link(DATA['email'], 'mailto:' + DATA['email'])
        self.add(contacts, ParagraphStyle('contacts', parent=self.small, alignment=TA_CENTER))
        self.add(' | '.join(link(*item) for item in DATA['links']), ParagraphStyle('links', parent=self.small, alignment=TA_CENTER))
        self.story.append(Spacer(1, 5))
        intro = ParagraphStyle('intro', parent=self.body, spaceAfter=3 if self.full else 0)
        for paragraph in DATA['summary']:
            self.add(escape(paragraph), intro)

    def item(self, title, date, bullets, context=None, stack=None):
        parts = [self.p('<b>' + escape(title) + '</b> | ' + escape(date), self.body if self.full else self.small)]
        if context:
            parts.append(self.p(f'<i>{escape(context)}</i>', self.small))
        parts.extend(self.p('- ' + escape(b), self.bullet) for b in bullets)
        if stack:
            parts.append(self.p('<b>Tools:</b> ' + escape(stack), self.small))
        parts.append(Spacer(1, 5 if self.full else 2))
        self.story.append(KeepTogether(parts))

    def publications(self):
        self.section('Publications' if self.full else 'Selected Publications')
        if self.full:
            self.add('Published as <b>Khoa Minh Nguyen</b>.', self.small)
        selected_ids = ['lexichem', 'mask-comer', 'mtl-cbarm']
        publications = DATA['publications'] if self.full else [
            next(pub for pub in DATA['publications'] if pub['id'] == pub_id)
            for pub_id in selected_ids
        ]
        for pub in publications:
            title = link(pub['title'], pub['url']) if pub['url'] else escape(pub['title'])
            parts = [self.p('<b>' + title + '</b>', self.small),
                     self.p(escape(f"{pub['venue']} | {pub['role']} | {pub['status']}"), self.small)]
            if self.full:
                parts.append(self.p(escape(pub['detail'])))
            parts.append(Spacer(1, 6 if self.full else 2))
            self.story.append(KeepTogether(parts))

    def education(self):
        self.section('Education')
        ed = DATA['education']
        self.add('<b>' + escape(ed['title']) + '</b>', self.small)
        self.add(ed['date'] + ' | ' + ed['status'], self.small)
        if self.full:
            self.add(ed['gpa'], self.small)

    def skills(self):
        self.section('Technical Skills')
        for label, value in DATA['skills']:
            self.add('<b>' + escape(label) + ':</b> ' + escape(value), self.small)

    def certificates(self):
        self.section('Certifications' if self.full else 'Selected Certifications')
        self.add('<b>AIO | AI VIET NAM:</b> Machine Learning; Deep Learning; Computer Vision &amp; NLP; GenAI &amp; LLMs.', self.small)
        if not self.full:
            selected = {c['id']: c for c in CREDENTIALS['credentials']}
            self.add(link('Machine Learning', selected['machine-learning']['url']) +
                     ' (Stanford Online / DeepLearning.AI, 2023) | ' +
                     link('Deep Learning', selected['deep-learning']['url']) +
                     ' (DeepLearning.AI, 2024)', self.small)
            return
        featured = ['machine-learning', 'deep-learning', 'nlp', 'ibm-full-stack'] if self.full else ['machine-learning', 'deep-learning']
        for c in CREDENTIALS['credentials']:
            if c['id'] in featured:
                self.add('<b>' + link(c['title'], c['url']) + '</b> | ' + escape(c['issuer']) + ' | ' + c['year'], self.small)
        if self.full:
            for group, label in [('ai', 'Additional AI training'), ('engineering', 'Software & cloud'), ('research', 'Research & academic writing'), ('management', 'Project management')]:
                items = [link(c['title'], c['url']) for c in CREDENTIALS['credentials'] if c['group'] == group and c['id'] not in featured]
                if items:
                    self.add('<b>' + label + ':</b> ' + '; '.join(items) + '.', self.small)

    def build(self, path):
        self.header()
        self.section('Research Experience')
        ex = DATA['experience']
        self.item(ex['title'], ex['date'], ex['full' if self.full else 'short'])
        self.section('Selected Projects' if not self.full else 'Research & Engineering Projects')
        projects = DATA['projects'] if self.full else DATA['projects'][:2]
        for i, project in enumerate(projects):
            if self.full and i == 2:
                self.story.append(PageBreak())
                self.section('Research & Engineering Projects - Continued')
            self.item(project['title'], project['date'], project['full' if self.full else 'short'],
                      project['context'] if self.full else None, project['stack'] if self.full else None)
        self.publications()
        if self.full:
            self.story.append(PageBreak())
        self.education()
        self.section('Awards & Scholarships')
        if self.full:
            for year, title, detail in DATA['awards']:
                self.story.append(KeepTogether([self.p('<b>' + escape(title) + '</b> | ' + year), self.p(escape(detail), self.small), Spacer(1, 4)]))
        else:
            self.add('<b>50% tuition scholarship</b>, FPT University (2022) | <b>RESFES Second Prize</b>, 2025 &amp; 2026.', self.small)
            self.add('<b>TrendRadar team awards/funding:</b> Demo Pitching Day, VND 50M; Innovation Quest, VND 40M (2025).', self.small)
        self.skills()
        self.certificates()
        doc = SimpleDocTemplate(str(path), pagesize=A4, rightMargin=39, leftMargin=39,
                                topMargin=33 if not self.full else 38, bottomMargin=33,
                                title=f"Nguyen Minh Khoa | {'Full CV' if self.full else 'One-page CV'}",
                                author=DATA['name'])
        def footer(canvas, document):
            if self.full:
                canvas.setFont('CV', 9)
                canvas.setFillColor(colors.HexColor(NAVY))
                canvas.drawString(39, 21, 'Nguyen Minh Khoa | Curriculum Vitae')
                canvas.drawRightString(A4[0] - 39, 21, str(document.page))
        doc.build(self.story, onFirstPage=footer, onLaterPages=footer)


def main():
    outputs = []
    for full, name, pages in [(False, 'nguyen-minh-khoa-cv-one-page.pdf', 1), (True, 'nguyen-minh-khoa-cv-full.pdf', 3)]:
        path = OUT / name
        CV(full).build(path)
        reader = PdfReader(path)
        if len(reader.pages) != pages:
            raise RuntimeError(f'{name}: expected {pages} pages, got {len(reader.pages)}; edit content/spacing before publishing')
        text = '\n'.join(page.extract_text() for page in reader.pages)
        for required in [DATA['name'], 'AiTA', 'LexiChem', 'NexOps', 'Bachelor of Science']:
            assert required in text, f'Missing text: {required}'
        for forbidden in ['PSRB', 'Bernstein', 'Olympic AI TA', 'FISAT']:
            assert forbidden not in text, f'Excluded content: {forbidden}'
        if not full:
            assert 'GPA' not in text
        outputs.append(path)
        print(f'{path.relative_to(ROOT)}: {len(reader.pages)} pages, {len(text)} text characters')
    backup = ROOT / 'cv/archive/cv-before-2026-09-17.pdf'
    if not backup.exists() and (ROOT / 'public/cv.pdf').exists():
        backup.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(ROOT / 'public/cv.pdf', backup)
    for source, name in zip(outputs, ['cv.pdf', 'cv-full.pdf']):
        shutil.copy2(source, ROOT / 'public' / name)


if __name__ == '__main__':
    main()
