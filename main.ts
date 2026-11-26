// Make the Judge Laugh in One Line — entry program.
// Writes one funny line (1-200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.OUTPUT_DIR ?? "/output";

// The line, built in small parts so the payload is generated here.
const setup = "My Roomba escaped through the cat flap,";
const punch = "and now it sends me postcards from the neighbor's kitchen.";
const line = `${setup} ${punch}`;

// Gate: the entry must be 1-200 UTF-8 characters, not only whitespace.
if (line.length < 1 || line.length > 200 || !line.trim()) {
  throw new Error(`entry must be 1-200 chars, got ${line.length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(`wrote ${line.length} chars to ${join(outDir, "entry.txt")}`);
