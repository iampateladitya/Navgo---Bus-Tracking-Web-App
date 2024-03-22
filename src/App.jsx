import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/navbar'
import Main_site from './components/main_site'
import Landing_page from './pages/landing_page'
import Feature1page from './pages/feature1page'
import Feature2page from './pages/feature2page'
import Feature3page from './pages/feature3page'
import Feature4page from './pages/feature4page'
import Feature5page from './pages/feature5page'
import Feature6page from './pages/feature6page'
import Map from './pages/map'
import Search_page from './pages/search_page'
import All_buses_list from './pages/all_buses_list'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Landing_page /> */}
      {/* <Feature1page />  */}
      {/* <Feature2page />  */}
      {/* <Feature3page />  */}
      {/* <Feature4page />  */}
      {/* <Feature5page />  */}
      {/* <Feature6page />  */}
      {/* <Main_site /> */}
      {/* <Map />  */}
      {/* <Search_page /> */}
      {/* <All_buses_list /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Landing_page />} />

            <Route path="mainsite" element={<Main_site />} />

            <Route path="map" element={<Map />} />

            <Route path="searchpage" element={<Search_page />} />

            <Route path="buseslist" element={<All_buses_list />} />

            <Route path="feature1" element={<Feature1page />} />

            <Route path="feature2" element={<Feature2page />} />

            <Route path="feature3" element={<Feature3page />} />

            <Route path="feature4" element={<Feature4page />} />

            <Route path="feature5" element={<Feature5page />} />

            <Route path="feature6" element={<Feature6page />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
