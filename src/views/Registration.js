import { useHistory } from 'react-router-dom';
import { Button, Checkbox, Divider, Form, Input, PageHeader, Space, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const Registration = (props) => {
    const history = useHistory();

    const handleRegister = () => {
        history.push('/confirm-email');
    }

    return (
        <>
            <PageHeader title="Registration" />
            <Form name="registration" labelCol={{ span: 5 }} wrapperCol={{ span: 16 }}>
                <Divider plain>Personal Information</Divider>
                <Form.Item label="Full Name" name="fullName" rules={[{ required: true, message: 'Please enter the your full name' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Email Address" name="email" rules={[{ required: true, message: 'Please enter the your email address', type: 'email' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please enter the your username' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter the your password' }]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item label="Confirm Password" name="confirmpassword" rules={[{ required: true, message: 'Please confirm your password' }]}>
                    <Input.Password />
                </Form.Item>
                <Divider plain>Practice Information</Divider>
                <Form.Item label="Practice Name" name="practiceName" rules={[{ required: true, message: 'Please enter the practice name' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Practice Address" name="practiceName" rules={[{ required: false, message: 'Please enter the practice address' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Practice Website" name="practiceUrl" rules={[{ required: false, message: 'Please enter the practice website address' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Practice Logo" name="practiceName" rules={[{ required: false, message: 'Please enter the practice logo' }]}>
                    <Upload>
                        <Button icon={<UploadOutlined />}>Click to Upload Logo</Button>
                    </Upload>
                </Form.Item>
                <Divider plain>Physician Information</Divider>
                <Form.Item label="Physician Name" name="physicianName" rules={[{ required: true, message: 'Please enter the physician\'s name' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Physician Specialties" name="physicianSpecialties" rules={[{ required: false, message: 'Please enter the physician\'s specialties' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Physician Email Address" name="physicianEmailAddress" rules={[{ required: false, message: 'Please enter the physician\'s email address' }]}>
                    <Input />
                </Form.Item>
                <Divider plain>Social Media Options</Divider>
                <Form.Item label="Render Video Streams" name="renderStream" help="Select which Social Media platforms we should automatically render" rules={[{ required: true, message: 'Please select which platforms to automatically render streams' }]}>
                    <Checkbox.Group>
                        <Space direction="vertical">
                            <Checkbox checked={true} value="facebook">Facebook</Checkbox>
                            <Checkbox checked={true} value="instagram">Instagram</Checkbox>
                            <Checkbox checked={true} value="linkedin">LinkedIn</Checkbox>
                            <Checkbox checked={true} value="twitter">Twitter</Checkbox>
                        </Space>
                    </Checkbox.Group>
                </Form.Item>
                <Form.Item>
                    <Space>
                        <Button type="primary" onClick={handleRegister}>Register</Button>
                        <Button>Cancel</Button>
                    </Space>
                </Form.Item>
            </Form>
        </>
    );
};

export default Registration;