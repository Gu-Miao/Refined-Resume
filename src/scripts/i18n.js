import data from '../i18n.json'

// All languages.
const languages = ['en', 'zh']

// Current language.
export let current = 'en'

/**
 * Change current language.
 *
 * @param {string} lang Language to set which must in `languages`.
 */
export const changeLanguage = lang => {
  if (!languages.includes(lang)) throw new Error(`${lang} is not supported yet.`)

  current = lange

  document.querySelectorAll('[data-i18n]').forEach(ele => {
    const key = ele.dataset.i18n
    ele.innerHTML = data[key][lang]
  })
}
