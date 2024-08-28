import React, { useMemo, useState } from 'react'
import { TagsConfigurationColumn, TagsTableData } from './TagsTableData'
import DataTable from 'react-data-table-component'
import { Col, Card, CardBody } from 'reactstrap'
import TagListHead from '../../../../../Component/Masters/Tags/TagsList/TagListHead'

const TagsConfigurationTable = () => {
    const [filterText, setFilterText] = useState("");

    const filteredItems = TagsTableData.filter((item) => item.tagName && item.tagName.toLowerCase().includes(filterText.toLowerCase()));
    return (
        <>
            <Col sm="12">
                <Card className='mt-0'>
                    <CardBody>
                        <TagListHead />
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12">
                <Card className='mt-2'>
                    <CardBody>
                        <div className="table-responsive">
                            <DataTable columns={TagsConfigurationColumn} data={TagsTableData}  pagination highlightOnHover striped persistTableHead />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </>)
}

export default TagsConfigurationTable