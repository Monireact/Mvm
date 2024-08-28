import { Col } from 'reactstrap'
import { Cancel, BasicSubmitButton } from '../../../../../utils/Constant'
import { Btn } from '../../../../../AbstractElements'

const CommonFormFooter = () => {
  return (
      <Col sm="5" className="offset-sm-6">
        <Btn color="primary" className="me-3">
          {BasicSubmitButton}
        </Btn>
        <Btn color="light" type="reset" >
          {Cancel}
        </Btn>
      </Col>
  )
}

export default CommonFormFooter