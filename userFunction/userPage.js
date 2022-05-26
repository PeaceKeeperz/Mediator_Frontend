import Dashboard from '../components/Dashboard/Dashboard';
import UserForm from '../components/UserForm/UserForm';
import { Container, Wrapper } from './userPage.styled';

function UserPage() {
  return (
    <>
      <Container>
        <UserForm/>
        <Dashboard />
      </Container>
    </>
  );
}

export default UserPage;
