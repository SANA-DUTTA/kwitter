
var  firebaseConfig = {
  apiKey: "AIzaSyCAGfJvz0Y-L9DeDsQ1pGwEZ5kQerYAh8Y",
  authDomain: "kwitternew-18128.firebaseapp.com",
  databaseURL: "https://kwitternew-18128-default-rtdb.firebaseio.com",
  projectId: "kwitternew-18128",
  storageBucket: "kwitternew-18128.appspot.com",
  messagingSenderId: "339089187665",
  appId: "1:339089187665:web:7c2b0195c4c2125061a970"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location ="kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location ="kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}