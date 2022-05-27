import { Container, ContainerWrapper } from './UserForm.styled';
import CreateCase from '../Functions/CreateCase';
import JoinCase from '../Functions/JoinCase';
import BlockchainFunction from '../Functions/BlockchainFunc';
import CompanyCreateCase from '../Functions/CompanyCreateCase';
import BlockchainFunctionAsSecondParty from '../Functions/BlockchainFunctionAsSecondParty';
import BlockchainFunctionAddMediator from '../Functions/BlockchainFunctionAddMediator';

function UserForm() {
  return (
    <>
      <Container>
        <ContainerWrapper>
          <CreateCase />
          <BlockchainFunctionAsSecondParty name='Join Case As Second Party' />
          <BlockchainFunctionAddMediator name='Assign a Mediator to Case' />
          <JoinCase />

          {/* <BlockchainFunction name='Get First Party Member' /> */}
          {/* <BlockchainFunction name='Get Second Party Member' /> */}


          {/* <BlockchainFunction name='Start Session' /> */}
          {/* <BlockchainFunction name='Accept Payment' /> */}
          {/* <BlockchainFunction name='End Session' /> */}
          <BlockchainFunction name='End Session With out Pay' />
          <BlockchainFunction name='Create Booked Session' />
          <CompanyCreateCase />
          <BlockchainFunction name='Join Session As Second Party' />
          <BlockchainFunction name='Company Create Booked Session' />
          <BlockchainFunction name='Start Booked Session' />
          <BlockchainFunction name='End Booked Session' />
          <BlockchainFunction name='Close Case' />
        </ContainerWrapper>
      </Container>
    </>
  );
}

export default UserForm;
