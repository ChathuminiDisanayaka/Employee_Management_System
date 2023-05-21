import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const ListEmployee = ()=>{
    const [employees,setEmployees]=useState([]);
    const history = useHistory();

    useEffect(()=>{
        EmployeeService.getEmployees().then(res=>{
            setEmployees(res.data);
        })
    })

    const handleAdd=()=>{
        history.push('/add-employees')
    }

    return(
        <div>
            <h2 className="text-center">Employee List</h2>
            <div className="row">
                <button className="btn btn-primary" onClick={handleAdd}>Add Employee</button>
            </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>Employee First name</th>
                            <th>Employee Last name</th>
                            <th>Employee Email id</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                                <td></td>
                            </tr>
                        )) }
                        </tbody>
                    </table>

                </div>
        </div>
    )

}
export default ListEmployee