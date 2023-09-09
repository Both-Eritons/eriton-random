<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;

	let message: string;


	let email: string;
	let title: string;
	let content: string;


	async function createPost(email: string, title: string, content: string) {
		const res = await fetch("http://localhost:5173/api/create", {
			method: "POST",
			headers: {
      			'Accept': 'application/json',
      			'Content-Type': 'application/json'
    		},
			body: JSON.stringify({
				email: email,
				title: title,
				content: content,
			}),
		})

		const data = await res.json();

		data?.message ? message = data?.message : message = data.success
	}
</script>


<div class="form">
	<input type="text" bind:value={email}  class="input" name="email" placeholder="email..."><br/>
	<input type="text" bind:value={title} class="input" name="title" placeholder="title..."><br/>
	<input type="text" bind:value={content} class="input" name="content" placeholder="content..."><br/>
	<button class="button" on:click={() => createPost(email, title, content)}>criar post</button>
</div>
<h1>email: {email}</h1>
<h1>title: {title}</h1>
<h1>content: {content}</h1>
<h1>msg: {message}</h1>
