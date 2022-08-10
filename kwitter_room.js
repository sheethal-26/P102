// ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVRWwMu4GewfTBYPEpeitkvcA7hKJSbkk",
  authDomain: "p101-26e7d.firebaseapp.com",
  databaseURL: "https://p101-26e7d-default-rtdb.firebaseio.com",
  projectId: "p101-26e7d",
  storageBucket: "p101-26e7d.appspot.com",
  messagingSenderId: "652285174591",
  appId: "1:652285174591:web:67e77535917fac45a0698a",
  measurementId: "G-XSLBCZJGVL",
};

function addUser() {
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose: "adding user",
  });
}

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name",
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML;
      Room_name.childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row =
        "<div class='room_name' id=" +
        Room_names +
        "onclick = 'redirect ToRoomName(this.id)'>#" +
        Rooms_names +
        "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
    });
}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database.ref("/").on("value", function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start Code

      //End Code
    });
  });
}
getData();
