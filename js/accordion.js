$(document).ready(function(){
    $('.paragraph_info').not(':first').hide();
    $('.title_accord').click(function (){
        var paragraph = $(this).next('.paragraph_info');
        var title = $(this).closest('.accord_tabs');
        if(paragraph.is(':visible')){
            paragraph.slideUp();
        } else {
            title.find('.paragraph_info').slideUp();
            paragraph.slideDown();
        }
    });
});