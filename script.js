let slideImages = document.querySelectorAll('.main-product-container .main-product img');
let counter = 0;

function slideNext() {
    slideImages[counter].style.animation = 'next1 0.3s ease-in forwards';
    if (counter >= slideImages.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    slideImages[counter].style.animation = 'next2 0.3s ease-in forwards';
}

function slidePrev() {
    slideImages[counter].style.animation = 'prev1 0.3s ease-in forwards';
    if (counter == 0) {
        counter = slideImages.length - 1;
    } else {
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 0.3s ease-in forwards';
}

function autoSliding() {
    setInterval(function () {
        slideNext();
    }, 5000);
}
autoSliding();

// const container = document.querySelector('.main-product-container');
// container.addEventListener('mouseover', function () {
//     clearInterval(setInterval);
// });

// container.addEventListener('mouseout', autoSliding);
