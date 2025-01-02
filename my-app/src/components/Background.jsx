
import '../styles/Background.css';
import video1 from './../Assets/video1.mp4';
import image1 from './../Assets/image1.jpg';
import image2 from './../Assets/image2.jpg';
import image3 from './../Assets/image3.jpg';

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className="background fade-in" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={image1} className="background fade-in " alt="Background 1" />;
  } else if (heroCount === 1) {
    return <img src={image2} className="background fade-in" alt="Background 2" />;
  } else if (heroCount === 2) {
    return <img src={image3} className="background fade-in" alt="Background 3" />;
  }
  return null; 
};

export default Background;
