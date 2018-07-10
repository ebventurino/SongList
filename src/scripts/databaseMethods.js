const $ = require("jquery")


const songObject = Object.create({}, {
    postSong: {
        value: (chatObject) => {
            console.log(chatObject)
            return $.ajax({
                url: "http://localhost:3000/songs",
                method: "POST",
                data: chatObject
            })

        }
    },
    getSong: {
        value: () => {
            return $.ajax("http://localhost:3000/songs")
        }
    }
})


module.exports = songObject
