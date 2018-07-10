
const $ = require("jquery")
const song = require("./form.js")
const database = require("./databaseMethods")
const songPrinter = require("./songPrinter")

// const home = require("./index.html")

$( "#addSongBtn" ).click(function() {
    console.log("hello")
    song.addSongList();
  });

  $(".div--container").click(function() {
    console.log("I have clicked the submit button")
    if (event.target.id === "submitButton") {
        console.log("I have clicked the submit button again")
       const songInput = $("#songTitle").val();
       console.log(songInput)
       const albumInput = $("#songAlbum").val();
       console.log(albumInput)
       const artistInput = $("#songArtist").val();
       console.log(artistInput)
       const songMessage = {
        title: songInput,
        artist: albumInput,
        album: artistInput
        }
        console.log(songMessage)
        database.postSong(songMessage)
    }})
