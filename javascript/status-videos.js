const statusDisplayVoiceRecordContainer=document.querySelector('.status-display-voice-record-container'),
statusDisplayVoicelockDiv=document.querySelector('.status-display-voicelock-div'),
statusDisplayVoiceLockIcon=document.querySelector('.status-display-voice-lock-icon'),
statusDisplayStopRecord=document.querySelector('.status-display-stop-record'),
statusDisplayClicktoAudio=document.querySelector('.status-display-click-to-audio'),
statusDisplaySendIcon=document.querySelector('.status-display-send-icon'),
statusDisplayEmojiShow=document.querySelector('.status-display-emoji-show'),
statusDisplayEmojiDiv=document.querySelector('.status-display-emoji-div'),
statusDisplayEmojiIcon=document.querySelector('.status-display-emoji-icon'),
statusDisplayEmojiButton=document.querySelector('.status-display-emoji-button'),statusDisplayCommendAboutEmojiIcon=document.querySelector('.status-display-emoji-icon'),
statusDisplaySend=document.querySelector('.status-display-send'),
statusDisplaySearchInputDiv=document.querySelector('.status-display-search-input-div'),
statusDisplayKeyboadDiv=document.querySelector('.status-display-keyboad-div'),
statusDisplayTextArea=document.querySelector('.status-display-search-input');
// TextArea 
statusDisplayTextArea.addEventListener("keydown",(event)=>{
    let key=event.key;
    if (key==='Enter'){
        statusDisplayKeyboadDiv.style.height='93px';
        statusDisplaySearchInputDiv.style.height='90px';
        statusDisplayEmojiDiv.style.bottom='98px';
    } 
    statusDisplayTextAreaData()
})
function statusDisplayTextAreaData(){
    let keycount =statusDisplayTextArea.value.length;

        if(keycount ===20){
            statusDisplayKeyboadDiv.style.height='38px';
            statusDisplaySearchInputDiv.style.height='35px';
            statusDisplayEmojiDiv.style.bottom='43px';
        }else if(keycount ===22){
            statusDisplayKeyboadDiv.style.height='57px';
            statusDisplaySearchInputDiv.style.height='54px';
            statusDisplayEmojiDiv.style.bottom='61px';
        }else if(keycount ===44){
            statusDisplayKeyboadDiv.style.height='75px';
            statusDisplaySearchInputDiv.style.height='72px';
            statusDisplayEmojiDiv.style.bottom='78px';
        }else if(keycount ===66){
            statusDisplayKeyboadDiv.style.height='93px';
            statusDisplaySearchInputDiv.style.height='90px';
            statusDisplayEmojiDiv.style.bottom='97px';
        }
        // send button if statement
        if(keycount===0){
            statusDisplayClicktoAudio.innerText='click to audio';
            if(statusDisplayTextArea.value===''){
                statusDisplaySendIcon.src='http://127.0.0.1:5500/zeeta-folder/icons/voice-icon.png'
        }
            
        }else if(keycount >0){
            statusDisplayClicktoAudio.innerText='click to send';
            if(statusDisplaySendIcon.src==='http://127.0.0.1:5500/zeeta-folder/icons/voice-icon.png'){
                statusDisplaySendIcon.src='http://127.0.0.1:5500/zeeta-folder/icons/send-icon.png'
            }
        }
}
statusDisplaySend.addEventListener('click',()=>{
    statusDisplayKeyboadDiv.style.height='38px';
    statusDisplaySearchInputDiv.style.height='35px';
    statusDisplayEmojiDiv.style.bottom='43px';
})
statusDisplayEmojiButton.addEventListener('click',()=>{
    if(statusDisplayEmojiIcon.src==="http://127.0.0.1:5500/zeeta-folder/icons/emoji-icon.png"){
    statusDisplayEmojiIcon.src="http://127.0.0.1:5500/zeeta-folder/icons/hidden-emoji-icon.png"
    statusDisplayEmojiDiv.style.display='block';
    statusDisplayEmojiShow.innerText='hidden emoji';
    }else{
    statusDisplayEmojiIcon.src="http://127.0.0.1:5500/zeeta-folder/icons/emoji-icon.png";
    statusDisplayEmojiShow.innerText='show emoji';
    statusDisplayEmojiDiv.style.display='none';
    
    }
})
statusDisplaySend.addEventListener('click',()=>{
    if(statusDisplayTextArea.value===''){
        if(statusDisplaySendIcon.src==='http://127.0.0.1:5500/zeeta-folder/icons/send-icon.png'){
            statusDisplaySendIcon.src='http://127.0.0.1:5500/zeeta-folder/icons/voice-icon.png';
        }
        statusDisplayVoiceRecordContainer.style.display='block';
    }else{
        statusDisplayVoiceRecordContainer.style.display='none';
    }
    
})     
// set voice
statusDisplayStopRecord.addEventListener('mouseleave',()=>{
statusDisplayVoiceRecordContainer.style.display='none';
})
// delete voice
statusDisplayVoicelockDiv.addEventListener('mouseleave',()=>{
statusDisplayVoiceRecordContainer.style.display='none';
})





// status videos display
const statusVideoDisplayDiv=document.querySelector('.status-video-display-div'),
StatusRecentContainer=document.querySelector('.status-recent-container'),//add left-
statusVideoVideoTag=document.querySelector('.status-video-video-tag')
eachImageTimeDiv=document.querySelector('.each-image-time-div'),
//i-image-time-p to ii iii iv ....
iImageTimep=document.querySelector('.i-image-time-p'),
iiImageTimep=document.querySelector('.ii-image-time-p'),
iiiImageTimep=document.querySelector('.iii-image-time-p'),
ivImageTimep=document.querySelector('.iv-image-time-p'),
vImageTimep=document.querySelector('.v-image-time-p'),
viImageTimep=document.querySelector('.vi-image-time-p'),
viiImageTimep=document.querySelector('.vii-image-time-p'),
viiiImageTimep=document.querySelector('.viii-image-time-p'),
ixImageTimep=document.querySelector('.ix-image-time-p'),
xImageTimep=document.querySelector('.x-image-time-p'),
xiImageTimep=document.querySelector('.xi-image-time-p'),
xiiImageTimep=document.querySelector('.xii-image-time-p'),
xiiiImageTimep=document.querySelector('.xiii-image-time-p'),
xivImageTimep=document.querySelector('.xiv-image-time-p'),
xvImageTimep=document.querySelector('.xv-image-time-p'),
xviImageTimep=document.querySelector('.xvi-image-time-p'),
xviiImageTimep=document.querySelector('.xvii-image-time-p'),
xviiiImageTimep=document.querySelector('.xviii-image-time-p'),
xixImageTimep=document.querySelector('.xix-image-time-p'),
xxImageTimep=document.querySelector('.xx-image-time-p'),



