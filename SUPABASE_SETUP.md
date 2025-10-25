# Supabase Setup Guide

This guide will help you set up Supabase for your BePix Next.js application.

## 1. Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in to your account
3. Click "New Project"
4. Choose your organization
5. Enter project details:
   - **Name**: `bepix-app` (or your preferred name)
   - **Database Password**: Create a strong password
   - **Region**: Choose the closest region to your users
6. Click "Create new project"

## 2. Get Your Project Credentials

Once your project is created, go to **Settings > API** in your Supabase dashboard:

### Required Environment Variables

Copy these values to your `.env.local` file:

```bash
# Supabase Project URL
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co

# Supabase Anon Key (Public Key)
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here

# Supabase Service Role Key (Private Key - Server-side only)
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

## 3. Install Supabase Dependencies

```bash
npm install @supabase/supabase-js
```

## 4. Create Supabase Client

Create `lib/supabase.ts`:

```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

## 5. Environment Setup

1. Copy `env.template` to `.env.local`:
   ```bash
   cp env.template .env.local
   ```

2. Fill in your actual Supabase credentials in `.env.local`

3. Never commit `.env.local` to version control (it's already in `.gitignore`)

## 6. Common Use Cases for BePix

### Authentication
- User registration and login
- Social authentication (Google, GitHub)
- Password reset functionality

### Database
- Contact form submissions
- Newsletter subscriptions
- Project inquiries
- User profiles

### Storage
- File uploads for project assets
- User profile images
- Document storage

### Real-time Features
- Live chat support
- Real-time notifications
- Collaborative features

## 7. Security Best Practices

- ✅ **Never expose** `SUPABASE_SERVICE_ROLE_KEY` on the client side
- ✅ **Use Row Level Security (RLS)** for data protection
- ✅ **Validate** all user inputs
- ✅ **Use environment variables** for all sensitive data
- ✅ **Enable** email confirmations for user registration

## 8. Next Steps

1. Set up your database schema
2. Configure authentication providers
3. Set up Row Level Security policies
4. Test your integration
5. Deploy to production

## 9. Useful Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Next.js + Supabase Guide](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [Supabase Dashboard](https://supabase.com/dashboard)
- [Supabase Community](https://github.com/supabase/supabase/discussions)

## 10. Support

If you need help with Supabase integration:
- Check the [Supabase Documentation](https://supabase.com/docs)
- Join the [Supabase Discord](https://discord.supabase.com)
- Create an issue in this repository

