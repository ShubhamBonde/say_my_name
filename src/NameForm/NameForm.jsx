import { useState } from 'react'
import './NameForm.css'

function NameForm({setBg}) {
    let [name, setName] = useState('');
    let [success, setSuccess] = useState('');
    const [isNameEvaluated, setIsNameEvaluated] = useState(false);

    
    function updateName(event) {
        setName(event.target.value)
    }

    function evaluateName() {
        
        let enteredName = name.toLowerCase();

        if (!enteredName) {
            return;
        }

        if ( enteredName === 'heisenberg'){
            setSuccess(`You're god damn right!`.toUpperCase());
            setBg('walter2.png');
        } 
        else if (enteredName === "") {
            return;
        }
        else {
            setSuccess(`I'm the one who knocks! You know, right?`);
            setBg('walter_gun.png');
        }

        setIsNameEvaluated(true)
    }

    function resetEverything() {
        setName('');
        setSuccess('');
        setIsNameEvaluated(false);
        setBg('walter1.png')
    }

    function handleOnEnterKey(event) {
        if (event.key === 'Enter') {
            evaluateName();
        }
    }

    console.log('rendering')

    return (
        <>
            <div className='formContainer'>
                <input className='nameInput' name='name' type='text' placeholder='Say My Name...'value={name} onKeyUp={handleOnEnterKey} onChange={updateName}  autoFocus={true}/>
                <input className='nameSubmit' type="submit" value="Submit" onClick={evaluateName}/>

                {
                    name?.length > 0 ? 
                    <button className='nameSubmit' onClick={resetEverything}> Clear </button>
                    : undefined

                }
            </div>

            {isNameEvaluated ? <h1 className='successMsg'>{success}</h1> : undefined}
        </>
    )
}

export default NameForm