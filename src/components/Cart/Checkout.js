import { useRef, useState } from 'react';

import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    phone: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredPhoneIsValid = !isEmpty(enteredPhone);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = !isEmpty(enteredPostalCode);

    setFormInputsValidity({
      name: enteredNameIsValid,
      phone: enteredPhoneIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredPhoneIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      phone: enteredPhone,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? '' : classes.invalid
  }`;
  const phoneControlClasses = `${classes.control} ${
    formInputsValidity.phone ? '' : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    formInputsValidity.postalCode ? '' : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? '' : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Повне ім'я (ПІБ)</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!formInputsValidity.name && <p>Будь ласка, введіть правильне ім'я!</p>}
      </div>
      <div className={phoneControlClasses}>
        <label htmlFor='phone'>Номер телефону</label>
        <input type='text' id='phone' ref={phoneInputRef} />
        {!formInputsValidity.phone && <p>Будь ласка, введіть правильний номер телефону!</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor='postal'>Відділення Нової пошти</label>
        <input type='text' id='postal' ref={postalCodeInputRef} />
        {!formInputsValidity.postalCode && (
          <p>Будь ласка, введіть правильне відділення нової пошти!</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>Місто, область</label>
        <input type='text' id='city' ref={cityInputRef} />
        {!formInputsValidity.city && <p>Будь ласка, введіть правильні дані!</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Відмінити
        </button>
        <button className={classes.submit}>Підтвердити</button>
      </div>
    </form>
  );
};

export default Checkout;
