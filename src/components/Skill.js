import "./Skill.css"

export default function Skill({name, experience, row})
{
  const contentStyle = {
    "grid-row": `${(row + 1)} / ${(row + 1)}`,
    "grid-column": "1",
    "font-size": "small"
  }
  const imageContentStyle = {
    ...contentStyle,
    "height": "32px"
  }
  const experienceStyle = {
    "grid-row": `${(row + 1)} / ${(row + 1)}`,
    "grid-column": "2",
    "justify-self": "left",
    "font-size": "small"
  }
  const skillImageMap = {
    "C#": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1820px-Logo_C_sharp.svg.png",
    "React": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    "Python": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
    "Java": "https://upload.wikimedia.org/wikipedia/de/thumb/e/e1/Java-Logo.svg/1200px-Java-Logo.svg.png",
    "Blockchain": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2048px-Bitcoin.svg.png",
    "Ruby on Rails": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Ruby_on_Rails_logo.jpg?20070402090351",
    ".NET": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1024px-.NET_Core_Logo.svg.png?20210328084203",
    "Javascript": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/1200px-Javascript_badge.svg.png"
  }
  let skillContent = <label style={contentStyle}>{name}</label>;
  if (skillImageMap[name])
    skillContent = <img src={skillImageMap[name]} alt={name} style={imageContentStyle}></img>
  const skillExperience = <label style={experienceStyle}>{Array(experience).fill("★").join("")}</label>
  return (
    <>
      {skillContent}
      {skillExperience}
    </>
  )
}