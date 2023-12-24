// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";

const firebaseConfig = {
apiKey: "AIzaSyBBmAO0_7GQD__RK_hye_ZB4CxTlJfUhxw",
authDomain: "zeeciapeapp-1eee8.firebaseapp.com",
databaseURL: "https://zeeciapeapp-1eee8-default-rtdb.firebaseio.com",
projectId: "zeeciapeapp-1eee8",
storageBucket: "zeeciapeapp-1eee8.appspot.com",
messagingSenderId: "479247535972",
appId: "1:479247535972:web:5178f39edfb9dc2fda3471",
measurementId: "G-9TWTVNTYJD"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getDatabase,set,ref,remove,update,child,onValue } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
const db =getDatabase();











//mobile&system SignUp Button variable....
const mobileSignUpButton=document.querySelector('.mobile-signUp-button'),
systemSignUpButton=document.querySelector('.system-signUp-button');


//mobile SignUpButton
mobileSignUpButton.addEventListener('click',()=>{
//user mobile impormation variable....
const firstNameInput=document.querySelector('.mobile-createAccount-firstname-input'),
lastNameInput=document.querySelector('.mobile-createAccount-lastname-input'),
emailInput=document.querySelector('.mobile-createAccount-youremail-input'),
//
dateOfBirthInput=document.querySelector('.mobile-createAccount-dateofbirth-input'),
countryInput=document.querySelector('.mobile-createAccount-country-input'),
createPasswordInput=document.querySelector('.mobile-createAccount-createpassword-input'),
countryCodeInput=document.querySelector('.mobile-country-code'),
phoneNumberInput=document.querySelector('.mobile-createAccount-phonenumber-input'),
backgroundImageInput=document.querySelector('.mobile-background-img-icon'),
imageInput=document.querySelector('.mobile-img-icon');

//male&female for both mobile&system
let getGender=mobileMaleRadio.value==='on'?'male':'female';
//userIpAddress&Id
const userAgent=navigator.userAgent,
id=crypto.randomUUID();
//otp input variable.....
const mobileIOtpInput=document.querySelector('#mobile-i-otp-input'),mobileIIOtpInput=document.querySelector('#mobile-ii-otp-input'),mobileIIIOtpInput=document.querySelector('#mobile-iii-otp-input'),mobileIVOtpInput=document.querySelector('#mobile-iv-otp-input'),mobileVOtpInput=document.querySelector('#mobile-v-otp-input'),mobileVIOtpInput=document.querySelector('#mobile-vi-otp-input');
//mobile otp setup
let mobileUserInputsOtp=mobileIOtpInput.value+mobileIIOtpInput.value+mobileIIIOtpInput.value+mobileIVOtpInput.value+mobileVOtpInput.value+mobileVIOtpInput.value;


//database
set(ref(getDatabase(),"zeeciape/I_createAccountImpormation"+`${id}`),{
    firstName:firstNameInput.value,
    lastName:lastNameInput.value,
    email:emailInput.value,
    dateOfBirth:dateOfBirthInput.value,
    country:countryInput.value,
    passwords:createPasswordInput.value,
    countryCode:countryCodeInput.innerText,
    phoneNumber:phoneNumberInput.value,
    backgroundImage:backgroundImageInput.src,
    image:imageInput.src,
    gender:getGender,
    userPhoneDetail:userAgent,
    userId:id,
    otp:mobileUserInputsOtp,
    followers:0,
    likes:0,
    following:0,
    check:'I_createAccountImpormation'
    
})
})


//system SignUpButton
systemSignUpButton.addEventListener('click',()=>{
//system impormation variable....
const firstNameInput=document.querySelector('.system-createAccount-firstname-input'),
lastNameInput=document.querySelector('.system-createAccount-lastname-input'),
emailInput=document.querySelector('.system-createAccount-youremail-input'),
//
dateOfBirthInput=document.querySelector('.system-createAccount-dateofbirth-input'),
countryInput=document.querySelector('.system-createAccount-country-input'),
createPasswordInput=document.querySelector('.system-createAccount-createpassword-input'),
countryCodeInput=document.querySelector('.system-country-code'),
phoneNumberInput=document.querySelector('.system-createAccount-phonenumber-input'),
backgroundImageInput=document.querySelector('.system-background-img-icon'),
imageInput=document.querySelector('.system-img-icon');

//male&female for both mobile&system
let getGender=systemMaleRadio.value==='on'?'male':'female';
//userIpAddress&Id
const userAgent=navigator.userAgent,
id=crypto.randomUUID();
//otp input variable.....
const systemIOtpInput=document.querySelector('#system-i-otp-input'),systemIIOtpInput=document.querySelector('#system-ii-otp-input'),systemIIIOtpInput=document.querySelector('#system-iii-otp-input'),systemIVOtpInput=document.querySelector('#system-iv-otp-input'),systemVOtpInput=document.querySelector('#system-v-otp-input'),systemVIOtpInput=document.querySelector('#system-vi-otp-input');
//system otp setup
let systemUserInputsOtp=systemIOtpInput.value+systemIIOtpInput.value+systemIIIOtpInput.value+systemIVOtpInput.value+systemVOtpInput.value+systemVIOtpInput.value;


//database
set(ref(getDatabase(),"zeeciape/I_createAccountImpormation"+`${id}`),{
    firstName:firstNameInput.value,
    lastName:lastNameInput.value,
    email:emailInput.value,
    dateOfBirth:dateOfBirthInput.value,
    country:countryInput.value,
    passwords:createPasswordInput.value,
    countryCode:countryCodeInput.innerText,
    phoneNumber:phoneNumberInput.value,
    backgroundImage:backgroundImageInput.src,
    image:imageInput.src,
    gender:getGender,
    userPhoneDetail:userAgent,
    userId:id,
    otp:systemUserInputsOtp,
    followers:0,
    likes:0,
    following:0,
    check:'I_createAccountImpormation'
})
})    









/*chatPLace_header_userId && chatCount dataDashed
 to use in onvalue....
 */
let chatPlaceDiv=document.querySelector('.chat-place-div');
let chatCount_dataDashed=chatPlaceDiv.dataset.chatCount;
let chatUserId_dataDashed=chatPlaceDiv.dataset.chatId;





