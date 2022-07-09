/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef, useEffect } from 'react';
import { Icon, Form, Button } from '@ahaui/react';
import Modal from 'components/common/Modal';
import { useSelector } from 'react-redux';
import { addPost } from 'api/postAPIs';
import { ImArrowRight, ImPlay3 } from 'react-icons/im';
import { FaSmileBeam } from 'react-icons/fa';

const Upload = {
  SONG: 'Your song',
  LYRICS: 'Song lyrics',
  IMAGE: 'Song image',
};

function FileUploader({ title, handler, file }) {
  const fileHolder = useRef();
  const songRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      songRef.current?.play();
    } else {
      songRef.current?.pause();
    }
  }, [isPlaying]);

  const fileChangeHandler = (e) => {
    const newFile = e.target.files[0];
    const formData = new FormData();
    formData.append('file', newFile);
    formData.append('upload_preset', 'zykutcrp');
    if (title === Upload.SONG) {
      formData.append('resource_type', 'video');
    }

    const requestOptions = {
      method: 'POST',
      body: formData,
      redirect: 'follow',
    };

    // TODO: Change cloudinary account if needed
    fetch('https://api.cloudinary.com/v1_1/mp320212/upload', requestOptions)
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
        accept={title === Upload.SONG ? 'audio/*' : 'image/*'}
        style={{
          display: 'none',
        }}
      />
      <div
        className="u-flex u-flexColumn u-alignItemsCenter u-justifyContentCenter u-roundedLarge u-cursorPointer u-userSelectNone"
        onClick={() => (file ? null : openFileUploader())}
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
        {file && title === Upload.IMAGE && (
          <img
            src={file}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        )}
        {file && title === Upload.SONG && (
          <>
            <div
              className="u-flex u-flexColumn u-justifyContentCenter u-alignItemsCenter"
              style={{
                gap: 8,
              }}
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <ImPlay3
                style={{
                  fontSize: 32,
                }}
              />
              <div
                style={{
                  textAlign: 'center',
                }}
              >
                Your song is ready
              </div>
            </div>
            <audio src={file} ref={songRef} />
          </>
        )}
      </div>
    </>
  );
}

export default function SongAdding({ close, addNewPost }) {
  const { user } = useSelector((state) => state.auth);
  const [song, setSong] = useState(null);
  const [songImage, setSongImage] = useState(null);
  const [songLyric, setSongLyric] = useState('');
  const [songTitle, setSongTitle] = useState('');
  const [content, setContent] = useState('');

  const submitHandler = () => {
    const newPost = {
      urlMusic: song,
      urlImage: songImage,
      lyric: songLyric,
      title: songTitle,
      content,
    };
    addPost(newPost).then((res) => {
      const newAddedPost = {
        postId: '123', // TODO
        liked: false,
        content,
        createdAt: new Date(),
        numberOfLike: 0,
        song: {
          urlMusic: song,
          urlImage: songImage,
          name: songTitle,
          songId: '123', // TODO,
          author: user.name,
          authorId: user.userID,
          liked: false,
        },
      };
      console.log('postId:::', res);
    });
  };

  return (
    <Modal close={close} height={800}>
      <div
        className="u-text400"
        style={{
          marginBottom: 20,
        }}
      >
        <Icon className="u-marginRightExtraSmall" size="medium" name="bot" />
        UPLOAD YOUR SONG HERE
      </div>
      <div
        className="u-flex"
        style={{
          gap: 20,
          marginBottom: 20,
        }}
      >
        <div
          className="u-flex u-flexColumn u-alignItemsCenter u-justifyContentCenter"
          style={{
            gap: 20,
          }}
        >
          <FileUploader
            title={Upload.IMAGE}
            handler={setSongImage}
            file={songImage}
          />
          <Form.Group controlId="exampleForm.Input">
            <Form.Input
              type="text"
              placeholder="Song title"
              value={songTitle}
              onChange={(e) => setSongTitle(e.target.value)}
              style={{
                width: 200,
              }}
            />
          </Form.Group>
        </div>
        <div className="u-flex u-alignItemsCenter">
          <ImArrowRight style={{ fontSize: 40 }} />
        </div>
        <div
          className="u-flex u-alignItemsCenter u-justifyContentCenter"
          style={{
            width: 200,
          }}
        >
          <FileUploader title={Upload.SONG} handler={setSong} file={song} />
        </div>
      </div>
      <div className="u-text300">Song lyric</div>
      <Form.Input
        as="textarea"
        rows={5}
        placeholder="Song lyrics"
        value={songLyric}
        onChange={(e) => setSongLyric(e.target.value)}
        style={{
          width: '70%',
          marginBottom: 20,
        }}
      />
      <div className="u-text300">Anything to say about this song?</div>
      <Form.Input
        as="textarea"
        rows={5}
        placeholder="Your thoughts"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{
          width: '70%',
          marginBottom: 24,
        }}
      />
      <Button variant="primary" onClick={submitHandler}>
        <Button.Label>Submit</Button.Label>
      </Button>
    </Modal>
  );
}
