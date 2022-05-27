import {
  Functions,
  Fname,
  Label,
  Button,
  Input,

} from './Functions.styled';
import {
  MEDIATION_ABI,
  MEDIATION_ADDRESS,
  MEDIATOR_ABI,
  MEDIATOR_ADDRESS,
} from '../../constants/index';
import { useWeb3Contract, useMoralis } from 'react-moralis';
import { useState } from 'react';

function CompanyCreateCase() {
  const { data, error, runContractFunction, isFetching, isLoading } =
    useWeb3Contract();
    const { Moralis } = useMoralis();
    
  const [firstPartyAddress, setFirstPartyAddress] = useState(null);
  const [secondPartyAddress, setSecondPartyAddress] = useState(null);

  const companyCreateCase = {
    abi: MEDIATION_ABI,
    contractAddress: MEDIATION_ADDRESS,
    functionName: 'companyCreateCase',
    chain: 'rinkeby',
    msgValue: Moralis.Units.ETH('0.006'),
    params: {
      // read this field from an input, use react useState hooks
      _firstParty: firstPartyAddress,
      _secondParty: secondPartyAddress,
    },
  };

  return (
    <Functions>
      <Fname>Company Create Case</Fname>
      <Label>a company can create a case by specifying the first and second parties addresses.</Label>
      <form>
        <Label>First Party Address</Label>
        <Input type='text' placeholder='0x0000000000000000000000000000000000000000' onChange={event => setFirstPartyAddress(event.target.value)}/>
        <Label>Second Party Address</Label>
        <Input type='text' placeholder='0x0000000000000000000000000000000000000000' onChange={event => setSecondPartyAddress(event.target.value)}/>
        <Button onClick={() => runContractFunction({ params: companyCreateCase })}
              disabled={isFetching}>Create case as a company</Button>
      </form>
    </Functions>
  );
}

export default CompanyCreateCase;
