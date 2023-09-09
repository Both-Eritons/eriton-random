import type { PageServerLoad } from './$types';

export async function load<PageServerLoad>() {
	const res = await fetch("http://localhost:5173/api/", {method: "GET"})
	const data = await res.json();
	return {
		post: data.posts
	}
}