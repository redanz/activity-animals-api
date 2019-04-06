$('#update_actor').submit(function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var ci = $( "#update_actor input[name='actor_id']" ).val();

    var cn = $( "#update_actor input[name='actor_name']" ).val();

	$.ajax({
		url: '/actors-update/' + ci + '?_method=PUT',
		method: 'POST',
		data: {actor_name : cn}
	}).then(function(message){
		getActors();
	});

});