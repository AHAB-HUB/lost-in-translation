import '../css/App.css';
import Header from './shared/Header'
import Footer from './shared/Footer'
import Login from './containers/Login'
import Translate from './containers/Translate'

function App() {
  return (
    <div className="app">
      <Header />
      <Login />
      {/* <Translate /> */}
      <Footer />
    </div>
  );
}

export default App;
