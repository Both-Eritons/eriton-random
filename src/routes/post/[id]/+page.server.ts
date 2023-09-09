import type { PageServerLoad } from './$types';

export async function load<PageServerLoad>({ params }) {

	const res = await fetch("http://localhost:5173/api/post?"+new URLSearchParams({
		"post-id": params.id
	}).toString(), {method: "GET"})

	const data = await res.json();
	return {
		post: data,
		error: data?.message
	}
}