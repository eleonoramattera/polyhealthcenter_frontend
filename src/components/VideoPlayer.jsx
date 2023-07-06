function VideoPlayer() {
  return (
    <div>
      <video className="autoplay-video" autoPlay loop={true} controls={true} width="900px">
        {/*<video autoPlay loop controls width="500px">*/}
        <source src={require("../assets/video/videohome.mp4")} type="video/mp4"></source>
      </video>
    </div>
  );
}
export default VideoPlayer;
