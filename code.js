import {movieData} from "./data";
import $ from "jquery";

function renderMovie (movieData) {
    $("#title").text(movieData.title);
    $("#summary").text(movieData.summary);
    //$("#actors").html("<li>" + movieData.actors + "</li>");
    
    var actors = "";
    for(var i = 0; i < movieData.actors.length; i++) {
        actors += "<li>" + movieData.actors[i] + "</li>";
    }
    $("#actors").html(actors);

}

function changeRating(grade) {
    
    for(let i = 1; i<=5; i++){
        if($("#heart"+i).hasClass("filled")){
            $("#heart"+i).attr("class", "na");
        }
    }
    
    for(let i = 1; i<=grade; i++) {
        console.log("heart"+i, grade)
        $("#heart"+i).addClass("filled"); 
    }
}

for(let i = 1; i <6; i++){
    let heart = $("#heart"+i);
    heart.on("click", function(){
        changeRating(i)}
    )};
    renderMovie(movieData);

//changeRating(3);