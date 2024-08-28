import React from "react";
import { Form, Row, Col, Card, CardBody } from "reactstrap";
import RolesPermissionCheck from "./RolesMasterPermissionCheck";
import H3 from "../../../../CommonElements/Headings/H3Element";
import H5 from "../../../../CommonElements/Headings/H5Element";
import RoleSaveBtn from "./RoleSaveBtn";
import RolesRequestPermission from "./RolesRequestPermission";

const CreateNewRoleForm = () => {
  return (
    <>
      <Row>
        <Card>
          <CardBody>
            <div className="col-lg-12 col-md-12 mx-auto">
              <div className="row">
                <div className="col-lg-12 mx-auto mt-3">
                  <div className="form-group row mt-2">
                    <label className="control-label col-md-3">Role Code</label>
                    <div className="col-md-9">{"MVM-DH"}
                    </div>
                    <div className="form-group row mt-2">
                      <label className="control-label col-md-3">Role Name</label>
                      <div className="col-md-9">{"Department Head"}
                      </div>
                    </div>
                    <div className="form-group row mt-2">
                      <label className="control-label col-md-3">Description</label>
                      <div className="col-md-9">{"Department head or representative of the department to raise request"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Row>
      <Card>
        <CardBody>
        <H3>Set Permission</H3>
      <Form className="theme-form mt-2">
        <Row>
          <Col md="5">
            <RolesPermissionCheck />
          </Col>
          <Col md="7">
            <RolesRequestPermission />
          </Col>
        </Row>
        <br />
        <Col className="text-end" >
          <RoleSaveBtn />
        </Col>
      </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default CreateNewRoleForm;
