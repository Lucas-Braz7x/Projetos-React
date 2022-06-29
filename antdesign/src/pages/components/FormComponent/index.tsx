import { Button, Col, Form, Input, Row } from 'antd';
import React from 'react';

export const FormComponent = () => {
  const handleFinish = (a: any) => {
    console.log(a)
  }

  return <Form
    layout='vertical'
    onFinish={handleFinish}
  >
    <Row gutter={20}>
      <Col span={12}>
        <Form.Item
          name={['fullname']}
          label="Nome completo">
          <Input placeholder='Digite o seu nome' />
        </Form.Item >
      </Col>
      <Col span={12}>
        <Form.Item
          name={['email']}
          label="email">
          <Input type='email' placeholder='Digite o email' />
        </Form.Item >

      </Col>
      <Col span={12}>
        <Form.Item
          name={['Password']}
          label="Senha">
          <Input type='password' placeholder='Digite a senha' />
        </Form.Item >
      </Col>
      <Col span={12}>
        <Form.Item
          name={['PasswordConfirmed']}
          label="Repita a senha">
          <Input type='password' placeholder='Digite a senha novamente' />
        </Form.Item >
      </Col>
    </Row>
    <Row
      justify='end'//justify-content
    >
      <Button htmlType='submit' type='primary'>Salvar</Button>
    </Row>
  </Form>
}
