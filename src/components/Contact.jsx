import React, { useState } from 'react';
import { Card, Form, Input, Button, Divider, message, Alert } from 'antd';
import { MailOutlined, UserOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const Contact = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const onFinish = async (values) => {
    setLoading(true);
    setSubmissionStatus(null);
    
    try {
      // Replace with your actual Formspree endpoint
      const response = await fetch('https://formspree.io/f/xblabely', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      
      if (response.ok) {
        message.success('Message sent successfully! I\'ll get back to you soon.');
        form.resetFields();
        setSubmissionStatus({ 
          type: 'success', 
          message: 'Your message has been sent successfully!' 
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      message.error('Failed to send message. Please try again or email me directly.');
      setSubmissionStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please email me directly at aribisalaibrahim7@gmail.com.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-md border-0">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Let's get started.</h2>
            </div>
            
            {/* Status Alerts */}
            {submissionStatus && (
              <Alert
                message={submissionStatus.type === 'success' ? 'Success' : 'Error'}
                description={submissionStatus.message}
                type={submissionStatus.type}
                showIcon
                closable
                className="mb-6"
                onClose={() => setSubmissionStatus(null)}
              />
            )}
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">My name is</p>
                  <p className="text-lg font-semibold">Aribisala Ibrahim</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-1">and I</p>
                  <p className="text-lg font-semibold">Am a Frontend Developer.</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-1">You can reach me at</p>
                  <p className="text-lg font-semibold">aribisalaibrahim7@gmail.com</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Contact me</p>
                  <p className="text-lg font-semibold">On your project</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-1">to get</p>
                  <p className="text-lg font-semibold">things started.</p>
                </div>
              </div>
            </div>
            
            <Divider />
            
            <Form
              form={form}
              name="contact"
              onFinish={onFinish}
              layout="vertical"
              className="mt-8"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: 'Please input your name!' },
                    { min: 2, message: 'Name must be at least 2 characters.' }
                  ]}
                >
                  <Input 
                    prefix={<UserOutlined className="text-gray-400" />} 
                    placeholder="YOUR FULL NAME" 
                    size="large"
                    className="rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-gray-300 px-1 shadow-none focus:border-blue-600"
                  />
                </Form.Item>

                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: 'Please input your email!' },
                    { type: 'email', message: 'Please enter a valid email!' }
                  ]}
                >
                  <Input 
                    prefix={<MailOutlined className="text-gray-400" />} 
                    placeholder="YOUR EMAIL ADDRESS" 
                    size="large"
                    className="rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-gray-300 px-1 shadow-none focus:border-blue-600"
                  />
                </Form.Item>
              </div>

              <Form.Item
                name="message"
                rules={[
                  { required: true, message: 'Please input your message!' },
                  { min: 10, message: 'Message must be at least 10 characters.' },
                  { max: 1000, message: 'Message cannot exceed 1000 characters.' }
                ]}
              >
                <TextArea 
                  rows={4} 
                  placeholder="Tell me about your project..." 
                  size="large"
                  showCount
                  maxLength={1000}
                  className="rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-gray-300 px-1 shadow-none focus:border-blue-600"
                />
              </Form.Item>

              <Form.Item className="text-center mt-8">
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  loading={loading}
                  className="bg-gray-800 hover:bg-gray-900 text-white h-12 px-8 text-lg rounded-none border-0"
                >
                  {loading ? 'SENDING...' : '— SEND INFO —'}
                </Button>
              </Form.Item>
            </Form>
            
            <Divider />
            
            <div className="text-center text-gray-500 text-sm">
              <p>© Aribisala Ibrahim {new Date().getFullYear()}</p>
              <div className="flex justify-center space-x-6 mt-2">
                <a href="https://wa.link/4szggw" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                  Contact
                </a>
                <a href="https://www.linkedin.com/in/aribisala-ibrahim-85a066378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                   target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                  LinkedIn
                </a>
                <a href="https://github.com/IBMTECKO12" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                  GitHub
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;