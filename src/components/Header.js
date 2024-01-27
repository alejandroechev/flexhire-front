import Summary from "./Summary"
import Skills from "./Skills"

import "./Header.css"

export default function Header(props)
{
  return (
    <div className="header">
      <img src={props.avatarUrl} alt="User Avatar" className="header-avatar"></img>
      <Summary name={props.name} {...props.profile}/>
      <Skills skills={props.userSkills}/>
    </div>
  )
}