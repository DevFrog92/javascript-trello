function LoginForm({ $target, login }) {
  this.$target = $target;

  this.$loginInput = document.createElement("input");
  this.$loginInput.setAttribute("placeholder", "ID");
  this.$loginPassword = document.createElement("input");
  this.$loginPassword.setAttribute("type", "password");
  this.$loginPassword.setAttribute("placeholder", "Passwrod");
  this.$loginSubmitButton = document.createElement("button");
  this.$loginSubmitButton.textContent = "Submit";
  this.$target.appendChild(this.$loginInput);
  this.$target.appendChild(this.$loginPassword);
  this.$target.appendChild(this.$loginSubmitButton);

  this.login = login;

  this.submitHandler = (e) => {
    if (
      this.$loginInput.value.trim() == "" ||
      this.$loginPassword.value.trim == ""
    ) {
      alert("Please, Enter your ID or Passwrod!");
      return;
    }

    this.login({
      loginId: this.$loginInput.value,
      loginPassword: this.$loginPassword.value,
    });
    this.$loginInput.value = "";
    this.$loginPassword.value = "";
  };

  this.$loginSubmitButton.addEventListener("click", this.submitHandler);
}

export default LoginForm;
