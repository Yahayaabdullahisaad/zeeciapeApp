
//mobile&system input to pill at thesame time variable...
const mobileFirstName=document.querySelector('.mobile-createAccount-firstname-input'),
mobileLastName=document.querySelector('.mobile-createAccount-lastname-input'),
mobileYourEmail=document.querySelector('.mobile-createAccount-youremail-input'),
mobileReEnterEmail=document.querySelector('.mobile-createAccount-re-enter-email-input'),
mobileDateOfBirth=document.querySelector('.mobile-createAccount-dateofbirth-input'),
mobileCountry=document.querySelector('.mobile-createAccount-country-input'),
mobileCreatePassword=document.querySelector('.mobile-createAccount-createpassword-input'),
mobileConfirm=document.querySelector('.mobile-createAccount-confirmpassword-input'),
mobilePhoneNumber=document.querySelector('.mobile-createAccount-phonenumber-input'),
//
systemFirstName=document.querySelector('.system-createAccount-firstname-input'),
systemLastName=document.querySelector('.system-createAccount-lastname-input'),
systemYourEmail=document.querySelector('.system-createAccount-youremail-input'),
systemReEnterEmail=document.querySelector('.system-createAccount-re-enter-email-input'),
systemDateOfBirth=document.querySelector('.system-createAccount-dateofbirth-input'),
systemCountry=document.querySelector('.system-createAccount-country-input'),
systemCreatePassword=document.querySelector('.system-createAccount-createpassword-input'),
systemConfirm=document.querySelector('.system-createAccount-confirmpassword-input'),
systemPhoneNumber=document.querySelector('.system-createAccount-phonenumber-input');

//mobile input to pill at thesame with system
mobileFirstName.addEventListener('keyup',(event)=>{
    systemFirstName.value=mobileFirstName.value;

    if(event.key==='Enter'){
        mobileLastName.focus()
    }
})
mobileLastName.addEventListener('keyup',(event)=>{
    systemLastName.value=mobileLastName.value;

    if(event.key==='Enter'){
        mobileYourEmail.focus()
    }else if(event.key==='Backspace' && mobileLastName.value.length===0 ){
        mobileFirstName.focus()
    }
})
mobileYourEmail.addEventListener('keyup',(event)=>{
    systemYourEmail.value=mobileYourEmail.value;

    if(event.key==='Enter'){
        mobileReEnterEmail.focus()
    }else if(event.key==='Backspace' && mobileYourEmail.value.length===0 ){
        mobileLastName.focus()
    }
})
mobileReEnterEmail.addEventListener('keyup',(event)=>{
    systemReEnterEmail.value=mobileReEnterEmail.value;

    if(event.key==='Backspace' && mobileReEnterEmail.value.length===0 ){
        mobileYourEmail.focus()
    }
})
mobileDateOfBirth.addEventListener('keyup',(event)=>{
    systemDateOfBirth.value=mobileDateOfBirth.value;

    if(event.key==='Enter'){
        mobileCountry.focus()
    }
})
mobileCountry.addEventListener('keyup',(event)=>{
    systemCountry.value=mobileCountry.value;

    if(event.key==='Enter'){
        mobileCreatePassword.focus()
    }else if(event.key==='Backspace' && mobileCountry.value.length===0 ){
        mobileDateOfBirth.focus()
    }
})
mobileCreatePassword.addEventListener('keyup',(event)=>{
    systemCreatePassword.value=mobileCreatePassword.value;

    if(event.key==='Enter'){
        mobileConfirm.focus()
    }else if(event.key==='Backspace' && mobileCreatePassword.value.length===0 ){
        mobileCountry.focus()
    }
})
mobileConfirm.addEventListener('keyup',(event)=>{
    systemConfirm.value=mobileConfirm.value;

    if(event.key==='Enter'){
        mobilePhoneNumber.focus()
    }else if(event.key==='Backspace' && mobileConfirm.value.length===0 ){
        mobileCreatePassword.focus()
    }
})
mobilePhoneNumber.addEventListener('keyup',(event)=>{
    systemPhoneNumber.value=mobilePhoneNumber.value;

    if(event.key==='Backspace' && mobilePhoneNumber.value.length===0 ){
        mobileConfirm.focus()
    }
})
//system input to pill at thesame with mobile
systemFirstName.addEventListener('keyup',(event)=>{
    mobileFirstName.value=systemFirstName.value;

    if(event.key==='Enter'){
        systemLastName.focus()
    }
})
systemLastName.addEventListener('keyup',(event)=>{
    mobileLastName.value=systemLastName.value;

    if(event.key==='Enter'){
        systemYourEmail.focus()
    }else if(event.key==='Backspace' && systemLastName.value.length===0 ){
        systemFirstName.focus()
    }
})
systemYourEmail.addEventListener('keyup',(event)=>{
    mobileYourEmail.value=systemYourEmail.value;

    if(event.key==='Enter'){
        systemReEnterEmail.focus()
    }else if(event.key==='Backspace' && systemYourEmail.value.length===0 ){
        systemLastName.focus()
    }
})
systemReEnterEmail.addEventListener('keyup',(event)=>{
    mobileReEnterEmail.value=systemReEnterEmail.value;

    if(event.key==='Enter'){
        systemDateOfBirth.focus()
    }else if(event.key==='Backspace' && systemReEnterEmail.value.length===0 ){
        systemYourEmail.focus()
    }
})
systemDateOfBirth.addEventListener('keyup',(event)=>{
    mobileDateOfBirth.value=systemDateOfBirth.value;

    if(event.key==='Enter'){
        systemCountry.focus()
    }else if(event.key==='Backspace' && systemDateOfBirth.value.length===0 ){
        systemReEnterEmail.focus()
    }
})
systemCountry.addEventListener('keyup',(event)=>{
    mobileCountry.value=systemCountry.value;

    if(event.key==='Enter'){
        systemCreatePassword.focus()
    }else if(event.key==='Backspace' && systemCountry.value.length===0 ){
        systemDateOfBirth.focus()
    }
})
systemCreatePassword.addEventListener('keyup',(event)=>{
    mobileCreatePassword.value=systemCreatePassword.value;

    if(event.key==='Enter'){
        systemConfirm.focus()
    }else if(event.key==='Backspace' && systemCreatePassword.value.length===0 ){
        systemCountry.focus()
    }
})
systemConfirm.addEventListener('keyup',(event)=>{
    mobileConfirm.value=systemConfirm.value;

    if(event.key==='Enter'){
        systemPhoneNumber.focus()
    }else if(event.key==='Backspace' && systemConfirm.value.length===0 ){
        systemCreatePassword.focus()
    }
})
systemPhoneNumber.addEventListener('keyup',(event)=>{
    mobilePhoneNumber.value=systemPhoneNumber.value;

    if(event.key==='Backspace' && systemPhoneNumber.value.length===0 ){
        systemConfirm.focus()
    }
})











