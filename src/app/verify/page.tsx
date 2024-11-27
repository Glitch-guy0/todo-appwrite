



export default function verificationPage(){
  return(
    <>
      <div className="text-center m-4">
        <h1 className="text-3xl font-bold text-red-500">Verification Error</h1>
          <p className="text-lg">
            The verification link is invalid or has expired. Please check your inbox for a
            verification email or try again later.
          </p>
      </div>
    </>
  )
}