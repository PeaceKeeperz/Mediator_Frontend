export const MEDIATOR_ABI=[
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "openCaseCount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "timeZone",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "language",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "certification",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "daoExperience",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "Mediator",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "addCaseCount",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "cMediationContract",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_timeZone",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_languages",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_certifications",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "_daoExperience",
          "type": "bool"
        }
      ],
      "name": "createMediator",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllMediators",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "isActive",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "isAvailable",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "mediationContract",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "mediators",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "openCaseCount",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "timeZone",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "Languages",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "certifications",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "daoExperience",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "minusCaseCount",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "nextMediatorId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_mediationContract",
          "type": "address"
        }
      ],
      "name": "setMediationContract",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_cMediationContract",
          "type": "address"
        }
      ],
      "name": "setcMediationContract",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
export const MEDIATOR_ADDRESS="0xF456aEa643B3836CddA504F14c5A945C356468aB"
export const MEDIATION_ABI=[
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        },
        {
          "internalType": "address",
          "name": "_mediator",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "Mediation__BookedSessionAlreadyStarted",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Mediation__BookedSessionIsStillclosed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Mediation__CannotReceivePaymentPartiesNeedToApprove",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Mediation__CaseDoesNotExistOrCaseIsClosed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Mediation__ExceededDefaultNumberOfSessions",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Mediation__FailedToRefundFundsToParty1",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Mediation__FailedToRefundFundsToParty2",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Mediation__FailedToSendPayment",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Mediation__FailedToWithdrawFunds",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Mediation__NotEnoughFundsInContract",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Mediation__OnlyMediatorCanDoThis",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Mediation__PartyDoesNotExist",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Mediation__SessionAlredyStarted",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Mediation__YouAreNotPartOfThisSession",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "have",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "want",
          "type": "address"
        }
      ],
      "name": "OnlyCoordinatorCanFulfill",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_caseId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_mediator",
          "type": "address"
        }
      ],
      "name": "AssignMediator",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_caseId",
          "type": "uint256"
        }
      ],
      "name": "BookedSessionCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_caseId",
          "type": "uint256"
        }
      ],
      "name": "JoinedBookedSession",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_caseId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address[]",
          "name": "_winner",
          "type": "address[]"
        }
      ],
      "name": "case_Completed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_caseId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "firstParty",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "secondParty",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "mediator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "tokenUri",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "caseClosed",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "caseCreatedAt",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "numberOfSession",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "sessionStarted",
          "type": "bool"
        }
      ],
      "name": "case_Created",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_caseId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_party",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "case_JoinedCase",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_caseId",
          "type": "uint256"
        }
      ],
      "name": "case_SecondPartyJoint",
      "type": "event"
    },
    {
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_caseId",
          "type": "uint256"
        }
      ],
      "name": "acceptPayment",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_caseId",
          "type": "uint256"
        }
      ],
      "name": "assignMediator",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "bookedSessions",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "caseId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "firstParty",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "secondParty",
          "type": "address"
        },
        {
          "internalType": "address payable",
          "name": "mediator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "bookedSessionClosed",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "bookedSessionStarted",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "bookedSessionCreatedAt",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "cases",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "caseId",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "firstParty",
          "type": "address"
        },
        {
          "internalType": "address payable",
          "name": "secondParty",
          "type": "address"
        },
        {
          "internalType": "address payable",
          "name": "mediator",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "tokenURI",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "caseClosed",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "caseCreatedAt",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "numberOfSession",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "sessionStarted",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_caseId",
          "type": "uint256"
        }
      ],
      "name": "closeCase",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "_firstParty",
          "type": "address"
        },
        {
          "internalType": "address payable",
          "name": "_secondParty",
          "type": "address"
        }
      ],
      "name": "companyCreateCase",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_caseId",
          "type": "uint256"
        }
      ],
      "name": "createBookedSession",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "createCase",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_caseId",
          "type": "uint256"
        }
      ],
      "name": "endBookedSession",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_caseId",
          "type": "uint256"
        }
      ],
      "name": "endSession",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_caseId",
          "type": "uint256"
        }
      ],
      "name": "endSessionWithoutPay",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "firstPartyMembers",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_caseId",
          "type": "uint256"
        }
      ],
      "name": "getFirstPartyMembers",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_caseId",
          "type": "uint256"
        }
      ],
      "name": "getSecondPartyMembers",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_caseId",
          "type": "uint256"
        }
      ],
      "name": "joinBookedSessionAsSecondParty",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_caseId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_party",
          "type": "uint256"
        }
      ],
      "name": "joinCase",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_caseId",
          "type": "uint256"
        }
      ],
      "name": "joinCaseAsSecondParty",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "nextCaseId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "paymentAccepted",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "requestId",
          "type": "uint256"
        },
        {
          "internalType": "uint256[]",
          "name": "randomWords",
          "type": "uint256[]"
        }
      ],
      "name": "rawFulfillRandomWords",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "requestCounter",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "s_requestIndexToRandomWords",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "secondPartyMembers",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "sessionStarted",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_caseId",
          "type": "uint256"
        }
      ],
      "name": "startBookedSession",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_caseId",
          "type": "uint256"
        }
      ],
      "name": "startSession",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "_address",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "withdrawToAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ]
export const MEDIATION_ADDRESS="0xB780e765f39A18cad0FBDaa989E691615D1716f5"