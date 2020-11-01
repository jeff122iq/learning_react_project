import React from "react";

const SiteBar = (props) => {
  const MenuList = [
    { link: "Home" },
    { link: "About" },
    { link: "Contact" },
    { link: "Download" },
  ];

  const NewMenu = MenuList.map((menu) => (
    <li key={Number.toString()}>{menu.link}</li>
  ));

  return (
    <div className="siteBar">
      <ol>{NewMenu}</ol>
    </div>
  );
};

export default SiteBar;
