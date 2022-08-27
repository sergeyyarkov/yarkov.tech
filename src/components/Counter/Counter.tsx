import type { Component } from "solid-js";

import { createSignal, createEffect } from "solid-js";

const Counter: Component<{ tick?: number }> = (props) => {
	const [isRunned, setIsRunned] = createSignal<boolean>(false);
	const [count, setCount] = createSignal<number>(0);

	const run = () => setIsRunned(true);
	const stop = () => setIsRunned(false);
	const inc = () => setCount(count() + 1);
	const dec = () => setCount(count() - 1);

	createEffect(() => {
		setInterval(() => {
			if (isRunned()) {
				setCount(count() + 1);
			}
		}, props.tick || 200);
	});

	return (
		<div
			style={{
				margin: "2rem 0",
				display: "flex",
				"flex-direction": "column",
				"align-items": "center",
				"row-gap": "15px",
				border: "1px solid var(--border-color)",
				"border-radius": "var(--border-radius-md)",
				padding: "15px 5px",
			}}
		>
			<span>{count()}</span>
			<div
				style={{
					display: "flex",
					"column-gap": "3px",
				}}
			>
				<button class="btn" disabled={isRunned()} onClick={run}>
					Run
				</button>
				<button class="btn" disabled={isRunned()} onClick={inc}>
					+
				</button>
				<button class="btn" disabled={isRunned()} onClick={dec}>
					-
				</button>
				<button class="btn" disabled={!isRunned()} onClick={stop}>
					Stop
				</button>
			</div>
		</div>
	);
};

export default Counter;
