import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/form/LoginForm';

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <h1>Login Here</h1>
      <LoginForm />
    </div>
  );
}
