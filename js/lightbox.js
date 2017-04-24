
var $lightbox = $('<div id="lightbox"></div>');     //create overlay
var $image = $("<img>");      //capture image

$lightbox.append($image);

$("body").append($lightbox);    // append lightbox to body

$("#gallery a").click(function(event){
    event.preventDefault();
    var imgloc = $(this).attr("href");      // capture img href attribute
    $image.attr("src", imgloc);
    $lightbox.show();
});









// ---------------------------------------------------------------------------


// Create representation of an jQuery Object
//    var $overlay = $('<div id="overlay"></div>');   // create an overlay  
//    var $image = $("<img>");    // capture an image
//    var $caption = $("<p></p>");
//Add image to overlay
//    $overlay.append($image);    

//Add a caption to overlay
//    $overlay.append($caption);

//Add overlay to body
//    $("body").append($overlay)

//Capture the click event on a link to an image
//    $("#imageGallery a").click(function(event) {    //on click of an a element do something
//        event.preventDefault();                     // stop browser default behaviour
//        var imageLocation = $(this).attr("href");            // capture href of element we clicked on
        //Update overlay with the image linked in the link
//       $image.attr("src", imageLocation );
        
        //Show the overlay.
//        $overlay.show();                           
  
        //Get child's alt attribute and set caption
//        var captionText = $(this).children("img").attr("alt");
//        $caption.text(captionText);
//    });

  
//When overlay is clicked
//    $overlay.click(function() {
    //Hide the overlay
//        $overlay.hide();
//    });
  
 