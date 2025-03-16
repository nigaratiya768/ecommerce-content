import React from "react";

import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";

function Header() {
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
    },
    {
      label: "Cloths",
      icon: "pi pi-shopping-bag",
    },

    {
      label: "Contact",
      icon: "pi pi-envelope",
      badge: 3,
    },
  ];
  return (
    <>
      <div className="card">
        <Menubar model={items} />
      </div>
    </>
  );
}

export default Header;
