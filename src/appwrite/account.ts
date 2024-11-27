import { Client, Account } from "appwrite";

/**
 * Connects to Appwrite server using the project ID stored in the environment
 * variable `PROJECT_ID`. Returns an instance of the `Account` class if the
 * connection is successful, or `null` if the connection fails.
 * @returns {Account | null} An instance of the `Account` class if the connection
 * is successful, or `null` if the connection fails.
 */
export default function AppwriteConnect(){
  try{
    const client = new Client()
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject(process.env.PROJECT_ID!); 
    const account = new Account(client);
    return account;
  } catch (error) {
    console.log("something went wrong");
    return null;
  }
}