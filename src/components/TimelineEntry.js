import { Fragment } from "react"

import TimelineEntryTitle from "./TimelineEntryTitle"
import TimelineEntryDateRange from "./TimelineEntryDateRange"
import TimelineEntrySkills from "./TimelineEntrySkills"

export default function TimelineEntry({entry, index,  minYear, deltaYears})
{
  return(
    <Fragment key={index}>
      <TimelineEntryTitle entry={entry} index={index}/>
      <TimelineEntryDateRange entry={entry} index={index} minYear={minYear}/>
      <TimelineEntrySkills entry={entry} index={index} deltaYears={deltaYears}/>
    </Fragment>
  )
}