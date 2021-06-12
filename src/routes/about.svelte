<script>
	import pic_1 from '../images/my_face_1.jpg';
	import pic_2 from '../images/my_face_2.jpg';
	import pic_3 from '../images/my_face_3.jpg';
	import pic_4 from '../images/my_face_4.jpg';

</script>

<style>

	td {
		padding: 0 .5rem 0 .5rem;
	}

	.main-about-wrapper {
		top: 3rem;
		width: 100vw;
		height: calc(100vh - 3rem);
		display: grid;
		grid-template-columns: 50% 50%;
		padding: .5rem 1rem;
		overflow: hidden;
	}

	.main-about-left {
		margin: auto;
		max-width: 600px;
		padding: 0 6rem;
	}

	.main-about-left-image_container {
		position: relative;
		width: 22.5rem;
		height: 22.5rem;
		margin: auto;
	}

	.main-about-left-ul {
		padding: unset;
		list-style: none;
	}
	
	.main-about-left-ul > li {
		list-style: none;
		position: absolute;
		width: 100%;
		height: 100%;
	}

	#first_my_face,
	#second_my_face,
	#third_my_face,
	#fourth_my_face {
		width: inherit;
		height: inherit;
	}

	.main-about-left-li_1 {
		animation: pic_1_animation 20s cubic-bezier(.8, 0, 0, .8) infinite;
	}

	.main-about-left-li_2 {
		animation: pic_2_animation 20s cubic-bezier(.8, 0, 0, .8) infinite;
	}

	.main-about-left-li_3 {
		animation: pic_3_animation 20s cubic-bezier(.8, 0, 0, .8) infinite;
	}

	.main-about-left-li_4 {
		animation: pic_4_animation 20s cubic-bezier(.8, 0, 0, .8) infinite;
	}

	@keyframes pic_1_animation {
		0% {opacity: 1;}
		25% {opacity: 0;}
		50% {opacity: 0;}
		75% {opacity: 0;}
		100% {opacity: 1;}
	}	

	@keyframes pic_2_animation {
		0% {opacity: 0;}
		25% {opacity: 1;}
		50% {opacity: 0;}
		75% {opacity: 0;}
		100% {opacity: 0;}
	}
		
	@keyframes pic_3_animation {
		0% {opacity: 0;}
		25% {opacity: 0;}
		50% {opacity: 1;}
		75% {opacity: 0;}
		100% {opacity: 0;}
	}
		
	@keyframes pic_4_animation {
		0% {opacity: 0;}
		25% {opacity: 0;}
		50% {opacity: 0;}
		75% {opacity: 1;}
		100% {opacity: 0;}
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

	@media (max-width: 550px) {
		.main-about-left-image_container {
			width: 14rem;
			height: 14rem;
		}
	}

	@media (max-width: 430px) {
		.main-about-left-image_container {
			width: 11rem;
			height: 11rem;
		}
	}

	@media (max-width: 880px) {
		.main-about-wrapper {
			padding: unset;
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

	@media (max-width: 1100px) {
		.main-about-left-image_container {
			width: 17rem;
			height: 17rem;
		}
	}

</style>

<svelte:head>
	<title>About</title>
</svelte:head>

<main class="main-about-wrapper">
	<div class="main-about-left">
		<div class="main-about-left-image_container">
			<ul class="main-about-left-ul">
				<li class="main-about-left-li_1">
					<img src="{pic_1}" id="first_my_face" alt="the first of my face">
				</li>
				<li class="main-about-left-li_2">
					<img src="{pic_2}" id="second_my_face" alt="the second of my face">
				</li>
				<li class="main-about-left-li_3">
					<img src="{pic_3}" id="third_my_face" alt="the third of my face">
				</li>
				<li class="main-about-left-li_4">
					<img src="{pic_4}" id="fourth_my_face" alt="the fourth of my face">
				</li>
			</ul>
		</div>
	</div>
	<div class="main-about-right">
		<table border="0">
			<thead>
				<tr><td>Name</td><td>신이종</td></tr>
				<tr><td>English name</td><td>Leejong Shin</td></tr>
				<tr><td>Kakaotalk ID</td><td>rker</td></tr>
				<tr><td>Email</td><td>spinburgjexer@gmail.com</td></tr>
				<tr><td>Birth</td><td>Oct 25, 1995<br />(27 years old in Korea)</td></tr>
			</thead>
			<tbody>
				<tr><td>University</td><td>KNUT, Korea National University of Transportation</td><!--<td rowspan="3"><img src="{KNUT_logo}" alt="KNUT, Korea National University of Transportation" /></td>--></tr>
				<tr><td>Department</td><td>Software</td></tr>
			</tbody>
			<tfoot>
				<td>
					Frontend Developer<br>
					The President of Web Development Club - f(x)
				</td>
			</tfoot>
		</table>
	</div>
	<span class="line"></span>
</main>