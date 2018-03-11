
 
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBHQyh-yWCPpUd_TEmaM5S5qehu1skgZ6E",
  authDomain: "ucagro-79906.firebaseapp.com",
  databaseURL: "https://ucagro-79906.firebaseio.com",
  projectId: "ucagro-79906",
  storageBucket: "ucagro-79906.appspot.com",
  messagingSenderId: "241360657317"
};
firebase.initializeApp(config);

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      window.location.href = "home.html";
      //Set Current user
      var user = firebase.auth().currentUser;
  
      if (user != null) {
  
        var email_id = user.email;
        document. getElementById("welcome_user").InnerHTML = " Welcome : " + email_id;
      }
      
    } else {
      // No user is signed in.
      
    }
  });

function login() {

  var userEmail = document.getElementById("txtEmail").value;
  var userPass = document.getElementById("txtPass").value;
  
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
    // ...
  });
}


function logout() {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    window.location.href = "index.html";
  }).catch(function(error) {
    // An error happened.
    var errorCode1 = error.code;
    var errorMessage1 = error.message;

    window.alert("Error : " + errorMessage);
  });

}




