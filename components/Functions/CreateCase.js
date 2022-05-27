import { Functions, Fname, Button, Label } from "./Functions.styled";
import {
  MEDIATION_ABI,
  MEDIATION_ADDRESS,
  MEDIATOR_ABI,
  MEDIATOR_ADDRESS,
} from '../../constants/index';
import { useWeb3Contract, useMoralis } from 'react-moralis';

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

  return (
    <Functions>
      <Fname>Create a new Case</Fname>
      <Label>When creating a case, you pay half the mediator's fee for the default number of sessions (3)</Label>
      <Button onClick={() => runContractFunction({ params: createCase })}
              disabled={isFetching}>Create Case</Button>
    </Functions>
  );
}

export default CreateCase