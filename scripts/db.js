import {checkSignedIn} from "./auth.js";
import {LOADING_IMAGE} from "./const.js";
/** function saveMessage
 * @param : window Event
 * step1: get message content form the message input box
 * step2:check message emty and user logged in then
 * step3: pushs message content and user info
 * step4: pushs message success then clear the input form
 */

 function saveMessage(event){
     
 }

 /** Upload image to clound storage and update realtime db 
  * @param:wiwndow envet
  * step1: get the file form event object and reset uploadform
  * step2: check type of file
  * step3: create message with loadingURL as imageURL and push to db
  * step4: upload image to firestore if success then get URL 
    of uploaded img on store and and update message on db with img URI
  * 
 */
function uploadImage(event){

}


 export   { saveMessage, uploadImage };