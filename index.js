const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  #status = PENDING;
  #result = undefined;

  constructor(executor) {
    const resolve = (data) => {
      this.#changeStatus(FULFILLED, data);
    };

    const reject = (reason) => {
      this.#changeStatus(REJECTED, reason)
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  #changeStatus (status, result) {
    if (this.#status !== PENDING) {
      return;
    }
    this.#status = status;
    this.#result = result;
  }
}

const promise = new MyPromise((resolve, reject) => {
  resolve(123);
})

console.log(promise)



