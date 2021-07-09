function TodoInput({$target,onAddTodo}){
  this.$target = $target;

  this.$todoInput = document.createElement('input');
  this.$todoInput.setAttribute('placeholder','Input todo item');
  this.$target.appendChild(this.$todoInput);

  this.onAddTodo = onAddTodo;
  this.keyupHandler = (e) =>{
    if(e.key !== 'Enter') return
    if(e.target.value.trim() == ''){
      alert('Please, Type todo item!');
      return
    }
    this.onAddTodo(e.target.value);
    this.$todoInput.value = '';
    this.$todoInput.focus();
  }
  this.$todoInput.addEventListener('keyup',this.keyupHandler);
}

export default TodoInput;