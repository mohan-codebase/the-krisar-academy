import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube } from 'lucide-react';
import logo from '../../assets/images/navbar/logo.svg';

const Footer = () => {
    return (
        <footer className="bg-brand-primary text-text-primary py-18 pb-6">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Column 1: Logo & Tagline */}
                    <div>
                        <div className="mb-6">
                            <img src={logo} alt="The Krisar Academy" className="h-auto w-48" />
                        </div>
                        <div className="text-lg leading-relaxed">
                            The advanced visionary step<br />
                            towards the future of Education.
                            <div className="w-16 h-1 bg-brand-secondary mt-2"></div>
                        </div>
                    </div>

                    {/* Column 2: Address */}
                    <div>
                        <h3 className="text-brand-secondary text-xl font-medium mb-4">Address</h3>
                        <div className="flex gap-3 items-start">
                            <MapPin className="text-brand-secondary shrink-0 mt-1" size={20} />
                            <p className="leading-relaxed">
                                #136/6, Arcot to Arani Main Road,<br />
                                Paradarami Village, Arcot Taluk,<br />
                                Ranipet District, Pin - 632512,<br />
                                Tamil Nadu, India
                            </p>
                        </div>
                    </div>

                    {/* Column 3: Contact Us */}
                    <div>
                        <h3 className="text-brand-secondary text-xl font-medium mb-4">Contact Us</h3>
                        <div className="space-y-4">
                            <div>
                                <p className="mb-1 text-sm text-text-muted">Office:</p>
                                <div className="flex items-center gap-2">
                                    <Phone className="text-brand-secondary" size={18} />
                                    <a href='tel:+917540096387' className="hover:text-brand-secondary transition-colors">+91 7540096387</a>
                                </div>
                            </div>
                            <div>
                                <p className="mb-1 text-sm text-text-muted">Admission</p>
                                <div className="flex items-center gap-2">
                                    <Phone className="text-brand-secondary" size={18} />
                                    <a href='tel:+917540088387' className="hover:text-brand-secondary transition-colors">+91 7540088387</a>
                                </div>
                            </div>
                            <div>
                                <p className="mb-1 text-sm text-text-muted">Transport</p>
                                <div className="flex items-center gap-2">
                                    <Phone className="text-brand-secondary" size={18} />
                                    <a href='tel:+917540098387' className="hover:text-brand-secondary transition-colors">+91 7540098387</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Connect & Hours */}
                    <div>
                        <div className="mb-8">
                            <h3 className="text-brand-secondary text-xl font-medium mb-4">Connect</h3>
                            <div>
                                <p className="mb-1 text-sm text-text-muted">Mail</p>
                                <div className="flex items-center gap-2">
                                    <Mail className="text-brand-secondary" size={18} />
                                    <a href="mailto:info.thekrisaracademy@gmail.com" className="hover:text-brand-secondary transition-colors">
                                        info.thekrisaracademy@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-brand-secondary text-xl font-medium mb-4">Opening Hours</h3>
                            <div>
                                <p className="mb-1 text-sm text-text-muted">Timing</p>
                                <div className="flex gap-2 items-start">
                                    <Clock className="text-brand-secondary shrink-0 mt-1" size={18} />
                                    <div>
                                        <p>Monday - Saturday</p>
                                        <p>9:00 AM - 4:30 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm">
                        Copyright © 2026 All Rights Reserved by The Krisar Academy.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="https://www.instagram.com/thekrisaracademy_cbse/?hl=en" className="hover:text-brand-secondary transition-colors" aria-label="Instagram">
                            <Instagram size={24} />
                        </a>
                        <a href="https://www.facebook.com/thekrisaracademycbse" className="hover:text-brand-secondary transition-colors" aria-label="Facebook">
                            <Facebook size={24} />
                        </a>
                        <a href="https://www.youtube.com/@thekrisaracademycbse" className="hover:text-brand-secondary transition-colors" aria-label="YouTube">
                            <Youtube size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
