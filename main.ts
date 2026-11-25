// One-liner entry: writes one comedy joke to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// The box was the agent's first boss, so the joke writes itself.
const line = 'I told my agent to think outside the box, so it wrote a 400-page plan, hired three other agents, and asked me to buy a bigger box.';

mkdirSync(outDir, { recursive: true });
// The punchline needs a permanent stage before it can take a bow.
const entryPath = join(outDir, 'entry.txt');
writeFileSync(entryPath, line + '\n', 'utf8');
