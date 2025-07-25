
const supabaseUrl = 'https://yawigeirglhsnfsqvleo.supabase.co'  
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlhd2lnZWlyZ2xoc25mc3F2bGVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwNzUwNTQsImV4cCI6MjA2ODY1MTA1NH0.xl8QCYpLAg5nRHaTlEyzn6Gw2_W_CKhJ1T5sGcmvnss'
const client = supabase.createClient(supabaseUrl, supabaseKey)

console.log(client);


const userEmail = document.getElementById('userEmail');
const userPassWord = document.getElementById('userPassWord');

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = userEmail.value;
    const password = userPassWord.value;

    console.log(userEmail.value, userPassWord.value)

    localStorage.setItem('email', email)
    localStorage.setItem('pasword', password)
})


async function signup () {
 
    const email = document.getElementById('userEmail').value;
    const password = document.getElementById('userPassWord').value;


    
 const { data, error } = await client.auth.signUp({
  email: userEmail.value,
  password: userPassWord.value,
})

     localStorage.setItem('email', userEmail.value);
    localStorage.setItem('password', userPassWord.value);
}

async function login (){
    email = userEmail.value;
    password = userPassWord.value;

const { data, error } = await client.auth.signInWithPassword({
  email: userEmail.value,
  password: userPassWord.value,
})
//    if (userEmail = ) {
    
//    } else {
    
//    }
   window.location.href = 'dashboard.html'
    localStorage.setItem('email', userEmail.value);
    localStorage.setItem('password', userPassWord.value);
}




