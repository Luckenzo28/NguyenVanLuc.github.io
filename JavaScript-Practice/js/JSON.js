//JSON.stringify() chuyển Object thành chuỗi JSON
let json = JSON.stringify(student);

console.log(json);
console.log(typeof json);

//JSON.parse() chuyển thành chuỗi JSON thành Object
let newStudent = JSON.parse(json);

console.log(newStudent);
console.log(typeof newStudent);
