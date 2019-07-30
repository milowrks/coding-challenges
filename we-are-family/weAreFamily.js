class Family {
  constructor() {
    this.members = []
  }

  addMember(name) {
    if (!this.members.includes(name)) {
      const member = {
        name: name,
        gender: undefined,
        parents: []
      }
      this.members.push(member)
    }
  }

  findMember(name) {
    return this.members.find(member => member.name = name)
  }

  male(name) {
    this.addMember(name)
    const member = this.findMember(name)
    if (member.gender) {
      return false;
    } else {
      member.gender = "male";
      return true;
    }
  }

  isMale(name) {
    this.addMember(name)
    const member = this.findMember(name)
    return member.gender === "male"
  }

  female(name) {
    this.addMember(name)
    const member = this.findMember(name)
    if (member.gender) {
      return false;
    } else {
      member.gender = "female";
      return true;
    }
  }

  isFemale(name) {
    this.addMember(name)
    const member = this.findMember(name)
    return member.gender === "female"
  }

}