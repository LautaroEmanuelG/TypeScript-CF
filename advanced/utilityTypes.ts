// Tipos creados por el equipo de typescript para trabajar con tipos de datos de manera mas dinamica.
//PArtial<T>
interface Task {
  id: number;
  title: string;
  description: string;
}

function updateTask(id: number, task: Partial<Task>) {}

const newTask = {
  title: "Task 1",
  description: "Description",
};

updateTask(1, newTask);

//Required<T>
interface ToDo {
  id?: number;
  title?: string;
}

const myTodo: Required<ToDo> = { id: 1, title: "Task 1" };

//Records<Keys , Type> Para la cracion de objetos
// {key:value}

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Tuxedo" },
  mordred: { age: 16, breed: "Maine" },
};

//Pick<T, K> Para seleccionar propiedades de un objeto

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;
const otherTodo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

//Omit<T, K> Para omitir propiedades de un objeto

interface Todo2 {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview2 = Omit<Todo2, "description">;