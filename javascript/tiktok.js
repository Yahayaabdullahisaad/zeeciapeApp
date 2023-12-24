const commendTextRepliesButton=document.querySelector('.commend-text-replies-button'),
        commendRepliesArrowIcon=document.querySelector('.commend-text-replies-arrow-down-icon'),
        commendTextRepliesDiv=document.querySelector('.commend-text-replies-div'),
        commendRepliesTextLikeIcon=document.querySelector('.commend-replies-text-like-icon'),
        arrowChange=document.querySelector('.arrow-left-icon'),
        commendRepliesTextLikeIconButton=document.querySelector('.commend-replies-text-like-icon-p'),
        //voiceContainer
        voiceRedLight=document.querySelector('.voice-red-light'),
        voiceContainerPlay=document.querySelector('.voice-container-play'),
        voicePlayIcon=document.querySelector('.voice-play-icon'),
        voiceRangeValueP=document.querySelector('.voice-range-value-p'),
        voiceContainerRange=document.querySelector('.voice-container-range'),
        //
        //voiceRepliesContainer 
        voiceRepliesRedLight=document.querySelector('.voice-replies-red-light'),
        voiceRepliesContainerPlay=document.querySelector('.voice-replies-container-play'),
        voiceRepliesPlayIcon=document.querySelector('.voice-replies-play-icon'),
        voiceRepliesRangeValueP=document.querySelector('.voice-replies-range-value-p'),
        voiceRepliesContainerRange=document.querySelector('.voice-replies-container-range'),
        //
        voiceRecordContainer=document.querySelector('.voice-record-container'),
        voicelockDiv=document.querySelector('.voicelock-div'),
        voiceLockIcon=document.querySelector('.voice-lock-icon'),
        commendAboutStopRecord=document.querySelector('.commend-about-stop-record'),
        clicktoAudio=document.querySelector('.click-to-audio'),
        commendAboutSendIcon=document.querySelector('.commend-about-send-icon'),
        emojiShow=document.querySelector('.emoji-show'),
        emojiDiv=document.querySelector('.emoji-div'),
        commendAboutEmojiButton=document.querySelector('.commend-about-emoji-button'),commendAboutEmojiIcon=document.querySelector('.commend-about-emoji-icon'),
        commendAboutSend=document.querySelector('.commend-about-send'),
        commendAboutContainer=document.querySelector('.commend-about-container'),
        commendAboutSearchInputDiv=document.querySelector('.commend-about-search-input-div'),
        commendAboutKeyboadDiv=document.querySelector('.commend-about-keyboad-div'),
        commentButton=document.querySelector('.comment-button'),
        hiddenCommentAboutDiv=document.querySelector('.hidden-commend-about-div'),
        commentAboutDiv=document.querySelector('.commend-about-div'),
        shareButton=document.querySelector('.share-button'),
        commendAboutTextArea=document.querySelector('.commend-about-search-input'),
        shareDiv=document.querySelector('.share-div'),
        hinddenSharediv=document.querySelector('.hindden-sharediv-button'),
        likeIconChange=document.querySelector('.like-icon'),
        hiddenCommandLikeShare=document.querySelector('.comment-like-share-div'),
        commendTextLikeIcon=document.querySelector('.commend-text-like-icon'),commendTextLikeIconButton=document.querySelector('.commend-text-like-icon-p');
        
        document.querySelector('.shows-comment-like-share-div').addEventListener('click',()=>{
           if(arrowChange.src==="http://127.0.0.1:5500/zeeta-folder/icons/arrow-right-icon.png"){
            arrowChange.src="icons/arrow-left-icon.png"
            hiddenCommandLikeShare.style.display='none';
           }else{
            arrowChange.src="icons/arrow-right-icon.png";
            hiddenCommandLikeShare.style.display='block';
           }
        })
        document.querySelector('.like-button').addEventListener('click',()=>{
           
            if(likeIconChange.src==="http://127.0.0.1:5500/zeeta-folder/icons/like-icon.png"){
                likeIconChange.src="http://127.0.0.1:5500/zeeta-folder/icons/add-like-icon.png"
            }else{
                likeIconChange.src="http://127.0.0.1:5500/zeeta-folder/icons/like-icon.png";
            }
        })
        //commend page like buttun
        commendTextLikeIconButton.addEventListener('click',()=>{
            if(commendTextLikeIcon.src==="http://127.0.0.1:5500/zeeta-folder/icons/black-like-icon.png"){
                commendTextLikeIcon.src="http://127.0.0.1:5500/zeeta-folder/icons/add-like-icon.png"
            }else{
                commendTextLikeIcon.src="http://127.0.0.1:5500/zeeta-folder/icons/black-like-icon.png";
            }
        })

        //commendTextRepliesButton
        commendTextRepliesButton.addEventListener('click',()=>{
            
            if(commendRepliesArrowIcon.src==="http://127.0.0.1:5500/zeeta-folder/icons/arrow-down-black-icon.png"){
                commendRepliesArrowIcon.src="http://127.0.0.1:5500/zeeta-folder/icons/arrow-up-black-icon.png";
                commendTextRepliesDiv.style.display='block';
            }else{
                commendRepliesArrowIcon.src="http://127.0.0.1:5500/zeeta-folder/icons/arrow-down-black-icon.png";
                commendTextRepliesDiv.style.display='none';
            }
        })




        // Share Button
        shareButton.addEventListener('click',()=>{
            shareDiv.style.display='block';
        })
        //Hindden Sharediv
        hinddenSharediv.addEventListener('click',()=>{
            shareDiv.style.display='none';
        })
        // TextArea 
        commendAboutTextArea.addEventListener("keydown",(event)=>{
            let key=event.key;
            if (key==='Enter'){
                commendAboutKeyboadDiv.style.height='93px';
                commendAboutSearchInputDiv.style.height='90px';
                commendAboutContainer.style.height='232px';
            } 
            textAreaData()
        })
        function textAreaData(){
            let keycount =commendAboutTextArea.value.length;

                if(keycount ===20){
                    commendAboutKeyboadDiv.style.height='38px';
                    commendAboutSearchInputDiv.style.height='35px';
                    commendAboutContainer.style.height='284px';
                }else if(keycount ===22){
                    commendAboutKeyboadDiv.style.height='57px';
                    commendAboutSearchInputDiv.style.height='54px';
                    commendAboutContainer.style.height='267px';
                }else if(keycount ===44){
                    commendAboutKeyboadDiv.style.height='75px';
                    commendAboutSearchInputDiv.style.height='72px';
                    commendAboutContainer.style.height='250px';
                }else if(keycount ===66){
                    commendAboutKeyboadDiv.style.height='93px';
                    commendAboutSearchInputDiv.style.height='90px';
                    commendAboutContainer.style.height='232px';
                }
                // send button if statement send-icon.png
                if(keycount===0){
                    clicktoAudio.innerText='click to audio';
                    if(commendAboutTextArea.value===''){
                    commendAboutSendIcon.src='http://127.0.0.1:5500/zeeta-folder/icons/voice-icon.png'
                }
                    
                }else if(keycount >0){
                    clicktoAudio.innerText='click to send';
                    if(commendAboutSendIcon.src==='http://127.0.0.1:5500/zeeta-folder/icons/voice-icon.png'){
                        commendAboutSendIcon.src='http://127.0.0.1:5500/zeeta-folder/icons/send-icon.png'
                    }
                }
                console.log()
        }
        commendAboutSend.addEventListener('click',()=>{
            commendAboutKeyboadDiv.style.height='38px';
            commendAboutSearchInputDiv.style.height='35px';
            commendAboutContainer.style.height='284px';
        })
        
        // Show CommentAboutDiv
        commentButton.addEventListener('click',()=>{
            commentAboutDiv.style.display='block';
        })
        // Hidden CommentAboutDiv
        hiddenCommentAboutDiv.addEventListener('click',()=>{
            commentAboutDiv.style.display='none';
        })
        
        //comment About Emoji Button
        commendAboutEmojiButton.addEventListener('click',()=>{
           if(commendAboutEmojiIcon.src==="http://127.0.0.1:5500/zeeta-folder/icons/emoji-icon.png"){
            commendAboutEmojiIcon.src="http://127.0.0.1:5500/zeeta-folder/icons/hidden-emoji-icon.png"
            emojiDiv.style.display='block';
            emojiShow.innerText='hidden emoji';
           }else{
            commendAboutEmojiIcon.src="http://127.0.0.1:5500/zeeta-folder/icons/emoji-icon.png";
            emojiShow.innerText='show emoji';
            emojiDiv.style.display='none';
            
           }
       })
       commendAboutSend.addEventListener('click',()=>{
            if(commendAboutTextArea.value===''){
                if(commendAboutSendIcon.src==='http://127.0.0.1:5500/zeeta-folder/icons/send-icon.png'){
                    commendAboutSendIcon.src='http://127.0.0.1:5500/zeeta-folder/icons/voice-icon.png';
                }
                voiceRecordContainer.style.display='block';
            }else{
                voiceRecordContainer.style.display='none';
            }
            
       })
       // set voice
       commendAboutStopRecord.addEventListener('mouseleave',()=>{
        voiceRecordContainer.style.display='none';
       })
       // delete voice
       voicelockDiv.addEventListener('mouseleave',()=>{
        voiceRecordContainer.style.display='none';
       })

       // voice play audio
       voiceContainerPlay.addEventListener('click',()=>{
        if(voicePlayIcon.src==='http://127.0.0.1:5500/zeeta-folder/icons/play-icon.png'){
            voicePlayIcon.src='icons/pause-icon.png';
            voiceRedLight.style.display='block';
        }else{
            voicePlayIcon.src='icons/play-icon.png';
            voiceRedLight.style.display='none';
        }
       })
       voiceContainerRange.addEventListener('input',()=>{
        console.log(voiceContainerRange.value);
        voiceRangeValueP.style.width=`${voiceContainerRange.value}%`;
       })



       // vioce Replies play audio
       voiceRepliesContainerPlay.addEventListener('click',()=>{
        if(voiceRepliesPlayIcon.src==='http://127.0.0.1:5500/zeeta-folder/icons/play-icon.png'){
            voiceRepliesPlayIcon.src='icons/pause-icon.png';
            voiceRepliesRedLight.style.display='block';
        }else{
            voiceRepliesPlayIcon.src='icons/play-icon.png';
            voiceRepliesRedLight.style.display='none';
        }
       })
       voiceRepliesContainerRange.addEventListener('input',()=>{
        console.log(voiceRepliesContainerRange.value);
        voiceRepliesRangeValueP.style.width=`${voiceRepliesContainerRange.value}%`;
       })
       //commend page like buttun
       commendRepliesTextLikeIconButton.addEventListener('click',()=>{
        if(commendRepliesTextLikeIcon.src==="http://127.0.0.1:5500/zeeta-folder/icons/black-like-icon.png"){
            commendRepliesTextLikeIcon.src="http://127.0.0.1:5500/zeeta-folder/icons/add-like-icon.png"
        }else{
            commendRepliesTextLikeIcon.src="http://127.0.0.1:5500/zeeta-folder/icons/black-like-icon.png";
        }
    })


    

    