/*mobile-createAccount-show&hidden password*/
const mobilePasswordsSeenButton=document.querySelector('.mobile-createAccount-password-seen-button'),
mobileCreatepasswordInput=document.querySelector('.mobile-createAccount-createpassword-input'),
mobileConfirmpasswordInput=document.querySelector('.mobile-createAccount-confirmpassword-input'),
mobileSeenPasswordIcon=document.querySelector('.mobile-createAccount-seen-icon');
/*system-createAccount-show&hidden password*/
const systemPasswordsSeenButton=document.querySelector('.system-createAccount-password-seen-button'),
systemCreatepasswordInput=document.querySelector('.system-createAccount-createpassword-input'),
systemConfirmpasswordInput=document.querySelector('.system-createAccount-confirmpassword-input'),
systemSeenPasswordIcon=document.querySelector('.system-createAccount-seen-icon');
//mobilePasswordsSeenButton
mobilePasswordsSeenButton.addEventListener('click',()=>{
    
    if(mobileCreatepasswordInput.type==="password"){
        //mobile
        mobileCreatepasswordInput.type="text";
        mobileConfirmpasswordInput.type="text";
        mobileSeenPasswordIcon.src="http://127.0.0.1:5500/zeeta-folder/icons/show-password.png";
        //system
        systemCreatepasswordInput.type="text";
        systemConfirmpasswordInput.type="text";
        systemSeenPasswordIcon.src="http://127.0.0.1:5500/zeeta-folder/icons/show-password.png";
    }else{
        //mobile
        mobileCreatepasswordInput.type="password";
        mobileConfirmpasswordInput.type="password";
        mobileSeenPasswordIcon.src="http://127.0.0.1:5500/zeeta-folder/icons/hind-password.png";
        //system
        systemCreatepasswordInput.type="password";
        systemConfirmpasswordInput.type="password";
        systemSeenPasswordIcon.src="http://127.0.0.1:5500/zeeta-folder/icons/hind-password.png";
    }
    
})
//systemPasswordsSeenButton
systemPasswordsSeenButton.addEventListener('click',()=>{
    console.log(mobileSeenPasswordIcon.src)
    if(systemCreatepasswordInput.type==="password"){
        //system
        systemCreatepasswordInput.type="text";
        systemConfirmpasswordInput.type="text";
        systemSeenPasswordIcon.src="http://127.0.0.1:5500/zeeta-folder/icons/show-password.png";
        //mobile
        mobileCreatepasswordInput.type="text";
        mobileConfirmpasswordInput.type="text";
        mobileSeenPasswordIcon.src="http://127.0.0.1:5500/zeeta-folder/icons/show-password.png";
    }else{
        //system
        systemCreatepasswordInput.type="password";
        systemConfirmpasswordInput.type="password";
        systemSeenPasswordIcon.src="http://127.0.0.1:5500/zeeta-folder/icons/hind-password.png";
        //mobile
        mobileCreatepasswordInput.type="password";
        mobileConfirmpasswordInput.type="password";
        mobileSeenPasswordIcon.src="http://127.0.0.1:5500/zeeta-folder/icons/hind-password.png";
    }
})
//mobile otp input variable.....
const mobileIOtpInput=document.querySelector('#mobile-i-otp-input'),mobileIIOtpInput=document.querySelector('#mobile-ii-otp-input'),mobileIIIOtpInput=document.querySelector('#mobile-iii-otp-input'),mobileIVOtpInput=document.querySelector('#mobile-iv-otp-input'),mobileVOtpInput=document.querySelector('#mobile-v-otp-input'),mobileVIOtpInput=document.querySelector('#mobile-vi-otp-input');
//mobileOtpInput
const mobileOtpInput=document.querySelectorAll('.mobile-i-otp');
mobileOtpInput.forEach((mobileOtpInput)=>{  
    mobileOtpInput.addEventListener('keyup',(event)=>{
        if(event.key==='Backspace'){
            if(mobileOtpInput.id==='mobile-i-otp-input'){
                document.querySelector('#system-i-otp-input').value=mobileOtpInput.value;
            }else if(mobileOtpInput.id==='mobile-ii-otp-input'){
                document.querySelector('#system-ii-otp-input').value=mobileOtpInput.value;
            }else if(mobileOtpInput.id==='mobile-iii-otp-input'){
                document.querySelector('#system-iii-otp-input').value=mobileOtpInput.value;
            }else if(mobileOtpInput.id==='mobile-iv-otp-input'){
                document.querySelector('#system-iv-otp-input').value=mobileOtpInput.value;
            }else if(mobileOtpInput.id==='mobile-v-otp-input'){
                document.querySelector('#system-v-otp-input').value=mobileOtpInput.value;
            }else if(mobileOtpInput.id==='mobile-vi-otp-input'){
                document.querySelector('#system-vi-otp-input').value=mobileOtpInput.value;
            }


            if(mobileOtpInput.id !='mobile-i-otp-input'){
                mobileOtpInput.previousElementSibling.focus()
            }
            
        }else{
            if(mobileOtpInput.id==='mobile-i-otp-input'){
                document.querySelector('#system-i-otp-input').value=mobileOtpInput.value;
            }else if(mobileOtpInput.id==='mobile-ii-otp-input'){
                document.querySelector('#system-ii-otp-input').value=mobileOtpInput.value;
            }else if(mobileOtpInput.id==='mobile-iii-otp-input'){
                document.querySelector('#system-iii-otp-input').value=mobileOtpInput.value;
            }else if(mobileOtpInput.id==='mobile-iv-otp-input'){
                document.querySelector('#system-iv-otp-input').value=mobileOtpInput.value;
            }else if(mobileOtpInput.id==='mobile-v-otp-input'){
                document.querySelector('#system-v-otp-input').value=mobileOtpInput.value;
            }else if(mobileOtpInput.id==='mobile-vi-otp-input'){
                document.querySelector('#system-vi-otp-input').value=mobileOtpInput.value;
            }


            if(mobileOtpInput.id !='mobile-vi-otp-input'){
                mobileOtpInput.nextElementSibling.focus()
            }
            
        }
        
        // get all otp input value at once
        let mobileUserInputsOtp=mobileIOtpInput.value+mobileIIOtpInput.value+mobileIIIOtpInput.value+mobileIVOtpInput.value+mobileVOtpInput.value+mobileVIOtpInput.value;

        //get otp from last otpinput data-
        let getOtp='';
        if(mobileUserInputsOtp.length===6){
            getOtp=mobileVIOtpInput.dataset.mobileIv;
        }


        if(getOtp === mobileUserInputsOtp && mobileUserInputsOtp.length===6){
            //mobile
            document.querySelector('.mobile-otp-incorrect-notice').innerText="code it's correctly...";
            document.querySelector('.mobile-otp-incorrect-notice').style.color='green';
            //system
            document.querySelector('.system-otp-incorrect-notice').innerText="code it's correctly...";
            document.querySelector('.system-otp-incorrect-notice').style.color='green';
        }else{
            //mobile
            document.querySelector('.mobile-otp-incorrect-notice').innerText="code it's incorrect...";
            document.querySelector('.mobile-otp-incorrect-notice').style.color='red';
            //system
            document.querySelector('.system-otp-incorrect-notice').innerText="code it's incorrect...";
            document.querySelector('.system-otp-incorrect-notice').style.color='red';
        }
        
    })
})
//system otp input variable.....
const systemIOtpInput=document.querySelector('#system-i-otp-input'),systemIIOtpInput=document.querySelector('#system-ii-otp-input'),systemIIIOtpInput=document.querySelector('#system-iii-otp-input'),systemIVOtpInput=document.querySelector('#system-iv-otp-input'),systemVOtpInput=document.querySelector('#system-v-otp-input'),systemVIOtpInput=document.querySelector('#system-vi-otp-input');
//systemOtpInput
const systemOtpInput=document.querySelectorAll('.system-i-otp');
systemOtpInput.forEach((systemOtpInput)=>{  
    systemOtpInput.addEventListener('keyup',(event)=>{
        
        console.log(systemOtpInput.id==='system-i-otp-input')
        if(event.key==='Backspace'){
            if(systemOtpInput.id==='system-i-otp-input'){
                document.querySelector('#mobile-i-otp-input').value=systemOtpInput.value;
            }else if(systemOtpInput.id==='system-ii-otp-input'){
                document.querySelector('#mobile-ii-otp-input').value=systemOtpInput.value;
            }else if(systemOtpInput.id==='system-iii-otp-input'){
                document.querySelector('#mobile-iii-otp-input').value=systemOtpInput.value;
            }else if(systemOtpInput.id==='system-iv-otp-input'){
                document.querySelector('#mobile-iv-otp-input').value=systemOtpInput.value;
            }else if(systemOtpInput.id==='system-v-otp-input'){
                document.querySelector('#mobile-v-otp-input').value=systemOtpInput.value;
            }else if(systemOtpInput.id==='system-vi-otp-input'){
                document.querySelector('#mobile-vi-otp-input').value=systemOtpInput.value;
            }


            if(systemOtpInput.id !='system-i-otp-input'){
                systemOtpInput.previousElementSibling.focus()
            }
            
        }else{
            if(systemOtpInput.id==='system-i-otp-input'){
                document.querySelector('#mobile-i-otp-input').value=systemOtpInput.value;
            }else if(systemOtpInput.id==='system-ii-otp-input'){
                document.querySelector('#mobile-ii-otp-input').value=systemOtpInput.value;
            }else if(systemOtpInput.id==='system-iii-otp-input'){
                document.querySelector('#mobile-iii-otp-input').value=systemOtpInput.value;
            }else if(systemOtpInput.id==='system-iv-otp-input'){
                document.querySelector('#mobile-iv-otp-input').value=systemOtpInput.value;
            }else if(systemOtpInput.id==='system-v-otp-input'){
                document.querySelector('#mobile-v-otp-input').value=systemOtpInput.value;
            }else if(systemOtpInput.id==='system-vi-otp-input'){
                document.querySelector('#mobile-vi-otp-input').value=systemOtpInput.value;
            }


            if(systemOtpInput.id !='system-vi-otp-input'){
                systemOtpInput.nextElementSibling.focus()
            }
            
        }
        

        // get all otp input value at once
        let systemUserInputsOtp=systemIOtpInput.value+systemIIOtpInput.value+systemIIIOtpInput.value+systemIVOtpInput.value+systemVOtpInput.value+systemVIOtpInput.value;


        //get otp from last otpinput data-
        let getOtp='';
        if(systemUserInputsOtp.length===6){
            getOtp=systemVIOtpInput.dataset.systemIv;
        }
        
        

        if(getOtp === systemUserInputsOtp && systemUserInputsOtp.length===6){
            //system
            document.querySelector('.system-otp-incorrect-notice').innerText="code it's correctly...";
            document.querySelector('.system-otp-incorrect-notice').style.color='green';
            //mobile
            document.querySelector('.mobile-otp-incorrect-notice').innerText="code it's correctly...";
            document.querySelector('.mobile-otp-incorrect-notice').style.color='green';
        }else{
            //system
            document.querySelector('.system-otp-incorrect-notice').innerText="code it's incorrect...";
            document.querySelector('.system-otp-incorrect-notice').style.color='red';
            //mobile
            document.querySelector('.mobile-otp-incorrect-notice').innerText="code it's incorrect...";
            document.querySelector('.mobile-otp-incorrect-notice').style.color='red';
        }
        
    })
})


