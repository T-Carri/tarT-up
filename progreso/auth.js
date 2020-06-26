
<script> 
function login(){
  const entra=document.getElementByClassName('.BwtoT4a3R2u1P');
  entra.classList.toggle('.1nth3Castl3');

  
}

  
  
   firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.

      // obtain token, getIdToken(false) = no forced refresh
      firebase.auth().currentUser.getIdToken(false).then(function (idToken) {

        // Send token to your backend via HTTPS
        $.ajax({
          type: 'POST',
          url: '/auth/check',
          data: {'token': idToken},
          complete: function(data){
             data = {'target' => '/redirect/to/route'}
            if(getProperty(data, 'responseJSON.target', false)){
              window.location.replace(getProperty(data, 'responseJSON.target'));
            }
          }
        });
        // ...
      }).catch(function (error) {
        console.log(error);
      });


    } else {
      // User Signed out
      $.ajax({
        type: 'POST',
        url: '/auth/logout',

        complete: function(data){
          // data = {'target' => '/redirect/to/route'}
          if(getProperty(data, 'responseJSON.target', false)){
            // don't redirect to itself
            // logout => /
            if(window.location.pathname != getProperty(data, 'responseJSON.target', false)){
              window.location.replace(getProperty(data, 'responseJSON.target'));
            }
          }
        }
      });

      // User is signed out.
    }

  });
}

window.onload = function () {
  initApp();
};  
var 
</script>
<div id=arcoiris>
  <!-- The core Firebase JS SDK is always required and must be listed first -->
  <script src="https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/7.14.6/firebase-auth.js"></script>
  
  <!-- TODO: Add SDKs for Firebase products that you want to use
       https://firebase.google.com/docs/web/setup#available-libraries -->
  <script src="https://www.gstatic.com/firebasejs/7.14.6/firebase-analytics.js"></script>
  
  <script>
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyAOQHgxygz820EX3qjrXizFVbEfp6OVqGs",
      authDomain: "tarup-9c6d2.firebaseapp.com",
      databaseURL: "https://tarup-9c6d2.firebaseio.com",
      projectId: "tarup-9c6d2",
      storageBucket: "tarup-9c6d2.appspot.com",
      messagingSenderId: "851832043001",
      appId: "1:851832043001:web:20bb67bd7748602c083928",
      measurementId: "G-594SFRT0X5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged(function(user){
      if (user){
        //user is signed in.
        var displayName=user.displayName;
        var email=user.email;
        var emailVerified=user.emailVerified;
        var photoURL=user.photoURL;
        var isAnonymous=user.isAnonymous;
        var uid=user.uid;
        var provinderData=user.providerData; 
        alert("logeado");
 
      } else {
        alert("user is signed out");
      }
    })
    firebase.analytics();
  
  
    //initialize firebase 
     firebase.initializeApp(firebaseConfig);
     
     function enviar (){
       var correo=document.getElementById('correo').value;
       var pass=document.getElementById('pass').value;
     
     
       firebase.auth().createUserWithEmailAndPassword(correo, pass).catch(function(error){
       var errorCode=error.code;
       var errorMessage=error.message;
       alert(errorMessage);
     })
     
     }
  
     function goGP(){
       var correo1=document.getElementById('correo1').value;
       var pass1=document.getElementById('pass1').value;
       
       firebase.auth().singInWithEmailAndPassword(correo1,pass1).catch(function(error){
        var errorCode=error.code;
        var errorMessage=error.message;
        alert(errorMessage);
        
      });
      
  
     }
  
      
  </script>
</div> 