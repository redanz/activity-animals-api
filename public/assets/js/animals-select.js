function getActors(){
	$('div').empty();

	$.ajax({
		url: '/actors.json',
		method: 'GET'
	}).then(function(actors){
		for (var actorIndex in actors){
			// console.log(actorIndex);
			// console.log(actors[actorIndex]);
			// console.log(actors);

			var p = $('<p>'); // <p></p>

			//one way
				// p.text(JSON.stringify(actors[actorIndex]))

			//another way
				// p.text("id: " + actors[actorIndex].id + ", actor name: " + actors[actorIndex].actor_name)

			//another way
				p.text(`id: ${actors[actorIndex].id}, actor name: ${actors[actorIndex].actor_name}`)

				var bt = $('<button>'); //<button></button>
				bt.attr('class', 'delete');
				
				bt.text('delete'); //<button>delete</button>
				bt.attr('data-id', actors[actorIndex].id)
				//<button data-id="4">delete</button>

				p.append(bt);




			$('div').prepend(p);
		}
	})
}
