/**
 * WordPress dependencies
 */
import { ComboboxControl, Spinner } from "@wordpress/components";
import { useState, useEffect } from "@wordpress/element";

const PostControl = ({ label, posts, value, onChange, valueKey = "id" }) => {
	const [options, setOptions] = useState([]);

	useEffect(() => {
		setOptions(getSelectOptionsFromPosts(posts, valueKey));
	}, [posts, valueKey]);

	if (typeof posts === null) return <Spinner />;

	return (
		<ComboboxControl
			label={label}
			value={value}
			onChange={onChange}
			options={options}
		/>
	);
};

export default PostControl;

const getSelectOptionsFromPosts = (posts, valueKey = "id") => {
	if (!posts || !posts.length) return [];

	return posts.map((post) => ({
		label: post.title.rendered,
		value: post[valueKey],
	}));
};
