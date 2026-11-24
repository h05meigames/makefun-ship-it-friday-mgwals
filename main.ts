import { mkdirSync, writeFileSync } from "node:fs";

// Ship It Friday (u-mgwals-ship-it-friday-30bd407a): one line — the funniest
// git commit message an AI coding agent writes right before it breaks
// production on a Friday.
const entry =
  "feat: shipped the auth rewrite I only skimmed at 4:59pm Friday, then muted every prod alert so nothing can ruin the weekend";

// Gate: entry.txt must be UTF-8 text of 1 to 159 characters. Count Unicode
// code points (so a multi-byte character counts once) and fail loudly
// instead of writing an out-of-range entry.
const length = [...entry].length;
if (length < 1 || length > 159) {
  throw new Error(`entry must be 1-159 characters, got ${length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
process.stdout.write(entry);
