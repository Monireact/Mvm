import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Dashboard, Ecommerce } from "../../../utils/Constant";
import SalesChart from "../Default/SalesChart/SalesChart";
import TotalRevenue from "../Default/TotalRevenue/TotalRevenue";
import SpecialOffer from "../Default/SpecialOffer/SpecialOffer";
import TotalSales from "../Default/TotalSales/TotalSales";
import LatestOrders from "../Default/LatestOrders/LatestOrders";
import LiveProduct from "../Default/LiveProduct/LiveProduct";
import TopRevenueProduct from "../Default/TopRevenueProduct/TopRevenueProduct";
import AddNewProduct from "../Default/AddNewProduct/AddNewProduct";

const ContainerEcommerce = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Ecommerce} parent={Dashboard} />
      <Container fluid>
        <Row className="size-column">
          <SalesChart />
          <TotalRevenue />
          <SpecialOffer />
          <TotalSales />
          <LatestOrders />
          <LiveProduct />
          <TopRevenueProduct />
          <AddNewProduct />
        </Row>
      </Container>
    </>
  );
};

export default ContainerEcommerce;
