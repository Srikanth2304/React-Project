import React, { useState } from 'react';
import { Grid, Button, TextField } from '@mui/material'
import { Box } from "@mui/system";
import { Document, Page } from "react-pdf";
import pdfFile from './Pdf/OutboundSample.pdf';
import './style/PopUpBox.css';
//add whole block with comment Edited  and copy whole after h3 tag in return;
//in json "url":"https://www.africau.edu/images/default/sample.pdf"


function ViewPDF(props) {


  /*Edited*/

  return (
    <div className="popup-box">
      <div className="box" style={{ height: "800px" }}>
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <h3>PDF View</h3>
        <div>
        </div>
        <Grid container backgroundColor="#f5f5f5" pt={2} alignItems="center" justifyContent="center">
          <Grid item lg={7} sm={12} xs={12} alignItems="center" justifyContent="center" >
            <div style={{ height: '350px', width: '500px', overflow: 'hidden', position: 'relative' }}>
              <object data={props.tradeData.Url} type="application/pdf" style={{ height: '365px', width: '103%' }} />
            </div>
          </Grid>
          <Grid item lg={4} sm={12} xs={12} ml={2} style={{ backgroundColor: '#E8E8E8' }} alignItems="center" justifyContent="center">
            <Grid className='container' m={1}>
              <strong>PDF Already Sent</strong>
            </Grid>
            <Grid className='container' >
              <p>Trade id : <span style={{ fontWeight: '500' }}>{props.tradeData.id}</span></p>
            </Grid>
            <Grid className='container' >
              <p>Product Type : <span style={{ fontWeight: '500' }}>{props.tradeData.product}</span></p>
            </Grid>
            <Grid className='container'>
              <p>Transaction Date : <span style={{ fontWeight: '500' }}>{props.tradeData.Date}</span></p>
            </Grid>
            <Grid className='container' >
              <p>Transaction Amount : <span style={{ fontWeight: '500' }}>{props.tradeData.Amount}</span></p>
            </Grid>
          </Grid>
        </Grid>

      </div>
    </div>



  )
}

export default ViewPDF


  background: linear-gradient(135deg, #1e90ff, #3cb371);
