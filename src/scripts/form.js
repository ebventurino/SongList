const $ = require("jquery")

const addSong = Object.create({}, {
  addSongList: {
      value: () => {
          const divRef = $(".div--container")
          const $divSong = $("<p>").attr("id", "songText").text("Song").appendTo(divRef)
          const $paraSong = $("<p>").appendTo($divSong)
          const $songTitle = $("<label>").attr("for", "songTitle").text("Song Title").appendTo($paraSong)
          const $titleInput = $("<input>").attr("id", "songTitle").appendTo($songTitle)
          const $songAlbum = $("<label>").attr("for", "songAlbum").text("Song Album").appendTo($paraSong)
          const $songInput = $("<input>").attr("id", "songAlbum").appendTo($songAlbum)
          const $songArtist = $("<label>").attr("for", "songArtist").text("Song Artist").appendTo($paraSong)
          const $artistInput = $("<input>").attr("id", "songArtist").appendTo($songArtist)
          const $taskAddSubmit = $("<button>").attr("id", "submitButton").text("Submit").appendTo($divSong)
      }
    }
  })

  module.exports = addSong;