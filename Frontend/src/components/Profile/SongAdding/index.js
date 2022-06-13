/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef } from 'react';
import { Icon, Form, Button } from '@ahaui/react';

function FileUploader({ title, handler, file }) {
  const fileHolder = useRef();

  const fileChangeHandler = (e) => {
    const newFile = e.target.files[0];
    const formData = new FormData();
    formData.append('file', newFile);
    formData.append('upload_preset', 'iiyjshqb');
    if (title === 'Your song') {
      formData.append('resource_type', 'video');
    }

    const requestOptions = {
      method: 'POST',
      body: formData,
      redirect: 'follow',
    };

    // TODO: Change cloudinary account if needed
    fetch(
      'https://api.cloudinary.com/v1_1/thecodingpanda/upload',
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => console.log(result.url))
      .catch((error) => console.log('error', error));

    handler(newFile);
  };

  const openFileUploader = () => fileHolder.current.click();

  return (
    <>
      <input
        type="file"
        ref={fileHolder}
        onChange={fileChangeHandler}
        style={{
          display: 'none',
        }}
      />
      {!file && (
        <div
          className="u-flex u-flexColumn u-alignItemsCenter u-justifyContentCenter u-roundedLarge u-cursorPointer u-userSelectNone"
          onClick={openFileUploader}
          style={{
            width: 120,
            height: 120,
            border: '1px solid var(--border-color)',
            backgroundColor: 'var(--border-color)',
          }}
        >
          <Icon size="medium" name="helpCircleOutline" />
          {title}
        </div>
      )}
      {file && <div>uploaded</div>}
    </>
  );
}

export default function SongAdding({ close }) {
  const [song, setSong] = useState(null);
  const [songLyric, setSongLyric] = useState(null);
  const [songImage, setSongImage] = useState(null);
  const [songTitle, setSongTitle] = useState('');

  return (
    <>
      <div
        className="u-positionFixed u-positionTop u-positionBottom .u-positionLeft u-positionRight u-backgroundLighter	"
        style={{
          width: '100vw',
          height: '100vh',
          zIndex: 3,
          opacity: 0.8,
        }}
      />
      <div
        className="u-flex u-border u-flexColumn u-roundedLarge u-justifyContentCenter u-alignItemsCenter u-positionRelative u-marginVerticalExtraLarge u-positionFixed u-backgroundWhite"
        style={{
          width: 600,
          height: 500,
          gap: 24,
          zIndex: 4,
          left: 0,
          right: 0,
          margin: '0 auto',
        }}
      >
        <div
          onClick={close}
          style={{
            position: 'absolute',
            width: 32,
            height: 32,
            top: 4,
            right: 4,
            cursor: 'pointer',
          }}
        >
          <Icon name="closeCircleOutline" size="medium" />
        </div>
        <div className="u-text400">
          <Icon className="u-marginRightExtraSmall" size="medium" name="bot" />
          UPLOAD YOUR SONG HERE
        </div>
        <Form.Group controlId="exampleForm.Input1">
          <Form.Input
            type="text"
            placeholder="Song title"
            value={songTitle}
            onChange={(e) => {
              const a = setSongTitle(e.target.value);
              console.log('return of setting', a);
            }}
          />
        </Form.Group>
        <div
          className="u-flex  u-alignItemsCenter u-justifyContentCenter"
          style={{
            gap: 16,
          }}
        >
          <FileUploader title="Your song" handler={setSong} file={song} />
          <FileUploader
            title="Song lyric"
            handler={setSongLyric}
            file={songLyric}
          />
          <FileUploader
            title="Song image"
            handler={setSongImage}
            file={songImage}
          />
        </div>
        <Button variant="primary">
          <Button.Label>Submit</Button.Label>
        </Button>
      </div>
    </>
  );
}
