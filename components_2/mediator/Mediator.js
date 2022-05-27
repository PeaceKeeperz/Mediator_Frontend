import React from 'react';
import { Button, Container, ContainerWrapper, Fname, Functions, Input, Label } from "./Mediator.styled";
import {
    MEDIATION_ABI,
    MEDIATION_ADDRESS,
    MEDIATOR_ABI,
    MEDIATOR_ADDRESS,
  } from '../../constants/index';
  import { useWeb3Contract, useMoralis } from 'react-moralis';
import { useState } from "react";

export default function Mediator() {
    const { Moralis } = useMoralis();
  const { data, error, runContractFunction, isFetching, isLoading } =
    useWeb3Contract();

    const [medaitorsAddress, setMediatorsAddress] = useState(null);
    const [timeZone, setTimeZone] = useState(null);
    const [language, setLanguage] = useState(null);
    const [certification, setCertification] = useState(null);
    const [daoExperience, setDaoExperience] = useState(false);

    const createMediator = {
        abi: MEDIATOR_ABI,
        contractAddress: MEDIATOR_ADDRESS,
        functionName: 'createMediator',
        params: {
          _owner: medaitorsAddress,
          _timeZone: timeZone,
          _languages: language,
          _certifications: certification,
        //   _daoExperience: {daoExperience},
        _daoExperience: true,
        },
      };


      const getAllMediators = {
        abi: MEDIATOR_ABI,
        contractAddress: MEDIATOR_ADDRESS,
        functionName: 'getAllMediators',
        params: {},
      };

    return (
        <Container name="mediator">
            <ContainerWrapper>
                <Label><strong>MEDIATOR SECTION</strong></Label>
                <Functions>
                    <Label>Do you want to become a Mediator ?</Label>
                    <br />
                    <Label>Only a PeaceKeepers admin can create a mediator. 
                    Aspiring mediators have to go through testing and submit their information.</Label>
                </Functions>
                <Functions>
                    <Label><strong>For now, we will just go ahead and create mediators without the above testing process.</strong></Label>
                </Functions>
                <Functions>
                    <Fname>Creating a mediator</Fname>
                    <form>
                        <Label>Mediator's Address</Label>
                        <Input type='text' placeholder='e.g 0x0000000000000000000000000000000000000000' 
                        onChange={event => setMediatorsAddress(event.target.value)} />
                        <Label>Mediator's Time Zone</Label>
                        <Input type='text' placeholder='e.g GMT+1' 
                        onChange={event => setTimeZone(event.target.value)} />
                        <Label>Mediator's Language</Label>
                        <Input type='text' placeholder='e.g English' 
                        onChange={event => setLanguage(event.target.value)} />
                        <Label>Mediator's Certification </Label>
                        <Input type='text' placeholder='e.g Masters in ...' 
                        onChange={event => setCertification(event.target.value)} />
                        <Label>Has DAO Experience ?</Label>
                        <Input type='text' placeholder='e.g true or false' 
                        onChange={event => setDaoExperience(event.target.value)} />
                        <Button onClick={() => runContractFunction({ params: createMediator })} disabled={isFetching}>
                    Create Mediator</Button>
                    </form>
                </Functions>
                
                <Functions>
                    <Fname>Show all mediator Addresses</Fname>
                    <Button onClick={() => runContractFunction({ params: getAllMediators })} disabled={isFetching}>
                    Show Mediators</Button>
                    {data && <Label>{JSON.stringify(data)}</Label>}
                </Functions>
            </ContainerWrapper>
        </Container>
    )
}