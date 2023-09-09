<script lang="ts">
	import type {PageData} from "./$types";
	import { goto } from '$app/navigation';

	export let data: PageData;

	async function getPost() {
		return await data;
	}
</script>
<svelte:head>
	<title>eriton eh foda</title>
</svelte:head>


{#await getPost()}
	<h1 class="loading">loading...</h1>
	{:then data}
		<div class="posts">
			{#each data.post as post}
			<div class="post">
				<h1 class="title">{post.title}</h1>
				<p class="author">{post.author.name}</p>
				<h2 class="sub-title">{post.content}</h2>
				<button class="button" on:click={() => goto(`/post/${post.id}`)}>ler mais...</button>
			</div>
			{/each}	
		</div>

	{:catch err}
	<h1 class="error">ocorreu algum erro, {err}</h1>
{/await}

<style type="text/css">
.loading {
		color: orange;
		text-align: center;
}
.posts{
	display: flex;
	flex-direction: column;
	max-width: 800px;
	margin:  60px auto;
	gap: 20px;
	align-items: center;
	justify-content: center;
}
.post{
	max-width: 400px;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 10px 0px;
	padding: 10px;	
}
.title{
	text-align: center;
}

.sub-title{
	font-weight: 100;
	font-size: 1rem;
	color: #BEB7B7;

}
.button {
	border: 0;
	width: 100%;
	height: 40px;
	margin-top: 20px;
	background: #188BF5;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
	text-transform: uppercase;
}
</style>