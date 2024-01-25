import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";

export default function Profiler()
{
  const query = graphql`
    query Profile_UserName_Query {
      currentUser {
        name
        avatarUrl
        userSkills {
          experience
          skill {
            name
          }
        }
        resume {
          url
        }
      }
    }
  `;
  const data = useLazyLoadQuery(
    query,
    {},
  );

  return (
    <>
      <label>{data.currentUser.name}</label>
      <img src={data.currentUser.avatarUrl} alt="User Avatar"></img>
      <a href={data.currentUser.resume.url} target="_blank" rel="noreferrer">Resume</a>
      <ul>
        {data.currentUser.userSkills.map( (us) => {
          return(
            <li>
              <label>{us.skill.name}</label>
              <label>{us.experience}</label>
            </li>
          )
        })}
      </ul>
    </>
  );
}