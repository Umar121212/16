/* let students = [];
let newStudent = prompt("Введите ваше имя студента:");

students.push(newStudent); */

/* alert("Вы последний студент в группе: " + students[students.length - 1]); */
let students =[]
let countStudents = Number(prompt('Сколько студентов в группе?'));
let idStudents = prompt('Введите ваше имя:')

students.push(countStudents);
students.push(idStudents);

alert(`Ваш номер ${countStudents } ${idStudents}`)