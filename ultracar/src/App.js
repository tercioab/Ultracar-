import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterClient from "./pages/RegisterClient";
import QrCodeScanner from "./pages/QrCodeScam";
import Services from "./pages/Services";
import StartService from "./pages/StartService";
import Manual from "./pages/Manual";
import Layout from "./components/layout";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<Manual to='/manual' />} />
					<Route path='/manual' element={<Manual />} />
					<Route path='/register-client' element={<RegisterClient />} />
					<Route path='/qr-scanner' element={<QrCodeScanner />} />
					<Route path='/services' element={<Services />} />
					<Route path='/iniciar-servico' element={<StartService />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
