var student1 = {
  name: "Usama",
  rollNum: "1",
  section: "B",
  age: 18,
};
var student2 = {
  name: "Sufiyan",
  rollNum: "2",
  section: "B",
  age: 17,
};
var student3 = {
  name: "Ishraque",
  rollNum: "3",
  section: "B",
  age: 22,
};
var student4 = {
  name: "Owais",
  rollNum: "4",
  section: "B",
  age: 19,
};
var student5 = {
  name: "Areesha",
  rollNum: "5",
  section: "B",
  age: 20,
};
var student6 = {
  name: "Daim",
  rollNum: "6",
  section: "B",
  age: 20,
};
var student7 = {
  name: "Saad",
  rollNum: "7",
  section: "B",
  age: 20,
};
var student8 = {
  name: "Raza",
  rollNum: "8",
  section: "B",
  age: 17,
};
var student9 = {
  name: "Humna",
  rollNum: "9",
  section: "B",
  age: 21,
};
var student10 = {
  name: "Iraj",
  rollNum: "10",
  section: "B",
  age: 18,
};

// console.log(student1, student2, student3, student4);

var b = [
  student1,
  student2,
  student3,
  student4,
  student5,
  student6,
  student7,
  student8,
  student9,
  student10,
];
// console.log(b);

var inp = document.getElementById("inp");
var p_1 =document.getElementById('p_1')
var p_2 =document.getElementById('p_2')
var p_3 =document.getElementById('p_3')
var p_4 =document.getElementById('p_4')
function search() {
  for (let i = 0; i < b.length; i++) {
    if (inp.value == b[i].name) {
      p_1.innerHTML=(b[i]).name
      p_2.innerHTML=(b[i]).rollNum
      p_3.innerHTML=(b[i]).section
      p_4.innerHTML=(b[i]).age
      console.log(b[i]);
    }
  }
}
