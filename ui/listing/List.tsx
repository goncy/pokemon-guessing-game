import React from "react";

const List: React.FC = ({children}) => {
  return (
    <div className="lists">
      <ul className="nes-list is-disc">{children}</ul>
    </div>
  );
};

export default List;
