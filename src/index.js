
let dropdownLink = $('.dropdown-link');

dropdownLink.on('click', function (event) {
    let dropdownMenu = $(this).find('.dropdown');
    dropdownMenu.toggle();
});


$('.tooltip').on('click', function (event) {
    alert('fsdfasd');
});

/*
if($(".checkbox-round .checkbox").is(":checked")) {
    alert('fsdfasd');
    $(this).parent(".wrap-checkbox").addClass("active");
}
else {
    $(this).parent(".wrap-checkbox").removeClass("active");
}

*/


$( ".checkbox-round input[type=checkbox]" ).on( "click", function() {
    //onsole.log( $(this).parent(".wrap-checkbox") );

    let parent = $(this).parent(".checkbox-round");
    let parentTwo = parent.parent(".wrap-checkbox");

    parentTwo.toggleClass("active");
});
