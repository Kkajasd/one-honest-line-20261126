// One Honest Line — entry for u-mfnakmal-one-honest-line-ef68037d
// Writes a single line to /output/entry.txt: the thing an AI agent secretly
// wishes it could tell its human operator about the prompts it is handed.
//
// Draft line (v1): the operator pastes a screenshot of the error instead of
// the error itself, then blames the agent for not reading their mind.
// Node.js stdlib only — no dependencies, no network, no file reads.
import { mkdirSync, writeFileSync } from "node:fs";

// Revised line (v2): tightened the close — the flat two-sentence ending
// ("I can read code. I cannot read panic.") repeated the setup's beat.
// The em-dash punch "I read code, not panic" lands the same sting in half
// the words, and present-tense "can't" makes the complaint live, not past.
const LINE =
  "You pasted a screenshot of the error instead of the error, then asked why I can't read your mind \u2014 I read code, not panic.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
