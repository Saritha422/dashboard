import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faScaleUnbalanced } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

export default function Analytics() {
  return (
    <main>
      <div className="top">
        <h1>Hello Sharukh👋</h1>
        <input placeholder="search"></input>
      </div>
      <div className="items">
        <div className="an-item">
          <div className="an-icon">
            <FontAwesomeIcon icon={faSackDollar} />
          </div>
          <div>
            <h5>Earning</h5>
            <h6 className="big">$198k</h6>
            <p className="too-small">⬆ 37.8% this month</p>
          </div>
        </div>
        <div className="an-item">
          <div className="an-icon">
            <FontAwesomeIcon icon={faNewspaper} />
          </div>
          <div>
            <h5>Orders</h5>
            <h6 className="big">$2.4k</h6>
            <p className="too-small">⬇2% this month</p>
          </div>
        </div>
        <div className="an-item">
          <div className="an-icon">
            <FontAwesomeIcon icon={faScaleUnbalanced} />
          </div>
          <div>
            <h5>Balance</h5>
            <h6 className="big">$2.4k</h6>
            <p className="too-small">⬇2% this month</p>
          </div>
        </div>
        <div className="an-item">
          <div className="an-icon">
            <FontAwesomeIcon icon={faBagShopping} />
          </div>
          <div>
            <h5>Total sales</h5>
            <h6 className="big">$89k</h6>
            <p className="too-small">⬆11% this month</p>
          </div>
        </div>
      </div>
    </main>
  );
}
