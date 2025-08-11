import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Icon from "@/components/ui/icon";

const Delivery = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState<any>(null);
  const [selectedZone, setSelectedZone] = useState('moscow');

  const deliveryOptions = [
    {
      id: 'courier',
      name: 'Курьерская доставка',
      description: 'Доставка курьером до двери',
      price: 'от 300 ₽',
      time: '1-2 дня',
      icon: 'Truck',
      features: [
        'Доставка до двери',
        'Примерка перед оплатой',
        'Оплата при получении',
        'SMS уведомления'
      ],
      zones: {
        moscow: { price: 300, time: '1 день' },
        region: { price: 500, time: '2-3 дня' },
        russia: { price: 800, time: '3-7 дней' }
      }
    },
    {
      id: 'pickup',
      name: 'Самовывоз',
      description: 'Получение в салоне оптики',
      price: 'Бесплатно',
      time: 'В день заказа',
      icon: 'MapPin',
      features: [
        'Бесплатно',
        'Примерка в салоне',
        'Консультация специалиста',
        'Подгонка очков'
      ],
      zones: {
        moscow: { price: 0, time: 'В день заказа' },
        region: { price: 0, time: 'В день заказа' },
        russia: { price: 0, time: 'В день заказа' }
      }
    },
    {
      id: 'express',
      name: 'Экспресс-доставка',
      description: 'Быстрая доставка в день заказа',
      price: 'от 800 ₽',
      time: '2-4 часа',
      icon: 'Zap',
      features: [
        'Доставка в день заказа',
        'Выбор времени доставки',
        'SMS и звонок курьера',
        'Приоритетная обработка'
      ],
      zones: {
        moscow: { price: 800, time: '2-4 часа' },
        region: { price: 1200, time: '4-6 часов' },
        russia: { price: 0, time: 'Недоступно' }
      }
    },
    {
      id: 'post',
      name: 'Почта России',
      description: 'Доставка почтой до отделения',
      price: 'от 200 ₽',
      time: '5-14 дней',
      icon: 'Mail',
      features: [
        'Низкая стоимость',
        'Доставка по всей России',
        'Получение в отделении',
        'Страхование посылки'
      ],
      zones: {
        moscow: { price: 200, time: '3-5 дней' },
        region: { price: 250, time: '5-10 дней' },
        russia: { price: 300, time: '7-14 дней' }
      }
    }
  ];

  const deliveryZones = [
    { id: 'moscow', name: 'Москва и МО', description: 'В пределах МКАД и ближайшее Подмосковье' },
    { id: 'region', name: 'Центральный регион', description: 'Центральный федеральный округ' },
    { id: 'russia', name: 'Вся Россия', description: 'Доставка по всей территории РФ' }
  ];

  const trackingSteps = [
    { status: 'ordered', title: 'Заказ оформлен', description: 'Ваш заказ принят в обработку' },
    { status: 'processing', title: 'Обработка', description: 'Заказ передан в производство' },
    { status: 'ready', title: 'Готов к отправке', description: 'Заказ готов и упакован' },
    { status: 'shipped', title: 'Отправлен', description: 'Заказ передан курьерской службе' },
    { status: 'delivered', title: 'Доставлен', description: 'Заказ успешно доставлен' }
  ];

  const handleTracking = () => {
    // Симуляция отслеживания заказа
    if (trackingNumber.length >= 8) {
      setTrackingResult({
        found: true,
        orderNumber: trackingNumber,
        status: 'shipped',
        currentStep: 3,
        estimatedDelivery: '2024-06-20',
        courier: 'Иван Петров',
        courierPhone: '+7 (999) 123-45-67',
        address: 'г. Москва, ул. Пушкина, д. 10, кв. 5',
        items: ['Очки Ray-Ban Aviator', 'Футляр для очков']
      });
    } else {
      setTrackingResult({
        found: false,
        message: 'Заказ с таким номером не найден'
      });
    }
  };

  const faqItems = [
    {
      question: 'Можно ли примерить очки перед оплатой?',
      answer: 'Да, при курьерской доставке вы можете примерить очки перед оплатой. Если очки не подошли, курьер заберет их обратно без оплаты.'
    },
    {
      question: 'Что делать, если очки не подошли?',
      answer: 'В течение 14 дней вы можете вернуть очки. При курьерской доставке - сразу курьеру, при самовывозе - в любом салоне сети.'
    },
    {
      question: 'Как изменить адрес доставки?',
      answer: 'Адрес можно изменить до момента отправки заказа. Свяжитесь с нами по телефону +7 (495) 123-45-67 или напишите на email.'
    },
    {
      question: 'Доставляете ли в выходные?',
      answer: 'Да, курьерская доставка работает 7 дней в неделю с 10:00 до 20:00. Экспресс-доставка доступна с 9:00 до 22:00.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Доставка и получение</h1>
          <p className="text-xl text-gray-600">Удобные способы получения ваших очков</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="delivery-options" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="delivery-options">Способы доставки</TabsTrigger>
            <TabsTrigger value="tracking">Отследить заказ</TabsTrigger>
            <TabsTrigger value="faq">Вопросы</TabsTrigger>
          </TabsList>

          {/* Delivery Options */}
          <TabsContent value="delivery-options" className="mt-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Выберите зону доставки</h2>
              <div className="flex flex-wrap gap-2">
                {deliveryZones.map(zone => (
                  <Button
                    key={zone.id}
                    variant={selectedZone === zone.id ? "default" : "outline"}
                    onClick={() => setSelectedZone(zone.id)}
                  >
                    {zone.name}
                  </Button>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-2">
                {deliveryZones.find(z => z.id === selectedZone)?.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {deliveryOptions.map((option) => {
                const zoneInfo = option.zones[selectedZone as keyof typeof option.zones];
                const isAvailable = zoneInfo.price !== 0 || option.id === 'pickup';
                
                return (
                  <Card 
                    key={option.id} 
                    className={`relative ${!isAvailable ? 'opacity-50' : 'hover:shadow-lg transition-shadow'}`}
                  >
                    {!isAvailable && (
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary">Недоступно</Badge>
                      </div>
                    )}
                    
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name={option.icon as any} size={32} className="text-primary" />
                      </div>
                      <CardTitle className="text-lg">{option.name}</CardTitle>
                      <CardDescription>{option.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="text-center mb-4">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {zoneInfo.price === 0 ? 'Бесплатно' : `${zoneInfo.price} ₽`}
                        </div>
                        <div className="text-sm text-gray-600">
                          {zoneInfo.time}
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        {option.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <Icon name="Check" size={14} className="mr-2 text-green-500" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      <Button 
                        className="w-full" 
                        disabled={!isAvailable}
                        variant={!isAvailable ? "secondary" : "default"}
                      >
                        {isAvailable ? 'Выбрать' : 'Недоступно'}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Shield" size={20} className="mr-2 text-primary" />
                    Гарантии доставки
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Icon name="Package" size={16} className="mr-3 mt-1 text-green-500" />
                      <div>
                        <p className="font-medium">Безопасная упаковка</p>
                        <p className="text-sm text-gray-600">Специальные футляры и защитная упаковка</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Shield" size={16} className="mr-3 mt-1 text-green-500" />
                      <div>
                        <p className="font-medium">Страхование</p>
                        <p className="text-sm text-gray-600">Все заказы застрахованы на полную стоимость</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Icon name="RotateCcw" size={16} className="mr-3 mt-1 text-green-500" />
                      <div>
                        <p className="font-medium">Возврат</p>
                        <p className="text-sm text-gray-600">14 дней на возврат без объяснения причин</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Clock" size={20} className="mr-2 text-primary" />
                    Время работы доставки
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Курьерская доставка</span>
                      <span className="text-sm font-medium">10:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Экспресс-доставка</span>
                      <span className="text-sm font-medium">9:00 - 22:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Самовывоз</span>
                      <span className="text-sm font-medium">10:00 - 21:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Выходные дни</span>
                      <span className="text-sm font-medium">10:00 - 20:00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Order Tracking */}
          <TabsContent value="tracking" className="mt-8">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Отследить заказ</CardTitle>
                  <CardDescription>
                    Введите номер заказа для отслеживания статуса доставки
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Номер заказа
                      </label>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Например: ORD-2024-001234"
                          value={trackingNumber}
                          onChange={(e) => setTrackingNumber(e.target.value)}
                          className="flex-1"
                        />
                        <Button onClick={handleTracking}>
                          <Icon name="Search" size={16} className="mr-2" />
                          Отследить
                        </Button>
                      </div>
                    </div>

                    {trackingResult && (
                      <div className="mt-6">
                        {trackingResult.found ? (
                          <Card className="bg-blue-50 border-blue-200">
                            <CardHeader>
                              <CardTitle className="text-blue-800 flex items-center">
                                <Icon name="Package" size={20} className="mr-2" />
                                Заказ #{trackingResult.orderNumber}
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-4">
                                {/* Progress */}
                                <div className="relative">
                                  <div className="flex justify-between">
                                    {trackingSteps.map((step, index) => (
                                      <div key={index} className="flex flex-col items-center relative">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                          index <= trackingResult.currentStep 
                                            ? 'bg-primary text-white' 
                                            : 'bg-gray-200 text-gray-500'
                                        }`}>
                                          {index <= trackingResult.currentStep ? (
                                            <Icon name="Check" size={16} />
                                          ) : (
                                            <span className="text-xs">{index + 1}</span>
                                          )}
                                        </div>
                                        {index < trackingSteps.length - 1 && (
                                          <div className={`absolute top-4 left-4 w-full h-0.5 ${
                                            index < trackingResult.currentStep 
                                              ? 'bg-primary' 
                                              : 'bg-gray-200'
                                          }`} style={{ width: 'calc(100% + 2rem)' }}></div>
                                        )}
                                        <div className="mt-2 text-center">
                                          <p className="text-xs font-medium">{step.title}</p>
                                          <p className="text-xs text-gray-500">{step.description}</p>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Order Details */}
                                <div className="grid md:grid-cols-2 gap-4 pt-4 border-t">
                                  <div>
                                    <p className="text-sm text-gray-600">Ожидаемая доставка:</p>
                                    <p className="font-semibold">{trackingResult.estimatedDelivery}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-gray-600">Адрес доставки:</p>
                                    <p className="font-semibold text-sm">{trackingResult.address}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-gray-600">Курьер:</p>
                                    <p className="font-semibold">{trackingResult.courier}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-gray-600">Телефон курьера:</p>
                                    <p className="font-semibold">{trackingResult.courierPhone}</p>
                                  </div>
                                </div>

                                <div>
                                  <p className="text-sm text-gray-600 mb-2">Состав заказа:</p>
                                  <ul className="space-y-1">
                                    {trackingResult.items.map((item: string, index: number) => (
                                      <li key={index} className="text-sm flex items-center">
                                        <Icon name="Package" size={14} className="mr-2 text-primary" />
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="flex gap-2">
                                  <Button className="flex-1">
                                    <Icon name="Phone" size={16} className="mr-2" />
                                    Связаться с курьером
                                  </Button>
                                  <Button variant="outline" className="flex-1">
                                    <Icon name="MapPin" size={16} className="mr-2" />
                                    Изменить адрес
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ) : (
                          <Alert className="border-red-200 bg-red-50">
                            <Icon name="AlertCircle" size={16} className="text-red-600" />
                            <AlertDescription className="text-red-800">
                              {trackingResult.message}
                            </AlertDescription>
                          </Alert>
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Как найти номер заказа?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Mail" size={20} className="text-primary mt-1" />
                      <div>
                        <p className="font-medium">Email подтверждение</p>
                        <p className="text-sm text-gray-600">
                          Номер указан в письме о подтверждении заказа
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Smartphone" size={20} className="text-primary mt-1" />
                      <div>
                        <p className="font-medium">SMS уведомление</p>
                        <p className="text-sm text-gray-600">
                          Приходит сразу после оформления заказа
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Receipt" size={20} className="text-primary mt-1" />
                      <div>
                        <p className="font-medium">Чек</p>
                        <p className="text-sm text-gray-600">
                          Указан в верхней части чека
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Phone" size={20} className="text-primary mt-1" />
                      <div>
                        <p className="font-medium">Звонок в салон</p>
                        <p className="text-sm text-gray-600">
                          Можем найти по номеру телефона
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* FAQ */}
          <TabsContent value="faq" className="mt-8">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-start">
                        <Icon name="HelpCircle" size={20} className="mr-3 text-primary mt-1" />
                        {item.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed ml-8">
                        {item.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-8 bg-primary text-white">
                <CardContent className="text-center py-8">
                  <Icon name="Headphones" size={48} className="mx-auto mb-4 opacity-80" />
                  <h3 className="text-xl font-bold mb-2">Нужна помощь с доставкой?</h3>
                  <p className="mb-6 opacity-90">
                    Наша служба поддержки поможет с любыми вопросами по доставке
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="secondary">
                      <Icon name="Phone" size={16} className="mr-2" />
                      +7 (495) 123-45-67
                    </Button>
                    <Button variant="outline" className="text-white border-white/30 hover:bg-white/10">
                      <Icon name="MessageCircle" size={16} className="mr-2" />
                      Онлайн-чат
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Delivery;