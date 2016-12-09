export default function serialize(object) {
  let serial = '';
  if (object) {
    console.log(object);
    serial = Object.keys(object).map((key) => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`;
    }).join('&');
  }
  return serial;
}
