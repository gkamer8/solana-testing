import * as web3 from './solana';

console.log("Inside typescript")

let connection: web3.Connection;

let RPC_URL = 'https://api.devnet.solana.com'

export async function getRpcUrl(): Promise<any> {
    return RPC_URL;
}

export async function establishConnection(): Promise<void> {
    const rpcUrl = await getRpcUrl();
    connection = new web3.Connection(rpcUrl, 'confirmed');
    const version = await connection.getVersion();
    console.log('Connection to cluster established:', rpcUrl, version);
}