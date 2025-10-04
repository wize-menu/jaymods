import { SiDiscord } from "react-icons/si";
import { Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">J</span>
              </div>
              <span className="text-xl font-heading font-bold text-ring">JFiveMods</span>
            </div>
            <p className="text-sm text-muted-foreground" data-testid="text-footer-description">
              Premium FiveM modifications for server owners and developers.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors" data-testid="link-vehicles">
                  Vehicles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors" data-testid="link-weapons">
                  Weapons
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors" data-testid="link-maps">
                  Maps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors" data-testid="link-scripts">
                  Scripts
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors" data-testid="link-documentation">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors" data-testid="link-installation">
                  Installation Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors" data-testid="link-faq">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors" data-testid="link-contact-support">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Community</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-card border border-card-border rounded-md flex items-center justify-center hover-elevate transition-all"
                data-testid="link-discord"
              >
                <SiDiscord className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-card border border-card-border rounded-md flex items-center justify-center hover-elevate transition-all"
                data-testid="link-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-card border border-card-border rounded-md flex items-center justify-center hover-elevate transition-all"
                data-testid="link-github"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p data-testid="text-copyright">&copy; 2025 JFiveMods. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
