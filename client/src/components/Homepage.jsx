import LargePhoto from './LargePhoto.jsx';
import SmallPhoto from './SmallPhoto.jsx';


var Homepage = (props) => {
  return (
    <div>
      Hey there dudes
      {console.log('HOMEPAGE', props)}
    <LargePhoto photo={props.photos[0]}/>
    {//map over the props from index 1 to 4 and create a small photo for each
    }
    </div>
  );
};

export default Homepage;
