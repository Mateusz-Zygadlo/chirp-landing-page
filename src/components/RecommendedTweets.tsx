import React from 'react'
import { RECOMMENDS_TWEETS } from '../data'
import { Tweet } from '../components'

export const RecommendedTweets = () => {
  const { header, tweets } = RECOMMENDS_TWEETS
  
  return(
    <div className="md:px-16 lg:px-24 my-14 px-5 bg-cyan py-16">
      <h1 className="text-5xl font-extrabold mb-5">{header}</h1>
      <div className="tweetsGrid">
        {tweets.map((tweet, index: number) => (
          <Tweet 
            key={index}
            author_image={tweet.author_image}
            author={tweet.author}
            at={tweet.at}
            twitter={tweet.twitter}
            description={tweet.description}
            image_like={tweet.image_like}
            likes={tweet.likes}
            date={tweet.date}
          />
        ))}
      </div>
    </div>
  )
}