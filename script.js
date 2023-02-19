"use strict";

const employees = [
    {
      id: 1,
      name: 'Jack',
      age: 45,
      salaries: [120000, 130000, 110000, 140000, 150000]
    }, {
      id: 2,
      name: 'Bob',
      age: 40,
      salaries: [170000, 130000, 190000, 140000, 160000]
    }, {
      id: 3,
      age: 38,
      name: 'Tom',
      salaries: [200000, 230000, 210000, 240000, 250000]
  }];

  /*

1) Отсортировать сотрудников по возрасту от меньшего к большему
2) Отфильтровать данный массив оставив только сотрудников старше 40.
3) Из данного массива получить массив следующего вида  
[
  {
    id: 1,
    name: 'Jack',
    avg_salary: ...
  }, {
    id: 2,
    name: 'Bob',
    avg_salary: ...
  }, {
    id: 3,
    name: 'Tom',
    avg_salary: ...
}]
где avg_salary - это средняя зарплата

*/

// 1 
const sortEmployeesByAge = employees.sort(function(a,b) {
    return a.age - b.age;
});

console.log(sortEmployeesByAge);

//2
const filterEmployeesAfterFourthy = employees.filter(function (element) {
    return element.age > 40;
});

console.log(filterEmployeesAfterFourthy);

//3
const newArrEmployeesWithAvgSalary = employees.map(function(element) {
    return {
        id: element.id,
        name: element.name,
        avg_salary: element.salaries.reduce(function(currentValue, nextValue) {
            return currentValue + nextValue;
        }) / element.salaries.length
    }
});

console.log(newArrEmployeesWithAvgSalary);