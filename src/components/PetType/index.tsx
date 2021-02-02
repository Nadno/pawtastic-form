import React from 'react';
import './index.scss';

import dogType from '../../assets/images/dog-option.png';
import dogType2 from '../../assets/images/dog-option@2x.png';

import catType from '../../assets/images/cat-option.png';
import catType2 from '../../assets/images/cat-option@2x.png';

import birdyType from '../../assets/images/birdy-option.png';
import birdyType2 from '../../assets/images/birdy-option@2x.png';

import hamsterType from '../../assets/images/hamster-option.png';
import hamsterType2 from '../../assets/images/hamster-option@2x.png';

interface Props {
  type: 'dog' | 'cat' | 'birdy' | 'hamster';
}

const PetType = ({ type }: Props) => {
  const sources: { [prop: string]: [string, string] } = {
    dog: [dogType, dogType2],
    cat: [catType, catType2],
    birdy: [birdyType, birdyType2],
    hamster: [hamsterType, hamsterType2],
  };
  const [source1, source2] = sources[type];

  if (source1 && source2) {
    return (
      <picture>
        <source srcSet={source2} media="(min-width: 750px)" />
        <img className="option-image" src={source1} alt="Dog" />
      </picture>
    );
  } else {
    return <div className="option-image__none"></div>;
  }
};

export default PetType;
