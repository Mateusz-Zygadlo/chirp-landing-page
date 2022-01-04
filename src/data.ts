import { Images } from './assets'


const BUTTON_CONTENT = {
  content: 'Sign in with Twitter',
  logo: Images.Twitter
}

const USERS = [
  Images.userAvatar01,
  Images.userAvatar02,
  Images.userAvatar03,
  Images.userAvatar04,
  Images.userAvatar05,
  Images.userAvatar06,
  Images.userAvatar07,
  Images.userAvatar08,
  Images.userAvatar09,
]

const APP_ADVANTAGES = [
  {  
    image: Images.Checkmark,
    header: 'Analytics',
    paragraph: 'We constantly monitor your audience as it grows - so you can Tweet when your followers are most likely to be online and ready to engage with your content.'
  },
  { 
    image: Images.Checkmark,
    header: 'Smart Analyzer',
    paragraph: 'Chirp automatically recognizes your followers` most active times and automatically sends you notifications if you"re missing out on an opportunity.',
  },
  { 
    image: Images.Checkmark,
    header: 'Scheduled Your Tweets',
    paragraph: 'Quality tweets drive tons of engagement. With Chirp, you can write tweets in an advance and schedule them when your audience is most likely to read.'
  },
  { 
    image: Images.Checkmark,
    header: 'Dark Mode',
    paragraph: 'Friendly on the eyes, no matter what time you write your Tweets. All colors are chosen to make sure your eyes are at ease at all times.'
  }
]

const TWEETS = [
  {
    author_image: Images.userAvatar08,
    author: 'Sara May',
    at: '@sara_may',
    twitter: Images.TwitterBlue,
    description: 'I just tired out @chirp and it"s amazing, love all the analytics I can see.',
    image_like: Images.Like,
    likes: 2,
    date: 'March 2, 2021'
  },
  {
    author_image: Images.userAvatar04,
    author: 'Jack Scott',
    at: '@jackscott_',
    twitter: Images.TwitterBlue,
    description: 'I initially started using Chirp to support the co-founder as O personally knew him, but after having tried it out for a few weeks, I can genuinely say this changed my Twitter game.',
    image_like: Images.Like,
    likes: 32,
    date: 'March 2, 2021'
  },
  {
    author_image: Images.userAvatar06,
    author: 'Jessica May',
    at: '@jmay98',
    twitter: Images.TwitterBlue,
    description: 'Absolutely love everything about Chirp, from the design to how everything works smoothly.',
    image_like: Images.Like,
    likes: 221,
    date: 'March 2, 2021'
  }
]

export const NAVBAR_CONTENT = {
  logo: 'Chirp.',
  links: [
    { name: 'Home', path: '/' },
    { name: 'Pricing', path: '/' },
    { name: 'FAQ', path: '/' },
  ],
  button: BUTTON_CONTENT,
}

export const HEADER_CONTENT = {
  header: 'Twitter analytics taken to a whole new level.',
  paragraph: 'Chirp os a suite of twitter analytics that will help you better understand your audience, which tweets they like, and most importantly, when they are the most active on Twitter.',
  button: BUTTON_CONTENT,
  about: 'Learn more',
  usersWhoSignedUp: USERS,
  textBelowUsers: `Join ${USERS.length} other who have analyzed their followers.`
}

export const ADVANTAGES_CONTENT = {
  header: 'Features that help you Tweet smarter.',
  advantages: APP_ADVANTAGES
}

export const RECOMMENDS_TWEETS = {
  header: 'What our customers say',
  tweets: TWEETS,
}