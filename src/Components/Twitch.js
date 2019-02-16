import React from 'react'
import '../scss/twitch.css'

export default function Twitch () {
  return (
    <div className="twitch center">
      <h2>I'm currently live on Twitch.tv <span role="img" aria-label="live">🔴</span></h2>
      <iframe src="https://player.twitch.tv/?channel=ashleydance" title="Watch the Twitch.tv livestream" frameBorder="0" allowFullScreen={true} scrolling="no" height="378" width="620"></iframe>
    </div>
  )
}
