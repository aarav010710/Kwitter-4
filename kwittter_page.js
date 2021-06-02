var firebaseConfig = {
    apiKey: "AIzaSyDo4L0JCKv27pmtz_0f26UUb6kFUvJiBdw",
    authDomain: "kwitter-4d504.firebaseapp.com",
    databaseURL: "https://kwitter-4d504-default-rtdb.firebaseio.com",
    projectId: "kwitter-4d504",
    storageBucket: "kwitter-4d504.appspot.com",
    messagingSenderId: "465424955725",
    appId: "1:465424955725:web:76d093fb8ee7d565e59f04"
  };
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.setItem("user_name");

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        likes: 0
  });
}
function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}
function back()
{
    window.location = "kwitter_room.html";
}