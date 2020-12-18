import React, { Component } from "react";
import ShareLink from "react-twitter-share-link";


export default class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomQuote: [],
    };
    this.onClick = this.onClick.bind(this);
  }
  
  componentDidMount() {
    this.onClick();
  }
  onClick() {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => this.setState({ randomQuote: data }));
  }

  render() {
    // document.getElementById("quote-box").style.color = "red";
    return (
      <div className="container text-center text-justify" id="quote-box">
        <blockquote className="blockquote-reverse">
          <h2 id="text">{this.state.randomQuote.content}</h2>
          <footer id="author">
            <cite title={this.state.randomQuote.author}>
              {" "}
              -- {' '}{this.state.randomQuote.author}
            </cite>{" "}
          </footer>
        </blockquote>

        <button
          className="btn btn-default btn-primary"
          onClick={this.onClick}
          id="new-quote"
        >
          New Quote
        </button>
        {/* <br /> */}

        <ShareLink text={this.state.randomQuote.content} link="">
          {(link) => (
            <a
              id="tweet-quote"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Share
            </a>
          )}
        </ShareLink>
      </div>
    );
  }
}
