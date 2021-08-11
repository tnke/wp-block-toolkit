export const arrayMove = (array, from, to) => {
	array = array.slice();
	array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
	return array;
};

export const postsToControlOptions = (posts) => {
	if (!posts || !posts.length) return [];

	return posts.map((post) => ({
		label: post.title.rendered,
		value: post.id,
	}));
};

export const postToControlOption = (post) => ({
	label: post.title.rendered,
	value: post.id,
});
