import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from 'recoil';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </BrowserRouter>,
  document.getElementById('root')
);

