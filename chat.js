// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAhssOrkjAnUc5k1VynnP_-BzRXMEZjepw",
    authDomain: "letschatwebapphome.firebaseapp.com",
    databaseURL: "https://letschatwebapphome-default-rtdb.firebaseio.com",
    projectId: "letschatwebapphome",
    storageBucket: "letschatwebapphome.appspot.com",
    messagingSenderId: "669615879287",
    appId: "1:669615879287:web:ba3993afaa184c963a4272",
    measurementId: "G-TW3DDJPD0X"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
   
   localStorage.setItem("user_name", user_name);
   window.location = "chat_room.html";
    
    


   
}
