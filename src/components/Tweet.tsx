import React from 'react'

interface TweetProps {
  author_image: string;
  author: string;
  at: string;
  twitter: string;
  description: string;
  image_like: string;
  likes: number;
  date: string;
}

export const Tweet: React.FC<TweetProps> = ({ 
  author_image,
  author,
  at,
  twitter,
  description,
  image_like,
  likes,
  date
}) => {
  return(
    <div className="w-72 bg-white p-3 rounded-md my-2 mx-auto">
      <div className="flex justify-between">
        <div className="flex">
          <img 
            src={author_image}
            alt="author"
          />
          <div className="ml-3 relative z-0">
            <h2 className="font-semibold">{author}</h2>
            <p className="text-sm absolute top-5 -left-1 text-gray-500">{at}</p>
          </div>
        </div>
        <img 
          src={twitter}
          alt="twitter"
        />
      </div>
      <p className="my-3 text-gray-700">{description}</p>
      <div className="flex justify-between">
        <div className="flex">
          <img 
            src={image_like}
            alt="like"
          />
          <p className="ml-3">{likes}</p>
        </div>
        <p>{date}</p>
      </div>
    </div>
  )
}