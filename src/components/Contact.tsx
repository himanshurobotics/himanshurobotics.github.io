
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Mail, Send } from 'lucide-react';
import wallpaperContact from '@/assets/wallpaper-contact.jpg';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const subject = encodeURIComponent(formData.get('subject') as string || 'Contact from Portfolio');
    const body = encodeURIComponent(`
Name: ${formData.get('name')}
Email: ${formData.get('email')}

Message:
${formData.get('message')}
    `);
    window.location.href = `mailto:hvarshney.iitdhn@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Wallpaper */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${wallpaperContact})` }}
      />
      <div className="absolute inset-0 bg-black/80 dark:bg-black/85" />
      <div className="absolute inset-0 bg-[url('./circuit-pattern.svg')] bg-repeat opacity-5" />

      <div className="section-container relative z-10">
        <div className="flex items-center justify-center mb-10 animate-fade-in">
          <div className="h-0.5 w-10 bg-tech-accent"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mx-4 text-white">Get In Touch</h2>
          <div className="h-0.5 w-10 bg-tech-accent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            <p className="text-gray-300 mb-8">
              For research collaborations, projects, or any questions about my work in robotics, mechatronics, control and automation.
              <br /><br />
              Be professional and use e-mail if you want to connect with a hardcore robotics engineer (by birth)
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-tech-accent rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-tech-accent/40">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Location</h4>
                  <p className="text-gray-300">IIT (ISM) Dhanbad, Jharkhand, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-tech-accent rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-tech-accent/40">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Email</h4>
                  <p className="text-gray-300">hvarshney[dot]iitdhn[use your brain for gmail]</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="text-lg font-medium text-white mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                {[
                  { href: "https://www.linkedin.com/in/himanshu-varshney/", label: "LinkedIn", path: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" },
                  { href: "https://github.com/himanshurobotics", label: "GitHub", path: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-tech-accent rounded-full flex items-center justify-center text-white hover:bg-tech-blue transition-all duration-300 shadow-lg shadow-tech-accent/30 hover:scale-110"
                    aria-label={social.label}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d={social.path} clipRule="evenodd" />
                    </svg>
                  </a>
                ))}
                <a
                  href="https://scholar.google.com/citations?user=HPYKWB4AAAAJ&hl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-tech-accent rounded-full flex items-center justify-center text-white hover:bg-tech-blue transition-all duration-300 shadow-lg shadow-tech-accent/30 hover:scale-110"
                  aria-label="Google Scholar"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
                  </svg>
                </a>
                <a
                  href="https://orcid.org/0000-0001-5025-7224"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-tech-accent rounded-full flex items-center justify-center text-white hover:bg-tech-blue transition-all duration-300 shadow-lg shadow-tech-accent/30 hover:scale-110"
                  aria-label="ORCID"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947 0 .525-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 3.881-1.303 3.881-3.722 0-2.131-1.303-3.722-3.881-3.722h-2.297z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black/50 backdrop-blur-md rounded-lg border border-tech-accent/20 shadow-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-gray-300 font-medium">Your Name</label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="bg-white/5 border-tech-accent/30 text-white placeholder:text-gray-500 focus:border-tech-accent focus:ring-tech-accent"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-gray-300 font-medium">Your Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/5 border-tech-accent/30 text-white placeholder:text-gray-500 focus:border-tech-accent focus:ring-tech-accent"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-gray-300 font-medium">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Enter subject"
                  className="bg-white/5 border-tech-accent/30 text-white placeholder:text-gray-500 focus:border-tech-accent focus:ring-tech-accent"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-gray-300 font-medium">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  className="bg-white/5 border-tech-accent/30 text-white placeholder:text-gray-500 focus:border-tech-accent focus:ring-tech-accent min-h-[120px]"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-tech-accent hover:bg-tech-blue text-white border border-tech-accent/50 shadow-lg shadow-tech-accent/20 hover:shadow-tech-accent/40 transition-all duration-300"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
