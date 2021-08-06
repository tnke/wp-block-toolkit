/**
 * WordPress dependencies
 */
import { ComboboxControl, Spinner } from "@wordpress/components";
import { useState, useEffect } from "@wordpress/element";

const PostControl = ({ label, posts, value, onChange, valueKey = "id" }) => {
	const [options, setOptions] = useState([]);
	const [filteredOptions, setFilteredOptions] = useState([]);

	useEffect(() => {
		setOptions(getSelectOptionsFromPosts(posts, valueKey));
	}, [posts, valueKey]);

	useEffect(() => {
		setFilteredOptions(options);
	}, [options]);

	if (typeof posts === null) return <Spinner />;

	return (
		<ComboboxControl
			label={label}
			value={value}
			onChange={onChange}
			options={filteredOptions}
			onInputChange={(inputValue) =>
				setFilteredOptions(
					options.filter((option) =>
						option.label.toLowerCase().startsWith(inputValue.toLowerCase())
					)
				)
			}
			// Needed to avoid a console error with ComboboxControl,
			// eventhough this is marked as not required.
			onFilterValueChange={() => {}}
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
