import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import { Href } from "../../../utils/Constant";
import { H6, Image } from "../../../AbstractElements";
import { dynamicImage } from "../../../Service";

const LeftHeader = () => {
  return (
    <Col xl="5"  lg="4" md="4" sm="3" className="left-header p-0">
      <div>
        <Link className="toggle-sidebar" to={Href}>
          <i className="iconly-Category"></i>
        </Link>
        <div className="d-flex align-items-center gap-2">
        <Image className="mt-0" src={dynamicImage("maharishi-leftheader.png")} alt="hand-gif" />
        <H6 className="f-w-600 text-success">Maharishi Vidya Mandir Schools - All School Management</H6>
        {/* <Image className="mt-0" src={dynamicImage("hand.gif")} alt="hand-gif" /> */}
        </div> 
      </div>
    </Col>
  );
};

export default LeftHeader;
