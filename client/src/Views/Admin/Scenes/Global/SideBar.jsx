import { useState } from "react";

const Item = ({title, to, icon, selected, setSelected}) => {


    return(
        <div class="menu-item" 
            style="color: #ffffff;"
            onclick="setSelected('title');">
          <i class="icon">{icon}</i>
          <span class="title">{title}</span>
          <a href="{to}"></a>
        </div>

            )
}


const SideBar = () => {
  
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [selected, setSelected] = useState("Dashboard");
    
    
    return(

      <div>
<div class="header">
  <h1>My Dashboard</h1>
</div>
<div class="content">
  <div class="sidebar">
    <div class="logo">
      <h2>DressMe</h2>
      <button onclick="toggleMenu()">
        <i class="fas fa-bars"></i>
      </button>
    </div>
    <div class="user-profile">
      <img alt="profile-user" width="100px" height="100px" src="https://via.placeholder.com/150" />
      <div>
        <h3>Dani</h3>
        <h5>Admin User</h5>
      </div>
    </div>
    <ul class="menu">
      <li>
        <a href="#">Dashboard</a>
      </li>
      <li>
        <span>Data</span>
        <ul>
          <li>
            <a href="#">All Products</a>
          </li>
          <li>
            <a href="#">All Brands</a>
          </li>
          <li>
            <a href="#">All Category</a>
          </li>
        </ul>
      </li>
      <li>
        <span>Add Data</span>
        <ul>
          <li>
            <a href="#">Add Products</a>
          </li>
          <li>
            <a href="#">Add Category</a>
          </li>
          <li>
            <a href="#">Add Brand</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="main-content">

  </div>
</div>

              </div>
    )                           
}

export default SideBar;