import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faBoxesStacked } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faHandshakeAngle } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import evano from "../evano.jpg";
export default function Dashboard() {
  return (
    <main className="main">
      <div className="main-dash">
        <FontAwesomeIcon icon={faHouse} />
        <h4>Dashboard</h4>
      </div>
      <div className="dash-items">
        <div className="item">
          <FontAwesomeIcon icon={faBars} />
          <p>Dashboard</p>
        </div>
        <div className="item">
          <FontAwesomeIcon icon={faBoxesStacked} />
          <p>Product</p>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
        <div className="item">
          <FontAwesomeIcon icon={faUser} />
          <p>Customer</p>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
        <div className="item">
          <FontAwesomeIcon icon={faMoneyCheckDollar} />
          <p>Income</p>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
        <div className="item">
          <FontAwesomeIcon icon={faGear} />
          <p>Promote</p>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
        <div className="item">
          <FontAwesomeIcon icon={faHandshakeAngle} />
          <p>Help</p>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
      <div className="user">
        <img src={evano} alt="user" className="image" />
        <div className="user-info">
          <h4>Evano</h4>
          <h6>Marketing Manager</h6>
        </div>
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
    </main>
  );
}
