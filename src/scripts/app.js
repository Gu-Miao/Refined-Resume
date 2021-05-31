import { debounce, Storage } from './utils'

if (document.body) {
  initPage()
} else {
  window.addEventListener('load', initPage)
}

// Init page
function initPage() {
  const data = Storage.get()

  Object.keys(data).forEach(id => {
    const ele = document.querySelector(`#${id}`)
    ele.value = data[id]
  })

  const form = document.querySelector('#form')

  form.addEventListener('submit', e => {
    console.log(e)
    e.preventDefault()
  })

  addCacheForInput('name')
  addCacheForInput('profile', 'change', async (e, input) => {
    const { files } = input
    try {
      const base64 = transferImgToBase64(files[0])
    } catch (e) {
      throw e
    }
  })
}

/**
 * bind a listener for form element to caching.
 *
 * @param {string} _id Id of form element.
 * @param {string} eventName Event name.
 * @param {function} listener Extra listener.
 */
function addCacheForInput(_id, eventName = 'keyup', listener) {
  const input = document.querySelector(`#${_id}`)
  const { id } = input
  input.addEventListener(
    eventName,
    debounce(e => listener(e, input) ?? (() => Storage.set(id, input.value)))
  )
}

function transferImgToBase64(imgFile) {
  return new Promise((res, rej) => {
    const reader = new FileReader()
    reader.readAsDataURL(imgFile)
    reader.onload = function (e) {
      res(reader.result)
    }
    reader.onerror = function () {
      rej(reader.error)
    }
  })
}
