import { ID } from "appwrite";
import AppwriteConnect from "../account";

export default async function sendMail(email: string) {
  try {
    const account = AppwriteConnect();
    const res = await account?.createMagicURLToken(ID.unique(), email, process.env.AUTH_URL!)
    if(res){
      return true;
    }else{
      return false;
    }
    // can throw an error here instead of returning false
  } catch (error) {
    console.log("something went wrong");
    return false;
  }
}
