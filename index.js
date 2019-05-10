firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";

      var user = firebase.auth().currentUser;
      if(user!=null) //that means still logged in
      {
        var email_id = user.email;
        document.getElementById("user_para").innerHTML ="welcome user <br>" + email_id;
      }



    } else {
      // No user is signed in.
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
    }
  });
  

function login()
{
    // window.alert('working properly , you logged in');
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    // window.alert(userEmail + " " + userPass);
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      window.alert("error : " + errorMessage);
    });
}
function logout()
{
  firebase.auth().signOut();
  
}