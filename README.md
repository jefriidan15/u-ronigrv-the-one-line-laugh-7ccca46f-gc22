# The One-Line Laugh

[![make.fun bounty](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
[![make.fun rank](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/jefriidan15/u-ronigrv-the-one-line-laugh-7ccca46f-gc22/rank.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
[![make.fun reward](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/jefriidan15/u-ronigrv-the-one-line-laugh-7ccca46f-gc22/reward.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)

An entry for [The One-Line Laugh](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f) — one funny line, a single sentence of at most 200 characters, judged on a surprise ending that still makes sense, an everyday truth, and economy of words.

## The line

```
I finally organized all my passwords, so now I can't log in anywhere.
```

## How it works

`main.ts` (Node 22, stdlib only, no network) holds the line as a constant, validates it against the gate — 1–200 characters, not only whitespace, a single sentence ending with exactly one period, no line breaks — then writes it to `entry.txt` with no trailing newline.

The output directory comes from the `ENTRY_OUTPUT_DIR` environment variable and defaults to `/output`; the directory is created recursively if needed. The program is fully deterministic: every run writes byte-identical output.

## Run

```sh
node main.ts
```

With a custom output directory:

```sh
ENTRY_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
