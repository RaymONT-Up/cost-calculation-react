import "./CostList.css"
import CostItem from "./CostItem/CostItem"
const CostList = props => {
  if(!props.costs.length) return <p className="costs-list__empty">В этом году не было расходов</p>

    return <ul>{props.costs.map(item => (
          <CostItem
            key={item.id}
            description={item.description}
            price={item.price}
            date={item.date}
          />
        ))}</ul>
}
export default CostList