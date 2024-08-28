import React, { useState } from 'react'
import { ModalFooter } from 'reactstrap';
import { Btn } from '../../../../../AbstractElements';
import { ChangePassword } from '../../../../../utils/Constant';
import CommonModal from '../../../../Ui-Kits/Modal/Common/CommonModal';
import NewRequestCAncelFnStaticForm from './NewRequestCancelFnStaticForm';
import { Link } from 'react-router-dom';
const NewRequestCancelFnModal = () => {
    const [largeScreen, setLargeScreen] = useState<boolean>(false);
    const largeScreenToggle = () => setLargeScreen(!largeScreen);
    return (
        <>
            <Btn color="primary" onClick={largeScreenToggle}>{"Cancel this Request"}</Btn>
            <CommonModal size="md" isOpen={largeScreen} toggle={largeScreenToggle} sizeTitle="Cancel this Request" modalBodyClassName="dark-modal">
                <NewRequestCAncelFnStaticForm />
                <ModalFooter>
                    <Link to={`${process.env.PUBLIC_URL}/approvalrequest/newrequests`}>
                    <Btn color="primary">{"Cancel this Request"}</Btn>
                    </Link>
                    <Link to={`${process.env.PUBLIC_URL}/approvalrequest/newrequests`}>
                    <Btn color="light">{"Cancel"}</Btn>
                    </Link>
                </ModalFooter>
            </CommonModal>
        </>)
}

export default NewRequestCancelFnModal