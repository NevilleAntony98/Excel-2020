import { useState } from 'react'

import RegHelper from '../../../../utils/registrationHelper'
import DotLoader from './../../../../components/DotLoader'

import './index.scss'

const RegisterSection = ({competition, setHasRegistered, setActiveSection}) => {
    const [activeButton, setActiveButton] = useState("join")
    const [isLoading, setIsLoading] = useState(false)

    const onCreateSubmit = (event) => {
        setIsLoading(true)

        event.preventDefault()
        const data = new FormData(event.target)
        const name = data.get("name").trim()

        RegHelper.asyncCreateTeamForEvent(name, competition.id).then((res) => {
            if (res == null)
                alert("Failed to create team")
            else if (res.status === 200) {
                RegHelper.asyncRegisterEvent(competition.id, res.data.id)
                    .then(res => {
                        if (res == null)
                            alert("Failed to register")
                        else if (res.status === 200) {
                            setActiveSection("Manage")
                            setHasRegistered(true)
                        }
                        else
                            alert("Failed to register: " + res.data.error)

                        setIsLoading(false)
                    })
            }
            else {
                alert("Failed to create team: " + res.data.error)
                setIsLoading(false)
            }
        })
    }

    const onJoinSubmit = async (event) => {
        setIsLoading(true)

        event.preventDefault()
        const data = new FormData(event.target)
        const teamId = data.get("teamID").trim()

        let res = await RegHelper.asyncCheckTeamValid(teamId)
        if (!res) {
            alert("Invalid team ID")
            setIsLoading(false)
        }
        else
            RegHelper.asyncRegisterEvent(competition.id, teamId)
                .then(res => {
                    if (res == null)
                        alert("Failed to join team")
                    else if (res.status === 200) {
                        setActiveSection("Manage")
                        setHasRegistered(true)
                    }
                    else
                        alert("Failed to join team: " + res.data.error)

                    setIsLoading(false)
                })
    }

    const CreateTeam = () => {
        return (
            <div className="create-team-subpage">
                <b>Create a team and share your team ID for others to join</b>
                <form className="form" onSubmit={onCreateSubmit}>
                    <input type="text" name="name" placeholder="Team name" required/>
                    {!isLoading ?
                    <input type="submit" value="Create team" /> :
                    <button className="fake-create-button">
                        <DotLoader color={"#ffffff"} />
                    </button>}
                </form>
            </div>
        )
    }

    const JoinTeam = () => {
        return (
            <div className="join-team-subpage">
                <b>Join with team ID. Ask your teammates to share the team ID.</b>
                <form className="form" onSubmit={onJoinSubmit}>
                    <input type="number" name="teamID" placeholder="Team ID" required/>
                    {!isLoading ?
                    <input type="submit" value="Join team" /> :
                    <button className="fake-join-button">
                        <DotLoader color={"#ffffff"} />
                    </button>}
                </form>
            </div>
        )
    }

    return(
        <div className="register-section">
            <div className="button-group">
                <button
                className={activeButton === "join" ? "active" : ''}
                onClick={() => setActiveButton("join")}>
                Join Team
                </button>

                <button
                className={activeButton === "create" ? "active" : ''}
                onClick={() => setActiveButton("create")}>
                Create Team
                </button>
            </div>
            <div className="register-subpage">
                {{
                    "create": <CreateTeam />,
                    "join": <JoinTeam />
                }[activeButton]}
            </div>
        </div>
    )
}

export default RegisterSection