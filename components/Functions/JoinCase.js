import { Functions, Fname, Label, Button, Input, Select } from './Functions.styled';
import {
  MEDIATION_ABI,
  MEDIATION_ADDRESS,
  MEDIATOR_ABI,
  MEDIATOR_ADDRESS,
} from '../../constants/index';
import { useWeb3Contract, useMoralis } from 'react-moralis';
import { useState } from 'react';

function JoinCase() {
  const { Moralis } = useMoralis();
  const { data, error, runContractFunction, isFetching, isLoading } =
    useWeb3Contract();

    const [caseId, setCaseId] = useState(0);
    const [partyNumber, setPartyNumber] = useState(0);

    const joinCase = {
      abi: MEDIATION_ABI,
      contractAddress: MEDIATION_ADDRESS,
      functionName: 'joinCase',
      chain: 'rinkeby',
      params: {
        _caseId: caseId,
        _party: partyNumber, // it can take either 1 or 2 for the respective parties
      },
    };

  return (
    <Functions>
      <Fname>Join a Case</Fname>
      <Label>To join a case, input the caseId and select the party that you want to join.</Label>
      <form>
        <Label>Case ID</Label>
        <Input type='text' placeholder='Your Case ID..' onChange={event => setCaseId(event.target.value)}/>
        <Label>Select the party you want to join</Label>
        <Select value={""} onChange={event => setPartyNumber(event.target.value)}>
          <option value='1'>Join first party</option>
          <option value='2'>Join second party</option>
        </Select>
        <Button onClick={() => runContractFunction({ params: joinCase })}
              disabled={isFetching}>Join Case</Button>
              
      </form>
    </Functions>
  );
}

export default JoinCase;
