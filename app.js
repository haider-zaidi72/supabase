
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

    if(!email || !password){
        alert('please fill all fields')
        return;
    }

    // save to local storage //
    const user = { email, password}
    localStorage.setItem ("user", JSON.stringify())
    alert("account created sucessfully");

    
 const { data, error } = await client.auth.signUp({
  email: userEmail.value,
  password: userPassWord.value,
})

}

async function login (){
const email = document.getElementById('userEmail').value;
const password = document.getElementById('userPassWord').value;

const storedUser = JSON.parse(localStorage.getItem(storedUser));

if(!storedUser){
    alert("credential are not correct please signin First")
}
if(email === storedUser.email && password === storedUser.password){
    alert("Login Sucessfull")
}else{
    alert("Invalid email or password")
}

const { data, error } = await client.auth.signInWithPassword({
  email: userEmail.value,
  password: userPassWord.value,
})

   window.location.href = 'dashboard.html'
    
}




