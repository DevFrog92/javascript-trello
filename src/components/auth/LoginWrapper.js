import LoginForm from "./login/LoginForm.js";

function LoginWrapper({ $target }) {
  if (!new.target) {
    throw new Error("생성자를 사용하지 않았습니다.");
  }

  this.$target = $target;

  this.loginInput = new LoginForm({
    $target: this.$target.querySelector(".loginFormWrapper"),
    login: async ({ loginId, loginPassword }) => {
      alert(`Login : ${loginId} ${loginPassword}`);
    },
  });

  this.setState = (nextState) => {};
}

export default LoginWrapper;
