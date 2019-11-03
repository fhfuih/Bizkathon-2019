import React from 'react';
import img2 from './creditCard2.jpg';
import img1 from './creditCard1.jpg';
import img3 from './creditCard3.jpg';
import {
  Paper
} from '@material-ui/core';

const imgs = [img2, img1, img3];

function creditCard({ cardNumber, validDates, name, background }) {
  return (
    <Paper style={{ width: 280, color: 'white', backgroundImage: `url("${imgs[background]}")`, backgroundSize: 'cover', backgroundPosition: 'center', textAlign: 'left' }}>
      <div style={{ position: 'relative', padding: '14px 12px 11px 15px', fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>
        <div
          style={{
            marginBottom: 10,
            fontWeight: 'bold',
            fontSize: 17,
            letterSpacing: 0.9
          }}
        >
          {cardNumber}
         </div>
        <div
          style={{
            marginBottom: 11,
            fontSize: 10,
            letterSpacing: 0.5
          }}
        >
          Valid Dates <br/> {validDates}
         </div>
        <div
          style={{
            fontSize: 12,
            letterSpacing: 0.5
          }}
        >
          {name}
         </div>
        <div
          style={{
            position: 'absolute',
            right: 12,
            bottom: 11,
            fontSize: 14,
            fontWeight: 'bold',
            fontStyle: 'italic',
            letterSpacing: 0.7
          }}
        >
          Virtual Card
         </div>
      </div>
    </Paper>
  )
}

export default creditCard;
