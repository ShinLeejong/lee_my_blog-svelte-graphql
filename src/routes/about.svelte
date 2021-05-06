<script>
	import myface from '../images/my_face.jpg';
</script>

<style>

	main {
		top: 3rem;
		height: 100vh;
		background: linear-gradient(#f0efef, #f9faedee);
		display: grid;
		grid-template-columns: 50% 50%;
		padding: .5rem 1rem;
	}

	main .left {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding: 0 6rem;
	}

	.center_vertical_line {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		content: "";
		width: 1px;
		height: 24rem;
		background: linear-gradient(0.25turn, #ebf8e1c2, #ebf8e1, #ebf8e1c2);
	}

	img {
		max-width: 20rem;
	}

	main .right {
		display: flex;
		justify-content: start;
		align-items: center;
		padding: 0 6rem;
	}

	main .right > ul {
		list-style: none;
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
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
			<li>5</li>
			<li>6</li>
		</ul>
	</div>
	<div class="center_vertical_line">
	</div>
</main>