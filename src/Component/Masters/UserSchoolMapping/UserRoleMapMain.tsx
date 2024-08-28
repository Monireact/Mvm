import React, { useState, useEffect } from "react";
import { Col, Container, Row, Table } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import { Typeahead } from "react-bootstrap-typeahead";
import { UserMultiSelect } from "../../../Data/Forms/FormsWidgets/Typeahead/Typeahead";
import { Cancel } from "../../../utils/Constant";
import { Btn, H3, H4 } from "../../../AbstractElements";
import UserRoleUserName from "./UserRoleUserName";
import SweetAlert from "sweetalert2";

const UserRolemapTableMainContainer: React.FC = () => {
  const location = useLocation();
  const { selectedValue, selectedSchools } = location.state || {};

  const [tableData, setTableData] = useState<any[]>([
    { role: "Department Head", schools: "Chetpet, Trichy", departments: "Chetpet-IT, Science Trichy-IT", active: true }
  ]);
  const [selectedRole, setSelectedRole] = useState<string>("Select Role");
  const [selectedMultiSelect, setSelectedMultiSelect] = useState<any[]>([]);

  useEffect(() => {
    if (selectedValue && selectedSchools) {
      setTableData(prevData => [
        ...prevData,
        {
          role: selectedValue,
          schools: selectedSchools.map((school: { name: any; }) => school.name).join(', '),
          departments: "-", // Placeholder for departments
          active: true,
        }
      ]);
    }
  }, [selectedValue, selectedSchools]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectedRole(newValue);
    if (newValue === "Committee Member" || newValue === "Select Role") {
      setSelectedMultiSelect([]);
    }
  };

  const handleSave = () => {
    if (selectedRole === "Select Role" || selectedRole === "") {
      SweetAlert.fire({
        icon: "success",
        title: "Saved !",
        text: "Roles assigned Successfully",
        confirmButtonColor: "var(--theme-default)",
      });
      return;
    }

    const schools = selectedRole === "Committee Member"
      ? "-"
      : selectedMultiSelect.length
        ? selectedMultiSelect.map((item) => item.name).join(', ')
        : "-";

    if (selectedRole !== "Committee Member" && !selectedMultiSelect.length) {
      SweetAlert.fire({
        icon: "warning",
        title: "Please select at least one school before saving!",
        confirmButtonColor: "var(--theme-default)",
      });
      return;
    }

    const newRow = {
      role: selectedRole,
      schools,
      departments: "-",
      active: true,
    };

    setTableData(prevData => [
      ...prevData,
      newRow
    ]);

    setSelectedRole("Select Role");
    setSelectedMultiSelect([]);
  };

  const disabledRoles = tableData.map(row => row.role);

  const roleOptions = [
    "Department Head",
    "School Admin",
    "AO",
    "Committee Member"
  ].map(role => (
    <option key={role} value={role} disabled={disabledRoles.includes(role)}>
      {role}
    </option>
  ));

  return (
    <>
      <Container fluid>
        <UserRoleUserName />
        <Row className="my-4">
          <Col md="12">
            <h2 className="mb-4">Assigned Roles</h2>
            <Table className="table bg-white">
              <thead className="bg-light">
                <tr>
                  <th>Roles</th>
                  <th>Schools</th>
                  <th>Departments</th>
                  <th>Active</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.role}</td>
                    <td>{row.schools}</td>
                    <td>{row.departments}</td>
                    <td>
                      {row.active }
                      <Link to={`${process.env.PUBLIC_URL}/masters/Users/rolemap/rolemapview`} className="ms-2">
                        <i className="fa fa-eye"></i>
                      </Link>
                      <Link to={`${process.env.PUBLIC_URL}/masters/Users/rolemap/rolemapedit`} className="ms-2">
                        <i className="icon-pencil-alt"></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <div className="d-flex align-items-center mb-4">
              <label htmlFor="static-dropdown" className="form-label mb-0 me-3">Roles:</label>
              <select
                id="static-dropdown"
                className="form-select"
                value={selectedRole}
                onChange={handleChange}
              >
                <option value="">Select Role</option>
                {roleOptions}
              </select>
            </div>
          </Col>
          <Col md="12" className="mt-4">
            {selectedRole !== "Committee Member" && selectedRole !== "Select Role" && (
              <div className="d-flex align-items-center mb-4">
                <label htmlFor="static-dropdown" className="form-label mb-0 me-3">School</label>
                <div className="flex-grow-1">
                  <Typeahead
                    options={UserMultiSelect}
                    multiple
                    clearButton
                    placeholder="Select schools"
                    labelKey="name"
                    id="selectTwo"
                    onChange={(selected) => setSelectedMultiSelect(selected)}
                    className="w-100"
                    inputProps={{ className: 'form-control' }} // Ensures consistent styling
                  />
                </div>
              </div>
            )}
            <div className="text-end mt-4">
              <Btn color="primary" className="me-3" onClick={handleSave}>
                Save
              </Btn>
              <Link to={`${process.env.PUBLIC_URL}/user/users`}>
                <Btn color="light">{Cancel}</Btn>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserRolemapTableMainContainer;
