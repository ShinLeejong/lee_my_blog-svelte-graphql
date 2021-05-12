<script>
	import Nav from '../components/Nav.svelte';
	import { onMount } from 'svelte';

	export let segment;
	let onClick;

	onMount(() => {
		const body = document.body;
    	const html = document.documentElement;
		const browser_height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
		const regexp = /\/(?!\d)$/g;
		let current_scroll = window.pageYOffset || document.documentElement.scrollTop;
		let isMoving = false;

		window.addEventListener('scroll', () => {
			let isMain = window.location.href.match(regexp);
			if(!isMain) return;
			let scrollY = window.pageYOffset || document.documentElement.scrollTop;
			const header = document.querySelector("header");
			const main_background_image_height = document.querySelector("#main_background_image").height;
			const back_to_top_btn = document.querySelector("#top-btn");

			if(scrollY !== 0) back_to_top_btn.style = "display: flex;";
			else back_to_top_btn.style = "display: none;";

			onClick = () => {
				isMoving = true;
				header.classList.add("show_header");			// 27 line ~ 47 line, needs optimization. DRY
				window.scrollTo({
					top: 0,
					behavior: 'smooth'
				});
			};

			if(scrollY > current_scroll && !isMoving) {
				isMoving = true;
				header.classList.remove("show_header");
				window.scrollTo({
					top: main_background_image_height,
					behavior: 'smooth'
				});
			}
				
			else if(scrollY < current_scroll && !isMoving) {
				onClick();
			}

			if(scrollY === 0 || scrollY === main_background_image_height || scrollY === browser_height) isMoving = false;
			current_scroll = scrollY;
		});
	});

</script>

<style>

	header {
		z-index: 500;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		opacity: 0.6;
		background: hotpink;
		transition: opacity 0.2s ease-in-out;
		line-height: 100%;
	}

	main {
		position: relative;
		width: 100vw;
		height: 100%;
		margin: 0;
		box-sizing: border-box;
		transition: background-color 1s ease-in-out;
	}

	button {
		-webkit-appearance: button;
		overflow: visible;
		text-transform: none;
		color: inherit;
		font: inherit;
		margin: 0;
		vertical-align: middle;
		box-sizing: border-box;
	}

	.show_header {
		opacity: 0.8;
	}

	#top-btn {
		position: fixed;
		right: 2vw;
		bottom: 4vh;
		width: 2vw;
		height: 4vh;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 5000;
		background-color: #c6f1a9;
		border: 1px solid #b4c568;
		animation: fadeIn 1s;
		-moz-animation: fadeIn 1s; /* Firefox */
		-webkit-animation: fadeIn 1s; /* Safari and Chrome */
		-o-animation: fadeIn 1s; /* Opera */
		animation-fill-mode: forwards;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@-moz-keyframes fadeIn { /* Firefox */
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@-webkit-keyframes fadeIn { /* Safari and Chrome */
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@-o-keyframes fadeIn { /* Opera */
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	#top-btn:hover {
		background-color: #aace92;
		border: 1px solid #585891;
	}

	#top-btn::after {
		content: 'Up';
		font-size: small;
		position: absolute;
		display: flex;
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;
	}

	:global(body.dark-mode) #top-btn {
		background-color: rgb(48, 50, 51);
	}

	:global(body.dark-mode) #top-btn:hover {
		background-color: rgb(80, 74, 80);
	}

</style>

<header class="show_header">	
	<Nav {segment} id="nav"/>	
</header>

<main>
	<button title="back to top" id="top-btn" class="hide_top-btn" style="display: none;" on:click="{onClick}"></button>
	<slot></slot>
</main>	