import { useState } from 'react';
import './index.css'

const Utility = () => {
    const [msgType, setMsgType] = useState('');
    const [crYears, setcrYears] = useState([]);
    const upArrowSVG = <svg fill="#000000"  viewBox="0 0 330 330"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_93_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"></path> </g></svg>
    const showOptions = () => {
        const selectbox = document.getElementById("selectionBox");
        const closeOptions = document.getElementById("closeOptions");
        selectbox.style.visibility = 'visible'
        closeOptions.style.visibility = 'visible'

    }
    const hideOptions = () => {
        const selectbox = document.getElementById("selectionBox");
        const closeOptions = document.getElementById("closeOptions");
        closeOptions.style.visibility = 'hidden'
        selectbox.style.visibility = 'hidden'

    }
    const checkBoxToggle = (e) => {
        if (e.target.checked) {
            setcrYears(prev => [...prev, e.target.value]);
        } else {
            setcrYears(prev => prev.filter(year => year !== e.target.value));
        }
    }
    const handleMsgTypeChange = (e) => {
        setMsgType(e.target.value);
        const msgTypeInput = document.querySelector('.msgTypeInput');
        if (e.target.value.trim() === '') {
            msgTypeInput.style.border = '1px solid red';
        } else {
            msgTypeInput.style.border = '2px solid #aaaaaa';
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Message Type:", msgType);
        console.log("CR Years:", crYears);
    }
    const handleReset = () => {
        setMsgType('');
        setcrYears([]);
        const msgTypeInput = document.querySelector('.msgTypeInput');
        msgTypeInput.style.border = '2px solid #aaaaaa';
        const checkboxes = document.querySelectorAll('.checkbox');
        checkboxes.forEach(checkbox => checkbox.checked = false);
    }
    return (
        <div className="utilityPage">
            <div className="formContainer">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="feilds">
                        <div className="feild">
                            <div className="label"><label htmlFor="msgtype">Msg Type :</label></div>
                            <div><textarea onChange={e=>handleMsgTypeChange(e)} className='msgTypeInput' name="msgtypes" id="msgtype" value={msgType}></textarea></div>
                        </div>
                        <div className="feild">
                            <div className="label"><label htmlFor="msgtype">CR Year :</label></div>
                            <div><input onFocus={(e) => showOptions(e)} className='CRInput' name="msgtypes" id="msgtype" readOnly placeholder='--Select--' value={crYears}></input><button className='closeOptions' id='closeOptions' onClick={(e) => { hideOptions(e) }}>{upArrowSVG}</button></div>
                            <div className="selectionBox" id='selectionBox' >
                                <div className="option">
                                    <input className='checkbox' onChange={e=>checkBoxToggle(e)} type="checkbox" name="CRYear" id="2021" value="2021" />
                                    <label htmlFor="2021">2021</label>
                                </div>
                                <div className="option">
                                    <input className='checkbox' onChange={e=>checkBoxToggle(e)} type="checkbox" name="CRYear" id="2022" value="2022" />
                                    <label htmlFor="2022">2022</label>
                                </div>
                                <div className="option">
                                    <input className='checkbox' onChange={e=>checkBoxToggle(e)} type="checkbox" name="CRYear" id="2023" value="2023" />
                                    <label htmlFor="2023">2023</label>
                                </div>
                                <div className="option">
                                    <input className='checkbox' onChange={e=>checkBoxToggle(e)} type="checkbox" name="CRYear" id="2024" value="2024" />
                                    <label htmlFor="2024">2024</label>
                                </div>
                                <div className="option">
                                    <input className='checkbox' onChange={e=>checkBoxToggle(e)} type="checkbox" name="CRYear" id="2025" value="2025" />
                                    <label htmlFor="2025">2025</label>
                                </div>
                            </div>
                        </div>
                        <div className="feild btns">
                            <button className="formBtn" onClick={handleSubmit}>Submit</button>
                            <button className="formBtn" onClick={handleReset}>Reset</button>
                        </div>


                    </div>
                </form>
            </div>
        </div>
    )
}

export default Utility