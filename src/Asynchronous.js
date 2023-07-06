function PromiseInJs() {
    let promise = new Promise(function(resolve, reject) {
        // executor the producing code, singer

        // console.log("Resolving....");
        // setTimeout(() => resolve(console.log("done")), 3000);
        // state changes from 'pending' to 'fulfilled', and result = done after 3 seconds of processing

        // console.log("Rejecting...")
        // setTimeout(() => reject(new Error(console.log("Oops!"))), 3000);
        // state changes from 'pending' to 'rejected' state and result = error

        // all further calls of resolve and reject are ignored
        // there can only be one one result or one error

        // the executor should perfom a job and then call resolve or reject to change the state of the corresponding promise object




        // consumer function : .then, .catch 

        // let promise = new Promise(function(resolve, reject ) {
        //     setTimeout(() => reject('OOPS!'), 3000);
        // })

        // promise.then(
        //     result => alert(result), 
        //     error => alert(error)
        // )

        let promise = new Promise(function(resolve, reject){
            setTimeout(() => reject("Oops!"), 3000);

            promise.catch(
                alert
            );
            // .catch(f) is the same as promise.then(null, f);

            promise.finally(
                alert('test')
            )
        })
        // a finally handler doesnt get the outcome of the previous handler, this outcome is passed through it instead, to the next stuitable handler
        // if a finally returns something, it gets ignored
    });
}

export default function Asynchronous() {
    return (
        <div>
            <PromiseInJs/>
        </div>
    );
}