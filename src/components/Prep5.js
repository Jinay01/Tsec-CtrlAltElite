import React, { useState } from 'react';
import axios from 'axios';
import { Button, Row, Col, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { ReactMediaRecorder } from "react-media-recorder";
import { useReactMediaRecorder } from "react-media-recorder";
import Chart from '../components/Chart';
import Webcam from "react-webcam";

const Prep5 = () => {

  

    const {
        status,
        startRecording,
        stopRecording,
        mediaBlobUrl,
      } = useReactMediaRecorder({ video: true });

      console.log(status);

      ////////////////////////////////////////
      //////FILE UPLOAD//////////////////////
      //////////////////////////////////////
      // State to store uploaded file
    const [file, setFile] = React.useState("");
    const [emotion, setEmotion] = useState([]);

    // Handles file upload event and updates state
    function handleUpload(event) {
      // setFile(event.target.files[0]);
      // console.log(file);

      var axios = require('axios');
      var filenew=event.target.files[0];
      // var FormData = require('form-data');
      // var fs = require('fs');
      console.log(filenew);
      var data = new FormData();
      data.append('video_upload', filenew);
      // data.append('question', '1');
      // data.append('share_it', 'true');

      var config = {
        method: 'post',
        url: 'http://127.0.0.1:8000/practice-interview/',
        headers: { 
          'Authorization' : `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE3MjQyMjcwLCJqdGkiOiI0Zjg2YjEyNzVlMDI0MDRiYWY4Y2UxZWJmNTg0MTViYiIsInVzZXJfaWQiOjZ9.J72I_IHUiv1pxrQiOhk9XBZdniKVx7CXLlUcDZ7h5Fg`
        },
        data : data
      };

      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setEmotion(response.data);
        console.log("yesssssss");
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    ////////////////////////////////////
    ///////////////////////////////////
    ///////////////////////////////////

      return (
        <div>
          <div style={{background: '#ECF0F1', padding: '30px', borderRadius: '3px'}}>
            <div style={{fontSize: '1.5rem'}}>Q1: Why should we select you for an interview?</div>
            <hr/>
            <Row>
              <Col xs={12}>
                {status === 'stopped' ? (<video src={mediaBlobUrl} controls autoplay loop style={{width: '100%', height: '50vh'}}/>) : (<Webcam />)}
                <div>
                  <Start onClick={startRecording}>Start Recording</Start>
                  <Stop onClick={stopRecording}>Stop Recording</Stop>
                </div>
                {/* <FileUpload emotion={emotion} setEmotion={setEmotion}/> */}
                {/* <Form.File.Input style={{marginTop: '30px'}}/> */}
                <div>
                    <div id="upload-box" style={{paddingTop: '40px'}}>
                          <input type="file" onChange={handleUpload} />
                          <p>Filename: {file.name}</p>
                          <p>File type: {file.type}</p>
                          {/* <p>File size: {file.size} bytes</p> */}
                          {file}
                          {/* <div style={{margin: 'auto'}}>
                                  <Button onClick={handleUpload}>Get Data</Button>
                                  </div> */}
                        {/* <Col><Chart emotion={emotion}/></Col> */}
                    </div>
                </div>
              </Col>

              <Col>
                <div style={{fontSize: '1.2rem', textAlign: 'center'}}>Download the recorded video and upload it to get a sentiment analysis</div>
                <Chart emotion={emotion} setEmotion={setEmotion}/>
              </Col>
            </Row>
          </div>
        </div>
      );
};

// function FileUpload({emotion, setEmotion}) {
  
//      // State to store uploaded file
//     const [file, setFile] = React.useState("");
//     const [emotion, setEmotion] = useState([]);

//     // Handles file upload event and updates state
//     function handleUpload(event) {
//       // setFile(event.target.files[0]);
//       // console.log(file);

//       var axios = require('axios');
//       var filenew=event.target.files[0];
//       // var FormData = require('form-data');
//       // var fs = require('fs');
//       console.log(filenew);
//       var data = new FormData();
//       data.append('video_upload', filenew);
//       // data.append('question', '1');
//       // data.append('share_it', 'true');

//       var config = {
//         method: 'post',
//         url: 'http://127.0.0.1:8000/practice-interview/',
//         headers: { 
//           'Authorization' : `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE3MjQyMjcwLCJqdGkiOiI0Zjg2YjEyNzVlMDI0MDRiYWY4Y2UxZWJmNTg0MTViYiIsInVzZXJfaWQiOjZ9.J72I_IHUiv1pxrQiOhk9XBZdniKVx7CXLlUcDZ7h5Fg`
//         },
//         data : data
//       };

//       axios(config)
//       .then(function (response) {
//         console.log(JSON.stringify(response.data));
//         setEmotion(response.data);
//         console.log("yesssssss");
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//     }

//     return (
//       <div id="upload-box" style={{paddingTop: '40px'}}>
//         <Row>
//           <Col>
//             <input type="file" onChange={handleUpload} />
//             <p>Filename: {file.name}</p>
//             <p>File type: {file.type}</p>
//             {/* <p>File size: {file.size} bytes</p> */}
//             {file}
//             {/* <div style={{margin: 'auto'}}>
//                     <Button onClick={handleUpload}>Get Data</Button>
//                     </div> */}
//           </Col>
//           {/* <Col><Chart emotion={emotion}/></Col> */}
//         </Row>
        
        
//       </div>
//     );
//   } 
  
export default Prep5;

const Start = styled(Button) `
  margin: 30px;
`
const Stop = styled(Button) `
  margin: 30px;
`