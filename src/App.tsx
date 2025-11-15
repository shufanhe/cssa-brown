
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Events from "./pages/Events";
import People from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import InformationHub from "./pages/InformationHub";
import Partners from "./pages/Partners";
import Credits from "./pages/Credits"
import Box from "./pages/ppl"
import { HashRouter, Routes, Route } from "react-router-dom";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events" element={<Events />} />
          <Route path="/people" element={<People />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/information-hub/*" element={<InformationHub />} />
          <Route path="/info" element={<InformationHub />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/ppl" element={<Box />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

