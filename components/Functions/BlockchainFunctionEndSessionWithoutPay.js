import React, { useState } from 'react';
import { Functions, Fname, Label, Button, Input } from './Functions.styled';
import {
    MEDIATION_ABI,
    MEDIATION_ADDRESS,
    MEDIATOR_ABI,
    MEDIATOR_ADDRESS,
  } from '../../constants/index';
  import { useWeb3Contract, useMoralis } from 'react-moralis';

function BlockchainFunctionEndSessionWithoutPay(props) {
    const { data, error, runContractFunction, isFetching, isLoading } =
    useWeb3Contract();

    const [caseId, setCaseId] = useState(0);

    const endSessionWithoutPay = {
        abi: MEDIATION_ABI,
        contractAddress: MEDIATION_ADDRESS,
        functionName: 'endSessionWithoutPay',
        chain: 'rinkeby',
        params: {
          // read this field from an input, use react useState hooks
          _caseId: caseId,
        },
      };

  return (
    <Functions>
      <Fname>{props.name}</Fname>
      <Label>Mediators can end a session without receiving payment in case they mistakenly start a session.</Label>
      <form>
        <Label>Case ID</Label>
        <Input type='text' placeholder='Your Case ID..' onChange={event => setCaseId(event.target.value)}/>
        <Button onClick={() =>
                runContractFunction({ params: endSessionWithoutPay })
              }
              disabled={isFetching}>End Session without pay</Button>
      </form>
    </Functions>
  );
}

export default BlockchainFunctionEndSessionWithoutPay;
