import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetAllCountsComponent = (props) => {
  const [allCounts, setAllCounts] = useState([]);
  const [totalCount, setTotalCounts] = useState('');

  useEffect(() => {
    // Fetch all counts when the component mounts
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/get-all-counts`) //execution time 6.36ms
      .then(response => {
        const total = response.data.counts.reduce((sum, count) => sum + count.count, 0);
        setTotalCounts(total);
        setAllCounts(response.data.counts);
      })
      .catch(error => {
        console.error('Error fetching counts:', error);
      });
  }, [props.addData,props.updateData]);

  return (
    <div className='col-md-6'>
      <h3>Counts for Create and Update</h3>
      <ul >
        {allCounts.map((count, index) => (
          <li key={index}>{count.operation}: {count.count}</li>
        ))}
      </ul>
      <p id="total-count">Total Count for Update and Create API: {totalCount}</p>
    </div>
  );
};

export default GetAllCountsComponent;
