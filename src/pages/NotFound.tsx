import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <section className="relative min-h-screen flex items-center justify-center section-dark">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h1 className="font-heading font-bold text-8xl mb-4 gradient-text">404</h1>
          <h2 className="font-heading font-bold text-3xl mb-4" style={{ color: "hsl(0 0% 100%)" }}>
            Page Not Found
          </h2>
          <p className="text-lg mb-8" style={{ color: "hsl(0 0% 60%)" }}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/" 
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-heading font-semibold text-sm transition-all duration-300"
              style={{ background: "var(--gradient-primary)", color: "hsl(0 0% 100%)" }}
            >
              <Home size={16} className="mr-2" />
              Go Home
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-heading font-semibold text-sm transition-all duration-300 btn-outline-light"
            >
              <ArrowLeft size={16} className="mr-2" />
              Go Back
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
