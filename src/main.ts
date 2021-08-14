// import './style.css'
import 'github-markdown-css'

import('./myskills.md').then(({ html }) => {
  const app = document.querySelector<HTMLDivElement>('#app')
  if (app) {
    app.innerHTML = `
      <div class="markdown-body">
        ${html}
      </div>
    `
  }
})
