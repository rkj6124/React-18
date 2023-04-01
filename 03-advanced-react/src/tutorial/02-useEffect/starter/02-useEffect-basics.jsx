import { useState, useEffect } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log('hello there');
  };

  sayHello();

  // be default it runs on every render
  // unless we pass an empty dependency array 
  // which limits it to run the callback function on first render only 
  // hence using useEffect we can control when to execute 
  // we don't want to return promise from useeffect callback 
  // hence callback cannot be async
  // because we are returing something special from useEffect 
  useEffect(() => {
    console.log('hello from useEffect')
  }, []);


  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default UseEffectBasics;
