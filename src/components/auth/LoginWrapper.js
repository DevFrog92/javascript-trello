import LoginForm from "./login/LoginForm.js";
import { api } from "../../api/api.js";

function LoginWrapper({ $target }) {
  if (!new.target) {
    throw new Error("생성자를 사용하지 않았습니다.");
  }

  this.$target = $target;

  this.loginInput = new LoginForm({
    $target: this.$target.querySelector(".loginFormWrapper"),
    login: async ({ loginId, loginPassword }) => {
      try {
        const userToken = await api.login({
          account: loginId,
          password: loginPassword,
        });
        localStorage.setItem("user_token", userToken.accessToken);
      } catch (error) {
        console.log(error);
      }
    },
  });

  this.setState = (nextState) => {};
}

export default LoginWrapper;
