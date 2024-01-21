document.addEventListener("DOMContentLoaded", function () {
    // Get elements to be animated
    var contentSection = document.getElementById("contentSection");
    var contents = document.getElementById("contents");
    var artworkInfo = document.getElementById("artworkInfo");

    // Function to handle animations based on intersection
    function handleIntersection(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            } else {
                entry.target.style.opacity = "0";
                entry.target.style.transform = "translateY(20px)";
            }
        });
    }

    // Create Intersection Observer instances
    var observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust as needed
    };

    var contentObserver = new IntersectionObserver(handleIntersection, observerOptions);
    var contentsObserver = new IntersectionObserver(handleIntersection, observerOptions);
    var artworkInfoObserver = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe elements
    contentObserver.observe(contentSection);
    contentsObserver.observe(contents);
    artworkInfoObserver.observe(artworkInfo);
});
