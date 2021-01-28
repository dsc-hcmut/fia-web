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
   event.preventDefault();
   let messageContent = this.messageInputBox.value;
   if(messageContent && checkSignedIn.bind(this)()){
     let user = this.auth.currentUser;
     let message = {
       userId:user.uid,
       userName:user.displayName || user.email.split("@")[0],
       photoUrl:user.photoURL || 'img/profile_placeholder',
       message:messageContent
     }
     this.messagesRef.push(message)
      .then(snapshot=>{
        this.messageForm.reset()
      })
      .catch(er=>{
        alert(`Can't send message!`)
      })
   }
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
  let file = event.target.files[0];
  this.uploadImageForm.reset();
  if( !file.type.match("image.*")){
    alert(`You can only shared image`)
    return
  }
  if( checkSignedIn.bind(this)()){
    let user = this.auth.currentUser;
    let meta = {
      contentType:file.type
    }
    let message = {
      userId: user.uid,
      userName: user.displayName || user.email.split("@")[0],
      photoUrl: user.photoURL || "img/profile_placeholder",
      imgUrl:LOADING_IMAGE
    };

    this.messagesRef.push(message)
      .then( messSnapshot =>{
         let ref = `${user.uid}/${Date.now()}/${file.name}`;
         this.storageRef.child(ref).put(file,meta)
          .then( imgSnapshot =>{
            let path = imgSnapshot.metadata.fullPath;
            messSnapshot.update({
              imgUrl: this.storage.ref(path).toString()
            })
          })
          .catch(err=>{
            alert(`${err.message}`)
          })
      })
      .catch(err=>{
        alert(`${err.message}`)
      })
  }
}


 export   { saveMessage, uploadImage };