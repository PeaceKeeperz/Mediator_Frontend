import React, { useState } from 'react';
import { Functions, Fname, Label, Button, Input } from './Functions.styled';
import {
    MEDIATION_ABI,
    MEDIATION_ADDRESS,
    MEDIATOR_ABI,
    MEDIATOR_ADDRESS,
  } from '../../constants/index';
  import { useWeb3Contract, useMoralis } from 'react-moralis';

function BlockchainFunctionEndBookedSession(props) {
    const { Moralis } = useMoralis();
  const { data, error, runContractFunction, isFetching, isLoading } =
    useWeb3Contract();

    const [caseId, setCaseId] = useState(0);

    const endBookedSession = {
        abi: MEDIATION_ABI,
        contractAddress: MEDIATION_ADDRESS,
        functionName: 'endBookedSession',
        chain: 'rinkeby',
        params: {
          // read this field from an input, use react useState hooks
          _caseId: caseId,
        },
      };

  return (
    <Functions>
      <Fname>{props.name}</Fname>
      <Label>Mediators can end a booked session and get paid.</Label>
      <form>
        <Label>Case ID</Label>
        <Input type='text' placeholder='Your Case ID..' onChange={event => setCaseId(event.target.value)} />
        <Button onClick={() => runContractFunction({ params: endBookedSession })}
              disabled={isFetching}>End booked session</Button>
      </form>
    </Functions>
  );
}

export default BlockchainFunctionEndBookedSession;
