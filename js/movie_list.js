
CUR_IDX = 0;
const MAX_PAGE_ITEM = 24;
const MAX_NUM_MOVIE = 250;

window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && CUR_IDX < MAX_NUM_MOVIE) {
        fetch('./json/movie_info.json')
        .then(response => response.json())
        .then(data => {
            makeList(data, CUR_IDX);
        })
        .catch(error => console.log(error));
    }
};

document.addEventListener("DOMContentLoaded", function () {
    console.log("Index loading");

    // Load necessary elements
    fetch('./json/movie_info.json')
    .then(response => response.json())
    .then(data => {
        makeList(data, CUR_IDX);
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
            '<div class="movieItem" tabindex=0>' +
            '<img src="' + movie.images + '" alt="' + movie.title + '">' +
            '<div class="movieInfo">' +
            '<a href="' + movie.link + '"><h2>' +
            // movie.rank + '. ' +
            movie.title + '</h2></a>' +
            '<div class="movieDetail">' + 
            '<span class="movieTitle">' + genre_html + '</span>' +
            '<span>' + movie.duration + '</span>' +
            '<span class="fa fa-star checked"> ' + movie.imbd_rating + '</span>' +
            '</div>' +
            '<p class="movieIntro">' + movie.storyline + '</p>' +
            '</div>' +
            '</div>';
    }
    CUR_IDX += MAX_PAGE_ITEM;
}