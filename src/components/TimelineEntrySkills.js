import { Fragment } from "react"

import Skill from "./Skill"

export default function TimelineEntrySkills({entry, index, deltaYears})
{
  const educationIconSrc = "https://upload.wikimedia.org/wikipedia/commons/e/e8/Education%2C_Studying%2C_University%2C_Alumni_-_icon.png"

  const separatorStyle = {
    "marginRight": "5px"
  }

  const skills = entry.skills.map((s, index) => {
    return(
      <Fragment key={index}>
        <Skill name={s.name} row={index} imageHeight="20px"/>
        <span style={separatorStyle}></span>
      </Fragment>
    )
  })
  const skillsStyle = {
    "gridRow": `${(index + 1)}`,
    "gridColumn":  `${3 + deltaYears}`
  }
  const educationBadgeStyle = {
    "gridRow": `${(index + 1)}`,
    "gridColumn":  `${3 + deltaYears}`,
    "height": "20px",
    "fontSize": "x-small"
  }

  let educationBadge = null;
  if (entry.entryType === "education")
    educationBadge = <img src={educationIconSrc} alt="education" style={educationBadgeStyle}></img>

  return <>
    <div style={skillsStyle}>
        {skills}
      </div>
      {educationBadge}
  </>
}