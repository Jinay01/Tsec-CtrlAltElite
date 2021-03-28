import React from 'react'
import { Button } from "react-bootstrap";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

const HomeLabels = () => {
  const { t, i18n } = useTranslation()

  return (
    <>
      <Text style={{color: 'white', fontSize: '2rem'}}>
        {t('homeheading.label')}
      </Text>
      <div style={{textAlign: 'center'}}>
      <Link to="/interview">
        <FindButton>{t('prep.label')}</FindButton>
      </Link>
      <Link to="/joblists">
        <ReportButton>{t('search.label')}</ReportButton>
      </Link>
      </div>
    </>
  )
}

export default HomeLabels;

const Text = styled.p `
  font-size: 2rem;
  padding-top: 35vh;
  margin: auto;
  text-align: center;
  color: #fff;
  width: 50%;
`;

const FindButton = styled(Button) `
  margin: 5vh 2vw 0 0;
  width: 170px;
  border-radius: 3px;
  border: none;
  background: rgba(72,149,239,1);
  color: #000;
  border: 2px solid rgba(72,149,239,1);
`;

const ReportButton = styled(Button) `
  margin-top: 5vh;
  width: 170px;
  border-radius: 3px;
  background: transparent;
  color: #fff;
  border: 2px solid rgba(72,149,239,1);
`;