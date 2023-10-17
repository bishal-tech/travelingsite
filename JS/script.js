// alert('');
jQuery(document).ready(function () {
  /// story section slider
  $("#slider").slick({
    infinite: false,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots: false,
    speed: 300,
    slidesToScroll: 1,
    pauseOnHover: true,
    centerMode: false,
    centerPadding: "0px",
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 479,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
          slidesToShow: 1,
        },
      },
    ],
  });

  $("#review-slider").slick({
    infinite: false,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots: false,
    speed: 300,
    slidesToScroll: 1,
    pauseOnHover: true,
    centerMode: false,
    centerPadding: "0px",
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
          slidesToShow: 1,
        },
      },
    ],
  });




  $("#team-slider").slick({
    infinite: false,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots: false,
    speed: 300,
    slidesToScroll: 1,
    pauseOnHover: true,
    centerMode: false,
    centerPadding: "0px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
          slidesToShow: 1,
        },
      },
    ],
  });
});




$('#banner-slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
});

//------litingsite Review sec js------///
// $(".invisible-content").hide();
// $(document).on('click',"#btn",function(){
//   var moreLessbutton=$(".invisible-content").is(":visible")?'Read More':'Read Less';
//   $(this).text(moreLessbutton);
//   $(this).parent(".reviews-sec").find(".invisible-content").toggle();
//   $(this).parent(".reviews-sec").find(".visible-content").toggle();
// });
