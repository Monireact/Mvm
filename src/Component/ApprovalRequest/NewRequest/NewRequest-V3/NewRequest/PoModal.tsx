import React, { useState } from 'react'
import { Col } from 'reactstrap';
import { Btn } from '../../../../../AbstractElements';
import CommonModal from '../../../../Ui-Kits/Modal/Common/CommonModal';
import PoModalData from './PoModalData';
import { Link } from 'react-router-dom';

const PoModal = () => {
    const [largeScreen, setLargeScreen] = useState<boolean>(false);
    const largeScreenToggle = () => setLargeScreen(!largeScreen);
  return (

    <>
      <Link color="primary" onClick={largeScreenToggle} to={''}><i className="fa fa-eye"></i></Link>
      <CommonModal size="lg" isOpen={largeScreen} toggle={largeScreenToggle} sizeTitle="Upload PO" modalBodyClassName="dark-modal">
        <PoModalData />
        <Col className='offset-sm-7 d-flex gap-1'>
        <Link to={`${process.env.PUBLIC_URL}/approvalrequest/waitingforpo`}>
        <Btn color="primary" onClick={largeScreenToggle}>{"Release PO"}</Btn>
        </Link>
            <Btn color="light" onClick={largeScreenToggle}>{"Cancel"}</Btn>
        </Col>
      </CommonModal>

    </>   )
}

export default PoModal