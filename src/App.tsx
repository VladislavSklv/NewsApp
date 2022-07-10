import React, { useEffect, useState } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';

const App: React.FC = () => {
	const [isAuth, setIsAuth] = useState(false);
	const [page, setPage] = useState(1);
	const [query, setQuery] = useState('');
	const [selector, setSelector] = useState('publishedAt');
	
	useEffect(() => {
		if(localStorage.getItem('auth')) setIsAuth(true);
	}, [])
	return (
		<AuthContext.Provider value={{
			isAuth,
			setIsAuth,
			page,
			setPage,
			query,
			setQuery,
			selector,
			setSelector
		}}>
			<AppRouter />
		</AuthContext.Provider>
	);
}

export default App;