onValue(ref(db,"zeeciape"),(snapshot)=>{
    let userImpormation=[];
    snapshot.forEach((userdetail)=> {
        userImpormation.push(
            userdetail.val()
        )
    });
   

//sorting chatCount Number..//
userImpormation.sort((s1,s2)=>s1.chatCount-s2.chatCount);

console.log(userImpormation)


// login Email_phoneNumber&password Input
let loginEmail_phoneNumber_Input,loginPassword_Input;
loginEmail_phoneNumber_Input=document.querySelector('.login-emailContact-input'),
loginPassword_Input=document.querySelector('.login-password-input');




let loginPassword,loginEmail,loginPhoneNumber,loginUserPhoneDetail;
//leahdouglas973
loginPassword=loginPassword_Input.value;
//leahdouglas178@gmail.com
loginEmail=loginEmail_phoneNumber_Input.value;
//9087634526
loginPhoneNumber=loginEmail_phoneNumber_Input.value;
//infinix.1234
loginUserPhoneDetail='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'; //navigator.userAgent
for(let i=0; i<userImpormation.length;i++){
    
    if(userImpormation[i].check==='I_createAccountImpormation'){
        if(userImpormation[i].passwords===loginPassword&&userImpormation[i].email===loginEmail||userImpormation[i].passwords===loginPassword&&userImpormation[i].PhoneNumber===loginPhoneNumber||userImpormation[i].userPhoneDetail===loginUserPhoneDetail){
            


            //user detail
            let thisUserFirstName,thisUserLastName,thisUserPasswords,thisUserPhoneNumber,thisUserCountryCode,thisUserEmail,thisUserImage,thisUserBackgroundImage,thisUserDateOfBirth,thisUserGender,thisUserCountry,thisUserOtp,thisUserId,thisUserPhoneDetail,thisfollowers,thislikes,thisfollowing;
            
            thisUserFirstName=userImpormation[i].firstName;
            thisUserLastName=userImpormation[i].lastName;
            thisUserPasswords=userImpormation[i].passwords;
            thisUserPhoneNumber=userImpormation[i].phoneNumber;
            thisUserCountryCode=userImpormation[i].countryCode;
            thisUserEmail=userImpormation[i].email;
            thisUserImage=userImpormation[i].image;
            thisUserBackgroundImage=userImpormation[i].backgroundImage;
            thisUserDateOfBirth=userImpormation[i].dateOfBirth;
            thisUserGender=userImpormation[i].gender;
            thisUserCountry=userImpormation[i].country;
            thisUserOtp=userImpormation[i].otp;
            thisUserId=userImpormation[i].userId;
            thisUserPhoneDetail=userImpormation[i].userPhoneDetail,
            thisfollowers=userImpormation[i].followers,
            thislikes=userImpormation[i].likes,
            thisfollowing=userImpormation[i].following;
            
            

            //system&mobile-createAccount&login-page display none
            document.querySelector('.system-modile-createAccount-loginPage-div').style.display='none';

            //frontImage&backgroundImage&userName upload ...
            document.querySelector('.aboutme-background-img').src=thisUserBackgroundImage;
            document.querySelector('.aboutme-front-img').src=thisUserImage;
            document.querySelector('.aboutme-name').innerText=thisUserFirstName+''+thisUserLastName;

            //following&followers&likes upload ...
            document.querySelector('.aboutme-following-count').innerText=thisfollowing;
            document.querySelector('.aboutme-followers-count').innerText=thisfollowers;
            document.querySelector('.aboutme-likes-count').innerText=thislikes;










            //aboutme change front && background image variable...
            const aboutmeBackgroundFile=document.querySelector('.aboutme-background-file'),
            aboutmeFrontFile=document.querySelector('.aboutme-front-file');

            //update background images files
            aboutmeBackgroundFile.addEventListener('change',()=>{            
                const file =aboutmeBackgroundFile.files[0];
                const reder= new FileReader();
                reder.addEventListener('load',()=>{
                    //change aboutmeBackgroundImg
                    let change_aboutmeBackgroundImg=reder.result;
                    
                    update(ref(getDatabase(),"zeeciape/I_createAccountImpormation"+`${thisUserId}`),{
                        firstName:thisUserFirstName,
                        lastName:thisUserLastName,
                        email:thisUserEmail,
                        dateOfBirth:thisUserDateOfBirth,
                        country:thisUserCountry,
                        passwords:thisUserPasswords,
                        countryCode:thisUserCountryCode,
                        phoneNumber:thisUserPhoneNumber,
                        backgroundImage:change_aboutmeBackgroundImg,//updated
                        image:thisUserImage,
                        gender:thisUserGender,
                        userPhoneDetail:thisUserPhoneDetail,
                        userId:thisUserId,
                        otp:thisUserOtp,
                        followers:thisfollowers,
                        likes:thislikes,
                        following:thisfollowing,
                        check:'I_createAccountImpormation'
                    })
                    
                })
                reder.readAsDataURL(file)           
            })

            //update Front images files
            aboutmeFrontFile.addEventListener('change',()=>{
                const file =aboutmeFrontFile.files[0];
                const reder= new FileReader();
                reder.addEventListener('load',()=>{

                    //change aboutmeFrontImg
                    let change_aboutmeFrontImg=reder.result;
                    
                    update(ref(getDatabase(),"zeeciape/I_createAccountImpormation"+`${thisUserId}`),{
                        firstName:thisUserFirstName,
                        lastName:thisUserLastName,
                        email:thisUserEmail,
                        dateOfBirth:thisUserDateOfBirth,
                        country:thisUserCountry,
                        passwords:thisUserPasswords,
                        countryCode:thisUserCountryCode,
                        phoneNumber:thisUserPhoneNumber,
                        backgroundImage:thisUserBackgroundImage,
                        image:change_aboutmeFrontImg,//updated
                        gender:thisUserGender,
                        userPhoneDetail:thisUserPhoneDetail,
                        userId:thisUserId,
                        otp:thisUserOtp,
                        followers:thisfollowers,
                        likes:thislikes,
                        following:thisfollowing,
                        check:'I_createAccountImpormation'
                    })
                    
                })
                reder.readAsDataURL(file)
            })


            //update UserImpormation Button
            const edith_SubmitButton=document.querySelector('.edith-submit-button'),
            edith_firstnameInput=document.querySelector('.edith-firstname-input'),
            edith_lastnameInput=document.querySelector('.edith-lastname-input'),
            edith_contactInput=document.querySelector('.edith-contact-input'),
            edith_emailInput=document.querySelector('.edith-email-input'),
            edith_createNew_passwordsInput=document.querySelector('.edith-create-new-passwords-input'),
            edith_confirmNew_passwordsInput=document.querySelector('.edith-confirm-new-passwords-input'),
            edith_old_passwordsInput=document.querySelector('.edith-old-passwords-input');
            

            //%%%%%%%%%%%%%%%%%%%%%%//
            let edith_firstname,edith_lastname,edith_contact,edith_email,edith_createNew_passwords,password_correct;
            //
            edith_firstname=edith_firstnameInput.value===''?thisUserFirstName:edith_firstnameInput.value;
            edith_lastname=edith_lastnameInput.value===''?thisUserLastName:edith_lastnameInput.value;
            edith_contact=edith_contactInput.value===''?thisUserPhoneNumber:edith_contactInput.value;
            edith_email=edith_emailInput.value===''?thisUserEmail:edith_emailInput.value;

            edith_createNew_passwords=edith_createNew_passwordsInput.value;
            ///password_correct
            password_correct=edith_old_passwordsInput.value===thisUserPasswords?true:false;

            
            edith_SubmitButton.addEventListener('click',()=>{
                console.log(edith_createNew_passwordsInput.value,edith_confirmNew_passwordsInput.value)
                console.log(edith_createNew_passwordsInput.value===edith_confirmNew_passwordsInput.value)
                
                
                if(edith_createNew_passwordsInput.value===edith_confirmNew_passwordsInput.value){

                    if(password_correct){
                        update(ref(getDatabase(),"zeeciape/I_createAccountImpormation"+`${thisUserId}`),{
                            firstName:edith_firstname,//updated
                            lastName:edith_lastname,//updated
                            email:edith_email,//updated
                            dateOfBirth:thisUserDateOfBirth,
                            country:thisUserCountry,
                            passwords:edith_createNew_passwords,//updated
                            countryCode:thisUserCountryCode,
                            phoneNumber:edith_contact,//updated
                            backgroundImage:thisUserBackgroundImage,
                            image:thisUserImage,
                            gender:thisUserGender,
                            userPhoneDetail:thisUserPhoneDetail,
                            userId:thisUserId,
                            otp:thisUserOtp,
                            followers:thisfollowers,
                            likes:thislikes,
                            following:thisfollowing,
                            check:'I_createAccountImpormation'
                        })
                    }
                }else{
                    document.querySelector('.edith-last-notice').innerText='new password and confirm new password do not match';
                    document.querySelector('.edith-last-notice').style.color='red';
                }
                  
            })




            //set data to II_createAccountImpormation
            for(let i=0;i<userImpormation.length;i++){
                if(userImpormation[i].check==='I_createAccountImpormation'){
                    let friendUserId='';
                    let userId=userImpormation[i].userId;

                    for(let i=0;i<userImpormation.length;i++){
                        if(userImpormation[i].check===`friendImpormation${thisUserId}${userImpormation[i].userId}`&&userImpormation[i].userId===userId){
                            friendUserId=userImpormation[i].userId;
                        }
                    }
                    
                    
                    if(userId != friendUserId){
                        // set to your II_createAccountImpormation
                        set(ref(getDatabase(),"zeeciape/II_createAccountImpormation"+thisUserId+userId),{
                        firstName:userImpormation[i].firstName,
                        lastName:userImpormation[i].lastName,
                        email:userImpormation[i].email,
                        dateOfBirth:userImpormation[i].dateOfBirth,
                        country:userImpormation[i].country,
                        passwords:userImpormation[i].passwords,
                        countryCode:userImpormation[i].countryCode,
                        phoneNumber:userImpormation[i].phoneNumber,
                        backgroundImage:userImpormation[i].backgroundImage,
                        image:userImpormation[i].image,
                        gender:userImpormation[i].gender,
                        userPhoneDetail:userImpormation[i].userPhoneDetail,
                        userId:userImpormation[i].userId,
                        otp:userImpormation[i].otp,
                        followers:userImpormation[i].followers,
                        likes:userImpormation[i].likes,
                        following:userImpormation[i].following,
                        check:`II_createAccountImpormation${thisUserId}${userImpormation[i].userId}`
                        })
                        // set to friend II_createAccountImpormation
                        set(ref(getDatabase(),"zeeciape/II_createAccountImpormation"+userId+thisUserId),{
                            firstName:thisUserFirstName,
                            lastName:thisUserLastName,
                            email:thisUserEmail,
                            dateOfBirth:thisUserDateOfBirth,
                            country:thisUserCountry,
                            passwords:thisUserPasswords,
                            countryCode:thisUserCountryCode,
                            phoneNumber:thisUserPhoneNumber,
                            backgroundImage:thisUserBackgroundImage,
                            image:thisUserImage,
                            gender:thisUserGender,
                            userPhoneDetail:thisUserPhoneDetail,
                            userId:thisUserId,
                            otp:thisUserOtp,
                            followers:thisfollowers,
                            likes:thislikes,
                            following:thisfollowing,
                            check:`II_createAccountImpormation${userId}${thisUserId}`
                        })
                    }
                }
            }




            let addFriendContainer_III,addFriendContainer_I;
            //addFriendContainer_III && addFriendContainer_I variable...
            addFriendContainer_III=``;
            addFriendContainer_I=``;
            for(let i=0;i<userImpormation.length;i++){

                if(userImpormation[i].check===`II_createAccountImpormation${thisUserId}${userImpormation[i].userId}`){
                    addFriendContainer_III+=`
                        <div class="chat-pick-add-friend-iii-container">
                            <button class="chat-pick-add-friend-iii-img-button">
                                <img src="${userImpormation[i].image}"  alt="chat-pick-add-friend-iii-user-img" class="chat-pick-add-friend-iii-img">
                            </button>
                            <p class="chat-pick-add-friend-iii-name ">${userImpormation[i].firstName} ${userImpormation[i].lastName}</p>
                            <p class="chat-pick-add-friend-iii-contact">${userImpormation[i].countryCode}${userImpormation[i].phoneNumber}</p>
                            <button class="chat-pick-add-friend-iii-button" data-user-id="${userImpormation[i].userId}">add friend</button>
                        </div>`;
                    addFriendContainer_I+=`
                        <div class="chat-pick-add-friend-i-container">
                            <button class="chat-pick-add-friend-i-img-button">
                                <img src="${userImpormation[i].image}" class="chat-pick-add-friend-i-img">
                            </button>
                            <p class="chat-pick-add-friend-i-name">${userImpormation[i].firstName} ${userImpormation[i].lastName}</p>
                            <p class="chat-pick-add-friend-i-contact">${userImpormation[i].countryCode}${userImpormation[i].phoneNumber}</p>
                            <button class="chat-pick-add-friend-i-button"
                            data-user-id="${userImpormation[i].userId}">add friend</button>
                        </div>`;      
                } 
                   
            }
            //addFriendContainer_III && addFriendContainer_I
            document.querySelector('.chat-pick-add-friend-iii-div-container').innerHTML=addFriendContainer_III;
            document.querySelector('.chat-pick-add-friend-i-div-container').innerHTML=addFriendContainer_I;
            



            //allAddFriend_III button
            const allAddFriend_III=document.querySelectorAll('.chat-pick-add-friend-iii-button');
            allAddFriend_III.forEach((eachAddFriend_III)=>{
                eachAddFriend_III.addEventListener('click',()=>{
                //change AddFriend_III button to friend 
                eachAddFriend_III.style.backgroundColor='rgb(218, 218, 218)';
                eachAddFriend_III.style.color='rgb(0, 0, 90)';
                eachAddFriend_III.style.border='1px solid rgb(0, 0, 90)';
                eachAddFriend_III.innerText='friend';
                
                //****set DATE****//
                let getdate,getYear,getDate,getMonth;
                getdate=new Date();
                getYear=getdate.getUTCFullYear()-2000;
                getDate=getdate.getDate();
                getMonth=getdate.getUTCMonth()+1;

                //****get DataDashed from addFriend button****//
                let dataDashedId=eachAddFriend_III.dataset.userId;
                
                setInterval(()=>{
                    
                    for(let i=0;i<userImpormation.length;i++){
                        if(userImpormation[i].check===`II_createAccountImpormation${thisUserId}${dataDashedId}`){
                            // set to myself friendImpormation
                            set(ref(getDatabase(),"zeeciape/friendImpormation"+thisUserId+dataDashedId),{
                                firstName:userImpormation[i].firstName,
                                lastName:userImpormation[i].lastName,
                                email:userImpormation[i].email,
                                dateOfBirth:userImpormation[i].dateOfBirth,
                                country:userImpormation[i].country,
                                passwords:userImpormation[i].passwords,
                                countryCode:userImpormation[i].countryCode,
                                phoneNumber:userImpormation[i].phoneNumber,
                                backgroundImage:userImpormation[i].backgroundImage,
                                image:userImpormation[i].image,
                                gender:userImpormation[i].gender,
                                userPhoneDetail:userImpormation[i].userPhoneDetail,
                                userId:userImpormation[i].userId,
                                otp:userImpormation[i].otp,
                                followers:userImpormation[i].followers,
                                likes:userImpormation[i].likes,
                                following:userImpormation[i].following,
                                lastChat:'empty text',
                                lastDate:getMonth+'/'+getDate+'/'+getYear,
                                lastChatCount:0,
                                check:`friendImpormation${thisUserId}${dataDashedId}`
                                }).then(()=>{
                                    remove(ref(getDatabase(),"zeeciape/II_createAccountImpormation"+thisUserId+dataDashedId),{
                                        //empty.....
                                    })
                                })
                            // set to friend friendImpormation
                            set(ref(getDatabase(),"zeeciape/friendImpormation"+dataDashedId+thisUserId),{
                                firstName:thisUserFirstName,
                                lastName:thisUserLastName,
                                email:thisUserEmail,
                                dateOfBirth:thisUserDateOfBirth,
                                country:thisUserCountry,
                                passwords:thisUserPasswords,
                                countryCode:thisUserCountryCode,
                                phoneNumber:thisUserPhoneNumber,
                                backgroundImage:thisUserBackgroundImage,
                                image:thisUserImage,
                                gender:thisUserGender,
                                userPhoneDetail:thisUserPhoneDetail,
                                userId:thisUserId,
                                otp:thisUserOtp,
                                followers:thisfollowers,
                                likes:thislikes,
                                following:thisfollowing,
                                lastChat:'empty text',
                                lastDate:getMonth+'/'+getDate+'/'+getYear,
                                lastChatCount:0,
                                check:`friendImpormation${dataDashedId}${thisUserId}`
                                }).then(()=>{
                                    remove(ref(getDatabase(),"zeeciape/II_createAccountImpormation"+dataDashedId+thisUserId),{
                                        //empty.....
                                    })
                                })
                        }
                    }
                },1000)
                addChatPick_addCallFriend()
                
            })
            })

            //allAddFriend_I button
            const allAddFriend_I=document.querySelectorAll('.chat-pick-add-friend-i-button');
            allAddFriend_I.forEach((eachAddFriend_I)=>{
                eachAddFriend_I.addEventListener('click',()=>{
                //change AddFriend_I button to friend 
                eachAddFriend_I.style.backgroundColor='rgb(218, 218, 218)';
                eachAddFriend_I.style.color='rgb(0, 0, 90)';
                eachAddFriend_I.style.border='1px solid rgb(0, 0, 90)';
                eachAddFriend_I.innerText='friend';
                //****set DATE****//
                let getdate,getYear,getDate,getMonth;
                getdate=new Date();
                getYear=getdate.getUTCFullYear()-2000;
                getDate=getdate.getDate();
                getMonth=getdate.getUTCMonth()+1;

                //****get DataDashed from addFriend button****//
                let dataDashedId=eachAddFriend_I.dataset.userId;
                
                setInterval(()=>{
                    for(let i=0;i<userImpormation.length;i++){
                        if(userImpormation[i].check===`II_createAccountImpormation${thisUserId}${dataDashedId}`){
                            // set to myself friendImpormation
                            set(ref(getDatabase(),"zeeciape/friendImpormation"+thisUserId+dataDashedId),{
                                firstName:userImpormation[i].firstName,
                                lastName:userImpormation[i].lastName,
                                email:userImpormation[i].email,
                                dateOfBirth:userImpormation[i].dateOfBirth,
                                country:userImpormation[i].country,
                                passwords:userImpormation[i].passwords,
                                countryCode:userImpormation[i].countryCode,
                                phoneNumber:userImpormation[i].phoneNumber,
                                backgroundImage:userImpormation[i].backgroundImage,
                                image:userImpormation[i].image,
                                gender:userImpormation[i].gender,
                                userPhoneDetail:userImpormation[i].userPhoneDetail,
                                userId:userImpormation[i].userId,
                                otp:userImpormation[i].otp,
                                followers:userImpormation[i].followers,
                                likes:userImpormation[i].likes,
                                following:userImpormation[i].following,
                                lastChat:'empty text',
                                lastDate:getMonth+'/'+getDate+'/'+getYear,
                                check:`friendImpormation${thisUserId}${dataDashedId}`
                                }).then(()=>{
                                    remove(ref(getDatabase(),"zeeciape/II_createAccountImpormation"+thisUserId+dataDashedId),{
                                        //empty.....
                                    })
                                })

                            // set to friend friendImpormation
                            set(ref(getDatabase(),"zeeciape/friendImpormation"+dataDashedId+thisUserId),{
                                firstName:thisUserFirstName,
                                lastName:thisUserLastName,
                                email:thisUserEmail,
                                dateOfBirth:thisUserDateOfBirth,
                                country:thisUserCountry,
                                passwords:thisUserPasswords,
                                countryCode:thisUserCountryCode,
                                phoneNumber:thisUserPhoneNumber,
                                backgroundImage:thisUserBackgroundImage,
                                image:thisUserImage,
                                gender:thisUserGender,
                                userPhoneDetail:thisUserPhoneDetail,
                                userId:thisUserId,
                                otp:thisUserOtp,
                                followers:thisfollowers,
                                likes:thislikes,
                                following:thisfollowing,
                                lastChat:'empty text',
                                lastDate:getMonth+'/'+getDate+'/'+getYear,
                                lastChatCount:0,
                                check:`friendImpormation${dataDashedId}${thisUserId}`
                                }).then(()=>{
                                    remove(ref(getDatabase(),"zeeciape/II_createAccountImpormation"+dataDashedId+thisUserId),{
                                        //empty.....
                                    })
                                })
                        }
                    }
                },1000)
                addChatPick_addCallFriend()
            })
            })

            addChatPick_addCallFriend()
            function addChatPick_addCallFriend(){
                let lastDate,lastChat;
                let firstName,lastName,image,userId,phoneNumber;
                //chatPlacePickContainer_III && chatPlacePickContainer_I
                let chatPlacePickContainer_III,chatPlacePickContainer_I;
                chatPlacePickContainer_III=`
                <button class="chat-place-pick-iii-to-add-friend-button" onclick="
                document.querySelector('.chat-pick-add-friend-iii-div').style.display='block';
                document.querySelector('.chat-pick-add-friend-i-div').style.display='block';
                "><img src="icons/comment-icon.png" alt="chat-place-pick-iii-to-add-friend-icon" class="chat-place-pick-iii-to-add-friend-icon"></button>
                `;
                chatPlacePickContainer_I=`
                <button class="pick-i-to-add-friend-button" onclick="
                document.querySelector('.chat-pick-add-friend-i-div').style.display='block';
                document.querySelector('.chat-pick-add-friend-iii-div').style.display='block';
                "><img src="icons/comment-icon.png" alt="pick-i-to-add-friend-icon" class="pick-i-to-add-friend-icon"></button>`;

                let callFriendsDiv=``;
                
                //statusFollowContainer && statusFollowContainerLeft variable...
                let statusFollowContainer,statusFollowContainerLeft;
                statusFollowContainer=``;
                statusFollowContainerLeft=``;
                for(let i=0;i<userImpormation.length;i++){

                    if(userImpormation[i].check===`friendImpormation${thisUserId}${userImpormation[i].userId}`){
                        firstName=userImpormation[i].firstName;
                        lastName=userImpormation[i].lastName;
                        image=userImpormation[i].image;
                        userId=userImpormation[i].userId;
                        phoneNumber=userImpormation[i].countryCode+userImpormation[i].phoneNumber;
                        //**last chat&&date**//
                        lastDate=userImpormation[i].lastDate;
                        lastChat=userImpormation[i].lastChat;

                        //set lastChat icon
                        let lastChat_icon;
                        
                        if(lastChat==='text'){
                            lastChat_icon='icons/lastchat_chat_icon.png'
                        }else if(lastChat==='images'){
                            lastChat_icon='icons/lastchat_image_icon.png'
                        }else if(lastChat==='video'){
                            lastChat_icon='icons/lastchat_video_icon.png'
                        }else if(lastChat==='link'){
                            lastChat_icon='icons/lastchat_link_icon.png'
                        }else if(lastChat==='document'){
                            lastChat_icon='icons/lastchat_document_icon.png'
                        }else if(lastChat==='audio'){
                            lastChat_icon='icons/lastchat_audio_icon.png'
                        }else if(lastChat==='voice'){
                            lastChat_icon='icons/lastchat_voice_icon.png'
                        }else if(lastChat==='missed_call'){
                            lastChat_icon='icons/missed_call_icon.png'
                        }else if(lastChat==='receive_call'){
                            lastChat_icon='icons/receive_call_icon.png'
                        }else if(lastChat==='send_call'){
                            lastChat_icon='icons/send_call_icon.png'
                        }else{
                            lastChat_icon='icons/lastchat_empty_icon.png'
                        }

                        chatPlacePickContainer_III+=`
                            <a href="#chat-place-container-section" 
                            class="chat-place-pick-iii-container-a-tag"
                            data-user-id="${userId}"
                            data-user-image="${image}"
                            data-user-full-name="${firstName} ${lastName}">
                                <div class="chat-place-pick-iii-container">
                                    <button class="chat-place-pick-iii-img-button">
                                        <img src="${image}"  alt="chat-place-pick-iii-user-img" class="chat-place-pick-iii-img">
                                    </button>
                                    <p class="chat-place-pick-iii-name">${firstName} ${lastName}</p>
                                    <p class="chat-place-pick-iii-last-chat-p">
                                        <img src="${lastChat_icon}" alt="chat-place-pick-iii-last-chat-img"
                                        class="chat-place-pick-iii-last-chat-img">
                                        <span class="chat-place-pick-iii-last-chat-span">${lastChat}</span> 
                                    </p>
                                    <span class="chat-place-pick-iii-time">${lastDate}</span>
                                </div> 
                            </a>`;
                        chatPlacePickContainer_I+=`
                            <a href="#chat-place-container-section" 
                            class="chat-place-pick-i-container-a-tag"
                            data-user-id="${userId}"
                            data-user-image="${image}"
                            data-user-full-name="${firstName} ${lastName}">
                                <div class="chat-pick-i-container">
                                    <button class="chat-pick-i-img-button">
                                        <img src="${image}"  alt="chat-pick-i-user-img" class="chat-pick-i-img">
                                    </button>
                                    <p class="chat-pick-i-name">${firstName} ${lastName}</p>
                                    <p class="chat-pick-i-last-chat-p">
                                        <img src="${lastChat_icon}" alt="chat-pick-i-last-chat-img"
                                        class="chat-pick-i-last-chat-img">
                                        <span class="chat-pick-i-last-chat-span">${lastChat}</span> 
                                    </p>
                                    <span class="chat-pick-i-time">${lastDate}</span>
                                </div>
                            </a>`;
                            
                        callFriendsDiv+=`
                            <div class="call-friends-container">
                                <button class="call-friends-img-button">
                                    <img src="${image}" alt="call-friends-user-img" class="call-friends-img">
                                </button>
                                <p class="call-friends-name">${firstName} ${lastName}</p>
                                <div class="call-videocall-button-div">
                                    <button class="call-friends-icon-p"
                                    data-user-id="${userId}">
                                        <img src="icons/color-call.png" alt="call-friends-icon" class="call-friends-videocall-icon">
                                    </button>
                                    <button class="friends-video-icon-p"
                                    data-user-id="${userId}">
                                        <img src="icons/color-videocall.png" alt="friends-video-icon" class="friends-videocall-icon">
                                    </button>
                                </div>
                                <span class="call-friends-contact">${phoneNumber}</span>
                            </div>`;

                        statusFollowContainer+=`
                            <div class="status-add-friend-container">
                                <button class="status-add-friend-img-button">
                                    <img src="${userImpormation[i].image}" alt="status-add-friend-img" class="status-add-friend-img">
                                </button>
                                <p class="status-add-friend-name">${userImpormation[i].firstName} ${userImpormation[i].lastName}</p>
                                <button class="status-follow-button status-follow-button-js-${i}" onclick="
                                //status-followi
                                const followButton=document.querySelector('.status-follow-button-js-${i}');
                                if(followButton.innerText==='Follow'){
                                    followButton.style.color='rgb(172, 170, 170)';
                                    followButton.innerHTML='following';
                                    followButton.style.backgroundColor='rgba(9, 9, 82, 0.404)';
                                }else{
                                    followButton.style.color='rgb(202, 202, 202)';
                                    followButton.innerHTML='follow';
                                    followButton.style.backgroundColor='rgba(9, 9, 82, 0.924)';
                                } 
                                
                                ">follow</button>
                            </div>`;
                        statusFollowContainerLeft+=`
                            <div class="left-status-add-friend-container">
                                <button class="left-status-add-friend-img-button">
                                    <img src="${userImpormation[i].image}" alt="left-status-add-friend-img" class="left-status-add-friend-img">
                                </button>
                                <p class="left-status-add-friend-name">${userImpormation[i].firstName} ${userImpormation[i].lastName}</p>
                                <button class="left-status-follow-button left-status-follow-button-js-${i}" onclick="
                                //status-followii
                                const leftStatusfollowButton=document.querySelector('.left-status-follow-button-js-${i}');
                                if(leftStatusfollowButton.innerText==='Follow'){
                                    leftStatusfollowButton.style.color='rgb(172, 170, 170)';
                                    leftStatusfollowButton.innerHTML='following';
                                    leftStatusfollowButton.style.backgroundColor='rgba(9, 9, 82, 0.404)';
                                }else{
                                    leftStatusfollowButton.style.color='rgb(202, 202, 202)';
                                    leftStatusfollowButton.innerHTML='follow';
                                    leftStatusfollowButton.style.backgroundColor='rgba(9, 9, 82, 0.924)';
                                }
                                
                                ">follow</button>
                            </div>`;

                    }
                }
                //chatPlacePickContainer_III && chatPlacePickContainer_I
                document.querySelector('.chat-place-pick-iii-container-div').innerHTML=chatPlacePickContainer_III;
                document.querySelector('.chat-pick-i-container-div').innerHTML=chatPlacePickContainer_I;
                //callFriendsDiv
                document.querySelector('.call-friends-div').innerHTML=callFriendsDiv;
                //statusfollowcontainer && statusFollowContainerLeft
                document.querySelector('.status-add-friend-div-ii').innerHTML=statusFollowContainer;
                document.querySelector('.left-status-add-friend-div-ii').innerHTML=statusFollowContainerLeft;
            }




            

            //chatPlacePickContainer_III_Atag
            const AllChatPlacePickContainer_III_Atag=document.querySelectorAll('.chat-place-pick-iii-container-a-tag');
            AllChatPlacePickContainer_III_Atag.forEach((eachChatPlacePick_Container)=>{
                eachChatPlacePick_Container.addEventListener('click',()=>{
                    //display this two none
                    document.querySelector('.chat-place-pick-iii-to-add-friend-button').style.display='none'
                    document.querySelector('.a-div').style.display='none';

                    //**dataDashed_user_detail**//
                    let dataDashed_user_id=eachChatPlacePick_Container.dataset.userId;
                    let dataDashed_user_image=eachChatPlacePick_Container.dataset.userImage;
                    let dataDashed_user_fullName=eachChatPlacePick_Container.dataset.userFullName;

                    //change chat header to user detail
                    document.querySelector('.chat-header-img').src=`${dataDashed_user_image}`;
                    document.querySelector('.chat-header-name').innerText=`${dataDashed_user_fullName}`;
                    
                    for(i=0;i<userImpormation.length;i++){
                        if(userImpormation[i].check===`friendImpormation${thisUserId}${dataDashed_user_id}`){

                            //chatPLace_header_userId && chatCount  
                            chatCount_dataDashed=Number(userImpormation[i].lastChatCount);
                            chatUserId_dataDashed=userImpormation[i].userId;
                        }
                    }
                    chatSeen_trueFalse()
                })
            })

            //chatPlacePickContainer_I_Atag
            const AllChatPlacePickContainer_I_Atag=document.querySelectorAll('.chat-place-pick-i-container-a-tag');
            AllChatPlacePickContainer_I_Atag.forEach((eachChatPlacePick_Container)=>{
                eachChatPlacePick_Container.addEventListener('click',()=>{
                    //display this two none
                    document.querySelector('.chat-place-pick-iii-to-add-friend-button').style.display='none'
                    document.querySelector('.a-div').style.display='none';
                    //**dataDashed_user_detail**//
                    let dataDashed_user_id=eachChatPlacePick_Container.dataset.userId;
                    let dataDashed_user_image=eachChatPlacePick_Container.dataset.userImage;
                    let dataDashed_user_fullName=eachChatPlacePick_Container.dataset.userFullName;

                    //change chat header to user detail
                    document.querySelector('.chat-header-img').src=`${dataDashed_user_image}`;
                    document.querySelector('.chat-header-name').innerText=`${dataDashed_user_fullName}`;
                    
                    for(i=0;i<userImpormation.length;i++){
                        if(userImpormation[i].check===`friendImpormation${thisUserId}${dataDashed_user_id}`){

                            //chatPLace_header_userId && chatCount  
                            chatCount_dataDashed=Number(userImpormation[i].lastChatCount);
                            chatUserId_dataDashed=userImpormation[i].userId;
                        }
                    }
                    chatSeen_trueFalse()
                })
            })

            
            chatSeen_trueFalse()
            function chatSeen_trueFalse(){
                //chatPLace_header_userId...  
                let dataDashed_user_id=chatUserId_dataDashed;
                //chatSeen_trueFalse
                for(i=0;i<userImpormation.length;i++){

                    if(userImpormation[i].check===`getChat${thisUserId}${dataDashed_user_id}`){

                        if(userImpormation[i].recieveUserId===thisUserId)continue;
                        //seen || notSeen
                        let seen_notSeen=userImpormation[i].recieveUserId !=thisUserId?'seen':'none';
                        //chatCount
                        let chatCount=userImpormation[i].chatCount;

                        
                        if(userImpormation[i].check_II==='text'){
                            //update chatSeen for myself text
                            update(ref(getDatabase(),"zeeciape/getChat"+`-${chatCount}-`+thisUserId+dataDashed_user_id),{
                                chatText:userImpormation[i].chatText,
                                amountLine:userImpormation[i].amountLine,
                                seenText:seen_notSeen,//update unseen to seen
                                check_II:userImpormation[i].check_II,
                                chatCount:userImpormation[i].chatCount,
                                chatTime:userImpormation[i].chatTime,
                                recieve_userImage:userImpormation[i].recieve_userImage,
                                recieve_FirstName:userImpormation[i].recieve_FirstName,
                                send_userImage:userImpormation[i].send_userImage,
                                send_FirstName:userImpormation[i].send_FirstName,
                                recieveUserId:userImpormation[i].recieveUserId,
                                sendUserId:userImpormation[i].sendUserId,
                                check:'getChat'+thisUserId+dataDashed_user_id
                            })

                            //update chatSeen for friend text
                            update(ref(getDatabase(),"zeeciape/getChat"+`-${chatCount}-`+dataDashed_user_id+thisUserId),{
                                chatText:userImpormation[i].chatText,
                                amountLine:userImpormation[i].amountLine,
                                seenText:seen_notSeen,//update unseen to seen
                                check_II:userImpormation[i].check_II,
                                chatCount:userImpormation[i].chatCount,
                                chatTime:userImpormation[i].chatTime,
                                recieve_userImage:userImpormation[i].recieve_userImage,
                                recieve_FirstName:userImpormation[i].recieve_FirstName,
                                send_userImage:userImpormation[i].send_userImage,
                                send_FirstName:userImpormation[i].send_FirstName,
                                recieveUserId:userImpormation[i].recieveUserId,
                                sendUserId:userImpormation[i].sendUserId,
                                check:'getChat'+dataDashed_user_id+thisUserId
                            })
                        }else if(userImpormation[i].check_II==='image'){
                            //update chatSeen for myself
                            update(ref(getDatabase(),"zeeciape/getChat"+`-${chatCount}-`+thisUserId+dataDashed_user_id),{
                                chatImage_i:userImpormation[i].chatImage_i,
                                chatImage_ii:userImpormation[i].chatImage_ii,
                                chatImage_iii:userImpormation[i].chatImage_iii,
                                chatImage_iv:userImpormation[i].chatImage_iv,
                                chatImage_v:userImpormation[i].chatImage_v,
                                chatImage_vi:userImpormation[i].chatImage_vi,
                                chatImage_vii:userImpormation[i].chatImage_vii,
                                chatImage_viii:userImpormation[i].chatImage_viii,
                                chatImage_ix:userImpormation[i].chatImage_ix,
                                chatImage_x:userImpormation[i].chatImage_x,
                                chatImage_xi:userImpormation[i].chatImage_xi,
                                chatImage_xii:userImpormation[i].chatImage_xii,
                                chatImage_xiii:userImpormation[i].chatImage_xiii,
                                chatImage_xiv:userImpormation[i].chatImage_xiv,
                                chatImage_xv:userImpormation[i].chatImage_xv,
                                chatImage_xvi:userImpormation[i].chatImage_xvi,
                                chatImage_xvii:userImpormation[i].chatImage_xvii,
                                chatImage_xviii:userImpormation[i].chatImage_xviii,
                                chatImage_xix:userImpormation[i].chatImage_xix,
                                chatImage_xx:userImpormation[i].chatImage_xx,
                                image_count:userImpormation[i].image_count,
                                seenText:seen_notSeen,//update unseen to seen
                                check_II:userImpormation[i].check_II,
                                chatCount:userImpormation[i].chatCount,
                                chatTime:userImpormation[i].chatTime,
                                recieve_userImage:userImpormation[i].recieve_userImage,
                                recieve_FirstName:userImpormation[i].recieve_FirstName,
                                send_userImage:userImpormation[i].send_userImage,
                                send_FirstName:userImpormation[i].send_FirstName,
                                recieveUserId:userImpormation[i].recieveUserId,
                                sendUserId:userImpormation[i].sendUserId,
                                check:'getChat'+thisUserId+dataDashed_user_id
                            })
                            
                            //update chatSeen friend
                            update(ref(getDatabase(),"zeeciape/getChat"+`-${chatCount}-`+dataDashed_user_id+thisUserId),{
                                chatImage_i:userImpormation[i].chatImage_i,
                                chatImage_ii:userImpormation[i].chatImage_ii,
                                chatImage_iii:userImpormation[i].chatImage_iii,
                                chatImage_iv:userImpormation[i].chatImage_iv,
                                chatImage_v:userImpormation[i].chatImage_v,
                                chatImage_vi:userImpormation[i].chatImage_vi,
                                chatImage_vii:userImpormation[i].chatImage_vii,
                                chatImage_viii:userImpormation[i].chatImage_viii,
                                chatImage_ix:userImpormation[i].chatImage_ix,
                                chatImage_x:userImpormation[i].chatImage_x,
                                chatImage_xi:userImpormation[i].chatImage_xi,
                                chatImage_xii:userImpormation[i].chatImage_xii,
                                chatImage_xiii:userImpormation[i].chatImage_xiii,
                                chatImage_xiv:userImpormation[i].chatImage_xiv,
                                chatImage_xv:userImpormation[i].chatImage_xv,
                                chatImage_xvi:userImpormation[i].chatImage_xvi,
                                chatImage_xvii:userImpormation[i].chatImage_xvii,
                                chatImage_xviii:userImpormation[i].chatImage_xviii,
                                chatImage_xix:userImpormation[i].chatImage_xix,
                                chatImage_xx:userImpormation[i].chatImage_xx,
                                image_count:userImpormation[i].image_count,
                                seenText:seen_notSeen,//update unseen to seen
                                check_II:userImpormation[i].check_II,
                                chatCount:userImpormation[i].chatCount,
                                chatTime:userImpormation[i].chatTime,
                                recieve_userImage:userImpormation[i].recieve_userImage,
                                recieve_FirstName:userImpormation[i].recieve_FirstName,
                                send_userImage:userImpormation[i].send_userImage,
                                send_FirstName:userImpormation[i].send_FirstName,
                                recieveUserId:userImpormation[i].recieveUserId,
                                sendUserId:userImpormation[i].sendUserId,
                                check:'getChat'+thisUserId+dataDashed_user_id
                            })
                        
                        }else if(userImpormation[i].check_II==='video'){

                            //update chatSeen for myself video
                            update(ref(getDatabase(),"zeeciape/getChat"+`-${chatCount}-`+thisUserId+dataDashed_user_id),{
                                chatVideo_i:userImpormation[i].chatVideo_i,
                                chatVideo_ii:userImpormation[i].chatVideo_ii,
                                chatVideo_iii:userImpormation[i].chatVideo_iii,
                                chatVideo_iv:userImpormation[i].chatVideo_iv,
                                chatVideo_v:userImpormation[i].chatVideo_v,
                                chatVideo_vi:userImpormation[i].chatVideo_vi,
                                chatVideo_vii:userImpormation[i].chatVideo_vii,
                                chatVideo_viii:userImpormation[i].chatVideo_viii,
                                chatVideo_ix:userImpormation[i].chatVideo_ix,
                                chatVideo_x:userImpormation[i].chatVideo_x,
                                chatVideo_xi:userImpormation[i].chatVideo_xi,
                                chatVideo_xii:userImpormation[i].chatVideo_xii,
                                chatVideo_xiii:userImpormation[i].chatVideo_xiii,
                                chatVideo_xiv:userImpormation[i].chatVideo_xiv,
                                chatVideo_xv:userImpormation[i].chatVideo_xv,
                                chatVideo_xvi:userImpormation[i].chatVideo_xvi,
                                chatVideo_xvii:userImpormation[i].chatVideo_xvii,
                                chatVideo_xviii:userImpormation[i].chatVideo_xviii,
                                chatVideo_xix:userImpormation[i].chatVideo_xix,
                                chatVideo_xx:userImpormation[i].chatVideo_xx,
                                image_count:userImpormation[i].video_count,
                                seenText:seen_notSeen,//update unseen to seen
                                check_II:userImpormation[i].check_II,
                                chatCount:userImpormation[i].chatCount,
                                chatTime:userImpormation[i].chatTime,
                                recieve_userImage:userImpormation[i].recieve_userImage,
                                recieve_FirstName:userImpormation[i].recieve_FirstName,
                                send_userImage:userImpormation[i].send_userImage,
                                send_FirstName:userImpormation[i].send_FirstName,
                                recieveUserId:userImpormation[i].recieveUserId,
                                sendUserId:userImpormation[i].sendUserId,
                                check:'getChat'+thisUserId+dataDashed_user_id
                            })
                            
                            //update chatSeen friend video
                            update(ref(getDatabase(),"zeeciape/getChat"+`-${chatCount}-`+dataDashed_user_id+thisUserId),{
                                chatVideo_i:userImpormation[i].chatVideo_i,
                                chatVideo_ii:userImpormation[i].chatVideo_ii,
                                chatVideo_iii:userImpormation[i].chatVideo_iii,
                                chatVideo_iv:userImpormation[i].chatVideo_iv,
                                chatVideo_v:userImpormation[i].chatVideo_v,
                                chatVideo_vi:userImpormation[i].chatVideo_vi,
                                chatVideo_vii:userImpormation[i].chatVideo_vii,
                                chatVideo_viii:userImpormation[i].chatVideo_viii,
                                chatVideo_ix:userImpormation[i].chatVideo_ix,
                                chatVideo_x:userImpormation[i].chatVideo_x,
                                chatVideo_xi:userImpormation[i].chatVideo_xi,
                                chatVideo_xii:userImpormation[i].chatVideo_xii,
                                chatVideo_xiii:userImpormation[i].chatVideo_xiii,
                                chatVideo_xiv:userImpormation[i].chatVideo_xiv,
                                chatVideo_xv:userImpormation[i].chatVideo_xv,
                                chatVideo_xvi:userImpormation[i].chatVideo_xvi,
                                chatVideo_xvii:userImpormation[i].chatVideo_xvii,
                                chatVideo_xviii:userImpormation[i].chatVideo_xviii,
                                chatVideo_xix:userImpormation[i].chatVideo_xix,
                                chatVideo_xx:userImpormation[i].chatVideo_xx,
                                image_count:userImpormation[i].video_count,
                                seenText:seen_notSeen,//update unseen to seen
                                check_II:userImpormation[i].check_II,
                                chatCount:userImpormation[i].chatCount,
                                chatTime:userImpormation[i].chatTime,
                                recieve_userImage:userImpormation[i].recieve_userImage,
                                recieve_FirstName:userImpormation[i].recieve_FirstName,
                                send_userImage:userImpormation[i].send_userImage,
                                send_FirstName:userImpormation[i].send_FirstName,
                                recieveUserId:userImpormation[i].recieveUserId,
                                sendUserId:userImpormation[i].sendUserId,
                                check:'getChat'+thisUserId+dataDashed_user_id
                            })
                            
                        }else if(userImpormation[i].check_II==='document'){
                            //update chatSeen for myself Pdf
                            update(ref(getDatabase(),"zeeciape/getChat"+`-${chatCount}-`+thisUserId+dataDashed_user_id),{
                                chatPdf:userImpormation[i].chatPdf,
                                seenText:seen_notSeen,//update unseen to seen
                                chect_II:userImpormation[i].chect_II,
                                chatCount:userImpormation[i].chatCount,
                                chatTime:userImpormation[i].chatTime,
                                recieve_userImage:userImpormation[i].recieve_userImage,
                                recieve_FirstName:userImpormation[i].recieve_FirstName,
                                send_userImage:userImpormation[i].send_userImage,
                                send_FirstName:userImpormation[i].send_FirstName,
                                recieveUserId:userImpormation[i].recieveUserId,
                                sendUserId:userImpormation[i].sendUserId,
                                check:'getChat'+thisUserId+dataDashed_user_id
                            })
                            
                            //update chatSeen friend Pdf
                            update(ref(getDatabase(),"zeeciape/getChat"+`-${chatCount}-`+dataDashed_user_id+thisUserId),{
                                chatPdf:userImpormation[i].chatPdf,
                                seenText:seen_notSeen,//update unseen to seen
                                chect_II:userImpormation[i].chect_II,
                                chatCount:userImpormation[i].chatCount,
                                chatTime:userImpormation[i].chatTime,
                                recieve_userImage:userImpormation[i].recieve_userImage,
                                recieve_FirstName:userImpormation[i].recieve_FirstName,
                                send_userImage:userImpormation[i].send_userImage,
                                send_FirstName:userImpormation[i].send_FirstName,
                                recieveUserId:userImpormation[i].recieveUserId,
                                sendUserId:userImpormation[i].sendUserId,
                                check:'getChat'+thisUserId+dataDashed_user_id
                            })
                        }else if(userImpormation[i].check_II==='audio'){
                            //update chatSeen for myself Audio
                            update(ref(getDatabase(),"zeeciape/getChat"+`-${chatCount}-`+thisUserId+dataDashed_user_id),{
                                chatAudio:userImpormation[i].chatAudio,
                                seenText:seen_notSeen,//update unseen to seen
                                chect_II:userImpormation[i].chect_II,
                                chatCount:userImpormation[i].chatCount,
                                chatTime:userImpormation[i].chatTime,
                                recieve_userImage:userImpormation[i].recieve_userImage,
                                recieve_FirstName:userImpormation[i].recieve_FirstName,
                                send_userImage:userImpormation[i].send_userImage,
                                send_FirstName:userImpormation[i].send_FirstName,
                                recieveUserId:userImpormation[i].recieveUserId,
                                sendUserId:userImpormation[i].sendUserId,
                                check:'getChat'+thisUserId+dataDashed_user_id
                            })
                            
                            //update chatSeen friend Audio
                            update(ref(getDatabase(),"zeeciape/getChat"+`-${chatCount}-`+dataDashed_user_id+thisUserId),{
                                chatAudio:userImpormation[i].chatAudio,
                                seenText:seen_notSeen,//update unseen to seen
                                chect_II:userImpormation[i].chect_II,
                                chatCount:userImpormation[i].chatCount,
                                chatTime:userImpormation[i].chatTime,
                                recieve_userImage:userImpormation[i].recieve_userImage,
                                recieve_FirstName:userImpormation[i].recieve_FirstName,
                                send_userImage:userImpormation[i].send_userImage,
                                send_FirstName:userImpormation[i].send_FirstName,
                                recieveUserId:userImpormation[i].recieveUserId,
                                sendUserId:userImpormation[i].sendUserId,
                                check:'getChat'+thisUserId+dataDashed_user_id
                            })
                        }
                        
                    }
                }
                Add_To_ChatContianer()
            }
            
            
            //chatPlaceSend_Button && textArea_Input
            const chatPlaceSend_Button=document.querySelector('.chat-place-send');
            chatPlaceSend_Button.addEventListener('click',()=>{
                if(chatPlaceTextArea.value===''){
                    //####voice record_button####//
                    if(chatPlaceSendIcon.src==='http://127.0.0.1:5500/zeeta-folder/icons/send-icon.png'){
                        chatPlaceSendIcon.src='http://127.0.0.1:5500/zeeta-folder/icons/voice-icon.png';
                    }
                    chatPlaceVoiceRecordContainer.style.display='block';

                    Add_To_ChatContianer()
                }else{
                    //####send text_button####//


                    //chatPLace_header_userId && thisUserId ...  
                    let recieveUserId=chatUserId_dataDashed;
                    let sendUserId=thisUserId;
                    //chatPlaceTextArea 
                    let textArea_Input=chatPlaceTextArea.value;
                    //how many line
                    let amountLine=textArea_Input.length<20?'single_line':'multiful_line';
                    //****set DATE****//
                    let getdate,getYear,getDate,getMonth;
                    getdate=new Date();
                    getYear=getdate.getUTCFullYear()-2000;
                    getDate=getdate.getDate();
                    getMonth=getdate.getUTCMonth()+1;

                    //****set Time****//
                    let date,hour,minutes,getHour,getMinutes,getPM_AM;
                    date=new Date();
                    hour=date.getDate();
                    getHour=hour>12?hour-12:hour;
                    minutes=date.getMinutes();
                    getMinutes=minutes<10?`0${minutes}`:minutes;
                    getPM_AM=hour>12?'pm':'am';



                    for(i=0;i<userImpormation.length;i++){
                        if(userImpormation[i].check===`friendImpormation${thisUserId}${recieveUserId}`){
                            
                            //friend image_FirstName && this image_FirstName
                            let recieve_userImage=userImpormation[i].image;
                            let recieve_FirstName=userImpormation[i].firstName;
                            let send_userImage=thisUserImage;
                            let send_FirstName=thisUserFirstName;


                            //get chatCount
                            let lastChatCount=Number(userImpormation[i].lastChatCount)+1;
                            
                            //chatCount with out error
                            if(Number(chatCount_dataDashed)!=lastChatCount){
                                if(chatCount_dataDashed>lastChatCount)continue;
                                chatCount_dataDashed=lastChatCount;
                                

                                //send to myself
                                set(ref(getDatabase(),"zeeciape/getChat"+`-${chatCount_dataDashed}-`+thisUserId+recieveUserId),{
                                    chatText:textArea_Input,
                                    amountLine:amountLine,
                                    seenText:'none',
                                    check_II:'text',
                                    chatCount:chatCount_dataDashed,
                                    chatTime:getHour+':'+getMinutes+getPM_AM,
                                    recieve_userImage:recieve_userImage,
                                    recieve_FirstName:recieve_FirstName,
                                    send_userImage:send_userImage,
                                    send_FirstName:send_FirstName,
                                    recieveUserId:recieveUserId,
                                    sendUserId:sendUserId,
                                    check:'getChat'+thisUserId+recieveUserId
                                })
                                
                                //send to friend
                                set(ref(getDatabase(),"zeeciape/getChat"+`-${chatCount_dataDashed}-`+recieveUserId+thisUserId),{
                                    chatText:textArea_Input,
                                    amountLine:amountLine,
                                    seenText:'none',
                                    check_II:'text',
                                    chatCount:chatCount_dataDashed,
                                    chatTime:getHour+':'+getMinutes+getPM_AM,
                                    recieve_userImage:recieve_userImage,
                                    recieve_FirstName:recieve_FirstName,
                                    send_userImage:send_userImage,
                                    send_FirstName:send_FirstName,
                                    recieveUserId:recieveUserId,
                                    sendUserId:sendUserId,
                                    check:'getChat'+recieveUserId+thisUserId
                                })
                                
                                
                                



                                //update myself lastChat/lastDate/lastChatCount...
                                update(ref(getDatabase(),"zeeciape/friendImpormation"+thisUserId+recieveUserId),{
                                    firstName:userImpormation[i].firstName,
                                    lastName:userImpormation[i].lastName,
                                    email:userImpormation[i].email,
                                    dateOfBirth:userImpormation[i].dateOfBirth,
                                    country:userImpormation[i].country,
                                    passwords:userImpormation[i].passwords,
                                    countryCode:userImpormation[i].countryCode,
                                    phoneNumber:userImpormation[i].phoneNumber,
                                    backgroundImage:userImpormation[i].backgroundImage,
                                    image:userImpormation[i].image,
                                    gender:userImpormation[i].gender,
                                    userPhoneDetail:userImpormation[i].userPhoneDetail,
                                    userId:userImpormation[i].userId,
                                    otp:userImpormation[i].otp,
                                    followers:userImpormation[i].followers,
                                    likes:userImpormation[i].likes,
                                    following:userImpormation[i].following,
                                    lastChat:'text',
                                    lastDate:getMonth+'/'+getDate+'/'+getYear,
                                    lastChatCount:chatCount_dataDashed,
                                    check:`friendImpormation${thisUserId}${userImpormation[i].userId}`
                                })
                                //update friend lastChat/lastDate/lastChatCount...
                                update(ref(getDatabase(),"zeeciape/friendImpormation"+recieveUserId+thisUserId),{
                                    firstName:thisUserFirstName,
                                    lastName:thisUserLastName,
                                    email:thisUserEmail,
                                    dateOfBirth:thisUserDateOfBirth,
                                    country:thisUserCountry,
                                    passwords:thisUserPasswords,
                                    countryCode:thisUserCountryCode,
                                    phoneNumber:thisUserPhoneNumber,
                                    backgroundImage:thisUserBackgroundImage,
                                    image:thisUserImage,
                                    gender:thisUserGender,
                                    userPhoneDetail:thisUserPhoneDetail,
                                    userId:thisUserId,
                                    otp:thisUserOtp,
                                    followers:thisfollowers,
                                    likes:thislikes,
                                    following:thisfollowing,
                                    lastChat:'text',
                                    lastDate:getMonth+'/'+getDate+'/'+getYear,
                                    lastChatCount:chatCount_dataDashed,
                                    check:`friendImpormation${recieveUserId}${thisUserId}`
                                })

                                Add_To_ChatContianer()
                            }
                        }
                    }
                }
                
                setTimeout(()=>{
                    //textArea height reduce
                    chatPlaceKeyboadDiv.style.height='38px';
                    chatPlaceSearchInputDiv.style.height='35px';
                    chatPlaceContainer.style.height='507px';
                    //make textArea empty..
                    chatPlaceTextArea.value='';
                },1000)
                
            })





            


            //image_file chatPlace...
            const chatImage_file=document.querySelector('.chat-place-gellary-file');
            chatImage_file.addEventListener('change',(e)=>{
                let files=e.target.files;
                let images=[];

                if(window.File&&window.FileReader&&window.Blob&&window.FileList){
                    
                    for(let i=0;i<files.length;i++){
                        
                        if(!files[i].type.match("image")) continue;
                        let picRender=new FileReader();
                        picRender.addEventListener('load',(event)=>{
                            const picFile=event.target;
                            images.push(picFile.result)
                            

                            if(files.length-1===i){
                                //chatPLace_header_userId && thisUserId ...  
                                let recieveUserId=chatUserId_dataDashed;
                                let sendUserId=thisUserId;
                                //how many image
                                let image_count=images.length;
                                //****set DATE****//
                                let getdate,getYear,getDate,getMonth;
                                getdate=new Date();
                                getYear=getdate.getUTCFullYear()-2000;
                                getDate=getdate.getDate();
                                getMonth=getdate.getUTCMonth()+1;
                                //****set Time****//
                                let date,hour,minutes,getHour,getMinutes,getPM_AM;
                                date=new Date();
                                hour=date.getDate();
                                getHour=hour>12?hour-12:hour;
                                minutes=date.getMinutes();
                                getMinutes=minutes<10?`0${minutes}`:minutes;
                                getPM_AM=hour>12?'pm':'am';

                                //friend image_FirstName && this image_FirstName
                                let recieve_userImage=userImpormation[i].image;
                                let recieve_FirstName=userImpormation[i].firstName;
                                let send_userImage=thisUserImage;
                                let send_FirstName=thisUserFirstName;
                                

                                let I,ii,iii,iv,v,vi,vii,viii,ix,x,xi,xii,xiii,xiv,xv,xvi,xvii,xviii,xix,xx;
                                //images
                                I=images[0]===undefined?'none':images[0];
                                ii=images[1]===undefined?'none':images[1];
                                iii=images[2]===undefined?'none':images[2];
                                iv=images[3]===undefined?'none':images[3];
                                v=images[4]===undefined?'none':images[4];
                                vi=images[5]===undefined?'none':images[5];
                                vii=images[6]===undefined?'none':images[6];
                                viii=images[7]===undefined?'none':images[7];
                                ix=images[8]===undefined?'none':images[8];
                                x=images[9]===undefined?'none':images[9];
                                xi=images[10]===undefined?'none':images[10];
                                xii=images[11]===undefined?'none':images[11];
                                xiii=images[12]===undefined?'none':images[12];
                                xiv=images[13]===undefined?'none':images[13];
                                xv=images[14]===undefined?'none':images[14];
                                xvi=images[15]===undefined?'none':images[15];
                                xvii=images[16]===undefined?'none':images[16];
                                xviii=images[17]===undefined?'none':images[17];
                                xix=images[18]===undefined?'none':images[18];
                                xx=images[19]===undefined?'none':images[19];

                                for(i=0;i<userImpormation.length;i++){
                                    if(userImpormation[i].check===`friendImpormation${thisUserId}${recieveUserId}`){
                                        //get chatCount
                                        let lastChatCount=Number(userImpormation[i].lastChatCount)+1;

                                        //chatCount with out error
                                        if(Number(chatCount_dataDashed)!=lastChatCount){
                                            if(chatCount_dataDashed>lastChatCount)continue;
                                            chatCount_dataDashed=lastChatCount;
                                            

                                            //send to myself
                                            set(ref(getDatabase(),"zeeciape/getChat"+`-${chatCount_dataDashed}-`+thisUserId+recieveUserId),{
                                                chatImage_i:I,
                                                chatImage_ii:ii,
                                                chatImage_iii:iii,
                                                chatImage_iv:iv,
                                                chatImage_v:v,
                                                chatImage_vi:vi,
                                                chatImage_vii:vii,
                                                chatImage_viii:viii,
                                                chatImage_ix:ix,
                                                chatImage_x:x,
                                                chatImage_xi:xi,
                                                chatImage_xii:xii,
                                                chatImage_xiii:xiii,
                                                chatImage_xiv:xiv,
                                                chatImage_xv:xv,
                                                chatImage_xvi:xvi,
                                                chatImage_xvii:xvii,
                                                chatImage_xviii:xviii,
                                                chatImage_xix:xix,
                                                chatImage_xx:xx,
                                                image_count:image_count,
                                                seenText:'none',
                                                check_II:'image',
                                                chatCount:chatCount_dataDashed,
                                                chatTime:getHour+':'+getMinutes+getPM_AM,
                                                recieve_userImage:recieve_userImage,
                                                recieve_FirstName:recieve_FirstName,
                                                send_userImage:send_userImage,
                                                send_FirstName:send_FirstName,
                                                recieveUserId:recieveUserId,
                                                sendUserId:sendUserId,
                                                check:'getChat'+thisUserId+recieveUserId
                                            })
                                            
                                            //send to friend
                                            set(ref(getDatabase(),"zeeciape/getChat"+`-${chatCount_dataDashed}-`+recieveUserId+thisUserId),{
                                                chatImage_i:I,
                                                chatImage_ii:ii,
                                                chatImage_iii:iii,
                                                chatImage_iv:iv,
                                                chatImage_v:v,
                                                chatImage_vi:vi,
                                                chatImage_vii:vii,
                                                chatImage_viii:viii,
                                                chatImage_ix:ix,
                                                chatImage_x:x,
                                                chatImage_xi:xi,
                                                chatImage_xii:xii,
                                                chatImage_xiii:xiii,
                                                chatImage_xiv:xiv,
                                                chatImage_xv:xv,
                                                chatImage_xvi:xvi,
                                                chatImage_xvii:xvii,
                                                chatImage_xviii:xviii,
                                                chatImage_xix:xix,
                                                chatImage_xx:xx,
                                                image_count:image_count,
                                                seenText:'none',
                                                check_II:'image',
                                                chatCount:chatCount_dataDashed,
                                                chatTime:getHour+':'+getMinutes+getPM_AM,
                                                recieve_userImage:recieve_userImage,
                                                recieve_FirstName:recieve_FirstName,
                                                send_userImage:send_userImage,
                                                send_FirstName:send_FirstName,
                                                recieveUserId:recieveUserId,
                                                sendUserId:sendUserId,
                                                check:'getChat'+recieveUserId+thisUserId
                                            })



                                            //update myself lastChat/lastDate/lastChatCount...
                                            update(ref(getDatabase(),"zeeciape/friendImpormation"+thisUserId+recieveUserId),{
                                                firstName:userImpormation[i].firstName,
                                                lastName:userImpormation[i].lastName,
                                                email:userImpormation[i].email,
                                                dateOfBirth:userImpormation[i].dateOfBirth,
                                                country:userImpormation[i].country,
                                                passwords:userImpormation[i].passwords,
                                                countryCode:userImpormation[i].countryCode,
                                                phoneNumber:userImpormation[i].phoneNumber,
                                                backgroundImage:userImpormation[i].backgroundImage,
                                                image:userImpormation[i].image,
                                                gender:userImpormation[i].gender,
                                                userPhoneDetail:userImpormation[i].userPhoneDetail,
                                                userId:userImpormation[i].userId,
                                                otp:userImpormation[i].otp,
                                                followers:userImpormation[i].followers,
                                                likes:userImpormation[i].likes,
                                                following:userImpormation[i].following,
                                                lastChat:'images',
                                                lastDate:getMonth+'/'+getDate+'/'+getYear,
                                                lastChatCount:chatCount_dataDashed,
                                                check:`friendImpormation${thisUserId}${userImpormation[i].userId}`
                                            })
                                            //update friend lastChat/lastDate/lastChatCount...
                                            update(ref(getDatabase(),"zeeciape/friendImpormation"+recieveUserId+thisUserId),{
                                                firstName:thisUserFirstName,
                                                lastName:thisUserLastName,
                                                email:thisUserEmail,
                                                dateOfBirth:thisUserDateOfBirth,
                                                country:thisUserCountry,
                                                passwords:thisUserPasswords,
                                                countryCode:thisUserCountryCode,
                                                phoneNumber:thisUserPhoneNumber,
                                                backgroundImage:thisUserBackgroundImage,
                                                image:thisUserImage,
                                                gender:thisUserGender,
                                                userPhoneDetail:thisUserPhoneDetail,
                                                userId:thisUserId,
                                                otp:thisUserOtp,
                                                followers:thisfollowers,
                                                likes:thislikes,
                                                following:thisfollowing,
                                                lastChat:'images',
                                                lastDate:getMonth+'/'+getDate+'/'+getYear,
                                                lastChatCount:chatCount_dataDashed,
                                                check:`friendImpormation${recieveUserId}${thisUserId}`
                                            })

                                        }
                                    }
                                }
                                
                                
                            }
                            
                        })
                        
                        picRender.readAsDataURL(files[i]);
                    }
                    
                }else{
                    alert("your browser don't support file multipul image")
                }
                Add_To_ChatContianer()
            })




            //chatvideo_file chatPlace...
            const chatVideo_file=document.querySelector('.chat-place-video-file');
            chatVideo_file.addEventListener('change',(e)=>{
                let files=e.target.files;
                let videos=[];

                if(window.File&&window.FileReader&&window.Blob&&window.FileList){
                    
                    for(let i=0;i<files.length;i++){
                        
                        if(!files[i].type.match("video")) continue;
                        let picRender=new FileReader();
                        picRender.addEventListener('load',(event)=>{
                            const picFile=event.target;
                            videos.push(picFile.result)
                            

                            if(files.length-1===i){

                                //chatPLace_header_userId && thisUserId ...  
                                let recieveUserId=chatUserId_dataDashed;
                                let sendUserId=thisUserId;
                                //how many video
                                let video_count=videos.length;
                                //****set DATE****//
                                let getdate,getYear,getDate,getMonth;
                                getdate=new Date();
                                getYear=getdate.getUTCFullYear()-2000;
                                getDate=getdate.getDate();
                                getMonth=getdate.getUTCMonth()+1;
                                //****set Time****//
                                let date,hour,minutes,getHour,getMinutes,getPM_AM;
                                date=new Date();
                                hour=date.getDate();
                                getHour=hour>12?hour-12:hour;
                                minutes=date.getMinutes();
                                getMinutes=minutes<10?`0${minutes}`:minutes;
                                getPM_AM=hour>12?'pm':'am';

                                //friend image_FirstName && this image_FirstName
                                let recieve_userImage=userImpormation[i].image;
                                let recieve_FirstName=userImpormation[i].firstName;
                                let send_userImage=thisUserImage;
                                let send_FirstName=thisUserFirstName;

                                

                                let I,ii,iii,iv,v,vi,vii,viii,ix,x,xi,xii,xiii,xiv,xv,xvi,xvii,xviii,xix,xx;
                                //videos
                                I=videos[0]===undefined?'none':videos[0];
                                ii=videos[1]===undefined?'none':videos[1];
                                iii=videos[2]===undefined?'none':videos[2];
                                iv=videos[3]===undefined?'none':videos[3];
                                v=videos[4]===undefined?'none':videos[4];
                                vi=videos[5]===undefined?'none':videos[5];
                                vii=videos[6]===undefined?'none':videos[6];
                                viii=videos[7]===undefined?'none':videos[7];
                                ix=videos[8]===undefined?'none':videos[8];
                                x=videos[9]===undefined?'none':videos[9];
                                xi=videos[10]===undefined?'none':videos[10];
                                xii=videos[11]===undefined?'none':videos[11];
                                xiii=videos[12]===undefined?'none':videos[12];
                                xiv=videos[13]===undefined?'none':videos[13];
                                xv=videos[14]===undefined?'none':videos[14];
                                xvi=videos[15]===undefined?'none':videos[15];
                                xvii=videos[16]===undefined?'none':videos[16];
                                xviii=videos[17]===undefined?'none':videos[17];
                                xix=videos[18]===undefined?'none':videos[18];
                                xx=videos[19]===undefined?'none':videos[19];


                                for(i=0;i<userImpormation.length;i++){
                                    if(userImpormation[i].check===`friendImpormation${thisUserId}${recieveUserId}`){
                                        
                                        //get chatCount
                                        let lastChatCount=Number(userImpormation[i].lastChatCount)+1;

                                        //chatCount with out error
                                        if(Number(chatCount_dataDashed)!=lastChatCount){
                                            if(chatCount_dataDashed>lastChatCount)continue;
                                            chatCount_dataDashed=lastChatCount;
                                            

                                            //send to myself
                                            set(ref(getDatabase(),"zeeciape/getChat"+`-${chatCount_dataDashed}-`+thisUserId+recieveUserId),{
                                                chatVideo_i:I,
                                                chatVideo_ii:ii,
                                                chatVideo_iii:iii,
                                                chatVideo_iv:iv,
                                                chatVideo_v:v,
                                                chatVideo_vi:vi,
                                                chatVideo_vii:vii,
                                                chatVideo_viii:viii,
                                                chatVideo_ix:ix,
                                                chatVideo_x:x,
                                                chatVideo_xi:xi,
                                                chatVideo_xii:xii,
                                                chatVideo_xiii:xiii,
                                                chatVideo_xiv:xiv,
                                                chatVideo_xv:xv,
                                                chatVideo_xvi:xvi,
                                                chatVideo_xvii:xvii,
                                                chatVideo_xviii:xviii,
                                                chatVideo_xix:xix,
                                                chatVideo_xx:xx,
                                                video_count:video_count,
                                                seenText:'none',
                                                check_II:'video',
                                                chatCount:chatCount_dataDashed,
                                                chatTime:getHour+':'+getMinutes+getPM_AM,
                                                recieve_userImage:recieve_userImage,
                                                recieve_FirstName:recieve_FirstName,
                                                send_userImage:send_userImage,
                                                send_FirstName:send_FirstName,
                                                recieveUserId:recieveUserId,
                                                sendUserId:sendUserId,
                                                check:'getChat'+thisUserId+recieveUserId
                                            })
                                            
                                            //send to friend
                                            set(ref(getDatabase(),"zeeciape/getChat"+`-${chatCount_dataDashed}-`+recieveUserId+thisUserId),{
                                                chatVideo_i:I,
                                                chatVideo_ii:ii,
                                                chatVideo_iii:iii,
                                                chatVideo_iv:iv,
                                                chatVideo_v:v,
                                                chatVideo_vi:vi,
                                                chatVideo_vii:vii,
                                                chatVideo_viii:viii,
                                                chatVideo_ix:ix,
                                                chatVideo_x:x,
                                                chatVideo_xi:xi,
                                                chatVideo_xii:xii,
                                                chatVideo_xiii:xiii,
                                                chatVideo_xiv:xiv,
                                                chatVideo_xv:xv,
                                                chatVideo_xvi:xvi,
                                                chatVideo_xvii:xvii,
                                                chatVideo_xviii:xviii,
                                                chatVideo_xix:xix,
                                                chatVideo_xx:xx,
                                                video_count:video_count,
                                                seenText:'none',
                                                check_II:'video',
                                                chatCount:chatCount_dataDashed,
                                                chatTime:getHour+':'+getMinutes+getPM_AM,
                                                recieve_userImage:recieve_userImage,
                                                recieve_FirstName:recieve_FirstName,
                                                send_userImage:send_userImage,
                                                send_FirstName:send_FirstName,
                                                recieveUserId:recieveUserId,
                                                sendUserId:sendUserId,
                                                check:'getChat'+recieveUserId+thisUserId
                                            })



                                            //update myself lastChat/lastDate/lastChatCount...
                                            update(ref(getDatabase(),"zeeciape/friendImpormation"+thisUserId+recieveUserId),{
                                                firstName:userImpormation[i].firstName,
                                                lastName:userImpormation[i].lastName,
                                                email:userImpormation[i].email,
                                                dateOfBirth:userImpormation[i].dateOfBirth,
                                                country:userImpormation[i].country,
                                                passwords:userImpormation[i].passwords,
                                                countryCode:userImpormation[i].countryCode,
                                                phoneNumber:userImpormation[i].phoneNumber,
                                                backgroundImage:userImpormation[i].backgroundImage,
                                                image:userImpormation[i].image,
                                                gender:userImpormation[i].gender,
                                                userPhoneDetail:userImpormation[i].userPhoneDetail,
                                                userId:userImpormation[i].userId,
                                                otp:userImpormation[i].otp,
                                                followers:userImpormation[i].followers,
                                                likes:userImpormation[i].likes,
                                                following:userImpormation[i].following,
                                                lastChat:'video',
                                                lastDate:getMonth+'/'+getDate+'/'+getYear,
                                                lastChatCount:chatCount_dataDashed,
                                                check:`friendImpormation${thisUserId}${userImpormation[i].userId}`
                                            })
                                            //update friend lastChat/lastDate/lastChatCount...
                                            update(ref(getDatabase(),"zeeciape/friendImpormation"+recieveUserId+thisUserId),{
                                                firstName:thisUserFirstName,
                                                lastName:thisUserLastName,
                                                email:thisUserEmail,
                                                dateOfBirth:thisUserDateOfBirth,
                                                country:thisUserCountry,
                                                passwords:thisUserPasswords,
                                                countryCode:thisUserCountryCode,
                                                phoneNumber:thisUserPhoneNumber,
                                                backgroundImage:thisUserBackgroundImage,
                                                image:thisUserImage,
                                                gender:thisUserGender,
                                                userPhoneDetail:thisUserPhoneDetail,
                                                userId:thisUserId,
                                                otp:thisUserOtp,
                                                followers:thisfollowers,
                                                likes:thislikes,
                                                following:thisfollowing,
                                                lastChat:'video',
                                                lastDate:getMonth+'/'+getDate+'/'+getYear,
                                                lastChatCount:chatCount_dataDashed,
                                                check:`friendImpormation${recieveUserId}${thisUserId}`
                                            })

                                        }
                                    }
                                }
                            
                            }
                            
                        })
                        
                        picRender.readAsDataURL(files[i]);
                    }
                    
                }else{
                    alert("your browser don't support file multipul image")
                }
                Add_To_ChatContianer()
            })



            
            //chatDocument_file chatPlace...
            const chatDocument_file=document.querySelector('.chat-place-document-file');
            chatDocument_file.addEventListener('change',(e)=>{
                let files=e.target.files;

                if(window.File&&window.FileReader&&window.Blob&&window.FileList){
                    
                    for(let i=0;i<files.length;i++){
                        if(!files[i].type.match("application")) continue;
                        let picRender=new FileReader();
                        picRender.addEventListener('load',(event)=>{
                            const picFile=event.target;
                            

                            //****document****//
                            //chatPLace_header_userId && thisUserId ...  
                            let recieveUserId=chatUserId_dataDashed;
                            let sendUserId=thisUserId;
                            //****set DATE****//
                            let getdate,getYear,getDate,getMonth;
                            getdate=new Date();
                            getYear=getdate.getUTCFullYear()-2000;
                            getDate=getdate.getDate();
                            getMonth=getdate.getUTCMonth()+1;
                            //****set Time****//
                            let date,hour,minutes,getHour,getMinutes,getPM_AM;
                            date=new Date();
                            hour=date.getDate();
                            getHour=hour>12?hour-12:hour;
                            minutes=date.getMinutes();
                            getMinutes=minutes<10?`0${minutes}`:minutes;
                            getPM_AM=hour>12?'pm':'am';

                            //friend image_FirstName && this image_FirstName
                            let recieve_userImage=userImpormation[i].image;
                            let recieve_FirstName=userImpormation[i].firstName;
                            let send_userImage=thisUserImage;
                            let send_FirstName=thisUserFirstName;

                            //document
                            let document=picFile.result;
                            
                            for(i=0;i<userImpormation.length;i++){
                                if(userImpormation[i].check===`friendImpormation${thisUserId}${recieveUserId}`){
                                    
                                    //get chatCount
                                    let lastChatCount=Number(userImpormation[i].lastChatCount)+1;

                                    //chatCount with out error
                                    if(Number(chatCount_dataDashed)!=lastChatCount){
                                        if(chatCount_dataDashed>lastChatCount)continue;
                                        chatCount_dataDashed=lastChatCount;
                                        console.log(chatCount_dataDashed)

                                        //send to myself
                                        set(ref(getDatabase(),"zeeciape/getChat"+`-${chatCount_dataDashed}-`+thisUserId+recieveUserId),{
                                            chatDocument:document,
                                            seenText:'none',
                                            check_II:'document',
                                            chatCount:chatCount_dataDashed,
                                            chatTime:getHour+':'+getMinutes+getPM_AM,
                                            recieve_userImage:recieve_userImage,
                                            recieve_FirstName:recieve_FirstName,
                                            send_userImage:send_userImage,
                                            send_FirstName:send_FirstName,
                                            recieveUserId:recieveUserId,
                                            sendUserId:sendUserId,
                                            check:'getChat'+thisUserId+recieveUserId
                                        })
                                        
                                        //send to friend
                                        set(ref(getDatabase(),"zeeciape/getChat"+`-${chatCount_dataDashed}-`+recieveUserId+thisUserId),{
                                            chatDocument:document,
                                            seenText:'none',
                                            check_II:'document',
                                            chatCount:chatCount_dataDashed,
                                            chatTime:getHour+':'+getMinutes+getPM_AM,
                                            recieve_userImage:recieve_userImage,
                                            recieve_FirstName:recieve_FirstName,
                                            send_userImage:send_userImage,
                                            send_FirstName:send_FirstName,
                                            recieveUserId:recieveUserId,
                                            sendUserId:sendUserId,
                                            check:'getChat'+recieveUserId+thisUserId
                                        })



                                        //update myself lastChat/lastDate/lastChatCount...
                                        update(ref(getDatabase(),"zeeciape/friendImpormation"+thisUserId+recieveUserId),{
                                            firstName:userImpormation[i].firstName,
                                            lastName:userImpormation[i].lastName,
                                            email:userImpormation[i].email,
                                            dateOfBirth:userImpormation[i].dateOfBirth,
                                            country:userImpormation[i].country,
                                            passwords:userImpormation[i].passwords,
                                            countryCode:userImpormation[i].countryCode,
                                            phoneNumber:userImpormation[i].phoneNumber,
                                            backgroundImage:userImpormation[i].backgroundImage,
                                            image:userImpormation[i].image,
                                            gender:userImpormation[i].gender,
                                            userPhoneDetail:userImpormation[i].userPhoneDetail,
                                            userId:userImpormation[i].userId,
                                            otp:userImpormation[i].otp,
                                            followers:userImpormation[i].followers,
                                            likes:userImpormation[i].likes,
                                            following:userImpormation[i].following,
                                            lastChat:'document',
                                            lastDate:getMonth+'/'+getDate+'/'+getYear,
                                            lastChatCount:chatCount_dataDashed,
                                            check:`friendImpormation${thisUserId}${userImpormation[i].userId}`
                                        })
                                        //update friend lastChat/lastDate/lastChatCount...
                                        update(ref(getDatabase(),"zeeciape/friendImpormation"+recieveUserId+thisUserId),{
                                            firstName:thisUserFirstName,
                                            lastName:thisUserLastName,
                                            email:thisUserEmail,
                                            dateOfBirth:thisUserDateOfBirth,
                                            country:thisUserCountry,
                                            passwords:thisUserPasswords,
                                            countryCode:thisUserCountryCode,
                                            phoneNumber:thisUserPhoneNumber,
                                            backgroundImage:thisUserBackgroundImage,
                                            image:thisUserImage,
                                            gender:thisUserGender,
                                            userPhoneDetail:thisUserPhoneDetail,
                                            userId:thisUserId,
                                            otp:thisUserOtp,
                                            followers:thisfollowers,
                                            likes:thislikes,
                                            following:thisfollowing,
                                            lastChat:'document',
                                            lastDate:getMonth+'/'+getDate+'/'+getYear,
                                            lastChatCount:chatCount_dataDashed,
                                            check:`friendImpormation${recieveUserId}${thisUserId}`
                                        })

                                    }
                                }
                            }

                        })

                        picRender.readAsDataURL(files[i]);
                    }
                }
                Add_To_ChatContianer()
            })





            //chatAudio_file chatPlace...
            const chattAudio_file=document.querySelector('.chat-place-audio-file');
            chattAudio_file.addEventListener('change',(e)=>{
                let files=e.target.files;

                if(window.File&&window.FileReader&&window.Blob&&window.FileList){
                    
                    for(let i=0;i<files.length;i++){
                        if(!files[i].type.match("audio")) continue;
                        let picRender=new FileReader();
                        picRender.addEventListener('load',(event)=>{
                            const picFile=event.target;
                            

                            //****Audio****//
                            //chatPLace_header_userId && thisUserId ...  
                            let recieveUserId=chatUserId_dataDashed;
                            let sendUserId=thisUserId;
                            //****set DATE****//
                            let getdate,getYear,getDate,getMonth;
                            getdate=new Date();
                            getYear=getdate.getUTCFullYear()-2000;
                            getDate=getdate.getDate();
                            getMonth=getdate.getUTCMonth()+1;
                            //****set Time****//
                            let date,hour,minutes,getHour,getMinutes,getPM_AM;
                            date=new Date();
                            hour=date.getDate();
                            getHour=hour>12?hour-12:hour;
                            minutes=date.getMinutes();
                            getMinutes=minutes<10?`0${minutes}`:minutes;
                            getPM_AM=hour>12?'pm':'am';

                            //friend image_FirstName && this image_FirstName
                            let recieve_userImage=userImpormation[i].image;
                            let recieve_FirstName=userImpormation[i].firstName;
                            let send_userImage=thisUserImage;
                            let send_FirstName=thisUserFirstName;

                            //audio
                            let audio= picFile.result;
                            
                            for(i=0;i<userImpormation.length;i++){
                                if(userImpormation[i].check===`friendImpormation${thisUserId}${recieveUserId}`){
                                    
                                    //get chatCount
                                    let lastChatCount=Number(userImpormation[i].lastChatCount)+1;

                                    //chatCount with out error
                                    if(Number(chatCount_dataDashed)!=lastChatCount){
                                        if(chatCount_dataDashed>lastChatCount)continue;
                                        chatCount_dataDashed=lastChatCount;
                                        

                                        //send to myself
                                        set(ref(getDatabase(),"zeeciape/getChat"+`-${chatCount_dataDashed}-`+thisUserId+recieveUserId),{
                                            chatAudio:audio,
                                            seenText:'none',
                                            check_II:'audio',
                                            chatCount:chatCount_dataDashed,
                                            chatTime:getHour+':'+getMinutes+getPM_AM,
                                            recieve_userImage:recieve_userImage,
                                            recieve_FirstName:recieve_FirstName,
                                            send_userImage:send_userImage,
                                            send_FirstName:send_FirstName,
                                            recieveUserId:recieveUserId,
                                            sendUserId:sendUserId,
                                            check:'getChat'+thisUserId+recieveUserId
                                        })
                                        
                                        //send to friend
                                        set(ref(getDatabase(),"zeeciape/getChat"+`-${chatCount_dataDashed}-`+recieveUserId+thisUserId),{
                                            chatAudio:audio,
                                            seenText:'none',
                                            check_II:'audio',
                                            chatCount:chatCount_dataDashed,
                                            chatTime:getHour+':'+getMinutes+getPM_AM,
                                            recieve_userImage:recieve_userImage,
                                            recieve_FirstName:recieve_FirstName,
                                            send_userImage:send_userImage,
                                            send_FirstName:send_FirstName,
                                            recieveUserId:recieveUserId,
                                            sendUserId:sendUserId,
                                            check:'getChat'+recieveUserId+thisUserId
                                        })



                                        //update myself lastChat/lastDate/lastChatCount...
                                        update(ref(getDatabase(),"zeeciape/friendImpormation"+thisUserId+recieveUserId),{
                                            firstName:userImpormation[i].firstName,
                                            lastName:userImpormation[i].lastName,
                                            email:userImpormation[i].email,
                                            dateOfBirth:userImpormation[i].dateOfBirth,
                                            country:userImpormation[i].country,
                                            passwords:userImpormation[i].passwords,
                                            countryCode:userImpormation[i].countryCode,
                                            phoneNumber:userImpormation[i].phoneNumber,
                                            backgroundImage:userImpormation[i].backgroundImage,
                                            image:userImpormation[i].image,
                                            gender:userImpormation[i].gender,
                                            userPhoneDetail:userImpormation[i].userPhoneDetail,
                                            userId:userImpormation[i].userId,
                                            otp:userImpormation[i].otp,
                                            followers:userImpormation[i].followers,
                                            likes:userImpormation[i].likes,
                                            following:userImpormation[i].following,
                                            lastChat:'audio',
                                            lastDate:getMonth+'/'+getDate+'/'+getYear,
                                            lastChatCount:chatCount_dataDashed,
                                            check:`friendImpormation${thisUserId}${userImpormation[i].userId}`
                                        })
                                        //update friend lastChat/lastDate/lastChatCount...
                                        update(ref(getDatabase(),"zeeciape/friendImpormation"+recieveUserId+thisUserId),{
                                            firstName:thisUserFirstName,
                                            lastName:thisUserLastName,
                                            email:thisUserEmail,
                                            dateOfBirth:thisUserDateOfBirth,
                                            country:thisUserCountry,
                                            passwords:thisUserPasswords,
                                            countryCode:thisUserCountryCode,
                                            phoneNumber:thisUserPhoneNumber,
                                            backgroundImage:thisUserBackgroundImage,
                                            image:thisUserImage,
                                            gender:thisUserGender,
                                            userPhoneDetail:thisUserPhoneDetail,
                                            userId:thisUserId,
                                            otp:thisUserOtp,
                                            followers:thisfollowers,
                                            likes:thislikes,
                                            following:thisfollowing,
                                            lastChat:'audio',
                                            lastDate:getMonth+'/'+getDate+'/'+getYear,
                                            lastChatCount:chatCount_dataDashed,
                                            check:`friendImpormation${recieveUserId}${thisUserId}`
                                        })

                                    }
                                }
                            }

                        })

                        picRender.readAsDataURL(files[i]);
                    }
                }
                Add_To_ChatContianer()
            })





















            
            //chatHeader_Videocall_Button
            const AllChatHeader_Videocall_Button=document.querySelectorAll('.chat-header-videocall-button');
            AllChatHeader_Videocall_Button.forEach((eachChatHeader_Videocall_Button)=>{
                eachChatHeader_Videocall_Button.addEventListener('click',()=>{
                    
                    //**set videocall detail for each friend**//
                    let videocall_Image,videocall_FirstName,videocall_LastName;

                    //chatPLace_header_userId...  
                    let userId=chatUserId_dataDashed;

                    // get user detial by ID
                    for(i=0;i<userImpormation.length;i++){
                        if(userImpormation[i].check===`friendImpormation${thisUserId}${userId}`){
                            videocall_Image=userImpormation[i].image;
                            videocall_FirstName=userImpormation[i].firstName;
                            videocall_LastName=userImpormation[i].lastName;


                            //**change videocall_container detial**//
                            document.querySelector('.videocall-show-div').style.display='block';
                            document.querySelector('.videocall-show-img').src=`${videocall_Image}`;
                            document.querySelector('.videocall-show-name').innerText=`${videocall_FirstName} ${videocall_LastName}`;
                            
                        }
                    }

                })
            })

            //chatHeader_Call_Button
            const AllChatHeader_Call_Button=document.querySelectorAll('.chat-header-call-button');
            AllChatHeader_Call_Button.forEach((eachChatHeader_Call_Button)=>{
                eachChatHeader_Call_Button.addEventListener('click',()=>{
                    
                    //**set call detail for each friend**//
                    let call_Image,call_LastName,call_FirstName;

                    //chatPLace_header_userId...  
                    let userId=chatUserId_dataDashed;


                    // get user detail by ID
                    for(i=0;i<userImpormation.length;i++){
                        if(userImpormation[i].check===`friendImpormation${thisUserId}${userId}`){
                            call_Image=userImpormation[i].image;
                            call_FirstName=userImpormation[i].firstName;
                            call_LastName=userImpormation[i].lastName;


                            //**change call_container detial**//
                            document.querySelector('.call-show-div').style.display='block';
                            document.querySelector('.call-show-img').src=`${call_Image}`;
                            document.querySelector('.call-show-name').innerText=`${call_FirstName} ${call_LastName}`;
                        }
                    }

                })
            })



            //CallPage_Videocall_Button
            const AllCallPage_Videocall_Button=document.querySelectorAll('.friends-video-icon-p');
            AllCallPage_Videocall_Button.forEach((eachCallPage_Videocall_Button)=>{
                eachCallPage_Videocall_Button.addEventListener('click',()=>{
                    
                    //dataDashed get userId
                    let userId=eachCallPage_Videocall_Button.dataset.userId;

                    //**set videocall_detail for each friend**//
                    let videocall_Image,videocall_FirstName,videocall_LastName;
                    for(i=0;i<userImpormation.length;i++){
                        if(userImpormation[i].check===`friendImpormation${thisUserId}${userId}`){
                            videocall_Image=userImpormation[i].image;
                            videocall_FirstName=userImpormation[i].firstName;
                            videocall_LastName=userImpormation[i].lastName;


                            //**change videocall_container detial**//
                            document.querySelector('.videocall-show-div').style.display='block';
                            document.querySelector('.videocall-show-img').src=`${videocall_Image}`;
                            document.querySelector('.videocall-show-name').innerText=`${videocall_FirstName} ${videocall_LastName}`;
                        }
                    }       
                                
                })
            })

            //CallPage_Call_Button
            const AllCallPage_Call_Button=document.querySelectorAll('.call-friends-icon-p');
            AllCallPage_Call_Button.forEach((eachCallPage_Call_Button)=>{
                eachCallPage_Call_Button.addEventListener('click',()=>{
                    
                    //dataDashed get userId
                    let userId=eachCallPage_Call_Button.dataset.userId;

                    //**set call_detail for each friend**//
                    let call_Image,call_FirstName,call_LastName;
                    for(i=0;i<userImpormation.length;i++){
                        if(userImpormation[i].check===`friendImpormation${thisUserId}${userId}`){
                            call_Image=userImpormation[i].image;
                            call_FirstName=userImpormation[i].firstName;
                            call_LastName=userImpormation[i].lastName;


                            //**change call_container detial**//
                            document.querySelector('.call-show-div').style.display='block';
                            document.querySelector('.call-show-img').src=`${call_Image}`;
                            document.querySelector('.call-show-name').innerText=`${call_FirstName} ${call_LastName}`;
                        }         
                    }      
                })
            })

            






            Add_To_ChatContianer()
            function Add_To_ChatContianer(){
                let Add_chatPlaceDiv=``;
                //chatPLace_header_userId...  
                let userId=chatUserId_dataDashed;
                for(i=0;i<userImpormation.length;i++){
                    if(userImpormation[i].check===`getChat${thisUserId}${userId}`){
                        //set seen icon
                        let seen_unseen=userImpormation[i].seenText==='seen'?'icons/seen-icon.png':'icons/unseen-icon.png';
                        
                        if(userImpormation[i].sendUserId===thisUserId){
                            //####Right user#####//
                            if(userImpormation[i].check_II==='text'){
                                if(userImpormation[i].amountLine==='single_line'){
                                    Add_chatPlaceDiv+=`
                                    <!--chat-single-line-right-->
                                    <div class="chat-single-line-right-div">
                                        ${userImpormation[i].chatText}
                                        <span class="chat-single-line-right-div-time">
                                        ${userImpormation[i].chatTime} <img src="
                                        ${seen_unseen}" alt="chat-single-line-right-unseen-icon" class="chat-single-line-right-unseen-icon"></span>
                                    </div>
                                    `;
                                }else{
                                    Add_chatPlaceDiv+=`
                                    <!--chat-mullity-line-right-->
                                    <div class="chat-mullity-line-right-div">
                                        ${userImpormation[i].chatText}
                                        <span class="chat-mullity-line-right-div-time">
                                        ${userImpormation[i].chatTime} <img src="
                                        ${seen_unseen}" alt="chat-mullity-line-right-unseen-icon" class="chat-mullity-line-right-unseen-icon"></span>
                                    </div>
                                    `;
                                }

                            }else if(userImpormation[i].check_II==='image'){
                                if(userImpormation[i].image_count===1){
                                    Add_chatPlaceDiv+=`
                                    <!--chat-image-i-line-right-->
                                    <div class="chat-image-i-right-div" 
                                    data-image-i="${userImpormation[i].chatImage_i}">
                                        <div class="chat-image-i-right-container-div">
                                            <a href="#section-1" onclick="
                                            document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <p class="chat-image-i-right-container-p">
                                                    <img src="${userImpormation[i].chatImage_i}" alt="chat-image-i-right-container-image" class="chat-image-i-right-container-image">
                                                </p>
                                            </a>
                                        </div>
                                        <span class="chat-image-i-right-div-time">
                                        ${userImpormation[i].chatTime} <img src="
                                        ${seen_unseen}" alt="chat-image-i-right-unseen-icon" class="chat-image-i-right-unseen-icon"></span>
                                    </div>
                                    `;
                                }else if(userImpormation[i].image_count===2){
                                    Add_chatPlaceDiv+=`
                                    <!--chat-image-ii-line-right-->
                                    <div class="chat-image-ii-right-div">
                                        <div class="chat-image-ii-right-container-div">
                                            <a href="#section-1" onclick="
                                            document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <p class="chat-image-ii-right-container-p">
                                                    <img src="${userImpormation[i].chatImage_i}" alt="chat-image-ii-right-container-image-i" class="chat-image-ii-right-container-image-i">
                                                </p>
                                            </a>
                                            <a href="#section-2" onclick="
                                            document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <p class="chat-image-ii-right-container-p">
                                                    <img src="${userImpormation[i].chatImage_ii}" alt="chat-image-ii-right-container-image-ii" class="chat-image-ii-right-container-image-ii">
                                                </p>
                                            </a>
                                            
                                        </div>
                                        <span class="chat-image-ii-right-div-time">
                                        ${userImpormation[i].chatTime} <img src="
                                        ${seen_unseen}" alt="chat-image-ii-right-unseen-icon" class="chat-image-ii-right-unseen-icon"></span>
                                    </div>
                                    `;
                                }else if(userImpormation[i].image_count===3){
                                    Add_chatPlaceDiv+=`
                                    <!--chat-image-iii-line-right-->
                                    <div class="chat-image-iii-right-div">  
                                        <div class="chat-image-iii-right-container-div">
                                            <a href="#section-1" onclick="
                                            document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <p class="chat-image-iii-right-container-p">
                                                    <img src="${userImpormation[i].chatImage_i}" alt="chat-image-iii-right-container-image-i" class="chat-image-iii-right-container-image-i">
                                                </p>
                                            </a>
                                            <a href="#section-2" onclick="
                                            document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <p class="chat-image-iii-right-container-p">
                                                    <img src="${userImpormation[i].chatImage_ii}" alt="chat-image-iii-right-container-image-ii" class="chat-image-ii-right-container-image-ii">
                                                </p>
                                            </a>
                                                                                    
                                        </div>
                                        <div class="chat-image-iii-right-container-div">
                                            <a href="#section-3" onclick="
                                            document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <p class="chat-image-iii-right-last-container-p">
                                                    <img src="${userImpormation[i].chatImage_iii}" alt="chat-image-iii-right-container-image-iii" class="chat-image-iii-right-container-image-iii">
                                                </p>
                                            </a>
                                            
                                        </div>
                                        <span class="chat-image-ii-right-div-time">
                                        ${userImpormation[i].chatTime} <img src="${seen_unseen}" alt="chat-image-ii-right-unseen-icon" class="chat-image-ii-right-unseen-icon"></span>
                                    </div>
                                    `;
                                }else if(userImpormation[i].image_count===4){
                                    Add_chatPlaceDiv+=`
                                    <!--chat-image-iv-line-right-->
                                    <div class="chat-image-iv-right-div">
                                        
                                        <div class="chat-image-iv-right-container-div">
                                            <a href="#section-1" onclick="
                                            document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <p class="chat-image-iv-right-container-p">
                                                    <img src="${userImpormation[i].chatImage_i}" alt="chat-image-iv-right-container-image-i" class="chat-image-iv-right-container-image-i">
                                                </p>
                                            </a>
                                            <a href="#section-2" onclick="
                                            document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <p class="chat-image-iv-right-container-p">
                                                    <img src="${userImpormation[i].chatImage_ii}" alt="chat-image-iv-right-container-image-ii" class="chat-image-iv-right-container-image-ii">
                                                </p>
                                            </a>
                                                                                    
                                        </div>
                                        <div class="chat-image-iv-right-container-div">
                                            <a href="#section-3" onclick="
                                            document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <p class="chat-image-iv-right-container-p">
                                                    <img src="${userImpormation[i].chatImage_iii}" alt="chat-image-iv-right-container-image-iii" class="chat-image-iv-right-container-image-iii">
                                                </p>
                                            </a>
                                            <a href="#section-4" onclick="
                                            document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <p class="chat-image-iv-right-container-p">
                                                    <img src="${userImpormation[i].chatImage_iv}" alt="chat-image-iv-right-container-image-iv" class="chat-image-iv-right-container-image-iv">
                                                </p>
                                            </a>
                                            
                                        </div>
                                        <span class="chat-image-ii-right-div-time">
                                        ${userImpormation[i].chatTime} <img src="${seen_unseen}" alt="chat-image-ii-right-unseen-icon" class="chat-image-ii-right-unseen-icon"></span>
                                    </div>
                                    `;
                                }else{
                                    Add_chatPlaceDiv+=`
                                    <!--chat-image-v-line-right-->
                                    <div class="chat-image-v-right-div">
                                        
                                        <div class="chat-image-v-right-container-div">
                                            <a href="#section-1" onclick="
                                            document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <p class="chat-image-v-right-container-p">
                                                    <img src="${userImpormation[i].chatImage_i}" alt="chat-image-v-right-container-image-i" class="chat-image-v-right-container-image-i">
                                                </p>
                                            </a>                                       
                                            <a href="#section-2" onclick="
                                            document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <p class="chat-image-v-right-container-p">
                                                    <img src="${userImpormation[i].chatImage_ii}" alt="chat-image-v-right-container-image-ii" class="chat-image-v-right-container-image-ii">
                                                </p>
                                            </a>
                                            
                                        </div>
                                        <div class="chat-image-v-right-container-div">
                                            <a href="#section-3" onclick="
                                            document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <p class="chat-image-v-right-container-p">
                                                    <img src="${userImpormation[i].chatImage_iii}" alt="chat-image-v-right-container-image-iii" class="chat-image-v-right-container-image-iii">
                                                </p>
                                            </a>
                                            
                                            <p class="chat-image-v-right-container-p">
                                                <img src="${userImpormation[i].chatImage_iv}" alt="chat-image-v-right-container-image-iv" class="chat-image-v-right-container-image-iv">
                                            </p>                                       
                                            
                                            <a href="#section-4" onclick="
                                            document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <p class="chat-image-v-right-count-p">
                                                    +${userImpormation[i].image_count}
                                                </p>
                                            </a>
                                        </div>
                                        <span class="chat-image-ii-right-div-time">
                                        ${userImpormation[i].chatTime} <img src="${seen_unseen}" alt="chat-image-ii-right-unseen-icon" class="chat-image-ii-right-unseen-icon"></span>
                                    </div>
                                    `;
                                }

                            }else if(userImpormation[i].check_II==='video'){
                                if(userImpormation[i].video_count===1){
                                    Add_chatPlaceDiv+=`
                                    <!--chat-video-i-line-right-->
                                    <div class="chat-video-i-right-div">
                                        <div class="chat-video-i-right-container-div">
                                            <p class="chat-video-i-right-container-p">
                                                <video src="${userImpormation[i].chatVideo_i}" class="chat-video-i-right-container-video" autoplay muted></video>
                                                <a href="#section-1" onclick="
                                                document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                    <div class="chat-video-i-right-play-icon-p-div">
                                                        <p class="chat-video-i-right-play-icon-p">
                                                            <img src="icons/play-color-icon.png" class="chat-video-i-right-play-icon">
                                                        </p>
                                                    </div>
                                                </a>
                                            </p>
                                        </div>
                                        <span class="chat-video-i-right-div-time">
                                        ${userImpormation[i].chatTime} <img src="${seen_unseen}" alt="chat-video-i-right-unseen-icon" class="chat-video-i-right-unseen-icon"></span>
                                    </div>
                                    `;
                                }else if(userImpormation[i].video_count===2){
                                    Add_chatPlaceDiv+=`
                                    <!--chat-video-ii-line-right-->
                                    <div class="chat-video-ii-right-div">
                                        <div class="chat-video-ii-right-container-div">
                                            <p class="chat-video-ii-right-container-p">
                                                <video src="${userImpormation[i].chatVideo_i}" class="chat-video-ii-right-container-video-i" autoplay muted></video>
                                                <a href="#section-1" onclick="
                                                document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                    <div class="chat-video-ii-right-play-icon-p-i-div">
                                                        <p class="chat-video-ii-right-play-icon-p-i">
                                                            <img src="icons/play-color-icon.png" class="chat-video-ii-right-play-icon-i">
                                                        </p>
                                                    </div>
                                                </a>
                                            </p>
                                            <p class="chat-video-ii-right-container-p">
                                                <video src="${userImpormation[i].chatVideo_ii}" class="chat-video-ii-right-container-video-ii" autoplay muted></video>
                                                <a href="#section-2" onclick="
                                                document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                    <div class="chat-video-ii-right-play-icon-p-ii-div">
                                                        <p class="chat-video-ii-right-play-icon-p-ii">
                                                            <img src="icons/play-color-icon.png" class="chat-video-ii-right-play-icon-ii">
                                                        </p>
                                                    </div>
                                                </a>
                                            </p>
                                        </div>
                                        <span class="chat-image-ii-right-div-time">
                                        ${userImpormation[i].chatTime} <img src="${seen_unseen}" alt="chat-image-ii-right-unseen-icon" class="chat-image-ii-right-unseen-icon"></span>
                                    </div>
                                    `;
                                }else if(userImpormation[i].video_count===3){
                                    Add_chatPlaceDiv+=`
                                    <!--chat-video-iii-line-right-->
                                    <div class="chat-video-iii-right-div">
                                        
                                        <div class="chat-video-iii-right-container-div">
                                            <p class="chat-video-iii-right-container-p">
                                                <video src="${userImpormation[i].chatVideo_i}" class="chat-video-iii-right-container-video-i" autoplay muted></video>
                                            </p>
                                            
                                            
                                            <a href="#section-1" onclick="
                                                document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <div class="chat-video-iii-right-play-icon-p-i-div">
                                                    <p class="chat-video-iii-right-play-icon-p-i">
                                                        <img src="icons/play-color-icon.png" class="chat-video-iii-right-play-icon-i">
                                                    </p>
                                                </div>
                                            </a>
                                            <p class="chat-video-iii-right-container-p">
                                                <video src="${userImpormation[i].chatVideo_ii}" class="chat-video-iii-right-container-video-ii" autoplay muted></video>                                      
                                            </p>
                                            
                                            
                                            <a href="#section-2" onclick="
                                                document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <div class="chat-video-iii-right-play-icon-p-ii-div">
                                                    <p class="chat-video-iii-right-play-icon-p-ii">
                                                        <img src="icons/play-color-icon.png" class="chat-video-iii-right-play-icon-ii">
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="chat-video-iii-right-container-div">
                                            <p class="chat-video-iii-right-last-container-p">
                                                <video src="${userImpormation[i].chatVideo_iii}" class="chat-video-iii-right-container-video-iii" autoplay muted></video>
                                            </p>
                                            
                                            <a href="#section-3" onclick="
                                                document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <div class="chat-video-iii-right-play-icon-p-iii-div">
                                                    <p class="chat-video-iii-right-play-icon-p-iii">
                                                        <img src="icons/play-color-icon.png" class="chat-video-iii-right-play-icon-iii">
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                        
                                        <span class="chat-video-ii-right-div-time">
                                        ${userImpormation[i].chatTime} <img src="${seen_unseen}" alt="chat-video-ii-right-unseen-icon" class="chat-video-ii-right-unseen-icon"></span>
                                    </div>
                                    `;
                                }else if(userImpormation[i].video_count===4){
                                    Add_chatPlaceDiv+=`
                                    <!--chat-video-iv-line-right-->
                                    <div class="chat-image-iv-right-div">
                                        
                                        <div class="chat-video-iv-right-container-div">
                                            <p class="chat-video-iv-right-container-p-i">
                                                <video src="${userImpormation[i].chatVideo_i}" class="chat-video-iv-right-container-video-i" autoplay muted></video>
                                            </p>
                                            
                                            <a href="#section-1" onclick="
                                                document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <div class="chat-video-iv-right-play-icon-p-i-div">
                                                    <p class="chat-video-iv-right-play-icon-p-i">
                                                        <img src="icons/play-color-icon.png" class="chat-video-iv-right-play-icon-i">
                                                    </p>
                                                </div>
                                            </a>
                                            <p class="chat-video-iv-right-container-p-ii">
                                                <video src="${userImpormation[i].chatVideo_ii}" class="chat-video-iv-right-container-video-ii" autoplay muted></video>
                                            </p>
                                            
                                            <a href="#section-2" onclick="
                                                document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <div class="chat-video-iv-right-play-icon-p-ii-div">
                                                    <p class="chat-video-iv-right-play-icon-p-ii">
                                                        <img src="icons/play-color-icon.png" class="chat-video-iv-right-play-icon-ii">
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="chat-video-iv-right-container-div">
                                            <p class="chat-video-iv-right-container-p-iii">
                                                <video src="${userImpormation[i].chatVideo_iii}" class="chat-video-iv-right-container-video-iii" autoplay muted></video>
                                            </p>
                                            
                                            <a href="#section-3" onclick="
                                                document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <div class="chat-video-iv-right-play-icon-p-iii-div">
                                                    <p class="chat-video-iv-right-play-icon-p-iii">
                                                        <img src="icons/play-color-icon.png" class="chat-video-iv-right-play-icon-iii">
                                                    </p>
                                                </div>
                                            </a>
                                            <p class="chat-video-iv-right-container-p-iv">
                                                <video src="${userImpormation[i].chatVideo_iv}" class="chat-video-iv-right-container-video-iv" autoplay muted></video>
                                            </p>
                                            
                                            <a href="#section-4" onclick="
                                                document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <div class="chat-video-iv-right-play-icon-p-iv-div">
                                                    <p class="chat-video-iv-right-play-icon-p-iv">
                                                        <img src="icons/play-color-icon.png" class="chat-video-iv-right-play-icon-iv">
                                                    </p>
                                                </div>
                                            </a>
                                            
                                        </div>
                                        <span class="chat-video-ii-right-div-time">
                                        ${userImpormation[i].chatTime} <img src="${seen_unseen}" alt="chat-video-ii-right-unseen-icon" class="chat-video-ii-right-unseen-icon"></span>
                                    </div>
                                    `;
                                }else{
                                    Add_chatPlaceDiv+=`
                                    <!--chat-video-v-line-right-->
                                    <div class="chat-video-v-right-div">
                                        <div class="chat-video-v-right-container-div">
                                            <p class="chat-video-v-right-container-p-i">
                                                <video src="${userImpormation[i].chatVideo_i}" class="chat-video-v-right-container-video-i" autoplay muted></video>
                                            </p>
                                            
                                            <a href="#section-1" onclick="
                                                document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <div class="chat-video-v-right-play-icon-p-i-div">
                                                    <p class="chat-video-v-right-play-icon-p-i">
                                                        <img src="icons/play-color-icon.png" class="chat-video-v-right-play-icon-i">
                                                    </p>
                                                </div>
                                            </a>
                                            <p class="chat-video-v-right-container-p-ii">
                                                <video src="${userImpormation[i].chatVideo_ii}" class="chat-video-v-right-container-video-ii" autoplay muted></video>
                                            </p>
                                            
                                            <a href="#section-2" onclick="
                                                document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <div class="chat-video-v-right-play-icon-p-ii-div">
                                                    <p class="chat-video-v-right-play-icon-p-ii">
                                                        <img src="icons/play-color-icon.png" class="chat-video-v-right-play-icon-ii">
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="chat-video-v-right-container-div">
                                            <p class="chat-video-v-right-container-p-iii">
                                                <video src="${userImpormation[i].chatVideo_iii}" class="chat-video-v-right-container-video-iii" autoplay muted></video>
                                            </p>
                                            
                                            <a href="#section-3" onclick="
                                                document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <div class="chat-video-v-right-play-icon-p-iii-div">
                                                    <p class="chat-video-v-right-play-icon-p-iii">
                                                        <img src="icons/play-color-icon.png" class="chat-video-v-right-play-icon-iii">
                                                    </p>
                                                </div>
                                            </a>
                                            <p class="chat-video-v-right-container-p-iv">
                                                <video src="${userImpormation[i].chatVideo_iv}" class="chat-video-v-right-container-video-iv" autoplay muted></video>
                                            </p>                                       
                                            
                                            <a href="#section-4" onclick="
                                                document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <p class="chat-video-v-right-count-p">
                                                    +${userImpormation[i].video_count}
                                                </p>
                                            </a>
                                        </div>
                                        <span class="chat-image-ii-right-div-time">
                                        ${userImpormation[i].chatTime} <img src="${seen_unseen}" alt="chat-image-ii-right-unseen-icon" class="chat-image-ii-right-unseen-icon"></span>
                                    </div>
                                    `;
                                }
                            }else if(userImpormation[i].check_II==='document'){
                                Add_chatPlaceDiv+=`
                                <!--chat-file-right-->
                                <div class="chat-file-right-div">
                                    <div class="chat-file-right-container-div">
                                        <p class="chat-file-right-container-p">
                                            <embed src="${userImpormation[i].chatPdf}#toolbar=0" 
                                            type="application/pdf"
                                            class="chat-file-right-container-image">
                                        </p>
                                        <div class="chat-file-right-container-blur-div">
                                            <p class="chat-file-right-container-blur-p">
                                                <img src="icons/document-color-icon.png" alt="chat-file-right-container-blur-image"
                                                class="chat-file-right-container-blur-image">
                                            </p>
                                        </div>
                                    </div>
                                    <span class="chat-file-right-div-time">
                                    ${userImpormation[i].chatTime} <img src="${seen_unseen}" alt="chat-file-right-unseen-icon" class="chat-file-right-unseen-icon"></span>
                                </div>
                                `;

                            }else if(userImpormation[i].check_II==='audio'){
                                Add_chatPlaceDiv+=`
                                <!--chat-audio-container-right-->
                                <div class="chat-place-audio-right-container">
                                    <p class="chat-place-red-light-audio-right"></p>
                                    <p class="chat-place-audio-right-container-p"><img src="icons/audio-icon.png" alt="audio-container-img" class="chat-place-audio-right-container-img"></p>
                                    <div class="chat-place-playandrange-counttime-audio-right-div">
                                        <div class="chat-place-audio-right-container-play-range-div">
                                            <button class="chat-place-audio-right-container-play">
                                                <img src="icons/play-icon.png" alt="play-icon" class="chat-place-audio-play-icon-right">
                                            </button>
                                            <div class="chat-place-range-rangevalue-audio-right">
                                                <input type="range" class="chat-place-audio-right-container-range">
                                                <p class="chat-place-range-value-audio-right-p"></p>
                                            </div>
                                        </div>
                                        <div class="chat-place-audio-right-container-count-time-div">
                                            <p class="chat-place-audio-right-container-count">0:05</p>
                                            <p class="chat-place-audio-right-container-time">${userImpormation[i].chatTime}
                                                <img src="${seen_unseen}" alt="chat-place-audio-unseen-icon-right" class="chat-place-audio-unseen-icon-right">
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                `;
                            }

                        }else{
                            //####Left user#####//
                            if(userImpormation[i].check_II==='text'){
                                if(userImpormation[i].amountLine==='single_line'){
                                    Add_chatPlaceDiv+=`
                                    <!--chat-single-line-left-->
                                    <div class="chat-single-line-left-div">
                                        ${userImpormation[i].chatText}
                                        <span class="chat-single-line-left-div-time">
                                        ${userImpormation[i].chatTime} <img src="${seen_unseen}" alt="chat-single-line-left-unseen-icon" class="chat-single-line-left-unseen-icon"></span>
                                    </div>
                                    `;
                                }else{
                                    Add_chatPlaceDiv+=`
                                    <!--chat-mullity-line-left-->
                                    <div class="chat-mullity-line-left-div">
                                        ${userImpormation[i].chatText}
                                        <span class="chat-mullity-line-left-div-time">
                                        ${userImpormation[i].chatTime} <img src="${seen_unseen}" alt="chat-mullity-line-left-unseen-icon" class="chat-mullity-line-left-unseen-icon"></span>
                                    </div>
                                    `;
                                }
                                
                                

                            }else if(userImpormation[i].check_II==='image'){
                                if(userImpormation[i].image_count===1){
                                    Add_chatPlaceDiv+=`
                                    <!--chat-image-i-line-left-->
                                    <div class="chat-image-i-left-div"
                                    data-image-i="${userImpormation[i].chatImage_i}">
                                        <p class="chat-image-i-left-user-image-p">
                                            <img src="${userImpormation[i].send_userImage}" alt="chat-image-i-left-user-image" class="chat-image-i-left-user-image">
                                        </p>
                                        <p class="chat-image-i-left-user-name-p">
                                        ${userImpormation[i].send_FirstName}</p>
                                        <div class="chat-image-i-left-container-div">
                                            <a href="#section-1" onclick="
                                            document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <p class="chat-image-i-left-container-p">
                                                    <img src="${userImpormation[i].chatImage_i}" alt="chat-image-i-left-container-image" class="chat-image-i-left-container-image">
                                                </p>
                                            </a>
                                            
                                        </div>
                                        <span class="chat-image-i-left-div-time">
                                        ${userImpormation[i].chatTime} <img src="
                                        ${seen_unseen}" alt="chat-image-i-left-unseen-icon" class="chat-image-i-left-unseen-icon"></span>
                                    </div>
                                    `;
                                }else if(userImpormation[i].image_count===2){
                                    Add_chatPlaceDiv+=`
                                    <!--chat-image-ii-line-left-->
                                    <div class="chat-image-ii-left-div">
                                        <p class="chat-image-ii-left-user-image-p">
                                            <img src="${userImpormation[i].send_userImage}" alt="chat-image-ii-left-user-image" class="chat-image-ii-left-user-image">
                                        </p>
                                        <p class="chat-image-ii-left-user-name-p">
                                        ${userImpormation[i].send_FirstName}</p>
                                        <div class="chat-image-ii-left-container-div">
                                            <a href="#section-1" onclick="
                                            document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <p class="chat-image-ii-left-container-p">
                                                    <img src="${userImpormation[i].chatImage_i}" alt="chat-image-ii-left-container-image-i" class="chat-image-ii-left-container-image-i">
                                                </p>
                                            </a>
                                            <a href="#section-2" onclick="
                                            document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <p class="chat-image-ii-left-container-p">
                                                    <img src="${userImpormation[i].chatImage_ii}" alt="chat-image-ii-left-container-image-ii" class="chat-image-ii-left-container-image-ii">
                                                </p>
                                            </a>                                        
                                        </div>
                                        <span class="chat-image-ii-left-div-time">
                                        ${userImpormation[i].chatTime} <img src="
                                        ${seen_unseen}" alt="chat-image-ii-left-unseen-icon" class="chat-image-ii-left-unseen-icon"></span>
                                    </div>
                                    `;
                                }else if(userImpormation[i].image_count===3){
                                    Add_chatPlaceDiv+=`
                                    <!--chat-image-iii-line--left-->
                                    <div class="chat-image-iii-left-div">
                                        <p class="chat-image-iii-left-user-image-p">
                                            <img src="${userImpormation[i].send_userImage}" alt="chat-image-iii-left-user-image" class="chat-image-iii-left-user-image">
                                        </p>
                                        <p class="chat-image-iii-left-user-name-p">
                                        ${userImpormation[i].send_FirstName}</p>
                                        <div class="chat-image-iii-left-container-div">
                                            <a href="#section-1" onclick="
                                            document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <p class="chat-image-iii-left-container-p">
                                                    <img src="${userImpormation[i].chatImage_i}" alt="chat-image-iii-left-container-image-i" class="chat-image-iii-left-container-image-i">
                                                </p>
                                            </a>
                                            <a href="#section-2" onclick="
                                            document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <p class="chat-image-iii-left-container-p">
                                                    <img src="${userImpormation[i].chatImage_ii}" alt="chat-image-iii-left-container-image-ii" class="chat-image-ii-left-container-image-ii">
                                                </p>
                                            </a>
                                        </div>
                                        <div class="chat-image-iii-left-container-div">
                                            <a href="#section-3" onclick="
                                            document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <p class="chat-image-iii-left-last-container-p">
                                                    <img src="${userImpormation[i].chatImage_iii}" alt="chat-image-iii-left-container-image-iii" class="chat-image-iii-left-container-image-iii">
                                                </p>
                                            </a>
                                                                                    
                                        </div>
                                        <span class="chat-image-ii-left-div-time">
                                        ${userImpormation[i].chatTime} <img src="
                                        ${seen_unseen}" alt="chat-image-ii-left-unseen-icon" class="chat-image-ii-left-unseen-icon"></span>
                                    </div>
                                    `;
                                }else if(userImpormation[i].image_count===4){
                                    Add_chatPlaceDiv+=`
                                    <!--chat-image-iv-line-left-->
                                    <div class="chat-image-iv-left-div">
                                        <p class="chat-image-iv-left-user-image-p">
                                            <img src="${userImpormation[i].send_userImage}" alt="chat-image-iv-left-user-image" class="chat-image-iv-left-user-image">
                                        </p>
                                        <p class="chat-image-iv-left-user-name-p">
                                        ${userImpormation[i].send_FirstName}</p>
                                        <div class="chat-image-iv-left-container-div">
                                            <a href="#section-1" onclick="
                                            document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <p class="chat-image-iv-left-container-p">
                                                    <img src="${userImpormation[i].chatImage_i}" alt="chat-image-iv-left-container-image-i" class="chat-image-iv-left-container-image-i">
                                                </p>
                                            </a>
                                            <a href="#section-2" onclick="
                                            document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <p class="chat-image-iv-left-container-p">
                                                    <img src="${userImpormation[i].chatImage_ii}" alt="chat-image-iv-left-container-image-ii" class="chat-image-iv-left-container-image-ii">
                                                </p>
                                            </a>
                                                                                    
                                        </div>
                                        <div class="chat-image-iv-left-container-div">
                                            <a href="#section-3" onclick="
                                            document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <p class="chat-image-iv-left-container-p">
                                                    <img src="${userImpormation[i].chatImage_iii}" alt="chat-image-iv-left-container-image-iii" class="chat-image-iv-left-container-image-iii">
                                                </p>
                                            </a>
                                            <a href="#section-4" onclick="
                                            document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <p class="chat-image-iv-left-container-p">
                                                    <img src="${userImpormation[i].chatImage_iv}" alt="chat-image-iv-left-container-image-iv" class="chat-image-iv-left-container-image-iv">
                                                </p>
                                            </a>
                                            
                                        </div>
                                        <span class="chat-image-ii-left-div-time">
                                        ${userImpormation[i].chatTime} <img src="${seen_unseen}" alt="chat-image-ii-left-unseen-icon" class="chat-image-ii-left-unseen-icon"></span>
                                    </div>
                                    `;
                                }else{
                                    Add_chatPlaceDiv+=`
                                    <!--chat-image-v-line-left-->
                                    <div class="chat-image-v-left-div">
                                        <p class="chat-image-v-left-user-image-p">
                                            <img src="${userImpormation[i].send_userImage}" alt="chat-image-v-left-user-image" class="chat-image-v-left-user-image">
                                        </p>
                                        <p class="chat-image-v-left-user-name-p">
                                        ${userImpormation[i].send_FirstName}</p>
                                        <div class="chat-image-v-left-container-div">
                                            <a href="#section-1" onclick="
                                            document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <p class="chat-image-v-left-container-p">
                                                    <img src="${userImpormation[i].chatImage_i}" alt="chat-image-v-left-container-image-i" class="chat-image-v-left-container-image-i">
                                                </p>
                                            </a>
                                            <a href="#section-2" onclick="
                                            document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <p class="chat-image-v-left-container-p">
                                                    <img src="${userImpormation[i].chatImage_ii}" alt="chat-image-v-left-container-image-ii" class="chat-image-v-left-container-image-ii">
                                                </p>
                                            </a>
                                        </div>
                                        <div class="chat-image-v-left-container-div">
                                            <a href="#section-3" onclick="
                                            document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <p class="chat-image-v-left-container-p">
                                                    <img src="${userImpormation[i].chatImage_iii}" alt="chat-image-v-left-container-image-iii" class="chat-image-v-left-container-image-iii">
                                                </p>
                                            </a>
                                            
                                            <p class="chat-image-v-left-container-p">
                                                <img src="${userImpormation[i].chatImage_iv}" alt="chat-image-v-left-container-image-iv" class="chat-image-v-left-container-image-iv">
                                            </p>
                                            
                                            <a href="#section-4" onclick="
                                            document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <p class="chat-image-v-left-count-p">
                                                    +${userImpormation[i].image_count}
                                                </p>
                                            </a>
                                        </div>
                                        <span class="chat-image-ii-left-div-time">
                                        ${userImpormation[i].chatTime} <img src="${seen_unseen}" alt="chat-image-ii-left-unseen-icon" class="chat-image-ii-left-unseen-icon"></span>
                                    </div>
                                    `;
                                }

                            }else if(userImpormation[i].check_II==='video'){
                                if(userImpormation[i].video_count===1){
                                    Add_chatPlaceDiv+=`
                                    <!--chat-video-i-line-left-->
                                    <div class="chat-video-i-left-div">
                                        <p class="chat-video-i-left-user-image-p">
                                            <img src="${userImpormation[i].send_userImage}" alt="chat-video-i-left-user-image" class="chat-video-i-left-user-image">
                                        </p>
                                        <p class="chat-video-i-left-user-name-p">
                                        ${userImpormation[i].send_FirstName}</p>
                                        <div class="chat-video-i-left-container-div">
                                            <p class="chat-video-i-left-container-p">
                                                <video src="${userImpormation[i].chatVideo_i}" class="chat-video-i-left-container-video" autoplay muted></video>
                                                <a href="#section-1" onclick="
                                                document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                    <div class="chat-video-i-left-play-icon-p-div">
                                                        <p class="chat-video-i-left-play-icon-p">
                                                            <img src="icons/play-color-icon.png" class="chat-video-i-left-play-icon">
                                                        </p>
                                                    </div>
                                                </a>         
                                            </p>
                                        </div>
                                        <span class="chat-video-i-left-div-time">
                                        ${userImpormation[i].chatTime} <img src="${seen_unseen}" alt="chat-video-i-left-unseen-icon" class="chat-video-i-left-unseen-icon"></span>
                                    </div>
                                    `;
                                }else if(userImpormation[i].video_count===2){
                                    Add_chatPlaceDiv+=`
                                    <!--chat-video-ii-line-left-->
                                    <div class="chat-video-ii-left-div">
                                        <p class="chat-video-ii-left-user-image-p">
                                            <img src="${userImpormation[i].send_userImage}" alt="chat-video-ii-left-user-image" class="chat-video-ii-left-user-image">
                                        </p>
                                        <p class="chat-video-ii-left-user-name-p">
                                        ${userImpormation[i].send_FirstName}</p>
                                        <div class="chat-video-ii-left-container-div">
                                            <p class="chat-video-ii-left-container-p">
                                                <video src="${userImpormation[i].chatVideo_i}" class="chat-video-ii-left-container-video-i" autoplay muted></video>
                                                <a href="#section-1" onclick="
                                                document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                    <div class="chat-video-ii-left-play-icon-p-i-div">
                                                        <p class="chat-video-ii-left-play-icon-p-i">
                                                            <img src="icons/play-color-icon.png" class="chat-video-ii-left-play-icon-i">
                                                        </p>
                                                    </div>
                                                </a>
                                            </p>
                                            <p class="chat-video-ii-left-container-p">
                                                <video src="${userImpormation[i].chatVideo_ii}" class="chat-video-ii-left-container-video-ii" autoplay muted></video>
                                                <a href="#section-2" onclick="
                                                document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                    <div class="chat-video-ii-left-play-icon-p-ii-div">
                                                        <p class="chat-video-ii-left-play-icon-p-ii">
                                                            <img src="icons/play-color-icon.png" class="chat-video-ii-left-play-icon-ii">
                                                        </p>
                                                    </div>
                                                </a>
                                            </p>
                                        </div>
                                        <span class="chat-image-ii-left-div-time">
                                        ${userImpormation[i].chatTime} <img src="${seen_unseen}" alt="chat-image-ii-left-unseen-icon" class="chat-image-ii-left-unseen-icon"></span>
                                    </div>
                                    `;
                                }else if(userImpormation[i].video_count===3){
                                    Add_chatPlaceDiv+=`
                                    <!--chat-video-iii-line-left-->
                                    <div class="chat-video-iii-left-div">
                                        <p class="chat-video-iii-left-user-image-p">
                                            <img src="${userImpormation[i].send_userImage}" alt="chat-video-iii-left-user-image" class="chat-video-iii-left-user-image">
                                        </p>
                                        <p class="chat-video-iii-left-user-name-p">
                                        ${userImpormation[i].send_FirstName}</p>
                                        <div class="chat-video-iii-left-container-div">
                                            <p class="chat-video-iii-left-container-p">
                                                
                                                <video src="${userImpormation[i].chatVideo_i}" class="chat-video-iii-left-container-video-i" autoplay muted></video>
                                                
                                            </p>
                                            
                                            <a href="#section-1" onclick="
                                                document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <div class="chat-video-iii-left-play-icon-p-i-div">
                                                    <p class="chat-video-iii-left-play-icon-p-i">
                                                        <img src="icons/play-color-icon.png" class="chat-video-iii-left-play-icon-i">
                                                    </p>
                                                </div>
                                            </a>
                                            <p class="chat-video-iii-left-container-p">
                                                
                                                <video src="${userImpormation[i].chatVideo_ii}" class="chat-video-iii-left-container-video-ii" autoplay muted></video>                                      
                                            </p>
                                            
                                            <a href="#section-2" onclick="
                                                document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <div class="chat-video-iii-left-play-icon-p-ii-div">
                                                    <p class="chat-video-iii-left-play-icon-p-ii">
                                                        <img src="icons/play-color-icon.png" class="chat-video-iii-left-play-icon-ii">
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="chat-video-iii-left-container-div">
                                            <p class="chat-video-iii-left-last-container-p">
                                                
                                                <video src="${userImpormation[i].chatVideo_iii}" class="chat-video-iii-left-container-video-iii" autoplay muted></video>
                                            </p>
                                            
                                            <a href="#section-3" onclick="
                                                document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <div class="chat-video-iii-left-play-icon-p-iii-div">
                                                    <p class="chat-video-iii-left-play-icon-p-iii">
                                                        <img src="icons/play-color-icon.png" class="chat-video-iii-left-play-icon-iii">
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                        
                                        <span class="chat-video-ii-left-div-time">
                                        ${userImpormation[i].chatTime} <img src="${seen_unseen}" alt="chat-video-ii-left-unseen-icon" class="chat-video-ii-left-unseen-icon"></span>
                                    </div>
                                    `;
                                }else if(userImpormation[i].video_count===4){
                                    Add_chatPlaceDiv+=`
                                    <!--chat-video-iv-line-left-->
                                    <div class="chat-image-iv-left-div">
                                        <p class="chat-video-iv-left-user-image-p">
                                            <img src="${userImpormation[i].send_userImage}" alt="chat-video-iv-left-user-image" class="chat-video-iv-left-user-image">
                                        </p>
                                        <p class="chat-video-iv-left-user-name-p">
                                        ${userImpormation[i].send_FirstName}</p>
                                        <div class="chat-video-iv-left-container-div">
                                            <p class="chat-video-iv-left-container-p-i">
                                                <video src="${userImpormation[i].chatVideo_i}" class="chat-video-iv-left-container-video-i" autoplay muted></video>
                                            </p>
                                            
                                            <a href="#section-1" onclick="
                                                document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <div class="chat-video-iv-left-play-icon-p-i-div">
                                                    <p class="chat-video-iv-left-play-icon-p-i">
                                                        <img src="icons/play-color-icon.png" class="chat-video-iv-left-play-icon-i">
                                                    </p>
                                                </div>
                                            </a>
                                            <p class="chat-video-iv-left-container-p-ii">
                                                <video src="${userImpormation[i].chatVideo_ii}" class="chat-video-iv-left-container-video-ii" autoplay muted></video>
                                            </p>
                                            
                                            <a href="#section-2" onclick="
                                                document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <div class="chat-video-iv-left-play-icon-p-ii-div">
                                                    <p class="chat-video-iv-left-play-icon-p-ii">
                                                        <img src="icons/play-color-icon.png" class="chat-video-iv-left-play-icon-ii">
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="chat-video-iv-left-container-div">
                                            <p class="chat-video-iv-left-container-p-iii">
                                                <video src="${userImpormation[i].chatVideo_iii}" class="chat-video-iv-left-container-video-iii" autoplay muted></video>
                                            </p>
                                            
                                            <a href="#section-3" onclick="
                                                document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <div class="chat-video-iv-left-play-icon-p-iii-div">
                                                    <p class="chat-video-iv-left-play-icon-p-iii">
                                                        <img src="icons/play-color-icon.png" class="chat-video-iv-left-play-icon-iii">
                                                    </p>
                                                </div>
                                            </a>
                                            <p class="chat-video-iv-left-container-p-iv">
                                                <video src="${userImpormation[i].chatVideo_iv}" class="chat-video-iv-left-container-video-iv" autoplay muted></video>
                                            </p>
                                            
                                            <a href="#section-4" onclick="
                                                document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <div class="chat-video-iv-left-play-icon-p-iv-div">
                                                    <p class="chat-video-iv-left-play-icon-p-iv">
                                                        <img src="icons/play-color-icon.png" class="chat-video-iv-left-play-icon-iv">
                                                    </p>
                                                </div>
                                            </a>
                                            
                                        </div>
                                        <span class="chat-video-ii-left-div-time">
                                        ${userImpormation[i].chatTime} <img src="${seen_unseen}" alt="chat-video-ii-left-unseen-icon" class="chat-video-ii-left-unseen-icon"></span>
                                    </div>
                                    `;
                                }else{
                                    Add_chatPlaceDiv+=`
                                    <!--chat-video-v-line-left-->
                                    <div class="chat-video-v-left-div">
                                        <p class="chat-video-v-left-user-image-p">
                                            <img src="${userImpormation[i].send_userImage}" alt="chat-video-v-left-user-image" class="chat-video-v-left-user-image">
                                        </p>
                                        <p class="chat-video-v-left-user-name-p">
                                        ${userImpormation[i].send_FirstName}</p>
                                        <div class="chat-video-v-left-container-div">
                                            <p class="chat-video-v-left-container-p-i">
                                                <video src="${userImpormation[i].chatVideo_i}" class="chat-video-v-left-container-video-i" autoplay muted></video>
                                            </p>
                                            
                                            <a href="#section-1" onclick="
                                                document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <div class="chat-video-v-left-play-icon-p-i-div">
                                                    <p class="chat-video-v-left-play-icon-p-i">
                                                        <img src="icons/play-color-icon.png" class="chat-video-v-left-play-icon-i">
                                                    </p>
                                                </div>
                                            </a>
                                            <p class="chat-video-v-left-container-p-ii">
                                                <video src="${userImpormation[i].chatVideo_ii}" class="chat-video-v-left-container-video-ii" autoplay muted></video>
                                            </p>
                                            
                                            <a href="#section-2" onclick="
                                                document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <div class="chat-video-v-left-play-icon-p-ii-div">
                                                    <p class="chat-video-v-left-play-icon-p-ii">
                                                        <img src="icons/play-color-icon.png" class="chat-video-v-left-play-icon-ii">
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="chat-video-v-left-container-div">
                                            <p class="chat-video-v-left-container-p-iii">
                                                <video src="${userImpormation[i].chatVideo_iii}" class="chat-video-v-left-container-video-iii" autoplay muted></video>
                                            </p>
                                            
                                            <a href="#section-3" onclick="
                                                document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <div class="chat-video-v-left-play-icon-p-iii-div">
                                                    <p class="chat-video-v-left-play-icon-p-iii">
                                                        <img src="icons/play-color-icon.png" class="chat-video-v-left-play-icon-iii">
                                                    </p>
                                                </div>
                                            </a>
                                            <p class="chat-video-v-left-container-p-iv">
                                                <video src="${userImpormation[i].chatVideo_iv}" class="chat-video-v-left-container-video-iv" autoplay muted></video>
                                            </p>                                       
                                            
                                            <a href="#section-4" onclick="
                                                document.querySelector('.status-show-image-video-pdf-div').style.display='block';">
                                                <p class="chat-video-v-left-count-p">
                                                    +${userImpormation[i].video_count}
                                                </p>
                                            </a>
                                        </div>
                                        <span class="chat-image-ii-left-div-time">
                                        ${userImpormation[i].chatTime} <img src="${seen_unseen}" alt="chat-image-ii-left-unseen-icon" class="chat-image-ii-left-unseen-icon"></span>
                                    </div>
                                    `;
                                }
                            }else if(userImpormation[i].check_II==='document'){
                                Add_chatPlaceDiv+=`
                                <!--chat-file-left-->
                                <div class="chat-file-left-div">
                                    
                                    <p class="chat-file-left-user-image-p">
                                        <img src="${userImpormation[i].send_userImage}" alt="chat-file-left-user-image"
                                            class="chat-file-left-user-image">
                                    </p>
                                    <p class="chat-file-left-user-name-p">
                                    ${userImpormation[i].send_FirstName}</p>
                                    <div class="chat-file-left-container-div">
                                        <p class="chat-file-left-container-p">
                                            <embed src="${userImpormation[i].chatPdf}#toolbar=0" 
                                            type="application/pdf"
                                            class="chat-file-right-container-image">
                                        </p>
                                        <div class="chat-file-left-container-blur-div">
                                            <p class="chat-file-left-container-blur-p">
                                                <img src="icons/document-color-icon.png" alt="chat-file-left-container-blur-image"
                                                class="chat-file-left-container-blur-image">
                                            </p>
                                        </div>
                                    </div>
                                    <span class="chat-file-left-div-time">${userImpormation[i].chatTime} <img src="${seen_unseen}" alt="chat-file-left-unseen-icon" class="chat-file-left-unseen-icon"></span>
                                </div>
                                `;

                            }else if(userImpormation[i].check_II==='audio'){
                                Add_chatPlaceDiv+=`
                                <!--chat-audio-container-left-->
                                <div class="chat-place-audio-left-container">
                                    <p class="chat-place-red-light-audio-left"></p>
                                    <p class="chat-place-audio-left-container-p"><img src="icons/audio-icon.png" alt="audio-container-img" class="chat-place-audio-left-container-img"></p>
                                    <div class="chat-place-playandrange-counttime-audio-left-div">
                                        <div class="chat-place-audio-left-container-play-range-div">
                                            <button class="chat-place-audio-left-container-play">
                                                <img src="icons/play-icon.png" alt="play-icon" class="chat-place-audio-play-icon-left">
                                            </button>
                                            <div class="chat-place-range-rangevalue-audio-left">
                                                <input type="range" class="chat-place-audio-left-container-range">
                                                <p class="chat-place-range-value-audio-left-p"></p>
                                            </div>
                                        </div>
                                        <div class="chat-place-audio-left-container-count-time-div">
                                            <p class="chat-place-audio-left-container-count">0:05</p>
                                            <p class="chat-place-audio-left-container-time">${userImpormation[i].chatTime} 
                                                <img src="${seen_unseen}" alt="chat-place-audio-unseen-icon-left" class="chat-place-audio-unseen-icon-left">
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                `;
                            }
                        }
                    }

                //ADD TO CHAT CONTAINER...
                chatPlaceDiv.innerHTML=Add_chatPlaceDiv;
                }
            }

            //chatDisplay_rightImage_I
            const chatDisplay_rightImage_I=document.querySelectorAll('.chat-image-i-right-div');
            chatDisplay_rightImage_I.forEach((e)=>{
                e.addEventListener('click',()=>{
                    //dataDashed_rightImage_I
                    let dataDashed_rightImage_I=e.dataset.imageI;
                    
                    let chatplaceShow_image_container=`
                    <section id="section-1">
                        <div class="status-show-image-div">
                            <img src="${dataDashed_rightImage_I}" class="status-show-image">
                        </div>
                    </section>`;
                    
                    //status-show-image-video-pdf-container
                    document.querySelector('.status-show-image-video-pdf-container').innerHTML=chatplaceShow_image_container;  
                
                })
            })

            //chatDisplay_leftImage_I
            const chatDisplay_leftImage_I=document.querySelectorAll('.chat-image-i-left-div');
            chatDisplay_leftImage_I.forEach((e)=>{
                e.addEventListener('click',()=>{
                    //dataDashed_leftImage_I
                    let dataDashed_leftImage_I=e.dataset.imageI;
                    
                    let chatplaceShow_image_container=`
                    <section id="section-1">
                        <div class="status-show-image-div">
                            <img src="${dataDashed_leftImage_I}" class="status-show-image">
                        </div>
                    </section>`;
                    
                    //status-show-image-video-pdf-container
                    document.querySelector('.status-show-image-video-pdf-container').innerHTML=chatplaceShow_image_container;  
                
                })
            })






            callRecieve()
            /////dataBaseCallRecieve put onvalu ${userImpormation[i].id}
            function callRecieve(){
                
                let dataBaseCallRecieve=[{
                    fullName:'alisha gidson',
                    callVideocall:'color-call.png',
                    id:"3d09bd60-5c20-4b9c-a22e-90cb649d266c",
                    recieveDate:'yesterday',
                    recentTime:"2:30am",
                    image:"female-(1).png",
                    showAcceptCall:true,
                    index:1
                },{
                    fullName:'leah douglas',
                    callVideocall:'color-videocall.png',
                    id:"7e8686d0-5cc8-4e2d-81fb-156f258d82e7",
                    recieveDate:'yesterday',
                    recentTime:"4:09pm",
                    image:"female-(2).png",
                    showAcceptCall:false,
                    index:2
                },{
                    fullName:'victoria barnes',
                    callVideocall:'color-call.png',
                    id:"d4d0ba8f-f25f-407c-abdb-8b9696e297bc",
                    recieveDate:'yesterday',
                    recentTime:"12:00am",
                    image:"female-(3).png",
                    showAcceptCall:false,
                    index:3
                },{
                    fullName:'isabelle wil',
                    callVideocall:'color-videocall.png',
                    id:"3d09bd60-5c20-4b9c-a22e-90cb649d266c",
                    recieveDate:'yesterday',
                    recentTime:"4:09pm",
                    image:"female-(4).png",
                    showAcceptCall:false,
                    index:4
                },{
                    fullName:'craf frank',
                    callVideocall:'color-call.png',
                    id:"3d09bd60-5c20-4b9c-a22e-90cb649d266c",
                    recieveDate:'yesterday',
                    recentTime:"12:00am",
                    image:"female-(5).png",
                    showAcceptCall:false,
                    index:5
                }]

                let callRecieve='';
                let showAcceptCall='';
                let showAcceptVideoCall='';

                for(let i=0;i<dataBaseCallRecieve.length;i++){
                    if(thisUserId===dataBaseCallRecieve[i].id){
                        callRecieve+=`
                            <div class="recieve-calls-container">
                                <button class="recieve-calls-img-button">
                                    <img src="user-images/${dataBaseCallRecieve[i].image}"  alt="recieve-calls-user-img" class="recieve-calls-img">
                                </button>
                                <p class="recieve-calls-name">${dataBaseCallRecieve[i].fullName}</p>
                                <p class="recieve-calls-icon-p"><img src="icons/${dataBaseCallRecieve[i].callVideocall}" alt="recieve-calls-icon" class="recieve-callsvideo-icon"></p>
                                <span class="recieve-calls-time"><img src="icons/me-recievecall-icon.png" alt="recieve-call-icon" class="recieve-call-icon"> ${dataBaseCallRecieve[i].recieveDate}, ${dataBaseCallRecieve[i].recentTime}</span>
                            </div>`;
                    }else{
                        callRecieve+=`
                            <div class="unrecieve-calls-container">
                                <button class="unrecieve-calls-img-button">
                                    <img src="user-images/${dataBaseCallRecieve[i].image}"  alt="unrecieve-calls-user-img" class="unrecieve-calls-img">
                                </button>
                                <p class="unrecieve-calls-name">${dataBaseCallRecieve[i].fullName}</p>
                                <p class="unrecieve-calls-icon-p"><img src="icons/${dataBaseCallRecieve[i].callVideocall}"alt="unrecieve-callsvideo-icon" class="unrecieve-callsvideo-icon"></p>
                                <span class="unrecieve-calls-time"><img src="icons/me-recievecall-icon.png" alt="unrecieve-call-icon" class="unrecieve-call-icon"> ${dataBaseCallRecieve[i].recieveDate}, ${dataBaseCallRecieve[i].recentTime}</span>
                            </div>
                        `;
                    }
                    //// show accept call container
                    if(dataBaseCallRecieve[i].showAcceptCall===true&&dataBaseCallRecieve[i].callVideocall==='color-call.png'){
                        document.querySelector('.accept-call-show-div').style.display='none';//turn it to block
                        showAcceptCall=`
                        <p class="accept-call-show-img-p"><img src="user-images/${dataBaseCallRecieve[i].image}" alt="accept-call-show-img" class="accept-call-show-img"></p>
                        <p class="accept-call-show-name">${dataBaseCallRecieve[i].fullName}</p>
                        <p class="accept-call-show-calling">calling...</p>
                        <div class="call-slice-to-answer-div">
                            <p class="call-slice-to-answer-p" mouseleave="
                            
                            document.querySelector('.accept-call-button').style.left='82%';
                            setTimeout(()=>{
                                document.querySelector('.accept-call-show-div').style.display='none';
                                //make call false to stop view on your screen
                                set(rel(getDatabase(),'${dataBaseCallRecieve[i].id}/${dataBaseCallRecieve[i].index}'),{
                                    fullName:'${dataBaseCallRecieve[i].fullName}',
                                    callVideocall:'${dataBaseCallRecieve[i].callVideocall}',
                                    id:'${dataBaseCallRecieve[i].id}',
                                    recieveDate:'${dataBaseCallRecieve[i].recieveDate}',
                                    recentTime:'${dataBaseCallRecieve[i].recentTime}',
                                    image:${dataBaseCallRecieve[i].image},
                                    showAcceptCall:false
                                },1000)
                            
                            ">slide to answer</p>
                            <button class="accept-call-button"><img src="icons/color-call.png" alt="accept-call-icon" class="accept-call-icon"></button>
                        </div>`;
                        
                    }
                    //// show accept videocall container
                    if(dataBaseCallRecieve[i].showAcceptCall===true&&dataBaseCallRecieve[i].callVideocall==='color-videocall.png'){
                        document.querySelector('.accept-videocall-show-div').style.display='none';//turn it to block
                        showAcceptVideoCall=`
                        <p class="accept-videocall-show-img-p"><img src="user-images/${dataBaseCallRecieve[i].image}" alt="accept-videocall-show-img" class="accept-videocall-show-img"></p>
                        <p class="accept-videocall-show-name">${dataBaseCallRecieve[i].fullName}</p>
                        <p class="accept-videocall-show-calling">videocalling...</p>
                        <div class="videocall-slice-to-answer-div">
                            <p class="videocall-slice-to-answer-p" mouseleave="
                            
                            document.querySelector('.accept-videocall-button').style.left='82%';
                            setTimeout(()=>{
                                //make call false to stop view on your screen
                                set(rel(getDatabase(),'${dataBaseCallRecieve[i].id}/${dataBaseCallRecieve[i].index}'),{
                                    fullName:'${dataBaseCallRecieve[i].fullName}',
                                    callVideocall:'${dataBaseCallRecieve[i].callVideocall}',
                                    id:'${dataBaseCallRecieve[i].id}',
                                    recieveDate:'${dataBaseCallRecieve[i].recieveDate}',
                                    recentTime:'${dataBaseCallRecieve[i].recentTime}',
                                    image:${dataBaseCallRecieve[i].image},
                                    showAcceptCall:false
                                },1000)
                            
                            ">slide to answer</p>
                            <button class="accept-videocall-button" ><img src="icons/color-videocall.png" alt="accept-videocall-icon" class="accept-videocall-icon"></button>
                        </div>`;
                    }
                }
                //call&videocall recent
                document.querySelector('.recieve-unrecieve-div').innerHTML+=callRecieve;
                //show Accept Call
                document.querySelector('.accept-call-show-div').innerHTML=showAcceptCall;
                //show Accept videoCall
                document.querySelector('.accept-videocall-show-div').innerHTML=showAcceptVideoCall;
            }


        }
    }
}
})















