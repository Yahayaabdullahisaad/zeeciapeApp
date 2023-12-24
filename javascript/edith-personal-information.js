const edithSeenButton=document.querySelector('.edith-seen-button'),
edithCreateNewPasswordsInput=document.querySelector('.edith-create-new-passwords-input'),
edithConfirmNewPasswordsInput=document.querySelector('.edith-confirm-new-passwords-input'),
edithOldPasswordsInput=document.querySelector('.edith-old-passwords-input')
edithSeenIcon=document.querySelector('.edith-seen-icon');

edithSeenButton.addEventListener('click',()=>{
    console.log(edithSeenIcon.src)
    if(edithCreateNewPasswordsInput.type==="password"){
        edithCreateNewPasswordsInput.type="text"
        edithConfirmNewPasswordsInput.type="text"
        edithOldPasswordsInput.type="text"
        edithSeenIcon.src="http://127.0.0.1:5500/zeeta-folder/icons/show-password.png"
    }else{
        edithCreateNewPasswordsInput.type="password"
        edithConfirmNewPasswordsInput.type="password"
        edithOldPasswordsInput.type="password"
        edithSeenIcon.src="http://127.0.0.1:5500/zeeta-folder/icons/hind-password.png"
    }
})