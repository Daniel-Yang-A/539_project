



document.addEventListener("DOMContentLoaded", function () {
    console.log("Index loading");
    document.querySelector("nav a").addEventListener("click", function() {
        let animateBtn = document.querySelector("#animateBtn");
        const animateProcess = new Promise((resolve, reject) => {
            setTimeout(() => {
                animateBtn.style.dispaly = "block";
                animateBtn.style.animation = "changeToWhite 1s linear 0s 1 normal";
            }, 1000);
        });
        animateBtn();
    })

    // Load necessary elements
    fetch('../json/movie_info.json')
    .then(response => response.json())
    .then(data => {
        let n = 15;
        const mobile_as = 3;
        const shuffled = data.sort(() => 0.5 - Math.random());
        let selected = shuffled.slice(0, n);
        // console.log(selected);
        let start_idx = 0;
        mobileAutoSlider(selected, start_idx, n, mobile_as);
    })
    .catch(error => console.log(error));
});


function mobileAutoSlider(selected, start_idx, total, num) {
    document.querySelector(".autoSlider").innerHTML = "";
    for (let i = 0; i < num; i++) {
        let cur = (start_idx + i) % total;
        document.querySelector(".autoSlider").innerHTML += 
            "<a href='" + selected[cur].link + "'>" +
            "<img src='" + selected[cur].images +
            "' alt='" + selected[cur].title + "'>"
            "</a>";
    }
    // setTimeout(mobileAutoSlider, 4000, selected, (start_idx + 1) % total, total, num);
}

function mobileAutoSlider(selected, start_idx, total, num) {
    document.querySelector(".autoSlider").innerHTML = "";
    for (let i = 0; i < total; i++) {
        let cur = (start_idx + i) % total;
        document.querySelector(".autoSlider").innerHTML += 
            "<a href='" + selected[cur].link + "'>" +
            "<img src='" + selected[cur].images +
            "' alt='" + selected[cur].title + "'>"
            "</a>";
    }
    // setTimeout(mobileAutoSlider, 4000, selected, (start_idx + 1) % total, total, num);
}