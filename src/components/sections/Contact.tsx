
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import ReCAPTCHA from 'react-google-recaptcha';
import { useToast } from '@/components/ui/use-toast';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Esquema de validação para o formulário
const formSchema = z.object({
  name: z.string().min(2, { message: 'O nome é obrigatório' }),
  email: z.string().email({ message: 'Email inválido' }),
  subject: z.string().min(3, { message: 'Assunto é obrigatório' }),
  message: z.string().min(10, { message: 'Mensagem deve ter pelo menos 10 caracteres' }),
});

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const captchaRef = useRef<ReCAPTCHA>(null);
  
  // Inicializar formulário com react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onCaptchaChange = (token: string | null) => {
    setCaptchaValue(token);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Verificar se o captcha foi marcado
    if (!captchaValue) {
      toast({
        title: "Erro",
        description: "Por favor, confirme que não é um robô",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      console.log('Enviando email para suporte@dataproxy.co.mz com os dados:', values);
      // Aqui você implementaria a lógica de envio do email
      // Normalmente isso seria feito através de uma API backend
      
      // Simular envio bem-sucedido
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Mensagem enviada",
        description: "Entraremos em contacto consigo em breve.",
      });
      
      // Resetar o formulário
      form.reset();
      // Resetar o captcha
      captchaRef.current?.reset();
      setCaptchaValue(null);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      toast({
        title: "Erro",
        description: "Não foi possível enviar a sua mensagem. Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.form.name')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('contact.form.name')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.form.email')}</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder={t('contact.form.email')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contact.form.subject')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('contact.form.subject.placeholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contact.form.message')}</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder={t('contact.form.message.placeholder')} 
                          rows={5} 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="mb-6">
                  <ReCAPTCHA
                    ref={captchaRef}
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={onCaptchaChange}
                  />
                  <p className="text-xs text-gray-500 mt-2">* Este é um captcha de teste, substitua com sua própria chave em produção</p>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary-600 hover:bg-primary-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'A enviar...' : t('contact.form.send')}
                </Button>
              </form>
            </Form>
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
                  <p className="text-gray-600">+ 258 843 334 087</p>
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