//// next to get OTP variable...
const systemNextButtonOtp=document.querySelector('.system-next-button'),
mobileNextButtonOtp=document.querySelector('.ii-next-button'),
forgottenPasswordNextButton=document.querySelector('.forgottenPassword-next-button');
// OTP count variable...
const mobileOtpTimecount=document.querySelector('.mobile-otp-timecount'),
systemOtpTimecount=document.querySelector('.system-otp-timecount'),forgottenPasswordOtpTimecount=document.querySelector('.forgottenPassword-otp-timecount');

//systemNextButtonOtp
systemNextButtonOtp.addEventListener('click',generateOtp)
//mobileNextButtonOtp
mobileNextButtonOtp.addEventListener('click',generateOtp)
//forgottenPasswordNextButton
forgottenPasswordNextButton.addEventListener('click',generateOtp)

//system confirm OTP
function generateOtp(){
    let otp='';
    for(let i=0;i<6;i++){
        otp+='0123456789'[Math.floor(Math.random()*10)];
    }
    console.log(otp)
    //set otp to last otpinput data- mobile&system
    systemVIOtpInput.dataset.systemIv=otp;
    mobileVIOtpInput.dataset.mobileIv=otp;
    
    setTimeout(()=>{
        ///
        let userNameOtp='';
        //mobileFirstName && systemFirstName
        if(mobileFirstName.value===''&& mobileLastName.value===''){
            userNameOtp='Customer';
        }else{            
            userNameOtp=`${mobileFirstName.value} ${mobileLastName.value}`;
        }
        alert(`DO NOT DISPCLOSE. Dear ${userNameOtp}, The code for your Phone number authentication is ${otp}. No Staff of Zeeciape will ask for this code! Do not share to anyone`)

    },6000)
    
    // get OTP timeCount from data-
    let mobileGetSeconds,mobileGetMinutes,systemGetSeconds,systemGetMinutes;
    
    mobileGetSeconds=mobileOtpTimecount.dataset.mobileOtpGetSeconds;
    mobileGetMinutes=mobileOtpTimecount.dataset.mobileOtpGetMinutes;
    systemGetSeconds=systemOtpTimecount.dataset.systemOtpGetSeconds;
    systemGetMinutes=systemOtpTimecount.dataset.systemOtpGetMinutes;
    
    setInterval(()=>{
        
        // if Minutes===2 stop countted
        if(Number(mobileGetMinutes)===2 && Number(systemGetMinutes)===2){
            //display it back if Minutes===2
            mobileOtpTimecount.innerText='00:00';
            systemOtpTimecount.innerText='00:00';
            forgottenPasswordOtpTimecount.innerText='00:00';

        }else{
            // Get Seconds&Minutes
            if(Number(mobileGetSeconds)===60 && Number(systemGetSeconds)===60){
                //add OTP set to real timecount...
                mobileGetMinutes=Number(mobileGetMinutes)+1<10?`0${Number(mobileGetMinutes)+1}`:Number(mobileGetMinutes)+1;

                systemGetMinutes=Number(systemGetMinutes)+1<10?`0${Number(systemGetMinutes)+1}`:Number(systemGetMinutes)+1;

                mobileGetSeconds='0';
                systemGetSeconds='0';

            }else{
                //add OTP set to real timecount...
                mobileGetSeconds=Number(mobileGetSeconds)+1<10?`0${Number(mobileGetSeconds)+1}`:Number(mobileGetSeconds)+1;

                systemGetSeconds=Number(systemGetSeconds)+1<10?`0${Number(systemGetSeconds)+1}`:Number(systemGetSeconds)+1;
                  
            }
            
            //display timecount on screem..
            mobileOtpTimecount.innerText=`${mobileGetMinutes}:${mobileGetSeconds}`;
            systemOtpTimecount.innerText=`${systemGetMinutes}:${systemGetSeconds}`; 
            forgottenPasswordOtpTimecount.innerText=`${systemGetMinutes}:${systemGetSeconds}`;
            
        }
        
    },500)

    return otp
}






//mobileImageFile variable
const mobileBackgroundImageFile=document.querySelector('.mobile-background-icon-file'),
mobileImageFile=document.querySelector('.mobile-img-icon-file'),
mobilegroundImage=document.querySelector('.mobile-background-img-icon'),
mobileImage=document.querySelector('.mobile-img-icon');
//systemImageFile variable
const systemBackgroundImageFile=document.querySelector('.system-background-icon-file'),
systemImageFile=document.querySelector('.system-img-icon-file'),
systemgroundImage=document.querySelector('.system-background-img-icon'),
systemImage=document.querySelector('.system-img-icon');




//mobile front image files input
mobileImageFile.addEventListener('change',()=>{
    const file =mobileImageFile.files[0];
    const reder= new FileReader();

    reder.addEventListener('load',()=>{

        //mobile front image
        mobileImage.src=reder.result;
        //system front image
        systemImage.src=reder.result;
    })
    reder.readAsDataURL(file)
})

//mobile background images files input
systemBackgroundImageFile.addEventListener('change',()=>{
    const file =systemBackgroundImageFile.files[0];
    const reder= new FileReader();
    reder.addEventListener('load',()=>{

        //mobile background images
        mobilegroundImage.src=reder.result;
        //system background images
        systemgroundImage.src=reder.result;
        
    })
    reder.readAsDataURL(file)
})


/*
//mobile front image files input
mobileImageFile.addEventListener('change',()=>{
    //mobile front image
    mobileImage.src=URL.createObjectURL(mobileImageFile.files[0])
    //system front image
    systemImage.src=URL.createObjectURL(mobileImageFile.files[0])
})
//mobile background images files input
mobileBackgroundImageFile.addEventListener('change',()=>{
    //mobile background images
    mobilegroundImage.src=URL.createObjectURL(mobileBackgroundImageFile.files[0])
    //system background images
    systemgroundImage.src=URL.createObjectURL(mobileBackgroundImageFile.files[0])
})

*/




