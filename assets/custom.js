// $( document ).ready(function() {
//     $( ".contact-form__submit" ).submit(function( ) {
//       alert("hii");
//       $(".Contact-success").removeClass("hide");
//     }
// });


// Remove a tooltip
var animal_flag = 'dog';
$(document).ready(function(){
  setTimeout(function() {
    $( "a" ).each(function( ) {
      var anc_title = $(this).attr('title');
      $(this).mouseover(function(){
        $(this).attr('title', "");
      });
      $(this).mouseout(function(){
        $(this).attr('title', anc_title);
      });
    });
  }, 500);

  // contact form hero section text hide
  if($(".contact-form .contact-page__container").hasClass('hide')){
    $(".overlay__content").hide();
  }

  // Remove + icon from quantity dropdown
  // $( ".cc-select__option" ).each(function( index ) {
  //   var opt_value = $(this).find("span").html();
  //   $(this).find("span").html(opt_value.replace('+',''));
  // });  
  
  //===============================================Alex-start==========================================================================//
  $('.cart-summary__header').replaceWith('<div class="cart-summary__header"><a href="/cart">Review Your Cart</a></div>');
  // $('div.cell.auto > div > a.title').removeClass('title');

  //===============================================psa-esa-start==========================================================================//
  $("#loadMore").innerHTML = "Show More";
  //===============================================psa-esa-end==========================================================================//
  //===============================================products-start==========================================================================//
  $('div.product-detail-accordion div.cc-accordion details:nth-child(2)').addClass('is-open');
  $('div.product-detail-accordion div.cc-accordion details:nth-child(2)').attr('open','true');
  //===============================================products-end==========================================================================//
  //===============================================wag-start==========================================================================//
  $('.sec-timeline.sec-timeline-wag .sub_button_wrapper .btn_cat').click(function(){
    $('.sec-timeline.sec-timeline-wag .sub_button_wrapper .btn_dog').removeClass('btn--primary');
    $('.sec-timeline.sec-timeline-wag .sub_button_wrapper .btn_dog').addClass('btn--secondary');
    $('.sec-timeline.sec-timeline-wag .sub_button_wrapper .btn_cat').removeClass('btn--secondary');
    $('.sec-timeline.sec-timeline-wag .sub_button_wrapper .btn_cat').addClass('btn--primary');
    $('.sec-timeline.sec-timeline-wag .btn_timeline').attr('href', 'https://wagwalking.com/cat-sitting');
    $('.sec-timeline.sec-timeline-wag .btn_timeline').text('BOOK ON WAG! TODAY FOR YOUR CAT');
  });
  $('.sec-timeline.sec-timeline-wag .sub_button_wrapper .btn_dog').click(function(){
    $('.sec-timeline.sec-timeline-wag .sub_button_wrapper .btn_cat').removeClass('btn--primary');
    $('.sec-timeline.sec-timeline-wag .sub_button_wrapper .btn_cat').addClass('btn--secondary');
    $('.sec-timeline.sec-timeline-wag .sub_button_wrapper .btn_dog').removeClass('btn--secondary');
    $('.sec-timeline.sec-timeline-wag .sub_button_wrapper .btn_dog').addClass('btn--primary');
    $('.sec-timeline.sec-timeline-wag .btn_timeline').attr('href', 'https://wagwalking.com/dog-sitting');
    $('.sec-timeline.sec-timeline-wag .btn_timeline').text('BOOK ON WAG! TODAY FOR YOUR DOG');
  });

  //===============================================wag-end==========================================================================//
  var width = window.innerWidth;
  widthResizer();
  $('.template-suffix-pet-insurer .btn_dog').click(function() {
    animal_flag = 'dog';
    widthResizer();
  });
  $('.template-suffix-pet-insurer .btn_cat').click(function() {
    animal_flag = 'cat';
    widthResizer();
  });
  //===============================================Alex-end==========================================================================//
});
function widthResizer() {
  width = window.innerWidth;
  if(width < 768) {
    if(animal_flag == 'dog')
      $('.template-suffix-pet-insurer .timeline_image_wrapper').replaceWith('<div class="timeline_image_wrapper"><img src="//cdn.shopify.com/s/files/1/0068/5454/1410/files/mobile-dog-insurance-felicitails-brand-collaboration-petinsurer-felicitails-is-founded-by-lindsay-giguiere-dog-cat-cost-overview_1024x1024.png?v=1687355543" alt="lindsay giguiere, felicitails curated products for service animals, emotional support animals, dog video based training for psychiatric service dog patients, pet insurance, dog walking, pet sitting, dog boarding, pet insurance, dna testing, dog gut health testing, dog oral testing" class="timeline_image"></div>');
    else if(animal_flag == 'cat')
      $('.template-suffix-pet-insurer .timeline_image_wrapper').replaceWith('<div class="timeline_image_wrapper"><img src="//cdn.shopify.com/s/files/1/0068/5454/1410/files/mobile-cat-insurance-felicitails-brand-collaboration-petinsurer-felicitails-is-founded-by-lindsay-giguiere-dog-cat-cost-overview_1024x1024.png?v=1687355543" alt="lindsay giguiere, felicitails curated products for service animals, emotional support animals, dog video based training for psychiatric service dog patients, pet insurance, dog walking, pet sitting, dog boarding, pet insurance, dna testing, dog gut health testing, dog oral testing" class="timeline_image"></div>');
  } else if(width > 768) {
    if(animal_flag == 'dog')
      $('.template-suffix-pet-insurer .timeline_image_wrapper').replaceWith('<div class="timeline_image_wrapper"><img src="//cdn.shopify.com/s/files/1/0068/5454/1410/files/desktop-dog-insurance-felicitails-brand-collaboration-petinsurer-felicitails-is-founded-by-lindsay-giguiere-dog-cat-cost-overview_1024x1024.png?v=1687355544" alt="lindsay giguiere, felicitails curated products for service animals, emotional support animals, dog video based training for psychiatric service dog patients, pet insurance, dog walking, pet sitting, dog boarding, pet insurance, dna testing, dog gut health testing, dog oral testing" class="timeline_image"></div>');
    else if(animal_flag == 'cat')
      $('.template-suffix-pet-insurer .timeline_image_wrapper').replaceWith('<div class="timeline_image_wrapper"><img src="//cdn.shopify.com/s/files/1/0068/5454/1410/files/desktop-cat-insurance-felicitails-brand-collaboration-petinsurer-felicitails-is-founded-by-lindsay-giguiere-dog-cat-cost-overview_1024x1024.png?v=1687355543" alt="lindsay giguiere, felicitails curated products for service animals, emotional support animals, dog video based training for psychiatric service dog patients, pet insurance, dog walking, pet sitting, dog boarding, pet insurance, dna testing, dog gut health testing, dog oral testing" class="timeline_image"></div>');
  }
}
window.addEventListener('resize', widthResizer);