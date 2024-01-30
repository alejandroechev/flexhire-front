import { Tooltip } from 'react-tooltip'

export default function TimelineEntryTitle({entry, index})
{
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

  return <>
      <label data-tooltip-id={`te-${index}-tooltip`} style={titleAndPlaceStyle}>{titleAndPlace}</label>
      {tooltip}
    </>

}