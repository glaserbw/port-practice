$(document).ready(function() {
    console.log("What's up from the backend?");
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Close navbar on click

$("a").bind('click', function() {
    $("input").click()
    $(this).find("checkbox").click();
    console.log("button clicked")
    return true;
});




// Style Nav on Scroll 
$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }
})
 