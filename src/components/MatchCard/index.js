// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} = matchDetails

  const getMatchClassName = status => (status === 'Won' ? 'won' : 'lost')
  const matchsttausClassname = `status ${getMatchClassName(matchStatus)}`

  return (
    <li className="match-item">
      <img
        src={competingTeamLogo}
        className="competing-logo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={matchsttausClassname}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
