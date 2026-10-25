
import { useState } from "react";

const ConditionalTernario = () => {
    
    const [value, setValue] = useState(false);

  return (
    <div>
        <div>
            Conditional Render Component
            <p>Value {value.toString()}</p>          
            {/* Conditional rendering example */}
            <button onClick={() => setValue(!value)}> Change Value </button>      
            {value ? <p>The value is true!</p> : <p>The value is false!</p>}
        </div>      
        
    </div>
  );
};

export default ConditionalTernario;