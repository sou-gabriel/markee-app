import marked from 'marked'

import 'highlight.js/styles/github.css'

import * as S from './style'

import('highlight.js').then(hljs => {
  const highlight = hljs.default

  marked.setOptions({
    highlight: (code, language) => {
      if (language && highlight.getLanguage(language)) {
        return highlight.highlight(code, { language }).value
      }

      return highlight.highlightAuto(code).value
    },
  })
})

type TextOutputProps = {
  content: string
}

export function TextOutput (props: TextOutputProps) {
  return <S.Output dangerouslySetInnerHTML={{ __html: marked(props.content) }} />
}
