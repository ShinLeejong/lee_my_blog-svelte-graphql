<script>
	import { onMount } from 'svelte';
	export let segment;

	let onDarkmodeClick,
		onNavClick,
		isDarkMode,
	 	user,
		unfold_and_fold_nav;

	onMount(() => {
		const isDesktop = navigator.userAgent.match(/[^(iPad)|(iPhone)|(iPod)|(android)|(webOS)]/i),
			header_ul = document.querySelector(".header_nav_ul"),
			header_about = document.querySelector(".header_nav_ul_li_about"),
			header_blog = document.querySelector(".header_nav_ul_li_blog"),
			header_diary = document.querySelector(".header_nav_ul_li_diary"),
			header_mail = document.querySelector(".header_nav_ul_li_mail"),
			unfoldBtn = document.querySelector("#unfoldBtn"),
			foldBtn = document.querySelector("#foldBtn");

		// Detect whether the browser is from desktop, and if it is, fill in the nav_p_tag
		if(isDesktop) {
			const nav_p_tag = document.querySelector(".nav_p");
			const currentUser = user || "Guest";
			nav_p_tag.innerHTML = "Welcome, " + currentUser + "!";
		}

		// Darkmode
		isDarkMode = localStorage.getItem('isDarkMode') || false;
		if (isDarkMode === "true") window.document.body.classList.add('dark-mode');
		onDarkmodeClick = () => {
        	window.document.body.classList.toggle('dark-mode');
			isDarkMode = window.document.body.classList.contains('dark-mode') ? true : false;
			localStorage.setItem('isDarkMode', isDarkMode);
    	}

		// Initialize the status of header and back_to_top_btn to very first state
		onNavClick = () => {
			const header = document.querySelector("header");
			const back_to_top_btn = document.querySelector("#top-btn");
			header.classList.add("show_header");
			back_to_top_btn.style = "display: none;";	
		}
	
		// unfoldBtn and foldBtn clicked
		unfold_and_fold_nav = () => {
			header_ul.classList.toggle("header_nav_unfolded");
			header_about.classList.toggle("show");
			header_blog.classList.toggle("show");
			header_diary.classList.toggle("show");
			header_mail.classList.toggle("show");
			unfoldBtn.classList.toggle("show");
			foldBtn.classList.toggle("show");
		}
	});

</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255, 62, 0, 0.1);
		font-weight: 600;
		padding: 0 1em;
	}

	.header_nav_ul {
		display: flex;
		position: relative;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	#unfoldBtn {
		z-index: 99;
	}

	@media (max-width: 680px) {

		nav {
			padding: unset;
		}

		.header_nav_ul {
			width: 100vw;
			max-height: 3.5rem;
			flex-direction: column;
			align-items: center;
    		transition: max-height .8s ease-out;
		}

		.header_nav_ul:hover,
		.header_nav_unfolded {
			max-height: 16rem;
		}

		.nav_p {
			display: none;
		}

		#unfoldBtn {
			display: block;
		}

		.header_nav_ul_li_about,
		.header_nav_ul_li_blog,
		.header_nav_ul_li_diary,
		.header_nav_ul_li_mail {
			display: none;
		}
	}

	.header_nav_ul > li {
		padding: 0 0.5rem;
	}

	li {
		float: left;
	}

	/* clearfix */
	.header_nav_ul::after {
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
		z-index: 9;
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

	#unfoldBtn,
	#foldBtn {
		left: 0;
		right: unset;
	}

	.show {
		display: block;
	}

	.hidden {
		display: none;
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

<form action="POST" style="display: none;" class="header_nav_unfolded"></form><!-- to ignore .header_nav_unfolded css selector from being purged by config. I'll make it optimized but this is for a temporary measure -->
<nav>
	<span>
		<p class="nav_p"></p>
		<button id="darkModeBtn" class="show" on:click={onDarkmodeClick}>Dark Mode</button>
		<button id="unfoldBtn" class="hidden" on:click={unfold_and_fold_nav}>▼</button>
		<button id="foldBtn" class="hidden" on:click={unfold_and_fold_nav}>▲</button>
		<ul class="header_nav_ul">
			<li class="header_nav_ul_li_home"><a aria-current="{segment === undefined ? 'page' : undefined}" href="." on:click="{onNavClick}">home</a></li>
			<li class="header_nav_ul_li_about"><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about" on:click="{onNavClick}">about</a></li>

			<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
				the blog data when we hover over the link or tap it on a touchscreen -->
			<li class="header_nav_ul_li_blog"><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog" on:click="{onNavClick}">blog</a></li>
			<li class="header_nav_ul_li_diary"><a rel=prefetch aria-current="{segment === 'diary' ? 'page' : undefined}" href="diary" on:click="{onNavClick}">diary</a></li>
			<li class="header_nav_ul_li_mail"><a rel=prefetch aria-current="{segment === 'mail' ? 'page' : undefined}" href="mail" on:click="{onNavClick}">Mail to Lee</a></li>
		</ul>
	</span>
</nav>