import { createSignal } from 'solid-js';

export const [search, setSearch] = createSignal<string>('');
export const [selectedTags, setSelectedTags] = createSignal<string[]>([]);
