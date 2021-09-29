const Demo = () => {
    const randomNum = Math.floor(Math.random() * 2) + 1;
    if (randomNum === 2) {
      throw new Error('Big scary error has occurred!');
    }
  
    return <h1>I'm the Demo Component's content!</h1>;
  };
  
  export default Demo;