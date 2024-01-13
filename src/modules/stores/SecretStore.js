import { makeAutoObservable, action, observable, computed } from "mobx";

export class SecretStore {
  secretKeyEnabled =
    localStorage.getItem("secret-passed") === "true" ? false : false;
  clickCounter = 0;

  constructor() {
    makeAutoObservable(this, {
      secretKeyEnabled: observable,
      clickCounter: observable,
      increment: action,
      keyEnabled: computed,
    });
  }

  increment() {
    this.clickCounter += 1;
    console.log(this.clickCounter);

    if (this.clickCounter >= 10) {
      localStorage.setItem("secret-passed", "true");

      this.secretKeyEnabled = false;
      window.location.reload();
    }
  }

  get keyEnabled() {
    return this.secretKeyEnabled;
  }
}
