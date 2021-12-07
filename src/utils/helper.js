import axios from 'axios';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const getLeads = async () => {
  try {
    const res = await axios.get('/api/leads');
    return res.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

const getLead = async (pk) => {
  try {
    const res = await axios.get(`/api/leads/${pk}`);
    return res.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

const updateLead = async (lead) => {
  const body = JSON.stringify({
    first_name: lead.first_name,
    last_name: lead.last_name,
    email: lead.email,
    contacted: lead.contacted,
    notes: lead.notes,
    created: lead.created,
    updated: lead.updated,
  });
  try {
    await axios.put(`/api/leads/${lead.id}/`, body, config);
  } catch (error) {
    throw new Error(error.response.data);
  }
};

const deleteLead = async (pk) => {
  try {
    await axios.delete(`/api/leads/${pk}`);
  } catch (error) {
    throw new Error(error.response.data);
  }
};

const createLead = async (lead) => {
  const body = JSON.stringify({
    first_name: lead.first_name,
    last_name: lead.last_name,
    email: lead.email,
    contacted: lead.contacted,
    notes: lead.notes,
  });
  try {
    const res = await axios.post('/api/leads/', body, config);
    return res.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export { getLeads, getLead, updateLead, deleteLead, createLead };
