const FormPanel = ({
  register,
  onDrop,
  preventDefault,
  onFileChange,
  previewURL,
}) => {
  return (
    <div className='w-full md:w-1/3 bg-white p-4 rounded shadow'>
      <form className='flex flex-col gap-4'>
        <div>
          <label className='block font-semibold'>Height</label>
          <input {...register('height')} className='border w-full p-2' />
        </div>
        <div>
          <label className='block font-semibold'>Weight</label>
          <input {...register('weight')} className='border w-full p-2' />
        </div>
        <div>
          <label className='block font-semibold'>Build</label>
          <select {...register('build')} className='border w-full p-2'>
            <option value='lean'>Lean</option>
            <option value='reg'>Regular</option>
            <option value='athletic'>Athletic</option>
            <option value='big'>Big</option>
          </select>
        </div>
        <div
          onDrop={onDrop}
          onDragOver={preventDefault}
          className='border-dashed border-2 p-4 text-center'
        >
          <p>Drop an image here or</p>
          <input type='file' accept='image/*' onChange={onFileChange} />
          {previewURL && (
            <img
              src={previewURL}
              className='mt-2 h-20 mx-auto object-contain'
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default FormPanel;
