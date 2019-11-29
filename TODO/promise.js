const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

const isFunction = (f) => {typeof f === 'function'};



// 常见的使用姿势
function executor(resolve, reject) {
    doSomething(function(err, data){
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
}
var p1 = new Promise(executor)
注意这个 executor 是即刻运行的
一般

支持链式
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 1000)
})

const p = p1.then(data => {
    return 'mark1 ' + data
}).then(data => {
    return 'mark2 ' + data
})

function Promise(run_right_now) {
    this._status = PENDING
    this._val = undefined

    self.onResolvedCb = []
    self.onRejectedCb = []

    function resolve(val) {
        if (self._status !== PENDING) return;
        this._status = RESOLVED
        this._val = val

        // TODO 为什么要对每一个的回调都传 data 这个值？
        self.onResolvedCb.forEach((func) => func(val));
    }

    function reject(err) {
        if (self._status !== PENDING) return;
        this._status = REJECTED
        this._val = err

        self.onRejectedCb.forEach((func) => func(err)); 
    }

    // 立即执行
    try {
        run_right_now(resolve, reject)
    } catch(e) {
        reject(e)
    }
}

Promise.prototype.then = function(onResolved, onRejected) {
    const self = this

    if (this._status === RESOLVED) {
        return new Promise(function(resolve, reject){
            try {
                // 调用传入的 onResolved 函数
                // 注意，这儿传入的一定是 self，而不是 this 的 _data
                const ret = onResolved(self._data)
                if (ret instanceof Promise) {
                    ret.then(resolve, reject)
                }
                // TODO 为什么不在 else 中？
                // 通知
                resolve(ret)
            } catch (error) {
                reject(err)
            }
        })
    }
    if (this._status === PENDING) {
        return new Promise(function(resolve, reject){
            // 添加到回调链中
            self.onResolvedCb.push(function(d){
                try {
                    const ret = onResolved(self._data)
                    if (ret instanceof Promise) {
                        // TODO 参数为什么是这个？
                        ret.then(resolve, reject)
                    }
                } catch (error) {
                    reject(error)
                }
            })
            self.
        })
    }
}

function(resolve, reject){
    // call-js-api, fetch, settimeout ...
    // call resolve with data if success
    // call reject with error if fail
}