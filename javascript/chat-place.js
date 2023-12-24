const chatPlaceArrowChange=document.querySelector('.chat-place-arrow-left-icon'),
//-right voice
chatPlaceRedLightRight=document.querySelector('.chat-place-red-light-right'),
chatPlaceVoiceRightContainerPlay=document.querySelector('.chat-place-voice-right-container-play'),
chatPlaceVoicePlayIconRight=document.querySelector('.chat-place-voice-play-icon-right'),
chatPlaceRangeValueRightP=document.querySelector('.chat-place-range-value-right-p'),
chatPlaceVoiceRightContainerRange=document.querySelector('.chat-place-voice-right-container-range'),
//
//-left voice
chatPlaceRedLightLeft=document.querySelector('.chat-place-red-light-left'),
chatPlaceVoiceLeftContainerPlay=document.querySelector('.chat-place-voice-left-container-play'),
chatPlaceVoicePlayIconLeft=document.querySelector('.chat-place-voice-play-icon-left'),
chatPlaceRangeValueLeftP=document.querySelector('.chat-place-range-value-left-p'),
chatPlaceVoiceLeftContainerRange=document.querySelector('.chat-place-voice-left-container-range'),
//
//-right Audio
chatPlaceRedLightAudioRight=document.querySelector('.chat-place-red-light-audio-right'),
chatPlaceAudioRightContainerPlay=document.querySelector('.chat-place-audio-right-container-play'),
chatPlaceAudioPlayIconRight=document.querySelector('.chat-place-audio-play-icon-right'),
chatPlaceRangeValueAudioRightP=document.querySelector('.chat-place-range-value-audio-right-p'),
chatPlaceAudioRightContainerRange=document.querySelector('.chat-place-audio-right-container-range'),
//
//-left Audio
chatPlaceRedLightAudioLeft=document.querySelector('.chat-place-red-light-audio-left'),
chatPlaceAudioLeftContainerPlay=document.querySelector('.chat-place-audio-left-container-play'),
chatPlaceAudioPlayIconLeft=document.querySelector('.chat-place-audio-play-icon-left'),
chatPlaceRangeValueAudioLeftP=document.querySelector('.chat-place-range-value-audio-left-p'),
chatPlaceAudioLeftContainerRange=document.querySelector('.chat-place-audio-left-container-range'),
//
//-right voice-from-status
chatPlaceRedLightRightFromStatus=document.querySelector('.chat-place-red-light-right-from-status'),
chatPlaceVoiceFromStatusRightContainerPlay=document.querySelector('.chat-place-voice-from-status-right-container-play'),
chatPlaceVoiceFromStatusPlayIconRight=document.querySelector('.chat-place-voice-from-status-play-icon-right'),
chatPlaceRangeValueRightFromStatusP=document.querySelector('.chat-place-range-value-right-from-status-p'),
chatPlaceVoiceFromStatusRightContainerRange=document.querySelector('.chat-place-voice-from-status-right-container-range'),
//
//-left voice-from-status 
chatPlaceRedLightLeftFromStatus=document.querySelector('.chat-place-red-light-left-from-status'),
chatPlaceVoiceFromStatusLeftContainerPlay=document.querySelector('.chat-place-voice-from-status-left-container-play'),
chatPlaceVoiceFromStatusPlayIconLeft=document.querySelector('.chat-place-voice-from-status-play-icon-left'),
chatPlaceRangeValueLeftFromStatusP=document.querySelector('.chat-place-range-value-left-from-status-p'),
chatPlaceVoiceFromStatusLeftContainerRange=document.querySelector('.chat-place-voice-from-status-left-container-range'),
//

