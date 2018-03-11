$(document).ready(function() {

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

 //store firebase db and auth in global variables
 var database = firebase.database();
 var auth = firebase.auth();
 var name1 = "";
 var name2 = "";
 var email = "";
 var password = "";
 

 //
 //creates user -- signup email authentication

 /*$("#signup").on("click", function() {
 window.location.href = "account.html";
 });

 $("#signUpSubmit").on("click", function(event) {
 event.preventDefault();*/

 name1 = $("#fname").val().trim();
 name2 = $("#lname").val().trim();
 email = $("#txtEmail-reg").val().trim();
 password = $("#txtPass-reg").val().trim();

 var newuser = auth.createUserWithEmailAndPassword(email, password);

 newuser.then(function(user) {
 var ref = database.ref("/user/" + user.uid);

 ref.set({
 userName: name1,
 email: email,
 uid: user.uid,
 
 })

 }).catch(function(error) {
 console.log(error.code);
 console.log(error.message);
 });

 $("#fname").val("");
 $("#fname").val("");
 $("#fname").val("");

 auth.signOut();
 setTimeout(function() {
 window.location.href = "index.html";
 }, 2000);

 });

 //user login
 /*$("#login").on("click", function() {
 window.location.href = "login.html";
 });

 $("#signUpLink").on("click", function() {
 window.location.href = "signup.html";
 });*/

 $("#btnLogin").on("click", function(event) {
 event.preventDefault();

 email = $("#txtEmail").val().trim();
 password = $("#txtPass").val().trim();

 var loginuser = auth.signInWithEmailAndPassword(email, password);

 loginuser.then(function() {
 $("#txtEmail").val("");
 $("#txtPass").val("");
 window.location.href = 'home.html';

 }).catch(function(error) {
 console.log(error.code);
 console.log(error.message);
 })
 });

 getContent();

 $("#logout").on("click", function() {

 var logoutuser = auth.signOut();

 logoutuser.then(function() {

 window.location.href = "index.html";

 }).catch(function(error) {

 console.log(error.code);
 console.log(error.message);
 });
 });

 function getContent() {

 auth.onAuthStateChanged(function(user) {

 if (user) {
 var ref = database.ref("/user/" + user.uid);

 ref.once("value", function(snapshot) {

 var datatopic = snapshot.val().interest;
 $("#userName").text("Welcome back " + snapshot.val().userName);

 if (datatopic === false) {
 setFavoriteTopic();

 } else {
 getYouTube(datatopic);
 getBooks(datatopic);
 getNews(datatopic);
 getPodcasts(datatopic);
 getMeetup(datatopic);
 getTwitter(datatopic);
 getSavedYouTubeFromDatabase();
 getSavedPodcastFromDatabase();
 getSavedBooksFromDatabase();
 getSavedMeetupFromDatabase()
 getBackgroundImage(datatopic);
 }

 });
 } else {
 $("#userName").html("<a style='color: black;' href='login.html'>Sign In</a>");
 }
 });
 };


