
import {MEDIATION_ABI, MEDIATION_ADDRESS, MEDIATOR_ABI, MEDIATOR_ADDRESS} from "../constants/index";
import { useWeb3Contract, useMoralis } from "react-moralis";
import { Text, ErrorMessage, Container, Container2 } from "./Test.styled";
import Dashboard from '../components/Dashboard/Dashboard';
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

    const startSession = {
        abi: MEDIATION_ABI,
        contractAddress: MEDIATION_ADDRESS,
        functionName: "startSession",
        chain: "rinkeby",
        params: { // read this field from an input, use react useState hooks
            _caseId: 1
        }
    }

    const acceptPayment = {
        abi: MEDIATION_ABI,
        contractAddress: MEDIATION_ADDRESS,
        functionName: "acceptPayment",
        chain: "rinkeby",
        params: { // read this field from an input, use react useState hooks
            _caseId: 1
        }
    }

    const endSession = {
        abi: MEDIATION_ABI,
        contractAddress: MEDIATION_ADDRESS,
        functionName: "endSession",
        chain: "rinkeby",
        params: { // read this field from an input, use react useState hooks
            _caseId: 1
        }
    }

    const closeCase = {
        abi: MEDIATION_ABI,
        contractAddress: MEDIATION_ADDRESS,
        functionName: "closeCase",
        chain: "rinkeby",
        params: { // read this field from an input, use react useState hooks
            _caseId: 1
        }
    }

    return (
      <>
        <Container>
          <Container2>
            <Text>Add a new mediator</Text>
            <div>
              {/* {error && <ErrorMessage error={error} />} */}
              <button
                onClick={() => runContractFunction({ params: createMediator })}
                disabled={isFetching}>
                Create Mediator
              </button>
              {/* {data && <Text>{JSON.stringify(data)}</Text>} */}
            </div>

            <Text>Create a new case</Text>
            <div>
              {/* {error && <ErrorMessage error={error} />} */}
              <button
                onClick={() => runContractFunction({ params: createCase })}
                disabled={isFetching}>
                Create Case
              </button>
              {/* {data && <Text>{JSON.stringify(data)}</Text>} */}
            </div>

            <Text>Join case as second party</Text>
            <div>
              {/* {error && <ErrorMessage error={error} />} */}
              <button
                onClick={() =>
                  runContractFunction({ params: joinCaseAsSecondParty })
                }
                disabled={isFetching}>
                Join case as second party
              </button>
              {/* {data && <Text>{JSON.stringify(data)}</Text>} */}
            </div>

            <Text>Assign random mediator to case</Text>
            <div>
              {/* {error && <ErrorMessage error={error} />} */}
              <button
                onClick={() => runContractFunction({ params: assignMediator })}
                disabled={isFetching}>
                Assign Mediator
              </button>
              {/* {data && <Text>{JSON.stringify(data)}</Text>} */}
            </div>

            <Text>Mediator should start a session</Text>
            <div>
              {/* {error && <ErrorMessage error={error} />} */}
              <button
                onClick={() => runContractFunction({ params: startSession })}
                disabled={isFetching}>
                Start session
              </button>
              {/* {data && <Text>{JSON.stringify(data)}</Text>} */}
            </div>

            <Text>
              Parties should accept payment so mediator can end the sessiona and
              receive payment
            </Text>
            <div>
              {/* {error && <ErrorMessage error={error} />} */}
              <button
                onClick={() => runContractFunction({ params: acceptPayment })}
                disabled={isFetching}>
                Accept Payment
              </button>
              {/* {data && <Text>{JSON.stringify(data)}</Text>} */}
            </div>

            <Text>Mediator end Session and get paid</Text>
            <div>
              {/* {error && <ErrorMessage error={error} />} */}
              <button
                onClick={() => runContractFunction({ params: endSession })}
                disabled={isFetching}>
                End Session
              </button>
              {/* {data && <Text>{JSON.stringify(data)}</Text>} */}
            </div>

            <Text>
              Close a case. this will check if the number of default sessions
              were exhuasted if not pay back the parties
            </Text>
            <div>
              {/* {error && <ErrorMessage error={error} />} */}
              <button
                onClick={() => runContractFunction({ params: closeCase })}
                disabled={isFetching}>
                Close Case
              </button>
              {/* {data && <Text>{JSON.stringify(data)}</Text>} */}
            </div>
          </Container2>
          <Dashboard />
        </Container>
      </>
    );
}

export default Test