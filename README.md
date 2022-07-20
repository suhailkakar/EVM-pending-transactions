
<div id="top"></div>

<br />
<div align="center">

<h1 align="center">Pending EVM Transactions</h3>

</div>

### About The Project

[![Demo][product-screenshot]](https://twitter.com/suhailkakar)

A next js app that retrieves pending transactions from the EVM mempool and displays them in tabular format.

### Built With

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Ethers.js](https://docs.ethers.io/v5/)


<!-- GETTING STARTED -->

### Getting Started

To get this application up and and running on your local machine follow these simple steps.

### Prerequisites

You need to have Node.js, and NPM installed on your computer, before running this project.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/suhailkakar/EVM-pending-transactions
   ```
2. Install NPM packages

   ```sh
   npm install
   ```

   or

   ```sh
   yarn install
   ```

3. create a file named `.env.local` 
4. Add the following code inside  of  `.env.local` file
   ```sh
	# Polygon Node (WSS)
	
    POLYGON_NODE_URL=YOUR_POLYGON_NODE
   ```
5. Replace `YOUR_POLYGON_NODE` with a live Polygon node (You can get one from [Chainstack](https://chainstack.com/build-better-with-polygon/))
9. Run the app

   ```sh
   yarn dev
   ```
   



### Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue.
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### License

This project is an open source software licensed under the MIT License.

[product-screenshot]: https://github.com/suhailkakar/EVM-pending-transactions/blob/main/demo.gif
