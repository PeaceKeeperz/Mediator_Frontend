import { Functions, Fname, Label, Button, Input, Select } from './Functions.styled';

function JoinCase() {
  return (
    <Functions>
      <Fname>Join Case</Fname>
      <form>
        <Label>Case ID</Label>
        <Input id='joincaseID' type='text' palceholder='Your Case ID..' />
        <Label>Party number</Label>
        <Select id='partynumber' name='partynumber'>
          <option value='1'>1</option>
          <option value='2'>2</option>
        </Select>
        <Button>Submit</Button>
      </form>
    </Functions>
  );
}

export default JoinCase;
