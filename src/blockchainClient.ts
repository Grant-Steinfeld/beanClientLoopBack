
const yaml = require('js-yaml');
const { FileSystemWallet, Gateway } = require('fabric-network');
const fs = require('fs');

// A wallet stores a collection of identities for use
const wallet = new FileSystemWallet('./local_fabric/wallet');
export module App {
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

    async submitTransaction(args: any) {

      let argsList = (Object.values(args).toString());
      console.log('args: ')
      console.log(args)
      console.log(argsList)

      // let response = await contract.submitTransaction('addMember','horea.porutiu@ibm.com','IBM','NYC','Software Developer');
      let response = await args.contract.submitTransaction(args.function, args.id, args.organization, args.address, args.memberType);

      return response;
    }


    async queryByKey(keyPassed: any) {

      let response = await keyPassed.contract.submitTransaction('query', keyPassed.id);
      console.log('query by key response: ')
      console.log(JSON.parse(response.toString()))
      response = JSON.parse(response.toString());
      return response;

    }
  }
}
