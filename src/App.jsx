import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Home from "./Home";
import MainLayout from "./layouts/MainLayout";
import Analytics from "./components/Analytics";

const Services = lazy(() => import("./Services"));
const ServiceDetail = lazy(() => import("./ServiceDetail"));
const AboutUs = lazy(() => import("./AboutUs"));
const ContactUs = lazy(() => import("./ContactUs"));
const Privacy = lazy(() => import("./Privacy"));
const TermsOfService = lazy(() => import("./TermsOfService"));
const RefundPolicy = lazy(() => import("./RefundPolicy"));
const DeliveryPolicy = lazy(() => import("./DeliveryPolicy"));
const NotFound = lazy(() => import("./NotFound"));

/* Every page exists twice: English at /path and Hindi at /hi/path.
   The language itself is derived from the URL (see LanguageContext). */
const PAGES = [
  { path: "services", element: <Services /> },
  { path: "services/:slug", element: <ServiceDetail /> },
  { path: "about-us", element: <AboutUs /> },
  { path: "contact-us", element: <ContactUs /> },
  { path: "privacy", element: <Privacy /> },
  { path: "terms", element: <TermsOfService /> },
  { path: "refund", element: <RefundPolicy /> },
  { path: "delivery", element: <DeliveryPolicy /> },
];

function App() {
  return (
    <>
      <Analytics />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="hi" element={<Home />} />
            {PAGES.map((p) => (
              <Route key={p.path} path={p.path} element={p.element} />
            ))}
            {PAGES.map((p) => (
              <Route key={"hi-" + p.path} path={"hi/" + p.path} element={p.element} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
