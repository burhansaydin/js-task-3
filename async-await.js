
 console.log("Start");
 function userInfo(email, password) {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
             if (email && password) {
                 console.log("Now we have the data")
                 resolve({ userMail: email ,password});
             }
             else
                 reject("Hatali sifre")
         }, 2000);
     });
 }
 function loginFacebook(email) {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
             if(email){
                 console.log(`${email} Logged In.`)
                 const videos= ["video1", "video2","video3"];
                 console.log(videos)
                 resolve(videos);
             }
             else {
                 reject("hata")
             }
             
         }, 2000);
     })
 }
 
 function likedVideo(video) {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
             if (video) {
                 resolve(video);
             }
             else {
                 reject("hata");
             }
             
         }, 2000);
     });
 }
 function logOut (out) {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
             if (out) {
                 console.log('Logged Out..')
                 resolve()
             }
             else {
                 reject("An error occured")
             }
         },2000)
     })
 }
 
 async function init() {
     const user = await userInfo("asdf@gmail.com", 123456)
     const videos = await loginFacebook(user.userMail)
     const content = await likedVideo(videos[Math.floor(Math.random() * (2 - 0 + 1) )])
     await console.log(`${content} begenildi.`)
     logOut("out")
 }
 
 init()