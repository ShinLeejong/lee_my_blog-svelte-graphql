<script>
	import { onMount } from 'svelte';
	import successkid from 'images/successkid.jpg';
	import background from '../images/starry-night-sky.jpg';

	onMount(() => {
		let lastTouchEnd = 0; 

		document.documentElement.addEventListener('touchstart', e => {
			if (e.touches.length > 1) e.preventDefault(); 
		}, false);

		document.documentElement.addEventListener('touchend', e => {
			let now = (new Date()).getTime();
			if (now - lastTouchEnd <= 300) e.preventDefault(); 
				lastTouchEnd = now; 
		}, false);
	});
	
</script>

<style>

	html {
		font-size: 20px;
	}

	body {
		font-size: 1rem;
		padding-top: 2.85rem;
	}

	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 1rem;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	p {
		margin: 1rem auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4rem;
		}
	}

	.wrapper {
		width: 100%;
	}

	.wrapper > #dashboard {
		overflow: hidden;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
	}

	.wrapper > #dashboard img {
		object-fit: cover;
		width: 100%;
		height: 100%;
		opacity: 0.9;
	}

	.wrapper > .contents {
		width: 100%;
		height: 100vh;
		padding: 3rem 0;
	}

	.wrapper > .contents img {
		max-width: 20rem;
	}

</style>

<svelte:head>
	<title>Lee's Blog</title>
</svelte:head>

<div class="wrapper">
	<div id="dashboard">
		<img id="main_background_image" src="{background}" alt="main background of Lee's blog"/>
	</div>
	<div class="contents" name="contents">
		<h1>Great success!</h1>

		<figure>
			<img alt="Success Kid" src="{successkid}">
			<figcaption>Have fun with Sapper!</figcaption>
		</figure>

		<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>		
	</div>
</div>

