// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchData

  return (
    <div className="lastest-match-con">
      <h1 className="heading">Latest Matches</h1>
      <div className="card">
        <div className="logo-container">
          <div className="lastest-match-details-1">
            <p className="team-name">{competingTeam}</p>
            <p className="team-date">{date}</p>
            <p className="match-details">{venue}</p>
            <p className="match-details">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            className="latest-match-team-logo"
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <hr className="separator" />
        <div className="lastest-match-details-2">
          <p className="label">First Innings</p>
          <p className="value">{firstInnings}</p>
          <p className="label">Second Innings</p>
          <p className="value">{secondInnings}</p>
          <p className="label">Man Of The Match</p>
          <p className="value">{manOfTheMatch}</p>
          <p className="label">Umpires</p>
          <p className="value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
