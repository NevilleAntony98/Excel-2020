import { useState, Fragment } from 'react'
import Popup from 'reactjs-popup'

import RegHelper from '../../../../utils/registrationHelper'
import AccountHelper from '../../../../utils/accountHelper'

import './index.scss'
import DotLoader from '../../../../components/DotLoader'

const UpdateMobilePopup = ({open, closeFunc}) => {
    return(
        <Popup open={open} nested>
            <div className="update-mobile-popup">
                <div className="close-container" onClick={closeFunc}>
                    <svg className="close-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252 252"><path d="M126 0C56.523 0 0 56.523 0 126s56.523 126 126 126 126-56.523 126-126S195.477 0 126 0zm0 234c-59.551 0-108-48.449-108-108S66.449 18 126 18s108 48.449 108 108-48.449 108-108 108z"/><path d="M164.612 87.388a9 9 0 00-12.728 0L126 113.272l-25.885-25.885a9 9 0 00-12.728 0 9 9 0 000 12.728L113.272 126l-25.885 25.885a9 9 0 006.364 15.364 8.975 8.975 0 006.364-2.636L126 138.728l25.885 25.885c1.757 1.757 4.061 2.636 6.364 2.636s4.606-.879 6.364-2.636a9 9 0 000-12.728L138.728 126l25.885-25.885a9 9 0 00-.001-12.727z"/></svg>
                </div>
                <div className="content">
                    Please update your phone number and refresh page to register
                    <div className="buttons-container">
                        <button onClick={() => window.open("https://staging.accounts.excelmec.org/profile", "_blank")}>
                            Update
                        </button>
                        <button onClick={() => window.location.reload()}>
                            Refresh
                        </button>
                    </div>
                </div>
            </div>
        </Popup>
    )
}

const RegisterButton = ({competition, hasRegistered, setHasRegistered, setActiveSection}) => {
    const [open, setOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    if (!competition.needRegistration)
        return (null)

    const onRegisterClicked = async () => {
        setIsLoading(true)

        let profile = await AccountHelper.asyncGetUserProfile()
        if (profile.mobileNumber == null) {
            setIsLoading(false)
            setOpen(true)
            return
        }

        if (hasRegistered == null)
            return

        if (!hasRegistered) {
            if (!competition.isTeam)
                RegHelper.asyncRegisterEvent(competition.id, null).then(res => {
                    if (res != null && res.status === 200)
                        setHasRegistered(true)

                    setIsLoading(false)
                })
            else {
                setIsLoading(false)
                setActiveSection("Register")
            }
        } else
            if (competition.isTeam) {
                setIsLoading(false)
                setActiveSection("Manage")
            }
    }

    // We don't know if the user has or hasn't registered
    if (hasRegistered == null || isLoading)
        return (
            <button className="register-button">
                <DotLoader color={"#ffffff"} />
            </button>
        )

    // registration closed or not open
    if (!hasRegistered && (competition.registrationOpen === false || competition.registrationOpen == null))
        return (
            <button className="register-button" >
                Registration Closed
            </button>
        )

    // User isn't logged in
    if (!AccountHelper.isUserLoggedIn()) {
        return (
            <button className="register-button" onClick={AccountHelper.logUserIn}>
                Sign in to register
            </button>
        )
    }

    return (
        <Fragment>
            <button className="register-button"
            onClick={onRegisterClicked}>
                {hasRegistered ?
                    competition.isTeam ? "Manage Team" : "Registered":
                    "Register"}
            </button>
            <UpdateMobilePopup open={open} closeFunc={() => setOpen(false)} />
        </Fragment>
    )
}

export default RegisterButton