import React, { useState } from 'react'
import { Col } from 'reactstrap';
import { Btn } from '../../../../../AbstractElements';
import CommonModal from '../../../../Ui-Kits/Modal/Common/CommonModal';
import PoModalData from './PoModalData';
import StatusUpdateModalData from './StatusUpdateModalData';
import { Link } from 'react-router-dom';
import BillUpdateModalData from './BillUploadModalData';
import { Href } from '../../../../../utils/Constant';

const BillUpdateModal = () => {
  const [largeScreen, setLargeScreen] = useState<boolean>(false);
  const largeScreenToggle = () => setLargeScreen(!largeScreen);
  return (

    <>
      <Link to={Href} color="light" onClick={largeScreenToggle}>{"Upload Bill"}</Link>
      <CommonModal size="lg" isOpen={largeScreen} toggle={largeScreenToggle} sizeTitle="Update Bill" modalBodyClassName="dark-modal">
        <BillUpdateModalData />
        <Col className='offset-sm-4 d-flex gap-1'>
          <Btn color="success">{"Download"}</Btn>
          <Btn color="info">{"Re Upload"}</Btn>
          <Btn color="primary" >{"submit"}</Btn>
          <Btn color="light" onClick={largeScreenToggle}>{"Cancel"}</Btn>
        </Col>
      </CommonModal>

    </>)
}

export default BillUpdateModal