chatPlaceVoiceRecordContainer=document.querySelector('.chat-place-voice-record-container'),chatPlaceVoicelockDiv=document.querySelector('.chat-place-voicelock-div'),
chatPlaceVoiceLockIcon=document.querySelector('.chat-place-voice-lock-icon'),
chatPlaceLinkContainer=document.querySelector('.chat-place-link-container'),
chatPlaceStopRecord=document.querySelector('.chat-place-stop-record'),
chatPlaceLinkButton=document.querySelector('.chat-place-link-button'),
chatPlaceClicktoAudio=document.querySelector('.chat-place-click-to-audio'),
chatPlaceSendIcon=document.querySelector('.chat-place-send-icon'),
chatPlaceEmojiShow=document.querySelector('.chat-place-emoji-show'),
chatPlaceEmojiDiv=document.querySelector('.chat-place-emoji-div'),
chatPlaceEmojiIcon=document.querySelector('.chat-place-emoji-icon'),
chatPlaceEmojiButton=document.querySelector('.chat-place-emoji-button'),chatPlaceCommendAboutEmojiIcon=document.querySelector('.chat-place-emoji-icon'),
chatPlaceContainer=document.querySelector('.chat-place-container'),
chatPlaceSearchInputDiv=document.querySelector('.chat-place-search-input-div'),
chatPlaceKeyboadDiv=document.querySelector('.chat-place-keyboad-div'),
chatPlaceTextArea=document.querySelector('.chat-place-search-input');
        //chat-chat-place-container
        
        
        // TextArea 
        chatPlaceTextArea.addEventListener("keydown",(event)=>{
            let key=event.key;
            if (key==='Enter'){
                
                chatPlaceKeyboadDiv.style.height='38px';
                chatPlaceSearchInputDiv.style.height='35px';
                chatPlaceContainer.style.height='507px';
            } 
            chatPlaceTextAreaData()
        })
        function chatPlaceTextAreaData(){
            let keycount =chatPlaceTextArea.value.length;

                if(keycount ===20){
                    chatPlaceKeyboadDiv.style.height='38px';
                    chatPlaceSearchInputDiv.style.height='35px';
                    chatPlaceContainer.style.height='507px';
                }else if(keycount ===22){
                    chatPlaceKeyboadDiv.style.height='57px';
                    chatPlaceSearchInputDiv.style.height='54px';
                    chatPlaceContainer.style.height='489px';
                }else if(keycount ===44){
                    chatPlaceKeyboadDiv.style.height='75px';
                    chatPlaceSearchInputDiv.style.height='72px';
                    chatPlaceContainer.style.height='472px';
                }else if(keycount ===66){
                    chatPlaceKeyboadDiv.style.height='93px';
                    chatPlaceSearchInputDiv.style.height='90px';
                    chatPlaceContainer.style.height='455px';
                }
                // send button if statement
                if(keycount===0){
                    chatPlaceClicktoAudio.innerText='click to audio';
                    if(chatPlaceTextArea.value===''){
                        chatPlaceSendIcon.src='http://127.0.0.1:5500/zeeta-folder/icons/voice-icon.png'
                }
                    
                }else if(keycount >0){
                    chatPlaceClicktoAudio.innerText='click to send';
                    if(chatPlaceSendIcon.src==='http://127.0.0.1:5500/zeeta-folder/icons/voice-icon.png'){
                        chatPlaceSendIcon.src='http://127.0.0.1:5500/zeeta-folder/icons/send-icon.png'
                    }
                }
                console.log()
        }
        
        chatPlaceEmojiButton.addEventListener('click',()=>{
           if(chatPlaceEmojiIcon.src==="http://127.0.0.1:5500/zeeta-folder/icons/emoji-icon.png"){
            chatPlaceEmojiIcon.src="http://127.0.0.1:5500/zeeta-folder/icons/hidden-emoji-icon.png"
            chatPlaceEmojiDiv.style.display='block';
            chatPlaceEmojiShow.innerText='hidden emoji';
           }else{
            chatPlaceEmojiIcon.src="http://127.0.0.1:5500/zeeta-folder/icons/emoji-icon.png";
            chatPlaceEmojiShow.innerText='show emoji';
            chatPlaceEmojiDiv.style.display='none';
            
           }
       })
       
       
       
       // set voice
       chatPlaceStopRecord.addEventListener('mouseleave',()=>{
        chatPlaceVoiceRecordContainer.style.display='none';
       })
       // delete voice
       chatPlaceVoicelockDiv.addEventListener('mouseleave',()=>{
        chatPlaceVoiceRecordContainer.style.display='none';
       })

       // play voice Right
       chatPlaceVoiceRightContainerPlay.addEventListener('click',()=>{
        if(chatPlaceVoicePlayIconRight.src==='http://127.0.0.1:5500/zeeta-folder/icons/play-icon.png'){
            chatPlaceVoicePlayIconRight.src='icons/pause-icon.png';
            chatPlaceRedLightRight.style.display='block';
        }else{
            chatPlaceVoicePlayIconRight.src='icons/play-icon.png';
            chatPlaceRedLightRight.style.display='none';
        }
       })
       chatPlaceVoiceRightContainerRange.addEventListener('input',()=>{
        console.log(chatPlaceVoiceRightContainerRange.value);
        chatPlaceRangeValueRightP.style.width=`${chatPlaceVoiceRightContainerRange.value}%`;
       })

       // play voice Left
       chatPlaceVoiceLeftContainerPlay.addEventListener('click',()=>{
        if(chatPlaceVoicePlayIconLeft.src==='http://127.0.0.1:5500/zeeta-folder/icons/play-icon.png'){
            chatPlaceVoicePlayIconLeft.src='icons/pause-icon.png';
            chatPlaceRedLightLeft.style.display='block';
        }else{
            chatPlaceVoicePlayIconLeft.src='icons/play-icon.png';
            chatPlaceRedLightLeft.style.display='none';
        }
       })
       chatPlaceVoiceLeftContainerRange.addEventListener('input',()=>{
        console.log(chatPlaceVoiceLeftContainerRange.value);
        chatPlaceRangeValueLeftP.style.width=`${chatPlaceVoiceLeftContainerRange.value}%`;
       })


