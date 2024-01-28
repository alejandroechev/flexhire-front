import { Fragment } from "react"

import "./TimelineEntries.css"

import Skill from "./Skill"

export default function TimelineEntries({timelineEntries})
{
  const dateRangeColors = ["#8ECAE6", "#219EBC", "#023047", "#FFB703", "#FB8500"]

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
        const titleAndPlace = `${te.title}, ${te.place}`
        const titleAndPlaceStyle = {
          "gridRow": `${(index + 1)}`,
          "gridColumn": "1",
          "fontSize": "small"
        }
        const dateRangeStyle = {
          "gridRrow": `${(index + 1)}`,
          "gridColumn": `${2} / ${2 + deltaYears}`,
          "fontSize": "small",
          "width": "100%",
          "border": "1px solid #000000",
          "borderRadius": "999em",
          "backgroundColor": `${dateRangeColors[index % dateRangeColors.length]}`,
          "margin": "7px 0"
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
        return(
          <Fragment key={index}>
            <label style={titleAndPlaceStyle}>{titleAndPlace}</label>
            <div style={dateRangeStyle}></div>
            <div style={skillsStyle}>
              {skills}
              </div>
          </Fragment>
        )
      })}
    </div>
    )
}