//video
const acceptVideocallShowdiv=document.querySelector('.accept-videocall-show-div'),
videocallSlicetoAccept=document.querySelector('.videocall-slice-to-answer-p'),
acceptVideocallButton=document.querySelector('.accept-videocall-button'),
//call 
acceptCallShowdiv=document.querySelector('.accept-call-show-div'),
callSlicetoAccept=document.querySelector('.call-slice-to-answer-p'),
acceptCallButton=document.querySelector('.accept-call-button');


//videocallSlicetoAccept
videocallSlicetoAccept.addEventListener('mouseleave',()=>{
    acceptVideocallButton.style.left="82%";
    setTimeout(()=>{
        acceptVideocallShowdiv.style.display="none";
    },1000)
    
})
//videocallSlicetoAccept
callSlicetoAccept.addEventListener('mouseleave',()=>{
    acceptCallButton.style.left="82%";
    setTimeout(()=>{
        acceptCallShowdiv.style.display="none";
    },1000)
    
})


