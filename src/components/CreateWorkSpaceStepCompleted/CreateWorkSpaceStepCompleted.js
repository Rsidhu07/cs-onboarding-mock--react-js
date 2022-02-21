import React from 'react';
import css from './CreateWorkSpaceStepCompleted.module.css';
import check from '../../assets/check.png';

const CreateWorkSpaceStepCompleted = ({headingOne, headingTwo}) => {
  return (
    <>
    <img className={css.checkImage} src={check} alt='check-mark'/>
     <h2>{headingOne}</h2>
      <h4>{headingTwo}</h4>
    </>
  )
};

export default CreateWorkSpaceStepCompleted;