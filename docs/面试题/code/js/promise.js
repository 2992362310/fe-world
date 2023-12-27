


new Promise(function (resolve, reject) {
  console.log(3);
  setTimeout(function () {
    console.log(1);
    resolve('success');
  }, 1000);
}).then(function (value) {
  console.log(value);
  console.log(2);
});

/**
 * @description: 实现 Promise.all() 方法
 * @param: 
 *   - promises (Promise[]): 一个包含多个 Promise 对象的数组
 * @return: 
 *   - Promise: 返回一个新的 Promise 对象，该 Promise 对象在所有 Promise 对象的状态变为 resolved 之后变为 resolved，并且结果是一个包含所有 resolved 结果的数组。如果其中一个 Promise 对象的状态变为 rejected，则新的 Promise 对象会立即变为 rejected，并且结果是第一个被拒绝的 Promise 的错误。
 */
function promiseAll (promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let count = promises.length;

    if (count === 0) {
      resolve(results);
    }

    promises.forEach((promise, index) => {
      promise.then((value) => {
        results[index] = value;
        count--;

        if (count === 0) {
          resolve(results);
        }
      }).catch((error) => {
        reject(error);
      });
    });
  });
}

function limitRequest (urls, limit) {
  let index = 0; // 初始化请求索引为0
  const results = []; // 存储所有请求的响应结果
  const inProgress = []; // 存储当前正在进行的请求

  const executeRequest = (url) => { // 定义执行请求的函数
    const promise = fetch(url).then((response) => response.json()); // 发起请求并返回一个Promise对象
    inProgress.push(promise); // 将Promise对象添加到inProgress数组中
    const removeInProgress = () => { // 定义一个函数，用于将Promise对象从inProgress数组中删除
      const i = inProgress.indexOf(promise);
      if (i !== -1) {
        inProgress.splice(i, 1);
      }
    };
    promise.then((result) => { // 请求成功的回调函数
      removeInProgress(); // 将Promise对象从inProgress数组中删除
      results.push(result); // 将响应结果存储到results数组中
      if (index < urls.length) { // 如果还有未完成的请求，继续执行下一个请求
        executeRequest(urls[index++]);
      }
    }).catch((error) => { // 请求失败的回调函数
      removeInProgress(); // 将Promise对象从inProgress数组中删除
      console.error(error); // 打印错误信息
    });
  };

  while (index < limit && index < urls.length) { // 启动最初的一批请求
    executeRequest(urls[index++]);
  }

  return Promise.all(inProgress).then(() => results); // 等待所有请求完成，并返回results数组的Promise对象
}