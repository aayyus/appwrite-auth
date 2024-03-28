import { Client,Account,Databases } from "appwrite";


const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("65b926ca6c3a3f24b977")


export const account = new Account(client)

//Database

export const databases  = new Databases(client,"65bfbad73d77cdc55373");