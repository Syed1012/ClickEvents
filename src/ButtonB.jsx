import React from 'react'

const ButtonB = () => {

    let count = 0;
    const handleClck = (name) =>{
        if(count<3){
            count++;
            console.log(`${name} You clicked me ${count} times`);
        }
        else{
            console.log(`${name} stop clicking me`);
        }
    }

  return (
    <>
    <br />
    <br />
    <button onClick={() => handleClck('Syed')}>HERE</button>
    </>
  )
}

export default ButtonB