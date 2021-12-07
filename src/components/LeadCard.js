import React, { useState } from 'react';
import { formatDateAndTime } from '../utils/formatDate';
import { Link } from 'react-router-dom';
import { deleteLead } from '../utils/helper';
const LeadCard = ({ lead, updateLeadsListDelete }) => {
  const [loading, setloading] = useState(false);
  const {
    id,
    first_name,
    last_name,
    email,
    contacted,
    notes,
    created,
    updated,
  } = lead;
  const updateList = (id) => {
    setloading(true);
    deleteLead(id)
      .then(() => {
        updateLeadsListDelete(id);
        alert('Lead deleted successfully!');
      })
      .catch(() => {
        alert('Error deleting Lead');
        setloading(false);
      });
  };
  return (
    <div className='card-container'>
      <ul className='card-container__list center'>
        <ol>First Name: {first_name}</ol>
        <ol>Last Name: {last_name}</ol>
        <ol>Email: {email}</ol>
        <ol>
          {contacted ? (
            <span className='green'>Contacted</span>
          ) : (
            <span className='red'>{'Not Contacted'} </span>
          )}
        </ol>
        <ol>Created: {formatDateAndTime(created)}</ol>
        <ol>Updated: {formatDateAndTime(updated)}</ol>
        <ol>{notes}</ol>
        <ol> {loading && <strong className='red'> Deleting... </strong>} </ol>
        <ol>
          <div className='row row-center'>
            <Link to={`/${id}`} className='btn-a'>
              <button className='btn btn-green'>Edit lead</button>
            </Link>

            <button className='btn btn-red' onClick={() => updateList(id)}>
              Delete Lead
            </button>
          </div>
        </ol>
      </ul>
    </div>
  );
};

export default LeadCard;
