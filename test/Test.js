
import {MEDIATION_ABI, MEDIATION_ADDRESS, MEDIATOR_ABI, MEDIATOR_ADDRESS} from "../constants/index";
import { useWeb3Contract, useMoralis } from "react-moralis";
import { Text, ErrorMessage } from "./Test.styled";

const Test = ({}) => {
    const {Moralis} = useMoralis();
    const { data, error, runContractFunction, isFetching, isLoading } =
    useWeb3Contract();

    const createMediator = {
        abi: MEDIATOR_ABI,
        contractAddress: MEDIATOR_ADDRESS,
        functionName: "createMediator",
        params: { //These fields will be read from a form input fields 
            _owner: "0xeECd640C401d14BFb13f1c6D6A263a077Ed1A983",
            _timeZone: "GMT + 1",
            _languages: "English",
            _certifications: "Masters in Mediationing",
            _daoExperience: true
        }
    }

    const createCase = {
        abi: MEDIATION_ABI,
        contractAddress: MEDIATION_ADDRESS,
        functionName: "createCase",
        chain: "rinkeby",
        msgValue: Moralis.Units.ETH("0.0015"),
        params: { 
        }
    }

    const joinCaseAsSecondParty = {
        abi: MEDIATION_ABI,
        contractAddress: MEDIATION_ADDRESS,
        functionName: "joinCaseAsSecondParty",
        chain: "rinkeby",
        msgValue: Moralis.Units.ETH("0.0015"),
        params: { // read this field from an input, use react useState hooks
            _caseId: 1
        }
    }

    const assignMediator = {
        abi: MEDIATION_ABI,
        contractAddress: MEDIATION_ADDRESS,
        functionName: "assignMediator",
        chain: "rinkeby",
        params: { // read this field from an input, use react useState hooks
            _caseId: 1
        }
    }

    return (
        <>
            <Text>Add a new mediator</Text>
            <div>
                {/* {error && <ErrorMessage error={error} />} */}
                <button onClick={() => runContractFunction({params: createMediator})} disabled={isFetching}>
                    Create Mediator
                </button>
                {/* {data && <Text>{JSON.stringify(data)}</Text>} */}
            </div>

            <Text>Create a new case</Text>
            <div>
                {/* {error && <ErrorMessage error={error} />} */}
                <button onClick={() => runContractFunction({params: createCase})} disabled={isFetching}>
                    Create Case
                </button>
                {/* {data && <Text>{JSON.stringify(data)}</Text>} */}
            </div>

            <Text>Join case as second party</Text>
            <div>
                {/* {error && <ErrorMessage error={error} />} */}
                <button onClick={() => runContractFunction({params: joinCaseAsSecondParty})} disabled={isFetching}>
                    Join case as second party
                </button>
                {/* {data && <Text>{JSON.stringify(data)}</Text>} */}
            </div>

            <Text>Assign random mediator to case</Text>
            <div>
                {/* {error && <ErrorMessage error={error} />} */}
                <button onClick={() => runContractFunction({params: assignMediator})} disabled={isLoading}>
                    Assign Mediator
                </button>
                {/* {data && <Text>{JSON.stringify(data)}</Text>} */}
            </div>

        </>
    )
}

export default Test