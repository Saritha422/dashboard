import absraction from "../abstract3D.jpg";
import illution from "../illusion.jpg";
export default function Product() {
  return (
    <main className="pro-main">
      <div className="pro-top">
        <h1>Product Sell</h1>
        <input placeholder="search"></input>
        <h6>Last 30 days</h6>
      </div>
      <div className="index">
        <div>
          <p>Product Name</p>
        </div>
        <div className="sub-index">
          <p>Stock</p>
          <p>Price</p>
          <p>Total sales</p>
        </div>
      </div>
      <hr />
      <Products />
    </main>
  );
}
function Products() {
  return (
    <div className="main-index">
      <main className="index">
        <div className="product">
          <img src={absraction} alt="3D-abstraction" className="abstraction" />
          <div className="pro-info">
            <h2>Abstract 3D</h2>
            <p className="pro-p">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="sub-index">
          <p>32 in Stock</p>
          <p>$45.99</p>
          <p>20</p>
        </div>
      </main>
      <main className="index">
        <div className="product">
          <img src={illution} alt="3D-abstraction" className="abstraction" />
          <div className="pro-info">
            <h2>Sarphens Illustration</h2>
            <p className="pro-p">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="sub-index">
          <p>32 in Stock</p>
          <p>$45.99</p>
          <p>20</p>
        </div>
      </main>
    </div>
  );
}
