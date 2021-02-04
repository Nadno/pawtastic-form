import React, { ChangeEvent } from 'react';
import './index.scss';

import camIcon from '../../assets/images/path.png';
import camIconX2 from '../../assets/images/path@2x.png';

interface Props {
  id: string;
  name: string;
  label: string;
  error: string;
  handleChange(e: ChangeEvent): void;
}

const PhotoInput = ({ id, name, label, error, handleChange }: Props) => {
  return (
    <div className={`photo-field${error ? ' error' : ''}`}>
      <input
        type="file"
        name={name}
        id={id}
        onChange={handleChange}
        accept="image/png, image/jpeg, image/jpg"
      />

      <label htmlFor="pet-photo">
        <picture className="photo-field__upload">
          <source srcSet={camIconX2} media="(min-width: 750px)" />
          <img id="select-image" src={camIcon} alt="Select a pet" />
        </picture>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span className="photo-field__title">{label}</span>
          <span className="error-field">{error}</span>
        </div>
      </label>
    </div>
  );
};

export default PhotoInput;
