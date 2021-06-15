<script>
	import { onMount } from 'svelte';
	import my_face_dashboard from '../images/my_face_dashboard.jpg';
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

	#main_background_image {
		position: absolute;
		object-fit: cover;
		width: 100vw;
		height: 100vh; /* The height of dashboard is 100vh */
		animation: fadeIn 1s;
	}

	#home_bottom_image {
		width: inherit;
		height: inherit;
		opacity: 0.8;
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

	.dashboard-h_container > h1{
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

	#home-bottom {
		position: relative;
		width: 100vw;
		height: 100vh;
		margin: unset;
		background: linear-gradient(66deg, silver, black);
	}

	#home-bottom-blinker {
		position: absolute;
		width: 100vw;
		height: 100vh;
		background-color: azure;
		animation: blinking 3s infinite;
	}

	@keyframes blinking {
		0% { opacity: 0; }

		50% { opacity: 0.1; }

		100% { opacity: 0; }
	}

	#home-bottom-p {
		position: absolute;
		top: 10%;
		right: 10%;
		margin: unset;
		color: white;
		font-size: 2rem;
		font-style: italic;
		transition: color .5s;
		background: linear-gradient(to right, silver, #8ca6ce);
		background-clip: text;	/* for compatibility */
		-webkit-background-clip: text; /* cross browsing prob */
		-webkit-text-fill-color: transparent; /* cross browsing prob */
	}

	:global(body.dark-mode) #home-bottom {
		background: linear-gradient(66deg, black, silver);
	}

	:global(body.dark-mode) #home-bottom-p {
		top: unset;
		right: unset;
		bottom: 10%;
		left: 10%;
	}

	#home-bottom-grid {
		position: absolute;
		display: grid;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 80vw;
		height: 40vh;
		grid-template-columns: 50% 50%;
	}

	#home-bottom-grid-contract,
	#home-bottom-grid-pic {
		padding: 2rem;
		animation: slider_left 1s forwards;
	}

	#home-bottom-grid-contract {
		display: grid;
		grid-template-rows: repeat(3, 33%);
	}

	#home-bottom-grid-contract > div {
		float: left;
		padding: .5rem 0;
		margin: auto 1rem;
		line-height: 100%;
	}

	#home-bottom-grid-contract > div > img {
		vertical-align: middle;
		margin-right: 2rem;
	}

	#home-bottom-grid-contract > div > img {
		width: 60px;
		height: 60px;
	}

	#home-bottom-grid-pic {
		object-fit: cover;
		width: 17rem;
		height: 17rem;
		margin: auto 0;
	}

	@media (max-width: 550px) {
		#home-bottom-grid-pic {
			width: 14rem;
			height: 14rem;
		}
	}

	@media (max-width: 430px) {
		#home-bottom-grid-pic {
			width: 11rem;
			height: 11rem;
		}
	}

	:global(body.dark-mode) #home-bottom-grid-contract, #home-bottom-grid-pic {
		animation: slider_right 1s forwards;
	}

	@keyframes slider_left {
		from {
			left: -60px;
			opacity: 0.6;
		}
		to {
			left: 0px;
			opacity: 1;
		}
	}

	@keyframes slider_right {
		from {
			left: 60px;
			opacity: 0.6;
		}
		to {
			left: 0;
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
		<img id="main_background_image" src={background_image} alt="main background of Lee's blog"/> <!-- Try display: list-item to show a series of image -->
		<div class="dashboard-h_container">
			<h1>Welcome to my blog.</h1>
			<h4>Frontend Developer</h4>
			<h3>Leejong Shin</h3>
		</div>
	</div>
	<div id="home-bottom">
		<div id="home-bottom-blinker"></div>
		<p id="home-bottom-p">
			<span>
				Developing more and more.
			</span>
		</p>
		<div id="home-bottom-grid">
			<div id="home-bottom-grid-contract">
				<div id="home-bottom-grid-contract-kakaotalk">
					<img src="http://image.kmib.co.kr/online_image/2020/0101/611414110014085644_1.jpg" alt="kakaotalk icon"><span>rker</span>
				</div>
				<div id="home-bottom-grid-contract-naver">
					<img src="http://wiki.hash.kr/images/2/22/%EB%84%A4%EC%9D%B4%EB%B2%84_%EB%A9%94%EC%9D%BC_%EB%A1%9C%EA%B3%A0.png" alt="naver mail logo" /><span>znlspf123@naver.com</span>
				</div>
				<div id="home-bottom-grid-contract-gmail">
					<img src="https://i.pinimg.com/736x/ca/27/f6/ca27f615c790f1af43f2dd564599bf6a.jpg" alt="gmail logo" /><span>spinburgjexer@gmail.com</span>
				</div>
			</div>
			<div id="home-bottom-grid-pic">
				<img id="home_bottom_image" src={my_face_dashboard} alt="my face on dashboard" />
			</div>
		</div>
	</div>
</div>

