有一个[Promises/A+](https://promisesaplus.com)的标准 Promise ，只要实现了这个要求，就可以称为实现了一个 promise

Promise 的实现和之前看 twisted 中的 defer 的实现很类似。可以理解成都是维护了一个回调链来实现的。

使用了

Promise 有三种状态 fulfilled, rejected, pending.
为了实现这个功能，一个很自然的想法就是保存一个内部变量 `_state` 来标注状态

首先是构造函数，看了下 Promises/A+的标准，以及其他的文章，目前没有对构造函数的统一接口定义。但一般在使用中，常见的是传入一个函数
```js
function(onResolved, onRejected){
    // call-js-api, fetch, settimeout ...
    // call resolve with data if success
    // call reject with error if fail
}
```
注意这个传入的函数是「立即执行」的，所以给他起一个 `run_right_now` 的名称
```js
const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';
function Promise(run_right_now) {
    this._status = PENDING
    this._data = undefined
    this._error = undefined
    self.onResolvedCb = []
    self.onRejectedCb = []

    function resolve(data) {
        if (self._status === PENDING) {
            self._status = RESOLVED
            self._data = data
            // TODO 为什么要对每一个的回调都传 data 这个值？
            self.onResolvedCb.forEach((func) => func(data));
        }
    }

    function reject(error) {
        if (self._status === PENDING) {
            self._status = REJECTED
            self.data = reason
            // self.
        }
    }

    // 立即执行
    try {
        run_right_now(resolve, reject)
    } catch(e) {
        reject(e)
    }
}
```



refer:
- https://github.com/xieranmaya/blog/issues/3