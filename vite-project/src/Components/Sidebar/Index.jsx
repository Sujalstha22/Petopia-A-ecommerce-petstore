import React from "react";

import SidebarCategories from "../SidebarCategory/Index";

const Sidebar = () => {
  return (
    <div>
      <aside className="sidebar ">
        <div className="box my-3">
          <SidebarCategories />
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
