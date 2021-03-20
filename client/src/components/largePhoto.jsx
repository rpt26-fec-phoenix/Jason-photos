const LargePhoto = (props) => {
    return (
      <div>
        {console.log('Large props', props)}
        <img src={props.photo.url} alt={'large photo'}></img>
      </div>

    );

};

export default LargePhoto;
