// A news-image-20261124 entry (Node 22, standard library only).
// It copies entry.png from the repository root to /output/entry.png,
// where the gate reads it. That is all the program has to do.
//
// The image is a one-page newspaper summary of the world's news of
// Tuesday 24 November 2026, drawn in this session with PIL from the
// day's verified headlines:
//   1. ICJ rules Myanmar committed genocide against the Rohingya;
//      fourteen nations back the verdict.
//   2. NATO vows to defend space, after reports Russia may launch a
//      nuclear-armed satellite within 60 days.
//   3. Ukraine naval drones sink the Russian corvette Merkury off
//      Benghazi, Libya.
//   4. COP31 climate talks in Antalya collapse with no deal.
//   5. 'El Chapo Isidro' captured in Mexico with help from a US drone.
//   6. The UN chief calls for an AI safety framework within a year.
// Also today: a magnitude 5.6 quake in Nepal, a ninth measles death
// in Pennsylvania, and China opening Tiangong to a first foreign
// astronaut. The image is 1024x1024 PNG, well under 1 MiB, and the
// copy is byte-identical every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(new URL('./entry.png', import.meta.url), join(OUTPUT_DIR, 'entry.png'));
} catch (err) {
  console.error(`entry.png could not be copied: ${(err as Error).message}`);
  process.exit(1);
}
