import "./TimelineEntries.css"

import Skill from "./Skill"

export default function TimelineEntries({timelineEntries})
{
  return (
    <div className="timelineEntries">
      {timelineEntries?.map( (te, index) => {
        const titleAndPlace = `${te.title}, ${te.place}`
        const titleAndPlaceStyle = {
          "grid-row": `${(index + 1)}`,
          "grid-column": "1",
          "font-size": "small"
        }
        const dateRange = `${te.dateStart} - ${te.dateEnd}`
        const dateRangeStyle = {
          "grid-row": `${(index + 1)}`,
          "grid-column": "2",
          "font-size": "small"
        }
        const separatorStyle = {
          "margin-right": "5px"
        }
        const skills = te.skills.map((s) => <><Skill name={s.name} row={index}/><span style={separatorStyle}></span></>)
        const skillsStyle = {
          "grid-row": `${(index + 1)}`,
          "grid-column": "3"
        }
        return(
          <>
            <label style={titleAndPlaceStyle}>{titleAndPlace}</label>
            <label style={dateRangeStyle}>{dateRange}</label>
            <div style={skillsStyle}>
              {skills}
              </div>
          </>
        )
      })}
    </div>
    )
}