export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  let result = 0;
  Object.values(source).forEach(val => {
    result += parseInt(val, 0);
  });
  return result;
}
