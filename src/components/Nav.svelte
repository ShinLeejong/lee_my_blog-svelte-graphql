<script>
	import { onMount } from 'svelte';
	export let segment;

	let onDarkmodeClick;
	let onNavClick;
	let isDarkMode;
	let user;

	onMount(() => {
		const body = document.body;
    	const html = document.documentElement;

		// Darkmode
		isDarkMode = localStorage.getItem('isDarkMode') || false;
		if (isDarkMode === "true") window.document.body.classList.add('dark-mode');
		onDarkmodeClick = () => {
        	window.document.body.classList.toggle('dark-mode');
			isDarkMode = window.document.body.classList.contains('dark-mode') ? true : false;
			localStorage.setItem('isDarkMode', isDarkMode);
    	}
		onNavClick = () => {
			const header = document.querySelector("header");
			const back_to_top_btn = document.querySelector("#top-btn");
			header.classList.add("show_header");
			back_to_top_btn.style = "display: none;";	
		}
	});

</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255, 62, 0, 0.1);
		font-weight: 600;
		padding: 0 1em;
	}

	ul {
		position: relative;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	ul > li {
		padding: 0 0.5rem;
	}

	li {
		float: left;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(248, 117, 73);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
    	transition: color 0.5s;
	}

	button {
		z-index: 800;
		position: fixed;
		right: 0;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		background-color: black;
		color: white;
		border: none;
		border-radius: 6px;
		padding: 0.5rem;
		margin: 0.5rem;
		transition: background-color 0.5s;
	}

	nav > span > p {
		position: fixed;
		right: 8rem;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	:global(body.dark-mode) {
		background-color: #1f2023;
		color: #ddd;
	}

	:global(body.dark-mode) button {
		background-color: white;
		color: black;
	}
	
	:global(body.dark-mode) nav > span > ul > li {
		color: white;
	}

</style>

<nav>
	<span>
		<p>Welcome, {user === undefined ? 'Guest' : user}!</p>
		<button on:click={onDarkmodeClick}>Dark Mode</button>
		<ul>
			<li><a aria-current="{segment === undefined ? 'page' : undefined}" href="." on:click="{onNavClick}">home</a></li>
			<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about" on:click="{onNavClick}">about</a></li>

			<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
				the blog data when we hover over the link or tap it on a touchscreen -->
			<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog" on:click="{onNavClick}">blog</a></li>
			<li><a rel=prefetch aria-current="{segment === 'diary' ? 'page' : undefined}" href="diary" on:click="{onNavClick}">diary</a></li>
		</ul>
	</span>
</nav>