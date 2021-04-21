
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAweC5fvRC3cWG2-ItNs7gOCHcpPOFIS9U",
  authDomain: "chat-app-94c03.firebaseapp.com",
  databaseURL: "https://chat-app-94c03.firebaseio.com",
  projectId: "chat-app-94c03",
  storageBucket: "chat-app-94c03.appspot.com",
  messagingSenderId: "831213135187",
  appId: "1:831213135187:web:15f1cdcd780560287bada6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom(){
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "msg.html";
}





function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("room name - " + Room_names);
row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName" +"(this.id)' >#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;});});}
getData();

function redirectToRoomName(name)
{
console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "msg.html"
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}