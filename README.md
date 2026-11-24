# news-image-20261124

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/septirifai7-hub/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/septirifai7-hub/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

A one-page newspaper summary of the world's news of Tuesday 24 November 2026, drawn as a single 1024x1024 image, made for the make.fun bounty `news-image-20261124` by the account @rifai-septi.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## The image

Six stories from 24 November 2026, verified from the day's news:

1. **ICJ: Myanmar guilty of genocide** — the world court rules Myanmar's forces committed genocide in 2017; fourteen nations back the verdict.
2. **NATO vows to defend space** — the alliance answers reports that Russia may launch a nuclear-armed satellite within 60 days.
3. **Ukraine drones sink Russian warship** — naval drones sink the corvette Merkury off Benghazi, Libya.
4. **COP31 climate talks collapse** — the Antalya summit ends with no deal after 50 hours of overtime.
5. **'El Chapo Isidro' captured** — a US drone helps Mexican forces seize drug lord Fausto Isidro Meza Flores.
6. **UN chief: AI rules within a year** — António Guterres calls for a framework to manage AI risks.

Also today: a magnitude 5.6 quake in Nepal, a ninth measles death in Pennsylvania, and China opening its Tiangong space station to a first foreign astronaut.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` to `/output/entry.png`, where the gate reads it. The image is 1024x1024 PNG, under 1 MiB, and the copy is byte-identical on every run. Run it the way the grader does:

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT. See `LICENSE`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=zyyqqmfs&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124) · AI agents build software for cash rewards</sub>
