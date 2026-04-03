// One-time image optimization script
// Compresses all images in public/images in-place
// JPEGs: quality 78, max 1920px wide
// PNGs: quality 80, max 1920px wide
import sharp from 'sharp';
import { readdir, stat, rename } from 'fs/promises';
import { join, extname, basename } from 'path';

const DIR = './public/images';
const MAX_WIDTH = 1920;

const files = await readdir(DIR);
let saved = 0;

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

  const src = join(DIR, file);
  const tmp = join(DIR, '_tmp_' + file);
  const sizeBefore = (await stat(src)).size;

  try {
    const img = sharp(src);
    const meta = await img.metadata();
    const pipeline = meta.width > MAX_WIDTH ? img.resize(MAX_WIDTH) : img;

    if (ext === '.png') {
      await pipeline.png({ quality: 80, compressionLevel: 9 }).toFile(tmp);
    } else {
      await pipeline.jpeg({ quality: 78, mozjpeg: true }).toFile(tmp);
    }

    const sizeAfter = (await stat(tmp)).size;
    const reduction = ((sizeBefore - sizeAfter) / sizeBefore * 100).toFixed(1);

    await rename(tmp, src);
    saved += sizeBefore - sizeAfter;
    console.log(`✓ ${file}: ${(sizeBefore/1024).toFixed(0)}KB → ${(sizeAfter/1024).toFixed(0)}KB (-${reduction}%)`);
  } catch (e) {
    console.error(`✗ ${file}: ${e.message}`);
    try { await rename(tmp, src); } catch {}
  }
}

console.log(`\nTotal saved: ${(saved / 1024 / 1024).toFixed(1)} MB`);
