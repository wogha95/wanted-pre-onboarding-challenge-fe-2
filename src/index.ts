import type { Todo } from "../model/index";
import { DB } from "./db";

// Todo를 생성하는 함수입니다.
type createTodoType = (
  param: Pick<Todo, "content" | "category" | "tags">
) => Promise<Todo>;
const createTodo: createTodoType = async ({ content, category, tags }) => {
  const newTodo: Todo = {
    id: Date.now().toString(),
    isDone: false,
    content,
    category,
    tags,
  };
  DB.push(newTodo);
  return new Promise((resolve) => resolve(newTodo));
};

// 모든 Todo를 조회할 수 있습니다.
type readAllTodoType = () => Promise<Todo[]>;
const readAllTodo: readAllTodoType = async () => {
  return new Promise((resolve) => resolve([...DB]));
};

// ID를 기반으로 특정 Todo를 조회할 수 있습니다.
type readTodoType = (param: Pick<Todo, "id">) => Promise<Todo | null>;
const readTodo: readTodoType = async ({ id }) => {
  const result = DB.find((todo) => todo.id === id);
  if (!result) {
    return null;
  }
  return new Promise((resolve) => resolve(result));
};

// ID를 제외한 모든 속성을 수정할 수 있습니다.
// 특정 할 일의 특정 태그를 수정할 수 있습니다.
type updateTodoType = (
  param: Pick<Todo, "id"> & Partial<Omit<Todo, "id">>
) => Promise<Todo | null>;
const updateTodo: updateTodoType = async (todo) => {
  const resultIndex = DB.findIndex((dbTodo) => dbTodo.id === todo.id);
  if (resultIndex === -1) {
    return null;
  }
  const newTodo = {
    ...DB[resultIndex],
    ...todo,
  };
  DB[resultIndex] = newTodo;
  return new Promise((resolve) => resolve({ ...newTodo }));
};

// ID를 기반으로 특정 할 일을 삭제할 수 있습니다.
type deletetodoType = (param: Pick<Todo, "id">) => Promise<Todo | null>;
const deleteTodo: deletetodoType = async ({ id }) => {
  const resultIndex = DB.findIndex((dbTodo) => dbTodo.id === id);
  if (resultIndex === -1) {
    return null;
  }
  const result = DB[resultIndex];
  DB.splice(resultIndex, 1);
  return new Promise((resolve) => resolve(result));
};

// 모든 할 일을 제거할 수 있습니다.
type deleteAllTodoType = () => Promise<boolean>;
const deleteAllTodo: deleteAllTodoType = async () => {
  try {
    DB.splice(0, DB.length);
    return new Promise((resolve) => resolve(true));
  } catch (error) {
    return new Promise((resolve) => resolve(false));
  }
};

// 특정 할 일의 특정 태그를 삭제할 수 있습니다.
type deleteTodoTagType = (
  param: Pick<Todo, "id" | "tags">
) => Promise<Todo | null>;
const deleteTodoTag: deleteTodoTagType = async ({ id, tags }) => {
  const result = DB.find((todo) => todo.id === id);
  if (!result) {
    return null;
  }
  result.tags = result.tags!.filter((tag) => tags!.includes(tag));
  return new Promise((resolve) => resolve({ ...result }));
};

// 특정 할 일의 모든 태그를 제거할 수 있습니다.
type deleteTodoAllTagType = (param: Pick<Todo, "id">) => Promise<Todo | null>;
const deleteTodoAllTag: deleteTodoAllTagType = async ({ id }) => {
  const result = DB.find((todo) => todo.id === id);
  if (!result) {
    return null;
  }
  result.tags = [];
  return new Promise((resolve) => resolve({ ...result }));
};
