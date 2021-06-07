<script>
	import { onMount } from 'svelte';
	import successkid from 'images/successkid.jpg';
	import background_image from '../images/dreamstime_xxl_123015144.jpg';

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
		}
	});

</script>

<style>

	h1, h3, h4 {
    	transition: color 0.5s;
		margin: 0 auto;
	}

	h1, h3, h4 {
		font-size: 1rem;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	@media (min-width: 880px) {
		h1 {
			font-size: 4rem;
		}

		h3, h4 {
			font-size: 1.5rem;
		}
	}

	@media (max-width: 880px) {
		h1 {
			font-size: 1.5rem;
		}

		h3, h4 {
			font-size: 1rem;
		}
	}

	.wrapper {
		width: 100%;
		height: 200vh;
		
	}

	.wrapper > #dashboard {
		display: block;
		overflow: hidden;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
	}

	.wrapper > #dashboard img {
		position: absolute;
		object-fit: cover;
		width: 100vw;
		height: 100vh; /* The height of dashboard is 100vh */
		opacity: 1;
	}

	.dashboard-h_container {
		position: relative;
		top: 12vh;
		height: 88%;
		padding: 4vh 8vw;
	}

	.dashboard-h_container > h1, h3, h4 {
		text-transform: uppercase;
		position: relative;
		line-height: 1rem;
		animation: slideIn 2s, fadeIn 2s;
		-moz-animation: slideIn 2s, fadeIn 2s; /* Firefox */
		-webkit-animation: slideIn 2s, fadeIn 2s; /* Safari and Chrome */
		-o-animation: slideIn 2s, fadeIn 2s; /* Opera */
		animation-fill-mode: forwards;
	}

	.dashboard-h_container > h1 {
		padding: 2vh 0;
		color: white;
	}

	.dashboard-h_container > h3, h4 {
		padding: 0 2vw;
		color: rgb(250, 124, 145);
	}

	@keyframes slideIn {
		from {
			left: -40vw;
		}
		to {
			left: 0;
		}
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
	<div id="dashboard"> <!-- Try SVG Styling -->
		<img id="main_background_image" class="img_appear" src={background_image} alt="main background of Lee's blog"/> <!-- Try display: list-item to show a series of image -->
		<div class="dashboard-h_container">
			<h1>Welcome to my blog.</h1>
			<h4>Frontend Developer</h4>
			<h3>Leejong Shin</h3>
		</div>
	</div>
</div>

