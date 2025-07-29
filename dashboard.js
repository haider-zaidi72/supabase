
const supabaseUrl = 'https://yawigeirglhsnfsqvleo.supabase.co'  
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlhd2lnZWlyZ2xoc25mc3F2bGVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwNzUwNTQsImV4cCI6MjA2ODY1MTA1NH0.xl8QCYpLAg5nRHaTlEyzn6Gw2_W_CKhJ1T5sGcmvnss'
const client = supabase.createClient(supabaseUrl, supabaseKey)

console.log(client);

window.addEventListener('DOMContentLoaded', async () => {
    const { data } = await client.auth.getSession();

    if (!data.session) {
        // Not logged in, go back to login
        window.location.href = "index.html";
    } else {
        console.log("Welcome", data.session.user.email);
        // Show dashboard content
    }
});
