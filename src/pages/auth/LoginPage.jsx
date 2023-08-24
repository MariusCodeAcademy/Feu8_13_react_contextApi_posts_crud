import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/form/LoginForm';
import Container from '../../components/UI/container/Container';

export default function LoginPage() {
  const navigate = useNavigate();

  function handleSuccess() {
    console.log('handleSuccess');
    navigate('/posts');
  }

  return (
    <Container>
      <h1>Login Here</h1>
      <LoginForm onSekme={handleSuccess} />
    </Container>
  );
}
