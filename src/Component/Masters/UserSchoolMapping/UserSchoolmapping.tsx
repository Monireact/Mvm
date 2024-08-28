import React, { useState } from "react";
import { Col, Input, Row } from "reactstrap";
import { Btn, H3, H5, H6 } from "../../../AbstractElements";
import { Typeahead } from "react-bootstrap-typeahead";
import { UserMultiSelect } from "../../../Data/Forms/FormsWidgets/Typeahead/Typeahead";
import { Cancel } from "../../../utils/Constant";
import { Link, useNavigate } from "react-router-dom";
import UserRoleMapSaveBtn from "./UserRoleMapSaveBtn";

type CheckboxStates = Record<string, boolean>;

const CreateSchoolMappingForm = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [checkboxStates, setCheckboxStates] = useState<CheckboxStates>({});
  const [selectedSchools, setSelectedSchools] = useState<any[]>([]);
  const [showSelectedSchools, setShowSelectedSchools] =
    useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    setCheckboxStates({});
    setSelectedSchools([]);
    setShowSelectedSchools(false); // Hide selected schools when changing roles
  };

  // Function to handle saving and navigating
  const handleSave = () => {
    setShowSelectedSchools(true); // Show selected schools

    // Navigate to the next page with the selected schools as state
    navigate('/masters/Users/rolemap', {
      state: {
        selectedValue,
        selectedSchools
      }
    });
  };

  // Get table data based on the selected dropdown value
  const getTableData = () => {
    const tableData: Record<string, string[]> = {
      "Department Head": [
        "Chetpet",
        "Avadi",
        "Trichy",
        "Polacherry",
        "MIRS",
        "Kumbakonam",
        "Tenkasi",
      ],
      "School Admin": [
        "Chetpet",
        "Avadi",
        "Trichy",
        "Polacherry",
        "MIRS",
        "Kumbakonam",
        "Tenkasi",
      ],
      AO: [
        "Chetpet",
        "Avadi",
        "Trichy",
        "Polacherry",
        "MIRS",
        "Kumbakonam",
        "Tenkasi",
      ],
      "Committee Member": [
        "Chetpet",
        "Avadi",
        "Trichy",
        "Polacherry",
        "MIRS",
        "Kumbakonam",
        "Tenkasi",
      ],
      OA: [ // Added data for OA
        "Chetpet",
        "Avadi",
        "Trichy",
        "Polacherry",
        "MIRS",
        "Kumbakonam",
        "Tenkasi",
      ],
    };

    return tableData[selectedValue] || [];
  };

  return (
    <>
      <Row>
        <Col>
          <div className="mb-3">
            <label htmlFor="static-dropdown" className="form-label">Roles:</label>
            <select
              id="static-dropdown"
              className="form-select"
              value={selectedValue}
              onChange={handleChange}
            >
              <option value="">-Select-</option>
              <option value="Department Head">Department Head</option>
              <option value="School Admin">School Admin</option>
              <option value="AO">AO</option>
              <option value="Committee Member" disabled>Committee Member</option>
            </select>
          </div>
        </Col>

        {/* Department Head */}
        <Col md="12">
          {selectedValue === "Department Head" && (
            <>
              <div className="card-wrapper border rounded-3 mt-2">
                <H6 className="sub-title">{selectedValue}</H6>
                <br />
                <H5 className="sub-title">{"Schools"}</H5>
                <table className="table bg-white">
                  <thead>
                    <tr>
                      <th>Departments</th>
                      <th>IT</th>
                      <th>Transport</th>
                      <th>Science</th>
                      <th>Accounts</th>
                      <th>Admin</th>
                      <th>English</th>
                      <th>Maths</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getTableData().map((department) => (
                      <tr key={department}>
                        <td>{department}</td>
                        <td>
                          <Input type="checkbox" />
                        </td>
                        <td>
                          <Input type="checkbox" />
                        </td>
                        <td>
                          <Input type="checkbox" />
                        </td>
                        <td>
                          <Input type="checkbox" />
                        </td>
                        <td>
                          <Input type="checkbox" />
                        </td>
                        <td>
                          <Input type="checkbox" />
                        </td>
                        <td>
                          <Input type="checkbox" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-5">    <UserRoleMapSaveBtn />
              </div>

            </>
          )}
        </Col>

        {/* School Admin */}
        <Col md="12">
          {selectedValue === "School Admin" && (
            <div className="theme-form">
              <div>
                <H6 className="sub-title">{selectedValue}</H6>
                <Typeahead
                  options={UserMultiSelect}
                  multiple
                  clearButton
                  placeholder="Select schools Admin"
                  labelKey="name"
                  id="selectTwo"
                  onChange={(selected) => setSelectedSchools(selected)}
                />
                {showSelectedSchools && (
                  <div className="mt-3">
                    <H5>Selected Schools:</H5>
                    <ul>
                      {selectedSchools.map((school) => (
                        <li key={school.id}>{school.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="pt-5">
                <Row className="justify-content-center">
                  <Col md="6" className="d-flex flex-column col-md-6 ms-5">
                    <div className="text-end offset-sm-1">
                      <Btn color="primary" className="me-3" onClick={handleSave}>
                        Save
                      </Btn>
                      <Link to={`${process.env.PUBLIC_URL}/user/users`}>
                        <Btn color="light">{Cancel}</Btn>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          )}
        </Col>

        {/* AO */}
        <Col md="12">
          {selectedValue === "AO" && (
            <div className="theme-form">
              <div>
                <H6 className="sub-title">{selectedValue}</H6>
                <Typeahead
                  options={UserMultiSelect}
                  multiple
                  clearButton
                  placeholder="Select schools AO"
                  labelKey="name"
                  id="select AO"
                  onChange={(selected) => setSelectedSchools(selected)}
                />
                {showSelectedSchools && (
                  <div className="mt-3">
                    <H5>Selected Schools:</H5>
                    <ul>
                      {selectedSchools.map((school) => (
                        <li key={school.id}>{school.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="pt-5">
                <Row className="justify-content-center">
                  <Col md="6" className="d-flex flex-column col-md-6 ms-5">
                    <div className="text-end offset-sm-1">
                      <Btn color="primary" className="me-3" onClick={handleSave}>
                        Save
                      </Btn>
                      <Link to={`${process.env.PUBLIC_URL}/user/users`}>
                        <Btn color="light">{Cancel}</Btn>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </>
  );
};

export default CreateSchoolMappingForm;
