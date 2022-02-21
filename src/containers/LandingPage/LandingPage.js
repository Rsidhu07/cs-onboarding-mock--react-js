import React, { useRef, useState } from 'react';
import Header from '../../components/Header/Header';
import css from './LandingPage.module.css';
import { initialStateStepOne, initialStateStepTwo, initialStateStepThree } from './initialState';
import checkValidity from '../../utils/formValidation';
import CreateWorkSpaceStep from '../../components/CreateWorkSpaceStep/CreateWorkSpaceStep';
import CreateWorkSpaceStepCompleted from '../../components/CreateWorkSpaceStepCompleted/CreateWorkSpaceStepCompleted';

const ONE = 1;
const TWO = 2;
const THREE = 3;
const FOUR = 4;
const FIXED_ARRAY = [1,2,3,4];

const checkIsSelected = formData => {
  if (!formData || !Object.keys(formData).length) return false;
  let isValid = false;
  for (let key in formData) {
    if (formData[key].value) {
      isValid = true;
    }
  }
  return isValid;
};

const LandingPage = () => {

  const [formValuesStepOne, setFormValuesStepOne] = useState(initialStateStepOne);
  const [formValuesStepTwo, setFormValuesStepTwo] = useState(initialStateStepTwo);
  const [formValuesStepThree, setFormValuesStepThree] = useState(initialStateStepThree);
  const [step, setStep] = useState(ONE);
  const progressRef = useRef(null);



  const inputChangeHandler = (e, id, formData) => {
    const updateFormData = {
      ...formData
    };

    const updatedFormElement = {
      ...updateFormData[id]
    };

    updatedFormElement.value = e.target.value;
    updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    if(e.target.checked){
      updatedFormElement.checked = e.target.checked;
      formData[updatedFormElement.siblingId].checked = false;
    }

    let formIsValid = true;

    updateFormData[id] = updatedFormElement;
    for (let inputIdentifier in updateFormData) {
      formIsValid = updateFormData[inputIdentifier].valid && formIsValid;
    }

    if (step === ONE) {
      setFormValuesStepOne({
        ...formValuesStepOne,
        formData: updateFormData,
        isValidForm: formIsValid
      });
    } else if (step === TWO) {
      setFormValuesStepTwo({
        ...formValuesStepTwo,
        formData: updateFormData,
        isValidForm: formIsValid
      });
    } else if (step === THREE) {
      setFormValuesStepThree({
        ...formValuesStepThree,
        formData: updateFormData,
        isValidForm: formIsValid
      });
    }
  };

  let content = '', disabled = false, headingOne = '', headingTwo = '';

  const displayName = formValuesStepOne.formData.displayName.value || '';
  switch (step) {
    case ONE:
      headingOne = 'Welcome! First things first...';
      headingTwo = 'You can always change them later.';
      content = (<CreateWorkSpaceStep
        formValues={formValuesStepOne}
        inputChangeHandler={inputChangeHandler}
        headingOne={headingOne}
        headingTwo={headingTwo}
      />);
      disabled = formValuesStepOne.isValidForm;

      break;

    case TWO:
      headingOne = 'Let\'s setup a home for all your work';
      headingTwo = 'You can always create another workspace later.';
      content = (<CreateWorkSpaceStep
        formValues={formValuesStepTwo}
        inputChangeHandler={inputChangeHandler}
        headingOne={headingOne}
        headingTwo={headingTwo}
      />);
      disabled = formValuesStepTwo.isValidForm;
      break;

    case THREE:
      headingOne = 'How are you planning to use Eden?';
      headingTwo = 'We\'ll streamline your setup experience accordingly.';
      content = (<CreateWorkSpaceStep
        formValues={formValuesStepThree}
        inputChangeHandler={inputChangeHandler}
        headingOne={headingOne}
        headingTwo={headingTwo}
        inputClass ={css.inputRadio}
        labelClass = {css.inputRadioLabel}
        activeClass = {css.radioActive}
        isRadio={true}
        
      />);
      const isSelected = checkIsSelected(formValuesStepThree.formData);
      disabled = isSelected;
      break;

    case FOUR:
      headingOne = `Congratulations, ${displayName}!`;
      headingTwo = 'You have completed onboarding, you can start using the Eden!';
      content = (<CreateWorkSpaceStepCompleted
        headingOne={headingOne}
        headingTwo={headingTwo}
      />);
      break;
  };

  const goToNextStep = () => {
    if (step < 4) setStep(pStep => pStep + 1);
    if (progressRef && progressRef.current) {
      const progressWidth = (((((step + 1) - 1) / 3) * 100) + "%");
      progressRef.current.style.width = progressWidth;
    }
  };

  const progressStepActiveClasses = `${css['progress-step']} ${css['progress-step-active']}`;
  const progressStepClass = css['progress-step'];
  const progressBar = (
    <div className={css.progressContainer}>
      <div className={css.progressbar}>
        <div className={css.progress} id="progress" ref={progressRef}></div>
        {FIXED_ARRAY.map(el=>(
          <div key={el} className={step >= el ? progressStepActiveClasses : progressStepClass} ></div>
        ))}
      </div>
    </div>
  );
  return (
    <div className={css.LandingPage}>
      <Header />
      {progressBar}
      <form className={css.LandingPageForm}>
        {content}
        <button type='button' disabled={step === FOUR? false :!disabled} onClick={goToNextStep} >{step === FOUR ? 'Launch Eden' : 'Create Workspace'}</button>
      </form>
    </div>
  )
};

export default LandingPage;