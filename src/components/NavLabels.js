import React from 'react'
import { Nav } from "react-bootstrap";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

const NavLabels = () => {
  const { t, i18n } = useTranslation()

  return (
    <>
      <RegisterLink href="/blog">{t('blog.label')}</RegisterLink>
      <RegisterLink href="/login">{t('login.label')}</RegisterLink>
      <RegisterLink href="/signup">{t('signup.label')}</RegisterLink>
    </>
  )
}

export default NavLabels;

const RegisterLink = styled(Nav.Link) `
  background: transparent;
  color: #007bff;
  padding: 0.5rem 2rem !important;
  margin-right: 0.5rem;
  font-size: 1.2rem;
`