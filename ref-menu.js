const bodyDoc = document.querySelector("body");

let docTitle = document.title;
const str = docTitle.toLowerCase().split(" ").join("-");
const url = `https://devayoola.github.io/${str}`;

const markup = `
	<style>
		.ref {
			font-family: Segoe UI;
			margin: 25px 0 0 20px;
		}
		
		.ref button {
			background-color: whitesmoke;
			color: darkblue;
			border: none;
			border-radius: 5px;
			font-size: 20px;
			font-weight: 600;
			padding: 2px 12px;
		}
		
		.ref ul {
			list-style-type: none;
			margin: 5px 0 0 0;
			padding: 0;
		}
		
		.dropdown-content {
			display: none;
			position: absolute;
			background-color: whitesmoke;
			box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
			border-radius: 3px;
			z-index: 1;
		}
		
		.dropdown-content li a {
			color: #254370;
			padding: 10px 12px;
			text-decoration: none;
			display: block;
			text-align: left;
		}
		
		.dropdown-content li a:hover {
			background-color: #254370;
			color: whitesmoke;
		}

		.show {
			display: block;
		}
	</style>
	<section class="ref">
		<button class="dropbtn"><img src="caret-down-fill.svg" /></button>
		<ul class="dropdown-content" id="dropdownContent">
			<li><a href="${url}">View code</a></li>
			<li><a href="https://devayoola.github.io/">Home</a></li>
		</ul>
	</section>`;

bodyDoc.insertAdjacentHTML("beforebegin", markup);

const refMenu = document.querySelector(".ref");
let drop = document.querySelector("#dropdownContent");

refMenu.addEventListener("click", () => {
	drop.classList.toggle("show");
});