//system front image files input
systemImageFile.addEventListener('change',()=>{
    const file =systemImageFile.files[0];
    const reder= new FileReader();

    reder.addEventListener('load',()=>{

        //system front image
        systemImage.src=reder.result;
        //mobile front image
        mobileImage.src=reder.result;
    })
    reder.readAsDataURL(file)
})

//system background images files input
systemBackgroundImageFile.addEventListener('change',()=>{
    const file =systemBackgroundImageFile.files[0];
    const reder= new FileReader();
    reder.addEventListener('load',()=>{
        
        //system background images
        systemgroundImage.src=reder.result;
        //mobile background images
        mobilegroundImage.src=reder.result;
    })
    reder.readAsDataURL(file)
})


/*
//system front image files input
systemImageFile.addEventListener('change',()=>{
    //system front image
    systemImage.src=URL.createObjectURL(systemImageFile.files[0])
    //mobile front image
    mobileImage.src=URL.createObjectURL(systemImageFile.files[0])
})
//system background images files input
systemBackgroundImageFile.addEventListener('change',()=>{
    //system background images
    systemgroundImage.src=URL.createObjectURL(systemBackgroundImageFile.files[0])
    //mobile background images
    mobilegroundImage.src=URL.createObjectURL(systemBackgroundImageFile.files[0])
})
*/




//mobile counrtry and more.... 
const mobileCountryInput=document.querySelector('.mobile-createAccount-country-input'),
mobileCountryCode=document.querySelector('.mobile-country-code'),mobilePhonenumberInput=document.querySelector('.mobile-createAccount-phonenumber-input'),
mobileNumberSpan=document.querySelector('.mobile-number-span');
//system counrtry and more.... 
const systemCountryInput=document.querySelector('.system-createAccount-country-input'),
systemCountryCode=document.querySelector('.system-country-code'),systemPhonenumberInput=document.querySelector('.system-createAccount-phonenumber-input'),
systemNumberSpan=document.querySelector('.system-number-span');

//mobileCountryInput
mobileCountryInput.addEventListener('keyup',(value)=>{
document.querySelector('.mobile-pick-country-div').style.display='block';

const countryAndCode=[{country:'afghanistan',code:'+93'},{country:'albania',code:'+355'},{country:'algeria',code:'+213'},{country:'america samoa',code:'+1684'},{country:'andorra',code:'+376'},{country:'angola',code:'+244'},{country:'anguilla',code:'+1264'},{country:'antarctica',code:'+67264'},{country:'antigua and barbuda',code:'+1268'},{country:'argentina',code:'+54'},{country:'armenia',code:'+374'},{country:'aruba',code:'+297'},{country:'ascension island',code:'+247'},{country:'australia',code:'+61'},{country:'austria',code:'+43'},{country:'azerbaijan',code:'+994'},{country:'bahamas',code:'+1242'},{country:'bahrain',code:'+973'},{country:'bangladesh',code:'+880'},{country:'barbados',code:'+1246'},{country:'belarus',code:'+375'},{country:'belgium',code:'+32'},{country:'belize',code:'+501'},{country:'benin',code:'+501'},{country:'bermuda',code:'+1441'},{country:'bhutan',code:'+975'},{country:'bolivia',code:'+591'},{country:'bosnia and herzegovina',code:'+387'},{country:'botswana',code:'+267'},{country:'brazil',code:'+55'},{country:'british virgin islands',code:'+1284'},{country:'brunei',code:'+673'},{country:'bulgaria',code:'+359'},{country:'burkina faso',code:'+226'},{country:'burma (myanmar)',code:'+95'},{country:'burundi',code:'+257'},{country:'cambodia',code:'+855'},{country:'cameroon',code:'+237'},{country:'canada',code:'+1'},{country:'cape Verde',code:'+238'},{country:'cayman islands',code:'+1345'},{country:'central african republic',code:'+236'},{country:'chad',code:'+235'},{country:'chile',code:'+56'},{country:'china',code:'+86'},{country:'christmas Island',code:'+61'},{country:'cocos (keeling) Islands',code:'+61'},{country:'colombia',code:'+57'},{country:'comoros',code:'+269'},{country:'congo',code:'+243'},{country:'cook islands',code:'+682'},{country:'costa rica',code:'+506'},{country:'croatia',code:'+385'},{country:'cuba',code:'+53'},{country:'cyprus',code:'+357'},{country:'czech Republic',code:'+420'},{country:'democratic republic of the congo',code:'+243'},{country:'denmark',code:'+45'},{country:'diego garcia',code:'+246'},{country:'djibouti',code:'+253'},{country:'dominica',code:'+1767'},{country:'dominican republic',code:'+1809'},{country:'ecuador',code:'+593'},{country:'egypt',code:'+20'},{country:'el salvador',code:'+503'},{country:'equatorial guinea',code:'+240'},{country:'eritrea',code:'+291'},{country:'estonia',code:'+372'},{country:'ethiopia',code:'+251'},{country:'falkland islands',code:'+500'},{country:'faroe islands',code:'+298'},{country:'Fiji',code:'+298'},{country:'finland',code:'+358'},{country:'france',code:'+33'},{country:'french polynesia',code:'+689'},{country:'french polynesia',code:'+689'},{country:'gabon',code:'+241'},{country:'gambia',code:'+220'},{country:'georgia',code:'+995'},{country:'germany',code:'+49'},{country:'ghana',code:'+233'},{country:'gibraltar',code:'+350'},{country:'greece',code:'+30'},{country:'greenland',code:'+299'},{country:'grenada',code:'+1473'},{country:'guadeloupe',code:'+590'},{country:'guam',code:'+1671'},{country:'guatemala',code:'+502'},{country:'guinea',code:'+224'},{country:'guinea bissau',code:'+245'},{country:'guyana',code:'+592'},{country:'haiti',code:'+509'},{country:'holy see (vatican city)',code:'+39'},{country:'honduras',code:'+504'},{country:'hong kong',code:'+852'},{country:'hungary',code:'+36'},{country:'iceland',code:'+354'},{country:'india',code:'+91'},{country:'indonesia',code:'+62'},{country:'iran',code:'+98'},{country:'iraq',code:'+964'},{country:'ireland',code:'+353'},{country:'isle of man',code:'+44'},{country:'israel',code:'+972'},{country:'italy',code:'+39'},{country:'ivory coast (côte d ivoire)',code:'+225'},{country:'jamaica',code:'+1876'},{country:'japan',code:'+81'},{country:'jersey',code:'+44'},{country:'jordan',code:'+962'},{country:'kazakhstan',code:'+7'},{country:'kenya',code:'+254'},{country:'Kiribati',code:'+686'},{country:'kuwait',code:'+965'},{country:'kyrgyzstan',code:'+996'},{country:'laos',code:'+856'},{country:'latvia',code:'+371'},{country:'lebanon',code:'+961'},{country:'lesotho',code:'+266'},{country:'liberia',code:'+231'},{country:'libya',code:'+218'},{country:'liechtenstein',code:'+423'},{country:'lithuania',code:'+370'},{country:'luxembourg',code:'+352'},{country:'macau',code:'+853'},{country:'macedonia',code:'+389'},{country:'madagascar',code:'+261'},{country:'malawi',code:'+265'},{country:'malaysia',code:'+60'},{country:'maldives',code:'+960'},{country:'mali',code:'+223'},{country:'malta',code:'+356'},{country:'marshall islands',code:'+692'},{country:'martinique',code:'+596'},{country:'mauritania',code:'+222'},{country:'mauritius',code:'+230'},{country:'Mayotte',code:'+262'},{country:'mexico',code:'+52'},{country:'micronesia',code:'+691'},{country:'moldova',code:'+373'},{country:'monaco',code:'+377'},{country:'mongolia',code:'+976'},{country:'montenegro',code:'+382'},{country:'morocco',code:'+212'},{country:'mozambique',code:'+258'},{country:'namibia',code:'+264'},{country:'nauru',code:'+674'},{country:'nepal',code:'+977'},{country:'netherlands',code:'+31'},{country:'netherlands antilles',code:'+599'},{country:'new caledonia',code:'+687'},{country:'new zealand',code:'+64'},{country:'nicaragua',code:'+505'},{country:'niger',code:'+227'},{country:'nigeria',code:'+234'},{country:'niue',code:'+683'},{country:'norfolk Island',code:'+672'},{country:'north korea',code:'+850'},{country:'northern mariana islands',code:'+1670'},{country:'norway',code:'+47'},{country:'oman',code:'+968'},{country:'pakistan',code:'+92'},{country:'palau',code:'+680'},{country:'palestine',code:'+970'},{country:'panama',code:'+507'},{country:'papua new guinea',code:'+675'},{country:'paraguay',code:'+595'},{country:'peru',code:'+51'},{country:'philippines',code:'+63'},{country:'pitcairn islands',code:'+870'},{country:'poland',code:'+48'},{country:'portugal',code:'+351'},{country:'puerto rico',code:'+1787'},{country:'qatar',code:'+974'},{country:'republic of the congo',code:'+242'},{country:'reunion island',code:'+262'},{country:'romania',code:'+40'},{country:'russia',code:'+7'},{country:'rwanda',code:'+250'},{country:'saint helena',code:'+290'},{country:'saint lucia',code:'+1758'},{country:'saint martin',code:'+590'},{country:'saint pierre and miquelon',code:'+508'},{country:'saint vincent and the grenadines',code:'+1784'},{country:'san marino',code:'+378'},{country:'sao tome and principe',code:'+239'},{country:'saudi arabia',code:'+966'},{country:'senegal',code:'+221'},{country:'serbia',code:'+381'},{country:'seychelles',code:'+248'},{country:'sierra leone',code:'+232'},{country:'singapore',code:'+65'},{country:'sint maarten',code:'+1721'},{country:'slovakia',code:'+421'},{country:'slovenia',code:'+386'},{country:'solomon islands',code:'+677'},{country:'somalia',code:'+252'},{country:'south africa',code:'+27'},{country:'south korea',code:'+82'},{country:'south Sudan',code:'+211'},{country:'spain',code:'+34'},{country:'Sri Lanka',code:'+94'},{country:'sudan',code:'+249'},{country:'suriname',code:'+597'},{country:'svalbard',code:'+47'},{country:'swaziland',code:'+268'},{country:'sweden',code:'+46'},{country:'switzerland',code:'+41'},{country:'syria',code:'+963'},{country:'taiwan',code:'+886'},{country:'tajikistan',code:'+992'},{country:'tanzania',code:'+255'},{country:'thailand',code:'+66'},{country:'timor ieste east timor',code:'+670'},{country:'Togo',code:'+228'},{country:'Tokelau',code:'+690'},{country:'tonga islands',code:'+676'},{country:'trinidad and tobago',code:'+1868'},{country:'tunisia',code:'+216'},{country:'turkey',code:'+90'},{country:'turkmenistan',code:'+993'},{country:'turks and caicos Islands',code:'+1649'},{country:'Tuvalu',code:'+688'},{country:'uganda',code:'+256'},{country:'ukraine',code:'+380'},{country:'united arab emirates',code:'+971'},{country:'united kingdom',code:'+44'},{country:'united states',code:'+1'},{country:'uruguay',code:'+598'},{country:'uS virgin islands',code:'+1340'},{country:'uzbekistan',code:'+998'},{country:'vanuatu',code:'+678'},{country:'venezuela',code:'+58'},{country:'vietnam',code:'+84'},{country:'wallis and futuna',code:'+681'},{country:'western sahara',code:'+212'},{country:'yemen',code:'+967'},{country:'zambia',code:'+260'},{country:'zimbabwe',code:'+263'}];

let mobilePickCountryName='';
for(let i=0;i<countryAndCode.length;i++){
    if(countryAndCode[i].country===mobileCountryInput.value){
        mobileCountryCode.innerText=countryAndCode[i].code;
    }
    if(countryAndCode[i].country.includes(mobileCountryInput.value)){
        mobilePickCountryName+=`
            <p class="mobile-pick-country-name" onclick="
            //mobile
            mobileCountryCode.innerText='${countryAndCode[i].code}';
            mobileCountryInput.value='${countryAndCode[i].country}';
            //system
            systemCountryCode.innerText='${countryAndCode[i].code}';
            systemCountryInput.value='${countryAndCode[i].country}';
            document.querySelector('.mobile-pick-country-div').style.display='none';
            ">
                ${countryAndCode[i].country}
                <span class="mobile-pick-country-code">${countryAndCode[i].code}</span>
            </p>`;
    }
}
document.querySelector('.mobile-pick-country-div').innerHTML=mobilePickCountryName;
})
//mobile phone number input
mobilePhonenumberInput.addEventListener('keyup',(value)=>{
    mobileNumberSpan.innerText=mobileCountryCode.innerText+mobilePhonenumberInput.value;
    //
    systemNumberSpan.innerText=mobileCountryCode.innerText+mobilePhonenumberInput.value;

})


