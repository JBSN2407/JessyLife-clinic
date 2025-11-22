export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center" data-testid="logo-footer">
              <span className="text-white font-heading font-bold text-xl">JL</span>
            </div>
            <div>
              <div className="font-heading font-bold text-xl text-white" data-testid="text-footer-brand">
                JessyLife Clinic
              </div>
              <p className="font-sans text-sm text-white/80" data-testid="text-footer-tagline">
                We Believe in a Healthy You
              </p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="font-sans text-sm text-white/80" data-testid="text-footer-copyright">
              © {new Date().getFullYear()} JessyLife Physiotherapy & Rehabilitation Clinic
            </p>
            <p className="font-sans text-sm text-white/80 mt-1" data-testid="text-footer-location">
              Achimota, Accra, Ghana
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
