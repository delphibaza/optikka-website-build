import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";

const ProgressiveLenses = () => {
  const [adaptationDay, setAdaptationDay] = useState(1);
  const [selectedLensType, setSelectedLensType] = useState('standard');

  const lensTypes = [
    {
      id: 'standard',
      name: 'Стандартные прогрессивные',
      price: 'от 8 000 ₽',
      description: 'Базовый вариант прогрессивных линз',
      features: [
        'Три зоны зрения',
        'Плавный переход',
        'Подходят для большинства случаев'
      ],
      adaptationTime: '1-2 недели',
      fieldOfView: 'Стандартное',
      distortions: 'Минимальные по краям'
    },
    {
      id: 'premium',
      name: 'Премиум прогрессивные',
      price: 'от 15 000 ₽',
      description: 'Улучшенный дизайн с расширенными зонами',
      features: [
        'Широкие зоны зрения',
        'Минимальные искажения',
        'Быстрая адаптация'
      ],
      adaptationTime: '3-7 дней',
      fieldOfView: 'Расширенное',
      distortions: 'Практически отсутствуют'
    },
    {
      id: 'individual',
      name: 'Индивидуальные',
      price: 'от 25 000 ₽',
      description: 'Изготовлены по индивидуальным параметрам',
      features: [
        'Персональный дизайн',
        'Максимальный комфорт',
        'Учет всех параметров глаза'
      ],
      adaptationTime: '1-3 дня',
      fieldOfView: 'Максимальное',
      distortions: 'Отсутствуют'
    },
    {
      id: 'office',
      name: 'Офисные прогрессивные',
      price: 'от 12 000 ₽',
      description: 'Специально для работы за компьютером',
      features: [
        'Оптимизированы для близи и средних расстояний',
        'Защита от синего света',
        'Снижение усталости глаз'
      ],
      adaptationTime: '3-5 дней',
      fieldOfView: 'Оптимизированное для работы',
      distortions: 'Минимальные'
    }
  ];

  const adaptationTips = [
    {
      day: 1,
      title: 'Первый день',
      tips: [
        'Носите очки дома в спокойной обстановке',
        'Избегайте вождения и активных движений',
        'Поворачивайте голову, а не только глаза',
        'Время ношения: 2-3 часа'
      ],
      commonIssues: ['Легкое головокружение', 'Искажения по краям']
    },
    {
      day: 3,
      title: 'Третий день',
      tips: [
        'Увеличьте время ношения до 4-6 часов',
        'Попробуйте читать и работать за компьютером',
        'Практикуйте движения глаз в разных зонах',
        'Начните выходить на улицу в очках'
      ],
      commonIssues: ['Небольшая усталость глаз', 'Необходимость концентрации']
    },
    {
      day: 7,
      title: 'Неделя',
      tips: [
        'Носите очки весь день',
        'Попробуйте вождение в дневное время',
        'Занимайтесь обычными делами',
        'Обратитесь к врачу при дискомфорте'
      ],
      commonIssues: ['Периодические искажения', 'Поиск оптимальной зоны']
    },
    {
      day: 14,
      title: 'Две недели',
      tips: [
        'Полное использование всех зон',
        'Вождение в любое время суток',
        'Спортивные активности',
        'Оценка результата адаптации'
      ],
      commonIssues: ['Редкие неудобства', 'Практически полная адаптация']
    }
  ];

  const comparisonData = [
    {
      feature: 'Зоны зрения',
      bifocal: '2 зоны (резкий переход)',
      progressive: '3+ зон (плавный переход)',
      advantage: 'progressive'
    },
    {
      feature: 'Внешний вид',
      bifocal: 'Видимая линия раздела',
      progressive: 'Незаметны для окружающих',
      advantage: 'progressive'
    },
    {
      feature: 'Адаптация',
      bifocal: 'Быстрая (1-3 дня)',
      progressive: 'Требует времени (1-2 недели)',
      advantage: 'bifocal'
    },
    {
      feature: 'Стоимость',
      bifocal: 'Ниже',
      progressive: 'Выше',
      advantage: 'bifocal'
    },
    {
      feature: 'Комфорт',
      bifocal: 'Ограниченный',
      progressive: 'Максимальный после адаптации',
      advantage: 'progressive'
    }
  ];

  const getCurrentAdaptationTip = () => {
    if (adaptationDay <= 1) return adaptationTips[0];
    if (adaptationDay <= 3) return adaptationTips[1];
    if (adaptationDay <= 7) return adaptationTips[2];
    return adaptationTips[3];
  };

  const currentTip = getCurrentAdaptationTip();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-4">Прогрессивные линзы</h1>
          <p className="text-xl opacity-90">Четкое зрение на всех расстояниях</p>
          <div className="mt-6 flex items-center gap-4">
            <Badge className="bg-white/20 text-white border-white/30">
              <Icon name="Eye" size={16} className="mr-2" />
              Без видимых переходов
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30">
              <Icon name="Zap" size={16} className="mr-2" />
              Современные технологии
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Обзор</TabsTrigger>
            <TabsTrigger value="types">Типы линз</TabsTrigger>
            <TabsTrigger value="comparison">Сравнение</TabsTrigger>
            <TabsTrigger value="adaptation">Адаптация</TabsTrigger>
            <TabsTrigger value="consultation">Консультация</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="mt-8">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Что такое прогрессивные линзы?</CardTitle>
                  <CardDescription>
                    Современное решение для коррекции пресбиопии
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Принцип работы</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Прогрессивные линзы содержат несколько оптических зон с плавным переходом между ними. 
                        Верхняя часть предназначена для дали, средняя - для промежуточных расстояний, 
                        нижняя - для близи.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                          <span className="text-sm">Зона дали (верх)</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                          <span className="text-sm">Промежуточная зона (середина)</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-purple-500 rounded-full mr-3"></div>
                          <span className="text-sm">Зона близи (низ)</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Преимущества</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Icon name="Check" size={16} className="mr-2 mt-1 text-green-500" />
                          <div>
                            <p className="font-medium text-sm">Естественное зрение</p>
                            <p className="text-xs text-gray-600">Плавный переход между зонами</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" size={16} className="mr-2 mt-1 text-green-500" />
                          <div>
                            <p className="font-medium text-sm">Эстетичность</p>
                            <p className="text-xs text-gray-600">Нет видимых линий раздела</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" size={16} className="mr-2 mt-1 text-green-500" />
                          <div>
                            <p className="font-medium text-sm">Удобство</p>
                            <p className="text-xs text-gray-600">Одни очки для всех расстояний</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" size={16} className="mr-2 mt-1 text-green-500" />
                          <div>
                            <p className="font-medium text-sm">Активный образ жизни</p>
                            <p className="text-xs text-gray-600">Подходят для любых активностей</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Icon name="Users" size={32} className="text-blue-600" />
                    </div>
                    <CardTitle>Кому подходят?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Icon name="Check" size={14} className="mr-2 text-green-500" />
                        Возраст 40+ лет
                      </li>
                      <li className="flex items-center">
                        <Icon name="Check" size={14} className="mr-2 text-green-500" />
                        Пресбиопия
                      </li>
                      <li className="flex items-center">
                        <Icon name="Check" size={14} className="mr-2 text-green-500" />
                        Активный образ жизни
                      </li>
                      <li className="flex items-center">
                        <Icon name="Check" size={14} className="mr-2 text-green-500" />
                        Работа с компьютером
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Icon name="AlertTriangle" size={32} className="text-yellow-600" />
                    </div>
                    <CardTitle>Особенности</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Icon name="Clock" size={14} className="mr-2 text-yellow-500" />
                        Период адаптации
                      </li>
                      <li className="flex items-center">
                        <Icon name="Eye" size={14} className="mr-2 text-yellow-500" />
                        Движения головой
                      </li>
                      <li className="flex items-center">
                        <Icon name="Target" size={14} className="mr-2 text-yellow-500" />
                        Поиск нужной зоны
                      </li>
                      <li className="flex items-center">
                        <Icon name="DollarSign" size={14} className="mr-2 text-yellow-500" />
                        Высокая стоимость
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Icon name="X" size={32} className="text-red-600" />
                    </div>
                    <CardTitle>Противопоказания</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Icon name="X" size={14} className="mr-2 text-red-500" />
                        Большая разница в диоптриях
                      </li>
                      <li className="flex items-center">
                        <Icon name="X" size={14} className="mr-2 text-red-500" />
                        Проблемы с вестибулярным аппаратом
                      </li>
                      <li className="flex items-center">
                        <Icon name="X" size={14} className="mr-2 text-red-500" />
                        Невозможность адаптации
                      </li>
                      <li className="flex items-center">
                        <Icon name="X" size={14} className="mr-2 text-red-500" />
                        Профессиональные ограничения
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Types */}
          <TabsContent value="types" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {lensTypes.map((type) => (
                <Card 
                  key={type.id} 
                  className={`cursor-pointer transition-all duration-200 ${
                    selectedLensType === type.id 
                      ? 'ring-2 ring-primary bg-primary/5' 
                      : 'hover:shadow-lg'
                  }`}
                  onClick={() => setSelectedLensType(type.id)}
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Circle" size={32} className="text-primary" />
                    </div>
                    <CardTitle className="text-lg">{type.name}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-center">
                        <Badge className="bg-primary text-white">{type.price}</Badge>
                      </div>

                      <div>
                        <p className="text-xs font-medium text-gray-500 mb-1">Особенности:</p>
                        <ul className="space-y-1">
                          {type.features.map((feature, index) => (
                            <li key={index} className="text-xs flex items-center">
                              <Icon name="Dot" size={12} className="mr-1 text-primary" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <p className="font-medium text-gray-500">Адаптация:</p>
                          <p className="text-gray-600">{type.adaptationTime}</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-500">Поле зрения:</p>
                          <p className="text-gray-600">{type.fieldOfView}</p>
                        </div>
                      </div>

                      <Button className="w-full" size="sm">
                        Подробнее
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-center">Технологии изготовления</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Icon name="Cpu" size={32} className="text-blue-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Цифровое проектирование</h4>
                    <p className="text-sm text-gray-600">
                      Компьютерное моделирование оптимальной геометрии линзы
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Icon name="Settings" size={32} className="text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Точная обработка</h4>
                    <p className="text-sm text-gray-600">
                      Высокоточное оборудование для создания плавных переходов
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Icon name="User" size={32} className="text-purple-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Индивидуализация</h4>
                    <p className="text-sm text-gray-600">
                      Учет индивидуальных параметров глаза и образа жизни
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Comparison */}
          <TabsContent value="comparison" className="mt-8">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Прогрессивные vs Бифокальные линзы</CardTitle>
                  <CardDescription>
                    Сравнение двух типов мультифокальных линз
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Характеристика</th>
                          <th className="text-center py-3 px-4">Бифокальные</th>
                          <th className="text-center py-3 px-4">Прогрессивные</th>
                          <th className="text-center py-3 px-4">Лучше</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonData.map((row, index) => (
                          <tr key={index} className="border-b">
                            <td className="py-3 px-4 font-medium">{row.feature}</td>
                            <td className="py-3 px-4 text-center text-sm">{row.bifocal}</td>
                            <td className="py-3 px-4 text-center text-sm">{row.progressive}</td>
                            <td className="py-3 px-4 text-center">
                              <Icon 
                                name={row.advantage === 'progressive' ? 'TrendingUp' : 'TrendingDown'} 
                                size={16} 
                                className={`mx-auto ${
                                  row.advantage === 'progressive' ? 'text-green-500' : 'text-blue-500'
                                }`} 
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <Card className="bg-green-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-green-800">Прогрессивные линзы</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm text-green-700 font-medium">Лучший выбор если:</p>
                      <ul className="space-y-1 text-sm text-green-600">
                        <li>• Активный образ жизни</li>
                        <li>• Важна эстетика</li>
                        <li>• Готовы к периоду адаптации</li>
                        <li>• Работаете за компьютером</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-blue-800">Бифокальные линзы</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm text-blue-700 font-medium">Лучший выбор если:</p>
                      <ul className="space-y-1 text-sm text-blue-600">
                        <li>• Ограниченный бюджет</li>
                        <li>• Нужна быстрая адаптация</li>
                        <li>• Простые зрительные задачи</li>
                        <li>• Первый опыт мультифокальных линз</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Adaptation Guide */}
          <TabsContent value="adaptation" className="mt-8">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Гид по адаптации</CardTitle>
                  <CardDescription>
                    Пошаговая инструкция для успешного привыкания к прогрессивным линзам
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span>День адаптации:</span>
                      <span className="font-semibold">{adaptationDay}</span>
                    </div>
                    <Slider
                      value={[adaptationDay]}
                      onValueChange={(value) => setAdaptationDay(value[0])}
                      max={14}
                      min={1}
                      step={1}
                      className="mb-4"
                    />
                  </div>

                  <Card className="bg-blue-50 border-blue-200">
                    <CardHeader>
                      <CardTitle className="text-blue-800">{currentTip.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2 text-green-700">Рекомендации:</h4>
                          <ul className="space-y-1">
                            {currentTip.tips.map((tip, index) => (
                              <li key={index} className="text-sm flex items-start">
                                <Icon name="Check" size={14} className="mr-2 mt-0.5 text-green-500" />
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-yellow-700">Возможные ощущения:</h4>
                          <ul className="space-y-1">
                            {currentTip.commonIssues.map((issue, index) => (
                              <li key={index} className="text-sm flex items-start">
                                <Icon name="Info" size={14} className="mr-2 mt-0.5 text-yellow-500" />
                                {issue}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Lightbulb" size={20} className="mr-2 text-yellow-500" />
                      Советы для быстрой адаптации
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Icon name="Eye" size={16} className="mr-2 mt-1 text-blue-500" />
                        <div>
                          <p className="font-medium text-sm">Движения головой</p>
                          <p className="text-xs text-gray-600">Поворачивайте голову, а не только глаза</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Target" size={16} className="mr-2 mt-1 text-blue-500" />
                        <div>
                          <p className="font-medium text-sm">Найдите центр зон</p>
                          <p className="text-xs text-gray-600">Практикуйтесь в поиске оптимальных зон</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Clock" size={16} className="mr-2 mt-1 text-blue-500" />
                        <div>
                          <p className="font-medium text-sm">Постепенное увеличение</p>
                          <p className="text-xs text-gray-600">Увеличивайте время ношения постепенно</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Icon name="AlertCircle" size={16} className="mr-2 mt-1 text-blue-500" />
                        <div>
                          <p className="font-medium text-sm">Терпение</p>
                          <p className="text-xs text-gray-600">Полная адаптация может занять до месяца</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="AlertTriangle" size={20} className="mr-2 text-red-500" />
                      Когда обратиться к врачу
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Icon name="X" size={14} className="mr-2 text-red-500" />
                        Сильные головные боли более 3 дней
                      </li>
                      <li className="flex items-center">
                        <Icon name="X" size={14} className="mr-2 text-red-500" />
                        Тошнота или головокружение
                      </li>
                      <li className="flex items-center">
                        <Icon name="X" size={14} className="mr-2 text-red-500" />
                        Двоение в глазах
                      </li>
                      <li className="flex items-center">
                        <Icon name="X" size={14} className="mr-2 text-red-500" />
                        Невозможность адаптации через 2 недели
                      </li>
                      <li className="flex items-center">
                        <Icon name="X" size={14} className="mr-2 text-red-500" />
                        Ухудшение зрения
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Alert className="mt-6">
                <Icon name="Info" size={16} />
                <AlertDescription>
                  <strong>Важно:</strong> У нас действует программа гарантированной адаптации. 
                  Если в течение месяца вы не сможете привыкнуть к прогрессивным линзам, 
                  мы заменим их на другой тип бесплатно.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>

          {/* Consultation */}
          <TabsContent value="consultation" className="mt-8">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Консультация специалиста</CardTitle>
                  <CardDescription>
                    Профессиональный подбор прогрессивных линз
                  </CardDescription>
                </CardHeader>
              </Card>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Stethoscope" size={20} className="mr-2 text-primary" />
                      Что включает консультация
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Icon name="Eye" size={16} className="mr-2 mt-1 text-blue-500" />
                        <div>
                          <p className="font-medium text-sm">Полная диагностика зрения</p>
                          <p className="text-xs text-gray-600">Проверка остроты зрения, рефракции, аккомодации</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Ruler" size={16} className="mr-2 mt-1 text-blue-500" />
                        <div>
                          <p className="font-medium text-sm">Измерение параметров</p>
                          <p className="text-xs text-gray-600">Межзрачковое расстояние, высота посадки, угол наклона</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Icon name="MessageCircle" size={16} className="mr-2 mt-1 text-blue-500" />
                        <div>
                          <p className="font-medium text-sm">Анализ потребностей</p>
                          <p className="text-xs text-gray-600">Обсуждение образа жизни и зрительных задач</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Settings" size={16} className="mr-2 mt-1 text-blue-500" />
                        <div>
                          <p className="font-medium text-sm">Подбор типа линз</p>
                          <p className="text-xs text-gray-600">Выбор оптимального дизайна и материала</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Calendar" size={20} className="mr-2 text-primary" />
                      Этапы работы
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                        <div>
                          <p className="font-medium text-sm">Первичная консультация</p>
                          <p className="text-xs text-gray-600">45-60 минут</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                        <div>
                          <p className="font-medium text-sm">Изготовление линз</p>
                          <p className="text-xs text-gray-600">1-3 дня</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                        <div>
                          <p className="font-medium text-sm">Выдача и обучение</p>
                          <p className="text-xs text-gray-600">30 минут</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                        <div>
                          <p className="font-medium text-sm">Контрольные осмотры</p>
                          <p className="text-xs text-gray-600">Через 1 неделю, 1 месяц</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
                <CardContent className="text-center py-8">
                  <Icon name="UserCheck" size={48} className="text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Готовы попробовать прогрессивные линзы?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Запишитесь на консультацию к нашему специалисту по прогрессивным линзам
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg">
                      <Icon name="Calendar" size={20} className="mr-2" />
                      Записаться на консультацию
                    </Button>
                    <Button size="lg" variant="outline">
                      <Icon name="Phone" size={20} className="mr-2" />
                      Задать вопрос специалисту
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

export default ProgressiveLenses;