//systemCountryInput
systemCountryInput.addEventListener('keyup',(value)=>{
document.querySelector('.system-pick-country-div').style.display='block';
console.log('lll')
const systemCountryCode=[{country:'afghanistan',code:'+93'},{country:'albania',code:'+355'},{country:'algeria',code:'+213'},{country:'america samoa',code:'+1684'},{country:'andorra',code:'+376'},{country:'angola',code:'+244'},{country:'anguilla',code:'+1264'},{country:'antarctica',code:'+67264'},{country:'antigua and barbuda',code:'+1268'},{country:'argentina',code:'+54'},{country:'armenia',code:'+374'},{country:'aruba',code:'+297'},{country:'ascension island',code:'+247'},{country:'australia',code:'+61'},{country:'austria',code:'+43'},{country:'azerbaijan',code:'+994'},{country:'bahamas',code:'+1242'},{country:'bahrain',code:'+973'},{country:'bangladesh',code:'+880'},{country:'barbados',code:'+1246'},{country:'belarus',code:'+375'},{country:'belgium',code:'+32'},{country:'belize',code:'+501'},{country:'benin',code:'+501'},{country:'bermuda',code:'+1441'},{country:'bhutan',code:'+975'},{country:'bolivia',code:'+591'},{country:'bosnia and herzegovina',code:'+387'},{country:'botswana',code:'+267'},{country:'brazil',code:'+55'},{country:'british virgin islands',code:'+1284'},{country:'brunei',code:'+673'},{country:'bulgaria',code:'+359'},{country:'burkina faso',code:'+226'},{country:'burma (myanmar)',code:'+95'},{country:'burundi',code:'+257'},{country:'cambodia',code:'+855'},{country:'cameroon',code:'+237'},{country:'canada',code:'+1'},{country:'cape Verde',code:'+238'},{country:'cayman islands',code:'+1345'},{country:'central african republic',code:'+236'},{country:'chad',code:'+235'},{country:'chile',code:'+56'},{country:'china',code:'+86'},{country:'christmas Island',code:'+61'},{country:'cocos (keeling) Islands',code:'+61'},{country:'colombia',code:'+57'},{country:'comoros',code:'+269'},{country:'congo',code:'+243'},{country:'cook islands',code:'+682'},{country:'costa rica',code:'+506'},{country:'croatia',code:'+385'},{country:'cuba',code:'+53'},{country:'cyprus',code:'+357'},{country:'czech Republic',code:'+420'},{country:'democratic republic of the congo',code:'+243'},{country:'denmark',code:'+45'},{country:'diego garcia',code:'+246'},{country:'djibouti',code:'+253'},{country:'dominica',code:'+1767'},{country:'dominican republic',code:'+1809'},{country:'ecuador',code:'+593'},{country:'egypt',code:'+20'},{country:'el salvador',code:'+503'},{country:'equatorial guinea',code:'+240'},{country:'eritrea',code:'+291'},{country:'estonia',code:'+372'},{country:'ethiopia',code:'+251'},{country:'falkland islands',code:'+500'},{country:'faroe islands',code:'+298'},{country:'Fiji',code:'+298'},{country:'finland',code:'+358'},{country:'france',code:'+33'},{country:'french polynesia',code:'+689'},{country:'french polynesia',code:'+689'},{country:'gabon',code:'+241'},{country:'gambia',code:'+220'},{country:'georgia',code:'+995'},{country:'germany',code:'+49'},{country:'ghana',code:'+233'},{country:'gibraltar',code:'+350'},{country:'greece',code:'+30'},{country:'greenland',code:'+299'},{country:'grenada',code:'+1473'},{country:'guadeloupe',code:'+590'},{country:'guam',code:'+1671'},{country:'guatemala',code:'+502'},{country:'guinea',code:'+224'},{country:'guinea bissau',code:'+245'},{country:'guyana',code:'+592'},{country:'haiti',code:'+509'},{country:'holy see (vatican city)',code:'+39'},{country:'honduras',code:'+504'},{country:'hong kong',code:'+852'},{country:'hungary',code:'+36'},{country:'iceland',code:'+354'},{country:'india',code:'+91'},{country:'indonesia',code:'+62'},{country:'iran',code:'+98'},{country:'iraq',code:'+964'},{country:'ireland',code:'+353'},{country:'isle of man',code:'+44'},{country:'israel',code:'+972'},{country:'italy',code:'+39'},{country:'ivory coast (côte d ivoire)',code:'+225'},{country:'jamaica',code:'+1876'},{country:'japan',code:'+81'},{country:'jersey',code:'+44'},{country:'jordan',code:'+962'},{country:'kazakhstan',code:'+7'},{country:'kenya',code:'+254'},{country:'Kiribati',code:'+686'},{country:'kuwait',code:'+965'},{country:'kyrgyzstan',code:'+996'},{country:'laos',code:'+856'},{country:'latvia',code:'+371'},{country:'lebanon',code:'+961'},{country:'lesotho',code:'+266'},{country:'liberia',code:'+231'},{country:'libya',code:'+218'},{country:'liechtenstein',code:'+423'},{country:'lithuania',code:'+370'},{country:'luxembourg',code:'+352'},{country:'macau',code:'+853'},{country:'macedonia',code:'+389'},{country:'madagascar',code:'+261'},{country:'malawi',code:'+265'},{country:'malaysia',code:'+60'},{country:'maldives',code:'+960'},{country:'mali',code:'+223'},{country:'malta',code:'+356'},{country:'marshall islands',code:'+692'},{country:'martinique',code:'+596'},{country:'mauritania',code:'+222'},{country:'mauritius',code:'+230'},{country:'Mayotte',code:'+262'},{country:'mexico',code:'+52'},{country:'micronesia',code:'+691'},{country:'moldova',code:'+373'},{country:'monaco',code:'+377'},{country:'mongolia',code:'+976'},{country:'montenegro',code:'+382'},{country:'morocco',code:'+212'},{country:'mozambique',code:'+258'},{country:'namibia',code:'+264'},{country:'nauru',code:'+674'},{country:'nepal',code:'+977'},{country:'netherlands',code:'+31'},{country:'netherlands antilles',code:'+599'},{country:'new caledonia',code:'+687'},{country:'new zealand',code:'+64'},{country:'nicaragua',code:'+505'},{country:'niger',code:'+227'},{country:'nigeria',code:'+234'},{country:'niue',code:'+683'},{country:'norfolk Island',code:'+672'},{country:'north korea',code:'+850'},{country:'northern mariana islands',code:'+1670'},{country:'norway',code:'+47'},{country:'oman',code:'+968'},{country:'pakistan',code:'+92'},{country:'palau',code:'+680'},{country:'palestine',code:'+970'},{country:'panama',code:'+507'},{country:'papua new guinea',code:'+675'},{country:'paraguay',code:'+595'},{country:'peru',code:'+51'},{country:'philippines',code:'+63'},{country:'pitcairn islands',code:'+870'},{country:'poland',code:'+48'},{country:'portugal',code:'+351'},{country:'puerto rico',code:'+1787'},{country:'qatar',code:'+974'},{country:'republic of the congo',code:'+242'},{country:'reunion island',code:'+262'},{country:'romania',code:'+40'},{country:'russia',code:'+7'},{country:'rwanda',code:'+250'},{country:'saint helena',code:'+290'},{country:'saint lucia',code:'+1758'},{country:'saint martin',code:'+590'},{country:'saint pierre and miquelon',code:'+508'},{country:'saint vincent and the grenadines',code:'+1784'},{country:'san marino',code:'+378'},{country:'sao tome and principe',code:'+239'},{country:'saudi arabia',code:'+966'},{country:'senegal',code:'+221'},{country:'serbia',code:'+381'},{country:'seychelles',code:'+248'},{country:'sierra leone',code:'+232'},{country:'singapore',code:'+65'},{country:'sint maarten',code:'+1721'},{country:'slovakia',code:'+421'},{country:'slovenia',code:'+386'},{country:'solomon islands',code:'+677'},{country:'somalia',code:'+252'},{country:'south africa',code:'+27'},{country:'south korea',code:'+82'},{country:'south Sudan',code:'+211'},{country:'spain',code:'+34'},{country:'Sri Lanka',code:'+94'},{country:'sudan',code:'+249'},{country:'suriname',code:'+597'},{country:'svalbard',code:'+47'},{country:'swaziland',code:'+268'},{country:'sweden',code:'+46'},{country:'switzerland',code:'+41'},{country:'syria',code:'+963'},{country:'taiwan',code:'+886'},{country:'tajikistan',code:'+992'},{country:'tanzania',code:'+255'},{country:'thailand',code:'+66'},{country:'timor ieste east timor',code:'+670'},{country:'Togo',code:'+228'},{country:'Tokelau',code:'+690'},{country:'tonga islands',code:'+676'},{country:'trinidad and tobago',code:'+1868'},{country:'tunisia',code:'+216'},{country:'turkey',code:'+90'},{country:'turkmenistan',code:'+993'},{country:'turks and caicos Islands',code:'+1649'},{country:'Tuvalu',code:'+688'},{country:'uganda',code:'+256'},{country:'ukraine',code:'+380'},{country:'united arab emirates',code:'+971'},{country:'united kingdom',code:'+44'},{country:'united states',code:'+1'},{country:'uruguay',code:'+598'},{country:'uS virgin islands',code:'+1340'},{country:'uzbekistan',code:'+998'},{country:'vanuatu',code:'+678'},{country:'venezuela',code:'+58'},{country:'vietnam',code:'+84'},{country:'wallis and futuna',code:'+681'},{country:'western sahara',code:'+212'},{country:'yemen',code:'+967'},{country:'zambia',code:'+260'},{country:'zimbabwe',code:'+263'}];

let systemPickCountryName='';
for(let i=0;i<systemCountryCode.length;i++){
    if(systemCountryCode[i].country===systemCountryInput.value){
        systemCountryCode.innerText=systemCountryCode[i].code;
    }
    if(systemCountryCode[i].country.includes(systemCountryInput.value)){
        systemPickCountryName+=`
            <p class="system-pick-country-name" onclick="
            //system
            systemCountryCode.innerText='${systemCountryCode[i].code}';
            systemCountryInput.value='${systemCountryCode[i].country}';
            //mobile
            mobileCountryCode.innerText='${systemCountryCode[i].code}';
            mobileCountryInput.value='${systemCountryCode[i].country}';
            document.querySelector('.system-pick-country-div').style.display='none';
            ">
                ${systemCountryCode[i].country}
                <span class="system-pick-country-code">${systemCountryCode[i].code}</span>
            </p>`;
    }
}
document.querySelector('.system-pick-country-div').innerHTML=systemPickCountryName;

})
//system phone number input
systemPhonenumberInput.addEventListener('keyup',(value)=>{
    systemNumberSpan.innerText=systemCountryCode.innerText+systemPhonenumberInput.value;
    //
    mobileNumberSpan.innerText=systemCountryCode.innerText+systemPhonenumberInput.value;
})



