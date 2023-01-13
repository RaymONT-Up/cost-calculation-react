import Card from "../../../UI/Card/Card";
import CostDate from "./CostDate/CostDate";
import "./CostItem.css";

const CostItem = props => {
  return (
    <li>
      <Card className="cost-item">
        <CostDate date={props.date} />
        <div className="cost-item__box">
          <h2 className="cost-item__description">{props.description}</h2>
          <div className="cost-item__price">${props.price}</div>
        </div>
      </Card>
    </li>
  );
};
export default CostItem;
