export const loggedInLinks = document.querySelectorAll(".logged-in");
export const loggedOutLinks = document.querySelectorAll(".logged-out");
export const WELCOME_SCREEN = document.getElementById("welcome-screen-wrapper");
export const CHAT_AREA = document.getElementById("content-wrapper");
export const LOG_OUT_NOTICE = "You need log-in first!";
export const CHAT_TEMPLATE = `<div class="chat">
    <div class="chat-avatar">
       <a class="avatar">
         <img id = "user-avatar" src="" class="circle" alt="avatar">
        </a>
    </div>
    <div class="chat-body">
       <div class="content chat-text" >
        </div>
        <div id="user-name" class="name"></div>
        </div>
    </div>`;

export const LOADING_IMAGE = `https://media.giphy.com/media/jAYUbVXgESSti/giphy.gif`;
export const PROFILE_TEMPLATE = `
 <a href="#" class="grey-text modal-trigger" data-target="modal-account">
    <img src="imgSrc" class="circle avatar" alt="avatar">
    <p>name</p>
</a>
`;