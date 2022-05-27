import BlockchainFunction from "../../components/Functions/BlockchainFunc";
import BlockchainFunctionAsSecondParty from "../../components/Functions/BlockchainFunctionAsSecondParty";
import BlockchainFunctionEndSession from "../../components/Functions/BlockchainFunctionEndSession";
import BlockchainFunctionStartASession from "../../components/Functions/BlockchainFunctionStartASession";
import { Container, ContainerWrapper, Label } from "./Mediation.styled";

export default function Mediation() {
    return(
        <>
            <Container name="mediation">
                <ContainerWrapper>
                <Label><strong>MEDIATION SECTION</strong></Label>
                    <BlockchainFunctionStartASession name='Start Session' />
                    <BlockchainFunctionAsSecondParty name='Accept Payment' />
                    <BlockchainFunctionEndSession name='End Session' />
                </ContainerWrapper>
            </Container>
        </>
    )
}