export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  return collection.filter(item => {
    return item.match('粤A');
  }).length;
}
