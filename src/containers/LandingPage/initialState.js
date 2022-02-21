export const initialStateStepOne = {
    formData:
    {
      fullName: {

        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Steve Jobs',
          label:'Full Name'
        },
        value: '',
        validation: {
          required: true,
          maxLength: 50
        },
        valid: false,
        touched: false
      },
      displayName: {

        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Steve',
          label:'Display Name'
        },
        value: '',
        validation: {
          required: true,
          maxLength: 50
        },
        valid: false,
        touched: false
      },
    },
    
    isValidForm: false
  };

export const initialStateStepTwo = {
  formData: {
    workSpaceName: {

      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Eden',
        label:'Workspace Name'
      },
      value: '',
      validation: {
        required: true,
        maxLength: 50
      },
      valid: false,
      touched: false
    },
    workSpaceUrl: {

      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'www.eden.com/   Example',
        label:'Workspace URL (optional)'
      },
      value: '',
      validation: {
        required: false,
        maxLength: 50
      },
      valid: true,
      touched: false
    },
  },
  isValidForm: false
};

export const initialStateStepThree = {
  formData: {
    individualRadio: {
      siblingId:'teamRadio',
      elementType: 'input',
      elementConfig: {
        type: 'radio',
        placeholder: 'www.eden.com/   Example',
        name: 'workspace-type',
        label:'For myself'
      },
      value: '',
      validation: {
        required: false,
        maxLength: 50
      },
      valid: true,
      touched: false,
      checked:false

    },
    teamRadio: {
      siblingId:'individualRadio',
      elementType: 'input',
      elementConfig: {
        type: 'radio',
        placeholder: 'www.eden.com/   Example',
        name: 'workspace-type',
        label:'With my team'
      },
      value: '',
      validation: {
        required: false,
        maxLength: 50
      },
      valid: true,
      touched: false,
      checked: false
    },
  },
  isValidForm: false
}