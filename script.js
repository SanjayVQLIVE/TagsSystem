let tagsHandler = (() => {
	const tagsInput = document.getElementById('tagsField');
	const tagsBtn = document.getElementById('getTags');
	const ul = document.getElementById('ul');
	const tagsRemover = document.getElementsByClassName('removeTag');
	let tagsContainer = [];

	let getTags = () => {
		if(tagsInput.value) {
			tagsInput.classList.remove('hasError');
			let tags = tagsInput.value.split(",");
			let pure_tags = tags.map((x) => x.trim());
			let validTags = pure_tags.filter((elemnt) => {
				if(elemnt !== '') {
					return elemnt;
				}
			});
			tagsContainer = [...validTags];
		} else {
			tagsInput.classList.add('hasError');
		}
	}

	let showTags = () => {
		if(tagsContainer.length > 0) {
			tagsContainer.forEach((element) => {
				let container = document.createElement('LI');
				container.innerHTML = '<span class="removeTag">&#10006;&nbsp;</span>'+element;
				container.className = 'tags';
				ul.appendChild(container);
			});
			tagsContainer = [];
			tagsInput.value = '';
		}
	}

	tagsInput.addEventListener('input', getTags);
	tagsBtn.addEventListener('click', showTags);


	setInterval(function() {
		for(let i = 0; i < tagsRemover.length; i = i + 1) {
			if(tagsRemover[i]) {
				tagsRemover[i].onclick = () => {
					const tagsElemnts = document.getElementsByClassName('tags');
					tagsElemnts[i].parentNode.removeChild(tagsElemnts[i]);
				}
			}
		}
	}, 1000);
})();