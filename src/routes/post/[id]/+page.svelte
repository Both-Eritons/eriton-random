<script lang="ts">
	import type {PageData} from "./$types";

	export let data: PageData;

	async function getPost() {
		const ctx = await data;
		return ctx;
	}
</script>

{#await getPost()}

	<h1 class="loading">Loading...</h1>
	{:then data}
		{#if data.error}
		 	<h1 class="error">ocorreu algum erro, {data.error}</h1>
		 {:else}

		 <div class="container">
			<h1 class="title">{data?.post?.post[0]?.title}</h1>
			<h2 class="sub-title">{data?.post?.post[0]?.content}</h2>
			<p class="user">postado por: {data?.post?.post[0]?.author.name}</p>
			<p class="email">email: {data?.post?.post[0]?.author.email}</p>
		</div>

		{/if}
	{:catch err}
		<h1 class="error">ocorreu algum erro, {err} {data?.message}</h1>
{/await}



<style type="text/css">
:global(*) {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.loading {
	color: orange;
	text-align: center;
}
.error{
	text-align: center;
	color:  red;
}
</style>