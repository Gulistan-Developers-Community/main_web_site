import { useState } from "react";
import Parse from "../services/parse";
export default function Home() {
    
  const [employeeName, setEmployeeName] = useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeePassword, setEmployeePassword] = useState("");
  const [employees, setEmployees] = useState([]);

  const createEmployee = () => {
    const employee = new Parse.Object('Employee');
    employee
      .save({
        username: employeeName,
        email: employeeEmail,
        password: employeePassword,
       
      })
      .then(function (response) {
        setEmployeeName('');
        setEmployeeEmail('');
        setEmployeePassword('');
        getEmployees()
      })
      .catch(function (error) {
        alert("Error: " + error.message);
      });
  };

  const getEmployees = async () => {
    const query = new Parse.Query("Employee");
    const res = await query.findAll();
    const employees = res.map((employee) => ({ name: employee.get("username"), email: employee.get("email"), id: employee.id }));
    setEmployees(employees);
  };
  getEmployees()
  const deleteTodo = async function (id) {
    const Todo = new Parse.Object('Employee');
    Todo.set('objectId', id);
    try {
      await Todo.destroy();
       getEmployees();
      return true;
    } catch (error) {
      alert(`Error ${error.message}`);
      return false;
    };
  };

  return (
    <div className="flex justify-center ">
      <section >
        <h1>Create a employee </h1>
        <div >
          <input
            placeholder="name"
            onChange={(e) => setEmployeeName(e.target.value)}
            value={employeeName}
          />
          <input
            placeholder="email"
            onChange={(e) => setEmployeeEmail(e.target.value)}
            value={employeeEmail}
          />
          <input
            placeholder="password"
            onChange={(e) => setEmployeePassword(e.target.value)}
            value={employeePassword}
            type="password"
          />
        </div>
        <div
          className="flex justify-center p-5"
        >
          <button className="p-5 hover:bg-blue-500" onClick={createEmployee}>create employee</button>
        </div>
      </section>
      <section className=" p-5">
        <h2>employees</h2>
        <ul>
          {employees.map(({ name, id, email}) => (
            <li className="border-solid m-5" key={id}>name: {name} email: {email}
             <button className="px-1 hover:bg-blue-500" 
               onClick={() => deleteTodo((id))}>
                    delete
                </button>
                </li>
          ))}
        </ul>
      </section>
    </div>
  );
}