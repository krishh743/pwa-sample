
// function serviceWorkerRegistration(){
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register("/sw.js")
  .then(()=>{
console.log("serviceWorker registered successfully")
  }).catch(()=>{
console.log("serviceWorker failed to register successfully")
  })
  console.log("serviceWorker.js registered successfully ");
}
// }



