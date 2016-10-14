var $contactForm = $('#contact-form');

$contactForm.submit(function(e) {
	e.preventDefault();
	var $submit = $('button:submit', $contactForm);
	var defaultSubmitText = $submit.text();

	$.ajax({
		url: '//formspree.io/ylliac@hotmail.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			//$contactForm.append('<div class="alert alert--loading">Sending message…</div>');
			$submit.attr('disabled', true).text('Envoi en cours…');
		},
		success: function(data) {
			$contactForm.append('<div class="alert alert--success">Message envoyé !</div>');
			$submit.text('Message envoyé !');
			setTimeout(function() {
				//$('.alert--success').remove();
				$submit.attr('disabled', false).text(defaultSubmitText);
			}, 5000);
		},
		error: function(err) {
			//$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--error">Oops, il y a eu une erreur</div>');
			$submit.text('Erreur, Cliquer pour réessayer');
			setTimeout(function() {
				//$('.alert--error').remove();
				$submit.attr('disabled', false).text(defaultSubmitText);
			}, 5000);
		}
	});
});
