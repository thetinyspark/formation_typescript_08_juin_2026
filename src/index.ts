type Employee = {
  id: number;
  name: string;
};

type Salary = {
  employeeId: number;
  amount: number;
};

type EmployeeWithSalary = {
  id: number;
  name: string;
  salary: number;
};


const employees:Map<number, Employee> = new Map<number, Employee>();
employees.set(1,{id:1, name:"Nicolas"});
employees.set(2,{id:2, name:"Matthieu"});
employees.set(3,{id:3, name:"Gabriel"});
employees.set(4,{id:4, name:"Cyril"});

const salaries:Map<number, Salary> = new Map<number, Salary>();
salaries.set(1,{employeeId:1, amount:4000});
salaries.set(2,{employeeId:2, amount:6500});
salaries.set(3,{employeeId:3, amount:10000});
salaries.set(4,{employeeId:4, amount:10000});


const results = Array.from(employees.values()).map( 
    (employee:Employee):EmployeeWithSalary=>{
        return {
            id: employee.id, 
            name: employee.name, 
            salary : salaries.get(employee.id)?.amount || 0
        }
    }
);

console.log(results);