# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository overview

This repo holds standalone static HTML demo pages for a "Session 2" prompt-engineering exercise (course: ai/entp6314, UTD Fall 2026). There is no build system, package manager, server, or test suite — each page is a single self-contained `index.html` file with inline `<style>` and `<script>` blocks and no external dependencies.

- [Session2_BadPrompt/index.html](Session2_BadPrompt/index.html) — a "Tip Splitter" calculator built from a vague/minimal prompt. Vanilla JS: bill amount input, preset/custom tip percentage buttons, round-up-to-dollar checkbox, a people stepper, and a live-updating results panel.
- [Session2_DetailedPrompt/index.html](Session2_DetailedPrompt/index.html) — an "AHT STORE" import/shopping-service landing page (in Spanish) built from a detailed prompt. Vanilla JS tab navigation between five sections (store catalog, luxury items, importación, personal shopper, travelers network) plus a product category filter.

The two directories exist side by side to compare output quality between a bare-bones prompt and a detailed prompt given to an AI coding assistant — they are unrelated apps, not two versions of the same app.

## Working with this repo

- Each `index.html` is fully self-contained (HTML + CSS + JS in one file). To preview a page, just open the file directly in a browser — no dev server, install step, or build command exists or is needed.
- There is no linter, formatter, or test runner configured. Do not invent build/test commands.
- When editing, keep the single-file structure (don't split into separate CSS/JS files or introduce a bundler) unless the user asks for that explicitly.
