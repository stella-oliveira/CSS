$.validator.setDefaults( {
	submitHandler: function () {
		alert( "Cadastro enviado!" );
	}
} );

$( document ).ready( function () {

	$( "#formularioCadastro" ).validate( {
		rules: {
			nome: {
            	required: true,
            	minlength: 2
          	},
          	cpf: {
            	required: true,
            	minlength: 11,
            	maxlength: 11,
          	},
          	cep: "required",
			usuario: {
				required: true,
				minlength: 6
			},
			senha: {
				required: true,
				minlength: 5
			},
			confirmarSenha: {
				required: true,
				minlength: 5,
				equalTo: "#senha"
			},
			email: {
				required: true,
				email: true
			},
			termos: "required"
		},
		messages: {
			nome: {
            	required: "O campo é obrigatório.",
            	minlength: "O campo deve conter no mínimo 2 caracteres."
          	},
          	cpf: {
            	required: "O campo é obrigatório.",
            	minlength: "O campo deve conter 11 caracteres.",
            	maxlength: "O campo deve conter 11 caracteres."
          	},
          	cep: "O campo é obrigatório.",
			usuario: {
				required: "O campo é obrigatório.",
				minlength: "O nome de usuário deve conter no mínimo 6 caracteres."
			},
			senha: {
				required: "O campo é obrigatório.",
				minlength: "Sua senha deve conter no mínimo 5 caracteres."
			},
			confirmarSenha: {
				required: "O campo é obrigatório.",
				minlength: "Sua senha deve conter no mínimo 5 caracteres.",
				equalTo: "As senhas não são iguais."
			},
			email: "E-mail inválido.",
			termos: "Por favor, aceite os termos de consentimento."
		},
		errorElement: "em",
		errorPlacement: function ( error, element ) {
			// Add the `help-block` class to the error element
			error.addClass( "help-block" );

			// Add `has-feedback` class to the parent div.form-group
			// in order to add icons to inputs
			element.parents( ".col-sm-7" ).addClass( "has-feedback" );

			if ( element.prop( "type" ) === "checkbox" ) {
				error.insertAfter( element.parent( "label" ) );
			} else {
				error.insertAfter( element );
			}

			// Add the span element, if doesn't exists, and apply the icon classes to it.
			if ( !element.next( "span" )[ 0 ] ) {
				$( "<span class='glyphicon glyphicon-remove form-control-feedback'></span>" ).insertAfter( element );
			}
		},
		success: function ( label, element ) {
			// Add the span element, if doesn't exists, and apply the icon classes to it.
			if ( !$( element ).next( "span" )[ 0 ] ) {
				$( "<span class='glyphicon glyphicon-ok form-control-feedback'></span>" ).insertAfter( $( element ) );
			}
		},
		highlight: function ( element, errorClass, validClass ) {
			$( element ).parents( ".col-sm-7" ).addClass( "has-error" ).removeClass( "has-success" );
			$( element ).next( "span" ).addClass( "glyphicon-remove" ).removeClass( "glyphicon-ok" );
		},
		unhighlight: function ( element, errorClass, validClass ) {
			$( element ).parents( ".col-sm-7" ).addClass( "has-success" ).removeClass( "has-error" );
			$( element ).next( "span" ).addClass( "glyphicon-ok" ).removeClass( "glyphicon-remove" );
		}
	} );
} );