
import React from 'react';
import './index.css';
const ValidateAMsg = ({ msgTyp, CRYear, onClose }) => {
  const handleSubmit = () => { }
  return (
    <div className="ValiudateMsgPopupContainer">
      <div className="ValiudateMsgPopup">
        <div className="header"></div>
        <div className='Comparebody'>
          <div className="MsgInput">msgtype : {msgTyp}</div>
          <div className="MsgOutput">CRYear : {CRYear}</div>
        </div>
        <div className="footer">
          <button className="SubDtn" onClick={onClose}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default ValidateAMsg;