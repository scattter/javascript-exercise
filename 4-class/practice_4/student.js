// TODO 16: 在这里写实现代码
import Person from './person';

class Student extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    return `${super.basic_introduce()} I am a Student. I am at Class ${this.klass}.`;
  }
}

export default Student;
