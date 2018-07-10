const $ = require("jquery")

const songPrinter = Object.create({}, {
    printSongs: {
        value: function(songArray) {
            $(".div--container").empty();
            songArray.forEach((song) => {
                const $songDiv = $("<div>").attr("id",song.id)
                $("<h4>").text(song.title).appendTo($songDiv)
                $("<p>").text(song.artist).appendTo($songDiv)
                $("<p>").text(song.album).appendTo($songDiv)

                $($songDiv).appendTo(".div--container");

            })
        }
    }

})

module.exports = songPrinter;