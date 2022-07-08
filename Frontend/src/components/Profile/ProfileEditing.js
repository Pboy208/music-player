/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Modal from 'components/common/Modal';
import { useState, useRef } from 'react';
import { Form, Button, Avatar } from '@ahaui/react';

export default function ProfileEditing({ user, close }) {
  const fileHolder = useRef();

  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.bio);
  const [avatar, setAvatar] = useState(user.avatar);

  const fileChangeHandler = (e) => {
    const newFile = e.target.files[0];
    const formData = new FormData();
    formData.append('file', newFile);
    formData.append('upload_preset', 'iiyjshqb');

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
      .then((result) => setAvatar(result.url))
      .catch((error) => console.log('error', error));
  };

  const submitHandler = () => {
    const userInfo = {
      name,
      bio,
      avatar,
    }
    console.log(userInfo)
  }

  const openFileUploader = () => fileHolder.current.click();

  return (
    <Modal close={close} width={1000} height={400} padding="40px 60px">
      <input
        type="file"
        ref={fileHolder}
        onChange={fileChangeHandler}
        accept="image/*"
        style={{
          display: 'none',
        }}
      />
      <div className="u-flex u-positionRelative">
        <div className="u-marginRightLarge">
          <Avatar
            src={avatar}
            size="huge"
            style={{
              objectFit: 'cover',
              cursor: 'pointer',
            }}
            onClick={openFileUploader}
          />
        </div>
        <div className="u-flexGrow1">
          <div className="u-marginBottomExtraSmall">
            <Form.Input
              type="text"
              placeholder="User name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: 600,
              }}
            />
          </div>
          <Form.Input
            as="textarea"
            rows={5}
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            style={{
              width: 600,
              marginBottom: 40,
            }}
          />
        </div>
      </div>
      <Button variant="primary" onClick={submitHandler}>
        <Button.Label>Submit</Button.Label>
      </Button>
    </Modal>
  );
}
