import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";

const ComputerGlasses = () => {
  const [screenTime, setScreenTime] = useState(8);
  const [eyeStrainLevel, setEyeStrainLevel] = useState(5);
  const [selectedFilter, setSelectedFilter] = useState('blue-light');

  const computerGlasses = [
    {
      id: 1,
      name: 'Blue Light Pro',
      type: 'Защита от синего света',
      price: 6990,
      features: [
        'Блокировка 90% синего света',
        'Антибликовое покрытие',
        'Легкая оправа',
        'Стильный дизайн'
      ],
      blueLight: 90,
      antiGlare: true,
      tint: 'Легкий желтый',
      rating: 4.7,
      reviews: 234
    },
    {
      id: 2,
      name: 'Office Comfort',
      type: 'Офисные линзы',
      price: 8990,
      features: [
        'Оптимизация для 40-80 см',
        'Снижение напряжения',
        'Улучшенная контрастность',
        'Защита от бликов'
      ],
      blueLight: 70,
      antiGlare: true,
      tint: 'Прозрачный',
      rating: 4.8,
      reviews: 189
    },
    {
      id: 3,
      name: 'Gaming Elite',
      type: 'Для геймеров',
      price: 9990,
      features: [
        'Максимальная защита',
        'Улучшение контрастности',
        'Снижение усталости',
        'Специальное покрытие'
      ],
      blueLight: 95,
      antiGlare: true,
      tint: 'Янтарный',
      rating: 4.9,
      reviews: 156
    },
    {
      id: 4,
      name: 'Clear Vision',
      type: 'Прозрачные фильтры',
      price: 5990,
      features: [
        'Незаметная защита',
        'Естественные цвета',
        'Легкая адаптация',
        'Универсальное использование'
      ],
      blueLight: 60,
      antiGlare: true,
      tint: 'Прозрачный',
      rating: 4.5,
      reviews: 298
    }
  ];

  const symptoms = [
    {
      name: 'Сухость глаз',
      description: 'Ощущение песка в глазах, жжение',
      severity: 'high',
      icon: 'Droplets'
    },
    {
      name: 'Усталость глаз',
      description: 'Быстрая утомляемость при работе',
      severity: 'high',
      icon: 'Eye'
    },
    {
      name: 'Головные боли',
      description: 'Боли в области лба и висков',
      severity: 'medium',
      icon: 'Brain'
    },
    {
      name: 'Размытость зрения',
      description: 'Нечеткость после длительной работы',
      severity: 'medium',
      icon: 'Focus'
    },
    {
      name: 'Покраснение глаз',
      description: 'Раздражение и покраснение',
      severity: 'low',
      icon: 'AlertCircle'
    },
    {
      name: 'Нарушения сна',
      description: 'Проблемы с засыпанием',
      severity: 'low',
      icon: 'Moon'
    }
  ];

  const workplaceRules = [
    {
      rule: '20-20-20',
      title: 'Правило 20-20-20',
      description: 'Каждые 20 минут смотрите на объект в 20 футах (6 метров) в течение 20 секунд',
      icon: 'Clock'
    },
    {
      rule: 'lighting',
      title: 'Правильное освещение',
      description: 'Избегайте бликов на экране, используйте дополнительное освещение',
      icon: 'Lightbulb'
    },
    {
      rule: 'distance',
      title: 'Расстояние до экрана',
      description: 'Оптимальное расстояние 50-70 см, экран на уровне глаз или чуть ниже',
      icon: 'Monitor'
    },
    {
      rule: 'blinking',
      title: 'Частое моргание',
      description: 'Сознательно моргайте чаще для увлажнения глаз',
      icon: 'Eye'
    },
    {
      rule: 'breaks',
      title: 'Регулярные перерывы',
      description: 'Делайте 15-минутный перерыв каждые 2 часа работы',
      icon: 'Coffee'
    },
    {
      rule: 'posture',
      title: 'Правильная осанка',
      description: 'Держите спину прямо, ноги на полу, руки параллельно полу',
      icon: 'User'
    }
  ];

  const blueLight = [
    {
      source: 'Солнце',
      percentage: 25,
      description: 'Естественный источник синего света',
      harmful: false
    },
    {
      source: 'LED-экраны',
      percentage: 35,
      description: 'Мониторы, телевизоры, смартфоны',
      harmful: true
    },
    {
      source: 'Флуоресцентные лампы',
      percentage: 25,
      description: 'Офисное освещение',
      harmful: true
    },
    {
      source: 'Светодиодные лампы',
      percentage: 15,
      description: 'Домашнее LED-освещение',
      harmful: false
    }
  ];

  const getRiskLevel = () => {
    const riskScore = (screenTime * 0.3) + (eyeStrainLevel * 0.7);
    if (riskScore >= 8) return { level: 'Высокий', color: 'red', recommendation: 'Срочно нужны компьютерные очки' };
    if (riskScore >= 6) return { level: 'Средний', color: 'yellow', recommendation: 'Рекомендуются компьютерные очки' };
    if (riskScore >= 4) return { level: 'Низкий', color: 'blue', recommendation: 'Профилактические меры' };
    return { level: 'Минимальный', color: 'green', recommendation: 'Соблюдайте гигиену зрения' };
  };

  const riskAssessment = getRiskLevel();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-4">Компьютерные очки</h1>
          <p className="text-xl opacity-90">Защита глаз в цифровую эпоху</p>
          <div className="mt-6 flex items-center gap-4">
            <Badge className="bg-white/20 text-white border-white/30">
              <Icon name="Monitor" size={16} className="mr-2" />
              Защита от синего света
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30">
              <Icon name="Shield" size={16} className="mr-2" />
              Снижение усталости
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="assessment" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="assessment">Оценка риска</TabsTrigger>
            <TabsTrigger value="products">Продукты</TabsTrigger>
            <TabsTrigger value="blue-light">Синий свет</TabsTrigger>
            <TabsTrigger value="workplace">Рабочее место</TabsTrigger>
            <TabsTrigger value="symptoms">Симптомы</TabsTrigger>
          </TabsList>

          {/* Risk Assessment */}
          <TabsContent value="assessment" className="mt-8">
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Оценка риска для зрения</CardTitle>
                  <CardDescription>
                    Определите, нужны ли вам компьютерные очки
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Сколько часов в день вы проводите за экранами? {screenTime} часов
                      </label>
                      <Slider
                        value={[screenTime]}
                        onValueChange={(value) => setScreenTime(value[0])}
                        max={16}
                        min={0}
                        step={1}
                        className="mb-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>0 часов</span>
                        <span>8 часов</span>
                        <span>16 часов</span>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Уровень усталости глаз (1-10): {eyeStrainLevel}
                      </label>
                      <Slider
                        value={[eyeStrainLevel]}
                        onValueChange={(value) => setEyeStrainLevel(value[0])}
                        max={10}
                        min={1}
                        step={1}
                        className="mb-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Нет усталости</span>
                        <span>Умеренная</span>
                        <span>Сильная усталость</span>
                      </div>
                    </div>

                    <Card className={`bg-${riskAssessment.color}-50 border-${riskAssessment.color}-200`}>
                      <CardContent className="text-center py-6">
                        <div className={`text-3xl font-bold text-${riskAssessment.color}-600 mb-2`}>
                          {riskAssessment.level} риск
                        </div>
                        <p className={`text-${riskAssessment.color}-700 mb-4`}>
                          {riskAssessment.recommendation}
                        </p>
                        <Progress 
                          value={(screenTime * 0.3 + eyeStrainLevel * 0.7) * 10} 
                          className="mb-4"
                        />
                        <Button>
                          <Icon name="Calendar" size={16} className="mr-2" />
                          Записаться на консультацию
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Products */}
          <TabsContent value="products" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {computerGlasses.map((glasses) => (
                <Card key={glasses.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg mb-4 flex items-center justify-center relative">
                      <Icon name="Monitor" size={48} className="text-blue-500" />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-blue-500 text-xs">
                          {glasses.blueLight}%
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{glasses.name}</CardTitle>
                    <CardDescription>{glasses.type}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Фильтрация:</span>
                        <Badge variant="outline">{glasses.blueLight}%</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Оттенок:</span>
                        <span className="font-medium">{glasses.tint}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Антиблик:</span>
                        <Icon 
                          name={glasses.antiGlare ? "Check" : "X"} 
                          size={16} 
                          className={glasses.antiGlare ? "text-green-500" : "text-red-500"} 
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {glasses.features.slice(0, 2).map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            size={14}
                            className={`${
                              i < Math.floor(glasses.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">
                        {glasses.rating} ({glasses.reviews})
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">
                        {glasses.price.toLocaleString()} ₽
                      </span>
                      <Button size="sm">
                        <Icon name="ShoppingCart" size={16} className="mr-2" />
                        В корзину
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-center">Сравнение типов фильтров</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Характеристика</th>
                        <th className="text-center py-2">Синий свет</th>
                        <th className="text-center py-2">Офисные</th>
                        <th className="text-center py-2">Геймерские</th>
                        <th className="text-center py-2">Прозрачные</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2">Фильтрация синего света</td>
                        <td className="text-center py-2">90%</td>
                        <td className="text-center py-2">70%</td>
                        <td className="text-center py-2">95%</td>
                        <td className="text-center py-2">60%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Изменение цветов</td>
                        <td className="text-center py-2">Легкое</td>
                        <td className="text-center py-2">Минимальное</td>
                        <td className="text-center py-2">Заметное</td>
                        <td className="text-center py-2">Отсутствует</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Время адаптации</td>
                        <td className="text-center py-2">1-2 дня</td>
                        <td className="text-center py-2">Сразу</td>
                        <td className="text-center py-2">2-3 дня</td>
                        <td className="text-center py-2">Сразу</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Blue Light Information */}
          <TabsContent value="blue-light" className="mt-8">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Синий свет и его влияние</CardTitle>
                  <CardDescription>
                    Понимание воздействия синего света на зрение и здоровье
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-blue-600">Что такое синий свет?</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Синий свет - это часть видимого спектра с длиной волны 380-500 нм. 
                        Он обладает высокой энергией и может проникать глубоко в глаз, 
                        достигая сетчатки.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Энергия</span>
                          <Badge className="bg-red-100 text-red-800">Высокая</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Проникновение</span>
                          <Badge className="bg-orange-100 text-orange-800">Глубокое</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Влияние на сон</span>
                          <Badge className="bg-purple-100 text-purple-800">Сильное</Badge>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-red-600">Потенциальный вред</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Icon name="AlertTriangle" size={16} className="mr-2 mt-1 text-red-500" />
                          <div>
                            <p className="font-medium text-sm">Цифровая усталость глаз</p>
                            <p className="text-xs text-gray-600">Сухость, раздражение, усталость</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Moon" size={16} className="mr-2 mt-1 text-red-500" />
                          <div>
                            <p className="font-medium text-sm">Нарушение сна</p>
                            <p className="text-xs text-gray-600">Подавление выработки мелатонина</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Eye" size={16} className="mr-2 mt-1 text-red-500" />
                          <div>
                            <p className="font-medium text-sm">Повреждение сетчатки</p>
                            <p className="text-xs text-gray-600">Долгосрочные последствия</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Источники синего света в повседневной жизни</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {blueLight.map((source, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Icon 
                            name={source.harmful ? "AlertTriangle" : "Sun"} 
                            size={20} 
                            className={source.harmful ? "text-red-500" : "text-yellow-500"} 
                          />
                          <div>
                            <p className="font-medium">{source.source}</p>
                            <p className="text-sm text-gray-600">{source.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary">{source.percentage}%</div>
                          <Badge 
                            variant={source.harmful ? "destructive" : "secondary"}
                            className="text-xs"
                          >
                            {source.harmful ? "Вредный" : "Безопасный"}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Workplace Ergonomics */}
          <TabsContent value="workplace" className="mt-8">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Эргономика рабочего места</CardTitle>
                  <CardDescription>
                    Правильная организация рабочего места для здоровья глаз
                  </CardDescription>
                </CardHeader>
              </Card>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workplaceRules.map((rule, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name={rule.icon as any} size={32} className="text-primary" />
                      </div>
                      <CardTitle className="text-lg">{rule.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 text-center leading-relaxed">
                        {rule.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="text-center">Идеальная настройка монитора</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-2">50-70 см</div>
                      <p className="text-sm text-gray-600">Расстояние до экрана</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-2">15-20°</div>
                      <p className="text-sm text-gray-600">Угол наклона вниз</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-2">120 cd/m²</div>
                      <p className="text-sm text-gray-600">Яркость экрана</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-2">500 лк</div>
                      <p className="text-sm text-gray-600">Освещение помещения</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Symptoms */}
          <TabsContent value="symptoms" className="mt-8">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Симптомы цифровой усталости глаз</CardTitle>
                  <CardDescription>
                    Признаки того, что вашим глазам нужна защита
                  </CardDescription>
                </CardHeader>
              </Card>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {symptoms.map((symptom, index) => (
                  <Card key={index} className={`border-l-4 ${
                    symptom.severity === 'high' ? 'border-l-red-500' :
                    symptom.severity === 'medium' ? 'border-l-yellow-500' :
                    'border-l-blue-500'
                  }`}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          symptom.severity === 'high' ? 'bg-red-100' :
                          symptom.severity === 'medium' ? 'bg-yellow-100' :
                          'bg-blue-100'
                        }`}>
                          <Icon 
                            name={symptom.icon as any} 
                            size={20} 
                            className={
                              symptom.severity === 'high' ? 'text-red-600' :
                              symptom.severity === 'medium' ? 'text-yellow-600' :
                              'text-blue-600'
                            } 
                          />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{symptom.name}</CardTitle>
                          <Badge 
                            variant={
                              symptom.severity === 'high' ? 'destructive' :
                              symptom.severity === 'medium' ? 'secondary' :
                              'outline'
                            }
                            className="text-xs"
                          >
                            {symptom.severity === 'high' ? 'Серьезно' :
                             symptom.severity === 'medium' ? 'Умеренно' :
                             'Легко'}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{symptom.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Alert className="mb-6">
                <Icon name="Info" size={16} />
                <AlertDescription>
                  <strong>Важно:</strong> Если вы испытываете 3 или более симптомов регулярно, 
                  рекомендуется консультация офтальмолога и рассмотрение компьютерных очков.
                </AlertDescription>
              </Alert>

              <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                <CardContent className="text-center py-8">
                  <Icon name="Monitor" size={48} className="text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Защитите свои глаза уже сегодня
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Не ждите появления серьезных симптомов - профилактика лучше лечения
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg">
                      <Icon name="ShoppingCart" size={20} className="mr-2" />
                      Выбрать компьютерные очки
                    </Button>
                    <Button size="lg" variant="outline">
                      <Icon name="Calendar" size={20} className="mr-2" />
                      Консультация специалиста
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

export default ComputerGlasses;