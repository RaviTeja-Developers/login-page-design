import React from "react";


function Account() {
  return (
    <div className="content">
      <p>Account</p>


      <div className="settings-page">
        <div className="settings-container">
          <h1 className="page-title">Account</h1>
          <div className="settings-section">
            <h2 className="settings-title">General Information</h2>
            <div className="non-active-form">
              <p>ccu-an-b</p><i className="fas fa-pen"></i>
            </div>
            <div>
              <div className="non-active-form">
                <p className="capitalize">chloé</p><i className="fas fa-pen"></i>
              </div>
            </div>
            <div>
              <div className="non-active-form">
                <p className="capitalize">c</p><i className="fas fa-pen"></i>
              </div>
            </div>
            <div>
              <div className="non-active-form">
                <p>chloe@test.fr</p><i className="fas fa-pen"></i>
              </div>
            </div>
          </div>
          <div className="settings-section">
            <h2 className="settings-title">My profile</h2>
            <form className="form my-form">
              <div className="img-upload-container">
                <label className="img-upload btn btn-bwm">
                  <input type="file" accept=".jpg, .png, .jpeg, .gif" value="" />
                </label>
                <h4>Change Your Profile Picture</h4>
                <div className="img-preview-container">
                  <div className="img-preview">
                  </div>
                </div>
              </div>
              <div className="form-submit">
                <button className="btn button full" type="submit" disabled="">Save New Picture</button>
              </div>
            </form>
          </div>
          <div className="settings-section">
            <h2 className="settings-title">Password</h2>
            <form className="form my-form">
              <div className="form-group">
                <div className="input-group">
                  <input name="currentPassword" placeholder="Old Password" type="password" className="form-control" autocomplete="Old Password" value="" />
                  <span className="focus-input"></span>
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <input name="password" placeholder="New Password" type="password" className="form-control" autocomplete="New Password" value="" />
                  <span className="focus-input"></span>
                </div>
              </div>
              <div className="form-submit right">
                <button className="btn button full" type="submit" disabled="">Change Password</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
