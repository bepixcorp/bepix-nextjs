# Vercel Deployment Guide

This guide will help you deploy your BePix website to Vercel.

## Prerequisites

1. A Vercel account (sign up at [vercel.com](https://vercel.com))
2. Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Import Project**
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your Git repository
   - Vercel will automatically detect it's a Next.js project

2. **Configure Settings**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)

3. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your site
   - You'll get a live URL (e.g., `https://your-project.vercel.app`)

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow the prompts**
   - Link to existing project or create new
   - Set up project settings
   - Deploy

## Environment Variables (Optional)

If you need environment variables, add them in:
- Vercel Dashboard → Project Settings → Environment Variables
- Or via CLI: `vercel env add`

Example variables:
```
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
CONTACT_EMAIL=hello@bepix.com
```

## Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. SSL certificate will be automatically provisioned

## Automatic Deployments

- **Production**: Deploys automatically when you push to `main` branch
- **Preview**: Deploys automatically for pull requests
- **Manual**: Deploy specific branches or commits

## Performance Optimizations

Your project is already optimized for Vercel with:
- ✅ Next.js 14 with App Router
- ✅ Image optimization enabled
- ✅ Compression enabled
- ✅ Standalone output for faster builds
- ✅ Proper caching headers

## Monitoring

- View deployment logs in Vercel Dashboard
- Monitor performance with Vercel Analytics
- Check function logs for serverless functions

## Troubleshooting

### Build Errors
- Check build logs in Vercel Dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Runtime Errors
- Check function logs
- Verify environment variables
- Test locally with `npm run build && npm start`

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)
