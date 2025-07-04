function playall(songNumber) {
    const audioElement = document.getElementById("song");
    const playBtn = document.getElementById("play-pause");
    const songFileName = "music/" + songNumber + ".mp3";
    const currentRow = document.getElementById("song" + songNumber);

    // Remove highlight from all rows
    const allRows = document.querySelectorAll("tbody tr");
    allRows.forEach(row => row.classList.remove("highlight"));

    // Toggle song
    if (audioElement.getAttribute("src") === songFileName && !audioElement.paused) {
        audioElement.pause();
        playBtn.innerHTML = '<img src="images/play-button.svg" class="play-button">';
    } else {
        audioElement.setAttribute("src", songFileName);
        audioElement.play();
        playBtn.innerHTML = '<img src="images/pause-button.svg" class="play-button">';
        currentRow.classList.add("highlight");

        // Reset when song ends
        audioElement.onended = function () {
            playBtn.innerHTML = '<img src="images/play-button.svg" class="play-button">';
            currentRow.classList.remove("highlight");
        };
    }
}

function playaudio() {
    const audio = document.getElementById("song");
    const playBtn = document.getElementById("play-pause");

    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = '<img src="images/pause-button.svg" class="play-button">';
    } else {
        audio.pause();
        playBtn.innerHTML = '<img src="images/play-button.svg" class="play-button">';
    }
}
