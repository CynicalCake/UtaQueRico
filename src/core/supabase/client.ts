import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dazuqkyhvdjomcapkcij.supabase.co/rest/v1/';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhenVxa3lodmRqb21jYXBrY2lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2NTQ3MjEsImV4cCI6MjA5MjIzMDcyMX0.Ch3jV4C1VQRqsixsc370y-cBT5sNy3aArGjDU-fUJg4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey)