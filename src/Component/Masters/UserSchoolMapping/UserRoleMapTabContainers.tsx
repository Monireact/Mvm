import { Link } from "react-router-dom";
import { Table } from "reactstrap";




const UserRoleMapTabContainer = () => {
 

  
  return (

    <>
   <div className="container mt-4">
      <h2 className="mb-4">Assigned Roles</h2>
    
      <table className="table table-bordered">
     
        <thead>
          <tr>
            <th>Roles</th>
            <th>Schools</th>
            <th>Departments</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Department Head</td>
            <td>Chetpet Trichy</td>
            <td>Chetpet-IT, Science Trichy-IT</td>
            <td><div className="edit">
<Link to={`${process.env.PUBLIC_URL}/masters/role/editroles`}>
<i className="icon-pencil-alt" />
</Link>
</div>
<div className="info">
<Link to={`${process.env.PUBLIC_URL}/masters/role/viewroles`}>
  <i className="fa fa-eye"></i>
</Link>
</div>
</td>
          </tr>
          
          
        </tbody>
      </table>
    </div>
    ;
      
      </>
  );

  
  }


export default UserRoleMapTabContainer