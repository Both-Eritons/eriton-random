import {error, json} from "@sveltejs/kit"
import type { RequestHandler } from './$types';
import prisma from "$lib/prisma"

export async function GET<RequestHandler>({ url }) {
	const postID: int = await Number(url.searchParams.get("post-id"));
	
	if(isNaN(postID)) {
		throw error(400, "o id precisa ser um numero!");
	}

	const post = await prisma.post.findMany({
		where: {id: postID, published: true},
		include: {author: true}
	})

	if(!post.length) {
		throw error(400, "esse post nao existe!");
	}

	return json({post: post})
}
