var nonTechSlideIndex = 1;
var techSlideIndex = 1;

showNonTechSlides(nonTechSlideIndex);
showTechSlides(techSlideIndex);

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
