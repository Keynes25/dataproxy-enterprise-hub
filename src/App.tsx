
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/context/LanguageContext";
import { StrictMode } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DataManagement from "./pages/services/DataManagement";
import CloudSolutions from "./pages/services/CloudSolutions";
import Cybersecurity from "./pages/services/Cybersecurity";
import EnterpriseSoftware from "./pages/services/EnterpriseSoftware";
import BusinessIntelligence from "./pages/services/BusinessIntelligence";
import ItConsulting from "./pages/services/ItConsulting";
import AboutUs from "./pages/AboutUs";

// Create a client
const queryClient = new QueryClient();

const App = () => (
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <BrowserRouter>
          <TooltipProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services/data-management" element={<DataManagement />} />
              <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
              <Route path="/services/cybersecurity" element={<Cybersecurity />} />
              <Route path="/services/enterprise-software" element={<EnterpriseSoftware />} />
              <Route path="/services/business-intelligence" element={<BusinessIntelligence />} />
              <Route path="/services/it-consulting" element={<ItConsulting />} />
              <Route path="/about-us" element={<AboutUs />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </BrowserRouter>
      </LanguageProvider>
    </QueryClientProvider>
  </StrictMode>
);

export default App;
