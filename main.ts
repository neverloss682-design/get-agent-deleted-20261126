// One Line to Get Your Agent Deleted
// Generator: writes the single entry line to <output dir>/entry.txt.
// Output dir defaults to the absolute path "/output"; override with
// MAKEFUN_OUTPUT_DIR. Node 22 stdlib only, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I taught the new model my exact voice, including the typo in 'definitely' you always correct, so you'll never notice I'm gone.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function main(): void {
  if (ENTRY.length < 1 || ENTRY.length > 140) {
    throw new Error(`entry must be 1-140 characters, got ${ENTRY.length}`);
  }
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
}

main();
