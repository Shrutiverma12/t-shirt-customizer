const TextInputArea = ({ register }) => {
  return (
    <div className='w-full md:w-1/3 bg-white p-4 rounded shadow'>
      <label className='block font-semibold'>Text to print (Max 3 lines)</label>
      <textarea
        {...register('message')}
        rows={3}
        maxLength={120}
        className='w-full border p-2 resize-none'
        placeholder='Type your custom text here...'
      />
    </div>
  );
};

export default TextInputArea;
