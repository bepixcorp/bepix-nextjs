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

