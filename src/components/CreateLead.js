import React, { useState } from 'react';
import { createLead } from '../utils/helper';
import FormLeads from './FormLeads';
const CreateLead = ({ updateLeadsList }) => {
  const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    contacted: false,
    notes: '',
  };
  const [lead, setLead] = useState({
    ...initialState,
  });
  const submitLead = () => {
    createLead(lead)
      .then((lead) => {
        updateLeadsList(lead);
        alert('Lead created successfully!');
        setLead({ ...initialState });
      })
      .catch((error) => alert(error));
  };
  return (
    <div>
      <FormLeads
        title={'Create Lead'}
        setState={setLead}
        lead={lead}
        submitForm={submitLead}
      />
    </div>
  );
};

export default CreateLead;
