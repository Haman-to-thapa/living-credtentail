import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import ClaimPage from "./pages/ClaimPage"
import CertificatePage from "./pages/CertificatePage"
import NotFoundPage from "./pages/NotFoundPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/claim" replace />} />

        <Route path="/claim" element={<ClaimPage />} />

        <Route path="/certificate/:rollNo" element={<CertificatePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App