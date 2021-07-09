import LoginWrapper from "./components/auth/LoginWrapper.js";

function App($target) {
  this.init = () => {
    this.$target = $target;
    this.loginWrapper = new LoginWrapper({
      $target: this.$target,
    });
  };

  this.init();
}

export default App;
