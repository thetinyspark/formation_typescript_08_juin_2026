TP n°2

- Créer deux types de données: 

    - L'un nommé Employee avec la forme suivante: 
        {
            id:number
            name:string
        }

    - L'autre nommé Salary avec la forme suivante: 

        {
            employeeId:number, 
            amount:number
        }

- Créez deux objets de type Map, chacun contenant une liste 
soit de Salary soit d'Employee, puis boucler 
sur la map contenant les employees pour créer, à la sortie, 
un tableau d'objet de type EmployeeWitSalary qui aura 
cette forme: 

{
    id:number, 
    name:string, 
    salary: number
}