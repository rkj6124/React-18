import { useState } from 'react';

const CodeExample = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log("say hello")
    // be careful you can have infinte loop
    // as you are triggering re-render 
    // setValue(value + 1)
  }
  // will be called on every render 
  sayHello()

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;
