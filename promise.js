console.log("Start");
function userInfo(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email && password) {
                console.log("Now we have the data..")
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
                console.log(`${email} Logged in..`);
                const videos = ["video1", "video2","video3"];
                console.log(videos);
                resolve(videos);
            }
            else {
                reject("hata")
            }
            
        }, 2000);
    })
}

function likedVideo(videos) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (videos) {
                rand = videos[Math.floor(Math.random() * (2 - 0 + 1) )]
                console.log(`${rand} begenildi.`)
                resolve(rand);
            }
            else {
                reject("hata");
            }
            
        }, 2000);
    });
}
function logOut () {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            is = true;
            if (is) {
                console.log("Logged out..")
                resolve()
            }
            else {
                reject()
            }   
        },2000);
    } );
}

const user = userInfo("asdf@gmail.com", 123456)
    .then((mail) => loginFacebook(mail.userMail))
    .then(videos => likedVideo(videos))
    .then(() => logOut())
    .catch(err => console.log(err))
                     


