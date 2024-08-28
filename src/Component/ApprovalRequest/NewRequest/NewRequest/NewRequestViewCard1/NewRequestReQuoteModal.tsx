import React, { useState } from 'react'
import { Link } from 'react-feather';
import { Col, ModalFooter } from 'reactstrap';
import { Btn } from '../../../../../AbstractElements';
import { ChangePassword, Close, SaveChanges } from '../../../../../utils/Constant';
import CommonModal from '../../../../Ui-Kits/Modal/Common/CommonModal';
import NewRequestSelectQuoteModalView from './NewRequestSelectQuoteModalView';
import NewRequestReQuoteModalView from './NewRequestReQuoteModalView';

const NewRequestReQuoteModal = () => {
    const [largeScreen, setLargeScreen] = useState<boolean>(false);
  const largeScreenToggle = () => setLargeScreen(!largeScreen);
  return (
    <>
      <Btn color="warning" onClick={largeScreenToggle} className='w-50'><i className="fa fa-quora"></i> {"ReQuote"}</Btn>
      <CommonModal size="lg" isOpen={largeScreen} toggle={largeScreenToggle} sizeTitle="ReQuote" modalBodyClassName="dark-modal">
        <NewRequestReQuoteModalView />
        <Col className='offset-sm-8  d-flex gap-1'>
            <Btn color="primary" onClick={largeScreenToggle}>{"Requote"}</Btn>
            <Btn color="light" onClick={largeScreenToggle}>{"Cancel"}</Btn>
        </Col>
      </CommonModal>
    </>  )
}

export default NewRequestReQuoteModal