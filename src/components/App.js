import "./dashboard.js";
import "../App.css";
import Dashboard from "./dashboard.js";
import Analytics from "./analytics.js";
import Overview from "./overview.js";
import Product from "./product.js";

function App() {
  return (
    <div className="final">
      <Dashboard />
      <div>
        <Analytics />
        <Overview />
        <Product />
      </div>
    </div>
  );
}

export default App;
