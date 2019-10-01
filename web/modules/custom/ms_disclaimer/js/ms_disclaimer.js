/**
 * @file
 * Attaches popup and show/hide functionality to disclaimer.
 */
(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.behaviors.disclaimer = {
    attach: function (context, settings) {
      // Check if nid exists.
      if (settings.nid) {
        let index = 'disclaimer_' + settings.nid;

        // Skip popup in case cookie says user already agreed.
        if ($.cookie(index) !== '1') {
          // User did not agreed yet. Show popup.
          $('.disclaimer', context).dialog({
            closeOnEscape: false,
            open: function (event, ui) {
              $('.ui-dialog-titlebar-close', ui.dialog | ui).hide();
            },
            resizable: false,
            height: 'auto',
            width: '40%',
            modal: true,
            buttons: {
              'Yes': {
                text: 'Accept',
                click: function () {
                  $(this).dialog('close');
                  // Expires in 1 year.
                  var expire = new Date(new Date().getTime() + 3600 * 1000);
                  $.cookie(index, '1', {expires: expire});
                }
              },
              'No': {
                text: 'Decline',
                click: function () {
                  $(this).dialog('close');
                  // Redirect to somewhere?
                }
              }
            }
          }).removeClass('hidden');
        }
      }
    }
  };

})(jQuery, Drupal, drupalSettings);
