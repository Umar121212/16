let students = ['Umar', 'Danil', 'Vsevolod', 'John', 'Charley'];
let newStudent = prompt("Введите ваше имя студента:");

students.push(newStudent);

alert("Вы последний студент в группе: " + students[students.length - 1]);