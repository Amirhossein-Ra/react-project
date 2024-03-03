import React from "react";
import './Menu.css'
const Menu = ({ menu }) => {
   
    return (
        <div className="w-full h-[75px] bg-[#2b2b2b] text-white ">
            <ul className="h-full w-full flex flex-row items-center justify-evenly">
                {menu?.map((elem) => {
                
                    return (
                        elem.dropdown?.length ?
                <li className="parent list-none w-[50px] relative duration-300">
                    <a href={elem.link} className="text-white">
                        {elem.name}
                    </a>
                    <ul className="dropdown bg-gray-700 p-10 flex flex-col justify-between items-center top-8 absolute             duration-300 gap-y-3 rounded-md">
                        {elem.dropdown?.map((item)=>{
                            return(
                                <li key={item.id}>
                                    <a href={item.link}>{item.name}</a>
                               </li>
                            )
                        })}
                    </ul>
                </li>:
               <li className="list-none w-[50px] relative">
                <a href={elem.link} className="text-white">
                    {elem.name}
                </a>
               </li>);})}
            </ul>
        </div>
    );
};
 
export default Menu;