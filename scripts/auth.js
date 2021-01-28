
import { setNavbar, setContent, loadMessage } from "./setup_UI.js";

/** Sign up new account 
 * @param: window event
 * step1: get input of email and password
 * step2: createUserWithEmailAnhPassword to create new user
 * if succcess close sign up form and reset input field
*/

function signUp (event){
  
}


/** Login with google
 * step1: create new provider
 * step2: login with provider
 * step3: close login form
 */
function logInWithGoogle(){
  
}


/**Login function
 * @param: window event
 * step1: get email and input form login form
 * step2: sign-in with email and password
 * step3: if success close login form and clear input
 * 
  */
function signIn(event){
   
}


/** Logout
 * Logt-out and redirect to page
 */
function logOut (){
   
}


/** Tracking Auth status
 * @param: callback
 * check user login or not 
 * if login: set navbar and content with current user then load message
 * not: set navbarr and content with null
 */

  function onAuthStateChanged (user) {
   if(user){
      setNavbar(user);
      setContent(user);
      this.loadMessage();
   }else{
      setNavbar();
      setContent();
   }
 }

/** Give permission for send message */
function checkSignedIn(){
  if(this.auth.currentUser){
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