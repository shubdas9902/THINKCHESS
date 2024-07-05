import React from 'react'
import CommunityBg from '../Components/CommunityBg'
import CommunityPost from '../Components/CommunityPost'
import Conversation from '../Components/Community-content/Conversation'

const Community = () => {
  return (
    <div>
        <CommunityBg/>
        <CommunityPost/>
        <Conversation/>
    </div>
  )
}

export default Community