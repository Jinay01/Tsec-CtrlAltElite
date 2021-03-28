import React, { useState, useEffect, Suspense } from 'react';
import { Card, Col, Row, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import '../i18nextConf';

const initialValues = {
    name : "",
    phone : "",
    email : "",
    password : "",
    cpassword : "",
}

function SignUpScreen() {
  const { t, i18n } = useTranslation()

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({password:''});
  const [position, setPosition] = useState(null);

    const postRegister = () => {
        var axios = require('axios');
        var data = JSON.stringify({"email":values.email,"password":values.password,"phone_number":values.phone, "first_name": values.name});

        var config = {
        method: 'post',
        url: 'http://127.0.0.1:8000/signup/employee',
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

  const validate = (fieldValues = values) => {
    // console.log(position);

    let temp = { ...errors }
    if ('phone' in fieldValues)
      temp.phone = fieldValues.phone ? "" : "This field is required."
    if ('email' in fieldValues)
      temp.email = (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/).test(fieldValues.email) ? "" : "Email is not valid."
    // if(position === null){
    //   temp.position = position ? "" : "This field is required."
    //   console.log(temp);
    // }
      
    setErrors({
        ...temp
    })
  }

  useEffect(()=>{
    let temp = { ...errors }
    if(temp.password===""){
      temp.cpassword = (values.password===values.cpassword) ? "":"Passwords do not match";
    }
    else if(temp.password!=="" && values.password!==""){
      temp.cpassword = "Please fill the password field Correctly"
    }
    setErrors({
      ...temp
  })
  },[values.cpassword])

  const handleInputChange = (e)=>{
    const {name,value} = e.target;
    setValues({
      ...values,
      [name]: value
    })
    validate({ [name]: value })
  }

  const handleClick = () => {
    validate();
    if(errors.phone === "" && errors.email === ""){
      postRegister();
      console.log(values);
    }
  }

  return (
      <>
    <div style={{ display:'flex', justifyContent:'center', alignItems:'center', minHeight:'100vh', backgroundImage: 'url("https://img.freepik.com/free-photo/old-gray-cement-wall-background_34552-324.jpg?size=626&ext=jpg&ga=GA1.2.1139941274.1609027200")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <Suspense fallback={<div>Loading...</div>}>
          <Card style={{ position:'relative', borderRadius:'5px', margin: '120px' }}>
          <Row>
              <Col style={{background: 'linear-gradient(180deg, #22185F 0%, #4D0F6A 100%)', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '50px'}}>
                <p style={{fontSize: '2rem'}}>this is why you should sign up</p>
              </Col>
              <Col style={{padding: '30px 70px'}}>
            <Row >
              <Col>
                <h4 className="text-center">{t('signup.label')}</h4>
                <form>
                  <Row>
                    <Col>
                      <div className="form-group" style={{marginBottom:'0px'}}>
                        <label htmlFor="name" style={{marginBottom:'0px'}}>{t('name.label')} :</label>
                        <input type="text" className="form-control" name="name" id="name" placeholder={t('name.label')} style={{ width:'100%' }} onChange={(e)=>{handleInputChange(e)}} />
                        <small className="form-text text-danger">{errors.phone}&nbsp;</small>
                      </div>
                    </Col>
                    <Col>
                        <div className="form-group" style={{marginBottom:'0px'}}>
                            <label htmlFor="phone" style={{marginBottom:'0px'}}>{t('phone.label')} :</label>
                            <input type="text" className="form-control" name="phone" id="phone" placeholder={t('phone.label')} style={{ width:'100%' }} onChange={(e)=>{handleInputChange(e)}} />
                            <small className="form-text text-danger">{errors.phone}&nbsp;</small>
                        </div>
                    </Col>
                  </Row>
                  
                  <Row>
                      <Col>
                      <div className="form-group" style={{marginBottom:'0px'}}>
                        <label htmlFor="email" style={{marginBottom:'0px'}}>{t('email.label')}</label>
                        <input type="email" className="form-control" name="email" id="email" placeholder={t('email.label')} style={{ width:'100%' }} onChange={(e)=>{handleInputChange(e)}} />
                        <small className="form-text text-danger">{errors.email}&nbsp;</small>
                      </div>
                      </Col>
                    </Row>

                  <Row>
                    <Col>
                      <div className="form-group" style={{marginBottom:'0px'}}>
                        <label htmlFor="password" style={{marginBottom:'0px'}}>{t('password.label')} :</label>
                        <input type="password" className="form-control" name="password" id="password" placeholder={t('password.label')} style={{ width:'100%' }} onChange={(e)=>{handleInputChange(e)}} />
                        <small className="form-text text-danger">{errors.password}&nbsp;</small>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                  <Col>
                      <div className="form-group" style={{marginBottom:'0px'}}>
                        <label htmlFor="cpassword" style={{marginBottom:'0px'}}>{t('confirm.label')} :</label>
                        <input type="password" className="form-control" name="cpassword" id="cpassword" placeholder={t('confirm.label')} style={{ width:'100%' }} onChange={(e)=>{handleInputChange(e)}} />
                        <small className="form-text text-danger">{errors.cpassword}&nbsp;</small>
                      </div>
                    </Col>
                  </Row>
                </form>
                <div style={{ display:'flex', justifyContent:'center', alignItems:'center', width:'100%' }}>
                  <Button className="btn btn-primary my-2"  onClick={handleClick}>{t('submit.label')}</Button>
                </div>
                <Row className="text-center">
                  <Link to="/login" style={{width:'100%'}}>{t('login.label')}</Link>
                </Row>
              </Col>
            </Row>
            </Col>
            </Row>
          </Card>
        </Suspense>
    </div>
    </>
  )
}

export default SignUpScreen;