import React from "react";
import Image from '../assets/images/image.svg';

function EntryApp() {
  return (
    <div>
      <form>
        <div className="svgContainer">
          <div>
            <img src={Image} alt={'Moving'} />
          </div>
        </div>

        <div className="inputGroup inputGroup1">
          <label htmlFor="email1">Email</label>
          <input type="text" id="email" className="email" maxLength="256" />
          <p className="helper helper1">email@domain.com</p>
          <span className="indicator"></span>
        </div>
        <div className="inputGroup inputGroup2">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="password" />
        </div>
        <div className="inputGroup inputGroup3">
          <button id="login">Log in</button>
        </div>
      </form>
    </div>
  );
}

export default EntryApp;
