import Content from './layouts/Content';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import './scss/App/App.scss';

function App() {
	return (
		<div className='App'>
			<Header />
			<Content />
			<Footer />
		</div>
	);
}

export default App;
