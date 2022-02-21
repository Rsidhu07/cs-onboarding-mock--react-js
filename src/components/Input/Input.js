import React, { Fragment } from 'react';
import css from './Input.module.css';

const DynamicInput = (props) => {

  let inputClasses = props.inputClass;


  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses = css.Invalid + inputClasses;
  }
  switch (props.elementType) {
    case 'input': {
      if (props.elementConfig.type === 'text') {
        return (
          <input className={inputClasses} type={props.elementConfig.type} name={props.name}
            placeholder={props.elementConfig.placeholder} onChange={props.changed}
          ></input>
        );
      } else if (props.elementConfig.type === 'radio') {
        return (
          <input className={inputClasses} type={props.elementConfig.type} name={props.elementConfig.name} 
            placeholder={props.elementConfig.placeholder} onChange={props.changed}
          ></input>
        );
      }
    }
    default:
      return (<input type='text'></input>)
  }

}

const Input = (props) => {
  const { checked } = props;

  return (
    <Fragment>
      {props.isRadio ?
        (<label className={checked ? `${props.labelClass} ${css.labelActive}`: props.labelClass}>
          <div className={css.displayBox}>
            <div className={css.labelImg}>image</div>
            <div className={css.contentTitle}>{props.elementConfig.label}</div>
            <div className={css.content}>Write Better. Think more clearly. Stay organized.</div>
          </div>
          <DynamicInput {...props} />
        </label>)


        : (<Fragment >
          <label htmlFor={props.name} className={props.labelClass}>
            {props.elementConfig.label}
          </label>
          <DynamicInput {...props} />
        </Fragment>)
      }
    </Fragment>
  )
}

export default Input;