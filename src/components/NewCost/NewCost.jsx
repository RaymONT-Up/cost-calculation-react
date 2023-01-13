import "./NewCost.css";
import CostForm from "./CostForm/CostForm";
import { useState } from "react";
const NewCost = props => {
  const [IsFormVisible, setIsFormVisible] = useState(false)

  const saveCostDataHandler = inputCostData => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
  };

  
  const showFormHandler = () => setIsFormVisible(true)
  const closeFormHandler = () => setIsFormVisible(false)

  return (
    <div className="new-cost">
      {IsFormVisible ? 
        <CostForm onSaveCostData={saveCostDataHandler} closeForm={closeFormHandler} />
        :
        <button onClick={showFormHandler}>Добавить новый расход</button>
      }
      
      
    </div>
  );
};
export default NewCost;
