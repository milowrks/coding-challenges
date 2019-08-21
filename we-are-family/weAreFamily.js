class Family {
  constructor() {
    this.members = []
  }

  addMember(name) {
    debugger
    if (this.members.filter(member => member.name === name).length === 0) {
      const member = {
        name: name,
        gender: undefined,
        parents: []
      }
      this.members.push(member)
    }
  }

  findMember(name) {
    return this.members.find(member => member.name === name)
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

  getParents(name) {
    this.addMember(name)
    const member = this.findMember(name)
    return member.parents.sort()
  }

  // setParentOf(childName, parentName) {
  //   this.addMember(childName)
  //   this.addMember(parentName)
  //   const child = this.findMember(childName)
  //   const parent = this.findMember(parentName)
  //   if (childName === parentName || ) {
  //     return false
  //   } else if (child.parents.length < 1) {
  //     child.parents.push(parent)
  //   } else if (child.parents.length < 2) {
  //     if (child.parents[0].gender !== parent.gender) {
  //       child.parents.push(parent)
  //     }
  //   }
  // }
}