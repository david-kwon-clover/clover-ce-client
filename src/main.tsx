import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import Hero from './pages/Hero';
import CostEstimator from './pages/CostEstimator';
import SavedSummaries from './pages/SavedSummaries';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Hero />} />
      <Route path="cost-estimator" element={<CostEstimator />} />
      <Route path="saved-summaries" element={<SavedSummaries />} />
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
