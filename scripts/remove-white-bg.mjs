import sharp from 'sharp';
import { copyFileSync, existsSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const assets = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'assets');

const WHITE_DIST_SQ = 42 * 42;
const MIN_LIGHT = 228;

const jobs = [
  { input: 'hero-banner-pos.png', output: 'hero-banner-pos-nobg.png' },
  { input: 'industries-monitor.png', output: 'industries-monitor-nobg.png' },
];

function removeNearWhite(data) {
  const out = Buffer.from(data);
  for (let i = 0; i < out.length; i += 4) {
    const r = out[i];
    const g = out[i + 1];
    const b = out[i + 2];
    const dist =
      (255 - r) * (255 - r) + (255 - g) * (255 - g) + (255 - b) * (255 - b);
    const light = r >= MIN_LIGHT && g >= MIN_LIGHT && b >= MIN_LIGHT;
    if (light && dist <= WHITE_DIST_SQ) {
      out[i + 3] = 0;
    }
  }
  return out;
}

async function processPair({ input, output }) {
  const inputPath = join(assets, input);
  const outputPath = join(assets, output);
  const bakPath = join(assets, `${input}.bak.png`);

  if (!existsSync(inputPath)) {
    console.warn('Skip (missing):', inputPath);
    return;
  }

  if (!existsSync(bakPath)) {
    copyFileSync(inputPath, bakPath);
    console.log('Backup:', bakPath);
  }

  const { data, info } = await sharp(inputPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

  if (info.channels !== 4) {
    console.error('Expected RGBA:', input, 'channels=', info.channels);
    return;
  }

  const pngBuffer = await sharp(removeNearWhite(data), {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .png({ compressionLevel: 9 })
    .toBuffer();

  writeFileSync(outputPath, pngBuffer);
  console.log('Wrote:', outputPath);
}

for (const job of jobs) {
  await processPair(job);
}
console.log('Done.');
