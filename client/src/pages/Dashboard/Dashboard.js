import { AddProductsForm } from "../../components/AA-AdminDashboard/AddProductsForm/AddProductsForm";
import GeneralButton from "../../components/GeneralButton/GeneralButton";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="kpi-container">
        <div className="kpi">KPI</div>
        <div className="kpi">KPI</div>
        <div className="kpi">KPI</div>
        <div className="kpi">KPI</div>
      </div>
      <div className="dashboard-orders">
        <aside className="dashboard-aside">
          <ul>
            <li> Add product</li>
            <li>Orders info</li>
          </ul>
        </aside>
        <AddProductsForm />
      </div>
      <div className="dashboard-btn">
        <GeneralButton text={"< PREV"}></GeneralButton>
        <GeneralButton text={"NEXT >"}></GeneralButton>
      </div>
    </div>
  );
}
