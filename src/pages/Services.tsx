import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Services = () => {
  const [selectedService, setSelectedService] = useState('');
  const [appointmentForm, setAppointmentForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const services = [
    {
      id: 'eye-exam',
      title: 'Диагностика зрения',
      description: 'Комплексное обследование зрения на современном оборудовании',
      price: 'от 1 500 ₽',
      duration: '30-45 мин',
      icon: 'Eye',
      features: [
        'Проверка остроты зрения',
        'Измерение внутриглазного давления',
        'Исследование глазного дна',
        'Компьютерная диагностика',
        'Консультация врача-офтальмолога'
      ],
      equipment: [
        'Авторефрактометр',
        'Щелевая лампа',
        'Тонометр',
        'Офтальмоскоп'
      ]
    },
    {
      id: 'frame-selection',
      title: 'Подбор оправы',
      description: 'Индивидуальный подбор оправы по форме лица и стилю',
      price: 'Бесплатно',
      duration: '20-30 мин',
      icon: 'Glasses',
      features: [
        'Анализ формы лица',
        'Подбор по стилю жизни',
        'Примерка различных моделей',
        'Консультация стилиста',
        'Рекомендации по уходу'
      ],
      equipment: [
        'Зеркала с профессиональным освещением',
        'Измерительные инструменты',
        'Каталог оправ'
      ]
    },
    {
      id: 'lens-making',
      title: 'Изготовление линз',
      description: 'Изготовление линз любой сложности за 30 минут',
      price: 'от 2 900 ₽',
      duration: '30-60 мин',
      icon: 'Settings',
      features: [
        'Однофокальные линзы',
        'Прогрессивные линзы',
        'Фотохромные линзы',
        'Поляризационные линзы',
        'Антибликовое покрытие'
      ],
      equipment: [
        'Автоматический станок',
        'Система контроля качества',
        'Ультразвуковая мойка'
      ]
    },
    {
      id: 'repair',
      title: 'Ремонт очков',
      description: 'Профессиональный ремонт оправ и замена комплектующих',
      price: 'от 500 ₽',
      duration: '15-30 мин',
      icon: 'Wrench',
      features: [
        'Замена винтов и носоупоров',
        'Пайка металлических оправ',
        'Замена заушников',
        'Регулировка посадки',
        'Полировка царапин'
      ],
      equipment: [
        'Паяльная станция',
        'Ультразвуковая ванна',
        'Набор инструментов'
      ]
    },
    {
      id: 'contact-lenses',
      title: 'Подбор контактных линз',
      description: 'Подбор и обучение использованию контактных линз',
      price: 'от 1 200 ₽',
      duration: '45-60 мин',
      icon: 'Circle',
      features: [
        'Измерение кривизны роговицы',
        'Подбор материала линз',
        'Обучение надеванию/снятию',
        'Рекомендации по уходу',
        'Контрольный осмотр'
      ],
      equipment: [
        'Кератометр',
        'Набор пробных линз',
        'Средства ухода'
      ]
    },
    {
      id: 'sunglasses',
      title: 'Солнцезащитные очки',
      description: 'Подбор солнцезащитных очков с учетом UV-защиты',
      price: 'от 3 500 ₽',
      duration: '20-30 мин',
      icon: 'Sun',
      features: [
        'UV-400 защита',
        'Поляризационные линзы',
        'Градиентные линзы',
        'Зеркальные покрытия',
        'Спортивные модели'
      ],
      equipment: [
        'UV-метр',
        'Поляризационный тестер',
        'Каталог солнцезащитных очков'
      ]
    }
  ];

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Appointment form submitted:', appointmentForm);
    // Здесь будет логика отправки формы
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Наши услуги</h1>
          <p className="text-xl text-gray-600">Профессиональный уход за вашим зрением</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <Card key={service.id} className="hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name={service.icon as any} size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl text-center">{service.title}</CardTitle>
                <CardDescription className="text-center">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex justify-center gap-4 mb-4">
                  <Badge variant="outline" className="text-primary border-primary">
                    {service.price}
                  </Badge>
                  <Badge variant="secondary">
                    <Icon name="Clock" size={14} className="mr-1" />
                    {service.duration}
                  </Badge>
                </div>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full mb-2">Подробнее</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="flex items-center">
                        <Icon name={service.icon as any} size={24} className="mr-3 text-primary" />
                        {service.title}
                      </DialogTitle>
                      <DialogDescription>{service.description}</DialogDescription>
                    </DialogHeader>
                    
                    <Tabs defaultValue="features" className="mt-4">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="features">Что включено</TabsTrigger>
                        <TabsTrigger value="equipment">Оборудование</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="features" className="mt-4">
                        <ul className="space-y-2">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                              <Icon name="Check" size={16} className="text-green-500 mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </TabsContent>
                      
                      <TabsContent value="equipment" className="mt-4">
                        <ul className="space-y-2">
                          {service.equipment.map((item, index) => (
                            <li key={index} className="flex items-center">
                              <Icon name="Tool" size={16} className="text-blue-500 mr-2" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </TabsContent>
                    </Tabs>
                    
                    <div className="flex justify-between items-center mt-6 pt-4 border-t">
                      <div>
                        <p className="text-2xl font-bold text-primary">{service.price}</p>
                        <p className="text-sm text-gray-600">Длительность: {service.duration}</p>
                      </div>
                      <Button onClick={() => setSelectedService(service.id)}>
                        Записаться
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Appointment Form */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">Записаться на прием</CardTitle>
            <CardDescription className="text-center">
              Выберите удобное время для посещения нашего салона
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAppointmentSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Имя *</label>
                  <Input
                    required
                    value={appointmentForm.name}
                    onChange={(e) => setAppointmentForm({...appointmentForm, name: e.target.value})}
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон *</label>
                  <Input
                    required
                    type="tel"
                    value={appointmentForm.phone}
                    onChange={(e) => setAppointmentForm({...appointmentForm, phone: e.target.value})}
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input
                  type="email"
                  value={appointmentForm.email}
                  onChange={(e) => setAppointmentForm({...appointmentForm, email: e.target.value})}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Услуга *</label>
                <Select 
                  required
                  value={appointmentForm.service} 
                  onValueChange={(value) => setAppointmentForm({...appointmentForm, service: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите услугу" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map(service => (
                      <SelectItem key={service.id} value={service.id}>
                        {service.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Дата *</label>
                  <Input
                    required
                    type="date"
                    value={appointmentForm.date}
                    onChange={(e) => setAppointmentForm({...appointmentForm, date: e.target.value})}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Время *</label>
                  <Select 
                    required
                    value={appointmentForm.time} 
                    onValueChange={(value) => setAppointmentForm({...appointmentForm, time: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите время" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({length: 11}, (_, i) => i + 10).map(hour => (
                        <SelectItem key={hour} value={`${hour}:00`}>
                          {hour}:00
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Дополнительная информация</label>
                <Textarea
                  value={appointmentForm.message}
                  onChange={(e) => setAppointmentForm({...appointmentForm, message: e.target.value})}
                  placeholder="Расскажите о ваших пожеланиях или особенностях..."
                  rows={3}
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на прием
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Services;