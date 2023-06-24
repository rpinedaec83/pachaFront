const container = document.getElementById('resultados');
const graficarResultado = (text, clase = '') => {
	container.innerHTML += `<p class="${clase}">${text}</p>`;
};
const resetResultado = () => {
	container.innerHTML = '';
};
