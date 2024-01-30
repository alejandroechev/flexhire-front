import { useMediaQuery } from 'react-responsive'

import Summary from "./Summary"
import Skills from "./Skills"

import "./Header.css"

export default function Header(props)
{
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <div className={ isTabletOrMobile ? "header-mobile" : "header"}>
      <img src={props.avatarUrl} alt="User Avatar" className="header-avatar"></img>
      <Summary name={props.name} {...props.profile}/>
      <Skills skills={props.userSkills}/>
    </div>
  )
}