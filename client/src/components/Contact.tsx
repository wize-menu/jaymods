import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiDiscord } from "react-icons/si";
import { Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4" data-testid="text-contact-title">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-contact-subtitle">
            Have questions? We're here to help. Join our community or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center hover-elevate transition-all" data-testid="card-discord">
            <div className="w-12 h-12 bg-ring/10 rounded-md flex items-center justify-center mx-auto mb-4">
              <SiDiscord className="w-6 h-6 text-ring" />
            </div>
            <h3 className="text-lg font-heading font-semibold mb-2">Discord</h3>
            <p className="text-sm text-muted-foreground mb-4">Join our community of 5,000+ members</p>
            <Button variant="outline" size="sm" className="w-full" data-testid="button-join-discord">
              Join Server
            </Button>
          </Card>

          <Card className="p-6 text-center hover-elevate transition-all" data-testid="card-email">
            <div className="w-12 h-12 bg-ring/10 rounded-md flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-ring" />
            </div>
            <h3 className="text-lg font-heading font-semibold mb-2">Email</h3>
            <p className="text-sm text-muted-foreground mb-4">Get support via email</p>
            <Button variant="outline" size="sm" className="w-full" data-testid="button-send-email">
              Send Email
            </Button>
          </Card>

          <Card className="p-6 text-center hover-elevate transition-all" data-testid="card-live-chat">
            <div className="w-12 h-12 bg-ring/10 rounded-md flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-ring" />
            </div>
            <h3 className="text-lg font-heading font-semibold mb-2">Live Chat</h3>
            <p className="text-sm text-muted-foreground mb-4">Chat with our support team</p>
            <Button variant="outline" size="sm" className="w-full" data-testid="button-start-chat">
              Start Chat
            </Button>
          </Card>
        </div>

        <Card className="p-8 text-center bg-gradient-to-br from-primary/5 to-ring/5 border-primary/20">
          <h3 className="text-2xl font-heading font-bold mb-3" data-testid="text-newsletter-title">
            Stay Updated
          </h3>
          <p className="text-muted-foreground mb-6" data-testid="text-newsletter-subtitle">
            Subscribe to our newsletter for new releases and exclusive deals
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
              data-testid="input-newsletter-email"
            />
            <Button variant="default" data-testid="button-subscribe">
              Subscribe
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
