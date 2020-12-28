
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBmGeWlC9GDQkscDmw1OAIMSiC78ip--kI",
    authDomain: "kwitter-47684.firebaseapp.com",
    databaseURL: "https://kwitter-47684-default-rtdb.firebaseio.com",
    projectId: "kwitter-47684",
    storageBucket: "kwitter-47684.appspot.com",
    messagingSenderId: "999516749190",
    appId: "1:999516749190:web:bb15d6618bea2782214007",
    measurementId: "G-4NSVVLBS3V"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function adduser() {
      username=document.getElementById("Input-name").value;
      firebase.database().ref("/").child(username).update({purpose:"name"});
      
  }
