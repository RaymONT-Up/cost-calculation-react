import CostFilter from "./CostFilter/CostFilter";
import Card from "../UI/Card/Card";
import "./Costs.css";
import { useState } from "react";
import CostList from "./CostList/CostList";
import CostDiagram from "./CostDiagram/CostDiagram";
const Costs = props => {
  const [selectedYear, setSelectedYear] = useState(2021);
  const changeFilterYearHandler = currentYear => {
    setSelectedYear(currentYear);
  };
  const filteredCosts = props.costs.filter(item => item.date.getFullYear() === selectedYear);
  
  return (
    <Card className="costs">
      <CostFilter
        onChangeFilterYear={changeFilterYearHandler}
        year={selectedYear}
      />
      <CostDiagram costs={filteredCosts}/>
      
      <CostList costs={filteredCosts}/> 
    </Card>
  );
};
export default Costs;
