import { Button, Col, Form, Input, Row } from 'antd';
import React from 'react';

export const FormComponent = () => {
  const handleFinish = (a: any) => {
    console.log(a);
  }

  const handleFinishFailed = (a: any) => {
    console.log("Deu errado");
  }

  const handleValuesChange = (a: any) => {
    console.log("Valores dos campos estão mudando");
  }

  return <Form
    layout='vertical'
    onFinish={handleFinish}
    onFinishFailed={handleFinishFailed}
    onValuesChange={handleValuesChange}
  >
    <Row gutter={20}>
      <Col span={12}>
        <Form.Item
          name={['fullname']}
          label="Nome completo"
          rules={[{ required: true }]}>
          <Input placeholder='Digite o seu nome' />
        </Form.Item >
      </Col>
      <Col span={12}>
        <Form.Item
          name={['email']}
          label="email"
          rules={[{ required: true }]}>
          <Input type='email' placeholder='Digite o email' />
        </Form.Item >

      </Col>
      <Col span={12}>
        <Form.Item
          name={['Password']}
          label="Senha"
          rules={[{ required: true }]}>
          <Input type='password' placeholder='Digite a senha' />
        </Form.Item >
      </Col>
      <Col span={12}>
        <Form.Item
          name={['PasswordConfirmed']}
          label="Repita a senha"
          dependencies={['Password']}

          rules={[{ required: true }, ({ getFieldValue }) => ({
            validator(_, value) {
              return !value || getFieldValue('Password') === value ?
                Promise.resolve() :
                Promise.reject(new Error("As senhas não são idênticas"))
            }
          })]}>
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