// status videos display
StatusRecentContainer.addEventListener('click',()=>{
    statusVideoDisplayDiv.style.display='block';
    let databaseStatusImage=['background-imgs/background-1.png','background-imgs/background-2.png','background-imgs/background-3.png','background-imgs/background-4.png','background-imgs/background-5.png','background-imgs/background-6.png','background-imgs/background-7.png','background-imgs/background-8.png','background-imgs/background-9.png','background-imgs/background-10.png','background-imgs/background-11.png','background-imgs/background-12.png','background-imgs/background-13.png','background-imgs/background-14.png','background-imgs/background-15.png','background-imgs/background-16.png','background-imgs/background-17.png','background-imgs/background-18.png','background-imgs/background-19.png','background-imgs/background-20.png'];
    /**/
    if(Number(databaseStatusImage.length)===1){
        setTimeout(()=>{
            statusVideoVideoTag.src=databaseStatusImage[0];
            eachImageTimeDiv.style.gridTemplateColumns='1fr';
            iImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iImageTimep.style.animationName='none';
                iImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },0)
    }else if(Number(databaseStatusImage.length)===2){
        setTimeout(()=>{
            //i image
            statusVideoVideoTag.src=databaseStatusImage[0];
            eachImageTimeDiv.style.gridTemplateColumns='1fr 1fr';
            iImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iImageTimep.style.animationName='none';
                iImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },0)
        setTimeout(()=>{
            //ii image
            statusVideoVideoTag.src=databaseStatusImage[1];
            iiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiImageTimep.style.animationName='none';
                iiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },10000)
        
    }else if(Number(databaseStatusImage.length)===3){
        setTimeout(()=>{
            //i image
            statusVideoVideoTag.src=databaseStatusImage[0];
            eachImageTimeDiv.style.gridTemplateColumns='1fr 1fr 1fr';
            iImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iImageTimep.style.animationName='none';
                iImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },0)
        setTimeout(()=>{
            //ii image
            statusVideoVideoTag.src=databaseStatusImage[1];
            iiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiImageTimep.style.animationName='none';
                iiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },10000)
        setTimeout(()=>{
            //iii image
            statusVideoVideoTag.src=databaseStatusImage[2];
            iiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiiImageTimep.style.animationName='none';
                iiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },20000)
        
    }else if(Number(databaseStatusImage.length)===4){
        setTimeout(()=>{
            //i image
            statusVideoVideoTag.src=databaseStatusImage[0];
            eachImageTimeDiv.style.gridTemplateColumns='1fr 1fr 1fr 1fr';
            iImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iImageTimep.style.animationName='none';
                iImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },0)
        setTimeout(()=>{
            //ii image
            statusVideoVideoTag.src=databaseStatusImage[1];
            iiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiImageTimep.style.animationName='none';
                iiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },10000)
        setTimeout(()=>{
            //iii image
            statusVideoVideoTag.src=databaseStatusImage[2];
            iiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiiImageTimep.style.animationName='none';
                iiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },20000)
        setTimeout(()=>{
            //iv image
            statusVideoVideoTag.src=databaseStatusImage[3];
            ivImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                ivImageTimep.style.animationName='none';
                ivImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },30000) 

    }else if(Number(databaseStatusImage.length)===5){
        setTimeout(()=>{
            //i image
            statusVideoVideoTag.src=databaseStatusImage[0];
            eachImageTimeDiv.style.gridTemplateColumns='1fr 1fr 1fr 1fr 1fr';
            iImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iImageTimep.style.animationName='none';
                iImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },0)
        setTimeout(()=>{
            //ii image
            statusVideoVideoTag.src=databaseStatusImage[1];
            iiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiImageTimep.style.animationName='none';
                iiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },10000)
        setTimeout(()=>{
            //iii image
            statusVideoVideoTag.src=databaseStatusImage[2];
            iiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiiImageTimep.style.animationName='none';
                iiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },20000)
        setTimeout(()=>{
            //iv image
            statusVideoVideoTag.src=databaseStatusImage[3];
            ivImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                ivImageTimep.style.animationName='none';
                ivImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },30000) 
        setTimeout(()=>{
            //v image
            statusVideoVideoTag.src=databaseStatusImage[4];
            vImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                vImageTimep.style.animationName='none';
                vImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },40000) 
        
    }else if(Number(databaseStatusImage.length)===6){
        setTimeout(()=>{
            //i image
            statusVideoVideoTag.src=databaseStatusImage[0];
            eachImageTimeDiv.style.gridTemplateColumns='1fr 1fr 1fr 1fr 1fr 1fr';
            iImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iImageTimep.style.animationName='none';
                iImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },0)
        setTimeout(()=>{
            //ii image
            statusVideoVideoTag.src=databaseStatusImage[1];
            iiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiImageTimep.style.animationName='none';
                iiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },10000)
        setTimeout(()=>{
            //iii image
            statusVideoVideoTag.src=databaseStatusImage[2];
            iiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiiImageTimep.style.animationName='none';
                iiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },20000)
        setTimeout(()=>{
            //iv image
            statusVideoVideoTag.src=databaseStatusImage[3];
            ivImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                ivImageTimep.style.animationName='none';
                ivImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },30000) 
        setTimeout(()=>{
            //v image
            statusVideoVideoTag.src=databaseStatusImage[4];
            vImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                vImageTimep.style.animationName='none';
                vImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },40000) 
        setTimeout(()=>{
            //vi image
            statusVideoVideoTag.src=databaseStatusImage[5];
            viImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viImageTimep.style.animationName='none';
                viImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },50000)
        
    }else if(Number(databaseStatusImage.length)===7){
        setTimeout(()=>{
            //i image
            statusVideoVideoTag.src=databaseStatusImage[0];
            eachImageTimeDiv.style.gridTemplateColumns='1fr 1fr 1fr 1fr 1fr 1fr 1fr';
            iImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iImageTimep.style.animationName='none';
                iImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },0)
        setTimeout(()=>{
            //ii image
            statusVideoVideoTag.src=databaseStatusImage[1];
            iiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiImageTimep.style.animationName='none';
                iiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },10000)
        setTimeout(()=>{
            //iii image
            statusVideoVideoTag.src=databaseStatusImage[2];
            iiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiiImageTimep.style.animationName='none';
                iiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },20000)
        setTimeout(()=>{
            //iv image
            statusVideoVideoTag.src=databaseStatusImage[3];
            ivImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                ivImageTimep.style.animationName='none';
                ivImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },30000) 
        setTimeout(()=>{
            //v image
            statusVideoVideoTag.src=databaseStatusImage[4];
            vImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                vImageTimep.style.animationName='none';
                vImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },40000) 
        setTimeout(()=>{
            //vi image
            statusVideoVideoTag.src=databaseStatusImage[5];
            viImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viImageTimep.style.animationName='none';
                viImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },50000)
        setTimeout(()=>{
            //vii image
            statusVideoVideoTag.src=databaseStatusImage[5];
            viiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viiImageTimep.style.animationName='none';
                viiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },60000)
    }else if(Number(databaseStatusImage.length)===8){
        setTimeout(()=>{
            //i image
            statusVideoVideoTag.src=databaseStatusImage[0];
            eachImageTimeDiv.style.gridTemplateColumns='1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr';
            iImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iImageTimep.style.animationName='none';
                iImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },0)
        setTimeout(()=>{
            //ii image
            statusVideoVideoTag.src=databaseStatusImage[1];
            iiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiImageTimep.style.animationName='none';
                iiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },10000)
        setTimeout(()=>{
            //iii image
            statusVideoVideoTag.src=databaseStatusImage[2];
            iiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiiImageTimep.style.animationName='none';
                iiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },20000)
        setTimeout(()=>{
            //iv image
            statusVideoVideoTag.src=databaseStatusImage[3];
            ivImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                ivImageTimep.style.animationName='none';
                ivImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },30000) 
        setTimeout(()=>{
            //v image
            statusVideoVideoTag.src=databaseStatusImage[4];
            vImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                vImageTimep.style.animationName='none';
                vImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },40000) 
        setTimeout(()=>{
            //vi image
            statusVideoVideoTag.src=databaseStatusImage[5];
            viImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viImageTimep.style.animationName='none';
                viImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },50000)
        /////////////////////////////////////////////////
        setTimeout(()=>{
            //vii image
            statusVideoVideoTag.src=databaseStatusImage[5];
            viiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viiImageTimep.style.animationName='none';
                viiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },60000)
        setTimeout(()=>{
            //viii image
            statusVideoVideoTag.src=databaseStatusImage[7];
            viiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viiiImageTimep.style.animationName='none';
                viiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },70000)
    }else if(Number(databaseStatusImage.length)===9){
        setTimeout(()=>{
            //i image
            statusVideoVideoTag.src=databaseStatusImage[0];
            eachImageTimeDiv.style.gridTemplateColumns='1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr';
            iImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iImageTimep.style.animationName='none';
                iImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },0)
        setTimeout(()=>{
            //ii image
            statusVideoVideoTag.src=databaseStatusImage[1];
            iiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiImageTimep.style.animationName='none';
                iiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },10000)
        setTimeout(()=>{
            //iii image
            statusVideoVideoTag.src=databaseStatusImage[2];
            iiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiiImageTimep.style.animationName='none';
                iiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },20000)
        setTimeout(()=>{
            //iv image
            statusVideoVideoTag.src=databaseStatusImage[3];
            ivImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                ivImageTimep.style.animationName='none';
                ivImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },30000) 
        setTimeout(()=>{
            //v image
            statusVideoVideoTag.src=databaseStatusImage[4];
            vImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                vImageTimep.style.animationName='none';
                vImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },40000) 
        setTimeout(()=>{
            //vi image
            statusVideoVideoTag.src=databaseStatusImage[5];
            viImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viImageTimep.style.animationName='none';
                viImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },50000)
        setTimeout(()=>{
            //vii image
            statusVideoVideoTag.src=databaseStatusImage[5];
            viiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viiImageTimep.style.animationName='none';
                viiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },60000)
        setTimeout(()=>{
            //viii image
            statusVideoVideoTag.src=databaseStatusImage[7];
            viiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viiiImageTimep.style.animationName='none';
                viiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },70000)
        setTimeout(()=>{
            //ix image
            statusVideoVideoTag.src=databaseStatusImage[8];
            ixImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                ixImageTimep.style.animationName='none';
                ixImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },80000)
    }else if(Number(databaseStatusImage.length)===10){
        setTimeout(()=>{
            //i image
            statusVideoVideoTag.src=databaseStatusImage[0];
            eachImageTimeDiv.style.gridTemplateColumns='1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr';
            iImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iImageTimep.style.animationName='none';
                iImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },0)
        setTimeout(()=>{
            //ii image
            statusVideoVideoTag.src=databaseStatusImage[1];
            iiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiImageTimep.style.animationName='none';
                iiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },10000)
        setTimeout(()=>{
            //iii image
            statusVideoVideoTag.src=databaseStatusImage[2];
            iiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiiImageTimep.style.animationName='none';
                iiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },20000)
        setTimeout(()=>{
            //iv image
            statusVideoVideoTag.src=databaseStatusImage[3];
            ivImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                ivImageTimep.style.animationName='none';
                ivImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },30000) 
        setTimeout(()=>{
            //v image
            statusVideoVideoTag.src=databaseStatusImage[4];
            vImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                vImageTimep.style.animationName='none';
                vImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },40000) 
        setTimeout(()=>{
            //vi image
            statusVideoVideoTag.src=databaseStatusImage[5];
            viImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viImageTimep.style.animationName='none';
                viImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },50000)
        setTimeout(()=>{
            //vii image
            statusVideoVideoTag.src=databaseStatusImage[5];
            viiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viiImageTimep.style.animationName='none';
                viiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },60000)
        setTimeout(()=>{
            //viii image
            statusVideoVideoTag.src=databaseStatusImage[7];
            viiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viiiImageTimep.style.animationName='none';
                viiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },70000)
        setTimeout(()=>{
            //ix image
            statusVideoVideoTag.src=databaseStatusImage[8];
            ixImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                ixImageTimep.style.animationName='none';
                ixImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },80000)
        setTimeout(()=>{
            //x image
            statusVideoVideoTag.src=databaseStatusImage[9];
            xImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xImageTimep.style.animationName='none';
                xImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },90000)

    }else if(Number(databaseStatusImage.length)===11){
        setTimeout(()=>{
            //i image
            statusVideoVideoTag.src=databaseStatusImage[0];
            eachImageTimeDiv.style.gridTemplateColumns='1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr';
            iImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iImageTimep.style.animationName='none';
                iImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },0)
        setTimeout(()=>{
            //ii image
            statusVideoVideoTag.src=databaseStatusImage[1];
            iiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiImageTimep.style.animationName='none';
                iiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },10000)
        setTimeout(()=>{
            //iii image
            statusVideoVideoTag.src=databaseStatusImage[2];
            iiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiiImageTimep.style.animationName='none';
                iiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },20000)
        setTimeout(()=>{
            //iv image
            statusVideoVideoTag.src=databaseStatusImage[3];
            ivImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                ivImageTimep.style.animationName='none';
                ivImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },30000) 
        setTimeout(()=>{
            //v image
            statusVideoVideoTag.src=databaseStatusImage[4];
            vImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                vImageTimep.style.animationName='none';
                vImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },40000) 
        setTimeout(()=>{
            //vi image
            statusVideoVideoTag.src=databaseStatusImage[5];
            viImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viImageTimep.style.animationName='none';
                viImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },50000)
        setTimeout(()=>{
            //vii image
            statusVideoVideoTag.src=databaseStatusImage[5];
            viiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viiImageTimep.style.animationName='none';
                viiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },60000)
        setTimeout(()=>{
            //viii image
            statusVideoVideoTag.src=databaseStatusImage[7];
            viiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viiiImageTimep.style.animationName='none';
                viiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },70000)
        setTimeout(()=>{
            //ix image
            statusVideoVideoTag.src=databaseStatusImage[8];
            ixImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                ixImageTimep.style.animationName='none';
                ixImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },80000)
        setTimeout(()=>{
            //x image
            statusVideoVideoTag.src=databaseStatusImage[9];
            xImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xImageTimep.style.animationName='none';
                xImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },90000)
        setTimeout(()=>{
            //xi image
            statusVideoVideoTag.src=databaseStatusImage[10];
            xiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xiImageTimep.style.animationName='none';
                xiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },100000)
    }else if(Number(databaseStatusImage.length)===12){
        setTimeout(()=>{
            //i image
            statusVideoVideoTag.src=databaseStatusImage[0];
            eachImageTimeDiv.style.gridTemplateColumns='1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr';
            iImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iImageTimep.style.animationName='none';
                iImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },0)
        setTimeout(()=>{
            //ii image
            statusVideoVideoTag.src=databaseStatusImage[1];
            iiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiImageTimep.style.animationName='none';
                iiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },10000)
        setTimeout(()=>{
            //iii image
            statusVideoVideoTag.src=databaseStatusImage[2];
            iiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiiImageTimep.style.animationName='none';
                iiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },20000)
        setTimeout(()=>{
            //iv image
            statusVideoVideoTag.src=databaseStatusImage[3];
            ivImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                ivImageTimep.style.animationName='none';
                ivImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },30000) 
        setTimeout(()=>{
            //v image
            statusVideoVideoTag.src=databaseStatusImage[4];
            vImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                vImageTimep.style.animationName='none';
                vImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },40000) 
        setTimeout(()=>{
            //vi image
            statusVideoVideoTag.src=databaseStatusImage[5];
            viImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viImageTimep.style.animationName='none';
                viImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },50000)
        setTimeout(()=>{
            //vii image
            statusVideoVideoTag.src=databaseStatusImage[5];
            viiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viiImageTimep.style.animationName='none';
                viiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },60000)
        setTimeout(()=>{
            //viii image
            statusVideoVideoTag.src=databaseStatusImage[7];
            viiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viiiImageTimep.style.animationName='none';
                viiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },70000)
        setTimeout(()=>{
            //ix image
            statusVideoVideoTag.src=databaseStatusImage[8];
            ixImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                ixImageTimep.style.animationName='none';
                ixImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },80000)
        setTimeout(()=>{
            //x image
            statusVideoVideoTag.src=databaseStatusImage[9];
            xImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xImageTimep.style.animationName='none';
                xImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },90000)
        setTimeout(()=>{
            //xi image
            statusVideoVideoTag.src=databaseStatusImage[10];
            xiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xiImageTimep.style.animationName='none';
                xiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },100000)
        setTimeout(()=>{
            //xii image
            statusVideoVideoTag.src=databaseStatusImage[11];
            xiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xiiImageTimep.style.animationName='none';
                xiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },110000)
        
    }else if(Number(databaseStatusImage.length)===13){
        setTimeout(()=>{
            //i image
            statusVideoVideoTag.src=databaseStatusImage[0];
            eachImageTimeDiv.style.gridTemplateColumns='1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr';
            iImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iImageTimep.style.animationName='none';
                iImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },0)
        setTimeout(()=>{
            //ii image
            statusVideoVideoTag.src=databaseStatusImage[1];
            iiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiImageTimep.style.animationName='none';
                iiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },10000)
        setTimeout(()=>{
            //iii image
            statusVideoVideoTag.src=databaseStatusImage[2];
            iiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiiImageTimep.style.animationName='none';
                iiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },20000)
        setTimeout(()=>{
            //iv image
            statusVideoVideoTag.src=databaseStatusImage[3];
            ivImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                ivImageTimep.style.animationName='none';
                ivImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },30000) 
        setTimeout(()=>{
            //v image
            statusVideoVideoTag.src=databaseStatusImage[4];
            vImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                vImageTimep.style.animationName='none';
                vImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },40000) 
        setTimeout(()=>{
            //vi image
            statusVideoVideoTag.src=databaseStatusImage[5];
            viImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viImageTimep.style.animationName='none';
                viImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },50000)
        setTimeout(()=>{
            //vii image
            statusVideoVideoTag.src=databaseStatusImage[5];
            viiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viiImageTimep.style.animationName='none';
                viiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },60000)
        setTimeout(()=>{
            //viii image
            statusVideoVideoTag.src=databaseStatusImage[7];
            viiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viiiImageTimep.style.animationName='none';
                viiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },70000)
        setTimeout(()=>{
            //ix image
            statusVideoVideoTag.src=databaseStatusImage[8];
            ixImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                ixImageTimep.style.animationName='none';
                ixImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },80000)
        setTimeout(()=>{
            //x image
            statusVideoVideoTag.src=databaseStatusImage[9];
            xImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xImageTimep.style.animationName='none';
                xImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },90000)
        setTimeout(()=>{
            //xi image
            statusVideoVideoTag.src=databaseStatusImage[10];
            xiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xiImageTimep.style.animationName='none';
                xiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },100000)
        setTimeout(()=>{
            //xii image
            statusVideoVideoTag.src=databaseStatusImage[11];
            xiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xiiImageTimep.style.animationName='none';
                xiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },110000)
        setTimeout(()=>{
            //xiii image
            statusVideoVideoTag.src=databaseStatusImage[12];
            xiiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xiiiImageTimep.style.animationName='none';
                xiiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },120000)
        
    }else if(Number(databaseStatusImage.length)===14){
        setTimeout(()=>{
            //i image
            statusVideoVideoTag.src=databaseStatusImage[0];
            eachImageTimeDiv.style.gridTemplateColumns='1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr';
            iImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iImageTimep.style.animationName='none';
                iImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },0)
        setTimeout(()=>{
            //ii image
            statusVideoVideoTag.src=databaseStatusImage[1];
            iiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiImageTimep.style.animationName='none';
                iiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },10000)
        setTimeout(()=>{
            //iii image
            statusVideoVideoTag.src=databaseStatusImage[2];
            iiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiiImageTimep.style.animationName='none';
                iiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },20000)
        setTimeout(()=>{
            //iv image
            statusVideoVideoTag.src=databaseStatusImage[3];
            ivImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                ivImageTimep.style.animationName='none';
                ivImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },30000) 
        setTimeout(()=>{
            //v image
            statusVideoVideoTag.src=databaseStatusImage[4];
            vImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                vImageTimep.style.animationName='none';
                vImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },40000) 
        setTimeout(()=>{
            //vi image
            statusVideoVideoTag.src=databaseStatusImage[5];
            viImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viImageTimep.style.animationName='none';
                viImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },50000)
        setTimeout(()=>{
            //vii image
            statusVideoVideoTag.src=databaseStatusImage[5];
            viiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viiImageTimep.style.animationName='none';
                viiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },60000)
        setTimeout(()=>{
            //viii image
            statusVideoVideoTag.src=databaseStatusImage[7];
            viiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viiiImageTimep.style.animationName='none';
                viiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },70000)
        setTimeout(()=>{
            //ix image
            statusVideoVideoTag.src=databaseStatusImage[8];
            ixImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                ixImageTimep.style.animationName='none';
                ixImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },80000)
        setTimeout(()=>{
            //x image
            statusVideoVideoTag.src=databaseStatusImage[9];
            xImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xImageTimep.style.animationName='none';
                xImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },90000)
        setTimeout(()=>{
            //xi image
            statusVideoVideoTag.src=databaseStatusImage[10];
            xiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xiImageTimep.style.animationName='none';
                xiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },100000)
        setTimeout(()=>{
            //xii image
            statusVideoVideoTag.src=databaseStatusImage[11];
            xiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xiiImageTimep.style.animationName='none';
                xiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },110000)
        setTimeout(()=>{
            //xiii image
            statusVideoVideoTag.src=databaseStatusImage[12];
            xiiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xiiiImageTimep.style.animationName='none';
                xiiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },120000)
        setTimeout(()=>{
            //xiv image
            statusVideoVideoTag.src=databaseStatusImage[13];
            xivImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xivImageTimep.style.animationName='none';
                xivImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },130000)
        
    }else if(Number(databaseStatusImage.length)===15){
        setTimeout(()=>{
            //i image
            statusVideoVideoTag.src=databaseStatusImage[0];
            eachImageTimeDiv.style.gridTemplateColumns='1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr';
            iImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iImageTimep.style.animationName='none';
                iImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },0)
        setTimeout(()=>{
            //ii image
            statusVideoVideoTag.src=databaseStatusImage[1];
            iiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiImageTimep.style.animationName='none';
                iiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },10000)
        setTimeout(()=>{
            //iii image
            statusVideoVideoTag.src=databaseStatusImage[2];
            iiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiiImageTimep.style.animationName='none';
                iiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },20000)
        setTimeout(()=>{
            //iv image
            statusVideoVideoTag.src=databaseStatusImage[3];
            ivImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                ivImageTimep.style.animationName='none';
                ivImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },30000) 
        setTimeout(()=>{
            //v image
            statusVideoVideoTag.src=databaseStatusImage[4];
            vImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                vImageTimep.style.animationName='none';
                vImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },40000) 
        setTimeout(()=>{
            //vi image
            statusVideoVideoTag.src=databaseStatusImage[5];
            viImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viImageTimep.style.animationName='none';
                viImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },50000)
        setTimeout(()=>{
            //vii image
            statusVideoVideoTag.src=databaseStatusImage[5];
            viiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viiImageTimep.style.animationName='none';
                viiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },60000)
        setTimeout(()=>{
            //viii image
            statusVideoVideoTag.src=databaseStatusImage[7];
            viiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viiiImageTimep.style.animationName='none';
                viiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },70000)
        setTimeout(()=>{
            //ix image
            statusVideoVideoTag.src=databaseStatusImage[8];
            ixImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                ixImageTimep.style.animationName='none';
                ixImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },80000)
        setTimeout(()=>{
            //x image
            statusVideoVideoTag.src=databaseStatusImage[9];
            xImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xImageTimep.style.animationName='none';
                xImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },90000)
        setTimeout(()=>{
            //xi image
            statusVideoVideoTag.src=databaseStatusImage[10];
            xiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xiImageTimep.style.animationName='none';
                xiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },100000)
        setTimeout(()=>{
            //xii image
            statusVideoVideoTag.src=databaseStatusImage[11];
            xiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xiiImageTimep.style.animationName='none';
                xiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },110000)
        setTimeout(()=>{
            //xiii image
            statusVideoVideoTag.src=databaseStatusImage[12];
            xiiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xiiiImageTimep.style.animationName='none';
                xiiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },120000)
        setTimeout(()=>{
            //xiv image
            statusVideoVideoTag.src=databaseStatusImage[13];
            xivImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xivImageTimep.style.animationName='none';
                xivImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },130000)
        setTimeout(()=>{
            //xv image
            statusVideoVideoTag.src=databaseStatusImage[14];
            xvImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xvImageTimep.style.animationName='none';
                xvImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },140000)
        
    }else if(Number(databaseStatusImage.length)===16){
        setTimeout(()=>{
            //i image
            statusVideoVideoTag.src=databaseStatusImage[0];
            eachImageTimeDiv.style.gridTemplateColumns='1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr';
            iImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iImageTimep.style.animationName='none';
                iImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },0)
        setTimeout(()=>{
            //ii image
            statusVideoVideoTag.src=databaseStatusImage[1];
            iiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiImageTimep.style.animationName='none';
                iiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },10000)
        setTimeout(()=>{
            //iii image
            statusVideoVideoTag.src=databaseStatusImage[2];
            iiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiiImageTimep.style.animationName='none';
                iiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },20000)
        setTimeout(()=>{
            //iv image
            statusVideoVideoTag.src=databaseStatusImage[3];
            ivImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                ivImageTimep.style.animationName='none';
                ivImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },30000) 
        setTimeout(()=>{
            //v image
            statusVideoVideoTag.src=databaseStatusImage[4];
            vImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                vImageTimep.style.animationName='none';
                vImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },40000) 
        setTimeout(()=>{
            //vi image
            statusVideoVideoTag.src=databaseStatusImage[5];
            viImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viImageTimep.style.animationName='none';
                viImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },50000)
        setTimeout(()=>{
            //vii image
            statusVideoVideoTag.src=databaseStatusImage[5];
            viiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viiImageTimep.style.animationName='none';
                viiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },60000)
        setTimeout(()=>{
            //viii image
            statusVideoVideoTag.src=databaseStatusImage[7];
            viiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viiiImageTimep.style.animationName='none';
                viiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },70000)
        setTimeout(()=>{
            //ix image
            statusVideoVideoTag.src=databaseStatusImage[8];
            ixImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                ixImageTimep.style.animationName='none';
                ixImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },80000)
        setTimeout(()=>{
            //x image
            statusVideoVideoTag.src=databaseStatusImage[9];
            xImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xImageTimep.style.animationName='none';
                xImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },90000)
        setTimeout(()=>{
            //xi image
            statusVideoVideoTag.src=databaseStatusImage[10];
            xiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xiImageTimep.style.animationName='none';
                xiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },100000)
        setTimeout(()=>{
            //xii image
            statusVideoVideoTag.src=databaseStatusImage[11];
            xiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xiiImageTimep.style.animationName='none';
                xiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },110000)
        setTimeout(()=>{
            //xiii image
            statusVideoVideoTag.src=databaseStatusImage[12];
            xiiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xiiiImageTimep.style.animationName='none';
                xiiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },120000)
        setTimeout(()=>{
            //xiv image
            statusVideoVideoTag.src=databaseStatusImage[13];
            xivImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xivImageTimep.style.animationName='none';
                xivImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },130000)
        setTimeout(()=>{
            //xv image
            statusVideoVideoTag.src=databaseStatusImage[14];
            xvImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xvImageTimep.style.animationName='none';
                xvImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },140000)
        setTimeout(()=>{
            //xvi image
            statusVideoVideoTag.src=databaseStatusImage[15];
            xviImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xviImageTimep.style.animationName='none';
                xviImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },150000)
        
    }else if(Number(databaseStatusImage.length)===17){
        setTimeout(()=>{
            //i image
            statusVideoVideoTag.src=databaseStatusImage[0];
            eachImageTimeDiv.style.gridTemplateColumns='1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ';
            iImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iImageTimep.style.animationName='none';
                iImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },0)
        setTimeout(()=>{
            //ii image
            statusVideoVideoTag.src=databaseStatusImage[1];
            iiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiImageTimep.style.animationName='none';
                iiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },10000)
        setTimeout(()=>{
            //iii image
            statusVideoVideoTag.src=databaseStatusImage[2];
            iiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiiImageTimep.style.animationName='none';
                iiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },20000)
        setTimeout(()=>{
            //iv image
            statusVideoVideoTag.src=databaseStatusImage[3];
            ivImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                ivImageTimep.style.animationName='none';
                ivImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },30000) 
        setTimeout(()=>{
            //v image
            statusVideoVideoTag.src=databaseStatusImage[4];
            vImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                vImageTimep.style.animationName='none';
                vImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },40000) 
        setTimeout(()=>{
            //vi image
            statusVideoVideoTag.src=databaseStatusImage[5];
            viImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viImageTimep.style.animationName='none';
                viImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },50000)
        setTimeout(()=>{
            //vii image
            statusVideoVideoTag.src=databaseStatusImage[5];
            viiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viiImageTimep.style.animationName='none';
                viiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },60000)
        setTimeout(()=>{
            //viii image
            statusVideoVideoTag.src=databaseStatusImage[7];
            viiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viiiImageTimep.style.animationName='none';
                viiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },70000)
        setTimeout(()=>{
            //ix image
            statusVideoVideoTag.src=databaseStatusImage[8];
            ixImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                ixImageTimep.style.animationName='none';
                ixImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },80000)
        setTimeout(()=>{
            //x image
            statusVideoVideoTag.src=databaseStatusImage[9];
            xImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xImageTimep.style.animationName='none';
                xImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },90000)
        setTimeout(()=>{
            //xi image
            statusVideoVideoTag.src=databaseStatusImage[10];
            xiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xiImageTimep.style.animationName='none';
                xiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },100000)
        setTimeout(()=>{
            //xii image
            statusVideoVideoTag.src=databaseStatusImage[11];
            xiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xiiImageTimep.style.animationName='none';
                xiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },110000)
        setTimeout(()=>{
            //xiii image
            statusVideoVideoTag.src=databaseStatusImage[12];
            xiiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xiiiImageTimep.style.animationName='none';
                xiiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },120000)
        setTimeout(()=>{
            //xiv image
            statusVideoVideoTag.src=databaseStatusImage[13];
            xivImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xivImageTimep.style.animationName='none';
                xivImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },130000)
        setTimeout(()=>{
            //xv image
            statusVideoVideoTag.src=databaseStatusImage[14];
            xvImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xvImageTimep.style.animationName='none';
                xvImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },140000)
        setTimeout(()=>{
            //xvi image
            statusVideoVideoTag.src=databaseStatusImage[15];
            xviImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xviImageTimep.style.animationName='none';
                xviImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },150000)
        setTimeout(()=>{
            //xvii image
            statusVideoVideoTag.src=databaseStatusImage[16];
            xviiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xviiImageTimep.style.animationName='none';
                xviiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },160000)
        
    }else if(Number(databaseStatusImage.length)===18){
        setTimeout(()=>{
            //i image
            statusVideoVideoTag.src=databaseStatusImage[0];
            eachImageTimeDiv.style.gridTemplateColumns='1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr';
            iImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iImageTimep.style.animationName='none';
                iImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },0)
        setTimeout(()=>{
            //ii image
            statusVideoVideoTag.src=databaseStatusImage[1];
            iiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiImageTimep.style.animationName='none';
                iiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },10000)
        setTimeout(()=>{
            //iii image
            statusVideoVideoTag.src=databaseStatusImage[2];
            iiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiiImageTimep.style.animationName='none';
                iiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },20000)
        setTimeout(()=>{
            //iv image
            statusVideoVideoTag.src=databaseStatusImage[3];
            ivImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                ivImageTimep.style.animationName='none';
                ivImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },30000) 
        setTimeout(()=>{
            //v image
            statusVideoVideoTag.src=databaseStatusImage[4];
            vImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                vImageTimep.style.animationName='none';
                vImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },40000) 
        setTimeout(()=>{
            //vi image
            statusVideoVideoTag.src=databaseStatusImage[5];
            viImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viImageTimep.style.animationName='none';
                viImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },50000)
        setTimeout(()=>{
            //vii image
            statusVideoVideoTag.src=databaseStatusImage[5];
            viiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viiImageTimep.style.animationName='none';
                viiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },60000)
        setTimeout(()=>{
            //viii image
            statusVideoVideoTag.src=databaseStatusImage[7];
            viiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viiiImageTimep.style.animationName='none';
                viiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },70000)
        setTimeout(()=>{
            //ix image
            statusVideoVideoTag.src=databaseStatusImage[8];
            ixImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                ixImageTimep.style.animationName='none';
                ixImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },80000)
        setTimeout(()=>{
            //x image
            statusVideoVideoTag.src=databaseStatusImage[9];
            xImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xImageTimep.style.animationName='none';
                xImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },90000)
        setTimeout(()=>{
            //xi image
            statusVideoVideoTag.src=databaseStatusImage[10];
            xiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xiImageTimep.style.animationName='none';
                xiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },100000)
        setTimeout(()=>{
            //xii image
            statusVideoVideoTag.src=databaseStatusImage[11];
            xiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xiiImageTimep.style.animationName='none';
                xiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },110000)
        setTimeout(()=>{
            //xiii image
            statusVideoVideoTag.src=databaseStatusImage[12];
            xiiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xiiiImageTimep.style.animationName='none';
                xiiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },120000)
        setTimeout(()=>{
            //xiv image
            statusVideoVideoTag.src=databaseStatusImage[13];
            xivImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xivImageTimep.style.animationName='none';
                xivImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },130000)
        setTimeout(()=>{
            //xv image
            statusVideoVideoTag.src=databaseStatusImage[14];
            xvImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xvImageTimep.style.animationName='none';
                xvImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },140000)
        setTimeout(()=>{
            //xvi image
            statusVideoVideoTag.src=databaseStatusImage[15];
            xviImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xviImageTimep.style.animationName='none';
                xviImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },150000)
        setTimeout(()=>{
            //xvii image
            statusVideoVideoTag.src=databaseStatusImage[16];
            xviiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xviiImageTimep.style.animationName='none';
                xviiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },160000)
        setTimeout(()=>{
            //xviii image
            statusVideoVideoTag.src=databaseStatusImage[17];
            xviiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xviiiImageTimep.style.animationName='none';
                xviiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },170000)
        

    }else if(Number(databaseStatusImage.length)===19){
        setTimeout(()=>{
            //i image
            statusVideoVideoTag.src=databaseStatusImage[0];
            eachImageTimeDiv.style.gridTemplateColumns='1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr';
            iImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iImageTimep.style.animationName='none';
                iImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },0)
        setTimeout(()=>{
            //ii image
            statusVideoVideoTag.src=databaseStatusImage[1];
            iiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiImageTimep.style.animationName='none';
                iiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },10000)
        setTimeout(()=>{
            //iii image
            statusVideoVideoTag.src=databaseStatusImage[2];
            iiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiiImageTimep.style.animationName='none';
                iiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },20000)
        setTimeout(()=>{
            //iv image
            statusVideoVideoTag.src=databaseStatusImage[3];
            ivImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                ivImageTimep.style.animationName='none';
                ivImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },30000) 
        setTimeout(()=>{
            //v image
            statusVideoVideoTag.src=databaseStatusImage[4];
            vImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                vImageTimep.style.animationName='none';
                vImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },40000) 
        setTimeout(()=>{
            //vi image
            statusVideoVideoTag.src=databaseStatusImage[5];
            viImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viImageTimep.style.animationName='none';
                viImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },50000)
        setTimeout(()=>{
            //vii image
            statusVideoVideoTag.src=databaseStatusImage[5];
            viiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viiImageTimep.style.animationName='none';
                viiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },60000)
        setTimeout(()=>{
            //viii image
            statusVideoVideoTag.src=databaseStatusImage[7];
            viiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viiiImageTimep.style.animationName='none';
                viiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },70000)
        setTimeout(()=>{
            //ix image
            statusVideoVideoTag.src=databaseStatusImage[8];
            ixImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                ixImageTimep.style.animationName='none';
                ixImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },80000)
        setTimeout(()=>{
            //x image
            statusVideoVideoTag.src=databaseStatusImage[9];
            xImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xImageTimep.style.animationName='none';
                xImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },90000)
        setTimeout(()=>{
            //xi image
            statusVideoVideoTag.src=databaseStatusImage[10];
            xiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xiImageTimep.style.animationName='none';
                xiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },100000)
        setTimeout(()=>{
            //xii image
            statusVideoVideoTag.src=databaseStatusImage[11];
            xiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xiiImageTimep.style.animationName='none';
                xiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },110000)
        setTimeout(()=>{
            //xiii image
            statusVideoVideoTag.src=databaseStatusImage[12];
            xiiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xiiiImageTimep.style.animationName='none';
                xiiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },120000)
        setTimeout(()=>{
            //xiv image
            statusVideoVideoTag.src=databaseStatusImage[13];
            xivImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xivImageTimep.style.animationName='none';
                xivImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },130000)
        setTimeout(()=>{
            //xv image
            statusVideoVideoTag.src=databaseStatusImage[14];
            xvImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xvImageTimep.style.animationName='none';
                xvImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },140000)
        setTimeout(()=>{
            //xvi image
            statusVideoVideoTag.src=databaseStatusImage[15];
            xviImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xviImageTimep.style.animationName='none';
                xviImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },150000)
        setTimeout(()=>{
            //xvii image
            statusVideoVideoTag.src=databaseStatusImage[16];
            xviiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xviiImageTimep.style.animationName='none';
                xviiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },160000)
        setTimeout(()=>{
            //xviii image
            statusVideoVideoTag.src=databaseStatusImage[17];
            xviiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xviiiImageTimep.style.animationName='none';
                xviiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },170000)
        setTimeout(()=>{
            //xix image
            statusVideoVideoTag.src=databaseStatusImage[18];
            xixImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xixImageTimep.style.animationName='none';
                xixImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },180000)

    }else if(Number(databaseStatusImage.length)===20){
        setTimeout(()=>{
            //i image
            statusVideoVideoTag.src=databaseStatusImage[0];
            eachImageTimeDiv.style.gridTemplateColumns='1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr';
            iImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iImageTimep.style.animationName='none';
                iImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },0)
        setTimeout(()=>{
            //ii image
            statusVideoVideoTag.src=databaseStatusImage[1];
            iiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiImageTimep.style.animationName='none';
                iiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },10000)
        setTimeout(()=>{
            //iii image
            statusVideoVideoTag.src=databaseStatusImage[2];
            iiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                iiiImageTimep.style.animationName='none';
                iiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },20000)
        setTimeout(()=>{
            //iv image
            statusVideoVideoTag.src=databaseStatusImage[3];
            ivImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                ivImageTimep.style.animationName='none';
                ivImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },30000) 
        setTimeout(()=>{
            //v image
            statusVideoVideoTag.src=databaseStatusImage[4];
            vImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                vImageTimep.style.animationName='none';
                vImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },40000) 
        setTimeout(()=>{
            //vi image
            statusVideoVideoTag.src=databaseStatusImage[5];
            viImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viImageTimep.style.animationName='none';
                viImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },50000)
        setTimeout(()=>{
            //vii image
            statusVideoVideoTag.src=databaseStatusImage[5];
            viiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viiImageTimep.style.animationName='none';
                viiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },60000)
        setTimeout(()=>{
            //viii image
            statusVideoVideoTag.src=databaseStatusImage[7];
            viiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                viiiImageTimep.style.animationName='none';
                viiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },70000)
        setTimeout(()=>{
            //ix image
            statusVideoVideoTag.src=databaseStatusImage[8];
            ixImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                ixImageTimep.style.animationName='none';
                ixImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },80000)
        setTimeout(()=>{
            //x image
            statusVideoVideoTag.src=databaseStatusImage[9];
            xImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xImageTimep.style.animationName='none';
                xImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },90000)
        setTimeout(()=>{
            //xi image
            statusVideoVideoTag.src=databaseStatusImage[10];
            xiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xiImageTimep.style.animationName='none';
                xiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },100000)
        setTimeout(()=>{
            //xii image
            statusVideoVideoTag.src=databaseStatusImage[11];
            xiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xiiImageTimep.style.animationName='none';
                xiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },110000)
        setTimeout(()=>{
            //xiii image
            statusVideoVideoTag.src=databaseStatusImage[12];
            xiiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xiiiImageTimep.style.animationName='none';
                xiiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },120000)
        setTimeout(()=>{
            //xiv image
            statusVideoVideoTag.src=databaseStatusImage[13];
            xivImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xivImageTimep.style.animationName='none';
                xivImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },130000)
        setTimeout(()=>{
            //xv image
            statusVideoVideoTag.src=databaseStatusImage[14];
            xvImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xvImageTimep.style.animationName='none';
                xvImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },140000)
        setTimeout(()=>{
            //xvi image
            statusVideoVideoTag.src=databaseStatusImage[15];
            xviImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xviImageTimep.style.animationName='none';
                xviImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },150000)
        setTimeout(()=>{
            //xvii image
            statusVideoVideoTag.src=databaseStatusImage[16];
            xviiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xviiImageTimep.style.animationName='none';
                xviiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },160000)
        setTimeout(()=>{
            //xviii image
            statusVideoVideoTag.src=databaseStatusImage[17];
            xviiiImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xviiiImageTimep.style.animationName='none';
                xviiiImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },170000)
        setTimeout(()=>{
            //xix image
            statusVideoVideoTag.src=databaseStatusImage[18];
            xixImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xixImageTimep.style.animationName='none';
                xixImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },180000)
        setTimeout(()=>{
            //xx image
            statusVideoVideoTag.src=databaseStatusImage[19];
            xxImageTimep.style.animationName='imagetime';
            setTimeout(()=>{
                xxImageTimep.style.animationName='none';
                xxImageTimep.style.backgroundColor='rgb(236, 236, 236)';
            },10000)
        },190000)

    }
})

