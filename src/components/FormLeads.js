import React, { useState } from 'react';
const FormLeads = ({ title, setState, lead, submitForm }) => {
  const { first_name, last_name, email, contacted, notes } = lead;
  const [isMessage, setIsMessage] = useState(false);
  const onChange = (e) =>
    setState({
      ...lead,
      [e.target.name]: e.target.value,
    });
  const onSubmit = async (e) => {
    e.preventDefault();
    setIsMessage(false);
    if (
      first_name !== '' &&
      last_name !== '' &&
      email !== '' &&
      contacted !== '' &&
      notes !== ''
    )
      submitForm();
    else setIsMessage(true);
  };
  return (
    <div className='form-container'>
      <form onSubmit={onSubmit} className='center'>
        <h1 className='center-text'> {title}</h1>
        <div className='form-container__element'>
          <label htmlFor='first_name' className='font-form'>
            First Name
          </label>
          <input
            type='text'
            name='first_name'
            value={first_name}
            onChange={onChange}
            maxLength='50'
          />
        </div>
        <div className='form-container__element'>
          <label htmlFor='last_name' className='font-form'>
            Last Name:
          </label>
          <input
            type='text'
            name='last_name'
            value={last_name}
            onChange={onChange}
            maxLength='50'
          />
        </div>
        <div className='form-container__element'>
          <label htmlFor='email' className='font-form'>
            Email Address
          </label>
          <input type='email' name='email' value={email} onChange={onChange} />
        </div>

        <div className='form-container__element'>
          <label htmlFor='contacted' className='font-form'>
            Contacted?
          </label>
          <div>
            <label htmlFor='contacted' className='font-form'>
              Yes
            </label>
            <input
              type='radio'
              name='contacted'
              value='true'
              checked={contacted === 'true' || contacted === true}
              onChange={onChange}
            />
            <label htmlFor='contacted' className='font-form'>
              No
            </label>
            <input
              type='radio'
              name='contacted'
              value='false'
              checked={contacted === 'false' || contacted === false}
              onChange={onChange}
            />
          </div>
        </div>
        <div className='form-container__element'>
          <label htmlFor='notes' className='font-form'>
            Notes
          </label>
          <textarea
            cols='40'
            rows='5'
            name='notes'
            onChange={onChange}
            value={notes}
            maxLength='250'
          ></textarea>
        </div>
        {isMessage && (
          <div className='form-container__element'>
            <span className='red'>All fields are required</span>
          </div>
        )}
        <div className='row row-center'>
          <input
            type='submit'
            value={title}
            className='btn btn-dark btn-50-width light'
          />
        </div>
      </form>
    </div>
  );
};

export default FormLeads;
