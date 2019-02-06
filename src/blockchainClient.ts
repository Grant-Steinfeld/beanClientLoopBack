
const yaml = require('js-yaml');
const { FileSystemWallet, Gateway } = require('fabric-network');
const fs = require('fs');

// A wallet stores a collection of identities for use
const wallet = new FileSystemWallet('./local_fabric/wallet');


export module BlockChainModule {

  export class BlockchainClient {
    async connectToNetwork() {

      const gateway = new Gateway();

      try {
        console.log('connecting to Fabric network...')


        const identityLabel = 'Admin@org1.example.com';
        let connectionProfile = yaml.safeLoad(fs.readFileSync('./network.yaml', 'utf8'));

        let connectionOptions = {
          identity: identityLabel,
          wallet: wallet,
          discovery: {
            asLocalhost: true
          }
        };

        // Connect to gateway using network.yaml file and our certificates in _idwallet directory
        await gateway.connect(connectionProfile, connectionOptions);

        console.log('Connected to Fabric gateway.');

        // Connect to our local fabric
        const network = await gateway.getNetwork('mychannel');

        console.log('Connected to mychannel. ');

        // Get the contract we have installed on the peer
        const contract = await network.getContract('beanVSCode');


        let networkObj = {
          contract: contract,
          network: network
        };

        return networkObj;

      } catch (error) {
        console.log(`Error processing transaction. ${error}`);
        console.log(error.stack);
      } finally {
        console.log('Done connecting to network.');
        // gateway.disconnect();
      }

    }

    async addMember(args: any) {
      //call addMember smart contract function
      //$TODO: dynamically call submitTransaction
      let response = await args.contract.submitTransaction(args.function,
          args.id, args.organization, args.address, args.memberType );
      return response;
            

    }


    async queryByKey(keyPassed: any) {

      // let str = 'query'
      // let response = await keyPassed.contract.submitTransaction('query', 'arg1', 'arg2');

      let response = await keyPassed.contract.submitTransaction('query', keyPassed.id);
      console.log('query by key response: ')
      console.log(JSON.parse(response.toString()))
      console.log(response.length)
      if (response.length === 2) {
        response = `${keyPassed.id} does not exist`;
        return response;
      }
      response = JSON.parse(response.toString());
      return response;

    }

    async submitFairTradeData(args: any) {
      console.log('args in the blockchain client')
      console.log(args)

      let response = await args.contract.submitTransaction(args.function,
        args.reportName, args.orgDescription, args.reportYear, args.fairTradePremiumInvested,
        args.investmentTitle1, args.investmentAmount1, args.investmentAmount2, args.investmentTitle2,
        args.investmentAmount3, args.investmentTitle3, args.batchId, args.transactionId, args.timestamp  );
    return response;

    }

    async submitCupping(args: any) {
      console.log('args in the blockchain client')
      console.log(args)

      let response = await args.contract.submitTransaction(args.function,
        args.cupper, args.aroma, args.flavor, args.afterTaste,
        args.acidity, args.body, args.finalScore, args.batchId,
        args.transactionId, args.timestamp );
    return response;

    }
  }
}

// "reportName": "repName",
// "organizationDescription": "descip",
// "reportYear": "2002",
// "fairtradePremiumInvested": "400$",
// "investmentTitle1": "idk1",
// "investmentAmount1": "100",
// "investmentTitle2": "idk2",
// "investmentAmount2": "200",
// "investmentTitle3": "idk3",
// "investmentAmount3": "300",
// "batchId": "batch3",
// "transactionId": "transId",
// "timestamp": "now"
