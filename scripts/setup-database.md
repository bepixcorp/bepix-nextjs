# Database Setup Instructions

## 1. Create the Contact Submissions Table

Run this SQL in your Supabase SQL Editor:

```sql
-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(255),
  company VARCHAR(255),
  website TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous users to insert contact submissions
CREATE POLICY "Allow anonymous contact submissions" ON contact_submissions
  FOR INSERT TO anon
  WITH CHECK (true);

-- Create policy to allow authenticated users to read all submissions
CREATE POLICY "Allow authenticated users to read submissions" ON contact_submissions
  FOR SELECT TO authenticated
  USING (true);

-- Create policy to allow service role to do everything
CREATE POLICY "Allow service role full access" ON contact_submissions
  FOR ALL TO service_role
  USING (true);
```

## 2. Test the Setup

1. Go to your Supabase dashboard
2. Navigate to **Table Editor**
3. You should see the `contact_submissions` table
4. Test the contact form on your website
5. Check the table to see if data is being inserted

## 3. Optional: Create a View for Admin Dashboard

```sql
-- Create a view for easy data access
CREATE VIEW contact_submissions_view AS
SELECT 
  id,
  name,
  phone,
  email,
  company,
  website,
  created_at,
  CASE 
    WHEN email IS NOT NULL THEN 'Complete'
    ELSE 'Incomplete'
  END as status
FROM contact_submissions
ORDER BY created_at DESC;
```

## 4. Security Notes

- ✅ **Anonymous users** can only INSERT (submit forms)
- ✅ **Authenticated users** can SELECT (view submissions)
- ✅ **Service role** has full access for admin operations
- ✅ **RLS is enabled** for data protection
- ✅ **Indexes created** for better performance

## 5. Monitoring

You can monitor form submissions in:
- **Supabase Dashboard** > Table Editor
- **Supabase Dashboard** > Logs
- **Supabase Dashboard** > API

## 6. Next Steps

1. Test the contact form
2. Set up email notifications (optional)
3. Create admin dashboard (optional)
4. Set up form validation rules
5. Add spam protection (optional)

