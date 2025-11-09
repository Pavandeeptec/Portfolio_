# 🚀 Deployment Guide

## Step 1: Initialize Git Repository

Run these commands in your terminal:

```bash
git init
git add .
git commit -m "Initial commit: AI Portfolio website"
```

## Step 2: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click the **+** icon (top right) → **New repository**
3. Repository name: `ai-portfolio` (or any name you like)
4. Description: "My AI Developer Portfolio - Built with Next.js"
5. Keep it **Public**
6. **DO NOT** initialize with README (we already have one)
7. Click **Create repository**

## Step 3: Push to GitHub

GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/Pavandeeptec/ai-portfolio.git
git branch -M main
git push -u origin main
```

**Note:** Replace `ai-portfolio` with your actual repository name if different.

## Step 4: Deploy to Vercel

### Option A: Using Vercel Website (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up** → Choose **Continue with GitHub**
3. Authorize Vercel to access your GitHub
4. Click **Add New** → **Project**
5. Find your `ai-portfolio` repository
6. Click **Import**
7. Vercel auto-detects Next.js settings
8. Click **Deploy**
9. Wait 1-2 minutes ⏳
10. **Done!** 🎉 Your site is live!

### Option B: Using Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts and you're done!

## Step 5: Get Your Live URL

After deployment, Vercel gives you:
- **Live URL:** `https://your-project.vercel.app`
- **Automatic HTTPS**
- **Auto-deploys** on every Git push

## 🎯 Custom Domain (Optional)

1. Buy domain from Namecheap, GoDaddy, etc.
2. In Vercel dashboard → Your Project → Settings → Domains
3. Add your domain
4. Update DNS records (Vercel shows you how)
5. Wait 24-48 hours for DNS propagation

## 🔄 Future Updates

Every time you make changes:

```bash
git add .
git commit -m "Update: description of changes"
git push
```

Vercel automatically redeploys! 🚀

## 📊 Monitor Your Site

- **Vercel Dashboard:** See deployments, analytics, logs
- **GitHub:** Track your code changes
- **Web3Forms Dashboard:** View contact form submissions

## ✅ Checklist

- [ ] Git initialized
- [ ] Code pushed to GitHub
- [ ] Deployed to Vercel
- [ ] Site is live
- [ ] Contact form tested
- [ ] Shared on LinkedIn/Twitter

---

**Need help?** Check:
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
