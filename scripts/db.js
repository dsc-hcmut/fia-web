import {checkSignedIn} from "./auth.js";
import {LOADING_IMAGE} from "./const.js";
/** function saveMessage
 * @param 
 */

 function saveMessage(event){
     event.preventDefault();
     const message = this.messageInputBox.value;
     if (message && checkSignedIn.bind(this)()) {
       let currentUser = this.auth.currentUser;
       this.messagesRef
         .push({
           userName: currentUser.displayName || currentUser.email ,
           userId:currentUser.uid,
           message: message,
           photoUrl: currentUser.photoURL || "/img/profile_placeholder.png",
         })
         .then(() => {
           this.messageForm.reset();
         })
         .catch(function (error) {
           console.error(
             "Error writing new message to Firebase Database",
             error
           );
         });
     }
 }

 /** Upload image to clound storage and update realtime db */
function uploadImage(event){
  console.log(event.target.files)
  const file = event.target.files[0];
  this.uploadImageForm.reset();

  // Check if the file is an image.
  if (!file.type.match("image.*")) {
    var error = {
      message: "You can only share images",
      timeout: 2000,
    };
    alert(data.message);
    return;
  }
  if( checkSignedIn.bind(this)() ){
    let metadata ={
      contentType : file.type
    }
    let currentUser = this.auth.currentUser;
    let message = {
      userName: currentUser.displayName || currentUser.email,
      userId: currentUser.uid,
      imageUrl: LOADING_IMAGE,
      photoUrl: currentUser.photoURL || "/img/profile_placeholder.png",
    };
    this.messagesRef.push(message)
    .then(( messageSnapshot )=>{
      this.storageRef.child(`${currentUser.uid}/${Date.now()}/${file.name}`)
      .put(file,metadata)
      .then( ( imgSnapshot ) =>{
        console.log(imgSnapshot.metadata)
        let filePath = imgSnapshot.metadata.fullPath;
        messageSnapshot.update({
          imageUrl:this.storage.ref(filePath).toString()
        }) 
      })
      .catch(function(error) {
        console.error('There was an error uploading a file to Firebase Storage:', error);
      });
    })
  }
}


 export   { saveMessage, uploadImage };