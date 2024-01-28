import "./Badges.css"

export default function Badges({jobTypes, totalExperience, rate})
{
  return (
    <div className="badges">
      <div className="badge badge-experience">{`${totalExperience} years of experience`}</div>
      {jobTypes?.map((jt,i) => <div key={i} className="badge badge-jobtype">{jt.name}</div>)}
      <div className="badge badge-rate">{rate}</div>
    </div>
  )
}