import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import prisma from "$lib/prisma"

export async function GET<RequestHandler>(res) {
	const post = await prisma.post.findMany({
		where: {published: true},
		include: {author: true}
	}) 

	return json({posts: post});
}