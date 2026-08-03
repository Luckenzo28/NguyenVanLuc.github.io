//JSON.stringify() chuyển Object javascript sang chuỗi JSON.
const person = {
  name: "John",
  age: 30,
  city: "New York",
};
const jsonString = JSON.stringify(person);
console.log(jsonString);

//JSON.parse() chuyển chuỗi JSON sang Object javascript.
const jsonString2 = '{"name":"John","age":30,"city":"New York"}';
const person2 = JSON.parse(jsonString2);
console.log(person2);
