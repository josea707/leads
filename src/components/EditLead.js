import React, { useState, useEffect } from 'react';
import { updateLead, getLead } from '../utils/helper';
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';
import FormLeads from './FormLeads';
import Spinner from './Spinner';
const EditLead = () => {
  const { id } = useParams();
  const [lead, setLead] = useState({
    first_name: '',
    last_name: '',
    email: '',
    contacted: false,
    notes: '',
  });
  const [errorLoading, setErrorLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const res = await getLead(id);
        setLead(res);
      } catch (error) {
        alert(error);
        setErrorLoading(true);
      }
      setLoading(false);
    })();
    // eslint-disable-next-line
  }, []);
  const submitLead = () => {
    updateLead(lead)
      .then(() => alert('Lead updated successfully!'))
      .catch((error) => alert(error));
  };
  if (errorLoading) return <Navigate to='/' />;
  return (
    <div className='home-container'>
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <FormLeads
            title={'Edit Lead'}
            setState={setLead}
            lead={lead}
            submitForm={submitLead}
          />
        )}
      </div>
    </div>
  );
};

export default EditLead;
