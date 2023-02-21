import type { Component, JSX } from "solid-js";
import { For, createEffect } from "solid-js";
import { selectedTags, setSelectedTags } from "@stores/searchStore";
import * as utils from "@utils/history";

type TagsListProps = { data: string[] };

const TagsList: Component<TagsListProps> = (props) => {
	const isTagSelected = (tag: string) => selectedTags().includes(tag.toLocaleLowerCase());

	/**
	 * Reset signal state and `tags` property in history state
	 */
	const resetSelected = () => {
		const url = utils.deleteParamFromUrl("tags");

		setSelectedTags([]);
		history.replaceState(null, "", url);
	};

	const onSelect: JSX.EventHandler<HTMLLIElement, PointerEvent> = (e) => {
		const tag = e.target.getAttribute("data-tag");

		/**
		 * Delete tag from selected tags if already selected
		 * and update param in url
		 */
		if (isTagSelected(tag)) {
			const updated = selectedTags().filter((selectedTag) => selectedTag !== tag);
			const url = utils.setParamToUrl("tags", updated.join(","));

			if (updated.length === 0) {
				resetSelected();
				return;
			}

			setSelectedTags(updated);
			history.replaceState(null, "", `${location.pathname}?${url}`);
			return;
		}

		/**
		 * Add selected tag to state and update url
		 */
		const updated = [...selectedTags(), tag];
		const url = utils.setParamToUrl("tags", updated.join(","));

		setSelectedTags(updated);
		history.replaceState(null, "", `${location.pathname}?${url}`);
	};

	createEffect(() => {
		let param: string | string[] = new URLSearchParams(location.search).get("tags");

		if (!param) {
			resetSelected();
			return;
		}

		/* to array */
		param = param.split(",");

		if (param.length === 0) {
			resetSelected();
			return;
		}

		const tags: string[] = [];

		for (const tag of props.data) {
			const isTagExist = param.includes(tag.toLocaleLowerCase());

			if (isTagExist) {
				tags.push(tag.toLocaleLowerCase());
			}
		}

		setSelectedTags(tags);
	});

	return (
		<ul class="list-links">
			<For
				each={props.data}
				children={(tag) => (
					<li
						onClick={onSelect}
						class="btn-link"
						data-tag={tag.toLocaleLowerCase()}
						data-active={isTagSelected(tag)}
					>
						{tag}
					</li>
				)}
			/>
		</ul>
	);
};

export default TagsList;
