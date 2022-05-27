import React, { useState } from 'react';
import { Functions, Fname, Label, Button, Input } from './Functions.styled';
import {
    MEDIATION_ABI,
    MEDIATION_ADDRESS,
    MEDIATOR_ABI,
    MEDIATOR_ADDRESS,
  } from '../../constants/index';
  import { useWeb3Contract, useMoralis } from 'react-moralis';

function BlockchainFunctionCloseCase(props) {
    const { Moralis } = useMoralis();
  const { data, error, runContractFunction, isFetching, isLoading } =
    useWeb3Contract();

    const [caseId, setCaseId] = useState(0);

    const closeCase = {
        abi: MEDIATION_ABI,
        contractAddress: MEDIATION_ADDRESS,
        functionName: 'closeCase',
        chain: 'rinkeby',
        params: {
          // read this field from an input, use react useState hooks
          _caseId: caseId,
        },
      };
  return (
    <Functions>
      <Fname>{props.name}</Fname>
      <Label>When closing a case, the contract checks if the default number of sessions were met if not, part 
      of the money is refunded back to the parties involve.</Label>
      <form>
        <Label>Case ID</Label>
        <Input type='text' placeholder='Your Case ID..' onChange={event => setCaseId(event.target.value)} />
        <Button onClick={() => runContractFunction({ params: closeCase })}
              disabled={isFetching}>Close case</Button>
      </form>
    </Functions>
  );
}

export default BlockchainFunctionCloseCase;
