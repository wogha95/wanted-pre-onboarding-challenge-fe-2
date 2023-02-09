export interface Tag {
  id: string;
  name: string;
}

export interface Todo {
  id: string;
  content: string;
  isDone: boolean;
  category: string;
  tags?: Tag[];
}
