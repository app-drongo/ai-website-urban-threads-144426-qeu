'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  Headphones,
  Package,
  Upload,
  Camera,
} from 'lucide-react';

const DEFAULT_CONTACT = {
  badge: 'Customer Service',
  mainTitle: "We're Here to",
  mainTitleHighlight: 'Help You',
  mainDescription:
    'Need assistance with your order, returns, or have questions about our sustainable fashion? Our customer service team is ready to help.',
  formTitle: 'Customer Service Request',
  formDescription:
    "Fill out the form below and we'll get back to you within 2 hours during business hours.",
  submitButton: 'Submit Request',
  contactSectionTitle: 'Quick Support',
  method1Title: 'Email Support',
  method1Description: 'General inquiries & support',
  method1Contact: 'support@urbanthreads.com',
  method2Title: 'Order Support',
  method2Description: 'Order status & shipping',
  method2Contact: '+1 (555) 234-5678',
  method3Title: 'Live Chat',
  method3Description: 'Instant help available',
  method3Contact: 'Click to start chat',
  officesSectionTitle: 'Store Locations',
  office1City: 'New York Flagship',
  office1Address: '123 Fashion Ave, SoHo District',
  office1Timezone: 'EST (UTC-5)',
  office2City: 'Los Angeles Boutique',
  office2Address: '456 Melrose Avenue, West Hollywood',
  office2Timezone: 'PST (UTC-8)',
  office3City: 'Chicago Showroom',
  office3Address: '789 Michigan Avenue, Loop District',
  office3Timezone: 'CST (UTC-6)',
  hoursTitle: 'Customer Service Hours',
  hoursWeekdayLabel: 'Monday - Friday',
  hoursWeekdayTime: '8:00 AM - 8:00 PM',
  hoursSaturdayLabel: 'Saturday',
  hoursSaturdayTime: '9:00 AM - 6:00 PM',
  hoursSundayLabel: 'Sunday',
  hoursSundayTime: '10:00 AM - 4:00 PM',
  supportNote: 'VIP members get priority support response',
  nameLabel: 'Full Name *',
  namePlaceholder: 'Jane Smith',
  emailLabel: 'Email Address *',
  emailPlaceholder: 'jane@email.com',
  companyLabel: 'Order Number (Optional)',
  companyPlaceholder: 'UT-2024-001234',
  messageLabel: 'How can we help? *',
  messagePlaceholder: 'Describe your question or concern...',
} as const;

type ContactProps = Partial<typeof DEFAULT_CONTACT>;

