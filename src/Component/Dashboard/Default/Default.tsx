import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Dashboard, Default } from "../../../utils/Constant";
// import RevenueGrowth from "../ProjectManagement/RevenueGrowth/RevenueGrowth";
// import BoostUpYourSale from "../ProjectManagement/BoostUpYourSale/BoostUpYourSale";
// import TopProduct from "../ProjectManagement/TopProduct/TopProduct";
// import NewUser from "../ProjectManagement/NewUser/NewUser";
// import TeamActivity from "../ProjectManagement/TeamActivity/TeamActivity";
// import UserVisitsByDay from "../ProjectManagement/UserVisitsByDay/UserVisitsByDay";
// import LatestTransaction from "../ProjectManagement/LatestTransaction/LatestTransaction";
// import BestSellingProduct from "../ProjectManagement/BestSellingProduct/BestSellingProduct";
// import TotalProject from "../Ecommerce/TotalProject/TotalProject";
import TotalProjectCard from "../Ecommerce/TotalProject/TotalProjectCard";
import ChetpetRequestsStatus from "./ChetpetRequestsStatus";
import IrungattukottaiRequestStatus from "./IrungattukottaiRequestStatus";
import MIRSRequestsStatus from "./MIRSRequestsStatus";
import TrichyRequestsStatus from "./TrichyRequestsStatus";
import PolacheryRequestsStatus from "./PolacheryRequestsStatus";
import TenkasiRequestsStatus from "./TenkasiRequestsStatus";
import KumbakonamRequestsStatus from "./KumbakonamRequestsStatus";
import AvadiRequestsStatus from "./AvadiRequestsStatus";

const ContainerDefault = () => {
  return (
    <>
      <Breadcrumbs mainTitle={"Dashboard"} parent={"Dashboard"} />
      <Container fluid>
        <Row>
          {/* <RevenueGrowth />
          <BoostUpYourSale />
          <TopProduct />
          <NewUser />
          <TeamActivity />
          <UserVisitsByDay />
          <LatestTransaction />
          <BestSellingProduct /> */}
           <TotalProjectCard />
           <ChetpetRequestsStatus/>
           <IrungattukottaiRequestStatus/>
           <MIRSRequestsStatus/>
           <TrichyRequestsStatus/>
           <PolacheryRequestsStatus/>
           <TenkasiRequestsStatus/>
           <KumbakonamRequestsStatus/>
           <AvadiRequestsStatus/>
        </Row>
      </Container>
    </>
  );
};

export default ContainerDefault;
