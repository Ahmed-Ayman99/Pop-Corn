import { useState } from "react";
import { HiMiniMinus, HiMiniPlus } from 'react-icons/hi2';

const Box = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  const handelToggle = () => setToggle((prev) => !prev);

  return (
    <div className='box'>
      <span onClick={handelToggle} className='toggle'>
        {toggle ? <HiMiniMinus/> : <HiMiniPlus/>}
      </span>
      {toggle && children}
    </div>
  );
};

export default Box;
