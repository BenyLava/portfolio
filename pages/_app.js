


import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/header.css';


import { config, library } from '@fortawesome/fontawesome-svg-core'
import {
  faStar,
  faArrowUp,
  faArrowRight,
  faArrowDown,
  faArrowLeft,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(
  faStar,
  faArrowUp,
  faArrowRight,
  faArrowDown,
  faArrowLeft,
  faTrophy,
  faGithub
)
config.autoAddCss = false


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
