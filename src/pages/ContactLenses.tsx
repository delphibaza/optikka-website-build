import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const ContactLenses = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedPeriod, setSelectedPeriod] = useState('all');
  const [calculatorData, setCalculatorData] = useState({
    dailyHours: 8,
    daysPerWeek: 5,
    lensType: 'daily',
    brand: 'acuvue'
  });

  const lensTypes = [
    {
      id: 'daily',
      name: 'Однодневные',
      description: 'Новая пара каждый день',
      price: 'от 1 200 ₽/месяц',
      icon: 'Calendar',
      pros: [
        'Максимальная гигиена',
        'Не нужен уход',
        'Удобно в поездках',
        'Подходят для редкого ношения'
      ],
      cons: [
        'Выше стоимость при ежедневном ношении',
        'Больше упаковки'
      ],
      recommended: 'Для начинающих и активного образа жизни'
    },
    {
      id: 'weekly',
      name: 'Недельные',
      description: 'Замена раз в неделю',
      price: 'от 800 ₽/месяц',
      icon: 'Calendar',
      pros: [
        'Экономичность',
        'Хорошее качество зрения',
        'Меньше упаковки'
      ],
      cons: [
        'Требуют ухода',
        'Риск инфекций при неправильном уходе'
      ],
      recommended: 'Для регулярного ношения'
    },
    {
      id: 'monthly',
      name: 'Месячные',
      description: 'Замена раз в месяц',
      price: 'от 600 ₽/месяц',
      icon: 'Calendar',
      pros: [
        'Самые экономичные',
        'Широкий выбор параметров',
        'Подходят для сложных рецептов'
      ],
      cons: [
        'Требуют тщательного ухода',
        'Накопление отложений'
      ],
      recommended: 'Для постоянного ношения'
    },
    {
      id: 'colored',
      name: 'Цветные',
      description: 'Для изменения цвета глаз',
      price: 'от 1 500 ₽/месяц',
      icon: 'Palette',
      pros: [
        'Изменение внешности',
        'Широкая палитра цветов',
        'С диоптриями и без'
      ],
      cons: [
        'Выше стоимость',
        'Могут влиять на цветовосприятие'
      ],
      recommended: 'Для особых случаев и экспериментов'
    }
  ];

  const brands = [
    {
      id: 'acuvue',
      name: 'Acuvue',
      country: 'США',
      description: 'Мировой лидер в производстве контактных линз',
      technologies: ['HydraLuxe', 'UV-блокировка', 'Lacreon'],
      priceRange: 'Средний',
      rating: 4.8
    },
    {
      id: 'biofinity',
      name: 'Biofinity',
      country: 'Канада',
      description: 'Силикон-гидрогелевые линзы высокого качества',
      technologies: ['Aquaform', 'Естественное увлажнение'],
      priceRange: 'Средний',
      rating: 4.7
    },
    {
      id: 'dailies',
      name: 'Dailies',
      country: 'Швейцария',
      description: 'Специализация на однодневных линзах',
      technologies: ['Water Gradient', 'Comfort'],
      priceRange: 'Высокий',
      rating: 4.6
    },
    {
      id: 'optix',
      name: 'Air Optix',
      country: 'США',
      description: 'Дышащие линзы для длительного ношения',
      technologies: ['SmartShield', 'Plasma Treatment'],
      priceRange: 'Средний',
      rating: 4.5
    }
  ];

  const careProducts = [
    {
      name: 'Раствор многофункциональный',
      brand: 'ReNu',
      price: 450,
      volume: '360 мл',
      description: 'Для очистки, дезинфекции и хранения'
    },
    {
      name: 'Капли увлажняющие',
      brand: 'Systane',
      price: 320,
      volume: '10 мл',
      description: 'Для комфорта при ношении линз'
    },
    {
      name: 'Контейнер для линз',
      brand: 'Universal',
      price: 150,
      volume: '-',
      description: 'Для безопасного хранения'
    },
    {
      name: 'Пинцет для линз',
      brand: 'Professional',
      price: 200,
      volume: '-',
      description: 'Для удобного обращения с линзами'
    }
  ];

  const calculateMonthlyCost = () => {
    const basePrices = {
      daily: { acuvue: 40, biofinity: 35, dailies: 45, optix: 38 },
      weekly: { acuvue: 25, biofinity: 22, dailies: 28, optix: 24 },
      monthly: { acuvue: 15, biofinity: 12, dailies: 18, optix: 14 }
    };

    const daysPerMonth = (calculatorData.daysPerWeek / 7) * 30;
    const basePrice = basePrices[calculatorData.lensType as keyof typeof basePrices][calculatorData.brand as keyof typeof basePrices.daily];
    
    let totalCost = 0;
    if (calculatorData.lensType === 'daily') {
      totalCost = basePrice * daysPerMonth;
    } else if (calculatorData.lensType === 'weekly') {
      totalCost = basePrice * 4;
    } else {
      totalCost = basePrice * 2; // 2 линзы в месяц
    }

    return Math.round(totalCost);
  };

  const fittingSteps = [
    {
      step: 1,
      title: 'Консультация',
      description: 'Обсуждение потребностей и образа жизни',
      duration: '10 мин',
      icon: 'MessageCircle'
    },
    {
      step: 2,
      title: 'Измерения',
      description: 'Измерение кривизны роговицы и диаметра',
      duration: '15 мин',
      icon: 'Ruler'
    },
    {
      step: 3,
      title: 'Подбор',
      description: 'Примерка пробных линз разных типов',
      duration: '20 мин',
      icon: 'Eye'
    },
    {
      step: 4,
      title: 'Обучение',
      description: 'Обучение надеванию, снятию и уходу',
      duration: '15 мин',
      icon: 'GraduationCap'
    },
    {
      step: 5,
      title: 'Контроль',
      description: 'Проверка посадки и комфорта',
      duration: '10 мин',
      icon: 'CheckCircle'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-4">Контактные линзы</h1>
          <p className="text-xl opacity-90">Свобода движений и четкое зрение</p>
          <div className="mt-6 flex items-center gap-4">
            <Badge className="bg-white/20 text-white border-white/30">
              <Icon name="Eye" size={16} className="mr-2" />
              Профессиональный подбор
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30">
              <Icon name="Shield" size={16} className="mr-2" />
              Гарантия комфорта
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="types" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="types">Типы линз</TabsTrigger>
            <TabsTrigger value="brands">Бренды</TabsTrigger>
            <TabsTrigger value="calculator">Калькулятор</TabsTrigger>
            <TabsTrigger value="fitting">Подбор</TabsTrigger>
            <TabsTrigger value="care">Уход</TabsTrigger>
          </TabsList>

          {/* Types of Lenses */}
          <TabsContent value="types" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {lensTypes.map((type) => (
                <Card key={type.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={type.icon as any} size={32} className="text-primary" />
                    </div>
                    <CardTitle className="text-xl">{type.name}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <Badge className="bg-primary text-white">{type.price}</Badge>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div>
                        <h4 className="font-semibold text-green-700 text-sm mb-1">Преимущества:</h4>
                        <ul className="space-y-1">
                          {type.pros.map((pro, index) => (
                            <li key={index} className="text-xs flex items-center">
                              <Icon name="Plus" size={12} className="mr-1 text-green-500" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-red-700 text-sm mb-1">Недостатки:</h4>
                        <ul className="space-y-1">
                          {type.cons.map((con, index) => (
                            <li key={index} className="text-xs flex items-center">
                              <Icon name="Minus" size={12} className="mr-1 text-red-500" />
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-xs text-gray-600 mb-3">{type.recommended}</p>
                      <Button className="w-full">Подробнее</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-center">Сравнение типов линз</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Характеристика</th>
                        <th className="text-center py-2">Однодневные</th>
                        <th className="text-center py-2">Недельные</th>
                        <th className="text-center py-2">Месячные</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2">Гигиена</td>
                        <td className="text-center py-2">
                          <Icon name="Check" size={16} className="text-green-500 mx-auto" />
                        </td>
                        <td className="text-center py-2">
                          <Icon name="Minus" size={16} className="text-yellow-500 mx-auto" />
                        </td>
                        <td className="text-center py-2">
                          <Icon name="X" size={16} className="text-red-500 mx-auto" />
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Экономичность</td>
                        <td className="text-center py-2">
                          <Icon name="X" size={16} className="text-red-500 mx-auto" />
                        </td>
                        <td className="text-center py-2">
                          <Icon name="Minus" size={16} className="text-yellow-500 mx-auto" />
                        </td>
                        <td className="text-center py-2">
                          <Icon name="Check" size={16} className="text-green-500 mx-auto" />
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Удобство</td>
                        <td className="text-center py-2">
                          <Icon name="Check" size={16} className="text-green-500 mx-auto" />
                        </td>
                        <td className="text-center py-2">
                          <Icon name="Minus" size={16} className="text-yellow-500 mx-auto" />
                        </td>
                        <td className="text-center py-2">
                          <Icon name="Minus" size={16} className="text-yellow-500 mx-auto" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Brands */}
          <TabsContent value="brands" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {brands.map((brand) => (
                <Card key={brand.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Icon name="Circle" size={32} className="text-gray-400" />
                    </div>
                    <CardTitle className="text-xl">{brand.name}</CardTitle>
                    <CardDescription>{brand.country}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-sm text-gray-600">{brand.description}</p>
                      
                      <div>
                        <p className="text-xs font-medium text-gray-500 mb-1">Технологии:</p>
                        <div className="flex flex-wrap gap-1">
                          {brand.technologies.map((tech, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Icon
                              key={i}
                              name="Star"
                              size={14}
                              className={`${
                                i < Math.floor(brand.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                          <span className="ml-1 text-sm text-gray-600">{brand.rating}</span>
                        </div>
                        <Badge variant="secondary">{brand.priceRange}</Badge>
                      </div>

                      <Button className="w-full">Смотреть модели</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Cost Calculator */}
          <TabsContent value="calculator" className="mt-8">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Калькулятор стоимости</CardTitle>
                  <CardDescription>
                    Рассчитайте месячную стоимость контактных линз
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Часов в день: {calculatorData.dailyHours}
                        </label>
                        <Slider
                          value={[calculatorData.dailyHours]}
                          onValueChange={(value) => setCalculatorData({...calculatorData, dailyHours: value[0]})}
                          max={16}
                          min={1}
                          step={1}
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Дней в неделю: {calculatorData.daysPerWeek}
                        </label>
                        <Slider
                          value={[calculatorData.daysPerWeek]}
                          onValueChange={(value) => setCalculatorData({...calculatorData, daysPerWeek: value[0]})}
                          max={7}
                          min={1}
                          step={1}
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Тип линз</label>
                        <Select 
                          value={calculatorData.lensType} 
                          onValueChange={(value) => setCalculatorData({...calculatorData, lensType: value})}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="daily">Однодневные</SelectItem>
                            <SelectItem value="weekly">Недельные</SelectItem>
                            <SelectItem value="monthly">Месячные</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Бренд</label>
                        <Select 
                          value={calculatorData.brand} 
                          onValueChange={(value) => setCalculatorData({...calculatorData, brand: value})}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {brands.map(brand => (
                              <SelectItem key={brand.id} value={brand.id}>
                                {brand.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-center mb-4">Расчет стоимости</h3>
                      
                      <div className="space-y-4">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-primary mb-2">
                            {calculateMonthlyCost().toLocaleString()} ₽
                          </div>
                          <p className="text-gray-600">в месяц</p>
                        </div>

                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Использование:</span>
                            <span>{calculatorData.dailyHours}ч/день, {calculatorData.daysPerWeek} дней/неделю</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Тип:</span>
                            <span>{lensTypes.find(t => t.id === calculatorData.lensType)?.name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Бренд:</span>
                            <span>{brands.find(b => b.id === calculatorData.brand)?.name}</span>
                          </div>
                        </div>

                        <div className="pt-4 border-t">
                          <p className="text-xs text-gray-600 mb-3">
                            * Расчет приблизительный, не включает стоимость растворов и аксессуаров
                          </p>
                          <Button className="w-full">
                            <Icon name="Calendar" size={16} className="mr-2" />
                            Записаться на подбор
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Fitting Process */}
          <TabsContent value="fitting" className="mt-8">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Процесс подбора контактных линз</CardTitle>
                  <CardDescription>
                    Профессиональный подбор за 5 простых шагов
                  </CardDescription>
                </CardHeader>
              </Card>

              <div className="grid md:grid-cols-5 gap-4 mb-8">
                {fittingSteps.map((step, index) => (
                  <Card key={index} className="text-center relative">
                    {index < fittingSteps.length - 1 && (
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
                      <p className="text-xs text-gray-600 mb-2">{step.description}</p>
                      <Badge variant="outline" className="text-xs">{step.duration}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="AlertCircle" size={20} className="mr-2 text-yellow-500" />
                      Важные моменты
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Icon name="Clock" size={16} className="mr-2 mt-1 text-blue-500" />
                        <div>
                          <p className="font-medium text-sm">Период адаптации</p>
                          <p className="text-xs text-gray-600">1-2 недели для привыкания</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Eye" size={16} className="mr-2 mt-1 text-blue-500" />
                        <div>
                          <p className="font-medium text-sm">Контрольные осмотры</p>
                          <p className="text-xs text-gray-600">Через 1 неделю, 1 месяц, 3 месяца</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Shield" size={16} className="mr-2 mt-1 text-blue-500" />
                        <div>
                          <p className="font-medium text-sm">Гарантия комфорта</p>
                          <p className="text-xs text-gray-600">Замена при дискомфорте в течение месяца</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="XCircle" size={20} className="mr-2 text-red-500" />
                      Противопоказания
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Icon name="X" size={14} className="mr-2 text-red-500" />
                        Острые воспалительные заболевания глаз
                      </li>
                      <li className="flex items-center">
                        <Icon name="X" size={14} className="mr-2 text-red-500" />
                        Синдром сухого глаза (тяжелая форма)
                      </li>
                      <li className="flex items-center">
                        <Icon name="X" size={14} className="mr-2 text-red-500" />
                        Аллергические реакции на материалы
                      </li>
                      <li className="flex items-center">
                        <Icon name="X" size={14} className="mr-2 text-red-500" />
                        Нарушения слезопродукции
                      </li>
                      <li className="flex items-center">
                        <Icon name="X" size={14} className="mr-2 text-red-500" />
                        Возраст до 8 лет
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-6 bg-blue-50 border-blue-200">
                <CardContent className="text-center py-8">
                  <Icon name="UserCheck" size={48} className="text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    Готовы попробовать контактные линзы?
                  </h3>
                  <p className="text-blue-700 mb-6">
                    Запишитесь на бесплатную консультацию и подбор линз
                  </p>
                  <Button size="lg">
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Записаться на подбор
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Care Instructions */}
          <TabsContent value="care" className="mt-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Droplets" size={20} className="mr-2 text-primary" />
                      Ежедневный уход
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-3">
                      <li className="flex items-start">
                        <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">1</span>
                        <div>
                          <p className="font-medium text-sm">Мойте руки</p>
                          <p className="text-xs text-gray-600">Тщательно с мылом перед контактом с линзами</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">2</span>
                        <div>
                          <p className="font-medium text-sm">Очистите линзу</p>
                          <p className="text-xs text-gray-600">Несколько капель раствора на ладонь</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">3</span>
                        <div>
                          <p className="font-medium text-sm">Потрите аккуратно</p>
                          <p className="text-xs text-gray-600">Круговыми движениями 10-15 секунд</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">4</span>
                        <div>
                          <p className="font-medium text-sm">Промойте</p>
                          <p className="text-xs text-gray-600">Свежим раствором с обеих сторон</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">5</span>
                        <div>
                          <p className="font-medium text-sm">Храните правильно</p>
                          <p className="text-xs text-gray-600">В чистом контейнере со свежим раствором</p>
                        </div>
                      </li>
                    </ol>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="ShoppingCart" size={20} className="mr-2 text-primary" />
                      Средства ухода
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {careProducts.map((product, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-sm">{product.name}</p>
                            <p className="text-xs text-gray-600">{product.brand} • {product.volume}</p>
                            <p className="text-xs text-gray-500">{product.description}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-primary">{product.price} ₽</p>
                            <Button size="sm" variant="outline" className="mt-1">
                              <Icon name="Plus" size={12} className="mr-1" />
                              В корзину
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-700">
                      <Icon name="Check" size={20} className="mr-2" />
                      Что можно делать
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Icon name="Check" size={14} className="mr-2 text-green-500" />
                        Плавать в бассейне (в очках)
                      </li>
                      <li className="flex items-center">
                        <Icon name="Check" size={14} className="mr-2 text-green-500" />
                        Заниматься спортом
                      </li>
                      <li className="flex items-center">
                        <Icon name="Check" size={14} className="mr-2 text-green-500" />
                        Использовать косметику
                      </li>
                      <li className="flex items-center">
                        <Icon name="Check" size={14} className="mr-2 text-green-500" />
                        Работать за компьютером
                      </li>
                      <li className="flex items-center">
                        <Icon name="Check" size={14} className="mr-2 text-green-500" />
                        Спать в дневных линзах (кратковременно)
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-700">
                      <Icon name="X" size={20} className="mr-2" />
                      Что нельзя делать
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Icon name="X" size={14} className="mr-2 text-red-500" />
                        Спать в линзах (кроме специальных)
                      </li>
                      <li className="flex items-center">
                        <Icon name="X" size={14} className="mr-2 text-red-500" />
                        Плавать без защитных очков
                      </li>
                      <li className="flex items-center">
                        <Icon name="X" size={14} className="mr-2 text-red-500" />
                        Использовать водопроводную воду
                      </li>
                      <li className="flex items-center">
                        <Icon name="X" size={14} className="mr-2 text-red-500" />
                        Превышать срок ношения
                      </li>
                      <li className="flex items-center">
                        <Icon name="X" size={14} className="mr-2 text-red-500" />
                        Обмениваться линзами с другими
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Alert className="mt-6">
                <Icon name="Info" size={16} />
                <AlertDescription>
                  <strong>Важно:</strong> Первые контактные линзы должны подбираться только специалистом. 
                  Неправильный подбор может привести к серьезным проблемам со зрением.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ContactLenses;