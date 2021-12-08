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

  const handleDecrement = (id) => {
    const newDecrement = counters.map((c) => {
      if (c.id === id && c.value > 0) {
        c.value -= 1;
      }
      return c;
    });
    setCounters(newDecrement);
  };

  const handleIncrement = (id) => {
    const newIncrement = counters.map((c) => {
      if (c.id === id && c.value > 0) {
        c.value += 1;
      }
      return c;
    });
    setCounters(newIncrement);
  };

  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onDecrement={handleDecrement}
          onIncrement={handleIncrement}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Reset List
      </button>
    </>
  );
};

export default CountersList;