//mobile&system male&f emale change variabel...
const mobileMaleRadio=document.querySelector('#mobile-createAccount-male-input'),
mobileFemaleRadio=document.querySelector('#mobile-createAccount-female-input'),
mobileFrontImage=document.querySelector('.mobile-img-icon'),
systemMaleRadio=document.querySelector('#system-createAccount-male-input'),
systemFemaleRadio=document.querySelector('#system-createAccount-femal-input'),
systemFrontImage=document.querySelector('.system-img-icon');


//mobile male&female change image by radio
mobileMaleRadio.addEventListener('click',()=>{
mobileMaleRadio.value='on';
mobileFemaleRadio.value='off';
 //mobile profile change to male
 if(mobileFrontImage.src==='http://127.0.0.1:5500/zeeta-folder/icons/female-front-img-empty.png'){
    mobileFrontImage.src='http://127.0.0.1:5500/zeeta-folder/icons/male-front-img-empty.png';
 }
 //system profile change to male
mobileMaleRadio.value='on';
mobileFemaleRadio.value='off';
 if(systemFrontImage.src==='http://127.0.0.1:5500/zeeta-folder/icons/female-front-img-empty.png'){
    systemFrontImage.src='http://127.0.0.1:5500/zeeta-folder/icons/male-front-img-empty.png';
 }
})
mobileFemaleRadio.addEventListener('click',()=>{
    mobileFemaleRadio.value='on';
    mobileMaleRadio.value='off';
 //mobile profile change to female
 if(mobileFrontImage.src==='http://127.0.0.1:5500/zeeta-folder/icons/male-front-img-empty.png'){
    mobileFrontImage.src='http://127.0.0.1:5500/zeeta-folder/icons/female-front-img-empty.png';
 }
 //system profile change to female
 systemFemaleRadio.value='on';
systemMaleRadio.value='off';
 if(systemFrontImage.src==='http://127.0.0.1:5500/zeeta-folder/icons/male-front-img-empty.png'){
    systemFrontImage.src='http://127.0.0.1:5500/zeeta-folder/icons/female-front-img-empty.png';
 }
})
//system male&female change image by radio
systemMaleRadio.addEventListener('click',()=>{
mobileMaleRadio.value='on';
mobileFemaleRadio.value='off';
 //system profile change to male
 if(systemFrontImage.src==='http://127.0.0.1:5500/zeeta-folder/icons/female-front-img-empty.png'){
    systemFrontImage.src='http://127.0.0.1:5500/zeeta-folder/icons/male-front-img-empty.png';
 }
 //mobile profile change to male
mobileMaleRadio.value='on';
mobileFemaleRadio.value='off';
 if(mobileFrontImage.src==='http://127.0.0.1:5500/zeeta-folder/icons/female-front-img-empty.png'){
    mobileFrontImage.src='http://127.0.0.1:5500/zeeta-folder/icons/male-front-img-empty.png';
 }
})
systemFemaleRadio.addEventListener('click',()=>{
systemFemaleRadio.value='on';
systemMaleRadio.value='off';
 //system profile change
 if(systemFrontImage.src==='http://127.0.0.1:5500/zeeta-folder/icons/male-front-img-empty.png'){
    systemFrontImage.src='http://127.0.0.1:5500/zeeta-folder/icons/female-front-img-empty.png';
 }
 //mobile profile change to female
mobileFemaleRadio.value='on';
mobileMaleRadio.value='off';
 if(mobileFrontImage.src==='http://127.0.0.1:5500/zeeta-folder/icons/male-front-img-empty.png'){
    mobileFrontImage.src='http://127.0.0.1:5500/zeeta-folder/icons/female-front-img-empty.png';
 }
})







