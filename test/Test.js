import {
  MEDIATION_ABI,
  MEDIATION_ADDRESS,
  MEDIATOR_ABI,
  MEDIATOR_ADDRESS,
} from '../constants/index';
import { useWeb3Contract, useMoralis } from 'react-moralis';
import { Text, ErrorMessage, Container, Container2 } from './Test.styled';
import Dashboard from '../components/Dashboard/Dashboard';
const Test = ({}) => {
  const { Moralis } = useMoralis();
  const { data, error, runContractFunction, isFetching, isLoading } =
    useWeb3Contract();

  const createMediator = {
    abi: MEDIATOR_ABI,
    contractAddress: MEDIATOR_ADDRESS,
    functionName: 'createMediator',
    params: {
      //These fields will be read from a form input fields
      _owner: '0xeECd640C401d14BFb13f1c6D6A263a077Ed1A983',
      _timeZone: 'GMT + 1',
      _languages: 'English',
      _certifications: 'Masters in Mediationing',
      _daoExperience: true,
    },
  };

  const createCase = {
    abi: MEDIATION_ABI,
    contractAddress: MEDIATION_ADDRESS,
    functionName: 'createCase',
    chain: 'rinkeby',
    msgValue: Moralis.Units.ETH('0.0015'),
    params: {},
  };

  const joinCaseAsSecondParty = {
    abi: MEDIATION_ABI,
    contractAddress: MEDIATION_ADDRESS,
    functionName: 'joinCaseAsSecondParty',
    chain: 'rinkeby',
    msgValue: Moralis.Units.ETH('0.0015'),
    params: {
      // read this field from an input, use react useState hooks
      _caseId: 1,
    },
  };

  const assignMediator = {
    abi: MEDIATION_ABI,
    contractAddress: MEDIATION_ADDRESS,
    functionName: 'assignMediator',
    chain: 'rinkeby',
    params: {
      // read this field from an input, use react useState hooks
      _caseId: 1,
    },
  };

  const joinCase = {
    abi: MEDIATION_ABI,
    contractAddress: MEDIATION_ADDRESS,
    functionName: 'joinCase',
    chain: 'rinkeby',
    params: {
      // read this field from an input, use react useState hooks
      _caseId: 1,
      _party: 1, // it can take either 1 or 2 for the respective parties
    },
  };

  const startSession = {
    abi: MEDIATION_ABI,
    contractAddress: MEDIATION_ADDRESS,
    functionName: 'startSession',
    chain: 'rinkeby',
    params: {
      // read this field from an input, use react useState hooks
      _caseId: 1,
    },
  };

  const acceptPayment = {
    abi: MEDIATION_ABI,
    contractAddress: MEDIATION_ADDRESS,
    functionName: 'acceptPayment',
    chain: 'rinkeby',
    params: {
      // read this field from an input, use react useState hooks
      _caseId: 1,
    },
  };

  const endSession = {
    abi: MEDIATION_ABI,
    contractAddress: MEDIATION_ADDRESS,
    functionName: 'endSession',
    chain: 'rinkeby',
    params: {
      // read this field from an input, use react useState hooks
      _caseId: 1,
    },
  };

  const endSessionWithoutPay = {
    abi: MEDIATION_ABI,
    contractAddress: MEDIATION_ADDRESS,
    functionName: 'endSessionWithoutPay',
    chain: 'rinkeby',
    params: {
      // read this field from an input, use react useState hooks
      _caseId: 1,
    },
  };

  const closeCase = {
    abi: MEDIATION_ABI,
    contractAddress: MEDIATION_ADDRESS,
    functionName: 'closeCase',
    chain: 'rinkeby',
    params: {
      // read this field from an input, use react useState hooks
      _caseId: 1,
    },
  };

  const withdrawToAddress = {
    abi: MEDIATION_ABI,
    contractAddress: MEDIATION_ADDRESS,
    functionName: 'withdrawToAddress',
    chain: 'rinkeby',
    params: {
      // read this field from an input, use react useState hooks
      _address: '0x6E3A23c3DEeab3291f8Ea89ea31c8814960B8499',
      _amount: Moralis.Units.ETH('0.0000001'),
    },
  };

  const getAllMediators = {
    abi: MEDIATOR_ABI,
    contractAddress: MEDIATOR_ADDRESS,
    functionName: 'getAllMediators',
    params: {},
  };

  const getFirstPartyMembers = {
    abi: MEDIATION_ABI,
    contractAddress: MEDIATION_ADDRESS,
    functionName: 'getFirstPartyMembers',
    chain: 'rinkeby',
    params: {
      // read this field from an input, use react useState hooks
      _caseId: 1,
    },
  };

  const getSecondPartyMembers = {
    abi: MEDIATION_ABI,
    contractAddress: MEDIATION_ADDRESS,
    functionName: 'getSecondPartyMembers',
    chain: 'rinkeby',
    params: {
      // read this field from an input, use react useState hooks
      _caseId: 1,
    },
  };

  const createBookedSession = {
    abi: MEDIATION_ABI,
    contractAddress: MEDIATION_ADDRESS,
    functionName: 'createBookedSession',
    chain: 'rinkeby',
    msgValue: Moralis.Units.ETH('0.0005'),
    params: {
      // read this field from an input, use react useState hooks
      _caseId: 1,
    },
  };

  const joinBookedSessionAsSecondParty = {
    abi: MEDIATION_ABI,
    contractAddress: MEDIATION_ADDRESS,
    functionName: 'joinBookedSessionAsSecondParty',
    chain: 'rinkeby',
    msgValue: Moralis.Units.ETH('0.0005'),
    params: {
      // read this field from an input, use react useState hooks
      _caseId: 1,
    },
  };

  const startBookedSession = {
    abi: MEDIATION_ABI,
    contractAddress: MEDIATION_ADDRESS,
    functionName: 'startBookedSession',
    chain: 'rinkeby',
    params: {
      // read this field from an input, use react useState hooks
      _caseId: 1,
    },
  };

  const endBookedSession = {
    abi: MEDIATION_ABI,
    contractAddress: MEDIATION_ADDRESS,
    functionName: 'endBookedSession',
    chain: 'rinkeby',
    params: {
      // read this field from an input, use react useState hooks
      _caseId: 1,
    },
  };

  const companyCreateCase = {
    abi: MEDIATION_ABI,
    contractAddress: MEDIATION_ADDRESS,
    functionName: 'companyCreateCase',
    chain: 'rinkeby',
    msgValue: Moralis.Units.ETH('0.006'),
    params: {
      // read this field from an input, use react useState hooks
      _firstParty: '0x8BEcEEB3f7dc843307BB842bD97975644D5C4ad6',
      _secondParty: '0x79A44d9c6d04F397ad752dFc8e0590f66d9a9ebc',
    },
  };

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
    <>
          <Container>
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

        <Text>Join case as either for party 1 or party 2</Text>
        <div>
          {/* {error && <ErrorMessage error={error} />} */}
          <button
            onClick={() => runContractFunction({ params: joinCase })}
            disabled={isFetching}>
            Join Case
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

        <Text>Mediator end Session without getting paid</Text>
        <div>
          {/* {error && <ErrorMessage error={error} />} */}
          <button
            onClick={() =>
              runContractFunction({ params: endSessionWithoutPay })
            }
            disabled={isFetching}>
            End Session without Pay
          </button>
          {/* {data && <Text>{JSON.stringify(data)}</Text>} */}
        </div>

        <Text>
          Close a case. this will check if the number of default sessions were
          exhuasted if not pay back the parties
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

        <Text>Withdraw 0.0000001 Eth to an address</Text>
        <div>
          {/* {error && <ErrorMessage error={error} />} */}
          <button
            onClick={() => runContractFunction({ params: withdrawToAddress })}
            disabled={isFetching}>
            Withdraw to specified address
          </button>
          {/* {data && <Text>{JSON.stringify(data)}</Text>} */}
        </div>

        <Text>Get all Mediators</Text>
        <div>
          {/* {error && <ErrorMessage error={error} />} */}
          <button
            onClick={() => runContractFunction({ params: getAllMediators })}
            disabled={isFetching}>
            Get mediators
          </button>
          {data && <Text>{JSON.stringify(data)}</Text>}
        </div>

        <Text>Get all first party members</Text>
        <div>
          {/* {error && <ErrorMessage error={error} />} */}
          <button
            onClick={() =>
              runContractFunction({ params: getFirstPartyMembers })
            }
            disabled={isFetching}>
            Show First Party Members
          </button>
          {data && <Text>{JSON.stringify(data)}</Text>}
        </div>

        <Text>Get all second party members</Text>
        <div>
          {/* {error && <ErrorMessage error={error} />} */}
          <button
            onClick={() =>
              runContractFunction({ params: getSecondPartyMembers })
            }
            disabled={isFetching}>
            Show Second Party Members
          </button>
          {data && <Text>{JSON.stringify(data)}</Text>}
        </div>

        <Text>Book a session</Text>
        <div>
          {/* {error && <ErrorMessage error={error} />} */}
          <button
            onClick={() => runContractFunction({ params: createBookedSession })}
            disabled={isFetching}>
            Book a Session
          </button>
        </div>

        <Text>Join a Booked a session</Text>
        <div>
          {/* {error && <ErrorMessage error={error} />} */}
          <button
            onClick={() =>
              runContractFunction({ params: joinBookedSessionAsSecondParty })
            }
            disabled={isFetching}>
            Join booked session
          </button>
        </div>

        <Text>Start a Booked a session</Text>
        <div>
          {/* {error && <ErrorMessage error={error} />} */}
          <button
            onClick={() => runContractFunction({ params: startBookedSession })}
            disabled={isFetching}>
            Start booked session
          </button>
        </div>

        <Text>End a Booked a session</Text>
        <div>
          {/* {error && <ErrorMessage error={error} />} */}
          <button
            onClick={() => runContractFunction({ params: endBookedSession })}
            disabled={isFetching}>
            End booked session
          </button>
        </div>

        <Text>
          Create a new case as a company or organization, provinding the
          addresses of the two parties and paying the full fee
        </Text>
        <div>
          {/* {error && <ErrorMessage error={error} />} */}
          <button
            onClick={() => runContractFunction({ params: companyCreateCase })}
            disabled={isFetching}>
            Create case as a company
          </button>
        </div>

        <Text>
          Create a new booked session as a company or organization, provinding
          the caseId and paying the full fee
        </Text>
        <div>
          {/* {error && <ErrorMessage error={error} />} */}
          <button
            onClick={() =>
              runContractFunction({ params: companyCreateBookedSession })
            }
            disabled={isFetching}>
            Create case as a company
          </button>
        </div>
          </Container>
        <Dashboard />
    </>
  );
};

export default Test;
