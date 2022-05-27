import React, { useState } from 'react';
import { Functions, Fname, Label, Button, Input } from './Functions.styled';
import {
    MEDIATION_ABI,
    MEDIATION_ADDRESS,
    MEDIATOR_ABI,
    MEDIATOR_ADDRESS,
  } from '../../constants/index';
  import { useWeb3Contract, useMoralis } from 'react-moralis';

function BlockchainFunctionAddMediator(props) {
  const { data, error, runContractFunction, isFetching, isLoading } =
    useWeb3Contract();

    const [caseId, setCaseId] = useState(0);

    const assignMediator = {
        abi: MEDIATION_ABI,
        contractAddress: MEDIATION_ADDRESS,
        functionName: 'assignMediator',
        chain: 'rinkeby',
        params: {
          _caseId: caseId,
        },
      };

  return (
    <Functions>
      <Fname>{props.name}</Fname>
      <Label>A random mediator will be selected and assigned to the case.</Label>
      <form>
        <Label>Case ID</Label>
        <Input type='text' placeholder='Your Case ID..'  onChange={event => setCaseId(event.target.value)}/>
        <Button onClick={() => runContractFunction({ params: assignMediator })}
              disabled={isFetching}>Assign Mediator</Button>
      </form>
    </Functions>
  );
}

export default BlockchainFunctionAddMediator;
