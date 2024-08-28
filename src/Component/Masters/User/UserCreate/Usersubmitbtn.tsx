import { Col } from 'reactstrap'

import { Link } from 'react-router-dom'

import { Add, Cancel, Update, UserCancel, UserSubmitbtn } from '../../../../utils/Constant'
import { Btn } from '../../../../AbstractElements'


const UserSubitBTn = () => {
  return (
      <Col sm="5" className="offset-sm-6">
        <Link to={`${process.env.PUBLIC_URL}/user/users`}>
        <Btn color="primary" className="me-3">
          {Add}
        </Btn> </Link>
        
        <Link to={`${process.env.PUBLIC_URL}/user/users`}>
        <Btn color="light" type="reset" >
          {Cancel}
        </Btn>
        </Link>
       
         
        
      </Col>
  )
}

export default UserSubitBTn