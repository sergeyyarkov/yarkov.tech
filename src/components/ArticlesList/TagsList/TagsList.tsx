import type { Component, JSX } from "solid-js";
import { For, createEffect } from "solid-js";
import { selectedTags, setSelectedTags } from "@stores/searchStore";
import * as utils from "@utils/history";

type TagsListProps = { tags: string[] };

const TagsList: Component<TagsListProps> = (props) => {
	const isTagSelected = (tag: string) => selectedTags().includes(tag);

	/**
	 * Reset signal state and `tags` property in history state
	 */
	const resetSelected = () => {
		const url = utils.deleteParamFromUrl("tags");

		setSelectedTags([]);
		history.replaceState(null, "", url);
	};

	const onSelect: JSX.EventHandler<HTMLLIElement, MouseEvent> = (e) => {
		const tag = e.target.getAttribute("data-tag");

		if (!tag) return;

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
		let param: string | null | string[] = new URLSearchParams(location.search).get("tags");

		if (!param) {
			resetSelected();
			return;
		}

		param = param.split(",");

		if (param.length === 0) {
			resetSelected();
			return;
		}

		setSelectedTags(props.tags.filter((t) => param?.includes(t)));
	});

	return (
		<ul class="list-links">
			<For
				each={props.tags}
				children={(tag) => (
					<li onClick={onSelect} class="btn-link" data-tag={tag} data-active={isTagSelected(tag)}>
						{tag}
					</li>
				)}
			/>
		</ul>
	);
};

export default TagsList;
