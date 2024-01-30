import { Fragment } from "react"
import { Tooltip } from 'react-tooltip'

import Skill from "./Skill"
import { endYear, startYear } from '../utils/dateUtils'

export default function TimelineEntry({entry, index,  minYear, deltaYears})
{
  const dateRangeColors = ["#8ECAE6", "#219EBC", "#023047", "#FFB703", "#FB8500"]
  const dateRangeFontColors = ["#000000", "#000000", "#FFFFFF", "#000000", "#000000"]
  const educationIconSrc = "https://upload.wikimedia.org/wikipedia/commons/e/e8/Education%2C_Studying%2C_University%2C_Alumni_-_icon.png"

  const teStartYear = startYear(entry)
  const teEndYear = endYear(entry)
  const startColumn = 2 + teStartYear - minYear
  const endColumn = 2 + teEndYear - minYear

  const titleAndPlace = `${entry.title}, ${entry.place}`
  const titleAndPlaceStyle = {
    "gridRow": `${(index + 1)}`,
    "gridColumn": "1",
    "fontSize": "small"
  }
  const tooltipStyle = {
    "fontSize": "x-small",
    "width": "400px"
  }

  let tooltip = null;
  if (entry.entryType !== "education")
  {
    tooltip = (
    <Tooltip id={`te-${index}-tooltip`} multiline={true} style={tooltipStyle}>
      <p >{entry.description}</p>
    </Tooltip>
    )
  }
  const titleAndPlaceComponent = <>
      <label data-tooltip-id={`te-${index}-tooltip`} style={titleAndPlaceStyle}>{titleAndPlace}</label>
      {tooltip}
    </>

  const dateRangeStyle = {
    "gridRow": `${(index + 1)}`,
    "gridColumn": `${startColumn} / ${endColumn}`,
    "fontSize": "x-small",
    "width": "100%",
    "border": "1px solid #000000",
    "borderRadius": "999em",
    "backgroundColor": `${dateRangeColors[index % dateRangeColors.length]}`,
    "color": `${dateRangeFontColors[index % dateRangeFontColors.length]}`,
    "margin": "7px 0",
    "textAlign": "center"
  }

  const separatorStyle = {
    "marginRight": "5px"
  }

  const dateRangeComponent = <div style={dateRangeStyle}>
    <label>{`${teStartYear} - ${teEndYear}`}</label>
  </div>

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

  const skillsComponent = <>
    <div style={skillsStyle}>
        {skills}
      </div>
      {educationBadge}
  </>

  return(
    <Fragment key={index}>
      {titleAndPlaceComponent}
      {dateRangeComponent}
      {skillsComponent}
    </Fragment>
  )
}