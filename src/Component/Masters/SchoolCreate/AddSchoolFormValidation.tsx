import React, { useState } from 'react'
import { Col } from 'reactstrap';
import { Formik } from 'formik';
import AddNewSchoolForm from './CreateNewSchoolForm';
import { AddschoolFormValidationProp } from '../../../Types/Masters/School/schools';
import { ADDSCHOOL_INITIALVALUE, ADDSCHOOL_VALIDATIONSCHEMA } from '../../../Data/Masters/School';
import SchoolConfigurationTable from '../../../Data/Tables/DataTables/Masters_tables/SchoolConfigurationTable';

interface SchoolList {
    id: number;
    schoolcode: string;
    location: string;
    emailid: string;
    mobilenumber: string;
    address: string;
    image: null;
}

const AddSchoolFormValidation = () => {
    // const [submitErrors, setSubmitError] = useState<boolean>(false);

    // const handleSubmit = (values: AddschoolFormValidationProp, { resetForm }: { resetForm: () => void }) => {
    //     resetForm();
    //     setSubmitError(false);
    // };

    const [items, setItems] = useState<SchoolList[]>([]);
    const [currentItem, setCurrentItem] = useState<SchoolList | null>(null);
    const handleEditItem = (item: SchoolList) => {
        setCurrentItem(item);
    };
    const handleSaveItem = (savedItem: SchoolList) => {
        if (currentItem) {
            setItems(items.map(item => (item.id === savedItem.id ? savedItem : item)));
        } else {
            setItems([...items, savedItem]);
        }
        setCurrentItem(null);
    };
    const fetchItems = async () => {
        try {
            const response = await fetch('/api/item/read');
            const data: SchoolList[] = await response.json();
            setItems(data);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    return (
        <Col xl="12">
            {/* <Formik initialValues={ADDSCHOOL_INITIALVALUE} onSubmit={handleSubmit} validationSchema={ADDSCHOOL_VALIDATIONSCHEMA}>
                {({ errors }) =>  */}
            <AddNewSchoolForm />

            {/* } 
            </Formik>  */}
        </Col>
    );
}

export default AddSchoolFormValidation