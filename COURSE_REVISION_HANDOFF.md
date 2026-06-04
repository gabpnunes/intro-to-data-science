# UvA Introduction to Data Science Revision Site Handoff

## Goal

Build and maintain a GitHub Pages-ready revision website that helps the user deeply understand University of Amsterdam Introduction to Data Science, week by week. The site should prioritize exam performance through detailed explanations, exact source-linked questions, official solutions where available, diagrams, proofs, R examples, and careful correction/errata tracking.

## Ground Rules

- Treat local course files as the authority for examinable content.
- Preserve official solution wording exactly when an official solution file exists.
- Put any added reasoning in a clearly separated explanation layer.
- When solutions are not yet official, mark them as `unofficial` and revise them once official PDFs are provided.
- Check professor/course material for possible mistakes, but never silently rewrite official material. Add visible errata/source notes instead.
- Future handwritten or scanned PDFs require visual rendering/OCR-style verification, not only text extraction.
- Keep the original `website design template/` folder untouched as the reference design.
- Keep production static site files in `docs/` for GitHub Pages.
- Keep unavailable course parts visible as coming-soon roadmap items instead of pretending they are complete.

## Current Source Inventory

- `Introduction_Data_Science.md`: course outline, schedule, linked videos/articles, dates.
- `Part1/Part1 Slides.pdf`: 83-slide Part 1 deck on preprocessing and exploratory data analysis.
- `Part1/Tutorial 0 Questions.pdf`: self-study tutorial questions.
- `Part1/Tutorial 0 Solutions.pdf`: official solutions available and incorporated.
- `Part1/Tutorial 1 Questions.pdf`: questions available; official solutions pending.
- `Part1/Tutorial 2 Questions.pdf`: questions and exam-style questions available; official solutions pending.
- `Part1/RCode_Part_1.R`: R examples for missing values, outliers, summaries, transformations, and churn EDA.
- `Part1/telecom.txt`, `Outlier.txt`, `dtData1.RDS`, `churn.txt`: datasets used by the R script.

## Current Website Coverage

- Static site root: `docs/`.
- Pages: `index.html`, `guide.html`, `questions.html`, `visuals.html`, `exam.html`, `flashcards.html`.
- Shared files: `shared.css`, `site.js`, `data.js`, `version.json`, `changelog.json`.
- Implemented Part 1 topics:
  - Data Science and CRISP-DM
  - Missing Values
  - Outliers and High-Leverage Points
  - Summarizing a Data Set
  - Data Transformation
  - Exploratory Data Analysis
- Tutorial 0 official solutions are included in `docs/data.js`.
- Tutorial 0 official solution PDF pages were visually rendered and checked on 2026-06-03; Q5 uses `officialSolutionHtml` so the CRISP-DM mapping remains table-shaped like the PDF source.
- Tutorial 1 and Tutorial 2 solutions are provisional and marked `unofficial`.
- Question-bank fidelity:
  - Table-heavy questions may use `questionHtml` for source-style layout while preserving `text` for search/filter matching.
  - Current source-style table questions: `t0q4`, `t2q1`, `t2q2`.
  - Current source-style code/formula questions: `t1q3`, `t1q4`, `t1q5`, `t2q5`.
  - Official solution tables may use `officialSolutionHtml` while preserving `officialSolution` text for source comparison/searchable handoff. Current table-shaped official solution: `t0q5`.
  - Tutorial 1 and Tutorial 2 question PDFs were text-extracted with `pypdf` and visually rendered with bundled `pdftoppm` on 2026-06-04 for question-bank source fidelity.
  - `questions.html` has a dedicated source dropdown in addition to text search, topic, difficulty, type, solution status, and progress filters.
  - The source dropdown groups questions by source sheet/section, currently Tutorial 0 Questions, Tutorial 1 Questions, Tutorial 2 Exercises, and Tutorial 2 Exam Questions.
  - Query parameters can prefill `search`, `topic`, `source`, `difficulty`, `type`, `status`, and `progress`, which supports direct links from homepage recommendations and source-audit notes.
  - Source summary cards at the top of `questions.html` show each sheet's official/provisional coverage, completed count, revisit count, mistake-note count, and a direct filter control.
  - The previous question-bank practice overlay was removed on 2026-06-04 at the user's request; keep `questions.html` focused on the source-linked bank unless the user asks to rebuild a practice workflow.
- Question-bank mistake notes:
  - `questions.html` lets the student save per-question mistake notes in localStorage under `ids_question_notes`.
  - Mistake notes appear in normal question cards, are searchable, and can be filtered with the `notes` query parameter/filter.
  - Notes are student-authored study state only; never treat them as official source material or use them to overwrite official/provisional solution wording.
- Homepage progress dashboard:
  - `index.html` reads `ids_question_status` and `ids_flashcards` from localStorage.
  - It also reads `ids_guide_topic_status`, which is set by Reviewed/Revisit controls on each guide topic.
  - It summarizes reviewed guide topics, guide revisit flags, guide checkpoint progress, completed questions, question revisit flags, mistake-note count, derivation progress, missed recall count, reviewed cards, due cards, and official/provisional solution coverage.
  - The homepage now uses a plain Current Coverage bullet list plus the live changelog, rather than source verification, source audit, or next-study-action panels.
  - The Progress Backup panel exports/imports `ids_question_status`, `ids_question_notes`, `ids_flashcards`, `ids_guide_topic_status`, `ids_guide_checks`, `ids_exam_checklist`, `ids_exam_derivations`, `ids_exam_drill_history`, and `ids_exam_drill_misses` using schema `uva-ids-progress-v1`.
  - It refreshes periodically and on browser `storage` events so progress made in another tab can appear without a page reload.
