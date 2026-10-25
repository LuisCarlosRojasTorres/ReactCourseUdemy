
import { useState } from "react";

const ManageData = () => {
    let someValue = 73;

    const [anotherValue, setAnotherValue] = useState(0);

  return (
    <div>
        <div>
            Manage Data Component
            <p>Value {someValue}</p>
            {/* Button to change the value of someValue */}
            {/* This will not actually update the displayed value because React does not track changes to regular variables. */}
            <button onClick={() => (someValue = 100)}> Change Value </button>      
        </div>
      
        <div>
            Manage Data Component
            <p>Value {anotherValue}</p>
            {/* Button to change the value of anotherValue */}
            {/* This will update the displayed value because React tracks changes to state variables. */}
            <button onClick={() => setAnotherValue(100)}>Change Value</button>
        </div>
    </div>
  );
};

export default ManageData;