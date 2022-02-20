import React from 'react';
import convertFormDataToArray from '../../utils/convertFormDataToArray';
import Input from '../Input/Input';
import css from './CreateWorkSpaceStepOne.module.css';

const CreateWorkSpaceStepOne = ({ formValues, inputChangeHandler, headingOne, headingTwo, inputClass = '', labelClass = '', isRadio = false }) => {

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

export default CreateWorkSpaceStepOne;