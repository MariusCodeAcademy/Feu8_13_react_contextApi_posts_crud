import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/form/LoginForm';

export default function LoginPage() {
  const navigate = useNavigate();

  function handleSuccess() {
    console.log('handleSuccess');
    navigate('/posts');
  }

  return (
    <div className='container'>
      <h1>Login Here</h1>
      <LoginForm onSekme={handleSuccess} />
    </div>
  );
}
