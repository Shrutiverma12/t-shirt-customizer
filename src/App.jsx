import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHotkeys } from 'react-hotkeys-hook';
import './App.css';
import FormPanel from './components/FormPanel';
import ImageUplaoder from './components/ImagePanel';
import TextInputArea from './components/TextInputArea';
import { themes } from './themes.js';

function App() {
  const [themeIndex, setThemeIndex] = useState(0);
  const [imageURL, setImageURL] = useState('/t-shirt.jpg'); // Default image
  const [previewURL, setPreviewURL] = useState('/t-shirt.jpg');
  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      height: '180cm',
      weight: '80kg',
      build: 'athletic',
      message: '',
    },
  });
  useHotkeys(
    'alt+q',
    () => {
      console.log('Pressed');

      setThemeIndex((prev) => (prev + 1) % themes.length);
    },
    {
      enableOnTags: ['INPUT', 'TEXTAREA', 'SELECT'],
    }
  );
  const onDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageURL(url);
      setPreviewURL(url);
    }
  };
  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageURL(url);
      setPreviewURL(url);
    }
  };
  const preventDefault = (e) => e.preventDefault();
  return (
    <>
      <div
        className={`min-h-screen p-4 flex flex-col md:flex-row gap-4 ${themes[themeIndex]}`}
      >
        {/* Image Panel */}
        <ImageUplaoder imageURL={imageURL} />

        {/* Form Panel */}

        <FormPanel
          register={register}
          onDrop={onDrop}
          preventDefault={preventDefault}
          onFileChange={onFileChange}
          previewURL={previewURL}
        />

        {/* Text Panel */}
        <TextInputArea register={register} />
      </div>
    </>
  );
}

export default App;
