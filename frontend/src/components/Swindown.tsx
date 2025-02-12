/** @format */

'use client';

import { useState, useRef, useEffect, SetStateAction } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Swimdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('SWIMWEAR');
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: SetStateAction<string>) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative " ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className=" flex flex-row items-center   py-2 text-[16px]  w-full text-left"
      >
        {selectedOption}
        <MdOutlineKeyboardArrowDown className="mt-1" />
      </button>
      {isOpen && (
        <ul className="absolute  w-[220px] bg-white   mt-[-2px] ml-[-50px] shadow-md z-50 py-4">
          {['POP GELATO SS23', 'BIKINI', 'SWIMSUITS', 'SEPARATES'].map(
            (option) => (
              <li
                key={option}
                onClick={() => handleOptionClick(option)}
                className="px-8 py-1  cursor-pointer text-[16px] hover:text-slate-600"
              >
                {option}
              </li>
            ),
          )}
        </ul>
      )}
    </div>
  );
};

export default Swimdown;
