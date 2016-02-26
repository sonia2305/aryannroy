/*!
 * CV - Bootstrap Theme (http://themewagon.com.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */


//Testimonial


$(function() {
    $('.text-testimonial').hide();
    $('#testimonial-1').show( "slow" );
    $('.client').on('click', function(e){
        e.preventDefault();
        var testimonial = $(this).data('testimonial_id');
        $('.text-testimonial').hide();
        $('#'+testimonial).show( "slow" );
        $('.client').removeClass('redmark');
        $(this).addClass('redmark');
    });
});




