const ImagePanel = ({ imageURL }) => {
  return (
    <div className='w-full md:w-1/3 h-full flex flex-col items-center '>
      <div className='w-full flex-1'>
        <img
          src={imageURL}
          alt='T-shirt'
          className='w-full h-full object-contain mt-10'
        />
      </div>
    </div>
  );
};

export default ImagePanel;
