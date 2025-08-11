import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Icon from "@/components/ui/icon";

const Repair = () => {
  const [repairForm, setRepairForm] = useState({
    name: '',
    phone: '',
    email: '',
    problemType: '',
    description: '',
    urgency: 'normal',
    brand: '',
    model: ''
  });

  const repairServices = [
    {
      id: 'screw-replacement',
      name: 'Замена винтов',
      description: 'Замена сломанных или потерянных винтов',
      price: 'от 200 ₽',
      time: '5-10 мин',
      complexity: 'low',
      icon: 'Wrench',
      warranty: '3 месяца',
      materials: ['Винты из нержавеющей стали', 'Специальный инструмент']
    },
    {
      id: 'nose-pads',
      name: 'Замена носоупоров',
      description: 'Замена изношенных или поврежденных носоупоров',
      price: 'от 300 ₽',
      time: '10-15 мин',
      complexity: 'low',
      icon: 'Circle',
      warranty: '6 месяцев',
      materials: ['Силиконовые носоупоры', 'Металлические крепления']
    },
    {
      id: 'temple-repair',
      name: 'Ремонт дужек',
      description: 'Восстановление сломанных или поврежденных дужек',
      price: 'от 800 ₽',
      time: '30-60 мин',
      complexity: 'medium',
      icon: 'Settings',
      warranty: '6 месяцев',
      materials: ['Запасные дужки', 'Клей для оптики', 'Крепежные элементы']
    },
    {
      id: 'frame-welding',
      name: 'Пайка оправы',
      description: 'Восстановление металлических оправ методом пайки',
      price: 'от 1200 ₽',
      time: '1-2 часа',
      complexity: 'high',
      icon: 'Flame',
      warranty: '12 месяцев',
      materials: ['Припой', 'Флюс', 'Полировочные материалы']
    },
    {
      id: 'lens-replacement',
      name: 'Замена линз',
      description: 'Установка новых линз в существующую оправу',
      price: 'от 2000 ₽',
      time: '30-60 мин',
      complexity: 'medium',
      icon: 'RefreshCw',
      warranty: '6 месяцев',
      materials: ['Новые линзы', 'Крепежные элементы']
    },
    {
      id: 'adjustment',
      name: 'Регулировка посадки',
      description: 'Подгонка очков для комфортной посадки',
      price: 'Бесплатно',
      time: '10-20 мин',
      complexity: 'low',
      icon: 'Move',
      warranty: '1 месяц',
      materials: ['Специальные инструменты']
    },
    {
      id: 'cleaning',
      name: 'Профессиональная чистка',
      description: 'Ультразвуковая чистка и полировка',
      price: 'от 300 ₽',
      time: '15-20 мин',
      complexity: 'low',
      icon: 'Sparkles',
      warranty: '-',
      materials: ['Ультразвуковая ванна', 'Специальные растворы']
    },
    {
      id: 'scratch-removal',
      name: 'Удаление царапин',
      description: 'Полировка мелких царапин на линзах',
      price: 'от 600 ₽',
      time: '20-30 мин',
      complexity: 'medium',
      icon: 'Eraser',
      warranty: '3 месяца',
      materials: ['Полировочные пасты', 'Специальное оборудование']
    }
  ];

  const repairProcess = [
    {
      step: 1,
      title: 'Диагностика',
      description: 'Осмотр очков и определение объема работ',
      icon: 'Search'
    },
    {
      step: 2,
      title: 'Оценка стоимости',
      description: 'Расчет стоимости ремонта и согласование',
      icon: 'Calculator'
    },
    {
      step: 3,
      title: 'Ремонт',
      description: 'Выполнение ремонтных работ',
      icon: 'Wrench'
    },
    {
      step: 4,
      title: 'Контроль качества',
      description: 'Проверка качества выполненных работ',
      icon: 'CheckCircle'
    },
    {
      step: 5,
      title: 'Выдача',
      description: 'Получение отремонтированных очков',
      icon: 'Package'
    }
  ];

  const commonProblems = [
    {
      problem: 'Сломанный винт',
      solution: 'Замена винта',
      prevention: 'Регулярная проверка креплений',
      cost: '200-300 ₽',
      urgency: 'medium'
    },
    {
      problem: 'Погнутая оправа',
      solution: 'Восстановление формы',
      prevention: 'Аккуратное обращение',
      cost: '500-1000 ₽',
      urgency: 'low'
    },
    {
      problem: 'Царапины на линзах',
      solution: 'Полировка или замена',
      prevention: 'Использование футляра',
      cost: '600-2000 ₽',
      urgency: 'medium'
    },
    {
      problem: 'Сломанная дужка',
      solution: 'Ремонт или замена',
      prevention: 'Осторожное снятие/надевание',
      cost: '800-1500 ₽',
      urgency: 'high'
    }
  ];

  const handleRepairSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Repair request submitted:', repairForm);
    // Здесь будет логика отправки заявки на ремонт
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'low': return 'green';
      case 'medium': return 'yellow';
      case 'high': return 'red';
      default: return 'gray';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-4">Ремонт очков</h1>
          <p className="text-xl opacity-90">Профессиональное восстановление ваших очков</p>
          <div className="mt-6 flex items-center gap-4">
            <Badge className="bg-white/20 text-white border-white/30">
              <Icon name="Wrench" size={16} className="mr-2" />
              Быстрый ремонт
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30">
              <Icon name="Shield" size={16} className="mr-2" />
              Гарантия качества
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="services" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="services">Услуги ремонта</TabsTrigger>
            <TabsTrigger value="request">Заявка на ремонт</TabsTrigger>
            <TabsTrigger value="process">Процесс ремонта</TabsTrigger>
            <TabsTrigger value="prevention">Профилактика</TabsTrigger>
          </TabsList>

          {/* Repair Services */}
          <TabsContent value="services" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {repairServices.map((service) => (
                <Card key={service.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 bg-${getComplexityColor(service.complexity)}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon name={service.icon as any} size={32} className={`text-${getComplexityColor(service.complexity)}-600`} />
                    </div>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Стоимость:</span>
                        <Badge variant="outline">{service.price}</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Время:</span>
                        <Badge variant="secondary" className="text-xs">{service.time}</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Сложность:</span>
                        <Badge 
                          className={`bg-${getComplexityColor(service.complexity)}-100 text-${getComplexityColor(service.complexity)}-800 text-xs`}
                        >
                          {service.complexity === 'low' ? 'Простая' :
                           service.complexity === 'medium' ? 'Средняя' : 'Сложная'}
                        </Badge>
                      </div>
                      {service.warranty !== '-' && (
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Гарантия:</span>
                          <Badge className="bg-green-100 text-green-800 text-xs">
                            {service.warranty}
                          </Badge>
                        </div>
                      )}
                    </div>

                    <div className="mb-4">
                      <p className="text-xs font-medium text-gray-500 mb-1">Материалы:</p>
                      <div className="flex flex-wrap gap-1">
                        {service.materials.slice(0, 2).map((material, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {material}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full">Заказать ремонт</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-center">Экспресс-диагностика</CardTitle>
                <CardDescription className="text-center">
                  Быстрая оценка состояния ваших очков
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  {commonProblems.map((item, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">{item.problem}</h4>
                      <p className="text-sm text-gray-600 mb-2">{item.solution}</p>
                      <Badge 
                        variant={
                          item.urgency === 'high' ? 'destructive' :
                          item.urgency === 'medium' ? 'secondary' : 'outline'
                        }
                        className="text-xs mb-2"
                      >
                        {item.cost}
                      </Badge>
                      <p className="text-xs text-gray-500">{item.prevention}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Repair Request */}
          <TabsContent value="request" className="mt-8">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Заявка на ремонт</CardTitle>
                  <CardDescription>
                    Опишите проблему с вашими очками
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRepairSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Имя *</label>
                        <Input
                          required
                          value={repairForm.name}
                          onChange={(e) => setRepairForm({...repairForm, name: e.target.value})}
                          placeholder="Ваше имя"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Телефон *</label>
                        <Input
                          required
                          type="tel"
                          value={repairForm.phone}
                          onChange={(e) => setRepairForm({...repairForm, phone: e.target.value})}
                          placeholder="+7 (999) 123-45-67"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input
                        type="email"
                        value={repairForm.email}
                        onChange={(e) => setRepairForm({...repairForm, email: e.target.value})}
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Бренд очков</label>
                        <Input
                          value={repairForm.brand}
                          onChange={(e) => setRepairForm({...repairForm, brand: e.target.value})}
                          placeholder="Ray-Ban, Oakley и т.д."
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Модель</label>
                        <Input
                          value={repairForm.model}
                          onChange={(e) => setRepairForm({...repairForm, model: e.target.value})}
                          placeholder="Aviator, Wayfarer и т.д."
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Тип проблемы *</label>
                      <Select 
                        required
                        value={repairForm.problemType} 
                        onValueChange={(value) => setRepairForm({...repairForm, problemType: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тип проблемы" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="screw">Сломанный/потерянный винт</SelectItem>
                          <SelectItem value="nose-pad">Проблемы с носоупорами</SelectItem>
                          <SelectItem value="temple">Сломанная дужка</SelectItem>
                          <SelectItem value="frame">Поврежденная оправа</SelectItem>
                          <SelectItem value="lens">Проблемы с линзами</SelectItem>
                          <SelectItem value="adjustment">Неудобная посадка</SelectItem>
                          <SelectItem value="other">Другое</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Срочность</label>
                      <Select 
                        value={repairForm.urgency} 
                        onValueChange={(value) => setRepairForm({...repairForm, urgency: value})}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Не срочно (3-5 дней)</SelectItem>
                          <SelectItem value="normal">Обычно (1-2 дня)</SelectItem>
                          <SelectItem value="urgent">Срочно (в день обращения)</SelectItem>
                          <SelectItem value="express">Экспресс (в течение часа)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Описание проблемы *</label>
                      <Textarea
                        required
                        value={repairForm.description}
                        onChange={(e) => setRepairForm({...repairForm, description: e.target.value})}
                        placeholder="Подробно опишите, что случилось с очками..."
                        rows={4}
                      />
                    </div>

                    <Alert>
                      <Icon name="Info" size={16} />
                      <AlertDescription>
                        После отправки заявки мы свяжемся с вами в течение 30 минут для уточнения деталей и записи на удобное время.
                      </AlertDescription>
                    </Alert>

                    <Button type="submit" className="w-full" size="lg">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку на ремонт
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Repair Process */}
          <TabsContent value="process" className="mt-8">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Как проходит ремонт</CardTitle>
                  <CardDescription>
                    Пошаговый процесс восстановления ваших очков
                  </CardDescription>
                </CardHeader>
              </Card>

              <div className="grid md:grid-cols-5 gap-4 mb-8">
                {repairProcess.map((step, index) => (
                  <Card key={index} className="text-center relative">
                    {index < repairProcess.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-primary/30 transform -translate-y-1/2"></div>
                    )}
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Icon name={step.icon as any} size={20} className="text-primary" />
                      </div>
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold text-xs">{step.step}</span>
                      </div>
                      <CardTitle className="text-sm">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs text-gray-600">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Clock" size={20} className="mr-2 text-primary" />
                      Сроки выполнения
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Простой ремонт</span>
                        <Badge variant="outline">15-30 мин</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Средней сложности</span>
                        <Badge variant="outline">1-2 часа</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Сложный ремонт</span>
                        <Badge variant="outline">1-3 дня</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Заказ деталей</span>
                        <Badge variant="outline">3-7 дней</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="DollarSign" size={20} className="mr-2 text-primary" />
                      Стоимость услуг
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Диагностика</span>
                        <Badge className="bg-green-500">Бесплатно</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Мелкий ремонт</span>
                        <Badge variant="outline">200-500 ₽</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Средний ремонт</span>
                        <Badge variant="outline">500-1500 ₽</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Сложный ремонт</span>
                        <Badge variant="outline">1500-3000 ₽</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-center">Гарантии на ремонт</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Icon name="Shield" size={32} className="text-green-600" />
                      </div>
                      <h4 className="font-semibold mb-2">Гарантия качества</h4>
                      <p className="text-sm text-gray-600">
                        От 3 до 12 месяцев в зависимости от типа ремонта
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Icon name="RotateCcw" size={32} className="text-blue-600" />
                      </div>
                      <h4 className="font-semibold mb-2">Переделка</h4>
                      <p className="text-sm text-gray-600">
                        Бесплатная переделка при неудовлетворительном результате
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Icon name="Headphones" size={32} className="text-purple-600" />
                      </div>
                      <h4 className="font-semibold mb-2">Поддержка</h4>
                      <p className="text-sm text-gray-600">
                        Консультации по уходу и эксплуатации после ремонта
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Prevention */}
          <TabsContent value="prevention" className="mt-8">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Профилактика поломок</CardTitle>
                  <CardDescription>
                    Как продлить срок службы ваших очков
                  </CardDescription>
                </CardHeader>
              </Card>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Home" size={20} className="mr-2 text-green-500" />
                      Правильное хранение
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Icon name="Check" size={14} className="mr-2 text-green-500" />
                        Всегда используйте футляр
                      </li>
                      <li className="flex items-center">
                        <Icon name="Check" size={14} className="mr-2 text-green-500" />
                        Кладите линзами вверх
                      </li>
                      <li className="flex items-center">
                        <Icon name="Check" size={14} className="mr-2 text-green-500" />
                        Избегайте высоких температур
                      </li>
                      <li className="flex items-center">
                        <Icon name="Check" size={14} className="mr-2 text-green-500" />
                        Храните в сухом месте
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Droplets" size={20} className="mr-2 text-blue-500" />
                      Правильная чистка
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Icon name="Check" size={14} className="mr-2 text-green-500" />
                        Используйте микрофибру
                      </li>
                      <li className="flex items-center">
                        <Icon name="Check" size={14} className="mr-2 text-green-500" />
                        Специальные спреи для оптики
                      </li>
                      <li className="flex items-center">
                        <Icon name="X" size={14} className="mr-2 text-red-500" />
                        Не используйте бумажные салфетки
                      </li>
                      <li className="flex items-center">
                        <Icon name="X" size={14} className="mr-2 text-red-500" />
                        Избегайте агрессивных средств
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Hand" size={20} className="mr-2 text-purple-500" />
                      Аккуратное обращение
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Icon name="Check" size={14} className="mr-2 text-green-500" />
                        Снимайте двумя руками
                      </li>
                      <li className="flex items-center">
                        <Icon name="Check" size={14} className="mr-2 text-green-500" />
                        Регулярная проверка винтов
                      </li>
                      <li className="flex items-center">
                        <Icon name="X" size={14} className="mr-2 text-red-500" />
                        Не кладите на голову
                      </li>
                      <li className="flex items-center">
                        <Icon name="X" size={14} className="mr-2 text-red-500" />
                        Избегайте падений
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Признаки необходимости ремонта</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-red-600">Срочный ремонт:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <Icon name="AlertTriangle" size={14} className="mr-2 text-red-500" />
                          Сломанная оправа
                        </li>
                        <li className="flex items-center">
                          <Icon name="AlertTriangle" size={14} className="mr-2 text-red-500" />
                          Выпавшая линза
                        </li>
                        <li className="flex items-center">
                          <Icon name="AlertTriangle" size={14} className="mr-2 text-red-500" />
                          Острые края
                        </li>
                        <li className="flex items-center">
                          <Icon name="AlertTriangle" size={14} className="mr-2 text-red-500" />
                          Невозможность носить
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-yellow-600">Плановый ремонт:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <Icon name="Clock" size={14} className="mr-2 text-yellow-500" />
                          Ослабленные винты
                        </li>
                        <li className="flex items-center">
                          <Icon name="Clock" size={14} className="mr-2 text-yellow-500" />
                          Изношенные носоупоры
                        </li>
                        <li className="flex items-center">
                          <Icon name="Clock" size={14} className="mr-2 text-yellow-500" />
                          Мелкие царапины
                        </li>
                        <li className="flex items-center">
                          <Icon name="Clock" size={14} className="mr-2 text-yellow-500" />
                          Неудобная посадка
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
                <CardContent className="text-center py-8">
                  <Icon name="Wrench" size={48} className="text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Нужен ремонт очков?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Принесите ваши очки на бесплатную диагностику
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg">
                      <Icon name="MapPin" size={20} className="mr-2" />
                      Найти ближайший салон
                    </Button>
                    <Button size="lg" variant="outline">
                      <Icon name="Phone" size={20} className="mr-2" />
                      Вызвать мастера
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

export default Repair;