import Skill from "./Skill"

import "./Skills.css"
export default function Skills({skills})
{
  return (
    <div className="skills">
      {skills?.map((s, i) => <Skill row={i} name={s.skill.name} experience={s.experience}></Skill>)}
    </div>
  )
}