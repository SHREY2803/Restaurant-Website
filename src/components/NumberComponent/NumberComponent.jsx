import { FaMobileAlt } from "react-icons/fa";
import React from 'react';

function NumberComponent() {
  return (
    <div className="flex items-center gap-2 mt-1">
      <a 
        href="tel:+916356511955"
      >
        <FaMobileAlt className="hover:scale-125 duration-200 cursor-pointer"/>
      </a>
    </div>
  );
}

export default NumberComponent;
