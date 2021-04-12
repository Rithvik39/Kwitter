//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBvB-4vYT9htyB1Vnd1cJuHAI_94DCdcpo",
      authDomain: "kwitter-44442.firebaseapp.com",
      databaseURL: "https://kwitter-44442-default-rtdb.firebaseio.com",
      projectId: "kwitter-44442",
      storageBucket: "kwitter-44442.appspot.com",
      messagingSenderId: "971659264830",
      appId: "1:971659264830:web:eb39405e5e593d233a626f",
      measurementId: "G-QML2PK4R2G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = user_name;

function add_room() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log(Room_names);
                  row="<div class='room_name' id="+Room_names+" onclick='redirect_to_room_name(this.id)'> #"+ Room_names+ "</div> <hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirect_to_room_name(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      window.location = "index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
}