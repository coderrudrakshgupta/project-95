

var firebaseConfig = {
    apiKey: "AIzaSyBGMgXAFDLsIe-NBwI7laGCYoN5QIf9TWg",
    authDomain: "project-42-59d81.firebaseapp.com",
    databaseURL: "https://project-42-59d81.firebaseio.com",
    projectId: "project-42-59d81",
    storageBucket: "project-42-59d81.appspot.com",
    messagingSenderId: "60144034215",
    appId: "1:60144034215:web:fc44c07e67ebf4a56dd682"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addUser() {
    user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
});}

  user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");
function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0  
    });

    document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) 
{ document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
     childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();


function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
    }