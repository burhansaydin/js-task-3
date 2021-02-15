
console.log("Start");

function userInfo(email, password, callback) {
    setTimeout(() => {
        console.log("Now we have the data");
        callback({ usermail: email , password });
    }, 2000)

}
function loginFacebook(email, callback) {
    setTimeout(() => {
        console.log(`${email} logged in..`)
        callback(["video1", "video2", "video3"])
    }, 2000)
}

function likedVideo(videos, callback) {
    setTimeout(() => {
        rand = videos[Math.floor(Math.random() * (2 - 0 + 1) )]
        callback(`${rand} begenildi`);
    }, 2000
    )
}
function logOut(callback) {
    setTimeout(() => {
        callback("Logged Out..")
    },2000);
}

const user = userInfo("asdf@gmail.com", "123456", user => {
    user;
    loginFacebook(user.usermail, (videos)=> {
        console.log(videos);
        likedVideo(videos, (title) => {
            console.log(title);
            logOut(logout => {
                console.log(logout);
            })
        })
    })
})