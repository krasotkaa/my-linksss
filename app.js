// Toggle Component

const toggleButton = document.querySelector('.switch')
const htmlElement = document.documentElement

function changeTheme() {
	if (toggleButton.getAttribute('data-js-theme') === 'light-theme') {
		htmlElement.classList.remove('light-theme')
		htmlElement.classList.add('dark-theme')
		toggleButton.setAttribute('data-js-theme', 'dark-theme')
	} else {
		htmlElement.classList.remove('dark-theme')
		htmlElement.classList.add('light-theme')
		toggleButton.setAttribute('data-js-theme', 'light-theme')
	}
}

toggleButton.addEventListener('click', changeTheme)

