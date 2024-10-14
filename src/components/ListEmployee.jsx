import axios from "axios";
import { useEffect, useState } from "react";

const ListEmployee = () => {

  const [employee ,setEmployee]=useState([]);


  const fetchData = async()=>{
    const res =  await axios.get("http://localhost:8080/api/employees");
    const data =res.data;
    setEmployee(data);
    console.log(data)
    
  }


  async function  deletefuc(id){
    const res= await axios.delete("http://localhost:8080/api/employees/"+id);
    console.log(res.data);
  }

  useEffect(()=>{
  fetchData()

  },[])


  return (
    <div className="container">
      <h2 className="text-center">List of Employees</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Id</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td><button  className='btn btn-primary m-1 ' >Edit</button><button  className="btn btn-primary" onClick={()=>deletefuc(employee.id)} >Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployee;
