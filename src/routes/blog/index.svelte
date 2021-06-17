<script context="module">
	export function preload() {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
	#blog-wrapper {
		display: grid;
		grid-template-columns: 20% 80%;
		top: 3vh;
		width: 100vw;
		height: 97vh;
		padding: 5rem 0;
	}

	#blog-left {
		left: -20%;
		width: 100%;
		height: 100%;
		padding: 0 1rem;
	}

	#blog-right {
		width: 100%;
		height: 100%;
		padding: 0 1rem;
	}

</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div id="blog-wrapper">
	<div id="blog-left"></div>
	<div id="blog-right">
		{#each posts as post}
			<!-- we're using the non-standard `rel=prefetch` attribute to
					tell Sapper to load the data for the page as soon as
					the user hovers over the link or taps it, instead of
					waiting for the 'click' event -->
			<li><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></li>
		{/each}		
	</div>
</div>
<button id="blog-btn-create_post">

</button>
<button id="blog-btn-up"> <!-- DRY -->

</button>
<ul>

</ul>
