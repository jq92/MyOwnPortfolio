// onClick hamburger menu to trigger drop down menu
$(document).ready(function() {
  $('.bar').click(function() {
    $('.bar').toggleClass('active');
    $('.navbar').toggleClass('active');
  });
});

// onClick to close the navigation bar
const closeNav = () => {
  $('.bar').removeClass('active');
  $('.navbar').removeClass('active');

  if ($('#link').hasClass('current') == false) {
    $(this).addClass('current');
  } else {
    $(this).removeClass('current');
  }
};

// smooth scrolling
$('.navbar a, .btn, #showcase a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 70
      },
      800
    );
  }
});