////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//forgottenPassword counrtry and more.... 
const forgottenPasswordCountryInput=document.querySelector('.forgottenPassword-country-input'),
forgottenPasswordCountryCode=document.querySelector('.forgottenPassword-country-code'),
forgottenPasswordPhonenumberInput=document.querySelector('.forgottenPassword-phonenumber-input');

//mobileCountryInput
forgottenPasswordCountryInput.addEventListener('keyup',(value)=>{
document.querySelector('.forgottenPassword-pick-country-div').style.display='block';

const countryAndCode=[{country:'afghanistan',code:'+93'},{country:'albania',code:'+355'},{country:'algeria',code:'+213'},{country:'america samoa',code:'+1684'},{country:'andorra',code:'+376'},{country:'angola',code:'+244'},{country:'anguilla',code:'+1264'},{country:'antarctica',code:'+67264'},{country:'antigua and barbuda',code:'+1268'},{country:'argentina',code:'+54'},{country:'armenia',code:'+374'},{country:'aruba',code:'+297'},{country:'ascension island',code:'+247'},{country:'australia',code:'+61'},{country:'austria',code:'+43'},{country:'azerbaijan',code:'+994'},{country:'bahamas',code:'+1242'},{country:'bahrain',code:'+973'},{country:'bangladesh',code:'+880'},{country:'barbados',code:'+1246'},{country:'belarus',code:'+375'},{country:'belgium',code:'+32'},{country:'belize',code:'+501'},{country:'benin',code:'+501'},{country:'bermuda',code:'+1441'},{country:'bhutan',code:'+975'},{country:'bolivia',code:'+591'},{country:'bosnia and herzegovina',code:'+387'},{country:'botswana',code:'+267'},{country:'brazil',code:'+55'},{country:'british virgin islands',code:'+1284'},{country:'brunei',code:'+673'},{country:'bulgaria',code:'+359'},{country:'burkina faso',code:'+226'},{country:'burma (myanmar)',code:'+95'},{country:'burundi',code:'+257'},{country:'cambodia',code:'+855'},{country:'cameroon',code:'+237'},{country:'canada',code:'+1'},{country:'cape Verde',code:'+238'},{country:'cayman islands',code:'+1345'},{country:'central african republic',code:'+236'},{country:'chad',code:'+235'},{country:'chile',code:'+56'},{country:'china',code:'+86'},{country:'christmas Island',code:'+61'},{country:'cocos (keeling) Islands',code:'+61'},{country:'colombia',code:'+57'},{country:'comoros',code:'+269'},{country:'congo',code:'+243'},{country:'cook islands',code:'+682'},{country:'costa rica',code:'+506'},{country:'croatia',code:'+385'},{country:'cuba',code:'+53'},{country:'cyprus',code:'+357'},{country:'czech Republic',code:'+420'},{country:'democratic republic of the congo',code:'+243'},{country:'denmark',code:'+45'},{country:'diego garcia',code:'+246'},{country:'djibouti',code:'+253'},{country:'dominica',code:'+1767'},{country:'dominican republic',code:'+1809'},{country:'ecuador',code:'+593'},{country:'egypt',code:'+20'},{country:'el salvador',code:'+503'},{country:'equatorial guinea',code:'+240'},{country:'eritrea',code:'+291'},{country:'estonia',code:'+372'},{country:'ethiopia',code:'+251'},{country:'falkland islands',code:'+500'},{country:'faroe islands',code:'+298'},{country:'Fiji',code:'+298'},{country:'finland',code:'+358'},{country:'france',code:'+33'},{country:'french polynesia',code:'+689'},{country:'french polynesia',code:'+689'},{country:'gabon',code:'+241'},{country:'gambia',code:'+220'},{country:'georgia',code:'+995'},{country:'germany',code:'+49'},{country:'ghana',code:'+233'},{country:'gibraltar',code:'+350'},{country:'greece',code:'+30'},{country:'greenland',code:'+299'},{country:'grenada',code:'+1473'},{country:'guadeloupe',code:'+590'},{country:'guam',code:'+1671'},{country:'guatemala',code:'+502'},{country:'guinea',code:'+224'},{country:'guinea bissau',code:'+245'},{country:'guyana',code:'+592'},{country:'haiti',code:'+509'},{country:'holy see (vatican city)',code:'+39'},{country:'honduras',code:'+504'},{country:'hong kong',code:'+852'},{country:'hungary',code:'+36'},{country:'iceland',code:'+354'},{country:'india',code:'+91'},{country:'indonesia',code:'+62'},{country:'iran',code:'+98'},{country:'iraq',code:'+964'},{country:'ireland',code:'+353'},{country:'isle of man',code:'+44'},{country:'israel',code:'+972'},{country:'italy',code:'+39'},{country:'ivory coast (côte d ivoire)',code:'+225'},{country:'jamaica',code:'+1876'},{country:'japan',code:'+81'},{country:'jersey',code:'+44'},{country:'jordan',code:'+962'},{country:'kazakhstan',code:'+7'},{country:'kenya',code:'+254'},{country:'Kiribati',code:'+686'},{country:'kuwait',code:'+965'},{country:'kyrgyzstan',code:'+996'},{country:'laos',code:'+856'},{country:'latvia',code:'+371'},{country:'lebanon',code:'+961'},{country:'lesotho',code:'+266'},{country:'liberia',code:'+231'},{country:'libya',code:'+218'},{country:'liechtenstein',code:'+423'},{country:'lithuania',code:'+370'},{country:'luxembourg',code:'+352'},{country:'macau',code:'+853'},{country:'macedonia',code:'+389'},{country:'madagascar',code:'+261'},{country:'malawi',code:'+265'},{country:'malaysia',code:'+60'},{country:'maldives',code:'+960'},{country:'mali',code:'+223'},{country:'malta',code:'+356'},{country:'marshall islands',code:'+692'},{country:'martinique',code:'+596'},{country:'mauritania',code:'+222'},{country:'mauritius',code:'+230'},{country:'Mayotte',code:'+262'},{country:'mexico',code:'+52'},{country:'micronesia',code:'+691'},{country:'moldova',code:'+373'},{country:'monaco',code:'+377'},{country:'mongolia',code:'+976'},{country:'montenegro',code:'+382'},{country:'morocco',code:'+212'},{country:'mozambique',code:'+258'},{country:'namibia',code:'+264'},{country:'nauru',code:'+674'},{country:'nepal',code:'+977'},{country:'netherlands',code:'+31'},{country:'netherlands antilles',code:'+599'},{country:'new caledonia',code:'+687'},{country:'new zealand',code:'+64'},{country:'nicaragua',code:'+505'},{country:'niger',code:'+227'},{country:'nigeria',code:'+234'},{country:'niue',code:'+683'},{country:'norfolk Island',code:'+672'},{country:'north korea',code:'+850'},{country:'northern mariana islands',code:'+1670'},{country:'norway',code:'+47'},{country:'oman',code:'+968'},{country:'pakistan',code:'+92'},{country:'palau',code:'+680'},{country:'palestine',code:'+970'},{country:'panama',code:'+507'},{country:'papua new guinea',code:'+675'},{country:'paraguay',code:'+595'},{country:'peru',code:'+51'},{country:'philippines',code:'+63'},{country:'pitcairn islands',code:'+870'},{country:'poland',code:'+48'},{country:'portugal',code:'+351'},{country:'puerto rico',code:'+1787'},{country:'qatar',code:'+974'},{country:'republic of the congo',code:'+242'},{country:'reunion island',code:'+262'},{country:'romania',code:'+40'},{country:'russia',code:'+7'},{country:'rwanda',code:'+250'},{country:'saint helena',code:'+290'},{country:'saint lucia',code:'+1758'},{country:'saint martin',code:'+590'},{country:'saint pierre and miquelon',code:'+508'},{country:'saint vincent and the grenadines',code:'+1784'},{country:'san marino',code:'+378'},{country:'sao tome and principe',code:'+239'},{country:'saudi arabia',code:'+966'},{country:'senegal',code:'+221'},{country:'serbia',code:'+381'},{country:'seychelles',code:'+248'},{country:'sierra leone',code:'+232'},{country:'singapore',code:'+65'},{country:'sint maarten',code:'+1721'},{country:'slovakia',code:'+421'},{country:'slovenia',code:'+386'},{country:'solomon islands',code:'+677'},{country:'somalia',code:'+252'},{country:'south africa',code:'+27'},{country:'south korea',code:'+82'},{country:'south Sudan',code:'+211'},{country:'spain',code:'+34'},{country:'Sri Lanka',code:'+94'},{country:'sudan',code:'+249'},{country:'suriname',code:'+597'},{country:'svalbard',code:'+47'},{country:'swaziland',code:'+268'},{country:'sweden',code:'+46'},{country:'switzerland',code:'+41'},{country:'syria',code:'+963'},{country:'taiwan',code:'+886'},{country:'tajikistan',code:'+992'},{country:'tanzania',code:'+255'},{country:'thailand',code:'+66'},{country:'timor ieste east timor',code:'+670'},{country:'Togo',code:'+228'},{country:'Tokelau',code:'+690'},{country:'tonga islands',code:'+676'},{country:'trinidad and tobago',code:'+1868'},{country:'tunisia',code:'+216'},{country:'turkey',code:'+90'},{country:'turkmenistan',code:'+993'},{country:'turks and caicos Islands',code:'+1649'},{country:'Tuvalu',code:'+688'},{country:'uganda',code:'+256'},{country:'ukraine',code:'+380'},{country:'united arab emirates',code:'+971'},{country:'united kingdom',code:'+44'},{country:'united states',code:'+1'},{country:'uruguay',code:'+598'},{country:'uS virgin islands',code:'+1340'},{country:'uzbekistan',code:'+998'},{country:'vanuatu',code:'+678'},{country:'venezuela',code:'+58'},{country:'vietnam',code:'+84'},{country:'wallis and futuna',code:'+681'},{country:'western sahara',code:'+212'},{country:'yemen',code:'+967'},{country:'zambia',code:'+260'},{country:'zimbabwe',code:'+263'}];

let forgottenPasswordPickCountryName='';
for(let i=0;i<countryAndCode.length;i++){
    if(countryAndCode[i].country===forgottenPasswordCountryInput.value){
        forgottenPasswordCountryCode.innerText=countryAndCode[i].code;
    }
    if(countryAndCode[i].country.includes(forgottenPasswordCountryInput.value)){
        forgottenPasswordPickCountryName+=`
            <p class="mobile-pick-country-name" onclick="
            forgottenPasswordCountryCode.innerText='${countryAndCode[i].code}';
            forgottenPasswordCountryInput.value='${countryAndCode[i].country}';
            document.querySelector('.forgottenPassword-pick-country-div').style.display='none';
            ">
                ${countryAndCode[i].country}
                <span class="mobile-pick-country-code">${countryAndCode[i].code}</span>
            </p>`;
    }
}
document.querySelector('.forgottenPassword-pick-country-div').innerHTML=forgottenPasswordPickCountryName;
})


