import { checkName, checkType } from '../validatior';

export default class Character {
  constructor(name, type) {
    if (checkName(name)) {
      this.name = name;
    } else {
      throw new Error('Invalid name value');
    }

    if (checkType(type)) {
      this.type = type;
    } else {
      throw new Error('Invalid type value');
    }

    this.health = 100;
    this.level = 1;
  }
}
