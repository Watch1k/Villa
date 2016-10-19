/* Common JS */
$(document).ready(function(){

	// Clear placeholder
	(function() {
		var el = $('input, textarea');
		el.focus(function(){
			$(this).data('placeholder',$(this).attr('placeholder'));
			$(this).attr('placeholder','');
		});
		el.blur(function(){
			$(this).attr('placeholder',$(this).data('placeholder'));
		});
	}());

	// Ajax Form
	$(function () {
		var subForm = $('#formSub');
		subForm.submit(function (e) {
			e.preventDefault();
			var post_data = subForm.serialize(),
				helpForm = $('.form__help');

			// Ajax post data to server
			$.post('send.php', post_data, function(response){
				if (response.type == 'error'){
					// your code here
				} else {
					// your code here
					helpForm.slideDown();
					setTimeout(function () {
						helpForm.slideUp();
						subForm.trigger('reset');
					},5000);
				}
			}, 'json');
		});
	});

});