$(document).ready(function() {
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
        $('nav').addClass('bg-dark');
        $('nav').removeClass('bg-transparent');
    } else {
        $('nav').removeClass('bg-dark');
        $('nav').addClass('bg-transparent');
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
