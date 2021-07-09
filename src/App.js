import LoginWrapper from "./components/auth/LoginWrapper.js";

function App($target) {
  this.init = () => {
    this.$target = $target;
    this.loginWrapper = new LoginWrapper({
      $target: this.$target,
    });
  };

  this.setState = (nextState) => {
    this.state = nexState;
  };

  this.init();
}

export default App;
