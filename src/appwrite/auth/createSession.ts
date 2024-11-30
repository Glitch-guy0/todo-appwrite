import AppwriteConnect from "../account";

export default async function createSession(userID: string, secret: string) {
  try {
    const account = AppwriteConnect();
    const response = await account?.createSession(userID, secret);
    if (response) {
      console.log(await response);
      return true;
    }
  } catch (err) {
    console.log("something went wrong");
    return false;
  }
}
