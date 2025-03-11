import { useState } from 'react';

export default function  FilterButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    alert("You clicked me!");
    setCount(count + 1);
    console.log("click count: ", count)
  }
  return (
    <button onClick={handleClick} alt="Filter by Status Button">Filter by Status ACTIVE/CANCELED/ALL</button>
  );
}