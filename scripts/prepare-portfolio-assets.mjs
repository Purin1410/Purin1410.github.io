// Explicit allowlist: never copy the raw PORTFOLIO folder into a public build.
import sharp from 'sharp';
import { mkdir, mkdtemp } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { execFileSync } from 'node:child_process';
import { credentials, aioModules } from '../src/data/credentials.mjs';
const temp = await mkdtemp(join(tmpdir(), 'khoa-public-media-'));
const files = [
  ['apweb-stage', 'lexichem_apweb/IMG_20260915_224131.jpg'],
  ['apweb-backdrop', 'lexichem_apweb/IMG_20260915_224140.jpg'],
  ['capstone-team', 'lexichem_tot_nghiep/1777908291965_807648349227250831_g8336653388565284875_59704f06a0ee3c0fb5733f1a196c1f9a.jpg'],
  ['capstone-defense', 'lexichem_tot_nghiep/1777893843496_807648349227250831_g8336653388565284875_5b85eb2d45300b5298d78bd2e3e15eb4.jpg'],
  ['icdar-poster', 'icdar/1759245688768_7469965641362671376_g2666786714822176184_ba372388f1c5b84c516e809be913df16.jpg'],
  ['icdar-registration', 'icdar/1758068152628_807648349227250831_g8336653388565284875_df58688e253183b00b0e14bf7d5a0662.jpg'],
  ['resfes-2025-team', 'resfes_hcmc_2025/DSC08981.JPG'],
  ['resfes-2026-certificate', 'resfes_hcmc_2026/20260915_234924.jpg'],
  ['pitching-team', 'demo_pitching_fptu/1754402797196_1671910199685279369_g4467095829335345476_1f79bc835452a254da5e33e7380173fc.jpg'],
  ['innovation-quest', '40M/1776320929443_7469965641362671376_g4467095829335345476_2ad0148331e808eedcdab0da5052a2f3.jpg'],
  ['resfes-finalists', 'resfers_5_cs/1786001287370_807648349227250831_g8336653388565284875_d9a7240163b4ac9c41b2f5b1b84c97f3.jpg'],
  ['excap-team', 'excap/Excap.jpg'],
  ['math-medal', 'math_2021/20260915_192440.jpg'],
];
async function convert(input, output, rotation = 0) {
  await mkdir(dirname(output), { recursive: true });
  await sharp(input).rotate().rotate(rotation).resize({ width: 1400, height: 1200, fit: 'inside', withoutEnlargement: true }).webp({ quality: 84 }).toFile(output);
}
for (const [id, source] of files) {
  await convert(join('PORTFOLIO', source), `public/media/events/${id}.webp`);
  console.log(`${id} <- ${source}`);
}
for (const c of credentials) {
  const prefix = join(temp, c.id);
  execFileSync('pdftoppm', ['-f', '1', '-singlefile', '-scale-to', '1400', '-png', join('PORTFOLIO/coursera_cert', c.source), prefix]);
  await convert(`${prefix}.png`, `public${c.image}`);
}
for (const c of aioModules) await convert(join('PORTFOLIO/aio', c.source), `public${c.image}`);
await convert('public/media/lexichem-experiments.png', 'public/media/lexichem-product.webp');
const video = 'PORTFOLIO/lexichem_tot_nghiep/Screencast from 2026-04-12 00-05-38.webm';
execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', video, '-map_metadata', '-1', '-an', '-vf', 'scale=trunc(iw/2)*2:trunc(ih/2)*2', '-c:v', 'libx264', '-preset', 'medium', '-crf', '23', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', 'public/media/lexichem-demo.mp4']);
console.log('Prepared approved media only. Originals unchanged.');
