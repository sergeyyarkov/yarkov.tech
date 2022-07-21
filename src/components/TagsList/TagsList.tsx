import type { Component, JSX } from 'solid-js';

import { For, createEffect } from 'solid-js';
import { selectedTags, setSelectedTags } from '@root/stores/searchStore';
import * as utils from '@root/utils/history';

type TagsListProps = {
	data: string[];
};

const TagsList: Component<TagsListProps> = (props) => {
	const isTagSelected = (tag: string) => selectedTags().includes(tag.toLocaleLowerCase());

	/**
	 * Reset signal state and `tags` property in history state
	 */
	const resetSelected = () => {
		const url = utils.deleteParamFromUrl('tags');

		setSelectedTags([]);
		utils.extendHistoryState({ tags: [] }, url);
	};

	const onSelect: JSX.EventHandler<HTMLLIElement, PointerEvent> = (e) => {
		const tag = e.target.getAttribute('data-tag');

		/**
		 * Delete tag from selected tags if already selected
		 * and update param in url
		 */
		if (isTagSelected(tag)) {
			const updated = selectedTags().filter((selectedTag) => selectedTag !== tag);
			const url = utils.setParamToUrl('tags', updated.join(','));

			if (updated.length === 0) {
				resetSelected();
				return;
			}

			utils.extendHistoryState({ tags: updated }, `${window.location.pathname}?${url}`);
			setSelectedTags(updated);
			return;
		}

		/**
		 * Add selected tag to state and update url
		 */
		const updated = [...selectedTags(), tag];
		const url = utils.setParamToUrl('tags', updated.join(','));

		setSelectedTags(updated);
		utils.extendHistoryState({ tags: updated }, `${window.location.pathname}?${url}`);
	};

	createEffect(() => {
		const param = new URLSearchParams(window.location.search).get('tags');

		if (!param) {
			resetSelected();
			return;
		}

		if (param.split(',').length === 0) {
			resetSelected();
			return;
		}

		const tags: string[] = [];

		for (const tag of props.data) {
			if (param.split(',').includes(tag.toLocaleLowerCase())) {
				tags.push(tag.toLocaleLowerCase());
			}
		}

		setSelectedTags(tags);
		utils.extendHistoryState({ tags });
	});

	return (
		<ul class="list-links">
			<For
				each={props.data}
				children={(tag) => (
					<li
						onClick={onSelect}
						style={isTagSelected(tag) && 'border-color: var(--border-color-hover);'}
						class="btn-link"
						data-tag={tag.toLocaleLowerCase()}
					>
						{tag}
					</li>
				)}
			/>
		</ul>
	);
};

export default TagsList;
