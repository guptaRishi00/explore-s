/* Compress oversized public/ rasters and emit .webp siblings. */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUB = path.join(__dirname, '..', 'public');
const MAX_W = 1920; // no display surface exceeds full-bleed desktop width
const exts = ['.jpg', '.jpeg', '.png'];

async function run() {
  const files = fs.readdirSync(PUB).filter((f) => exts.includes(path.extname(f).toLowerCase()));
  for (const file of files) {
    const src = path.join(PUB, file);
    const { size } = fs.statSync(src);
    if (size < 300 * 1024) { console.log(`skip ${file} (${Math.round(size / 1024)}KB)`); continue; }
    const base = file.replace(/\.[^.]+$/, '');
    const img = sharp(src).resize({ width: MAX_W, withoutEnlargement: true });

    // Re-encode original format, compressed.
    const ext = path.extname(file).toLowerCase();
    const outSame = path.join(PUB, file);
    if (ext === '.png') await img.clone().png({ quality: 80, compressionLevel: 9 }).toFile(outSame + '.tmp');
    else await img.clone().jpeg({ quality: 72, mozjpeg: true }).toFile(outSame + '.tmp');
    fs.renameSync(outSame + '.tmp', outSame);

    // WebP sibling.
    await sharp(src).resize({ width: MAX_W, withoutEnlargement: true })
      .webp({ quality: 72 }).toFile(path.join(PUB, base + '.webp'));

    const after = fs.statSync(outSame).size;
    console.log(`${file}: ${Math.round(size / 1024)}KB -> ${Math.round(after / 1024)}KB (+ ${base}.webp)`);
  }
}
run().catch((e) => { console.error(e); process.exit(1); });
