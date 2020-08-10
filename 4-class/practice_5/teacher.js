// TODO 20: 在这里写实现代码
import Person from './person';

class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    if (this.klass === undefined) {
      return `${super.introduce()} I am a Teacher. I teach No Class.`;
    }
    return `${super.introduce()} I am a Teacher. I teach Class ${this.klass}.`;
  }
}

export default Teacher;
