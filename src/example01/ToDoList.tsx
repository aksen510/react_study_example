import { useQuery } from "@tanstack/react-query";
import { useTodoStore } from "./useTodoStore.tsx";
import TodoControl from "./TodoControl.tsx";
import React from "react";

// API로 데이터를 가져오는 비동기함수
const fetchTodos = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/todos");
	return res.json();
};
// https://velog.io/@sj_yun/React-Query-useQuery-%EC%82%AC%EC%9A%A9%EB%B2%95
function TodoList() {
	const todoStatus = useTodoStore((state) => state.todoStatus);

	const { isLoading, data } = useQuery({
		queryKey: ["toDos"],
		queryFn: fetchTodos,
	});

	if (isLoading) return <p>is Loading...</p>;

	// 상태값에 따라 필터링
	const filteredTodos =
		todoStatus === "all"
			? data // 전체 데이터
			: data.filter((todo) => todo.completed); // 완료된 항목만 필터링

	console.log("data>>>>>", data);
	console.log("filteredTodos>>>>>", filteredTodos);

	return (
		<div>
			<TodoControl />
			<ul>
				{/* // Todo 목록 구현 */}
				{filteredTodos.map((todo) => (
					<li key={todo.id}>{todo.title}</li>
				))}
			</ul>
		</div>
	);
}

export default TodoList;
