import React, { useState } from 'react';
import { Functions, Fname, Label, Button, Input } from './Functions.styled';
import {
    MEDIATION_ABI,
    MEDIATION_ADDRESS,
    MEDIATOR_ABI,
    MEDIATOR_ADDRESS,
  } from '../../constants/index';
  import { useWeb3Contract, useMoralis } from 'react-moralis';


function BlockchainFunctionAsSecondParty(props) {
    const { Moralis } = useMoralis();
  const { data, error, runContractFunction, isFetching, isLoading } =
    useWeb3Contract();

    const [caseId, setCaseId] = useState(0);

    const joinCaseAsSecondParty = {
        abi: MEDIATION_ABI,
        contractAddress: MEDIATION_ADDRESS,
        functionName: 'joinCaseAsSecondParty',
        chain: 'rinkeby',
        msgValue: Moralis.Units.ETH('0.0015'),
        params: {
          _caseId: caseId,
        },
      };

  return (
    <Functions>
      <Fname>{props.name}</Fname>
      <Label>When joining a case as the second party, you pay half the mediator's fee for the default number of sessions (3)</Label>
      <form>
        <Label>Case ID</Label>
        <Input type='text' placeholder='Your Case ID..' onChange={event => setCaseId(event.target.value)}/>
        <Button onClick={() =>
                runContractFunction({ params: joinCaseAsSecondParty })
              }
              disabled={isFetching}>Join Case As Second Party</Button>
      </form>
    </Functions>
  );
}

export default BlockchainFunctionAsSecondParty;
