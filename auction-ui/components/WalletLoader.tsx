import { ReactNode, useEffect, useState } from 'react'
import { useSigningClient } from 'contexts/cosmwasm'
import { Registry, TsProtoGeneratedType } from '@cosmjs/proto-signing';
import Loader from './Loader'
import axios from 'axios'
import { GasPrice, SigningStargateClient, coins } from '@cosmjs/stargate';
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx"
import { AuctionSigningStargateClient } from './Client';
import Long from 'long';
import { Auction } from './Auction';

function WalletLoader({
  children,
  loading = false,
}: {
  children: ReactNode
  loading?: boolean
}) {
  const {
    walletAddress,
    loading: clientLoading,
    error,
    connectWallet,
  } = useSigningClient()

  const [auctions, setAuctions] = useState([]);
  const [bidList, setBidList] = useState([]);
  const [minimumBid, setMinimumBid] = useState(100)
  const [duration, setDuration] = useState(3600)
  
  useEffect(() => {
    getAuctions();
  }, [])

  async function getAuctions() {
    await axios.get(`${process.env.NEXT_PUBLIC_CHAIN_REST_ENDPOINT}/car-auction/carauction/stored_auction`).then(async (response) => {
      if(response.data.storedAuction.length > 0) {
        setAuctions(response.data.storedAuction);
      }
    })
    await axios.get(`${process.env.NEXT_PUBLIC_CHAIN_REST_ENDPOINT}/car-auction/carauction/stored_bid`).then(async (response) => {
      if(response.data.storedBid.length > 0) {
        setBidList(response.data.storedBid);
      }
    })
  }

  async function getClient() {
    const offlineSigner = await (window as any).getOfflineSigner(process.env.NEXT_PUBLIC_CHAIN_ID)
    const client = await AuctionSigningStargateClient.connectWithSigner(
      process.env.NEXT_PUBLIC_CHAIN_RPC_ENDPOINT as string,
      offlineSigner,
      {
        gasPrice: GasPrice.fromString("0stake"),
      },
    );
    return client
  }

  const createAuction = async () => {
    try {
      const client = await getClient();
      const result = await client.createAuction(walletAddress, minimumBid, duration, {
        amount: coins(1000, "stake"),
        gas: "100000"
      });
      if(result.code == 0) {
        alert("Create Auction success");
        getAuctions();
      }
    } catch (error) {
      console.error('Error Broadcasting Transaction:', error);
    }
  }

  const handleBidClickParent = async (bidAmount: number, auctionIndex: string) => {
    try {
      const client = await getClient();
      const result = await client.bidAuction(walletAddress, auctionIndex, bidAmount, {
        amount: coins(1000, "stake"),
        gas: "100000"
      });
      if(result.code == 0) {
        alert("Bid Success");
        getAuctions();
      } else {
        alert(JSON.stringify(result.rawLog));
      }
    } catch (error) {
      console.error('Error Broadcasting Transaction:', error);
    }
  };

  const handleCancelBidClickParent = async (auctionIndex: string) => {
    try {
      const client = await getClient();
      const result = await client.cancelBid(walletAddress, auctionIndex, {
        amount: coins(1000, "stake"),
        gas: "100000"
      });
      if(result.code == 0) {
        alert("Cancel Success");
        getAuctions();
      } else {
        alert(JSON.stringify(result.rawLog));
      }
    } catch (error) {
      console.error('Error Broadcasting Transaction:', error);
    }
  }
  

  if (loading || clientLoading) {
    return (
      <div className="flex justify-center">
        <Loader />
      </div>
    )
  }
  if (error) {
    return <code>{JSON.stringify(error)}</code>
  }
  return (
    <div className="w-full">
      <h1 className="text-6xl font-bold">
        Welcome to Car Auction
      </h1>
      {
        walletAddress ?
        <div className="flex text-right space-x-6 pt-6">
          <input
              type="number"
              className="input input-bordered focus:input-primary input-lg w-full rounded-full text-lg "
              placeholder="Minimum Bid"
              onChange={(event) => setMinimumBid(parseInt(event.target.value))}
              value={minimumBid}
          />
          <input
              type="number"
              className="input input-bordered focus:input-primary input-lg w-full rounded-full text-lg "
              placeholder="Duration"
              onChange={(event) => setDuration(parseInt(event.target.value))}
              value={duration}
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={createAuction}>
            Create Auction
          </button>
        </div>
        :
        null
      }
      
      <div className='flex flex-wrap'>
        {
          auctions.map((item,index) => {
            return <Auction auction={item} bidList={bidList} wallet={walletAddress} key={index} onBidClick={handleBidClickParent} onCancelBidClick={handleCancelBidClickParent} />
          })
        }
      </div>
      {children}
    </div>
  )
}

export default WalletLoader
