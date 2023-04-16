import React from "react";
import { useState, useEffect } from "react";
import { IoIosArrowDropdown } from "react-icons/io"

const Dropdown = ({ onChangeDomain, placeHolder, Options }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    const handler = () => setShowMenu(false);
    
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });

  const getDisplay = () => {
    if (selectedValue) {
      return selectedValue.label
    }
    return placeHolder;
  };

  

  return (
    <div className="dropdown-container">
      <div onClick={e => {e.stopPropagation();setShowMenu(!showMenu);}} className="dropdown-input bg-slate-800/30 border border-slate-400/20 p-3 rounded-lg focus:outline-none focus:ring focus:ring-slate-400/30 w-80 md:w-full focus:bg-slate-800/30 text-slate-100 text-base">
        <div className="dropdown-selected-value block text-sm font-medium text-slate-100 font-Android_Assassin uppercase">{getDisplay()} 
          <IoIosArrowDropdown size={24} className="relative left-[20rem] bottom-4"/>
        </div>
        {showMenu && (
        <div className="dropdown-menu">
            {Options.map((option) => (
                <div key={option.value} onClick={() => {setSelectedValue(option);onChangeDomain(option)}} className="dropdown-item dropdown-selected-value block mb-2 text-sm font-medium text-slate-100 font-Android_Assassin uppercase ">
                    {option.label}
                </div>
            ))}
        </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
