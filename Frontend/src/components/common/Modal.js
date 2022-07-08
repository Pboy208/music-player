/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Icon } from '@ahaui/react';

export default function Modal({ children, close , width,height, padding}) {
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
          width: width || 600,
          height: height || 500,
          padding,
          gap: 12,
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
        {children}
      </div>
    </>
  );
}
