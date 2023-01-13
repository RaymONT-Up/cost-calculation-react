import { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COST = [
  {
    id: "111",
    date: new Date(2021, 2, 12),
    description: "Холодильник",
    price: 999.99,
  },
  {
    id: "222",
    date: new Date(2021, 11, 25),
    description: "MacBook",
    price: 1254.72,
  },
  {
    id: "333",
    date: new Date(2021, 3, 1),
    description: "Джинсы",
    price: 49.99,
  },
];
const App = props => {
  const [costs, setCosts] = useState(INITIAL_COST);
  const addCostHandler = cost => {
    setCosts(prevCost => [...prevCost, cost]);
  };
  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
