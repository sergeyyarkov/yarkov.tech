import { createSignal } from "solid-js";

export const [search, setSearch] = createSignal<string>("");
export const [count, setCount] = createSignal<number>(0);
export const [selectedTags, setSelectedTags] = createSignal<string[]>([]);
