<script>
	import { onMount } from 'svelte';
	import pic_1 from '../images/my_face_1.jpg';
	import pic_2 from '../images/my_face_2.jpg';
	import pic_3 from '../images/my_face_3.jpg';
	import pic_4 from '../images/my_face_4.jpg';

	onMount(() => {
		const li_1 = document.querySelector(".main-about-left-picture-1"),
			li_2 = document.querySelector(".main-about-left-picture-2"),
			li_3 = document.querySelector(".main-about-left-picture-3"),
			li_4 = document.querySelector(".main-about-left-picture-4");

		let now = 1;

		const changePic = () => { // opacity 작업을 통해 animation 구현하자
			switch(now) {
				case 4:
					li_3.style.cssText = "z-index: 9; display: none;";
					li_4.style.cssText = "z-index: 99; display: list-item;";
					now = 1;
					break;
				case 3:
					li_2.style.cssText = "z-index: 9; display: none;";
					li_3.style.cssText = "z-index: 99; display: list-item;";
					now++;
					break;
				case 2:
					li_1.style.cssText = "z-index: 9; display: none;";
					li_2.style.cssText = "z-index: 99; display: list-item;";
					now++;
					break;
				case 1:
					li_4.style.cssText = "z-index: 9; display: none;";
					li_1.style.cssText = "z-index: 99; display: list-item;";
					now++;
					break;
				default:
					break;
			}
		};

		setInterval(changePic, 3000);
	});

</script>

<style>

	.main-about-wrapper {
		top: 3rem;
		width: 100vw;
		height: 100vh;
		display: grid;
		grid-template-columns: 50% 50%;
		padding: .5rem 1rem;
		overflow: hidden;
	}

	.main-about-left {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 6rem;
	}

	.main-about-left img {
		width: 280px;
		height: 280px;
	}

	.main-about-left-picture-ul {
		list-style: none;
	}

	@media (min-width: 1560px) {
		main > .left img {
			width: 326px;
			height: 326px;
		}
	}

	@media (max-width: 480px) {
		main > .left img {
			width: 180px;
			height: 180px;
		}
	}

	.main-about-right {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 0 6rem;
		width: 65%;
	}

	.main-about-right > table > thead::after, tbody::after {
		position: relative;
		display: block;
		content: "";
		top: 1rem;
		width: 100%;
		height: 1px;
	}

	.main-about-right > table > thead::after {
		background-color: pink;
	}

	.main-about-right > table > tbody::after {
		background-color: blueviolet;
	}

	table > * {
		display: inline-block;
		padding: 1rem 0 1rem 0;
		width: 100%;
	}

	tbody > tr:first-child > td:last-child {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.line {		
		position: absolute;
		display: block;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 1px;
		height: 40vh;
		background-color: chocolate;
	}

	:global(body.dark-mode) .line {
		background-color: bisque;
	}

	@media (max-width: 880px) {
		main {
			grid-template-columns: unset;
			grid-template-rows: 50% 50%;
		}

		.line {
			width: 70%;
			height: 1px;
		}

		.main-about-right {
			display: flex;
			width: 100%;
			height: 100%;
			justify-content: center;
			align-items: flex-start;
			padding: .5rem 0;
		}

		.main-about-right > table {
			width: 80%;
		}
	}

</style>

<svelte:head>
	<title>About</title>
</svelte:head>

<main class="main-about-wrapper">
	<div class="main-about-left">
		<ul class="main-about-left-picture-ul">
			<li class="main-about-left-picture-1" style="z-index: 99; display: list-item;">
				<img src={pic_1} id="pic_1" alt="first pic, Lee's face. regularly changing per 3 seconds">
			</li>
			<li class="main-about-left-picture-2" style="z-index: 9; display: none;">
				<img src={pic_2} id="pic_2" alt="second pic, Lee's face. regularly changing per 3 seconds">
			</li>
			<li class="main-about-left-picture-3" style="z-index: 9; display: none;">
				<img src={pic_3} id="pic_3" alt="third pic, Lee's face. regularly changing per 3 seconds">
			</li>
			<li class="main-about-left-picture-4" style="z-index: 9; display: none;">
				<img src={pic_4} id="pic_4" alt="fourth pic, Lee's face. regularly changing per 3 seconds">
			</li>
		</ul>
	</div>
	<div class="main-about-right">
		<table border="0">
			<thead>
				<tr><td style="padding: 0 .5rem 0 .5rem">Name</td><td>신이종</td></tr>
				<tr><td style="padding: 0 .5rem 0 .5rem">English name</td><td>Leejong Shin</td></tr>
				<tr><td style="padding: 0 .5rem 0 .5rem">Kakaotalk ID</td><td>rker</td></tr>
				<tr><td style="padding: 0 .5rem 0 .5rem">Birth</td><td>Oct 25, 1995<br />(27 years old in Korea)</td></tr>
			</thead>
			<tbody>
				<tr><td style="padding: 0 .5rem 0 .5rem">University</td><td>KNUT, Korea National University of Transportation</td><!--<td rowspan="3"><img src="{KNUT_logo}" alt="KNUT, Korea National University of Transportation" /></td>--></tr>
				<tr><td style="padding: 0 .5rem 0 .5rem">Department</td><td>Software</td></tr>
			</tbody>
			<tfoot>
				<td style="padding: 0 .5rem 0 .5rem">
					Frontend Developer<br>
					The President of Web Development Club - f(x)
				</td>
			</tfoot>
		</table>
	</div>
	<span class="line"></span>
</main>