import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://robkgayuuacnrizpifmn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvYmtnYXl1dWFjbnJpenBpZm1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM3MzUwMzMsImV4cCI6MTk2OTMxMTAzM30.UhuNtEZOpcp5WU2s4DLTcM7N-KB73ywsCtexxQwGiLI"
);

export default supabase;
