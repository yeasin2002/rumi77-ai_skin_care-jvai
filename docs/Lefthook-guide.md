# Lefthook — Quick Reference & Migration Guide

A practical, copy-paste ready guide to understand Lefthook, why it replaces Husky + lint-staged, and how to migrate cleanly.

---

## Table of Contents

- [What is Lefthook](#what-is-lefthook)
- [How to Use Lefthook](#how-to-use-lefthook)
  - [Install](#install)
  - [Create lefthook.yml](#create-lefthookyml)
  - [Placeholders and Options](#placeholders-and-options)
  - [Install Git Hooks](#install-git-hooks)
  - [Run Hooks Manually](#run-hooks-manually)
  - [Local Overrides](#local-overrides)
- [Why Lefthook is Better than Husky + lint-staged](#why-lefthook-is-better-than-husky--lint-staged)
  - [Comparison Table](#comparison-table)
- [Migration Guide](#migration-guide)
  - [Step-by-Step Migration](#step-by-step-migration)
  - [Common Conversions](#common-conversions)
  - [Migration Checklist](#migration-checklist)
- [Monorepo and CI Notes](#monorepo-and-ci-notes)
- [Troubleshooting](#troubleshooting)
- [Useful Commands](#useful-commands)

---

## What is Lefthook

Lefthook is a Git hook manager. It lets you define Git hooks like `pre-commit`, `pre-push`, and `commit-msg` in a single config file and run scripts automatically during Git actions.

Instead of writing shell scripts inside `.git/hooks` or `.husky`, you describe everything in `lefthook.yml`. Lefthook installs real Git hooks and executes your commands fast and in parallel.

**Typical use cases:**

- Run ESLint or Prettier before commit
- Run tests before push
- Enforce commit message rules
- Run any custom script on staged files

---

## How to Use Lefthook

### Install

For Node projects:

```bash
npm install --save-dev lefthook
```

### Create lefthook.yml

Create a `lefthook.yml` file at the project root.

Example pre-commit hook:

```yaml
pre-commit:
  parallel: true
  commands:
    eslint:
      glob: '*.ts'
      run: npx eslint --fix {staged_files}
    prettier:
      glob: '*.{js,ts,json,md}'
      run: npx prettier --write {staged_files}
```

This will:

- Run ESLint and Prettier before every commit
- Only on staged files
- In parallel

### Placeholders and Options

Common things you will use:

- `{staged_files}` — Automatically replaced with staged files that match glob
- `glob` — Limits which files a command runs on
- `parallel: true` — Runs commands at the same time
- `run` — Any shell command

Lefthook doesn't care what language or tool you use.

### Install Git Hooks

After creating the config, install hooks:

```bash
npx lefthook install
```

This writes actual Git hooks into `.git/hooks`.

**Optional but recommended for teams:**

```json
{
  "scripts": {
    "prepare": "lefthook install"
  }
}
```

Now hooks auto-install after `npm install`.

### Run Hooks Manually

Useful for testing or CI:

```bash
npx lefthook run pre-commit
```

You can run any hook this way.

### Local Overrides

Create a `lefthook-local.yml` file and add it to `.gitignore`.

Use it for:

- Skipping heavy checks locally
- Personal overrides
- Machine-specific commands

This file doesn't affect the team.

---

## Why Lefthook is Better than Husky + lint-staged

Husky + lint-staged works, but it's layered and fragile over time.

Lefthook is simpler and closer to how Git hooks were always meant to work.

**Key advantages:**

- One tool instead of two
- Single config file
- Faster startup and parallel execution
- Language-agnostic
- Better monorepo support
- Fewer npm lifecycle hacks
- Clear and maintainable setup

### Comparison Table

| Topic            | Husky + lint-staged      | Lefthook         |
| ---------------- | ------------------------ | ---------------- |
| Tools required   | 2                        | 1                |
| Config location  | `.husky`, `package.json` | `lefthook.yml`   |
| Parallel jobs    | Manual                   | Built-in         |
| Staged files     | `lint-staged`            | `{staged_files}` |
| Monorepo support | Okay                     | Strong           |
| Language support | Node-first               | Any              |
| Hook install     | npm lifecycle            | Direct Git hooks |

---

## Migration Guide

### Step-by-Step Migration

#### 1. Remove Husky and lint-staged

```bash
npm uninstall husky lint-staged
rm -rf .husky
```

Remove:

- `lint-staged` config from `package.json`
- Old Husky `prepare` script if present

#### 2. Install Lefthook

```bash
npm install --save-dev lefthook
```

#### 3. Convert config

**Before (lint-staged):**

```json
{
  "lint-staged": {
    "*.ts": ["eslint --fix", "prettier --write"]
  }
}
```

**After (Lefthook):**

```yaml
pre-commit:
  parallel: true
  commands:
    eslint:
      glob: '*.ts'
      run: npx eslint --fix {staged_files}
    prettier:
      glob: '*.ts'
      run: npx prettier --write {staged_files}
```

#### 4. Install hooks

```bash
npx lefthook install
```

#### 5. Test

```bash
git add .
git commit -m "test lefthook"
```

If a job fails, the commit is blocked.

### Common Conversions

**lint-staged:**

```json
{
  "*.js": "eslint --fix",
  "*.{json,md}": "prettier --write"
}
```

**Lefthook:**

```yaml
pre-commit:
  commands:
    eslint:
      glob: '*.js'
      run: npx eslint --fix {staged_files}
    prettier:
      glob: '*.{json,md}'
      run: npx prettier --write {staged_files}
```

### Migration Checklist

- [ ] Remove `.husky` folder
- [ ] Uninstall `husky` and `lint-staged`
- [ ] Create `lefthook.yml`
- [ ] Replace `lint-staged` with `{staged_files}`
- [ ] Run `lefthook install`
- [ ] Commit the config

---

## Monorepo and CI Notes

Lefthook works well in monorepos:

- Use globs and workspace-aware commands
- Prefer parallel jobs for speed

In CI, run scripts directly or use:

```bash
npx lefthook run pre-commit
```

---

## Troubleshooting

- Use `npx` if binaries are not found
- Use `git commit --no-verify` only when necessary
- Test hooks on Windows if your team uses it
- Keep heavy tasks out of pre-commit when possible

---

## Useful Commands

**Install Lefthook:**

```bash
npm install --save-dev lefthook
```

**Install hooks:**

```bash
npx lefthook install
```

**Run hook manually:**

```bash
npx lefthook run pre-commit
```

**Remove Husky:**

```bash
npm uninstall husky lint-staged
rm -rf .husky
```

---

## Final Note

Husky + lint-staged was a good solution for years. Lefthook is simpler, faster, and easier to maintain, especially as projects and teams grow.

If your repo is growing, Lefthook is the cleaner long-term choice.
