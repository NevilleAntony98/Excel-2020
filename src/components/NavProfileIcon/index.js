import { useState } from 'react'
import { Spring, config } from 'react-spring/renderprops'
import Popup from 'reactjs-popup'

import './index.scss'

import profilepic from '../../assets/png/profilepic.png'
import AccountHelper from '../../utils/accountHelper'
import AuthHelper from '../../utils/authHelper'

const NavProfileIcon = ({isMobile = false}) => {
    const [profile, setProfile] = useState(null);

    let onProfileClicked = () => {
        if (!AccountHelper.isUserLoggedIn())
            AccountHelper.logUserIn()
    }

    let onEditProfileClicked = () => {
        AuthHelper.aysncGetAccessToken()
        .then (() => window.open("https://staging.accounts.excelmec.org", "_blank"))
    }

    if (profile == null)
        AccountHelper.asyncGetUserProfile()
            .then((res) => {
                if (res != null)
                    setProfile(res)
            })
            .catch(() => console.log("Failed to fetch profile pic"))

    if (profile == null) {
        return (
            <div className="navbarProfile" onClick={onProfileClicked}>
                <img className="navbarProfileIcon" alt="default" src={profilepic} />
            </div>
        )
    }

    return (
        <Spring
        from={{opacity: 0}}
        to={{opacity: 1}}
        config={config.slow}>
        {props => (
            <div style={props}>
                <Popup
                trigger={open => (
                    <div className="navbarProfile">
                        <img className="navbarProfileIcon" alt="default" src={profile.picture} />
                    </div>
                )}
                position={isMobile ? "left top" : "right top"}
                closeOnDocumentClick
                >
                    <div className="profile-popup">
                        <span className="signed-in-text">
                            <i>Signed in as {profile.name.split(" ")[0]}</i>
                            <small>{profile.email}</small>
                        </span>
                        <div className="buttons-box">
                            <button onClick={onEditProfileClicked}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 472.615 472.615"><circle cx="236.308" cy="117.504" r="111.537"/><path d="M369 246.306c-1.759-1.195-5.297-3.493-5.297-3.493-28.511 39.583-74.993 65.402-127.395 65.402-52.407 0-98.894-25.825-127.404-65.416 0 0-2.974 1.947-4.451 2.942C41.444 288.182 0 360.187 0 441.87v24.779h472.615V441.87c0-81.321-41.077-153.048-103.615-195.564z"/></svg>
                                <span>Account</span>
                            </button>
                            <button
                            onClick={() => {
                                setProfile(null)
                                AccountHelper.logUserOut()
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M476.352 247.979l-85.333-74.667c-3.136-2.731-7.616-3.392-11.435-1.685a10.64 10.64 0 00-6.251 9.707v32H256c-5.888 0-10.667 4.779-10.667 10.667v64c0 5.888 4.779 10.667 10.667 10.667h117.333v32A10.675 10.675 0 00384 341.335c2.539 0 5.035-.896 7.019-2.645l85.333-74.667c2.325-2.027 3.648-4.949 3.648-8.021s-1.323-5.997-3.648-8.023z"/><path d="M341.333 320H256c-17.643 0-32-14.357-32-32v-64c0-17.643 14.357-32 32-32h85.333c5.888 0 10.667-4.779 10.667-10.667V32c0-17.643-14.357-32-32-32H64C46.357 0 32 14.357 32 32v448c0 17.643 14.357 32 32 32h256c17.643 0 32-14.357 32-32V330.667c0-5.888-4.779-10.667-10.667-10.667z"/></svg>
                                <span>Logout</span>
                            </button>
                        </div>
                    </div>
                </Popup>
            </div>
        )}
        </ Spring>
    )
}

export default NavProfileIcon