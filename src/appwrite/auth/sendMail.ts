import { ID } from "appwrite";
import AppwriteConnect from "../account";

export default function sendMail(email:string) {
  try {
    const account = AppwriteConnect();
    account?.createMagicURLToken(
        ID.unique(),
        email,
        process.env.AUTH_URL!,
      )
      .then(() => {return true;})
      .catch(() => {return false});
    // can throw an error here instead of returning false
    return false;
  } catch (error) {
    console.log("something went wrong");
    return false;
  }
}
