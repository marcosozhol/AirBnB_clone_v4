<<<<<<< HEAD
$(document).ready(function () {
  const dict = {};
  const $amenitiesCheck = $('input[type=checkbox]');
  const $selectedAmenities = $('div.amenities h4');

  $amenitiesCheck.click(function () {
    if ($(this).is(':checked')) {
      dict[$(this).data('id')] = $(this).data('name');
      $selectedAmenities.text(Object.values(dict).join(', '));
    } else if ($(this).is(':not(:checked)')) {
      delete dict[$(this).data('id')];
      $selectedAmenities.text(Object.values(dict).join(', '));
    }
  });
});
=======
$('document').ready(function () {
  let amenities = {};
  $('INPUT[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      amenities[$(this).attr('data-id')];
    } else {
      delete amenities[$(this).attr('data-id')];
    }
    $('.amenities H4').text(Object.values(amenities).join(', '));
  })
})
>>>>>>> 7f98b262d7c0f801346426841e7f62a4769cf4c9
