import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const locations = [
    {
      id: 'center',
      name: 'Центральный салон',
      address: 'ул. Тверская, 15',
      district: 'ЦАО, м. Тверская',
      phone: '+7 (495) 123-45-67',
      email: 'center@optikka.ru',
      hours: {
        weekdays: '10:00 - 21:00',
        weekend: '10:00 - 20:00'
      },
      services: ['Диагностика зрения', 'Подбор оправ', 'Изготовление линз', 'Ремонт'],
      manager: 'Анна Петрова',
      coordinates: { lat: 55.7558, lng: 37.6176 }
    },
    {
      id: 'south',
      name: 'Южный салон',
      address: 'ул. Профсоюзная, 78',
      district: 'ЮЗАО, м. Новые Черемушки',
      phone: '+7 (495) 234-56-78',
      email: 'south@optikka.ru',
      hours: {
        weekdays: '10:00 - 21:00',
        weekend: '10:00 - 20:00'
      },
      services: ['Диагностика зрения', 'Подбор оправ', 'Контактные линзы'],
      manager: 'Михаил Сидоров',
      coordinates: { lat: 55.6591, lng: 37.5656 }
    },
    {
      id: 'east',
      name: 'Восточный салон',
      address: 'ш. Энтузиастов, 45',
      district: 'ВАО, м. Шоссе Энтузиастов',
      phone: '+7 (495) 345-67-89',
      email: 'east@optikka.ru',
      hours: {
        weekdays: '10:00 - 21:00',
        weekend: '10:00 - 20:00'
      },
      services: ['Диагностика зрения', 'Подбор оправ', 'Солнцезащитные очки'],
      manager: 'Елена Козлова',
      coordinates: { lat: 55.7887, lng: 37.7516 }
    }
  ];

  const contactMethods = [
    {
      icon: 'Phone',
      title: 'Телефон',
      primary: '+7 (495) 123-45-67',
      secondary: '+7 (800) 555-01-02',
      description: 'Звонки принимаются ежедневно с 9:00 до 22:00'
    },
    {
      icon: 'Mail',
      title: 'Email',
      primary: 'info@optikka.ru',
      secondary: 'support@optikka.ru',
      description: 'Ответим на письмо в течение 2 часов'
    },
    {
      icon: 'MessageCircle',
      title: 'Мессенджеры',
      primary: 'WhatsApp',
      secondary: 'Telegram',
      description: 'Быстрая связь через популярные мессенджеры'
    },
    {
      icon: 'MapPin',
      title: 'Адреса',
      primary: '3 салона в Москве',
      secondary: 'Удобное расположение',
      description: 'Выберите ближайший к вам салон'
    }
  ];

  const faq = [
    {
      question: 'Как записаться на прием?',
      answer: 'Вы можете записаться по телефону, через сайт или лично в любом из наших салонов. Также доступна онлайн-запись через форму на сайте.'
    },
    {
      question: 'Сколько времени занимает изготовление очков?',
      answer: 'Стандартные очки изготавливаются за 30-60 минут. Сложные линзы могут потребовать 1-2 дня. Точное время сообщит специалист после осмотра.'
    },
    {
      question: 'Есть ли гарантия на очки?',
      answer: 'Да, мы предоставляем гарантию 1 год на оправы и 6 месяцев на линзы. Также действует 14-дневный период возврата при неудовлетворенности покупкой.'
    },
    {
      question: 'Можно ли заказать очки онлайн?',
      answer: 'Для точного подбора очков необходим личный визит. Однако вы можете выбрать оправу на сайте и забронировать её для примерки в салоне.'
    },
    {
      question: 'Принимаете ли вы страховку?',
      answer: 'Мы работаем с основными страховыми компаниями. Уточните у вашего страховщика возможность компенсации расходов на очки.'
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    // Здесь будет логика отправки формы
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Контакты</h1>
          <p className="text-xl text-gray-600">Свяжитесь с нами удобным способом</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={method.icon as any} size={32} className="text-primary" />
                </div>
                <CardTitle className="text-lg">{method.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-gray-900 mb-1">{method.primary}</p>
                <p className="text-primary mb-2">{method.secondary}</p>
                <p className="text-sm text-gray-600">{method.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Напишите нам</CardTitle>
              <CardDescription>
                Оставьте сообщение, и мы свяжемся с вами в ближайшее время
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Имя *</label>
                    <Input
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон *</label>
                    <Input
                      required
                      type="tel"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Email *</label>
                  <Input
                    required
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Тема</label>
                  <Input
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                    placeholder="Тема обращения"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение *</label>
                  <Textarea
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    placeholder="Опишите ваш вопрос или пожелание..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Locations */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Наши салоны</h2>
            <Tabs defaultValue="center" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                {locations.map(location => (
                  <TabsTrigger key={location.id} value={location.id} className="text-xs">
                    {location.name.split(' ')[0]}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {locations.map(location => (
                <TabsContent key={location.id} value={location.id}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Icon name="MapPin" size={20} className="mr-2 text-primary" />
                        {location.name}
                      </CardTitle>
                      <CardDescription>{location.district}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="font-semibold text-gray-900">{location.address}</p>
                        <p className="text-gray-600">{location.district}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-gray-600 mb-1">Телефон</p>
                          <p className="font-semibold">{location.phone}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-600 mb-1">Email</p>
                          <p className="font-semibold">{location.email}</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-2">Режим работы</p>
                        <div className="space-y-1">
                          <p className="text-sm">Пн-Пт: {location.hours.weekdays}</p>
                          <p className="text-sm">Сб-Вс: {location.hours.weekend}</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-2">Услуги</p>
                        <div className="flex flex-wrap gap-1">
                          {location.services.map((service, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-1">Управляющий</p>
                        <p className="font-semibold">{location.manager}</p>
                      </div>

                      <div className="flex gap-2">
                        <Button className="flex-1">
                          <Icon name="Navigation" size={16} className="mr-2" />
                          Маршрут
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Icon name="Phone" size={16} className="mr-2" />
                          Позвонить
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Часто задаваемые вопросы
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faq.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Icon name="HelpCircle" size={20} className="mr-3 text-primary" />
                    {item.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Как нас найти
          </h2>
          <Card>
            <CardContent className="p-0">
              <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Map" size={48} className="text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Интерактивная карта с нашими салонами</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Здесь будет размещена карта с отметками всех салонов
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contacts;