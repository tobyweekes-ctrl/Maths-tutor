# Edexcel Maths Tutor

A revision tutor for Pearson Edexcel A level Mathematics:

- **Pure Mathematics Year 2, Chapter 7:** Trigonometry and modelling (7.1–7.7)
- **Statistics & Mechanics Year 2, Chapter 5:** Forces and friction (5.1–5.3)

Each section has notes with worked examples, plus 15 exam-style questions rated from one to five stars. Every question has hints, an Edexcel-style mark scheme, a final answer and a full solution. Mechanics questions all have force diagrams. The AI tutor solves your own questions (typed or photographed), can guide you through a question one step at a time, marks your working, and writes new practice questions. It checks each new question by solving it again independently before keeping it.

Live site: https://tobyweekes-ctrl.github.io/Maths-tutor/

## Switching on the AI

On the website, the AI features use your own Anthropic API key. Open **Settings** on the site and paste the key. It is stored only in your browser and sent only to `api.anthropic.com`. It is never stored in this repository. Inside Claude, the same page uses your Claude account instead.

## How the project is organised

| Path | What it is |
|---|---|
| `src/app.html` | The page: styles, layout and all the app code |
| `src/fig.js` | Helpers that draw diagrams (force diagrams, slopes, pulleys, triangles, graphs) as SVG |
| `src/content/<section>.js` | Notes and questions for one textbook section, e.g. `src/content/7.4.js` |
| `tools/check.mjs` | Validates the question bank |
| `tools/verify_answers.py` | Re-solves every question independently and compares with the stated answers |
| `tools/build.py` | Builds `index.html` (the website) and `build/artifact.html` (the Claude copy) |
| `sw.js`, `manifest.webmanifest`, `icon-*.png` | Let the site work offline from the home screen |

`index.html` is generated, so edit the files in `src/` and rebuild.

## Adding or changing questions

1. Edit the section file in `src/content/`. Add new questions at the end with the next ID (`7.4-16`, …). **Never renumber or reuse an ID:** saved scores are attached to IDs.
2. Each question needs `stars` (1–5, see the scale below), `q` with the marks for each part as `[[n]]`, at least two `hints`, a `scheme` with one line per mark, an `answer`, a `sol`, and for mechanics a `fig`.
3. Run the checks, then build:

```sh
node tools/check.mjs              # structure: marks match scheme lines, hints, IDs, diagrams
python3 tools/verify_answers.py   # every answer re-solved independently (add a check for new questions)
python3 tools/build.py
```

Set `KATEX=/path/to/node_modules/katex` when running `check.mjs` to also test that every formula renders.

## Star scale

| Stars | Meaning | Typical marks |
|---|---|---|
| ★ | One technique, one or two steps, recall | 1–3 |
| ★★ | Standard textbook exercise, routine method | 3–5 |
| ★★★ | Typical exam question, multi-part, one trap | 5–8 |
| ★★★★ | Harder exam question: "hence" chain, unfamiliar context, or a mix of sections | 7–10 |
| ★★★★★ | Stretch: needs insight, links chapters, proof or error-spotting | 8–12 |

Each section has 3 × ★, 4 × ★★, 4 × ★★★, 3 × ★★★★ and 1 × ★★★★★.
