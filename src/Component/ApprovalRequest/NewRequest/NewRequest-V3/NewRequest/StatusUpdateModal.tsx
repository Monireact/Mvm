import React, { useState } from 'react'
import { Col } from 'reactstrap';
import { Btn } from '../../../../../AbstractElements';
import CommonModal from '../../../../Ui-Kits/Modal/Common/CommonModal';
import PoModalData from './PoModalData';
import StatusUpdateModalData from './StatusUpdateModalData';
import { Link } from 'react-router-dom';
import { Href } from '../../../../../utils/Constant';

const StatusUpdateModal = () => {
    const [largeScreen, setLargeScreen] = useState<boolean>(false);
    const largeScreenToggle = () => setLargeScreen(!largeScreen);
  return (

    <>
      <Link to={Href} color="primary" onClick={largeScreenToggle}> {"Status Update"}</Link>
      <CommonModal size="lg" isOpen={largeScreen} toggle={largeScreenToggle} sizeTitle="Update Status" modalBodyClassName="dark-modal">
        <StatusUpdateModalData />
        <Col className='offset-sm-7 d-flex gap-1'>
        <Link to={`${process.env.PUBLIC_URL}/approvalrequest/completedrequest`}>
            <Btn color="primary" >{"submit"}</Btn>
            </Link>
            <Btn color="light" onClick={largeScreenToggle}>{"Cancel"}</Btn>
        </Col>
      </CommonModal>

    </>   )
}

export default StatusUpdateModal