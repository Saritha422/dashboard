import customer from "../customer.jpg";
import bargraph from "../bargrapg.jpg";
export default function Overview() {
  return (
    <div className="over-main">
      <div className=" over-text">
        <div>
          <h1>Overview</h1>
          <p className="over-p">Monthly Earnings </p>
        </div>
        <div className="quality">
          <h5>Quality</h5>
        </div>
      </div>
      <main className="overview-main">
        <div>
          <img src={bargraph} alt="bargraph" className="bargraph" />
        </div>
        <div className="customers">
          <h1>Customers</h1>
          <p className="customer-p">Customer that buy product</p>
          <img src={customer} alt="customer" className="customer" />
        </div>
      </main>
    </div>
  );
}
