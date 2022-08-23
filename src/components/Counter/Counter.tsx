import type { Component } from "solid-js";

import { createSignal, createEffect } from "solid-js";
import Button from "@components/Button";
import "./Counter.css";

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
		<div class="counter">
			<span>{count()}</span>
			<div>
				<Button disabled={isRunned()} onClick={run}>
					Run
				</Button>
				<Button disabled={isRunned()} onClick={inc}>
					+
				</Button>
				<Button disabled={isRunned()} onClick={dec}>
					-
				</Button>
				<Button disabled={!isRunned()} onClick={stop}>
					Stop
				</Button>
			</div>
		</div>
	);
};

export default Counter;
