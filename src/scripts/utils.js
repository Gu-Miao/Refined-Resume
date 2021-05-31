export class Storage {
  /**
   * Get data from stroage.
   * @param {undefined|string|array} name Query criteria.
   * @returns {*} Data matched.
   */
  static get(name) {
    // If name is undefined, then get all the data in storage.
    if (isUndefined(name)) {
      const names = []
      Object.keys(localStorage).forEach(name => names.push(name))

      return Storage.get(names)
    }

    // If name is an array, then get data whose key is in array.
    else if (isArray(name)) {
      const res = {}
      name.forEach(name => {
        if (name in localStorage) {
          res[name] = JSON.parse(localStorage.getItem(name))
        }
      })
      return res
    }

    // If name is a string, then return its value.
    else if (isString(name)) {
      if (!(name in localStorage)) return undefined
      return JSON.parse(localStorage.getItem(name))
    }

    // If arugments is illegal, throw an error.
    else {
      throw new Error('Name muse be a string, arrary or undefined.')
    }
  }

  /**
   * Set data in stroage.
   *
   * @param {string|object} name Key of a group of data or a data map.
   * @param {*} value Value of data.
   */
  static set(name, value) {
    // Set data by name and value.
    if (isString(name)) {
      localStorage.setItem(name, JSON.stringify(value))
    }

    // If name is a plain object, then get all the key in it and set
    // data in storage. You show notice that the data will be rewrite,
    // if the storage already had the same key.
    else if (isPlainObject(name)) {
      Object.keys(name).forEach(i => {
        Storage.set(i, name[i])
      })
    }

    // If arugments is illegal, throw an error.
    else {
      throw new Error('Name muse be a string, or a plain object.')
    }
  }

  /**
   * Remove data from storage.
   *
   * @param {string} name key of the data that you want to delete.
   */
  static remove(name) {
    if (!isString(name)) {
      throw new Error('Name must be a string.')
    }
    localStorage.removeItem(name)
  }
}
/**
 * Checks if value is classified as a `String` primitive or object.
 *
 * @param {*} v The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 */
export function isString(v) {
  const type = typeof v
  return (
    type === 'string' ||
    (type === 'object' &&
      v != null &&
      !Array.isArray(v) &&
      Object.prototype.toString.call(v) == '[object String]')
  )
}

/**
 * Checks if value is a plain object.
 *
 * @param {*} v The value to check.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
export function isPlainObject(v) {
  if (typeof v !== 'object' || v === null) return false

  let proto = v
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }

  return Object.getPrototypeOf(v) === proto
}

/**
 * Check if a value is undefined.
 *
 * @param {*} v The value to check.
 * @returns {boolean} True if the argument is undefined.
 */
export function isUndefined(v) {
  return undefined === v
}

/**
 * Check if a value is an array.
 *
 * @param {*} v The value to check.
 * @returns {boolean} True if the argument is an array.
 */
export function isArray(v) {
  return Array.isArray(v)
}

/**
 * Check if a value is a function.
 *
 * @param {*} v The value to check.
 * @returns {boolean} True if the argument is a function.
 */
export function isFunction(v) {
  return typeof v === 'function'
}

/**
 * Debounce fn.
 *
 * @param {function} fun Fn need to call.
 * @param {number} delay Delay to exec.
 * @returns {function} Debounced fn.
 */
export function debounce(fun, delay) {
  let timer = null
  return function (args) {
    let that = this
    let _args = args

    clearTimeout(timer)

    timer = setTimeout(function () {
      fun.call(that, _args)
    }, delay)
  }
}