// play Audio Right
chatPlaceAudioRightContainerPlay.addEventListener('click',()=>{
    if(chatPlaceAudioPlayIconRight.src==='http://127.0.0.1:5500/zeeta-folder/icons/play-icon.png'){
        chatPlaceAudioPlayIconRight.src='icons/pause-icon.png';
        chatPlaceRedLightAudioRight.style.display='block';
    }else{
        chatPlaceAudioPlayIconRight.src='icons/play-icon.png';
        chatPlaceRedLightAudioRight.style.display='none';
    }
   })
   chatPlaceAudioRightContainerRange.addEventListener('input',()=>{
    console.log(chatPlaceAudioRightContainerRange.value);
    chatPlaceRangeValueAudioRightP.style.width=`${chatPlaceAudioRightContainerRange.value}%`;
   })

   // play audio Left
   chatPlaceAudioLeftContainerPlay.addEventListener('click',()=>{
    if(chatPlaceAudioPlayIconLeft.src==='http://127.0.0.1:5500/zeeta-folder/icons/play-icon.png'){
        chatPlaceAudioPlayIconLeft.src='icons/pause-icon.png';
        chatPlaceRedLightAudioLeft.style.display='block';
    }else{
        chatPlaceAudioPlayIconLeft.src='icons/play-icon.png';
        chatPlaceRedLightAudioLeft.style.display='none';
    }
   })
   chatPlaceAudioLeftContainerRange.addEventListener('input',()=>{
    console.log(chatPlaceAudioLeftContainerRange.value);
    chatPlaceRangeValueAudioLeftP.style.width=`${chatPlaceAudioLeftContainerRange.value}%`;
   })



    // play voice Right FromStatus
    chatPlaceVoiceFromStatusRightContainerPlay.addEventListener('click',()=>{
        if(chatPlaceVoiceFromStatusPlayIconRight.src==='http://127.0.0.1:5500/zeeta-folder/icons/play-icon.png'){
            chatPlaceVoiceFromStatusPlayIconRight.src='icons/pause-icon.png';
            chatPlaceRedLightRightFromStatus.style.display='block';
        }else{
            chatPlaceVoiceFromStatusPlayIconRight.src='icons/play-icon.png';
            chatPlaceRedLightRightFromStatus.style.display='none';
        }
       })
       chatPlaceVoiceFromStatusRightContainerRange.addEventListener('input',()=>{
        console.log(chatPlaceVoiceFromStatusRightContainerRange.value);
        chatPlaceRangeValueRightFromStatusP.style.width=`${chatPlaceVoiceFromStatusRightContainerRange.value}%`;
       })

       // play voice Left FromStatus
       chatPlaceVoiceFromStatusLeftContainerPlay.addEventListener('click',()=>{
        if(chatPlaceVoiceFromStatusPlayIconLeft.src==='http://127.0.0.1:5500/zeeta-folder/icons/play-icon.png'){
            chatPlaceVoiceFromStatusPlayIconLeft.src='icons/pause-icon.png';
            chatPlaceRedLightLeftFromStatus.style.display='block';
        }else{
            chatPlaceVoiceFromStatusPlayIconLeft.src='icons/play-icon.png';
            chatPlaceRedLightLeftFromStatus.style.display='none';
        }
       })
       chatPlaceVoiceFromStatusLeftContainerRange.addEventListener('input',()=>{
        console.log(chatPlaceVoiceFromStatusLeftContainerRange.value);
        chatPlaceRangeValueLeftFromStatusP.style.width=`${chatPlaceVoiceFromStatusLeftContainerRange.value}%`;
       })










// Show chatPlaceLinkContainer
chatPlaceLinkButton.addEventListener('click',()=>{
    chatPlaceLinkContainer.style.display='flex';
})
    
    
