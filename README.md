# Maths 12 Study (Lahore Board)

A study website for **Class 12 Mathematics** (Punjab Curriculum and Textbook Board, used by BISE Lahore), built for the **2026–27 syllabus**. The portions that the board removed from the syllabus are not included anywhere on the site.

## What it does

- **Three modes, switchable at any moment** (header switch or keys `1` `2` `3`), without reloading or losing your place:
  - **Review**: the solution steps, with explanations only on genuinely tricky steps.
  - **Study**: every step with a short reason; tap a step for the full explanation.
  - **Deep study**: before the question, a guided path through every topic it uses, starting from the basics (with examples and common mistakes); then a fully explained solution.
- **Study layout (desktop)**: solution steps on the left, the topics used by the question on the right. Open the topics you need, or press **I know this** to skip one. Click any step for *How did we get this?*
- **Practice mode** (`P`): hides the solution so you can work in your notebook, with hints, one-step-at-a-time reveal and the topic panel still available.
- **Concept library**: every topic from basic algebra and trigonometry up to each unit, adapted to the current mode.
- **Quiz**: board-style MCQs with explanations, including a 20-question quiz that follows the paper pattern's unit split, unit quizzes, quick checks per question, and a "revise my weak topics" mode.
- **Mock paper**: a full paper on the board pattern built from the included exercise questions, printable, with links to each solution.
- Progress (done, starred, known topics, quiz history) is saved in the browser.

## Run it

It is a static site with no build step. Serve the folder with any static server, for example:

```powershell
python -m http.server 5173
```

then open <http://localhost:5173>. Opening `index.html` directly from disk also works in most browsers.

## Project layout

| Path | What it is |
| --- | --- |
| `index.html` | Page shell and script order |
| `assets/js/core.js` | Content parser and the Markdown + KaTeX renderer |
| `assets/js/plot.js` | Small SVG graph plotter used by the solutions |
| `assets/js/app.js` | State, routing and all views (home, unit, question, concepts, quiz, mock paper) |
| `assets/css/app.css` | Dark theme and animations |
| `assets/vendor/katex/` | KaTeX (math rendering), vendored so the site works offline |
| `content/units.js` | Unit and exercise list |
| `content/foundations.js` | Basic concepts shared by all units |
| `content/uNN.js` | One file per unit: concepts, solved questions and MCQs |
| `tools/validate.mjs` | Checks every content file: references, prerequisite cycles, plots and KaTeX |
| `tools/check-excluded.mjs` | Checks that no removed exercise question or topic appears anywhere |

### Content format

Content files use a small line-based format inside `String.raw` templates, so LaTeX needs no escaping:

```text
#Q 1.1 3                      exercise and question number
Q: Find an equation of ...    the question
T: u1-quad-from-graph         topics (concept ids) shown on the right
S: Roots -1 and -2 give ...   a solution step (shown in every mode)
W: A root x = r gives ...     why this step works (Study mode, tricky steps in Review)
D: ...                        extra detail for "How did we get this?"
C: u1-quad-factored           concept used by this step
!:                            marks the step as tricky
P: {"x":[-3,3], "fn":[...]}   a graph (JSON spec for plot.js)
A: y = (x+1)(x+2)             final answer
```

Concepts use `#C id Title` with `pre:` (prerequisites), `R:` (summary), `F:` (formulas), `B:` (explanation), `X:` (deeper detail), `E:` (examples) and `M:` (common mistakes). MCQs use `#M` with `Q:`, `O:` options (`O*:` marks the correct one) and `E:` (explanation).

Check content after editing:

```powershell
node tools/validate.mjs
node tools/check-excluded.mjs
```

## Sources

- Textbook: Mathematics 12 (new syllabus), Punjab Curriculum and Textbook Board.
- Removed syllabus: the board's notice of excluded content for 2026–27.
- Paper pattern: the board's 2026–27 Mathematics paper pattern.

All solutions and explanations on this site were written for it. Where the printed book has a misprint, the question page says so and solves the intended question.
