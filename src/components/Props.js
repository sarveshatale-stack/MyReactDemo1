import React from "react";

// function Greet() {
//   return <h1> Hello Team</h1>;
// }
//const Greet = () => <h1>hello Greet1</h1>;
const Props = (prop) => {
  return (
    <div>
      <h1>
        Welcome To {prop.name} a.k.s {prop.heroname}
      </h1>
      {prop.children}
    </div>
  );
};
export default Props;
