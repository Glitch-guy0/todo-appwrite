
import { Client, Account } from "appwrite";

export default function AppwriteConnect(){
  try{
    const client = new Client()
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject(process.env.NEXT_PUBLIC_PROJECT_ID!); 
    const account = new Account(client);
    return account;
  } catch (error) {
    console.log("something went wrong");
    return null;
  }
}