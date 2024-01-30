import { useMediaQuery } from 'react-responsive'

import "./TimelineEntries.css"

import TimelineEntry from "./TimelineEntry"
import { endYear, startYear } from '../utils/dateUtils'

export default function TimelineEntries({timelineEntries})
{
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  const maxYear = Math.max(...(timelineEntries.map(te => endYear(te))))
  const minYear = Math.min(...(timelineEntries.map(te => startYear(te))))
  const deltaYears = maxYear - minYear

  return (
    <div className={ isTabletOrMobile ? "timelineEntries-mobile" : "timelineEntries"}>
      {
        timelineEntries.map( (te, index) => {
          return <TimelineEntry entry={te} index={index} minYear={minYear} deltaYears={deltaYears}/>
        })
      }
    </div>
  )
}