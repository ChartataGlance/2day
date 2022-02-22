

$(function() {
   function secondaryNavLinks( e ) {
     var $toOpen = $( $( e.target ).attr( "href" ) + ":hidden" );
     $( "#secondary-nav" ).children( ".secondary-menu:visible" ).slideUp();
     $toOpen.slideDown();
     e.preventDefault();
   }
 
   function secondaryNavCleanup() {
     $( ".secondary-menu" ).removeAttr( "style" );
   }
 
   $( ".secondary a" ).on( "click", secondaryNavLinks );
 
   mediaCheck({
     media: '(min-width: 800px)',
     entry: function() {
       secondaryNavCleanup();
     },
   });
 });