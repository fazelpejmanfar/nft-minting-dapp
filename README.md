# Welcome to HashLips 👄

![](https://github.com/HashLips/nft_minting_dapp/blob/main/logo.png)

All the code in these repos was created and explained by HashLips on the main YouTube channel.

Edited By Fazel Pejmanfar and compatible with ERC721A

To find out more please visit:

[📺 YouTube](https://www.youtube.com/channel/UC1LV4_VQGBJHTJjEWUmy8nA)

[👄 Hashlips Discord](https://discord.com/invite/qh6MWhMJDN) (You Can Find Me in Hashlips Server)


# HashLips NFT minting dapp (Edits By FazelPejmanfar)🔥

![](https://github.com/fazelpejmanfar/nft-minting-dapp/blob/master/banner.png)

This repo provides a nice and easy way for linking an existing NFT smart contract to this minting dapp. There are two ways of using this repo, you can go the simple route or the more complex one.

The simple route is so simple, all you need to do is download the build folder on the release page and change the configuration to fit your needs. (Follow the video for a walk through).

The more complex route allows you to add additional functionality if you are comfortable with coding in react.js. (Follow the below instructions for a walk through).

## Changes 🛠️

<b> Fixed the BigNumber Issue</b> <br>
<b> Added Social icons</b> <br>
<b> Added Story</b> <br>
<b> Added FAQ</b> <br>
<b> Added Auto Network Switch</b> <br>
 Will be adding Merkle Tree whitelit soon...

## Installation 🛠️

If you are cloning the project then run this first, otherwise you can download the source code on the release page and skip this step.

```sh
git clone https://github.com/fazelpejmanfar/nft-minting-dapp.git
```

Make sure you have node.js installed so you can use npm, then run:

```sh
npm install
```

to run development Server

```sh
npm run start
```

to Build the File

```sh
npm run build
```

## Usage ℹ️

In order to make use of this dapp, all you need to do is change the configurations to point to your smart contract as well as update the images and theme file.

For the most part all the changes will be in the `public` folder.

To link up your existing smart contract, go to the `public/config/config.json` file and update the following fields to fit your smart contract, network and marketplace details. The cost should be in Ether.

Note: this dapp is designed to work with the intended NFT smart contract, that only takes one parameter in the mint function "tokens". But you can change that in the App.js file if you need to use a smart contract that takes 2 params.

Change your Social url in `public/config/config.json` <br>
<b> Price Should be in Ether </b> <br>
to edit story and faq q/a edit `src/App.js` <br>
to change Carousel Images for SneakPeak Replace images in `public/config/images`  <br>
```json
{
  "CONTRACT_ADDRESS": "0x62078f64B75F25B986eC53966f59485C2F9844D1", 
  "SCAN_LINK": "https://etherscan.io/address/0x62078f64B75F25B986eC53966f59485C2F9844D1",
  "NETWORK": {
    "NAME": "Rinkeby",
    "SYMBOL": "ETH",
    "ID": 4
  },
  "NFT_NAME": "Hashlips", 
  "SYMBOL": "Hashlips",
  "MAX_SUPPLY": 3333,
  "DISPLAY_COST": 0.0025,
  "GAS_LIMIT": 145000, 
  "MAX_PER_TX": 10,  
  "MARKETPLACE": "Opeansea",
  "MARKETPLACE_LINK": "https://opensea.io/collection/",
  "Telegram": "https://",
  "Discord": "https://",
  "Twitter": "https://",
  "SHOW_BACKGROUND": false
}

```

Make sure you copy the contract ABI from remix and paste it in the `public/config/abi.json` file.
(follow the youtube video if you struggle with this part).

Now you will need to create and change images in the `public/config/images` folder.

Next change the theme colors to your liking in the `public/config/theme.css` file.

```css
:root {
  --primary: #ebc908;
  --primary-text: #1a1a1a;
  --secondary: #ff1dec;
  --secondary-text: #ffffff;
  --accent: #ffffff;
  --accent-text: #000000;
}
```

Now you will need to create and change the Favicons in `public/images` to your brand images.

Remember to update the title and description the `public/index.html` file

```html
<title>Hashlips</title>
<meta name="description" content="Mint your Nerdy Hashlips" />
```

Also remember to update the short_name and name fields in the `public/manifest.json` file

```json
{
  "short_name": "Hashlips",
  "name": "Hashlips"
}
```

After all the changes you can run.

```sh
npm run start
```

Or create the build if you are ready to deploy.

```sh
npm run build
```

Now you can host the contents of the build folder on a server.

That's it! you're done.
