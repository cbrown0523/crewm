import { createClient } from "@supabase/supabase-js";

const URL = "https://fpznulmjbpvfydzwbwye.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwem51bG1qYnB2Znlkendid3llIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwOTcwNzEsImV4cCI6MTk5NjY3MzA3MX0.AUFgtvhwxiHeFxbN3KfDigDJcQhOhlztSRSxnBJqgPA";

export const supabase = createClient(URL, API_KEY);
