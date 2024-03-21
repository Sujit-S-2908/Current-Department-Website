var funSlideIndex = 1;
var nonTechSlideIndex = 1;
var techSlideIndex = 1;

showFunSlides(funSlideIndex);
showNonTechSlides(nonTechSlideIndex);
showTechSlides(techSlideIndex);

// Fun Event Content Slider
function plusFunSlides(n) {
    showFunSlides((funSlideIndex += n));
}

function currentFunSlide(n) {
    showFunSlides((funSlideIndex = n));
}

function showFunSlides(n) {
    var i;
    var slides = document.getElementsByClassName("fun-event-content-slider");
    var dots = document.getElementsByClassName("fun-event-dot");
    if (n > slides.length) {
        funSlideIndex = 1;
    }
    if (n < 1) {
        funSlideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" fun-event-active", "");
    }
    slides[funSlideIndex - 1].style.display = "block";
    dots[funSlideIndex - 1].className += " fun-event-active";
}

// Technical Event Content Slider
function plusTechSlides(n) {
    showTechSlides((techSlideIndex += n));
}

function currentTechSlide(n) {
    showTechSlides((techSlideIndex = n));
}

function showTechSlides(n) {
    var i;
    var slides = document.getElementsByClassName("tech-event-content-slider");
    var dots = document.getElementsByClassName("tech-event-dot");
    if (n > slides.length) {
        techSlideIndex = 1;
    }
    if (n < 1) {
        techSlideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" tech-event-active", "");
    }
    slides[techSlideIndex - 1].style.display = "block";
    dots[techSlideIndex - 1].className += " tech-event-active";
}

// Non Technical Event Content Slider
function plusNonTechSlides(n) {
    showNonTechSlides((nonTechSlideIndex += n));
}

function currentNonTechSlide(n) {
    showNonTechSlides((nonTechSlideIndex = n));
}

function showNonTechSlides(n) {
    var i;
    var slides = document.getElementsByClassName("non-tech-event-content-slider");
    var dots = document.getElementsByClassName("non-tech-event-dot");
    if (n > slides.length) {
        nonTechSlideIndex = 1;
    }
    if (n < 1) {
        nonTechSlideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" non-tech-event-active", "");
    }
    slides[nonTechSlideIndex - 1].style.display = "block";
    dots[nonTechSlideIndex - 1].className += " non-tech-event-active";
}
