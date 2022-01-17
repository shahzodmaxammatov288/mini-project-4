
// Selectors **************

const panels = document.querySelectorAll('.panel');
const loader = document.querySelector('.loader');

// Event Listeners ************

window.addEventListener('DOMContentLoaded', loaderFunction);

panels.forEach((panel) =>  panel.addEventListener('click', activePanel))

// Functions *************** 

// Loader Function
function loaderFunction() {
	setTimeout(() => {
		loader.classList.add('hidden');
	}, 1200);
}

// Panel Function
function activePanel() {
  removePanels();
  this.classList.add('active');
}

function removePanels() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  })
}

