const imgs = document.querySelectorAll('.he1');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0;

function changeSlide() {
    imgs.forEach(img => img.classList.remove('active'));
    imgs[n].classList.add('active');
}

changeSlide();

prev_btn.addEventListener('click', () => {
    n = (n > 0) ? n - 1 : imgs.length - 1;
    changeSlide();
});

next_btn.addEventListener('click', () => {
    n = (n < imgs.length - 1) ? n + 1 : 0;
    changeSlide();
});

const scrollContainer = document.querySelectorAll('.products');
for (const item of scrollContainer){
    item.addEventListener('wheel',(evt)=>
        {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}
