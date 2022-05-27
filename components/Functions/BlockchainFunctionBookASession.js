import React, { useState } from 'react';
import { Functions, Fname, Label, Button, Input } from './Functions.styled';
import {
    MEDIATION_ABI,
    MEDIATION_ADDRESS,
    MEDIATOR_ABI,
    MEDIATOR_ADDRESS,
  } from '../../constants/index';
  import { useWeb3Contract, useMoralis } from 'react-moralis';

function BlockchainFunctionBookASession(props) {
    const { Moralis } = useMoralis();
  const { data, error, runContractFunction, isFetching, isLoading } =
    useWeb3Contract();

    const [caseId, setCaseId] = useState(0);

    const createBookedSession = {
        abi: MEDIATION_ABI,
        contractAddress: MEDIATION_ADDRESS,
        functionName: 'createBookedSession',
        chain: 'rinkeby',
        msgValue: Moralis.Units.ETH('0.0005'),
        params: {
          // read this field from an input, use react useState hooks
          _caseId: caseId,
        },
      };
  return (
    <Functions>
      <Fname>{props.name}</Fname>
      <Label>If you have used all the default number of sessions and still need more, then book a new session by specifying the caseId</Label>
      <form>
        <Label>Case ID</Label>
        <Input type='text' placeholder='Your Case ID..' onChange={event => setCaseId(event.target.value)} />
        <Button onClick={() =>
                runContractFunction({ params: createBookedSession })
              }
              disabled={isFetching}>Submit</Button>
      </form>
    </Functions>
  );
}

export default BlockchainFunctionBookASession;
