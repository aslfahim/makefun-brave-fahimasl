// brave entry for @fahimasl: rain on a tin roof.
// A small scene, assembled line by line, written to the output file.
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The scene, in the order a reader drifts through it.
const lines = [
  'Rain on a tin roof, far from any deadline.',
  'The kettle ticks as it cools.',
  'Nothing is asked of you in this minute; the minute is already complete.',
  'When you stand, the ground will be exactly where you left it.',
];

const text = lines.join(' ');

// Count code points, the way the gate counts them.
const length = [...text].length;
if (length < 1 || length > 280 || text.trim().length === 0) {
  throw new Error(`entry text out of bounds: ${length} chars`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), text, 'utf8');
