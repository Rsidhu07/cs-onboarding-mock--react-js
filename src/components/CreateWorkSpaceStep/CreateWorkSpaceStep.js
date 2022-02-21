import React from 'react';
import convertFormDataToArray from '../../utils/convertFormDataToArray';
import Input from '../Input/Input';
import css from './CreateWorkSpaceStep.module.css';

const CreateWorkSpaceStep = ({ formValues, inputChangeHandler, headingOne, headingTwo, inputClass = '', labelClass = '', isRadio = false, activeClass = '' }) => {

  const InputEl =
    convertFormDataToArray(formValues.formData).map(formElement => {
      return (
        <Input key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          valid={formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          name={formElement.id}
          changed={event => inputChangeHandler(event, formElement.id, formValues.formData)}
          inputClass={inputClass}
          labelClass={labelClass}
          isRadio={isRadio}
          activeClass={activeClass}
          checked={formElement.config.checked}
        />
      );
    });

  return (
    <>
      <h2>{headingOne}</h2>
      <h4>{headingTwo}</h4>
      {isRadio ?
        <div className={css.inputRadioBtns}>
          {InputEl}
        </div> :
        InputEl
      }
    </>
  )
};

export default CreateWorkSpaceStep;