const $ = require("jquery")
const songPrinter = require("./songPrinter")
const database = require("./databaseMethods")

database.getSong().then((song) => {
console.log(song)
for (let i = 0; i < song.length; i++) {
    $("<p>").append(song[i].title).appendTo($("#postToDom"))
    $("<p>").append(song[i].artist).appendTo($("#postToDom"))

}
  });