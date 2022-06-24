/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef } from 'react';
import { Icon, Form, Button } from '@ahaui/react';
import Modal from 'components/common/Modal';
import { useSelector } from 'react-redux';
import { addPost } from 'api/postAPIs';

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
      .then((result) => handler(result.url))
      .catch((error) => console.log('error', error));
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
        {!file && (
          <>
            <Icon size="medium" name="helpCircleOutline" />
            {title}
          </>
        )}
        {file && (
          <>
            <span>{title}</span>
            <span>uploaded</span>
          </>
        )}
      </div>
    </>
  );
}

export default function SongAdding({ close }) {
  const { userID } = useSelector((state) => state.auth.user);
  const [song, setSong] = useState(null);
  const [songLyric, setSongLyric] = useState(null);
  const [songImage, setSongImage] = useState(null);
  const [songTitle, setSongTitle] = useState('');

  const submitHandler = () => {
    const newPost = {
      songUrl: song,
      imageUrl: songImage,
      lyric: songLyric,
      title: songTitle,
      author: userID,
      createdAt: new Date(),
    };
    // addPost(newPost).then((res) => {
    //   console.log('postId:::', res);
    // });
    console.log(JSON.stringify(songTitle));
    // should get PostID from backend
  };

  return (
    <Modal close={close}>
      <div className="u-text400">
        <Icon className="u-marginRightExtraSmall" size="medium" name="bot" />
        UPLOAD YOUR SONG HERE
      </div>
      <Form.Group controlId="exampleForm.Input1">
        <Form.Input
          // type="text"
          as="textarea"
          rows={3}
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
      <Button variant="primary" onClick={submitHandler}>
        <Button.Label>Submit</Button.Label>
      </Button>
    </Modal>
  );
}
