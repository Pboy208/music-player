/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Modal from 'components/common/Modal';
import { useState, useRef } from 'react';
import { Form, Icon } from '@ahaui/react';

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

export default function ProfileEditing({ close }) {
  const [name, setName] = useState('fake name');
  const [bio, setBio] = useState('fake bio');
  const [avatar, setAvatar] = useState(null);

  return (
    <Modal close={close}>
      <Form.Group controlId="exampleForm.Input1">
        <Form.Input
          type="text"
          placeholder="User name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Input
          as="textarea"
          rows={3}
          placeholder="User bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </Form.Group>
      {/* <FileUploader title="Your song" handler={setSong} file={song} /> */}
    </Modal>
  );
}
