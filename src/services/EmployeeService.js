import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8090/api/v1/employees";
const ADDEMPLOYEE_API_BASE_URL = "http://localhost:8090/api/v1/add-employees";
class EmployeeService{
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployees(employee){
        console.log(employee);
        return axios.post(ADDEMPLOYEE_API_BASE_URL,employee,{ headers: { 'Content-Type': 'application/json' } })
            .then(res => {
                console.log("correct");
                return res.data;
            })
            .catch(err => {
                console.log(err);
                throw err;
            });
    }
}

export default new EmployeeService()
