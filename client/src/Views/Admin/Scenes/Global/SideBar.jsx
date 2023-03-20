// import { useState } from "react";

// const Item = ({title, to, icon, selected, setSelected}) => {


//     return(
//         <div class="menu-item" 
//             style="color: #ffffff;"
//             onclick="setSelected('title');">
//           <i class="icon">{icon}</i>
//           <span class="title">{title}</span>
//           <a href="{to}"></a>
//         </div>

//             )
// }


const SideBar = () => {
  
    // const [isCollapsed, setIsCollapsed] = useState(true);
    // const [selected, setSelected] = useState("Dashboard");
    
    
    return(

      <div style="background-color: #F5F6FA;">
      <div style="background-color: #6C5CE7; padding: 20px;">
        <h1 style="color: #FFFFFF;">My Dashboard</h1>
      </div>
      <div style="display: flex; flex-wrap: wrap;">
        <div style="flex: 1; margin: 20px;">
          <div style="background-color: #FFFFFF; padding: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
              <h2 style="font-weight: bold; margin: 0;">DressMe</h2>
              <button onclick="toggleMenu()" style="background-color: #FFFFFF; border: none; cursor: pointer;">
                <i class="fas fa-bars"></i>
              </button>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; margin-bottom: 25px;">
              <img alt="profile-user" width="100px" height="100px" src="https://via.placeholder.com/150" style="border-radius: 50%; cursor: pointer; transform: scale(1.6);" />
              <div style="text-align: center;">
                <h3 style="font-weight: bold; margin: 10px 0 0 0;">Dani</h3>
                <h5 style="color: #4CAF50;">Admin User</h5>
              </div>
            </div>
            <ul style="list-style: none; padding-left: 10%;">
              <li style="margin-bottom: 10px;">
                <a href="#" style="color: #6870FA; text-decoration: none;">Dashboard</a>
              </li>
              <li style="margin-bottom: 10px;">
                <span style="color: #CCC; font-weight: bold; margin-bottom: 5px;">Data</span>
                <ul style="list-style: none; padding-left: 20px;">
                  <li>
                    <a href="#" style="color: #444; text-decoration: none;">All Products</a>
                  </li>
                  <li>
                    <a href="#" style="color: #444; text-decoration: none;">All Brands</a>
                  </li>
                  <li>
                    <a href="#" style="color: #444; text-decoration: none;">All Category</a>
                  </li>
                </ul>
              </li>
              <li style="margin-bottom: 10px;">
                <span style="color: #CCC; font-weight: bold; margin-bottom: 5px;">Add Data</span>
                <ul style="list-style: none; padding-left: 20px;">
                  <li>
                    <a href="#" style="color: #444; text-decoration: none;">Add Products</a>
                  </li>
                  <li>
                    <a href="#" style="color: #444; text-decoration: none;">Add Category</a>
                  </li>
                  <li>
                    <a href="#" style="color: #444; text-decoration: none;">Add Brand</a>
                  </li>
                </ul>
              </li>
              </ul>
              </div>
              </div>
              </div>
              </div>
    )                           
}

export default SideBar;