import React from 'react';
import '../../../assets/sass/components/avatar/Avatar.scss';

// Defining the interface for the Avatar component props
interface AvatarProps {
  avatarSrc?: string;
  name?: string;
  bgColor?: string;
  textColor?: string;
  size: number;
  round?: boolean;
}

// Avatar component implementation with TypeScript
const Avatar: React.FC<AvatarProps> = ({
  avatarSrc,
  name,
  bgColor = '#f33e58',
  textColor,
  size,
  round = true
}) => {
  const textSizeRatio = 1.7;
  const fontSize = Math.floor(size / textSizeRatio);
  const firstNameCharacter = name?.charAt(0);

  return (
    <>
      {!avatarSrc && (
        <div
          data-testid="avatar-container"
          className="avatar-container"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: round ? '50%' : '0',
            backgroundColor: bgColor,
            display: 'flex'
          }}
        >
          {name && (
            <div
              data-testid="avatar-name"
              style={{
                color: textColor,
                fontSize: `${fontSize}px`,
                margin: 'auto',
                fontWeight: 'bold',
                textTransform: 'uppercase'
              }}
            >
              {firstNameCharacter}
            </div>
          )}
        </div>
      )}

      {avatarSrc && (
        <img
          src={avatarSrc}
          alt=""
          className="avatar-content avatar-container"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: round ? '50%' : '0'
          }}
        />
      )}
    </>
  );
};

export default Avatar;
