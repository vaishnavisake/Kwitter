const firebaseConfig = {
      apiKey: "AIzaSyDT873swOOO0ujTGthwdWKAhG-I-ud-ZBE",
      authDomain: "kwitter-bbef2.firebaseapp.com",
      databaseURL: "https://kwitter-bbef2-default-rtdb.firebaseio.com",
      projectId: "kwitter-bbef2",
      storageBucket: "kwitter-bbef2.appspot.com",
      messagingSenderId: "434391046",
      appId: "1:434391046:web:dd655c17156cc8d75adb87"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
