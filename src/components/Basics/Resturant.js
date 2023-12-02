import React , { useState } from 'react'
import "./style.css";
import MenuData from "./MenuData";
import MenuCard from './Card';
import NavBar from './NavBar';

const uniqueList =() =>[
    ...new Set(
        MenuData.map((item) => {
         return item.category;
        })
    ),
    "All",
]

const Resturant = () => {
    const [menuData, setMenuData] = useState(MenuData);
    // const [menuList,setMenuList] = useState(uniqueList);

    const menuList = uniqueList();

    const filterItem = (category) => {
        if (category === "All") {
          setMenuData(MenuData);
          return;
        }
    
        const updatedList = MenuData.filter((curElem) => {
          return curElem.category === category;
        });
    
        setMenuData(updatedList);
      };
    
  return (
    <>
    <NavBar filterItem={filterItem} menuList={menuList} />
    <MenuCard menuData={menuData} />
    </>
  )
}

export default Resturant