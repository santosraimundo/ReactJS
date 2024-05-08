import ReactDOM from 'react-dom/client';
import App from'./App';
import './index.css';


const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
//ReactDOM.createRoot(document.querySelector('#root')).render('Cheguei');
/*const root = document.querySelector('#root');
ReactDOM.createRoot(root).render('Vamos começar');*/
