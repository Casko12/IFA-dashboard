import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { GalleryCard } from '../style';
import Heading from '../../../components/heading/heading';
import { Checkbox } from '../../../components/checkbox/checkbox';

function GalleryCards({ item }) {
  const { name, img, category } = item;

  const [state, setState] = useState({
    checkData: [],
    checked: false,
  });

  const onChange = (checked) => {
    setState({ ...state, checked });
  };
  return (
    <GalleryCard style={{ marginBottom: '25px' }}>
      <Checkbox checked={state.checked} onChange={onChange} />
      <figure>
        <img style={{ width: '100%' }} src={require(`../../../${img}`)} alt="" />
        <figcaption>
          <div className="gallery-single-content">
            <Heading className="gallery-single-title" as="h4">
              {name}
            </Heading>
            <p>{category}</p>
          </div>
        </figcaption>
      </figure>
    </GalleryCard>
  );
}

GalleryCards.propTypes = {
  item: PropTypes.object,
};

export default GalleryCards;
