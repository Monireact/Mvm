import React, { useState } from 'react'
import { Btn } from '../../../../../AbstractElements';
import CommonModal from '../../../../Ui-Kits/Modal/Common/CommonModal';
import NewRequestCancelQuoteModalView from './NewRequestCancelQuoteModalView';
import { Col } from 'reactstrap';

const NewRequestCancelQuoteModal = () => {
    const [largeScreen, setLargeScreen] = useState<boolean>(false);
  const largeScreenToggle = () => setLargeScreen(!largeScreen);
  return (
    <>
      <Btn color="danger" onClick={largeScreenToggle} className='w-50'><i className="fa fa-times-circle"></i> {"Cancel"}</Btn>
      <CommonModal size="lg" isOpen={largeScreen} toggle={largeScreenToggle} sizeTitle="Cancel" modalBodyClassName="dark-modal">
        <NewRequestCancelQuoteModalView />
        <Col className='offset-sm-7 d-flex gap-1'>
            <Btn color="primary" onClick={largeScreenToggle}>{"Cancel this Quote"}</Btn>
            <Btn color="light" onClick={largeScreenToggle}>{"Cancel"}</Btn>
        </Col>
      </CommonModal>
    </>  )
}

export default NewRequestCancelQuoteModal