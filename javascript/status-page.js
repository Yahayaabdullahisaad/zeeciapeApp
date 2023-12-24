const followButton=document.querySelector('.status-follow-button');

followButton.addEventListener('click',()=>{
    if(followButton.innerText==='Follow'){
        followButton.style.color='rgb(9, 9, 82)';
        followButton.innerHTML='Following';
        followButton.style.backgroundColor='rgb(218, 218, 218)';
    }else{
        followButton.style.color='white';
        followButton.innerHTML='Follow';
        followButton.style.backgroundColor='rgb(9, 9, 82)';
    } 
})
