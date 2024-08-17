import { useState } from "react";

export default function Box() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="box">
      <button className="toggle-button" onClick={handleClick}>
        {isOpen ? "-" : "+"}
      </button>
    </div>
  );
}
