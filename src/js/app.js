export default function destructuring(obj) {
  const res = [];
  obj.special.forEach((element) => {
    if (!element.description) {
      /* eslint-disable-next-line */
      element.description = 'Описание недоступно';
    }
    res.push(element);
  });
  return res;
}
