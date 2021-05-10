<script>
	import Nav from '../components/Nav.svelte';
	import { onMount } from 'svelte';

	export let segment;

	onMount(() => {
		const body = document.body;
    	const html = document.documentElement;
		const browser_height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
		const regexp = /[^\/(?!\d)]$/g;
		let current_scroll = window.pageYOffset || document.documentElement.scrollTop;
		let isMoving = false;

		window.addEventListener('scroll', () => {
			if(window.location.href.match(regexp)) return;
			let scrollY = window.pageYOffset || document.documentElement.scrollTop;
			const header = document.querySelector("header");
			const main_background_image_height = document.querySelector("#main_background_image").height;

			if(scrollY > current_scroll && !isMoving) {
				isMoving = true;
				header.classList.remove("show_header");
				window.scrollTo({
					top: main_background_image_height,
					behavior: 'smooth'
				});
			}
				
			else if(scrollY < current_scroll && !isMoving) {
				isMoving = true;
				header.classList.add("show_header");
				window.scrollTo({
					top: 0,
					behavior: 'smooth'
				});
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

	.show_header {
		opacity: 0.8;
	}

</style>

<header class="show_header">
	<Nav {segment} id="nav"/>	
</header>

<main>
	<slot></slot>
</main>	