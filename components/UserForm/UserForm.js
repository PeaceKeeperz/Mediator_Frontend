import { Container, ContainerWrapper } from './UserForm.styled';
import CreateCase from '../Functions/CreateCase';
import JoinCase from '../Functions/JoinCase';
import BlockchainFunction from '../Functions/BlockchainFunc';
import CompanyCreateCase from '../Functions/CompanyCreateCase';
import BlockchainFunctionAsSecondParty from '../Functions/BlockchainFunctionAsSecondParty';
import BlockchainFunctionAddMediator from '../Functions/BlockchainFunctionAddMediator';
import BlockchainFunctionBookASession from '../Functions/BlockchainFunctionBookASession';
import BlockchainFunctionJoinBookedSessionAsSecondParty from '../Functions/BlockchainFunctionJoinBookedSessionAsSecondParty';
import BlockchainFunctionStartABookedSession from '../Functions/BlockchainFunctionStartABookedSession';
import BlockchainFunctionEndBookedSession from '../Functions/BlockchainFunctionEndBookedSession';
import BlockchainFunctionCompanyCreateBookedSession from '../Functions/BlockchainFunctionCompanyCreateBookedSession';
import BlockchainFunctionCloseCase from '../Functions/BlockchainFunctionCloseCase';

function UserForm() {
  return (
    <>
      <Container>
        <ContainerWrapper>
          <CreateCase />
          <BlockchainFunctionAsSecondParty name='Join Case As Second Party' />
          <BlockchainFunctionAddMediator name='Assign a Mediator to Case' />
          <JoinCase />
          <CompanyCreateCase />
          <BlockchainFunctionBookASession name='Book a new Session' />
          <BlockchainFunctionJoinBookedSessionAsSecondParty name='Join Booked Session As Second Party' />
          <BlockchainFunctionStartABookedSession name='Start Booked Session' />
          <BlockchainFunctionEndBookedSession name='End Booked Session' />
          <BlockchainFunctionCompanyCreateBookedSession name='Company Create Booked Session' />        
          <BlockchainFunctionCloseCase name='Close Case' />
        </ContainerWrapper>
      </Container>
    </>
  );
}

export default UserForm;
