import React from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import VideoPlayerControls from '../components/video-player-controls'
import timerFormatter from '../utilities/timer-formatter'
import ProgressBar from '../components/progress-bar'
import Spinner from '../components/spinner-component'
import Volume from '../components/volume-component'
import FullScreen from '../components/full-screen-component';


class VideoPlayerContainer extends React.Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: false,
    videoIsMuted: false
  }

  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }

  componentDidMount() {
    this.setState({
      pause: !this.props.autoplay
    })
  }

  handleLoadedMetadata = event => {
    this.video = event.target
    this.setState({
      duration: this.video.duration
    })
  }

  handleTimeUpdate = event => {
    this.setState({
      currentTime: this.video.currentTime
    })
  }

  handleProgressChange = event => {
    this.video.currentTime = event.target.value
  }

  handleSeeking = event => {
    this.setState({
      loading: true
    })
  }

  handleSeeked = event => {
    this.setState({
      loading: false
    })
  }

  handleVolumeChange = event => {
    this.video.volume = event.target.value
  }

  setVolumeRef = element => {
    this.volumeElement = element
  }

  handleMute = () => {
    this.volumeElement.value = 0;
    this.video.volume = this.volumeElement.value
    this.setState({
      videoIsMuted: true
    })
  }

  handleUnMute = () => {
    this.volumeElement.value = 0.8;
    this.video.volume = this.volumeElement.value
    this.setState({
      videoIsMuted: false
    })
  }

  handleVolumeClick = event => {
    this.state.videoIsMuted ? this.handleUnMute() : this.handleMute()
  }

  handleFullScreenClick = event => {
    if(!document.webkitIsFullScreen) {
      this.player.webkitRequestFullscreen()
    } else {
      document.webkitExitFullscreen()
    }
  }

  setVideoPlayerLayoutRef = element => {
    this.player = element
  }

  render() {
    return(
      <VideoPlayerLayout setRef={this.setVideoPlayerLayoutRef}>
        <Title
          title={this.props.title}
        />
        <VideoPlayerControls>
          <PlayPause pause={this.state.pause} handleClick={this.togglePlay}/>
          <Timer
            currentTime={timerFormatter(this.state.currentTime)}
            duration={timerFormatter(this.state.duration)}
          />
          <ProgressBar
            duration={this.state.duration}
            value={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume
            setVolumeRef={this.setVolumeRef}
            handleVolumeChange={this.handleVolumeChange}
            handleVolumeClick={this.handleVolumeClick}
          />
          <FullScreen
            handleFullScreenClick={this.handleFullScreenClick}
          />
        </VideoPlayerControls>
        <Spinner
          active={this.state.loading}
        />
        <Video
          handleTimeUpdate={this.handleTimeUpdate}
          handleLoadedMetadata={this.handleLoadedMetadata}
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          src={this.props.src}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayerContainer
