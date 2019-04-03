
$('.tooltip').on('click', function (event) {
    alert('fsdfasd');
});


$( ".round input[type=radio]" ).on( "click", function() {

    $(".round input[type=radio]").each(function(i){  
        
        let parent = $(this).parents(".wrap-checkbox");
        
        if( $(this).is(":checked") ) {
            parent.addClass("active");
        }
        else {
            parent.removeClass("active");
        }

    });

    return false;

    // parent.toggleClass("active");
});
