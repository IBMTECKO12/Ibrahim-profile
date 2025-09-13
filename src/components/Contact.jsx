import React from 'react';
import { Card, Form, Input, Button } from 'antd';
import { MailOutlined, UserOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const Contact = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
    // Handle form submission here
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
        
        <div className="max-w-lg mx-auto">
          <Card className="shadow-md">
            <Form
              name="contact"
              onFinish={onFinish}
              layout="vertical"
            >
              <Form.Item
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Your Name" />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  { required: true, message: 'Please input your email!' },
                  { type: 'email', message: 'Please enter a valid email!' }
                ]}
              >
                <Input prefix={<MailOutlined />} placeholder="Your Email" />
              </Form.Item>

              <Form.Item
                name="message"
                rules={[{ required: true, message: 'Please input your message!' }]}
              >
                <TextArea rows={4} placeholder="Your Message" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="w-full">
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;