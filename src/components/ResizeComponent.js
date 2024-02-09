import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import { Link } from 'react-router-dom';
const ResponsiveGridLayout = WidthProvider(Responsive);

const ResizableContainer = () => {
  const layout = [
    { i: 'add', x: 0, y: 0, w: 4, h: 2 },
    { i: 'update', x: 5, y: 0, w: 4, h: 2 },
    { i: 'count', x: 1, y: 0, w: 4, h: 2 },
  ];
 

  return (
    <>
    {/* for adding usser data */}
    <Link to='/user'>Add User Data</Link> 

      <ResponsiveGridLayout className="layout" layouts={{ lg: layout }} breakpoints={{ lg: 1200 }}>
        <div key="add" style={{ border: '1px solid #ddd', overflow: 'hidden' }}>
          <h4>Welcome to DataNeuron</h4>
          DataNeuron is the only platform that excels both in data curation and model personalization.
        </div>
        <div key="update" style={{ border: '1px solid #ddd', overflow: 'hidden' }}>
          <h4>Our Missions</h4>
          At DataNeuron, our aim is to accelerate the development and provide explainability for AI. We are obsessed with creating value by building products considered to be impossible.
        </div>
        <div key="count" style={{ border: '1px solid #ddd', overflow: 'hidden' }}>
          <h4>Our Products</h4>
          Text Classification<br/>
          Named Entity Recognition<br/>
          Summarization
        </div>
      </ResponsiveGridLayout>
    </>
  );
};

export default ResizableContainer;
