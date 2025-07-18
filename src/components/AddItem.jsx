import { useState } from 'react';
import '../components/css/AddList.css'
function AddList({onHandleNewItem}) {


    const [userInput,setUserInput] = useState('')

    function handleUserInput(e){
    e.preventDefault();
     
    userInput && onHandleNewItem(userInput)  
    setUserInput('')   
    }

    return (
        <div className='form-container'>               
        <h3 className='form-title'>What do you need for your lovely😍 trip?</h3>
        <form className='add-list-form' onSubmit={handleUserInput}>
            <input className='user-text-input' type="text" placeholder='items...' value={userInput} onChange={(e)=>setUserInput(e.target.value)} />
        <button className='add-btn' onClick={handleUserInput}>Add</button>
        </form>     
        </div>
    )
}

export default AddList
