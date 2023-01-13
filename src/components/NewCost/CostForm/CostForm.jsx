import React, { useState } from "react";
import "./CostForm.css";
const CostForm = props => {
  const [description, setdescription] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const descriptionChangeHandler = event => setdescription(event.target.value);
  const priceChangeHandler = event => setPrice(event.target.value);
  const dateChangeHandler = event => setDate(event.target.value);

  const submitHandler = event => {
    event.preventDefault();

    const costData = {
      description,
      price,
      date: new Date(date),
    };
    props.onSaveCostData(costData);

    setdescription("");
    setPrice("");
    setDate("");

    props.closeForm()

  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input
            type="text"
            onChange={descriptionChangeHandler}
            value={description}
          />
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input type="number" onChange={priceChangeHandler} value={price} />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input type="date" onChange={dateChangeHandler} value={date} />
        </div>
        <div className="new-cost__actions">
          <button type="submin">Добавить расход</button>
          <button onClick={props.closeForm}>Отмена</button>
        </div>
      </div>
    </form>
  );
};
export default CostForm;
