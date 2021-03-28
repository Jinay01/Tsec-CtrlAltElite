import React, { useState, Suspense } from 'react';
import { Card, Col, Row, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import '../i18nextConf';

const initialValues = {
  email:'',
  password:'',
}

function LoginScreen() {
  const { t, i18n } = useTranslation()

  const [values, setValues] = useState(initialValues);
  const [message, setMessage] = useState({color:'',message:''});

  const postLogin = () => {
    var axios = require('axios');
    var data = JSON.stringify(values);
    
    var config = {
      method: 'post',
      url: 'http://127.0.0.1:8000/login/',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      localStorage.setItem('access',JSON.stringify(response.data));
      window.location.href = '/';
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  const handleClick = ()=>{
    if(values.email === '' || values.password === ''){
        return "please fill all details";
    } else{
      postLogin();
    }
  }

  const handleInputChange = (e)=>{
    const {name,value} = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }

  return (
      <>
    <div style={{ display:'flex', justifyContent:'center', alignItems:'center', paddingTop: '50px', minHeight:'100vh', backgroundImage: 'url("https://img.freepik.com/free-photo/old-gray-cement-wall-background_34552-324.jpg?size=626&ext=jpg&ga=GA1.2.1139941274.1609027200")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          <Suspense fallback={<div>Loading...</div>}>
          <Card style={{ border:'none', borderRadius:'5px', padding: '0'}}>
            <Row>
              <Col style={{background: 'linear-gradient(180deg, #22185F 0%, #4D0F6A 100%)', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '50px'}}>
                <p style={{fontSize: '2rem'}}>this is why you should sign up</p>
              </Col>
              <Col style={{padding: '30px 70px'}}>
                <h5 className="text-center">{t('login.label')}</h5>
                <form>
                  <div className="form-group">
                    <label htmlFor="email">{t('email.label')} :</label>
                    <input type="email" className="form-control" name="email" id="email" placeholder={t('email.label')} style={{ width:'100%' }} onChange={(e)=>{handleInputChange(e)}} />
                    <small className="form-text text-danger" style={{ zIndex: '-4' }}></small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">{t('password.label')} :</label>
                    <input type="password" className="form-control" name="password" id="password" placeholder={t('password.label')} style={{ width:'100%' }} onChange={(e)=>{handleInputChange(e)}} />
                    <small className="form-text text-danger"></small>
                  </div>
                  <div style={{ display:'flex', justifyContent:'center', alignItems:'center', width:'100%' }}>
                    <Button className="btn btn-primary my-2" onClick={() => handleClick()}>{t('login.label')}</Button>
                  </div>
                </form>
                {/* <Row className="text-center"><span style={{color:`${message.color}`, width:'100%', textAlign:'center'}}>{message.message}&nbsp;{loading && <Loader />}</span></Row> */}
                <Row className="text-center">
                  <Link to="/signup" style={{width:'100%'}}>{t('signup.label')}</Link>
                </Row>
                </Col>
                </Row>
                </Card>
                </Suspense>
    </div>
    </>
  )
}

export default LoginScreen;