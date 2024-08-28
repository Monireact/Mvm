import React from 'react'
import { ConfigurationsColumn, ConfigurationsTableData} from './ConfigurationTableData'
import DataTable from 'react-data-table-component'
import { Col, Card, CardBody } from 'reactstrap'
import ConfigurationList from '../../../../../Component/Masters/Configurations/ConfigurationList/ConfigurationList'

const ConfigurationsTable = () => {
    return (
        <>
            <Col sm="12">
                <Card className='mt-0'>
                    <CardBody>
                        <ConfigurationList />
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12">
                <Card className='mt-2'>
                    <CardBody>
                        <div className="table-responsive">
                            <DataTable columns={ConfigurationsColumn} data={ConfigurationsTableData} pagination highlightOnHover striped persistTableHead />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </>
    )
}

export default ConfigurationsTable