import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://xikzthoxhewldfxpxfei.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhpa3p0aG94aGV3bGRmeHB4ZmVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzODUzMjYsImV4cCI6MjAzMzk2MTMyNn0.DORmvIe_w-0vd_5yhEbgcTYYE4Z8RhUqg_X7_ttXajw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase

//We have activated row level security that's why we are able to expose the key directly without the help of the env file.