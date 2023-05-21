import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
const CreateEmployee = () => {
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [emailId,setEmail]=useState('');
    const [isPending,setIsPending]=useState(false);
    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        setIsPending(true);
        const employee = {firstName,lastName,emailId};
        console.log(employee);
        EmployeeService.createEmployees(employee).then(res=>{
            history.push('/')
        })
    }
    const handleCancel = ()=>{
        history.push('/')
    }

    return(
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3">
                    <h2>Add a new employee</h2>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>First Name:</label>
                                <input
                                    type="text"
                                    required
                                    value={firstName}
                                    name="firstName"
                                    onChange={(e)=>setFirstName(e.target.value)}
                                />
                                <label>Last Name:</label>
                                <input
                                    type="text"
                                    required
                                    value={lastName}
                                    name="lastName"
                                    onChange={(e)=>setLastName(e.target.value)}
                                />
                                <label>Email Id:</label>
                                <input
                                    type="text"
                                    required
                                    value={emailId}
                                    name="emailId"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />

                                {!isPending && <button className="btn btn-success">Save</button>}
                                {isPending && <button disabled>Save....</button>}
                                <button className="btn btn-danger" onClick={handleCancel}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CreateEmployee;