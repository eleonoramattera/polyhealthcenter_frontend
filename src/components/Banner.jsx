import banner from "../assets/img/banner.jpg";

function Banner() {
  return (
    <div style={{ position: "relative", width: "100%" }}>
      {/* <video
        className="autoplay-video"
        autoPlay={true}
        loop={true}
        controls={false}
        width="100%"
        height="600px"
        backgroundSize="cover">
        <video autoPlay loop controls width="500px">
        <source src={require("../assets/video/videohome.mp4")} type="video/mp4"></source>
  </video> */}
      <img src={banner} alt="banner" style={{ width: "100%" }} />

      <div style={{ position: "absolute", top: "25px", left: "70px", fontSize: "40px", color: "white" }}>
        <p>
          <b> PolyHealthCenter </b>
        </p>
        <p style={{ lineHeight: "50px", textAlign: "left" }}>
          Medicina all'avanguardia <br />
          con oltre 50 specialità cliniche <br />e più di 700 medici
        </p>
      </div>
    </div>
  );
}
export default Banner;
