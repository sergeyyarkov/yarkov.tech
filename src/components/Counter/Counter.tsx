import type { Component } from 'solid-js';

import { createSignal, createEffect } from 'solid-js';

const Counter: Component = () => {
	const [count, setCount] = createSignal<number>(0);

	createEffect(() => {
		setInterval(() => {
			setCount(count() + 1);
		}, 500);
	});

	return <div>{count()}</div>;
};

export default Counter;
