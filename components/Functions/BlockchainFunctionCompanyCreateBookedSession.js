import React, { useState } from 'react';
import { Functions, Fname, Label, Button, Input } from './Functions.styled';
import {
    MEDIATION_ABI,
    MEDIATION_ADDRESS,
    MEDIATOR_ABI,
    MEDIATOR_ADDRESS,
  } from '../../constants/index';
  import { useWeb3Contract, useMoralis } from 'react-moralis';

function BlockchainFunctionCompanyCreateBookedSession(props) {
    const { Moralis } = useMoralis();
  const { data, error, runContractFunction, isFetching, isLoading } =
    useWeb3Contract();

    const [caseId, setCaseId] = useState(0);

    const companyCreateBookedSession = {
        abi: MEDIATION_ABI,
        contractAddress: MEDIATION_ADDRESS,
        functionName: 'companyCreateBookedSession',
        chain: 'rinkeby',
        msgValue: Moralis.Units.ETH('0.002'),
        params: {
          // read this field from an input, use react useState hooks
          _caseId: 1,
        },
      };

  return (
    <Functions>
      <Fname>{props.name}</Fname>
      <Label>If a company created a case, then they can book extra sessions for that case</Label>
      <form>
        <Label>Case ID</Label>
        <Input type='text' placeholder='Your Case ID..'  onChange={event => setCaseId(event.target.value)}/>
        <Button onClick={() =>
                runContractFunction({ params: companyCreateBookedSession })
              }
              disabled={isFetching}>Company Book a session</Button>
      </form>
    </Functions>
  );
}

export default BlockchainFunctionCompanyCreateBookedSession;
