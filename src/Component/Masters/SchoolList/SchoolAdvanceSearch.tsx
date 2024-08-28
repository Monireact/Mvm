import { useState } from 'react'
import { Card, CardBody, Col, Collapse, FormGroup, Input, Label, Row } from 'reactstrap';
import { Btn } from '../../../AbstractElements';
import { multipleData } from '../../../Data/Ui-Kits/Accordion/Accordion';
import { MultipleCollapseAccordions, ToggleFirstElement, ToggleSecondElement, ToggleBothElement, SchoolName, From, SearchSchool, SearchStatus, To } from '../../../utils/Constant';
import CardHeaderCommon from '../../Ui-Kits/CardHeaderCommon';

const MultipleCollapseAccordion = () => {
  const [openFirst, setOpenFirst] = useState<boolean>(false);
  const [openSecond, setOpenSecond] = useState<boolean>(false);
  const toggleFirst = () => setOpenFirst(!openFirst);
  const toggleSecond = () => setOpenSecond(!openSecond);
  const toggleBoth = () => {setOpenFirst(!openFirst) ;setOpenSecond(!openSecond);};
  return (
    <Col sm="12">
      
          <div className="common-flex">
            <Btn color="primary" onClick={toggleFirst}>{ToggleFirstElement}</Btn>
          </div>
          <Row className="d-flex">
            <Col xl="12">
              <Collapse isOpen={openFirst} className="multi-collapse dark-accordion">
                <Card color="light-primary" className="mt-3 mb-0 collapse-wrapper txt-dark">
                  <CardBody>
                  <Row className="g-3">
                    <Col sm="3">
                      <Label>{From}</Label>
                      <Input type="date" className="form-control" placeholder=''/>
                    </Col>
                    <Col sm="3">
                      <Label>{To}</Label>
                      <Input type="date" className="form-control" placeholder=''/>
                    </Col>
                    <Col sm="3">
                      <Label>{SearchStatus}</Label>
                      <Input type="text" className="form-control" placeholder='Enter the Status'/>
                    </Col>
                    <Col sm="3">
                      <Label>{SearchSchool}</Label>
                      <Input type="text" className="form-control" placeholder='Enter the School Name'/>
                    </Col>
                  </Row>
                  </CardBody>
                </Card>
              </Collapse>
            </Col>
          </Row>
        
    </Col>
  )
}

export default MultipleCollapseAccordion