//forgottenPasswordOtpInput
const forgottenPasswordOtpInput=document.querySelectorAll('.forgottenPassword-i-otp');
forgottenPasswordOtpInput.forEach((forgottenPasswordOtpInput)=>{  
    forgottenPasswordOtpInput.addEventListener('keyup',(event)=>{
        if(event.key==='Backspace'){
            forgottenPasswordOtpInput.previousElementSibling.focus()
        }else{
            forgottenPasswordOtpInput.nextElementSibling.focus()
        }
        
    })
})


/*login-show&hidden password*/
const loginPasswordSeenButton=document.querySelector('.login-password-seen-button'),
loginCreatepasswordInput=document.querySelector('.login-password-input'),
loginSeenPasswordIcon=document.querySelector('.login-seen-icon');
//loginPasswordsSeenButton
loginPasswordSeenButton.addEventListener('click',()=>{
    
    if(loginCreatepasswordInput.type==="password"){
        //mobile
        loginCreatepasswordInput.type="text";
        loginSeenPasswordIcon.src="http://127.0.0.1:5500/zeeta-folder/icons/show-password.png";
        
    }else{
        //mobile
        loginCreatepasswordInput.type="password";
        loginSeenPasswordIcon.src="http://127.0.0.1:5500/zeeta-folder/icons/hind-password.png";
        
    }
    
})


