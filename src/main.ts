// import './style.css'
import 'github-markdown-css'
import './customized.css'
import u from 'umbrellajs'

/**
 * Hash값이 변경되었을 때 화면 리로드 처리
 */
window.onhashchange = () => window.location.reload()

// 강조 타입 목록
const TYPE_LIST = ['fe', 'be', 'do']
// 강조 타입
// Hash 구분자(#) 또는 쉼표로 구분된 값에서 강조할 항목을 탐색
const empTypes = (window?.location?.hash ?? '')
  .replace(/^#/, '')
  .replace(/,/g, '#')
  .split('#')
  .map((type) => ({ frontend: 'fe', backend: 'be', devops: 'do' }[type] || type.toLowerCase()))
  .filter((s) => TYPE_LIST.includes(s))

const typesExp = new RegExp(`\\{\\{(${TYPE_LIST.join('|')})\\}\\}`)

import('./myskills.md').then(({ html }) => {
  const app = document.querySelector<HTMLDivElement>('#app')
  const parsedHtml = html
    .split('\n')
    .map((str) => {
      if (typesExp.test(str)) {
        const [...types] = [...str.match(new RegExp(typesExp, 'g')) ?? []].map((type) => type.replace(typesExp, '$1'))
        const replacedStr = str.replace(new RegExp(typesExp, 'g'), '')
        if (!empTypes.length || types.some((type) => empTypes.includes(type))) {
          // 강조 해제할 값이 없으면 그대로(강조 구문만 삭제된)
          return replacedStr
        } else {
          // 강조 타입에 포함되지 않았으면 흐리게 처리(disabled-skill 클래스 추가)
          return u(replacedStr).addClass('disabled-skill').nodes[0].outerHTML
        }
      } else {
        return str
      }
    })
    .join('\n')
  if (app) {
    app.innerHTML = `
      <div class="markdown-body">
        ${parsedHtml}
      </div>
    `
  }
})
