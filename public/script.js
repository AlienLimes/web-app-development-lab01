console.log("Hello from the Web App Dev lab!");

$('.ui.rating').rating();

$('#ratingSlider').slider({
  min: 1,
  max: 5,
  start: 1,
  onChange: function(value) {
    $('#ratingValue').val(value);
  }
});

$('#ratingNumber').on('change', function() {
  let val = parseInt($(this).val());
  if (val >= 1 && val <= 5) {
    $('#ratingSlider').slider('set value', val);
    $('#ratingValue').val(val);
  }
});