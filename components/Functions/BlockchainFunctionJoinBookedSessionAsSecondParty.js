import React, { useState } from 'react';
import { Functions, Fname, Label, Button, Input } from './Functions.styled';
import {
    MEDIATION_ABI,
    MEDIATION_ADDRESS,
    MEDIATOR_ABI,
    MEDIATOR_ADDRESS,
  } from '../../constants/index';
  import { useWeb3Contract, useMoralis } from 'react-moralis';


function BlockchainFunctionJoinBookedSessionAsSecondParty(props) {
    const { Moralis } = useMoralis();
    const { data, error, runContractFunction, isFetching, isLoading } =
      useWeb3Contract();
  
      const [caseId, setCaseId] = useState(0);

    
      const joinBookedSessionAsSecondParty = {
        abi: MEDIATION_ABI,
        contractAddress: MEDIATION_ADDRESS,
        functionName: 'joinBookedSessionAsSecondParty',
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
      <Label>When one of the two parties create a booked session, the other should join it.</Label>
      <form>
        <Label>Case ID</Label>
        <Input type='text' placeholder='Your Case ID..' onChange={event => setCaseId(event.tartget.msgValue)}/>
        <Button onClick={() =>
                runContractFunction({ params: joinBookedSessionAsSecondParty })
              }
              disabled={isFetching}>Join booked session as second party</Button>
      </form>
    </Functions>
  );
}

export default BlockchainFunctionJoinBookedSessionAsSecondParty;
