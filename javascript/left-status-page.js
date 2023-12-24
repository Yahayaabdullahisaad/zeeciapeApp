const leftStatusfollowButton=document.querySelector('.left-status-follow-button');
leftStatusfollowButton.addEventListener('click',()=>{
    if(leftStatusfollowButton.innerText==='Follow'){
        leftStatusfollowButton.style.color='rgb(9, 9, 82)';
        leftStatusfollowButton.innerHTML='Following';
        leftStatusfollowButton.style.backgroundColor='rgb(218, 218, 218)';
    }else{
        leftStatusfollowButton.style.color='white';
        leftStatusfollowButton.innerHTML='Follow';
        leftStatusfollowButton.style.backgroundColor='rgb(9, 9, 82)';
    }
    
})