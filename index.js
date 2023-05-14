const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  #state = PENDING;
  #result = undefined

  constructor(executor) {
    const resolve = (data) => {
      this.#changeStatus(FULFILLED, data);
    };
    const reject = (reason) => {
      this.#changeStatus(REJECTED, reason);
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error)
    }
  }

  #changeStatus (state, result) {
    if (this.#state !== PENDING) return;
    this.#state = state;
    this.#result = result;
  }
}