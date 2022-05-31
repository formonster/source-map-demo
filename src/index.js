import axios from 'axios'
import { testError } from './utils'

window.onerror = (message, scriptURI, lineNo, columnNo, error) => {
  axios.post('http://localhost:3000/sourceMap', {
    scriptURI,
    lineNo,
    columnNo
  })
}

testError();
