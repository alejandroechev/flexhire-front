import Badges from "./Badges"

import "./Summary.css"

export default function Summary({name, textIntroduction, freelancerSubtypes, totalExperience, freelancerRate})
{
  const formattedRate = `${freelancerRate.cents/100.0} ${freelancerRate.currency.code}/hr`
  return (
    <div className="summary">
      <h1 className="summary-name">{name}</h1>
      <p className="summary-intro">{textIntroduction}</p>
      <Badges jobTypes={freelancerSubtypes} totalExperience={totalExperience} rate={formattedRate}/>
    </div>
  )
}