import React, { useState, useEffect, Fragment } from 'react';
import CreateLead from './CreateLead';
import LeadCard from './LeadCard';
import { getLeads } from '../utils/helper';
import Spinner from './Spinner';
const Home = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  // Loads the leads from server
  useEffect(() => {
    (async () => {
      try {
        const res = await getLeads();
        setLeads(res);
        setLoading(false);
      } catch (err) {
        alert('Unable to retrieve leads');
      }
    })();
  }, []);
  const updateLeadsList = (lead) => {
    setLeads([...leads, lead]);
  };
  const updateLeadsListDelete = (id) => {
    setLeads(leads.filter((lead) => lead.id !== id));
  };
  return (
    <div className='home-container'>
      <CreateLead updateLeadsList={updateLeadsList} />
      {loading ? (
        <Spinner />
      ) : leads.length > 0 ? (
        leads.map((lead) => (
          <Fragment key={lead.id}>
            <LeadCard
              lead={lead}
              updateLeadsListDelete={updateLeadsListDelete}
            />
          </Fragment>
        ))
      ) : (
        <span> No leads found</span>
      )}
    </div>
  );
};

export default Home;