export default function Contact(props: ContactProps) {
  const config = { ...DEFAULT_CONTACT, ...props };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    reason: '',
    photos: [] as File[],
  });

  const [showLiveChat, setShowLiveChat] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Customer service request submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFormData(prev => ({
        ...prev,
        photos: [...prev.photos, ...newFiles].slice(0, 3), // Max 3 photos
      }));
    }
  };

  const removePhoto = (index: number) => {
    setFormData(prev => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index),
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: config.method1Title,
      description: config.method1Description,
      contact: config.method1Contact,
    },
    {
      icon: Phone,
      title: config.method2Title,
      description: config.method2Description,
      contact: config.method2Contact,
    },
    {
      icon: MessageSquare,
      title: config.method3Title,
      description: config.method3Description,
      contact: config.method3Contact,
      action: () => setShowLiveChat(true),
    },
  ];

  const offices = [
    {
      city: config.office1City,
      address: config.office1Address,
      timezone: config.office1Timezone,
    },
    {
      city: config.office2City,
      address: config.office2Address,
      timezone: config.office2Timezone,
    },
    {
      city: config.office3City,
      address: config.office3Address,
      timezone: config.office3Timezone,
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-muted/20 to-background"
      data-editable="contact"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <span data-editable="badge">{config.badge}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="mainTitle">{config.mainTitle}</span>
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              <span data-editable="mainTitleHighlight">{config.mainTitleHighlight}</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span data-editable="mainDescription">{config.mainDescription}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Enhanced Customer Service Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Send className="size-6 text-primary" />
                <span data-editable="formTitle">{config.formTitle}</span>
              </CardTitle>
              <CardDescription>
                <span data-editable="formDescription">{config.formDescription}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      <span data-editable="nameLabel">{config.nameLabel}</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder={config.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      <span data-editable="emailLabel">{config.emailLabel}</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder={config.emailPlaceholder}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    <span data-editable="companyLabel">{config.companyLabel}</span>
                  </label>
                  <div className="relative">
                    <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder={config.companyPlaceholder}
                    />
                  </div>
                </div>

                {/* Return/Exchange Reason Dropdown */}
                <div>
                  <label htmlFor="reason" className="block text-sm font-medium mb-2">
                    Reason for Contact
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="">Select a reason...</option>
                    <option value="order-status">Order Status</option>
                    <option value="return-exchange">Return/Exchange</option>
                    <option value="damaged-item">Damaged Item</option>
                    <option value="sizing-help">Sizing Help</option>
                    <option value="product-question">Product Question</option>
                    <option value="shipping-issue">Shipping Issue</option>
                    <option value="account-help">Account Help</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Photo Upload for Damaged Items */}
                {formData.reason === 'damaged-item' && (
                  <div>
                    <label className="block text-sm font-medium mb-2">Upload Photos (Max 3)</label>
                    <div className="space-y-3">
                      <div className="flex items-center justify-center w-full">
                        <label
                          htmlFor="photo-upload"
                          className="flex flex-col items-center justify-center w-full h-32 border-2 border-border border-dashed rounded-lg cursor-pointer bg-muted/20 hover:bg-muted/40 transition-colors"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Camera className="size-8 mb-2 text-muted-foreground" />
                            <p className="mb-2 text-sm text-muted-foreground">
                              <span className="font-semibold">Click to upload</span> photos
                            </p>
                            <p className="text-xs text-muted-foreground">
                              PNG, JPG up to 10MB each
                            </p>
                          </div>
                          <input
                            id="photo-upload"
                            type="file"
                            className="hidden"
                            multiple
                            accept="image/*"
                            onChange={handlePhotoUpload}
                            disabled={formData.photos.length >= 3}
                          />
                        </label>
                      </div>

                      {formData.photos.length > 0 && (
                        <div className="grid grid-cols-3 gap-2">
                          {formData.photos.map((photo, index) => (
                            <div key={index} className="relative group">
                              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center text-xs p-2 text-center">
                                {photo.name}
                              </div>
                              <button
                                type="button"
                                onClick={() => removePhoto(index)}
                                className="absolute -top-2 -right-2 size-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                ×
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    <span data-editable="messageLabel">{config.messageLabel}</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder={config.messagePlaceholder}
                  />
                </div>

                <Button type="submit" className="w-full text-base py-6 group">
                  <span data-editable="submitButton">{config.submitButton}</span>
                  <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Methods with Live Chat */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Headphones className="size-5 text-primary" />
                <span data-editable="contactSectionTitle">{config.contactSectionTitle}</span>
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card
                      key={index}
                      className="border-border/50 hover:border-primary/20 transition-colors cursor-pointer group"
                      onClick={method.action}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">
                              <span data-editable={`method${index + 1}Title`}>{method.title}</span>
                            </h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              <span data-editable={`method${index + 1}Description`}>
                                {method.description}
                              </span>
                            </p>
                            <p className="font-medium text-primary">
                              <span data-editable={`method${index + 1}Contact`}>
                                {method.contact}
                              </span>
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Live Chat Widget */}
            {showLiveChat && (
              <Card className="border-primary/50 bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold flex items-center gap-2">
                      <MessageSquare className="size-5 text-primary" />
                      Live Chat Support
                    </h4>
                    <button
                      onClick={() => setShowLiveChat(false)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      ×
                    </button>
                  </div>
                  <div className="bg-background rounded-lg p-4 mb-4 min-h-[200px] border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <div className="size-2 bg-green-500 rounded-full animate-pulse"></div>
                      Support agent will connect shortly...
                    </div>
                    <div className="space-y-3">
                      <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                        <p className="text-sm">
                          Hi! I'm here to help with any questions about Urban Threads. How can I
                          assist you today?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="flex-1 px-3 py-2 border border-border rounded-lg text-sm"
                    />
                    <Button size="sm">Send</Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Store Locations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                <span data-editable="officesSectionTitle">{config.officesSectionTitle}</span>
              </h3>
              <div className="space-y-3">
                {offices.map((office, index) => (
                  <div key={index} className="p-4 border border-border/50 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold">
                          <span data-editable={`office${index + 1}City`}>{office.city}</span>
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          <span data-editable={`office${index + 1}Address`}>{office.address}</span>
                        </p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        <span data-editable={`office${index + 1}Timezone`}>{office.timezone}</span>
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  <span data-editable="hoursTitle">{config.hoursTitle}</span>
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      <span data-editable="hoursWeekdayLabel">{config.hoursWeekdayLabel}</span>
                    </span>
                    <span data-editable="hoursWeekdayTime">{config.hoursWeekdayTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      <span data-editable="hoursSaturdayLabel">{config.hoursSaturdayLabel}</span>
                    </span>
                    <span data-editable="hoursSaturdayTime">{config.hoursSaturdayTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      <span data-editable="hoursSundayLabel">{config.hoursSundayLabel}</span>
                    </span>
                    <span data-editable="hoursSundayTime">{config.hoursSundayTime}</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Users className="size-4" />
                    <span data-editable="supportNote">{config.supportNote}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
