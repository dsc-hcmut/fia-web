import {
  signUp,
  logOut,
  signIn,
  onAuthStateChanged,
  logInWithGoogle,
} from "./scripts/auth.js";

import { saveMessage, uploadImage } from "./scripts/db.js";

import {
  displayMessage,
  loadMessage,
  setImageAsMessage,
} from "./scripts/setup_UI.js";

function App (){
  /** Set up DOM element **/
  this.signUpForm = document.getElementById("signup-form");
  this.signInForm = document.getElementById("login-form");
  this.loginWithEmailBtn = document.getElementById("login-btn-email");
  this.loginWithGoogleBtn = document.getElementById("login-btn-google");
  this.logOutBtn = document.getElementById("logout");
  this.messageForm = document.getElementById("chat-form");
  this.messageInputBox =document.getElementById("chat-input");
  this.messageArea= document.querySelector('.chat-area');
  this.messageList = document.getElementById("message-list");
  this.uploadImageForm = document.getElementById("upload-image-form");
  this.imageInput = document.getElementById("img-input");
  this.uploadImageBtn = document.querySelector(".upload-img-btn");
  this.init();
}

App.prototype.init = function(){
  // Inite Firebase authentication and database
  this.auth = firebase.auth();
  this.db = firebase.database();
  this.storage = firebase.storage();    
  this.messagesRef = this.db.ref("messages");
  this.storageRef = this.storage.ref("images");
  // Init event for DOM element
  this.signUpForm.addEventListener("submit",signUp.bind(this));
  this.logOutBtn.addEventListener("click",logOut.bind(this));
  this.loginWithEmailBtn.addEventListener("click",signIn.bind(this));
  this.loginWithGoogleBtn.addEventListener("click", logInWithGoogle.bind(this));
  this.messageForm.addEventListener("submit",saveMessage.bind(this));
  this.uploadImageBtn.addEventListener("click",()=>{
    this.imageInput.click();
  });
  this.imageInput.addEventListener("change", uploadImage.bind(this));
  this.auth.onAuthStateChanged(onAuthStateChanged.bind(this));
  
}

App.prototype.loadMessage = loadMessage;
App.prototype.displayMessage = displayMessage;
App.prototype.setImageAsMessage = setImageAsMessage;




document.addEventListener('DOMContentLoaded', function() {
  // init Materialize for modal component
  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);
});


window.onload = function() {
  window.ChatApp = new App();
};