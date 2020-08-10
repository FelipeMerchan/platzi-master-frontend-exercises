import React from 'react'

import './styles/RecentTweets.css'

function RecentTweets() {
  return (
    <article className="RecentTweets">
      <h2 className="RecentTweets__title">últimos
        <br /> <span>tweets</span>
      </h2>
      <div className="RecentTweet">
        <p>
          <strong><span>5:13PM</span><span>Sep 7</span> desde <span>TweetDeck</span></strong>
        </p>
        <p>
          <span>RT</span><span>@lstwebdesigner</span>: <span>Mira mi último diseño http:/bit.ly/asdfg</span>
        </p>
      </div>
      <div className="RecentTweet">
        <p>
          <strong><span>5:13PM</span><span>Sep 7</span> desde <span>TweetDeck</span></strong>
        </p>
        <p>
          <span>RT</span><span>@lstwebdesigner</span>: <span>Mira mi último diseño http:/bit.ly/asdfg</span>
        </p>
      </div>
    </article>
  )
}

export default RecentTweets