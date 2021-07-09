import LoginWrapper from "./components/auth/LoginWrapper.js";
import TodoWrapper from "./components/todo/TodoWrapper.js";

const todoList = [{ title: "인사하기" }, { title: "안녕하세요" }];
function App($target) {
  this.init = () => {
    this.$target = $target;
    this.state = todoList;

    this.loginWrapper = new LoginWrapper({
      $target: this.$target,
    });

    this.todoWrapper = new TodoWrapper({
      $target: this.$target,
      state: this.state,
    });
  };

  this.setState = (nextState) => {
    this.state = nexState;
  };

  this.init();
}

export default App;
