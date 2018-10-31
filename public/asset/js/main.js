
$(function () {
    
    
    /* Disabled selectpicker in device */
    if( jQuery('.selectpicker').length > 0){
         $('.selectpicker').selectpicker();
         if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
            $('.selectpicker').selectpicker('mobile');
        }
    }
   
    // Add custom validators to be run
    $('#plan-options-form').validator().on('submit', function (e) {
      if (e.isDefaultPrevented()) {
        // handle the invalid form...

      } else {
          e.preventDefault()
        $('#planContainer').collapse("show")
      }
    })
   
    /* Start edit date : 24May2017 */
    $('[data-btn="submit"]').click(function(event){
                    // Add custom validators to be run
           $('#info-form').validator().on('submit', function (e) {
              if (e.isDefaultPrevented()) {
                // handle the invalid form...

              }else {
				  e.preventDefault();
				  $('#mainColumn').collapse("hide");
                  $('#thankyou-page').collapse("show")
              }
            })
           $('#info-form').submit();
    })
    /* End edit date : 24May2017 */
    
    
   // Change selected value
    $('[data-formchange]').change(function(){
        var targert = $(this).data('formchange')
        var thisval = $(this).val();
        $('select[data-formtarget="'+targert+'"], [type="text"][data-formtarget="'+targert+'"]').val(thisval);
        $('.selectpicker').selectpicker('refresh');
        if($('[data-formtarget="'+targert+'"]').is('[type="radio"]') ){
            $('[data-formtarget="'+targert+'"][value="'+thisval+'"]').prop('checked', true)
        }
    })

   
  // Smooth Scrolling
   $('.smoothScrolling').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
   
    /* Start edit date : 24May2017 */
    // Input Type Number
    if( $('.inputTypeNumber').length > 0){
        $('.inputTypeNumber').mask('000-000-0000');
    }
    
    // Input Type Number
    if( $('.inputTypeNumberZip').length > 0){
        $('.inputTypeNumberZip').mask('00000-0000');
    }
    /* End edit date : 24May2017 */
    
    
});


   
    
    
    
    
    



