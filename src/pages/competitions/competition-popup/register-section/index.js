import { useState } from 'react'

import RegHelper from '../../../../utils/registrationHelper'

import './index.scss'

const RegisterSection = ({competition, setHasRegistered, setActiveSection}) => {
    const [activeButton, setActiveButton] = useState("create")

    const onCreateSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.target)
        const name = data.get("name")

        RegHelper.asyncCreateTeamForEvent(name, competition.id).then((res) => {
            if (res.status === 200) {
                RegHelper.asyncRegisterEvent(competition.id, res.data.id)
                    .then(res => {
                        if (res != null && res.status === 200) {
                            setActiveSection("Manage")
                            setHasRegistered(true)
                        }
                    })
            }
            else
                alert("Failed to create a team with the given name")
        })
    }

    const onJoinSubmit = async (event) => {
        event.preventDefault()
        const data = new FormData(event.target)
        const teamId = data.get("teamID")

        let res = await RegHelper.asyncCheckTeamValid(teamId)
        if (!res)
            alert("Invalid team ID")
        else
            RegHelper.asyncRegisterEvent(competition.id, teamId)
                .then(res => {
                    if (res != null && res.status === 200) {
                        setActiveSection("Manage")
                        setHasRegistered(true)
                    }
                })
    }

    const CreateTeam = () => {
        return (
            <div className="create-team-subpage">
                <b>Create a team and share your team ID for others to join</b>
                <form className="form" onSubmit={onCreateSubmit}>
                    <input type="text" name="name" placeholder="Team name" required/>
                    <input type="submit" value="Create team" />
                </form>
            </div>
        )
    }

    const JoinTeam = () => {
        return (
            <div className="join-team-subpage">
                <b>Join with team ID</b>
                <form className="form" onSubmit={onJoinSubmit}>
                    <input type="number" name="teamID" placeholder="Team ID" required/>
                    <input type="submit" value="Join team" />
                </form>
            </div>
        )
    }

    return(
        <div className="register-section">
            <div className="button-group">
                <button
                className={activeButton === "create" ? "active" : ''}
                onClick={() => setActiveButton("create")}>
                Create Team
                </button>

                <button
                className={activeButton === "join" ? "active" : ''}
                onClick={() => setActiveButton("join")}>
                Join Team
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