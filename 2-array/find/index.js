export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  return collection.filter(item => {
    return item.age < 20 && item.age > 10;
  })[0].name;
}
