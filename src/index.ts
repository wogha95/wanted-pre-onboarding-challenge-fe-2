import type { Tag, Todo } from "../model/index";

// Todo를 생성하는 함수입니다.
type createTodoType = (
  param: Pick<Todo, "content" | "category" | "tags">
) => Promise<Todo>;
const createTodo: createTodoType = async () => {};

// 모든 Todo를 조회할 수 있습니다.
type readAllTodoType = () => Promise<Todo[]>;
const readAllTodo: readAllTodoType = async () => {};

// ID를 기반으로 특정 Todo를 조회할 수 있습니다.
type readTodoType = (param: Pick<Todo, "id">) => Promise<Todo>;
const readTodo: readTodoType = async () => {};

// ID를 제외한 모든 속성을 수정할 수 있습니다.
// 특정 할 일의 특정 태그를 수정할 수 있습니다.
type updateTodoType = (
  param: Pick<Todo, "id"> & Partial<Omit<Todo, "id">>
) => Promise<Todo>;
const updateTodo: updateTodoType = async () => {};

// ID를 기반으로 특정 할 일을 삭제할 수 있습니다.
type deletetodoType = (param: Pick<Todo, "id">) => Promise<Todo>;
const deleteTodo: deletetodoType = async () => {};

// 모든 할 일을 제거할 수 있습니다.
type deleteAllTodoType = () => Promise<boolean>;
const deleteAllTodo: deleteAllTodoType = async () => {};

// 특정 할 일의 특정 태그를 삭제할 수 있습니다.
type deleteTodoTagType = (param: Pick<Todo, "id" & "tags">) => Promise<Todo>;
const deleteTodoTag: deleteTodoTagType = async () => {};

// 특정 할 일의 모든 태그를 제거할 수 있습니다.
type deleteTodoAllTagType = (param: Pick<Todo, "id">) => Promise<Todo>;
const deleteTodoAllTag: deleteTodoAllTagType = async () => {};
