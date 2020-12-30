import { useState, useEffect } from 'react'

import DotLoader from '../../../../components/DotLoader'
import RegHelper from '../../../../utils/registrationHelper'

import './index.scss'

const ManageTeamSection = ({competition}) => {
    const [activeButton, setActiveButton] = useState("view")
    const [teamInfo, setTeamInfo] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const getInfo = async () => {
        RegHelper.asyncGetTeamInfoForEvent(competition.id).then((info) => {
            setTeamInfo(info)
        })
    }

    useEffect(() => {
        if (teamInfo == null)
            getInfo()
    })

    const ViewTeam = () => {
        if (teamInfo == null)
            return <div className="dot-loader"><DotLoader color={"#00a6ff"}/></div>

        return (
            <div className="view-subpage">
                <div>
                    <div><b>Team ID: </b>{teamInfo.teamId}</div>
                    <div><b>Team Name: </b>{teamInfo.teamName}</div>
                </div>
                <div className="team-members-box">
                    <b>Team Members</b>
                    <div className="team-members-container">
                        {teamInfo.teamMembers.length !== 0 ?
                            teamInfo.teamMembers.map(member => <div key={member}>{member}</div>):
                            <div className="impossible-state-empty">
                                There's no one here!
                            </div>
                        }
                    </div>
                </div>
                <div className="team-id-help">
                    Share the team ID with your teammates.
                </div>
            </div>
        )
    }

    const onChangeSubmit = async (event) => {
        setIsLoading(true)

        event.preventDefault()
        const data = new FormData(event.target)
        const teamId = data.get("teamID").trim()

        let res = await RegHelper.asyncCheckTeamValid(teamId)
        if (!res) {
            alert("Invalid team ID: No such team exists.")
            setIsLoading(false)
        }
        else
            RegHelper.asyncChangeTeamForEvent(competition.id, teamId).then(res => {
                if (res == null)
                    alert("Failed to change team.")
                else if (res.status !== 200)
                    alert("Failed to change team: " + res.data.error)
                else {
                    // to trigger rerender
                    setTeamInfo(null)
                    setActiveButton("view")
                }

                setIsLoading(false)
            })
    }

    const ChangeTeam = () => {
        return (
            <div className="change-team-subpage">
                <b>Move to a different team</b>
                <form className="form" onSubmit={onChangeSubmit}>
                    <input type="number" name="teamID" placeholder="New team ID" required/>
                    {!isLoading ?
                    <input type="submit" value="Change team" /> :
                    <button className="fake-change-button">
                        <DotLoader color={"#ffffff"} />
                    </button>}
                </form>
            </div>
        )
    }

    return(
        <div className="manage-section">
            <div className="button-group">
                <button
                className={activeButton === "view" ? "active" : ''}
                onClick={() => setActiveButton("view")}>
                View Team
                </button>

                <button
                className={activeButton === "change" ? "active" : ''}
                onClick={() => setActiveButton("change")}>
                Change Team
                </button>
            </div>
            <div className="manage-subpage">
                {{
                    "view": <ViewTeam />,
                    "change": <ChangeTeam />
                }[activeButton]}
            </div>
        </div>
    )
}

export default ManageTeamSection