import axios from 'axios'

import AuthHelper from './authHelper'

export default class AccountHelper {

    static logUserIn = () => {
        if (!this.isUserLoggedIn())
            window.location.href = "https://accounts.excelmec.org/auth/login?redirect_to=" + window.location;
    }

    static logUserOut = () => {
        if (this.isUserLoggedIn()) {
            AuthHelper.clearAllTokens()
            window.location.href = "https://accounts.excelmec.org/auth/logout?redirect_to=" + window.location;
        }
    }

    static isUserLoggedIn = () => {
        return AuthHelper.getRefreshToken() != null
    }

    static asyncGetUserProfile = async () => {
        let profile = null

        if (this.isUserLoggedIn()) {
            let access_token = await AuthHelper.aysncGetAccessToken()
            if (access_token != null) {
                try {
                    let res = await axios.get("https://accounts.excelmec.org/api/Profile/view", {
                        headers: {"Authorization" : `Bearer ${access_token}`}
                    })

                    if (res.status === 200)
                        profile = res.data
                }
                catch(err) {
                    console.log("Failed to fetch user profile")
                }
            }
        }

        return profile
    }
}