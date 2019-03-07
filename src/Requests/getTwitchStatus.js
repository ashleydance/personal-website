import axios from 'axios'
import { TWITCH_CLIENT_SECRET } from '../util/consts'

export default function getTwitchStatus () {
  return axios.get('https://api.twitch.tv/helix/streams?user_login=ashleydance', {
    headers: {'Client-ID': TWITCH_CLIENT_SECRET},
  })
    .then( response => {
      if ( response.data.data.length > 0 && response.data.data[0].type === 'live') {
        return true
      } else {
        return false
      }
    })
}
