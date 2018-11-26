$(function () {

		let $allA = $('.list-group-item a');
  		let $list = $('.list-group');
 		let $addUserButton = $('.btn-success');
 		let $editButton = $('.btn-info');
 		let $table = $('#table');
 		let $form = $('#form');
 		let $inputFN = $('.form-control.fn')
 		let $inputLN = $('.form-control.ln')
 		let $inputs = $('.form-control')
 		console.log($inputs)
	
$table.submit(function( event ) {
  event.preventDefault();
});

$('.btn-info').prop('disabled', true );

//Добавление нового пользователя

$addUserButton.on('click', function (event) {
/*
	let  obj = {
		fn: $inputFN,
		ln: $inputFN
	}
$.each( obj, function( key, value ) {
  if(value.val() == ''){	
		alert ('Some field is empty!');
		value.addClass('empty_field');
	}
});
*/
	if($inputFN.val() == ''){	
		alert ('Some field is empty!');
		$inputFN.addClass('empty_field');
		if($inputLN.val() == ''){	
			$inputLN.addClass('empty_field');
		}else{$inputLN.removeClass('empty_field')}
	}
	else if($inputLN.val() == ''){	
		$inputFN.removeClass('empty_field');
		alert ('Some field is empty!');
		$inputLN.addClass('empty_field');
	}
	else {
		$inputs.removeClass('empty_field');
		$list.append( $( `<li class="list-group-item align-items-center">
	    <span class='fn'> ${$inputFN.val()} </span> <span class='ln'> ${$inputLN.val()} </span>
	    <span class="badge badge-primary badge-pill hide show">Remove</span>
	      
	    </li>` ));
			
		$inputFN.val('');
		$inputLN.val('');}
    //console.log($inputFN.val() +' '+ $inputLN.val());
  } );
	
	$list.on('mouseenter','.list-group-item', function (event) {
       $( this ).find('.show').show();
       $( this ).find('.hide').show();
    }).on('mouseleave','.list-group-item',  function(){
       $( this ).find('.hide').hide('blind', function(){
           $('.show').hide();
       });
    });
	
//Редактирование записи списка
    $list.on('click','.list-group-item', function () {
    	//$inputFN.val() = $(this).val()
		//$inputLN.val() = target.innerHTML;
		//let $textFN = $(this).find('.fn').text();
		//let $textLN = $(this).find('.ln').text();
	
		$('.btn-info').prop('disabled', false);
		$('.btn-success').prop('disabled', true );
		let $contextOfClick = this; 
		let $textFN = $('.fn', $contextOfClick); 
  		let $textLN = $('.ln', $contextOfClick); 
	 	
	 	$inputFN.val($textFN.text());
	 	$inputLN.val($textLN.text());
		$inputFN.focus();
		let $fnField = $(this).find('.fn');
		let $lnField = $(this).find('.ln');
		console.log($fnField, $lnField)
     
	//Сохранение редактирования
	 $editButton.off().on('click', function () {
		
			$('.btn-success').prop('disabled', true );
			$('.btn-info').prop('disabled', false );
			
			//let $textInpLN = $inputLN.val(); 
			//let $textInpFN = $inputFN.val();
			//$fnField.text($inputFN.val());
			//$lnField.text($inputLN.val());
			//$(this).find('.fn').text($('.form-control.fn').val());
			//$(this).find('.ln').text($('.form-control.ln').val());

		if($inputFN.val() == '' || $inputLN.val() == ''){	
			alert ('Some field is empty!');
			$inputs.addClass('empty_field');
			}
		else {		
				$('.fn', $contextOfClick).text($('.form-control.fn').val());
		  		$('.ln', $contextOfClick).text($('.form-control.ln').val());
		  	
			$inputFN.val('');
			$inputLN.val('');

			$('.btn-success').prop('disabled', false);
			$('.btn-info').prop('disabled', true);
			$inputs.removeClass('empty_field');
			}
	});	
});

$list.on('click', '.badge' ,function (event) {
	
   $(this).closest('li').remove();
  });
})
