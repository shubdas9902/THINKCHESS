import React from 'react'
import useGetComPost from '../../hooks/useGetComPost.js'
import Conversation from './Conversation'

const Com = () => {
    const {conversations}= useGetComPost()
  return (
    <div>
        {conversations.map((conversation, idx) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					lastIdx={idx === conversations.length - 1}
				/>
			))}
    </div>
  )
}

export default Com