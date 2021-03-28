import React from 'react'
import { NavDropdown, Form } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const LanguageSelector = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <div onChange={changeLanguage}>
      {/* <i class="fa fa-language" aria-hidden="true" style={{color: 'white'}}></i> */}
        <Form.Control as="select">
            <option value="en">English</option>
            <option value="hi">Hindi</option>
        </Form.Control>
    </div>
  )
}

export default LanguageSelector;