$('.gallery').ready(function () {

var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
var flickrOptions = {
  tags: "nature",
  format: "json"
};
  function displayPhotos(data) {
    var photoHTML = '<ul>';
    $.each(data.items,function(i,photo) {
      photoHTML += '<li>';
      photoHTML += '<a href=" ' + photo.media.m + ' " data-lightbox="image" data-title=" Title: ' + photo.title + '. <br> Submitted: ' + photo.published + '. <br> Tag: ' + photo.tags + '. " ">';
      photoHTML += '<img src="' + photo.media.m + ' " id="images"></a></li>';
    });
  photoHTML += '</ul>';
  $('.gallery').html(photoHTML);
  }
  $.getJSON(flickerAPI, flickrOptions, displayPhotos);

  $(".btn").click(function (event) {
    event.preventDefault();//
      var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
      var animal = $(this).text();
      var flickrOptions = {
        tags: animal,
        format: "json"
      };

    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
  });

});













