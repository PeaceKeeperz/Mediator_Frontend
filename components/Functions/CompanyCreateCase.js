import {
  Functions,
  Fname,
  Label,
  Button,
  Input,

} from './Functions.styled';

function CompanyCreateCase() {
  return (
    <Functions>
      <Fname>Company Create Case</Fname>
      <form>
        <Label>First Party Address</Label>
        <Input id='joincaseID' type='text' palceholder='Your Case ID..' />
        <Label>Second Party Address</Label>
        <Button>Submit</Button>
      </form>
    </Functions>
  );
}

export default CompanyCreateCase;
