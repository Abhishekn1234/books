
import React from 'react';
import { Card, Input, Form, Button, message } from 'antd';
import axios from 'axios';

function Contact() {
  const [form] = Form.useForm();

  const handleFormSubmit = async () => {
    try {
      const values = await form.validateFields();
      const response = await axios.post('http://localhost:3001/submit-form', values);
      console.log('Server response:', response.data);
      message.success('Form submitted successfully!');
      form.resetFields(); 
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <br /><br /><br /><br />
      <Card>
        <h1 style={{ textAlign: 'center' }}>Contact Details</h1>
        <Form form={form} onFinish={handleFormSubmit}>
          <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
            <Input placeholder="Enter your Name" />
          </Form.Item>
          <Form.Item label="Address" name="address" rules={[{ required: true, message: 'Please enter your address' }]}>
            <Input.TextArea placeholder="Enter your address" />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
            <Input type="email" placeholder="Enter your Email address" />
          </Form.Item>
          <Form.Item label="Message" name="message" rules={[{ required: true, message: 'Please enter your message' }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Contact;
