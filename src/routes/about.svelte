<script>
	import myface from '../images/my_face.jpg';
	import KNUT_logo from '../images/KNUT_logo.jpg';
</script>

<style>

	main {
		top: 3rem;
		width: 100vw;
		height: 100vh;
		display: grid;
		grid-template-columns: 50% 50%;
		padding: .5rem 1rem;
		overflow: hidden;
	}

	main .left {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 6rem;
	}

	main > .left img {
		width: 280px;
		height: 280px;
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

	main > .right {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 0 6rem;
		width: 65%;
	}

	main > .right > table > thead::after, tbody::after {
		position: relative;
		display: block;
		content: "";
		top: 1rem;
		width: 100%;
		height: 1px;
	}

	main > .right > table > thead::after {
		background-color: pink;
	}

	main > .right > table > tbody::after {
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

		main > .right {
			display: flex;
			width: 100%;
			height: 100%;
			justify-content: center;
			align-items: flex-start;
			padding: .5rem 0;
		}

		main > .right > table {
			width: 80%;
		}
	}

</style>

<svelte:head>
	<title>About</title>
</svelte:head>

<main class="about_wrapper">
	<div class="left">
		<img src="{myface}" alt="Lee's Handsome Face. He was young. He was...">
	</div>
	<div class="right">
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