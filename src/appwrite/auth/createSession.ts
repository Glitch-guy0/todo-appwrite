import AppwriteConnect from "../account";

export default function createSession(userID: string, secret: string) {
  try {
    const account = AppwriteConnect();
    account
      ?.createSession(userID, secret)
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
    // can throw an error here instead of returning false
    return false;
  } catch (err) {
    console.log("something went wrong");
    return false;
  }
}

// get the parameters and send it here
// const urlParams = new URLSearchParams(window.location.search);
