import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 2, name: "Лампа" },
    { id: 1, value: 1, name: "Утюг" },
    { id: 2, value: 4, name: "Удлинитель" },
    { id: 3, value: 3, name: "Подставка" },
    { id: 4, value: 2, name: "Подушка" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    // console.log(newCounters);
    setCounters(newCounters);
  };

  const handleReset = () => {
    // console.log("handleReset");
    setCounters(initialState);
  };

  const handleUpdate = () => {
    const updatedState = [
      { id: 0, value: 1, name: "Лампа" },
      { id: 1, value: 2, name: "Утюг" },
      { id: 2, value: 3, name: "Удлинитель" },
      { id: 3, value: 4, name: "Подставка" },
      { id: 4, value: 5, name: "Подушка" },
    ];
    setCounters(updatedState);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter key={count.id} onDelete={handleDelete} {...count} />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Reset List
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handleUpdate}>
        Update List
      </button>
    </>
  );
};

export default CountersList;
