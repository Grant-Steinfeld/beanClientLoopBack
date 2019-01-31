
const yaml = require('js-yaml');
const { FileSystemWallet, Gateway } = require('fabric-network');
const fs = require('fs');

// A wallet stores a collection of identities for use

const wallet = new FileSystemWallet('./local_fabric/wallet');

class BlockchainClient {

  async submitTransaction(args: any) {

    const gateway = new Gateway();

    try {


      let argsList = (Object.values(args).toString());
      console.log('args: ')
      console.log(args)
      console.log(argsList)

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

      console.log('\nSubmit a transaction :: ' + args.function);

      // let response = await contract.submitTransaction('addMember', 'horea@ibm', 'IBM2', '555 Market street', 'retailer');
      // let response = await contract.submitTransaction('addMember','horea.porutiu@ibm.com','IBM','NYC','Software Developer');
      let response = await contract.submitTransaction(args.function, args.id, args.organization, args.address, args.memberType);

      // console.log(JSON.parse(response.toString()));
      return response;

    } catch (error) {
      console.log(`Error processing transaction. ${error}`);
      console.log(error.stack);
    } finally {
      // Disconnect from the gateway
      console.log('Disconnect from Fabric gateway.');
      gateway.disconnect();
    }

  }

  async lookupTransaction(args: any) {

    const gateway = new Gateway();

    try {


      let argsList = (Object.values(args).toString());
      console.log('args: ')
      console.log(args)
      console.log(argsList)

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

      console.log('\nSubmit a transaction :: ' + args.function);

      // let response = await contract.submitTransaction('query', 'horea@ibm');

      let response = await contract.submitTransaction(args.function, args.id);

      // console.log(JSON.parse(response.toString()));
      return response;

    } catch (error) {
      console.log(`Error processing transaction. ${error}`);
      console.log(error.stack);
    } finally {
      // Disconnect from the gateway
      console.log('Disconnect from Fabric gateway.');
      gateway.disconnect();
    }

  }

  async queryByKey(keyPassed: any) {

    // A gateway defines the peers used to access Fabric networks
    const gateway = new Gateway();

    // Main try/catch block
    try {

      const identityLabel = 'Admin@org1.example.com';
      let connectionProfile = yaml.safeLoad(fs.readFileSync('./network.yaml', 'utf8'));

      let connectionOptions = {
        identity: identityLabel,
        wallet: wallet
      };

      // Connect to gateway using network.yaml file and our certificates in _idwallet directory
      await gateway.connect(connectionProfile, connectionOptions);

      console.log('Connected to Fabric gateway.');

      // Connect to our local fabric
      const network = await gateway.getNetwork('mychannel');

      const contract = await network.getContract('beanVSCode');

      console.log('\nSubmit query transaction.');

      const channel = network.getChannel();
      //set up our request - specify which chaincode, which function, and which arguments
      let request = { chaincodeId: 'beanVSCode', fcn: 'query', args: [keyPassed] };
      //query the ledger by the key in the args above
      let resultBuffer = await channel.queryByChaincode(request);

      console.log(JSON.parse(resultBuffer.toString()))

    } catch (error) {
      console.log(`Error processing transaction. ${error}`);
      console.log(error.stack);
    } finally {
      // Disconnect from the gateway
      console.log('Disconnect from Fabric gateway.');
      gateway.disconnect();
    }
  }
}

module.exports = BlockchainClient;
