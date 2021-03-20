const SmallPhotos = (props) => {
  return (
    <div>
      <div>
        {console.log('small prop', props)}
        <span>
          <img src={props.photos[0].url} alt={'small photo1'}></img>
          <img src={props.photos[2].url} alt={'small photo3'}></img>
        </span>
      </div >
      <div>
        <span>
          <img src={props.photos[1].url} alt={'small photo2'}></img>
          <img src={props.photos[3].url} alt={'small photo4'}></img>
        </span>
      </div>
    </div>
  )
};


export default SmallPhotos;
