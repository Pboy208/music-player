/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Modal from 'components/common/Modal';
import { useState, useRef } from 'react';
import { Form, Button, Avatar } from '@ahaui/react';
import { updateProfile } from 'api/profileAPIs';
import * as Toast from 'components/common/Toast';

export default function ProfileEditing({ user, close, setProfile }) {
  const fileHolder = useRef();

  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.bio);
  const [avatar, setAvatar] = useState(user.avatar);

  const fileChangeHandler = (e) => {
    const newFile = e.target.files[0];
    const formData = new FormData();
    formData.append('file', newFile);
    formData.append('upload_preset', 'zykutcrp');

    const requestOptions = {
      method: 'POST',
      body: formData,
      redirect: 'follow',
    };

    // TODO: Change cloudinary account if needed
    fetch('https://api.cloudinary.com/v1_1/mp320212/upload', requestOptions)
      .then((response) => response.json())
      .then((result) => setAvatar(result.url))
      .catch((error) => console.log('error', error));
  };

  const submitHandler = () => {
    const userInfo = {
      name,
      bio,
      avatar,
    };
    updateProfile(userInfo)
      .then(() => {
        setProfile(userInfo);
        Toast.success('Update profile successfully');
      })
      .catch(() => {
        Toast.error('Update profile failed, please try again later');
      })
      .finally(() => close());
  };

  const openFileUploader = () => fileHolder.current.click();

  return (
    <Modal
      close={close}
      width="var(--modal-profile-editing-width)"
      height="var( --modal-profile-editing-height)"
      padding="40px 60px"
    >
      <input
        type="file"
        ref={fileHolder}
        onChange={fileChangeHandler}
        accept="image/*"
        style={{
          display: 'none',
        }}
      />
      <div className="u-flex u-positionRelative u-flexWrap">
        <div className="u-marginRightLarge">
          <Avatar
            src={avatar}
            size="huge"
            style={{
              objectFit: 'cover',
              cursor: 'pointer',
              marginBottom: 24,
            }}
            onClick={openFileUploader}
          />
        </div>
        <div
          className="u-flexGrow1 u-flex u-flexColumn u-justifyContentCenter"
          style={{
            width: '100vw',
            maxWidth: 'var(--max-input-profile-editing-width)',
          }}
        >
          <div className="u-marginBottomExtraSmall">
            <Form.Input
              type="text"
              placeholder="User name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: '100%',
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
              width: '100%',
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
