const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;
const filter = 99;

let int = setInterval(blurring, 20);

for (let index = 0; index < 100; index++) {
}


function blurring() {
    load++;

    loadText.innerHTML = load + '%';
    bg.style.filter = `blur(${filter - load}px)`;

    if (load > 99) {
        clearInterval(int);
        loadText.style.opacity = 0
    }

}