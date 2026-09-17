# Frontend Learning

A consolidated frontend learning archive for HTML, CSS, JavaScript, and React practice.

## Structure

```text
html-css-js-practice/
react-learning/
```

## Source Repositories

This repository consolidates:

- `re-html-css-js`
- `learn-react`

Those standalone repos were merged here to reduce clutter and keep frontend learning work in one place.

## Status

Keep this repo as a learning archive. Polished production-style frontend apps should live in their own focused repositories.

Recent cleanup replaced obvious filler copy in representative HTML and React practice files so the archive reads as completed practice instead of unfinished starter material.

## Navigation

- HTML/CSS/JavaScript practice: `html-css-js-practice/`
- React practice: `react-learning/`
- Extraction plan: [docs/extraction-plan.md](docs/extraction-plan.md)

## Archive Policy

This repo should stay archived unless a new learning batch is being added. It supports growth history; it should not compete with polished app repos.

Next upgrade: extract one polished React project with screenshots, a live deployment URL, and a focused README.

## Run and review

The HTML/CSS/JavaScript examples can be served without installing Node dependencies:

```bash
python -m http.server 8000 --bind 127.0.0.1 --directory html-css-js-practice
```

Open http://127.0.0.1:8000/ and navigate to a lesson. Assets and links are relative to each lesson directory.

Each React exercise has its own `package.json`; there is no root build or shared test suite. Several exercises use the historical `react-scripts` 4 toolchain. Their builds and external API integrations have not been verified on current runtimes; treat them as source examples until their dependencies, error handling, and tests are upgraded. A README cleanup is not evidence that every exercise runs.

## Attribution

The source repositories listed above, course references, image credits, and starter material are retained. This archive documents learning rather than claiming original authorship of a curriculum. For independently maintained application work, use the focused [e-commerce](https://github.com/mrsddq/e-commerce-web-app) and [social media](https://github.com/mrsddq/social-media-web-app) repositories; inspect their actual tests and scope separately.
