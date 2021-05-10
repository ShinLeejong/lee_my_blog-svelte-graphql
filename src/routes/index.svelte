<script>
	import { onMount } from 'svelte';
	import successkid from 'images/successkid.jpg';
	import background_image from './dashboard/images/dreamstime_xxl_123015144.jpg';

	let onKeyDown;

	onMount(() => { // to use DOM - window and etcs as I degit-ed this rollup from github - svelte
		// Prevent the mobile users from zooming in and out
		let lastTouchEnd = 0;

		document.documentElement.addEventListener('touchstart', e => {
			if (e.touches.length > 1) e.preventDefault(); 
		}, false);

		document.documentElement.addEventListener('touchend', e => {
			let now = (new Date()).getTime();
			if (now - lastTouchEnd <= 300) e.preventDefault(); 
				lastTouchEnd = now; 
		}, false);
		
		// Keydown
		onKeyDown = e => {
			let key = e.key;
			let keyCode = e.keyCode;
			console.log(key, keyCode);
		}
	});

</script>

<style>

	h1, h2, figure, p {
    	transition: color 0.5s;
		text-align: center;
		margin: 0 auto;
	}

	h1, h2 {
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
		height: 200vh;
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
		height: 100%; /* The height of dashboard is 100vh */
		opacity: 1;
	}

	.wrapper > .contents {
		width: 100%;
		height: 100vh;
	}

	.wrapper > .contents img {
		max-width: 20rem;
	}

	.wrapper > #dashboard > h1 {
		text-transform: uppercase;
		position: absolute;
		top: 20vh;
		left: 10%;
		color: white;
		display: inline-block;
		animation: fadeIn 2s;
		-moz-animation: fadeIn 2s; /* Firefox */
		-webkit-animation: fadeIn 2s; /* Safari and Chrome */
		-o-animation: fadeIn 2s; /* Opera */
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

</style>

<svelte:window on:keydown={onKeyDown} />

<svelte:head>
	<title>Lee's Blog</title>
</svelte:head>

<div class="wrapper">
	<div id="dashboard">
		<img id="main_background_image" class="img_appear" src={background_image} alt="main background of Lee's blog"/>
		<h1>Welcome to my blog.</h1>
	</div>
	<div class="contents" name="contents">
		<h2>Great success!</h2>

		<figure>
			<img alt="Success Kid" src="{successkid}">
			<figcaption>Have fun with Sapper!</figcaption>
		</figure>

		<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>		
	</div>
</div>

