import React from 'react';
import { Functions, Fname, Label, Button, Input } from './Functions.styled';

function BlockchainFunction(props) {
  return (
    <Functions>
      <Fname>{props.name}</Fname>
      <form>
        <Label>Case ID</Label>
        <Input type='text' placeholder='Your Case ID..' />
        <Button>Submit</Button>
      </form>
    </Functions>
  );
}

export default BlockchainFunction;
