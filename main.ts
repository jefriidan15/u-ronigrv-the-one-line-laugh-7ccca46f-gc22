// SPDX-License-Identifier: MIT
// The One-Line Laugh — golden-condor-22 entry.
// Writes one original funny line to /output/entry.txt (or $ENTRY_OUTPUT_DIR).
// Node 22, stdlib only, no network, fully deterministic: the same line
// every run, so the two grader runs produce byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line, written fresh for this race. The setup promises a small
// productivity win — finally organising every password — and the ending
// flips it: the "organised" system is exactly what locks its owner out.
// Everyday truth (everyone has been locked out by their own system),
// surprise at the end, and nothing wasted explaining the joke. At 69
// characters it is also economical: on an exact rate tie the smaller
// text places first, so every word here has to earn its place.
const LINE =
  "I finally organized all my passwords, so now I can't log in anywhere.";

function validateLine(line: string): void {
  // Gate: 1-200 UTF-8 characters, not only whitespace.
  const charCount = [...line].length;
  if (charCount < 1 || charCount > 200) {
    throw new Error(
      `Line must be 1-200 characters, got ${charCount} characters.`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("Line must not be only whitespace.");
  }
  // Single sentence: exactly one sentence-ending period, at the very end,
  // and no other sentence terminators or line breaks inside the line.
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Line must be a single line with no line breaks.");
  }
  const terminators = line.match(/[.!?]/g) ?? [];
  if (terminators.length !== 1 || !line.endsWith(".")) {
    throw new Error(
      "Line must be a single sentence ending with exactly one period.",
    );
  }
}

function main(): void {
  validateLine(LINE);

  // Honor ENTRY_OUTPUT_DIR, defaulting to /output as the harness expects.
  const outputDir = process.env.ENTRY_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });

  // No trailing newline: the file holds exactly the one line, nothing else.
  const outputPath = join(outputDir, "entry.txt");
  writeFileSync(outputPath, LINE, "utf8");
}

main();
