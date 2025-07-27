
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
})

async function signup () {
 
    const email = document.getElementById('userEmail').value;
    const password = document.getElementById('userPassWord').value;

    if(!email || !password){
        alert('please fill all fields')
        return;
    }
    // if(email === localStorage.setItem(user)){
    //   alert("This email already registered.")
    // }return;

    // save to local storage //
    const user = { email, password}
    localStorage.setItem ("user", JSON.stringify(user));
    alert("account created sucessfully");

 const { data, error } = await client.auth.signUp({
  email: email,
  password: password,
});
// if email address is already registered 
 if (error) {
        if (error.message.toLowerCase().includes('user already registered')) {
            alert("This email address is already registered");
        } else {
            console.error('Signup error:', error.message);
            alert('Signup failed: ' + error.message);
        }
    } else {
        console.log('Signup success:', data);
        alert('Please verify your email to continue.');
    }

};

async function login (){
const email = document.getElementById('userEmail').value;
const password = document.getElementById('userPassWord').value;

const storedUser = JSON.parse(localStorage.getItem("user"));

if(!storedUser){
    alert("credential are not correct please signin First")
}
if(email === storedUser.email && password === storedUser.password){
    // alert("Login Successfull")
}else{
    alert("Invalid email or password")
    return;
}


const { data, error } = await client.auth.signInWithPassword({
  email: email,
  password: password,
})

if (error) {
    alert("Login failed: " + error.message);
    return;
  }
  
const { data: userData, error: userError } = await client.auth.getUser();
if (userError || !userData.user) {
    alert("Error getting user info");
    return;
  }

  // Check if user is email verified
  const user = userData.user;
  if (!user.confirmed_at) {
    alert("Please verify your email before logging in.");
    await client.auth.signOut(); // force logout
    return;
  }

//If email is verified, redirect to dashboard
  alert("Login successful!");
  window.location.href = 'dashboard.html';
  
};


//Google  signin 
async function signInWithGoogle() {
  const { data, error } = await client.auth.signInWithOAuth({
    provider: 'google',
  });

  if (error) {
    console.error('OAuth login error:', error.message);
    alert("Google login failed: " + error.message);
  } else {
    console.log('Redirecting to Google sign-in...');
  }
}


//

window.addEventListener('DOMContentLoaded', async () => {
    const { data, error } = await client.auth.getSession();

    if (!data.session) {
        // Not logged in
        window.location.href = "index.html";
    } else {
        console.log("Logged in as:", data.session.user.email);
    }
});


// Only redirect if not already on index.html
if (!data.session && !window.location.pathname.includes("index.html")) {
    window.location.href = "index.html";
}


