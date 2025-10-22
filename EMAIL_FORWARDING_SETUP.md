# Email Forwarding Setup Guide - GitHub Secrets Deployment

This document provides minimal instructions for setting up email forwarding functionality using GitHub Secrets for the Brown CSSA website.

## 📋 Current Status

- ✅ **Newsletter Subscription**: Uses EmailJS (configured)
- ✅ **Contact Form**: Now sends emails via EmailJS
- ✅ **Environment Variables**: Replaced hardcoded values
- ⚠️ **GitHub Secrets**: Need to be configured for production

## 🚀 Quick Setup (5 Steps)

### Step 1: Get EmailJS Credentials
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/admin)
2. Copy these values:
   - **Service ID** (from Email Services)
   - **Template ID** (from Email Templates) 
   - **Public Key** (from Account → General)

### Step 2: Configure GitHub Secrets
1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Add these repository secrets:
   ```
   EMAILJS_SERVICE_ID=your_service_id
   EMAILJS_TEMPLATE_ID=your_template_id
   EMAILJS_PUBLIC_KEY=your_public_key
   RECIPIENT_EMAIL=your_email@domain.com
   ```

### Step 3: Update GitHub Actions Workflow
Add environment variables to your build workflow:
```yaml
- name: Build
  run: npm run build
  env:
    VITE_EMAILJS_SERVICE_ID: ${{ secrets.EMAILJS_SERVICE_ID }}
    VITE_EMAILJS_TEMPLATE_ID: ${{ secrets.EMAILJS_TEMPLATE_ID }}
    VITE_EMAILJS_PUBLIC_KEY: ${{ secrets.EMAILJS_PUBLIC_KEY }}
    VITE_RECIPIENT_EMAIL: ${{ secrets.RECIPIENT_EMAIL }}
```

### Step 4: Create EmailJS Templates
**Newsletter Template:**
- Subject: `New Newsletter Subscription - Brown CSSA`
- Content:
  ```
  New newsletter subscription received!
  
  Subscriber Email: {{subscriber_email}}
  
  {{message}}
  
  ---
  This is an automated message from the Brown CSSA website.
  ```

**Contact Form Template:**
- Subject: `New Contact Form Submission - Brown CSSA`
- Content:
  ```
  New contact form submission received!
  
  Name: {{name}}
  Email: {{email}}
  Message: {{message}}
  
  ---
  This is an automated message from the Brown CSSA website.
  ```

### Step 5: Deploy and Test
1. Push changes to trigger GitHub Actions
2. Test newsletter subscription on live site
3. Test contact form on live site
4. Check email inbox for notifications

## 🔧 Required Environment Variables

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_RECIPIENT_EMAIL=your_email@domain.com
VITE_CONTACT_RECIPIENT_EMAIL=contact@domain.com  # Optional
```

## 🛠️ Code Changes Made

### Index.tsx (Newsletter)
- ✅ Replaced hardcoded values with environment variables
- ✅ Added configuration validation
- ✅ Added error handling

### Contact.tsx (Contact Form)
- ✅ Added EmailJS import
- ✅ Implemented actual email sending
- ✅ Added error handling with user feedback

## 🔒 Security Notes

- ✅ No hardcoded credentials in source code
- ✅ Environment variables properly configured
- ✅ GitHub Secrets used for sensitive data
- ⚠️ EmailJS free tier: 200 emails/month limit

## 🆘 Troubleshooting

**Emails not sending?**
- Check GitHub Secrets are set correctly
- Verify EmailJS service is active
- Check monthly email limit (200/month free)

**"Insufficient authentication scopes" error?**
- Reconnect Gmail service in EmailJS dashboard
- Grant all requested permissions

**Environment variables undefined?**
- Ensure GitHub Actions workflow includes env variables
- Check secret names match exactly

## 📞 Support

- **EmailJS Docs**: https://www.emailjs.com/docs/
- **Project Contact**: brown_cssa@hotmail.com

---

**Note**: This setup uses GitHub Secrets for secure deployment. All sensitive data is stored in GitHub repository secrets, not in the codebase.
