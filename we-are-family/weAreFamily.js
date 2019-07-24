class Family {
  constructor() {
  }

  male(name) {
    if (this.gender) {
      return false;
    } else {
      this.gender = "male";
      return true;
    }
  }

  isMale(name) {
    return this.gender === "male"
  }

  female(name) {
    if (this.gender) {
      return false;
    } else {
      this.gender = "female";
      return true;
    }
  }
}