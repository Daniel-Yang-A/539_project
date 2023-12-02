
let cur_idx = 0;
const MAX_PAGE_ITEM = 25;

document.addEventListener("DOMContentLoaded", function () {
    console.log("Index loading");

    // Load necessary elements
    fetch('./json/movie_info.json')
    .then(response => response.json())
    .then(data => {
        makeList(data, cur_idx);
    })
    .catch(error => console.log(error));
});

function makeList(data, cur_idx) {
    let cur_page = data.slice(cur_idx, cur_idx + MAX_PAGE_ITEM);
    let listGrid = document.querySelector("#listGrid");
    for (const movie of cur_page) {
        let genre_list = movie.genre.split(",");
        let genre_html = "";
        for (genre of genre_list) {
            genre_html += '<span class="genreTag">' + genre + '</span>';
        }
        listGrid.innerHTML += 
            '<div class="movieItem">' +
            '<img src="' + movie.images + '" alt="' + movie.title + '">' +
            '<div class="movieInfo">' +
            '<a><h2>' + movie.rank + '. ' + movie.title + '</h2></a>' +
            '<div class="movieDetail">' + 
            '<span>' + genre_html + '</span>' +
            '<span>' + movie.duration + '</span>' +
            '<span class="fa fa-star checked"> ' + movie.imbd_rating + '</span>' +
            '</div>' +
            '<p class="movieIntro">' + movie.storyline + '</p>' +
            '</div>' +
            '</div>'
            ;
    }
}