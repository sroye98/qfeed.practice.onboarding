import { Result } from 'antd';

const ConfirmEmail = (props) => {
    return (
        <Result status="success" title="Thank you for registering." subTitle="We have sent you an email to the email address you have provied. Please confirm your email address." />
    );
};

export default ConfirmEmail;