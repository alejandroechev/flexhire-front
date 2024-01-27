import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";

import Header from "../components/Header";
import TimelineEntries from "../components/TimelineEntries";

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
      <TimelineEntries timelineEntries={data.currentUser.timelineEntries}/>
    </div>
  );
}