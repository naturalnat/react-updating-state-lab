// Code YouTubeDebugger Component Here
import React from "react";

class YouTubeDebugger extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p",
        },
      },
    };
  }

  handleBitrateClick = () => {
      //changes bitrate state to 12 
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    });
  };

  handleResolutionClick = () => {
      //changes resolution state to 720p
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: "720p",
        },
      },
    });
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrateClick}>
          Bitrate
        </button>
        <button className="resolution" onClick={this.handleResolutionClick}>
          Resolution
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;
