import "./TimelineEntries.css"

import Skill from "./Skill"

export default function TimelineEntries({timelineEntries})
{
  const dateRangeColors = ["#8ECAE6", "#219EBC", "#023047", "#FFB703", "#FB8500"]
  return (
    <div className="timelineEntries">
      {timelineEntries.map( (te, index) => {
        const titleAndPlace = `${te.title}, ${te.place}`
        const titleAndPlaceStyle = {
          "grid-row": `${(index + 1)}`,
          "grid-column": "1",
          "font-size": "small"
        }
        const dateRangeStyle = {
          "grid-row": `${(index + 1)}`,
          "grid-column": "2",
          "font-size": "small",
          "width": "100%",
          "border": "1px solid #000000",
          "border-radius": "999em",
          "background-color": `${dateRangeColors[index % dateRangeColors.length]}`,
          "margin": "7px 0"
        }
        const separatorStyle = {
          "margin-right": "5px"
        }
        const skills = te.skills.map((s) => <><Skill name={s.name} row={index} imageHeight="20px"/><span style={separatorStyle}></span></>)
        const skillsStyle = {
          "grid-row": `${(index + 1)}`,
          "grid-column": "3"
        }
        return(
          <>
            <label style={titleAndPlaceStyle}>{titleAndPlace}</label>
            <div style={dateRangeStyle}></div>
            <div style={skillsStyle}>
              {skills}
              </div>
          </>
        )
      })}
    </div>
    )
}