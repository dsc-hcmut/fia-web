import {
  loggedInLinks,
  loggedOutLinks,
  WELCOME_SCREEN,
  CHAT_AREA,
  CHAT_TEMPLATE,
  LOADING_IMAGE,
  PROFILE_TEMPLATE,
} from "./const.js";
/** Set-up profile 
 * @param  user 
 */

 function setupProfile(user){
    const profile = document.getElementById("profile");
    if(user){
      let userName = user.displayName || user.email.split("@")[0];
      let userProfileURL = user.photoURL || "/img/profile_placeholder.png";
      profile.innerHTML = PROFILE_TEMPLATE.replace(/name|imgSrc/gi, (x) => {
        if (x === "name") return (x = userName);
        if (x === "imgSrc") return (x = userProfileURL);
      });
    }else{
      profile.style.display = "none";
    }
 }


/** Set up navbar
 * @param: user object
 */

 function setNavbar(user){
     if(user){
         setupProfile(user);
        loggedInLinks.forEach( link => link.style.display = "block");
        loggedOutLinks.forEach((link) => (link.style.display = "none"));
     }else{
         setupProfile();
        loggedInLinks.forEach((link) => (link.style.display = "none"));
        loggedOutLinks.forEach((link) => (link.style.display = "block"));
     }
 }

 /**Set up content */

 function setContent (user){
     if(user){
        WELCOME_SCREEN.style.display="none";
        CHAT_AREA.style.display= "block";
     }else{
        WELCOME_SCREEN.style.display = "block";
        CHAT_AREA.style.display = "none";
     }
 }

/** Display message to container
 * @param: messsgeId , userId , userName, message as Text, userAvatar, message as Img
 * step1: find the message element by messageId
 * step2: if not message exist with messageId then create message element
 * step3: setup user information for message element
 * step4: if message is text them set content as message as text, if message
   is img set message content as img
 */
function displayMessage(
  key,
  userId,
  userName,
  message,
  userAvaUrl = "/img/profile_placeholder.png",
  messAsImage
) {

}

/** Load messages to DOM 
 *  step1: make sure romve all listeners on message
 *  step2: get message from db on event chanaged and add
*/
function loadMessage(){
   
}

/**Set image as message in message list
 * @param: imageUri, message element
 * step1: check imgURI is URI or not
 * step2: if imgURI is URI then create ref form URI then
 * get download URL and set URL to src of img element
 * step3: if not URI then set src of imgElement as received URI
 */
function setImageAsMessage (imgURI, imgElement){
   
}

export {
  setNavbar,
  setContent,
  displayMessage,
  loadMessage,
  setImageAsMessage,
};