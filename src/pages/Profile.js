import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";

import Header from "../components/Header";

import "./Profile.css"

export default function Profile()
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
        profile {
          freelancerSubtypes {
            name
          }
          freelancerRate {
            cents
            currency {
              code
            }
          }
          totalExperience
          textIntroduction
        }
        timelineEntries {
          title
          place
          entryType
          company {
            name
          }
          dateStart
          dateEnd
          description
          skills {
            name
          }
          institute {
            name
          }
        }
      }
    }
  `;
  const data = useLazyLoadQuery(
    query,
    {},
  );

  return (
    <div className="profile">
      <Header {...data.currentUser} />
      <ul>
        {data.currentUser.timelineEntries.map( (te) => {
          return(
            <li>
              <label>{`Type: ${te.entryType}`}</label>
              <label>{`Title: ${te.title}`}</label>
              <label>{`Place: ${te.place}`}</label>
              <label>{`Start: ${te.dateStart}`}</label>
              <label>{`End: ${te.dateEnd}`}</label>
              <label>{`Description: ${te.description}`}</label>
              <label>{`Skills: ${te.skills.map((s) => s.name)}`}</label>
            </li>
          )
        })}
      </ul>
    </div>
  );
}