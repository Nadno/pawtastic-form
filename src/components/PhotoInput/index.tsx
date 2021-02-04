import React from 'react';
import './index.scss';

import camIcon from '../../assets/images/path.png';
import camIconX2 from '../../assets/images/path@2x.png';

const PhotoInput = () => {
  return (
    <div className="photo-field">
      <input
        type="file"
        name="pet-photo"
        id="pet-photo"
        accept="image/png, image/jpeg, image/jpg"
      />

      <label htmlFor="pet-photo">
        <picture className="upload__button">
          <source srcSet={camIconX2} media="(min-width: 750px)" />
          <img id="select-image" src={camIcon} alt="Select a pet" />
        </picture>

        <span className="photo-field__title"> Upload a photo </span>
      </label>
      <span className="field-error"></span>
    </div>
  );
};

export default PhotoInput;
