function renderMovie (movieData) {
    document.getElementById("title").innerText = movieData.title;
    document.getElementById("summary").innerText = movieData.summary;
    var actors = '';
    for(var i = 0; i < movieData.actors.length; i++) {
        actors += "<li>" + movieData.actors[i] + "</li>";
    }
    document.getElementById("actors").innerHTML = actors;

}
renderMovie(movieData);