/**
 * Tag model
 * @typedef {Object} Tag
 * @property {string} id - 아이디
 * @property {string} name - 태그명
 */

/**
 * Todo model
 * @typedef {Object} Todo - 할 일
 * @property {string} id - 아이디
 * @property {string} content - 내용
 * @property {boolean} isDone - 완료여부
 * @property {string} category - 카테고리
 * @property {Tag[]} [tags] - 태그들
 */
