import React, { useState } from 'react'
import { Col } from 'reactstrap';
import { Formik } from 'formik';
import CreateNewVendorForm from './CreateNewVendorForm';
import { ADDVENDOR_INITIALVALUE, ADDVENDOR_VALIDATIONSCHEMA } from '../../../../Data/Masters/School';
import { AddVendorFormValidationProp } from '../../../../Types/Masters/Vendors';

const AddVendorFormValidation = () => {
    const [submitErrors, setSubmitError] = useState<boolean>(false);

    const handleSubmit = (values: AddVendorFormValidationProp, { resetForm }: { resetForm: () => void }) => {
        resetForm();
        setSubmitError(false);
    };

    return (
        <Col xl="12">
            <Formik initialValues={ADDVENDOR_INITIALVALUE} onSubmit={handleSubmit} validationSchema={ADDVENDOR_VALIDATIONSCHEMA}>
                {({ errors }) => <CreateNewVendorForm submitErrors={submitErrors} setSubmitError={setSubmitError} errors={errors} />}
            </Formik>
        </Col>
    );
}

export default AddVendorFormValidation