import TodoInput from "./TodoInput.js";
import TodoList from "./TodoList.js";

function TodoWrapper({ $target, state }) {
  if (!new.target) {
    throw new Error("생성자를 사용하지 않았습니다.");
  }
  this.$target = $target;
  this.state = state;

  this.todoInput = new TodoInput({
    $target: this.$target.querySelector(".todoWrapper"),
    onAddTodo: (todoItem) => {
      const content = todoItem;
      this.state = [...this.state, { title: todoItem }];
      console.log("Todo Item : ", this.state);
      this.setState(this.state);
    },
  });

  this.todoList = new TodoList({
    $target: this.$target.querySelector(".todoListWrapper"),
    state: this.state,
  });

  this.setState = (nextState) => {
    this.state = nextState;
    this.todoList.setState(nextState);
  };
}
export default TodoWrapper;
