
const viewBtn = document.querySelector('button[data-view]')
const view_enabled = `<i class="fa-regular fa-eye"></i>`
const view_disabled = `<i class="fa-regular fa-eye-slash"></i>`

localStorage.setItem('view_enabled', JSON.stringify(view_enabled));
localStorage.setItem('view_disabled', JSON.stringify(view_disabled));
let enabled = false
viewBtn.addEventListener('click', (e) => {

	enabled = !enabled
	if (enabled) {
		viewBtn.innerHTML = JSON.parse(localStorage.getItem('view_enabled'))
	}
	if (!enabled) {
		viewBtn.innerHTML = JSON.parse(localStorage.getItem('view_disabled'))
	}

	console.log(enabled)
})

if (enabled) {
	viewBtn.innerHTML = JSON.parse(localStorage.getItem('view_enabled'))
}
if (!enabled) {
	viewBtn.innerHTML = JSON.parse(localStorage.getItem('view_disabled'))
}

let text;
const preview = document.querySelector('.em')
const TextEditor = document.querySelector('.editor')
const markdownEditor = CodeMirror.fromTextArea(TextEditor, {
	mode: "markdown",
	// theme: "darcula",
	lineNumbers: true,
	lineWrapping: true,
	tabMode: "indent",
})

markdownEditor.on("change", function (cm) {
	const converter = new showdown.Converter();
	let md = cm.getValue()
	let html = converter.makeHtml(md);
	localStorage.setItem('html-code', JSON.stringify(html))
	preview.innerHTML = JSON.parse(localStorage.getItem('html-code'))
	if (enabled) {
		preview.innerHTML = JSON.stringify(html)
	}
})


TextEditor.innerHTML = JSON.parse(localStorage.getItem('html-code'))
preview.innerHTML = JSON.parse(localStorage.getItem('html-code'))


