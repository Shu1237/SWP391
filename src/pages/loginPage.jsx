import { useState } from 'react';
import Login from '../components/login';
import Register from '../components/register';
import ImageRight from '../components/imageLogin';
import ForgotPassword from '../components/forgetpassword'


const LoginPage = () => {
    const [openRegister, setRegister] = useState(0);

    const renderAuthComponent = () => {
        switch (openRegister) {
            case 0:
                return <Login setRegister={setRegister} />;
            case 1:
                return <Register setRegister={setRegister} />;
            case 2:
                return <ForgotPassword setRegister={setRegister} />;
            default:
                return <Login setRegister={setRegister} />;
        }
    }
    return (
        <div className='flex flex-row h-screen bg-gradient-to-br from-green-50 to-blue-50'>
            {renderAuthComponent()}
            <ImageRight />
        </div>
    )
}

export default LoginPage;