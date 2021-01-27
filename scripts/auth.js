
import { setNavbar, setContent, loadMessage } from "./setup_UI.js";

/** Sign up new account 
 * @param: window event
*/

function signUp (event){
  event.preventDefault();
  const email = this.signUpForm['signup-email'].value;
  const password = this.signUpForm["signup-password"].value;
  console.log(this.auth);
  // sign-up 
  this.auth.createUserWithEmailAndPassword(email,password)
  .then( credential => {
    const sigupModal = document.getElementById("modal-signup");
    M.Modal.getInstance(sigupModal).close();
    this.signUpForm.reset();
  })
  .catch(error=>{
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(`
        Opps!!
        ErrorCode: ${errorCode}
        ErrorMessage: ${errorMessage}
    `)
  })
}
/** Login with google */
function logInWithGoogle(){
  let provider = new firebase.auth.GoogleAuthProvider();
  this.auth.signInWithPopup(provider);
  const sigupModal = document.getElementById("modal-login");
  M.Modal.getInstance(sigupModal).close();
}


/**Login function
 * @param: window event
  */
function signIn(event){
    event.preventDefault();
    // Get input email and password
    const email = this.signInForm["login-email"].value;
    const password = this.signInForm["login-password"].value;
    // sign-in
    this
      .auth
      .signInWithEmailAndPassword(email, password)
      .then( (credential) => {
        // Signed in
         var user = credential.user;
         const sigupModal = document.getElementById("modal-login");
         M.Modal.getInstance(sigupModal).close();
         this.signUpForm.reset();
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(`
        Opps!!
        ErrorCode: ${errorCode}
        ErrorMessage: ${errorMessage}
    `);
      });
}


/** Logout
 */
function logOut (){
    this.auth.signOut()
    .then(()=>{
        
    })
     .catch(error=>{
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(`
        Opps!!
        ErrorCode: ${errorCode}
        ErrorMessage: ${errorMessage}
    `)
  })
}


/** Tracking Auth status
 * @param: callback
 */

  function onAuthStateChanged (user) {
   if(user){
      setNavbar(user);
      setContent(user);
     this.loadMessage();
   }else{
      setNavbar();
      setContent();
      console.log("Not login yet!!");
   }
 }

/** Give permission for send message */
function checkSignedIn(){
  if(this.auth.currentUser){
    console.log("true")
    return true;
  }
  let notice = `You must login first`;
  return false;
}

export {
  signUp,
  logOut,
  signIn,
  onAuthStateChanged,
  logInWithGoogle,
  checkSignedIn,
};