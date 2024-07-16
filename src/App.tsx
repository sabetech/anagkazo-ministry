import SidebarWithHeader from './layout/Sidebar'
import Dashboard from './home/Dashboard'
import ServiceData from './service_data/ServiceData';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        //other query settings
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SidebarWithHeader>
          <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/home" element={<Dashboard />} />
              <Route path="/service-data" element={<ServiceData />} />
          </Routes>
          
        </SidebarWithHeader>
        </QueryClientProvider>
    </>
  )
}

export default App
