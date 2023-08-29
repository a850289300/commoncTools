// 判断是否一个字符串是否是Json格式
function isJsonString(value) {
    try {
      JSON.parse(value);
      return true;
    } catch (error) {
      return false;
    }
}

// 判断一个值是否是数组
function isArray(value) {
    return Array.isArray(value)
}

// 判断一个值是否是对象
function isObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]'
}

// 判断一个值是否是数字
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

// 判断一个值是否是非0正整数
function isPositiveInteger(value) {
    return /^[1-9]\d*$/.test(value);
}

// 判断一个值是否是大于0
function isGreaterThanZero(value) {
    return Number(value) > 0;
}

// 判断一个值是否是小于0
function isLessThanZero(value) {
    return Number(value) < 0;
}

// 快速从数组中删除指定元素
function deleteArrayElement (arr, value) {
    arr.splice(arr.indexOf(value) >>> 0, 1);
    return arr;
}



export {
    isJsonString,
    isArray,
    isObject,
    isNumber,
    isPositiveInteger,
    isGreaterThanZero,
    isLessThanZero,
    deleteArrayElement
}
