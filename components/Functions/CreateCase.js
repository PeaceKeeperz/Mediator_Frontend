import { Functions, Fname, Button, Label } from "./Functions.styled";
import {
  MEDIATION_ABI,
  MEDIATION_ADDRESS,
  MEDIATOR_ABI,
  MEDIATOR_ADDRESS,
} from '../../constants/index';
import { useWeb3Contract, useMoralis } from 'react-moralis';
import { useEffect, useState } from "react";

function CreateCase() {
  const { Moralis } = useMoralis();
  const { data, error, runContractFunction, isFetching, isLoading } =
    useWeb3Contract();

    const createCase = {
      abi: MEDIATION_ABI,
      contractAddress: MEDIATION_ADDRESS,
      functionName: 'createCase',
      chain: 'rinkeby',
      msgValue: Moralis.Units.ETH('0.0015'),
      params: {},
    };

    const nextCaseId = {
      abi: MEDIATION_ABI,
      contractAddress: MEDIATION_ADDRESS,
      functionName: 'nextCaseId',
      chain: 'rinkeby',
      params: {},
    };

  return (
    <>
      <Functions>
      <Fname>Create a new Case</Fname>
      <Label>When creating a case, you pay half the mediator's fee for the default number of sessions (3)</Label>
      <Button onClick={() => runContractFunction({ params: createCase })}
              disabled={isFetching}>Create Case</Button>
    </Functions>
    <Functions>
    <Fname>Show the current case number</Fname>
      <Button onClick={() => runContractFunction({ params: nextCaseId })} disabled={isFetching}>
      Show current case number</Button>
      {data && <Label>{JSON.stringify(data.toString())}</Label>}
    </Functions>
    </>
  );
}

export default CreateCase