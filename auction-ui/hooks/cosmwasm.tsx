import { useState } from 'react'
import { connectKeplr } from 'services/keplr'
import { GasPrice } from '@cosmjs/stargate'
// import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

export interface ISigningCosmWasmClientContext {
  walletAddress: string
  // signingClient: SigningCosmWasmClient | null
  loading: boolean
  error: any
  connectWallet: any
  disconnect: Function
}

const PUBLIC_RPC_ENDPOINT = process.env.NEXT_PUBLIC_CHAIN_RPC_ENDPOINT || ''
const PUBLIC_CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID
const GAS_PRICE = process.env.NEXT_PUBLIC_GAS_PRICE as string

export const useSigningCosmWasmClient = (): ISigningCosmWasmClientContext => {
  const [walletAddress, setWalletAddress] = useState('')
  // const [signingClient, setSigningClient] =
  //   useState<SigningCosmWasmClient | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const connectWallet = async () => {
    setLoading(true)

    try {
      await connectKeplr()

      // enable website to access kepler
      await (window as any).keplr.enable(PUBLIC_CHAIN_ID)

      // get offline signer for signing txs
      const offlineSigner = await (window as any).getOfflineSigner(
        PUBLIC_CHAIN_ID
      )
      // make client
      // const client = await SigningCosmWasmClient.connectWithSigner(
      //   PUBLIC_RPC_ENDPOINT,
      //   offlineSigner,
      //   {
      //     gasPrice: GasPrice.fromString(GAS_PRICE),
      //   }
      // )
      // setSigningClient(client)

      // get user address
      const [{ address }] = await offlineSigner.getAccounts()
      setWalletAddress(address)

      setLoading(false)
    } catch (error) {
      setError(JSON.stringify(error))
    }
  }

  const disconnect = () => {
    // if (signingClient) {
    //   signingClient.disconnect()
    // }
    setWalletAddress('')
    // setSigningClient(null)
    setLoading(false)
  }

  return {
    walletAddress,
    // signingClient,
    loading,
    error,
    connectWallet,
    disconnect,
  }
}
