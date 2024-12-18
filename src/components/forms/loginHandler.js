export function loginHandler(account){
    console.log("This will call the API and pass the account object to it")
    const jsonString=JSON.stringify(account)
    console.log(jsonString)
}