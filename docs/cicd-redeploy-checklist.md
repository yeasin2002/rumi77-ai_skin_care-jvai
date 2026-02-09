# CI/CD Manual Redeploy Checklist

Use this checklist for the workflow: `Manual VPS Redeploy` (`.github/workflows/deploy.yml`).

## 1. GitHub Actions Secrets

Go to: `GitHub Repo -> Settings -> Secrets and variables -> Actions -> New repository secret`

Required:

- [ ] `SSH_HOST` = VPS IP (example: `91.108.102.45`)
- [ ] `SSH_USERNAME` = VPS SSH user (example: `root`)
- [ ] `SSH_PRIVATE_KEY` = private key content (`-----BEGIN OPENSSH PRIVATE KEY----- ...`)

Recommended:

- [ ] `SSH_PORT` = `22`
- [ ] `DEPLOY_PATH` = `git@github.com:yeasin2002/rumi77-ai_skin_care-jvai.git`
- [ ] `APP_DIR` = folder on VPS (example: `/root/rumi77-ai_skin_care-jvai`)
- [ ] `PM2_APP_NAME` = app name in PM2 (example: `rumi77-ai-skin-care`)
- [ ] `APP_PORT` = app port (example: `3000`)

## 2. VPS One-Time Setup

- [ ] Node.js is installed on VPS
- [ ] `git` is installed
- [ ] `pnpm` is installed (or allow workflow to install it)
- [ ] `pm2` is installed (or allow workflow to install it)
- [ ] Repo can be cloned from VPS using SSH (`git@github.com:...`)
- [ ] `.env` (production values) exists in `APP_DIR`

## 3. GitHub Access for VPS

- [ ] Add VPS public key to GitHub:
  - [ ] `GitHub -> Settings -> SSH and GPG keys -> New SSH key`
  - [ ] Paste VPS deploy public key
- [ ] Confirm from VPS:
  - [ ] `ssh -T git@github.com`

## 4. First Deployment Run

- [ ] Push workflow changes to `main`
- [ ] Open `Actions` tab
- [ ] Select `Manual VPS Redeploy`
- [ ] Click `Run workflow`
- [ ] Input branch (usually `main`)
- [ ] Confirm run succeeds

## 5. Verify on VPS

- [ ] `pm2 status` shows app online
- [ ] `pm2 logs <PM2_APP_NAME> --lines 100` has no startup errors
- [ ] `curl http://127.0.0.1:<APP_PORT>` returns success
- [ ] App is reachable from browser/domain

## 6. Normal Redeploy Flow (Later)

- [ ] Push code to branch
- [ ] Go to `Actions -> Manual VPS Redeploy`
- [ ] Run workflow with that branch
- [ ] Check `pm2 status` if needed

## 7. Security Checklist

- [ ] Do not keep private keys/passwords in `VPS_INFO.md`
- [ ] Rotate exposed SSH key immediately if it was committed
- [ ] Keep all secrets only in GitHub Secrets / VPS env files
