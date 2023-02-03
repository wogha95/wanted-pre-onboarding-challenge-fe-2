/**
 * Todo를 생성하는 함수입니다.
 * @async
 * @function createTodo
 * @param {obejct} createTodoParam
 * @property {string} createTodoParam.content
 * @property {string} createTodoParam.category
 * @property {Tag[]} [createTodoParam.tags]
 * @returns {Promise<Todo>} 생성된 Todo 데이터를 반환합니다.
 */
const createTodo = async ({ content, category, tags }) => {};

/**
 * 모든 Todo를 조회할 수 있습니다.
 * @async
 * @function readAllTodo
 * @returns {Promise<Todo[]>} 조회한 모든 Todo를 배열로 반환합니다.
 */
const readAllTodo = async () => {};

/**
 * ID를 기반으로 특정 Todo를 조회할 수 있습니다.
 * @async
 * @function readTodo
 * @param {object} readTodoParam
 * @property {string} readTodoParam.id
 * @returns {Promise<Todo>} 특정 Todo를 반환합니다.
 */
const readTodo = async ({ id }) => {};

/**
 * ID를 제외한 모든 속성을 수정할 수 있습니다.
 * 특정 할 일의 특정 태그를 수정할 수 있습니다.
 * @async
 * @function updateTodo
 * @param {object} updateTodoParam
 * @property {string} updateTodoParam.id
 * @property {string} [updateTodoParam.content]
 * @property {boolean} [updateTodoParam.isDone]
 * @property {string} [updateTodoParam.category]
 * @property {Tag[]} [updateTodoParam.tags]
 * @returns {Promise<Todo>}
 */
const updateTodo = async (param) => {};

/**
 * ID를 기반으로 특정 할 일을 삭제할 수 있습니다.
 * @async
 * @function deleteTodo
 * @param {object} deleteTodoParam
 * @property {string} deleteTodoParam.id
 * @returns {Promise<Todo>}
 */
const deleteTodo = async ({ id }) => {};

/**
 * 모든 할 일을 제거할 수 있습니다.
 * @async
 * @function deleteAllTodo
 * @returns {Promise<boolean>}
 */
const deleteAllTodo = async () => {};

/**
 * 특정 할 일의 특정 태그를 삭제할 수 있습니다.
 * @async
 * @function deleteTodoTag
 * @param {object} deleteTodoTagParam
 * @property {string} deleteTodoTagParam.id
 * @property {Tag[]} deleteTodoTagParam.tags
 * @returns {Promise<Todo>}
 */
const deleteTodoTag = async ({ id, tags }) => {};

/**
 * 특정 할 일의 모든 태그를 제거할 수 있습니다.
 * @async
 * @function deleteTodoAllTag
 * @param {object} deleteTodoAllTagParam
 * @property {string} deleteTodoAllTagParam.id
 * @returns {Promise<Todo>}
 */
const deleteTodoAllTag = async ({ id }) => {};
