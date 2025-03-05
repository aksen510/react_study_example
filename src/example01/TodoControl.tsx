import React from "react";
import { useTodoStore } from "./useTodoStore.tsx";

const TodoControl = () => {
	const setTodoStatus = useTodoStore((state) => state.setTodoStatus);
	return (
		<>
			<button onClick={() => setTodoStatus("all")}>All</button>
			<button onClick={() => setTodoStatus("Completed")}>
				Completed
			</button>
		</>
	);
};

export default TodoControl;
