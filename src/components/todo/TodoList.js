function TodoList({ $target, state }) {
  this.$target = $target;
  this.state = state;

  this.$todoList = document.createElement("section");
  this.$target.appendChild(this.$todoList);

  this.render = () => {
    const htmlString = this.state
      .map((ele) => `<li>${ele.title}</li>`)
      .join("");
    this.$todoList.innerHTML = htmlString;
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  this.render();
}

export default TodoList;
