import { endYear, startYear } from '../utils/dateUtils'

export default function TimelineEntryDateRange({entry, index, minYear})
{
  const dateRangeColors = ["#8ECAE6", "#219EBC", "#023047", "#FFB703", "#FB8500"]
  const dateRangeFontColors = ["#000000", "#000000", "#FFFFFF", "#000000", "#000000"]

  const teStartYear = startYear(entry)
  const teEndYear = endYear(entry)
  const startColumn = 2 + teStartYear - minYear
  const endColumn = 2 + teEndYear - minYear

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

  return <div style={dateRangeStyle}>
    <label>{`${teStartYear} - ${teEndYear}`}</label>
  </div>

}