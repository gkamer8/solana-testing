// @ts-nocheck

console.log("Inside typescript");

let connection: solanaWeb3.Connection;

let RPC_URL = 'https://api.devnet.solana.com'

async function getRpcUrl(): Promise<any> {
    return RPC_URL;
}

async function establishConnection(): Promise<void> {
    const rpcUrl = await getRpcUrl();
    connection = new solanaWeb3.Connection(rpcUrl, 'confirmed');
    const version = await connection.getVersion();
    console.log('Connection to cluster established:', rpcUrl, version);

    var el = document.getElementById('output');
    el.innerHTML = version['solana-core'];
}

establishConnection();