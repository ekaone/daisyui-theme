import React from "react";

function Button() {
  return (
    <div>
      <div className="flex justify-between">
        <button className="btn btn-active">Button</button>
        <button className="btn btn-error">Button</button>
        <button className="btn btn-primary">Button</button>
      </div>
    </div>
  );
}

export default Button;
