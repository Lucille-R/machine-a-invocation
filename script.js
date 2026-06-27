// Etape 3 : Réagir au clic

const formulaire = document.getElementById('invocation');

formulaire.addEventListener('submit', (event)  => {
	event.preventDefault();

	const prenom = document.getElementById('prenom').value;
	const creature = document.getElementById('creature').value;
	const image = document.getElementById('imageCreature');
	const elementMessage = document.getElementById('message');

	let message = "";
	let imageSource = ""

	if (creature === "le Chat-Octo") {
		imageSource = "chat.jpg";
	} else if (creature ==="le Dragon-Debug") {
		imageSource = "dragon.jpg";
	} else if (creature === "la Licorne-CSS"){
		imageSource = "licorne.jpg";
	} else if (creature ==="le Renard-Refacto") {
		imageSource = "renard.jpg";
	}

	message = `${prenom}, ${creature} a entendu ton appel et te suivra tout le Bloc 1 !`;
	elementMessage.textContent = message;
	image.src = imageSource;
	document.getElementById('formulaire').classList.add('cache');
	document.getElementById('resultat').classList.remove('cache');
})