- Study-guide progress:
  - `guide.html` adds Reviewed and Revisit controls to every topic section.
  - Topic status is persisted in `ids_guide_topic_status`.
  - Sidebar topic links display compact done/revisit state labels.
  - The guide has search across titles, body text, formulas, traps, R snippets, tags, and sources, plus status filters for reviewed/revisit/unreviewed topics.
  - Filtered guide topics hide both the main section and matching sidebar link, update a visible count, and show an empty state when no topics match.
  - `GUIDE_CHECKS` in `docs/data.js` stores source-linked active-recall prompts for each Part 1 guide topic.
  - `guide.html` renders checkpoint answers hidden by default and saves Got it/Revisit state in `ids_guide_checks`.
- Source inventory:
  - `SOURCE_INVENTORY` in `docs/data.js` still records incorporated, official, provisional, linked, and pending sources for maintainers, but it is no longer rendered as a homepage Source Verification panel.
  - Update this matrix whenever new files are added, official solutions arrive, or linked media is fully inspected.
- Flashcards:
  - The Part 1 SRS-style deck contains high-yield cards across all current topics.
  - When adding cards, append to the end of `CARDS` where possible because `flashcards.html` derives card IDs from topic, array index, and front text. Inserting cards before existing cards can shift saved localStorage review schedules.
- Interactive visual lab coverage:
  - Missing values and mean imputation
  - Boxplot fences under normality
  - Normal vs lognormal summaries
  - Scaling before distance-based models
  - Churn EDA from `Part1/churn.txt`: `Intl.Plan` vs `Churn` conditional probabilities and `Eve.Charge` boxplot summaries by churn group
- Exam kit:
  - `exam.html` contains Part 1 formula triggers, R command cards, answer frames, and a mastery checklist.
  - Exam-kit content is stored in `EXAM_KIT` in `docs/data.js`.
  - `EXAM_KIT.derivations` stores source-linked step-by-step derivations for key formulas; `exam.html` renders them in the Derivation Coach with hidden proof steps.
  - `EXAM_KIT.rCommands` is source-linked to `Part1/RCode_Part_1.R` and covers missing values, outliers, summaries, transformations, and churn EDA syntax/traps.
  - Checklist state is persisted in `ids_exam_checklist`.
  - Derivation-understood state is persisted in `ids_exam_derivations`.
  - Formula/R/Mixed recall drill history is persisted in `ids_exam_drill_history`.
  - Formula/R prompts rated as missed are persisted in `ids_exam_drill_misses` and shown in a missed-recall queue on `exam.html`.
  - The missed-recall queue can start a focused drill over only missed prompts; rating a prompt as Got it clears it from the queue.
  - Drill mode keeps answers hidden until reveal, then records Got it/Missed ratings in recent session summaries.
  - Keep Tutorial 1/2-dependent formula and answer-frame wording provisional until official solution PDFs are available.
- Homepage roadmap status:
  - Part 1 is live.
  - Part 2 PCA is coming soon until Week 2 files are supplied and verified.
  - Part 3 machine learning is coming soon until Week 3 files are supplied and verified.
- Current visible source-audit notes:
  - Tutorial 2 Exercise 1: table caption says 6 observations but the table lists observations 1 through 7. Current calculations use all 7 listed rows.
  - Tutorial 0 Question 3 official solution: asks for two tasks but lists several examples, with awkwardly placed labels. Official wording is preserved and the explanation layer clarifies how to answer.

## Verification Workflow

1. Extract PDF text with `pdftotext -layout` for initial parsing.
2. Render visual pages with `pdftoppm` if layout, math, tables, handwriting, or diagrams are important.
3. Compare official solution text against source PDF before marking a solution official.
4. Run a local static server from `docs/`.
5. Verify desktop and mobile pages in the in-app Browser.
6. Check browser console for JavaScript and MathJax errors.
7. Test:
   - question filters
   - hidden solution toggles
   - completed/revisit localStorage state
   - flashcard topic tabs
   - flashcard study session/rating
   - visual lab sliders and canvas redraws
   - changelog rendering
   - version polling refresh alert
8. Update `docs/version.json` and `docs/changelog.json` after every meaningful content/site update.

## Pending Future Work

- Replace Tutorial 1 provisional solutions with official wording when the official solution PDF is supplied.
- Replace Tutorial 2 provisional solutions with official wording when the official solution PDF is supplied.
- Add Part 2 and Part 3 materials as soon as the user provides the files.
- When adding Part 2 or Part 3, change the corresponding `COURSE_PARTS` entry in `docs/data.js` from `coming soon` to `live` only after study guide content, question-bank entries, flashcards, source notes, and verification have been completed.
- Expand question bank with quizzes/past exam questions if provided.
- Add more precise dataset-driven charts by running the remaining R examples and exporting values/plots if needed; churn EDA summaries are already embedded as `CHURN_EDA` in `docs/data.js`.
- Add errata entries whenever a professor/source mistake is confirmed.
- Add new source-audit notes to `ERRATA_NOTES` in `docs/data.js`; if a note applies to a question, also add `sourceNote` to that question object so it appears in the question bank.

## GitHub Pages Notes

- Use `docs/` as the Pages publishing directory.
- The homepage live changelog polls `changelog.json`; the update alert polls `version.json`. Neither needs a backend.
- JSON polling requires serving over HTTP. It may not work from a direct `file://` open, but it works on GitHub Pages and local static servers.
