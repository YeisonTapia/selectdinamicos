$( document ).ready(function(){
	$('#seleccionados li').each( function() {
		$(this).addClass('hideselected')
	})
})

$('#seleccionables li').click(function (e) {
	var itemclick =  $(this).data('id')
	$(this).addClass('hideselected')
	$('#seleccionados li[data-id='+itemclick+']').removeClass('hideselected').addClass('showselected')
	$('#searchtxt').val(' ')
	reset()
})

$('#seleccionados li').click(function (e) {
	var itemclick2 =  $(this).data('id')
	$(this).removeClass('showselected').addClass('hideselected')
	$('#seleccionables li[data-id='+itemclick2+']').removeClass('hideselected')
	reset()
})

$('#searchtxt').keyup( function() {
	var searching = $('#searchtxt').val()
	hiderows()
	$('#seleccionables li').each( function () {
		var textitem = $(this).text()
		if (searching.length < 1) {
			reset()
		} else if(textitem.indexOf(searching) != -1 && !$(this).hasClass('hideselected') ){
			$(this).show()
		}
	})
})

function hiderows(){
    $("#seleccionables li").each(function(){
        $(this).hide()
    })
}

function reset(){
    $("#seleccionables li").each(function(){
    	if ( !$(this).hasClass('hideselected') ) {
    		$(this).show()	
    	}
    })
}