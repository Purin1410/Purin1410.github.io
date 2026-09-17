import { readdir, readFile, stat } from "node:fs/promises";
import { resolve, join } from "node:path";
import assert from "node:assert/strict";
const root = resolve("dist");
const files = await readdir(root, { recursive: true });
const pages = files.filter((f) => f.endsWith(".html"));
let checked = 0;
for (const file of pages) {
  const html = await readFile(join(root, file), "utf8");
  assert.equal(
    (html.match(/<h1(?:\s|>)/g) || []).length,
    1,
    `${file}: exactly one h1`,
  );
  assert.match(
    html,
    /name="robots" content="index,follow"/,
    `${file}: public indexing enabled`,
  );
  assert.match(html, /rel="canonical" href="https:\/\/purin1410\.github\.io\//, `${file}: absolute canonical URL`);
  assert.match(html, /property="og:image" content="https:\/\/purin1410\.github\.io\/og\.png"/, `${file}: absolute OG image`);
  assert.match(html, /id="main"/, `${file}: main target`);
  assert.equal(
    (html.match(/data-theme-toggle/g) || []).length,
    1,
    `${file}: one theme toggle`,
  );
  assert.ok(
    html.includes("portfolio-theme") && html.includes("prefers-color-scheme: dark"),
    `${file}: pre-render theme initialization`,
  );
  assert.match(
    html,
    file.startsWith("vi/") ? /<html lang="vi">/ : /<html lang="en">/,
    `${file}: locale`,
  );
  assert.ok(
    !/vercel-insights|googletagmanager|analytics\.js/.test(html),
    `${file}: no analytics`,
  );
  for (const match of html.matchAll(/(?:href|src)="([^"<>]+)"/g)) {
    const url = match[1];
    if (!url.startsWith("/") && !url.startsWith("#")) continue;
    const [pathname, hash] = url.split("#");
    let target = pathname ? join(root, pathname) : join(root, file);
    if (pathname.endsWith("/")) target = join(target, "index.html");
    assert.ok(target.startsWith(root), `${file}: confined asset`);
    try {
      assert.ok((await stat(target)).isFile());
    } catch {
      throw new Error(`${file}: missing local target ${url}`);
    }
    if (hash && target.endsWith(".html"))
      assert.ok(
        (await readFile(target, "utf8")).includes(`id="${hash}"`),
        `${file}: missing anchor ${url}`,
      );
    checked++;
  }
}
const home = await readFile(join(root, "index.html"), "utf8");
const all = await readFile(join(root, "research/index.html"), "utf8");
const work = await readFile(join(root, "work/index.html"), "utf8");
const viHome = await readFile(join(root, "vi/index.html"), "utf8");
assert.deepEqual(
  [...home.matchAll(/data-paper="([^"]+)"/g)].map((m) => m[1]),
  ["lexichem", "mask-comer", "mtl-cbarm-hmer"],
);
assert.equal([...all.matchAll(/data-paper=/g)].length, 5);
assert.deepEqual(
  [...home.matchAll(/data-project="([^"]+)"/g)].map((m) => m[1]),
  ["lexichem", "nexops", "hmer-research"],
);
assert.ok(home.includes('/media/nexops-andon.webp') && viHome.includes('/media/nexops-andon.webp'), 'NexOps selected-work cover is present');
assert.equal([...home.matchAll(/<time /g)].length, 5);
assert.ok(home.includes('Presenting LexiChem at APWeb-WAIM 2026 in Da Nang.'), 'APWeb-WAIM presentation news is present');
assert.ok(home.includes("older-news"));
assert.ok((await stat(join(root, "cv.pdf"))).isFile(), "public CV is present");
assert.match(home, /href="\/cv\.pdf"/, "homepage exposes CV download");
assert.match(viHome, /href="\/cv\.pdf"/, "Vietnamese homepage exposes CV download");
assert.ok(home.includes("/khoa.jpg") && viHome.includes("/khoa.jpg"), "approved portrait is present");
for (const html of [home, viHome]) {
  const sectionIds = ['about', 'news', 'work', 'research', 'background', 'awards', 'certificates', 'open-source', 'gallery'];
  let previous = -1;
  for (const id of sectionIds) {
    const position = html.indexOf(`id="${id}"`);
    assert.ok(position > previous, `${id}: homepage section present and in order`);
    previous = position;
  }
  assert.equal((html.match(/data-preview-placeholder/g) || []).length, 0, 'no photo placeholders');
  // The AIO nested list sits inside details; count the whole featured list via the next disclosure boundary.
  assert.equal((html.split('data-featured-credentials')[1].split('additional-credentials')[0].match(/data-credential=/g) || []).length, 6, 'six featured credentials');
  assert.equal((html.match(/data-credential=/g) || []).length, 19, '18 Coursera credentials and one AIO group');
  assert.ok(html.includes('ChemAligner-T5') && html.includes('FrontAI') && html.includes('TrendRadar'), 'corrected award mappings');
  assert.ok(!html.includes('Vietnam National Open Math'), 'medal uses exact event scope');
  assert.ok(!/href="(?:#|)"/.test(html), 'no dummy links');
  assert.ok(html.includes('award-grid') && html.includes('activity-grid'), 'awards and expanded activities use responsive grids');
  assert.ok(html.includes('credential-grid'), 'expanded credentials use a responsive grid');
  assert.ok(
    html.includes('lightly-ai/lightly/pull/2050') && html.includes('bernstein/pull/3672') && html.includes('bernstein/pull/3673'),
    'verified OSS links',
  );
  assert.ok(html.includes('AIO 2024'), 'completed AIO programme present');
  assert.deepEqual([...html.matchAll(/data-award-year="(\d+)"/g)].map(m => Number(m[1])), [2026, 2025, 2025, 2025], 'main awards ordered newest first; earlier activities separate');
}
assert.ok(work.includes('data-project="research-ops"') && work.includes('Will in soon'), 'Research Ops remains available in all work');
for (const [file, sampleLabel, footnote] of [
  ['work/hmer-research/index.html', 'CROHME sample*', '* Sample from CROHME 2016 dataset.'],
  ['vi/work/hmer-research/index.html', 'Mẫu CROHME*', '* Mẫu từ bộ dữ liệu CROHME 2016.'],
]) {
  const html = await readFile(join(root, file), 'utf8');
  assert.ok(html.includes(sampleLabel), `${file}: CROHME sample marker`);
  assert.ok(html.includes(footnote), `${file}: CROHME attribution footnote`);
  assert.ok(html.includes('tc11.cvc.uab.es/datasets/ICFHR-CROHME-2016_1'), `${file}: CROHME source link`);
}
for (const file of ['work/lexichem/index.html', 'vi/work/lexichem/index.html']) {
  const html = await readFile(join(root, file), 'utf8');
  const techCount = [...html.matchAll(/data-tech=/g)].length;
  const iconCount = [...html.matchAll(/class="tech-logo has-image"/g)].length;
  const overviewAt = html.indexOf(file.startsWith('vi/') ? 'Tổng quan' : 'Overview');
  const flowAt = html.indexOf(file.startsWith('vi/') ? 'Cách hoạt động' : 'How it works');
  const researchAt = html.indexOf(file.startsWith('vi/') ? 'Từ nghiên cứu đến sản phẩm' : 'From research to product');
  assert.match(html, /lexichem-demo\.mp4/);
  assert.match(html, /preload="none"/);
  assert.ok(html.includes('remains in development') || html.includes('vẫn đang phát triển'), 'RAG development status disclosed');
  assert.ok(!html.includes('autoplay'), 'no autoplay');
  assert.ok(overviewAt >= 0 && overviewAt < flowAt && flowAt < researchAt, `${file}: How it works follows Overview`);
  assert.ok(techCount > 0 && iconCount === techCount, `${file}: every LexiChem technology has a local icon`);
}
for (const file of ['work/nexops/index.html', 'vi/work/nexops/index.html']) {
  const html = await readFile(join(root, file), 'utf8');
  const tech = [...html.matchAll(/data-tech="([^"]+)"/g)].map(match => match[1]);
  assert.match(html, /nexops-hardware-demo\.mp4/);
  assert.match(html, /is-portrait-video/);
  assert.ok(!html.includes('Live demo') && !html.includes('Mở demo'), 'NexOps has no public demo link');
  for (const asset of ['nexops-andon.webp', 'nexops-planning.webp', 'nexops-machine-hub.webp', 'nexops-oee.webp']) assert.ok(html.includes(asset), `${file}: ${asset}`);
  assert.ok(!html.includes('Outcome &amp; current status') && !html.includes('Kết quả &amp; trạng thái hiện tại'), 'NexOps omits redundant outcome section');
  assert.ok(html.includes('Working prototype') || html.includes('Nguyên mẫu đang hoạt động'), 'NexOps states the current working form');
  assert.ok(!html.includes('then tested a separate LAN control path') && !html.includes('sau đó thử một luồng điều khiển riêng'), 'NexOps introduction does not mistake the Bambu integration for the project purpose');
  assert.ok(html.includes('AI, Simulation &amp; Platform Lead') || html.includes('AI, Mô phỏng &amp; Nền tảng'), 'NexOps uses the expanded role title');
  for (const phrase of ['Broader repository scope', 'What this does not prove', 'Phạm vi rộng hơn của repository', 'Những gì demo chưa chứng minh', 'production deployment', 'triển khai sản xuất']) {
    assert.ok(!html.includes(phrase), `${file}: removes defensive or unfinished-state copy: ${phrase}`);
  }
  for (const item of ['PixiJS', 'Pydantic', 'JWT', 'Celery', 'Redis', 'MQTT.js', 'Node.js', 'Pytest', 'Vitest', 'Playwright']) {
    assert.ok(tech.includes(item), `${file}: verified NexOps technology ${item}`);
  }
  for (const icon of ['sqlalchemy', 'pydantic', 'nodejs', 'pytest', 'vitest', 'bambulab']) {
    assert.ok(html.includes(`/media/tech/${icon}.svg`), `${file}: uses the ${icon} brand mark`);
  }
  assert.ok(tech.every(item => !/\d/.test(item)), `${file}: NexOps technology labels omit versions`);
  for (const item of ['Keycloak', 'MinIO', 'Grafana', 'Loki', 'Ansible']) {
    assert.ok(!tech.includes(item), `${file}: ${item} stays outside the verified stack`);
  }
}
assert.ok(files.every(f => !/PORTFOLIO|resfes_2026\.png|Link_coursera|AiTA -Scribble/.test(f)), 'private source assets excluded');
assert.equal(pages.length, 15, "14 bilingual pages and a fallback");
console.log(
  `Verified ${pages.length} pages and ${checked} local links/assets; publication order, news, CV download, portrait and metadata passed.`,
);
