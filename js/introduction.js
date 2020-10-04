$(document).ready(function () {
	$('[data-toggle="tooltip"]').tooltip();
	var div = document.getElementById('family_list');
	var total_members = 9;

	for (var i = 0; i < total_members; i++) {
		//adding the HTML needed for the products card to the HTML
		div.innerHTML = div.innerHTML + `
		<div class="col mb-4">
		<div class="card">
			<img src="${family_list[i].image}" class="card-img-top med-logo">
			<div class="card-body ">
				<h5 class="card-title ">${family_list[i].name}</h5>
				<p class="card-text content">${family_list[i].relation}</p>
			</div>
		</div>
	</div>
	  `
	}

});
