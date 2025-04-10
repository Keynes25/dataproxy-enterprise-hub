
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
    // Show success message or error handling
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="mb-4">{t('contact.title')}</h2>
          <p className="text-gray-600 text-lg">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">{t('contact.form.title')}</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">{t('contact.form.name')}</label>
                  <Input id="name" placeholder={t('contact.form.name')} required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">{t('contact.form.email')}</label>
                  <Input id="email" type="email" placeholder={t('contact.form.email')} required />
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <label htmlFor="subject" className="text-sm font-medium">{t('contact.form.subject')}</label>
                <Input id="subject" placeholder={t('contact.form.subject.placeholder')} required />
              </div>
              <div className="space-y-2 mb-6">
                <label htmlFor="message" className="text-sm font-medium">{t('contact.form.message')}</label>
                <Textarea id="message" placeholder={t('contact.form.message.placeholder')} rows={5} required />
              </div>
              <Button type="submit" className="w-full bg-primary-600 hover:bg-primary-700">
                {t('contact.form.send')}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">{t('contact.info.title')}</h3>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">{t('contact.info.visit')}</h4>
                  <address className="not-italic text-gray-600">
                    Avenida Samora Machel, nº 323 <br />
                    1º andar Edifício GAPI <br />
                    Maputo, Moçambique
                  </address>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">{t('contact.info.call')}</h4>
                  <p className="text-gray-600">: + 258 843 334 087</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">{t('contact.info.email')}</h4>
                  <p className="text-gray-600">info@dataproxy.co.mz</p>
                  <p className="text-gray-600">suporte@dataproxy.co.mz</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="font-medium mb-4">{t('contact.info.hours')}</h4>
              <div className="space-y-2 text-gray-600">
                <p>{t('contact.info.weekdays')}</p>
                <p>{t('contact.info.saturday')}</p>
                <p>{t('contact.info.sunday')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
