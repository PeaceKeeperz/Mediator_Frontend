import BlockchainFunction from "../../components/Functions/BlockchainFunc";
import BlockchainFunctionAcceptPayment from "../../components/Functions/BlockchainFunctionAcceptPayment";
import BlockchainFunctionAsSecondParty from "../../components/Functions/BlockchainFunctionAsSecondParty";
import BlockchainFunctionEndSession from "../../components/Functions/BlockchainFunctionEndSession";
import BlockchainFunctionEndSessionWithoutPay from "../../components/Functions/BlockchainFunctionEndSessionWithoutPay";
import BlockchainFunctionStartASession from "../../components/Functions/BlockchainFunctionStartASession";
import { Container, ContainerWrapper, Label } from "./Mediation.styled";

export default function Mediation() {
    return(
        <>
            <Container name="mediation">
                <ContainerWrapper>
                <Label><strong>MEDIATION SECTION</strong></Label>
                    <BlockchainFunctionStartASession name='Start Session' />
                    <BlockchainFunctionAcceptPayment name='Accept Payment' />
                    <BlockchainFunctionEndSession name='End Session' />
                    <BlockchainFunctionEndSessionWithoutPay name='End Session With out Pay' />
                </ContainerWrapper>
            </Container>
        </>
    )
}