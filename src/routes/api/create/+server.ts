import {error, json} from "@sveltejs/kit"
import type { RequestHandler } from './$types';
import prisma from "$lib/prisma"

export async function POST<RequestHandler>(event) {
	const { email, title, content} = await event.request.json();

	let validation = email && title && content;

	if(!validation) {
		throw error(400, "falta parametros no body...")
	}

	const create = await prisma.post.create({
		data: {
			title: title,
			content: content,
			published: true,
			authorID: 1
		},

	})

	return json({success: "sucesso!"});
}