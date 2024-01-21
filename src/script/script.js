document.addEventListener("scroll", function () {
    var animatedContent = document.getElementById("animatedContent");

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top <= window.innerHeight &&
            rect.bottom >= 0
        );
    }

    if (isElementInViewport(animatedContent)) {
        animatedContent.classList.add("animate");
    } else {
        animatedContent.classList.remove("animate");
    }
});
