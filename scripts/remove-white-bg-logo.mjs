/**
 * Reads src/assets/gpos.jpeg and writes src/assets/gpos.png with near-white pixels transparent.
 * JPEG cannot store alpha; the site should import gpos.png after running this.
 * Run: npm run remove-white-bg-logo
 */
import sharp from 'sharp';
import { existsSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputPath = join(__dirname, '..', 'src', 'assets', 'gpos.jpeg');
const outputPath = join(__dirname, '..', 'src', 'assets', 'gpos.png');

/** Looser than hero script — JPEG compression creates off-white fringes. */
const WHITE_DIST_SQ = 55 * 55;
const MIN_LIGHT = 215;

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

if (!existsSync(inputPath)) {
  console.error('Missing:', inputPath);
  process.exit(1);
}

const { data, info } = await sharp(inputPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

if (info.channels !== 4) {
  console.error('Expected RGBA, channels=', info.channels);
  process.exit(1);
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
