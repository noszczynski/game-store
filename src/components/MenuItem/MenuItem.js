import React from "react";
import PropTypes from "prop-types";

const MenuItem = ({ item: { label, link, icon } }) => {
  console.log(icon);
  return (
    <div>
      <a href={link}>
        <div>{icon}</div>
        <div>{label}</div>
      </a>
    </div>
  );
};

MenuItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default MenuItem;
