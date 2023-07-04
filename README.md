# DeCharge

This is an application for a decentralized co-charging station. It allows users to interact with a smart contract deployed on a blockchain network to manage co-charging services.

## Getting Started

To get started with the application, follow the steps below:

### Prerequisites

- Node.js (version 10.0.0 or higher)
- npm (version 1.0.0 or higher)

### Installation

1. Clone the repository to your local machine using the following command:
   ```
   git clone <https://github.com/ritik2358/DeCharge>
   ```

2. Navigate to the `Frontend` directory:
   ```
   cd Frontend
   ```

3. Install the required dependencies by running the following command:
   ```
   npm install
   ```

4. Navigate to the `Backend` directory:
   ```
   cd ../Backend
   ```

5. Install the required dependencies by running the following command:
   ```
   npm install
   ```

### Starting the Application

To start the application, follow the steps below:

1. Open a terminal and run the following command to start a local blockchain node:
   ```
   npx hardhat node
   ```
   This will start a local blockchain network that you can use for testing and development purposes.

2. Open a new terminal window and navigate to the `Backend` directory:
   ```
   cd Backend
   ```

3. Run the following command to deploy the smart contract to the local blockchain network:
   ```
   npx hardhat run --network localhost scripts/deploy.js
   ```
   Copy the ABI file and contract address displayed in the console. You will need these values in the next step.

4. Replace the placeholder ABI file and contract address in the `Frontend` directory:
   - Navigate to the `Frontend` directory:
     ```
     cd ../Frontend
     ```
   - Open the relevant file(s) where you need to replace the values (e.g., `config.js`, `app.js`) and update them with the copied values.

5. Finally, start the frontend application by running the following command:
   ```
   npm start
   ```
   The application will start running, and you can access it through your web browser.

## Contributing

Contributions are welcome! If you want to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit your changes
5. Push the branch to your forked repository
6. Open a pull request with a detailed description of your changes

Please ensure your code follows the existing coding style and conventions.

### Libraries and Frameworks Used

- **ReactJS**: ReactJS is a JavaScript library used for building user interfaces in web applications. It allows developers to create reusable UI components and efficiently manage the state of the application, resulting in fast and interactive user experiences.

- **EthersJS**: EthersJS is a powerful JavaScript library that provides a simple and intuitive interface for interacting with the Ethereum blockchain. It enables developers to send transactions, read data, and interact with smart contracts using the Ethereum network.

- **Solidity**: Solidity is a high-level programming language specifically designed for writing smart contracts on the Ethereum platform. It provides a syntax similar to JavaScript and enables developers to define the behavior of decentralized applications and smart contracts.

- **Hardhat**: Hardhat is a development environment and task runner specifically built for Ethereum development. It offers a range of features such as compiling, testing, and deploying smart contracts, as well as debugging and integration with other tools for building decentralized applications.
<br>
Feel free to modify and expand this README as needed for your specific project. Remember to include any additional sections, such as a project overview, features, usage examples, or troubleshooting, to make it more informative and user-friendly.
