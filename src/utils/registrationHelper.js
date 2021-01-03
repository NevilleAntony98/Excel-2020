import axios from "axios"
import AccountHelper from "./accountHelper"
import AuthHelper from "./authHelper"

export default class RegHelper {
    static asyncHasRegisteredForEvent = async (eventId) => {
        if (!AccountHelper.isUserLoggedIn())
            return false

        const ROUTE = `https://events.excelmec.org/registration/${eventId}`
        let accessToken = await AuthHelper.aysncGetAccessToken()

        const res = await axios.get(ROUTE, {headers: {"Authorization" : `Bearer ${accessToken}`}})

        if (res.status === 200)
            return res.data

        return false
    }

    static asyncRegisterEvent = async (eventId, teamId) => {
        let hasRegistered = await this.asyncHasRegisteredForEvent(eventId)
        if (hasRegistered === true)
            return null

        const accessToken = await AuthHelper.aysncGetAccessToken()
        let header = {
            "Authorization" : `Bearer ${accessToken}`
        }

        let body = {
            "eventId": eventId
        }

        if (teamId != null)
            body["teamId"] = teamId

        const ROUTE = "https://events.excelmec.org/registration"

        let res = null
        try {
            res = await axios.post(ROUTE, body, {headers: header})
        }
        catch(err) {
            res = err.response
        }

        return res
    }

    // TEAM SECTION

    static asyncCreateTeamForEvent = async (teamName, eventId) => {
        const ROUTE = "https://events.excelmec.org/Team"

        const accessToken = await AuthHelper.aysncGetAccessToken()
        let header = {
            "Authorization" : `Bearer ${accessToken}`
        }

        let body = {
            "name": teamName,
            "eventId": eventId
        }

        let res = null
        try {
            res = await axios.post(ROUTE, body, {headers: header})
        }
        catch(err) {
            res = err.response
        }

        // Don't forget to check if we actually created a new team
        return res
    }

    static asyncCheckTeamValid = async (teamId) => {
        const ROUTE = `https://events.excelmec.org/Team/${teamId}`

        const accessToken = await AuthHelper.aysncGetAccessToken()
        let header = {
            "Authorization" : `Bearer ${accessToken}`,
        }

        let isValid = false

        // not handling anything, just trying to avoid console spam
        try {
            let res = await axios.get(ROUTE, {headers: header})

            if (res.status === 200)
                isValid = true
        } catch (err) {}

        return isValid
    }

    static asyncChangeTeamForEvent = async (eventId, teamId) => {
        const ROUTE = "https://events.excelmec.org/registration/team"

        const accessToken = await AuthHelper.aysncGetAccessToken()
        let header = {
            "Authorization" : `Bearer ${accessToken}`,
        }

        let body = {
            "eventId": eventId,
            "teamId": teamId
        }

        let res = null
        try {
            res = await axios.put(ROUTE, body, {headers: header})
        }
        catch(err) {
            res = err.response
        }

        return res
    }

    static asyncGetTeamInfoForEvent = async (eventId) => {
        const teamInfo = {
            teamId: 0,
            teamName: "",
            teamMembers: []
        }

        teamInfo.teamId = await this.asyncGetTeamId(eventId)
        let res = await this.getMembersInTeam(teamInfo.teamId)

        teamInfo.teamName = res.name
        teamInfo.teamMembers = res.members

        return teamInfo
    }

    static asyncGetTeamId = async (eventId) => {
        const ROUTE = `https://events.excelmec.org/events/${eventId}`

        const accessToken = await AuthHelper.aysncGetAccessToken()
        let header = {
            "Authorization" : `Bearer ${accessToken}`,
        }

        let teamId = 0
        const res = await axios.get(ROUTE, {headers: header})
        if (res.status === 200)
            teamId =  res.data.registration.teamId

        return teamId
    }

    static getMembersInTeam = async (teamId) => {
        const ROUTE = `https://events.excelmec.org/Team/${teamId}`

        const accessToken = await AuthHelper.aysncGetAccessToken()
        let header = {
            "Authorization" : `Bearer ${accessToken}`,
        }

        let info = {
            name: "",
            members: []
        }

        const res = await axios.get(ROUTE, {headers: header})
        if (res.status === 200) {
            info.name = res.data.name

            const membersArray = res.data.members
            membersArray.forEach(member => info.members.push(member.name))
        }

        return info
    }
}