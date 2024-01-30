import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";

import Header from "../components/Header";
import TimelineEntries from "../components/TimelineEntries";

import "./Profile.css"

export default function Profile(props)
{
  const searchParams = new URLSearchParams(props?.location?.search);
  const apiKey = searchParams.get('apiKey') || "14nx3gpc76jvoz0q"
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
    {apiKey: apiKey},
  );

  const profileUI = <>
    <Header {...data?.currentUser} />
    <TimelineEntries timelineEntries={data?.currentUser?.timelineEntries}/>
  </>

  const noApiKeyUI = <>
    <p>API Key not provided or invalid</p>
    <p>Correct usage: pass API Key as query parameter "apiKey"</p>
  </>

  return (
    <div className="profile">
     {data.currentUser !== null ? profileUI : noApiKeyUI}
    </div>
  );
}