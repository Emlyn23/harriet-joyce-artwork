$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
    });

    $('.gallery-item').magnificPopup({
    type: 'image',
    gallery:{
        enabled:true
    }
    });
})

// Change navbar to colored on scroll NEEDS FIXING 
$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        console.log('test');
        $('nav').addClass('is-dark');
    } else {
        $('nav').removeClass('is-dark');
    }
});

var sizePrice = "";
var subj = "";

// // Change active class for paitning size request
$(".btn-pricing").click(function() {
    sizePrice = $(this).data('price');
    $(this).addClass('is-active');
    $(".btn-pricing").not(this).removeClass('is-active');
    $('#est-price').html(sizePrice * subj);
    $('#est-price').attr("value", sizePrice);
})

// // Change active class for number of subjects request
$(".btn-subjects").click(function() {
    subj = $(this).data('subjects');
    $(this).addClass('is-active');
    $(".btn-subjects").not(this).removeClass('is-active');
    $('#est-price').html(sizePrice * subj);
})
