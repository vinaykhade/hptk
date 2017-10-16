import React, { Component } from "react";


class WriteTweet extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tweet: '',
      tweetCount: 140,
      showDialog: false
    }
  }

  handleTweet(event) {
    event.preventDefault();
    let counter = (140 - (event.target.value.length));
    this.setState({
      tweet: event.target.value,
      tweetCount: counter,
      message: ''
    })
  }

  submitTweet(event) {
    event.preventDefault();
    const { tweet } = this.state;
    if(tweet) {
      const values = {
        body: tweet,
        user_token: 12345678
      }
      /*this.props.submitTweetRequest(values)*/
      /* call this function to submit the tweet data my dispatching the redux/flux actoin */
      this.setState({
        message: 'Tweet Succesfull !!',
        showDialog: !this.state.showDialog
      });
    }
  }

  toggleWrite(event) {
    event.preventDefault();
    this.setState({ showDialog: !this.state.showDialog });
  }

  render() {
    const { tweetCount, message, showDialog } = this.state;
    return(
      <div className="tweet-container">
        {
          showDialog ?
          <form
            onSubmit={this.submitTweet.bind(this)}
            >
            <textarea
              rows="2"
              maxLength="140"
              autoFocus="true"
              onChange={this.handleTweet.bind(this)}
              placeholder='Write Your Tweet Here'
              >
              </textarea>
              <button type="submit" className="submit-btn">Submit</button>
              <span className="char-left">{tweetCount}</span>
              <div className="clear"></div>
          </form>
          :
          <div className="tweet-prompt" onClick={this.toggleWrite.bind(this)}>Write Your Tweet Here</div>
        }


        <h3 className="notification-msg">{message}</h3>
      </div>
    )
  }
}

export default WriteTweet;
