import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Icon from "@/components/ui/icon";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [appointmentForm, setAppointmentForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    birthDate: '',
    message: '',
    isFirstVisit: true,
    hasInsurance: false,
    insuranceCompany: '',
    preferredContact: 'phone'
  });

  const services = [
    {
      id: 'eye-exam',
      name: 'Диагностика зрения',
      duration: '45 мин',
      price: 'от 1 500 ₽',
      description: 'Комплексное обследование зрения',
      available: true
    },
    {
      id: 'frame-selection',
      name: 'Подбор оправы',
      duration: '30 мин',
      price: 'Бесплатно',
      description: 'Индивидуальный подбор оправы',
      available: true
    },
    {
      id: 'lens-fitting',
      name: 'Изготовление линз',
      duration: '60 мин',
      price: 'от 2 900 ₽',
      description: 'Изготовление линз любой сложности',
      available: true
    },
    {
      id: 'contact-lenses',
      name: 'Подбор контактных линз',
      duration: '60 мин',
      price: 'от 1 200 ₽',
      description: 'Подбор и обучение использованию',
      available: true
    },
    {
      id: 'repair',
      name: 'Ремонт очков',
      duration: '20 мин',
      price: 'от 500 ₽',
      description: 'Профессиональный ремонт',
      available: true
    },
    {
      id: 'consultation',
      name: 'Консультация врача',
      duration: '30 мин',
      price: 'от 800 ₽',
      description: 'Консультация офтальмолога',
      available: false
    }
  ];

  const doctors = [
    {
      id: 'petrov',
      name: 'Анна Петрова',
      specialization: 'Врач-офтальмолог',
      experience: '15 лет',
      rating: 4.9,
      photo: '/placeholder.svg',
      schedule: {
        monday: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'],
        tuesday: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'],
        wednesday: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'],
        thursday: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'],
        friday: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'],
        saturday: ['10:00', '11:00', '12:00', '13:00'],
        sunday: []
      }
    },
    {
      id: 'sidorov',
      name: 'Михаил Сидоров',
      specialization: 'Врач-оптометрист',
      experience: '12 лет',
      rating: 4.8,
      photo: '/placeholder.svg',
      schedule: {
        monday: ['10:00', '11:00', '12:00', '15:00', '16:00', '17:00'],
        tuesday: ['10:00', '11:00', '12:00', '15:00', '16:00', '17:00'],
        wednesday: ['10:00', '11:00', '12:00', '15:00', '16:00', '17:00'],
        thursday: ['10:00', '11:00', '12:00', '15:00', '16:00', '17:00'],
        friday: ['10:00', '11:00', '12:00', '15:00', '16:00', '17:00'],
        saturday: ['11:00', '12:00', '13:00', '14:00'],
        sunday: []
      }
    },
    {
      id: 'kozlova',
      name: 'Елена Козлова',
      specialization: 'Консультант-оптик',
      experience: '8 лет',
      rating: 4.7,
      photo: '/placeholder.svg',
      schedule: {
        monday: ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'],
        tuesday: ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'],
        wednesday: ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'],
        thursday: ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'],
        friday: ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'],
        saturday: ['10:00', '11:00', '12:00', '13:00', '14:00'],
        sunday: []
      }
    }
  ];

  const locations = [
    {
      id: 'center',
      name: 'Центральный салон',
      address: 'ул. Тверская, 15',
      metro: 'м. Тверская',
      phone: '+7 (495) 123-45-67',
      workingHours: 'Пн-Пт: 10:00-21:00, Сб-Вс: 10:00-20:00'
    },
    {
      id: 'south',
      name: 'Южный салон',
      address: 'ул. Профсоюзная, 78',
      metro: 'м. Новые Черемушки',
      phone: '+7 (495) 234-56-78',
      workingHours: 'Пн-Пт: 10:00-21:00, Сб-Вс: 10:00-20:00'
    },
    {
      id: 'east',
      name: 'Восточный салон',
      address: 'ш. Энтузиастов, 45',
      metro: 'м. Шоссе Энтузиастов',
      phone: '+7 (495) 345-67-89',
      workingHours: 'Пн-Пт: 10:00-21:00, Сб-Вс: 10:00-20:00'
    }
  ];

  const getAvailableTimeSlots = () => {
    if (!selectedDate || !selectedDoctor) return [];
    
    const doctor = doctors.find(d => d.id === selectedDoctor);
    if (!doctor) return [];

    const dayName = selectedDate.toLocaleDateString('en-US', { weekday: 'lowercase' });
    return doctor.schedule[dayName as keyof typeof doctor.schedule] || [];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Appointment submitted:', {
      ...appointmentForm,
      service: selectedService,
      doctor: selectedDoctor,
      location: selectedLocation,
      date: selectedDate,
      time: selectedTime
    });
    // Здесь будет логика отправки формы
  };

  const isFormValid = () => {
    return appointmentForm.firstName &&
           appointmentForm.lastName &&
           appointmentForm.phone &&
           appointmentForm.email &&
           selectedService &&
           selectedDoctor &&
           selectedLocation &&
           selectedDate &&
           selectedTime;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Записаться на прием</h1>
          <p className="text-xl text-gray-600">Выберите удобное время для посещения</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="service" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="service">1. Услуга</TabsTrigger>
              <TabsTrigger value="doctor">2. Специалист</TabsTrigger>
              <TabsTrigger value="datetime">3. Дата и время</TabsTrigger>
              <TabsTrigger value="location">4. Салон</TabsTrigger>
              <TabsTrigger value="details">5. Данные</TabsTrigger>
            </TabsList>

            {/* Step 1: Service Selection */}
            <TabsContent value="service" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Выберите услугу</CardTitle>
                  <CardDescription>
                    Выберите нужную вам услугу из списка доступных
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service) => (
                      <Card 
                        key={service.id}
                        className={`cursor-pointer transition-all duration-200 ${
                          selectedService === service.id 
                            ? 'ring-2 ring-primary bg-primary/5' 
                            : 'hover:shadow-md'
                        } ${!service.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={() => service.available && setSelectedService(service.id)}
                      >
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">{service.name}</CardTitle>
                            {!service.available && (
                              <Badge variant="secondary">Недоступно</Badge>
                            )}
                          </div>
                          <CardDescription>{service.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Icon name="Clock" size={16} className="text-gray-500" />
                              <span className="text-sm text-gray-600">{service.duration}</span>
                            </div>
                            <Badge variant="outline">{service.price}</Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Step 2: Doctor Selection */}
            <TabsContent value="doctor" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Выберите специалиста</CardTitle>
                  <CardDescription>
                    Выберите врача или специалиста для проведения процедуры
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {doctors.map((doctor) => (
                      <Card 
                        key={doctor.id}
                        className={`cursor-pointer transition-all duration-200 ${
                          selectedDoctor === doctor.id 
                            ? 'ring-2 ring-primary bg-primary/5' 
                            : 'hover:shadow-md'
                        }`}
                        onClick={() => setSelectedDoctor(doctor.id)}
                      >
                        <CardHeader className="text-center">
                          <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <Icon name="User" size={32} className="text-gray-400" />
                          </div>
                          <CardTitle className="text-lg">{doctor.name}</CardTitle>
                          <CardDescription>{doctor.specialization}</CardDescription>
                        </CardHeader>
                        <CardContent className="text-center">
                          <div className="space-y-2">
                            <div className="flex items-center justify-center gap-2">
                              <Icon name="Award" size={16} className="text-primary" />
                              <span className="text-sm">Опыт: {doctor.experience}</span>
                            </div>
                            <div className="flex items-center justify-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Icon
                                  key={i}
                                  name="Star"
                                  size={14}
                                  className={`${
                                    i < Math.floor(doctor.rating)
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                              <span className="text-sm text-gray-600 ml-1">
                                {doctor.rating}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Step 3: Date and Time */}
            <TabsContent value="datetime" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Выберите дату</CardTitle>
                    <CardDescription>
                      Выберите удобную дату для посещения
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date() || date.getDay() === 0}
                      className="rounded-md border"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Выберите время</CardTitle>
                    <CardDescription>
                      Доступные временные слоты на выбранную дату
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {selectedDate && selectedDoctor ? (
                      <div className="grid grid-cols-3 gap-2">
                        {getAvailableTimeSlots().map((time) => (
                          <Button
                            key={time}
                            variant={selectedTime === time ? "default" : "outline"}
                            onClick={() => setSelectedTime(time)}
                            className="h-12"
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    ) : (
                      <Alert>
                        <Icon name="Info" size={16} />
                        <AlertDescription>
                          Сначала выберите специалиста и дату
                        </AlertDescription>
                      </Alert>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Step 4: Location */}
            <TabsContent value="location" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Выберите салон</CardTitle>
                  <CardDescription>
                    Выберите удобный для вас салон оптики
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    {locations.map((location) => (
                      <Card 
                        key={location.id}
                        className={`cursor-pointer transition-all duration-200 ${
                          selectedLocation === location.id 
                            ? 'ring-2 ring-primary bg-primary/5' 
                            : 'hover:shadow-md'
                        }`}
                        onClick={() => setSelectedLocation(location.id)}
                      >
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center">
                            <Icon name="MapPin" size={20} className="mr-2 text-primary" />
                            {location.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2 text-sm">
                            <p className="font-medium">{location.address}</p>
                            <p className="text-gray-600">{location.metro}</p>
                            <p className="text-gray-600">{location.phone}</p>
                            <p className="text-xs text-gray-500">{location.workingHours}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Step 5: Personal Details */}
            <TabsContent value="details" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Ваши данные</CardTitle>
                  <CardDescription>
                    Заполните форму для завершения записи
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Имя *</label>
                        <Input
                          required
                          value={appointmentForm.firstName}
                          onChange={(e) => setAppointmentForm({...appointmentForm, firstName: e.target.value})}
                          placeholder="Ваше имя"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Фамилия *</label>
                        <Input
                          required
                          value={appointmentForm.lastName}
                          onChange={(e) => setAppointmentForm({...appointmentForm, lastName: e.target.value})}
                          placeholder="Ваша фамилия"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
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
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email *</label>
                        <Input
                          required
                          type="email"
                          value={appointmentForm.email}
                          onChange={(e) => setAppointmentForm({...appointmentForm, email: e.target.value})}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Дата рождения</label>
                      <Input
                        type="date"
                        value={appointmentForm.birthDate}
                        onChange={(e) => setAppointmentForm({...appointmentForm, birthDate: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Предпочтительный способ связи</label>
                      <Select 
                        value={appointmentForm.preferredContact} 
                        onValueChange={(value) => setAppointmentForm({...appointmentForm, preferredContact: value})}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="phone">Телефон</SelectItem>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="sms">SMS</SelectItem>
                        </SelectContent>
                      </Select>
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

                    {/* Summary */}
                    <Card className="bg-gray-50">
                      <CardHeader>
                        <CardTitle className="text-lg">Сводка записи</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p><strong>Услуга:</strong> {services.find(s => s.id === selectedService)?.name || 'Не выбрано'}</p>
                            <p><strong>Специалист:</strong> {doctors.find(d => d.id === selectedDoctor)?.name || 'Не выбран'}</p>
                            <p><strong>Салон:</strong> {locations.find(l => l.id === selectedLocation)?.name || 'Не выбран'}</p>
                          </div>
                          <div>
                            <p><strong>Дата:</strong> {selectedDate?.toLocaleDateString('ru-RU') || 'Не выбрана'}</p>
                            <p><strong>Время:</strong> {selectedTime || 'Не выбрано'}</p>
                            <p><strong>Стоимость:</strong> {services.find(s => s.id === selectedService)?.price || '-'}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={!isFormValid()}
                    >
                      <Icon name="Calendar" size={20} className="mr-2" />
                      Подтвердить запись
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Appointment;