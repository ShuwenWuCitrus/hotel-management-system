import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://wyugcrqtinmcoexeykjr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5dWdjcnF0aW5tY29leGV5a2pyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczOTk0MzksImV4cCI6MjA1Mjk3NTQzOX0.ERK9WjMPEK3AIr6zJ8XJJoW2Vvj_A5_XjxNPbW22sJ4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
