import "./Diagram.css"
import DiagramBar from "./DiagramBar/DiagramBar"
const Diagram = props => {
  const dataSetValues = props.dataSets.map(data => data.value)
  const maxMonthCosts = Math.max(...dataSetValues)
  
  return <div className="diagram">
      {props.dataSets.map(dataSet => <DiagramBar value={dataSet.value} maxValue={maxMonthCosts} label={dataSet.label} key={dataSet.label}/>)}
  </div>
}
export default Diagram