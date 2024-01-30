import { Fragment } from "react"
import { Tooltip } from 'react-tooltip'

import "./TimelineEntries.css"

import Skill from "./Skill"

export default function TimelineEntries({timelineEntries})
{
  const dateRangeColors = ["#8ECAE6", "#219EBC", "#023047", "#FFB703", "#FB8500"]
  const dateRangeFontColors = ["#000000", "#000000", "#FFFFFF", "#000000", "#000000"]
  const educationIconSrc = "https://upload.wikimedia.org/wikipedia/commons/e/e8/Education%2C_Studying%2C_University%2C_Alumni_-_icon.png"

  const endYear = (te) => {
    if (te.dateEnd === null) return (new Date().getFullYear())
    return parseInt(te.dateEnd.substring(0, 4))
  }
  const startYear = (te) => parseInt(te.dateStart.substring(0, 4))

  const maxYear = Math.max(...(timelineEntries.map(te => endYear(te))))
  const minYear = Math.min(...(timelineEntries.map(te => startYear(te))))
  const deltaYears = maxYear - minYear

  return (
    <div className="timelineEntries">
      {timelineEntries.map( (te, index) => {
        const teStartYear = startYear(te)
        const teEndYear = endYear(te)
        const startColumn = 2 + teStartYear - minYear
        const endColumn = 2 + teEndYear - minYear
        const titleAndPlace = `${te.title}, ${te.place}`
        const titleAndPlaceStyle = {
          "gridRow": `${(index + 1)}`,
          "gridColumn": "1",
          "fontSize": "small"
        }
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
        const skills = te.skills.map((s, index) => {
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
        const tooltipStyle = {
          "fontSize": "x-small",
          "width": "400px"
        }

        let educationBadge = null;
        let tooltip = null;
        if (te.entryType === "education")
        {
          educationBadge = <img src={educationIconSrc} alt="education" style={educationBadgeStyle}></img>
        }
        else
        {
         tooltip = (
          <Tooltip id={`te-${index}-tooltip`} multiline={true} style={tooltipStyle}>
            <p >{te.description}</p>
          </Tooltip>
          )
         }

        return(
          <Fragment key={index}>
            <label data-tooltip-id={`te-${index}-tooltip`} style={titleAndPlaceStyle}>{titleAndPlace}</label>
            {tooltip}
            <div style={dateRangeStyle}>
              <label>{`${teStartYear} - ${teEndYear}`}</label>
            </div>
            <div style={skillsStyle}>
              {skills}
            </div>
            {educationBadge}
          </Fragment>
        )
      })}
    </div>
    )
}