# Contact Form Setup Guide

## ✅ **Contact Form Features**

### **📝 Form Fields**
- **Name** (Required) - Customer's full name
- **Phone** (Required) - Contact phone number
- **Email** (Optional) - Email address
- **Company** (Optional) - Company name
- **Website URL** (Optional) - Existing website URL

### **🎨 Design Features**
- **Premium styling** with glass morphism effects
- **Responsive design** for all devices
- **Interactive hover effects** with smooth animations
- **Success/error notifications** with color-coded feedback
- **Form validation** with real-time feedback
- **Loading states** during submission

### **🔧 Technical Features**
- **Supabase integration** for data storage
- **Client-side validation** for required fields
- **Error handling** with user-friendly messages
- **TypeScript support** for type safety
- **Responsive design** with mobile optimization

## 🚀 **Setup Instructions**

### **1. Environment Variables**
Create a `.env.local` file in your project root:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://kykhklktmtcothaqiieb.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5a2hrbGt0bXRjb3RoYXFpaWViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEzMDcwNDYsImV4cCI6MjA3Njg4MzA0Nn0.9hcjMbp0KHDcU1ZmkTyfPUXrNLBLyLVCSspckusAqFA
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5a2hrbGt0bXRjb3RoYXFpaWViIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MTMwNzA0NiwiZXhwIjoyMDc2ODgzMDQ2fQ.WzJNZ4vrQ8eWTIM9UP-ckRKg4ld1oF13zXAmDIlyh5c
```

### **2. Database Setup**
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

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert
CREATE POLICY "Allow anonymous contact submissions" ON contact_submissions
  FOR INSERT TO anon
  WITH CHECK (true);

-- Allow authenticated users to read
CREATE POLICY "Allow authenticated users to read submissions" ON contact_submissions
  FOR SELECT TO authenticated
  USING (true);
```

### **3. Test the Form**
1. Start your development server: `npm run dev`
2. Navigate to `/contact`
3. Fill out the form and submit
4. Check your Supabase dashboard to see the data

## 📊 **Data Structure**

```typescript
interface ContactSubmission {
  id: string
  name: string        // Required
  phone: string       // Required
  email?: string      // Optional
  company?: string    // Optional
  website?: string    // Optional
  created_at: string
  updated_at: string
}
```

## 🔒 **Security Features**

- ✅ **Row Level Security (RLS)** enabled
- ✅ **Anonymous users** can only submit forms
- ✅ **Authenticated users** can view submissions
- ✅ **Input validation** on both client and server
- ✅ **SQL injection protection** via Supabase
- ✅ **Environment variables** for sensitive data

## 🎨 **Styling Features**

- ✅ **Glass morphism** card design
- ✅ **Gradient backgrounds** for buttons and icons
- ✅ **Smooth animations** and transitions
- ✅ **Responsive design** for all screen sizes
- ✅ **Interactive hover effects**
- ✅ **Color-coded feedback** (success/error)

## 📱 **Responsive Design**

- **Desktop**: Full-width form with premium styling
- **Tablet**: Optimized spacing and sizing
- **Mobile**: Single-column layout with touch-friendly inputs

## 🚀 **Next Steps**

1. **Test the form** thoroughly
2. **Set up email notifications** (optional)
3. **Create admin dashboard** (optional)
4. **Add spam protection** (optional)
5. **Set up form analytics** (optional)

## 🛠️ **Troubleshooting**

### **Common Issues**
- **Form not submitting**: Check Supabase credentials
- **Database errors**: Verify table creation and RLS policies
- **Styling issues**: Ensure CSS variables are defined
- **TypeScript errors**: Check import paths and types

### **Debug Steps**
1. Check browser console for errors
2. Verify Supabase connection in dashboard
3. Test database permissions
4. Check environment variables

## 📞 **Support**

If you need help:
- Check the [Supabase Documentation](https://supabase.com/docs)
- Review the [Next.js Documentation](https://nextjs.org/docs)
- Check the browser console for error messages
- Verify your Supabase project settings

