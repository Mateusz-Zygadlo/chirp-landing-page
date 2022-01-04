import { Images } from './assets'


const BUTTON_CONTENT = {
  content: 'Sign in with Twitter',
  logo: Images.Twitter
}

const users = [
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
  usersWhoSignedUp: users,
  textBelowUsers: `Join ${users.length} other who have analyzed their followers.`
}