$('#insert_actor').submit(function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.
    var cn = $( "#insert_actor input[name='actor_name']" ).val();

	$.ajax({
		url: '/actors-insert',
		method: 'POST',
		data: {actor_name : cn}
	}).then(function(message){
		getActors();
	});

});