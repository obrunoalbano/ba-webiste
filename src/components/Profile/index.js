import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Avatar from "../Avatar"
import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled"

const Profile = () => {

  const { 
    site: { 
      siteMetadata: { title, description, position } 
    }, 
  } = useStaticQuery(graphql`
    query MySiteMetaData {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `)

  return(
    <S.ProfileWrapper>
      <S.ProfileLink to="/" cover direction="left" bg={getThemeColor()} duration={0.6}>
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
} 

// const Profile = () => (

//   <StaticQuery
//     query={graphql`
//       query MySiteMetaData {
//         site {
//           siteMetadata {
//             title
//             position
//             description
//           }
//         }
//       }
//     `}
//     render={({ 
//       site: { 
//         siteMetadata: { title, description, position } 
//       }, 
//     }) => (
//       <div className="profile-wrapper">
//         <h1>{title}</h1>
//         <h2>{position}</h2>
//         <p>{description}</p>
//       </div>
//     )}
//   />
// )

export default Profile
