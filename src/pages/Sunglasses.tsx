import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Sunglasses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedLensType, setSelectedLensType] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [selectedProtection, setSelectedProtection] = useState('all');

  const sunglasses = [
    {
      id: 1,
      name: 'Aviator Classic',
      brand: 'Ray-Ban',
      price: 12990,
      originalPrice: 15990,
      category: 'classic',
      lensType: 'polarized',
      protection: 'UV-400',
      frameColor: 'Золотой',
      lensColor: 'Зеленый',
      features: ['Поляризация', 'UV-400', 'Металлическая оправа'],
      rating: 4.8,
      reviews: 234,
      inStock: true,
      discount: 20,
      gender: 'unisex'
    },
    {
      id: 2,
      name: 'Wayfarer',
      brand: 'Ray-Ban',
      price: 10990,
      category: 'classic',
      lensType: 'standard',
      protection: 'UV-400',
      frameColor: 'Черный',
      lensColor: 'Серый',
      features: ['UV-400', 'Ацетатная оправа', 'Классический дизайн'],
      rating: 4.7,
      reviews: 189,
      inStock: true,
      gender: 'unisex'
    },
    {
      id: 3,
      name: 'Holbrook',
      brand: 'Oakley',
      price: 15990,
      category: 'sport',
      lensType: 'prizm',
      protection: 'UV-400',
      frameColor: 'Матовый черный',
      lensColor: 'Prizm Road',
      features: ['Prizm технология', 'Ударопрочность', 'Спортивная посадка'],
      rating: 4.9,
      reviews: 156,
      inStock: true,
      gender: 'men'
    },
    {
      id: 4,
      name: 'Cat Eye Vintage',
      brand: 'Persol',
      price: 18990,
      category: 'vintage',
      lensType: 'gradient',
      protection: 'UV-400',
      frameColor: 'Коричневый',
      lensColor: 'Коричневый градиент',
      features: ['Градиентные линзы', 'Винтажный дизайн', 'Ручная работа'],
      rating: 4.6,
      reviews: 98,
      inStock: false,
      gender: 'women'
    },
    {
      id: 5,
      name: 'Sport Pro',
      brand: 'Oakley',
      price: 22990,
      category: 'sport',
      lensType: 'photochromic',
      protection: 'UV-400',
      frameColor: 'Белый',
      lensColor: 'Фотохромный',
      features: ['Фотохромные линзы', 'Сменные линзы', 'Спортивная оправа'],
      rating: 4.8,
      reviews: 145,
      inStock: true,
      gender: 'unisex'
    },
    {
      id: 6,
      name: 'Round Classic',
      brand: 'Ray-Ban',
      price: 9990,
      category: 'vintage',
      lensType: 'mirror',
      protection: 'UV-400',
      frameColor: 'Золотой',
      lensColor: 'Зеркальный синий',
      features: ['Зеркальные линзы', 'Круглая форма', 'Ретро стиль'],
      rating: 4.5,
      reviews: 167,
      inStock: true,
      gender: 'unisex'
    }
  ];

  const brands = [
    { value: 'all', label: 'Все бренды' },
    { value: 'Ray-Ban', label: 'Ray-Ban' },
    { value: 'Oakley', label: 'Oakley' },
    { value: 'Persol', label: 'Persol' },
    { value: 'Tom Ford', label: 'Tom Ford' },
    { value: 'Maui Jim', label: 'Maui Jim' }
  ];

  const lensTypes = [
    { value: 'all', label: 'Все типы линз' },
    { value: 'standard', label: 'Стандартные' },
    { value: 'polarized', label: 'Поляризационные' },
    { value: 'photochromic', label: 'Фотохромные' },
    { value: 'gradient', label: 'Градиентные' },
    { value: 'mirror', label: 'Зеркальные' },
    { value: 'prizm', label: 'Prizm' }
  ];

  const protectionLevels = [
    { value: 'all', label: 'Все уровни защиты' },
    { value: 'UV-400', label: 'UV-400' },
    { value: 'UV-380', label: 'UV-380' },
    { value: 'Blue Light', label: 'Защита от синего света' }
  ];

  const uvProtectionInfo = [
    {
      level: 'UV-400',
      description: 'Блокирует 100% UV-A и UV-B лучей',
      protection: '99-100%',
      recommended: 'Для ежедневного использования',
      color: 'green'
    },
    {
      level: 'UV-380',
      description: 'Блокирует большинство вредных лучей',
      protection: '95-98%',
      recommended: 'Для городского использования',
      color: 'blue'
    },
    {
      level: 'Категория 3',
      description: 'Высокая степень затемнения',
      protection: '82-92%',
      recommended: 'Для яркого солнца',
      color: 'orange'
    },
    {
      level: 'Категория 4',
      description: 'Максимальная защита',
      protection: '92-97%',
      recommended: 'Для горных условий',
      color: 'red'
    }
  ];

  const filteredSunglasses = sunglasses.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === 'all' || item.brand === selectedBrand;
    const matchesLensType = selectedLensType === 'all' || item.lensType === selectedLensType;
    const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
    const matchesProtection = selectedProtection === 'all' || item.protection === selectedProtection;
    
    return matchesSearch && matchesBrand && matchesLensType && matchesPrice && matchesProtection;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-4">Солнцезащитные очки</h1>
          <p className="text-xl opacity-90">Защитите глаза стильно и надежно</p>
          <div className="mt-6 flex items-center gap-4">
            <Badge className="bg-white/20 text-white border-white/30">
              <Icon name="Sun" size={16} className="mr-2" />
              100% UV защита
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30">
              <Icon name="Shield" size={16} className="mr-2" />
              Сертифицированное качество
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="catalog" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="catalog">Каталог</TabsTrigger>
            <TabsTrigger value="protection">UV-защита</TabsTrigger>
            <TabsTrigger value="guide">Руководство по выбору</TabsTrigger>
          </TabsList>

          {/* Catalog */}
          <TabsContent value="catalog" className="mt-8">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Filters */}
              <div className="lg:col-span-1">
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Filter" size={20} className="mr-2" />
                      Фильтры
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Поиск</label>
                      <Input
                        placeholder="Модель или бренд..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Бренд</label>
                      <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {brands.map(brand => (
                            <SelectItem key={brand.value} value={brand.value}>
                              {brand.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Тип линз</label>
                      <Select value={selectedLensType} onValueChange={setSelectedLensType}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {lensTypes.map(type => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">UV-защита</label>
                      <Select value={selectedProtection} onValueChange={setSelectedProtection}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {protectionLevels.map(level => (
                            <SelectItem key={level.value} value={level.value}>
                              {level.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Цена: {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()} ₽
                      </label>
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={50000}
                        min={0}
                        step={1000}
                        className="mt-2"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Products */}
              <div className="lg:col-span-3">
                <div className="flex justify-between items-center mb-6">
                  <p className="text-gray-600">
                    Найдено {filteredSunglasses.length} моделей
                  </p>
                  <Select defaultValue="popular">
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">По популярности</SelectItem>
                      <SelectItem value="price-low">Цена: по возрастанию</SelectItem>
                      <SelectItem value="price-high">Цена: по убыванию</SelectItem>
                      <SelectItem value="rating">По рейтингу</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredSunglasses.map((item) => (
                    <Card key={item.id} className="group hover:shadow-xl transition-all duration-300">
                      <CardHeader className="pb-4">
                        <div className="aspect-square bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                          <Icon name="Sun" size={64} className="text-orange-400" />
                          {item.discount && (
                            <Badge className="absolute top-3 right-3 bg-red-500">
                              -{item.discount}%
                            </Badge>
                          )}
                          {!item.inStock && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                              <Badge variant="secondary">Нет в наличии</Badge>
                            </div>
                          )}
                        </div>
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <CardDescription className="text-primary font-medium">
                          {item.brand}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3 mb-4">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Оправа:</span>
                            <span className="font-medium">{item.frameColor}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Линзы:</span>
                            <span className="font-medium">{item.lensColor}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Защита:</span>
                            <Badge variant="outline" className="text-xs">
                              {item.protection}
                            </Badge>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {item.features.slice(0, 2).map((feature, index) => (
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
                                  i < Math.floor(item.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600 ml-2">
                            {item.rating} ({item.reviews})
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex flex-col">
                            <span className="text-2xl font-bold text-gray-900">
                              {item.price.toLocaleString()} ₽
                            </span>
                            {item.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">
                                {item.originalPrice.toLocaleString()} ₽
                              </span>
                            )}
                          </div>
                          <Button 
                            disabled={!item.inStock}
                            className="group-hover:bg-primary/90"
                          >
                            <Icon name="ShoppingCart" size={16} className="mr-2" />
                            {item.inStock ? 'В корзину' : 'Нет в наличии'}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* UV Protection Info */}
          <TabsContent value="protection" className="mt-8">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Защита от UV-излучения</CardTitle>
                  <CardDescription>
                    Почему важно защищать глаза от ультрафиолета
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-red-600">
                        Опасности UV-излучения:
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Icon name="AlertTriangle" size={16} className="mr-2 mt-1 text-red-500" />
                          <span className="text-sm">Катаракта</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="AlertTriangle" size={16} className="mr-2 mt-1 text-red-500" />
                          <span className="text-sm">Дегенерация сетчатки</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="AlertTriangle" size={16} className="mr-2 mt-1 text-red-500" />
                          <span className="text-sm">Ожоги роговицы</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="AlertTriangle" size={16} className="mr-2 mt-1 text-red-500" />
                          <span className="text-sm">Преждевременное старение</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-green-600">
                        Преимущества защиты:
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Icon name="Shield" size={16} className="mr-2 mt-1 text-green-500" />
                          <span className="text-sm">Предотвращение заболеваний</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Shield" size={16} className="mr-2 mt-1 text-green-500" />
                          <span className="text-sm">Комфорт в яркую погоду</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Shield" size={16} className="mr-2 mt-1 text-green-500" />
                          <span className="text-sm">Снижение усталости глаз</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Shield" size={16} className="mr-2 mt-1 text-green-500" />
                          <span className="text-sm">Сохранение молодости кожи</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {uvProtectionInfo.map((info, index) => (
                  <Card key={index}>
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 bg-${info.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <Icon name="Shield" size={32} className={`text-${info.color}-600`} />
                      </div>
                      <CardTitle className="text-lg">{info.level}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">{info.description}</p>
                        <Badge className={`bg-${info.color}-100 text-${info.color}-800`}>
                          {info.protection}
                        </Badge>
                        <p className="text-xs text-gray-500">{info.recommended}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Selection Guide */}
          <TabsContent value="guide" className="mt-8">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Как выбрать солнцезащитные очки</CardTitle>
                  <CardDescription>
                    Подробное руководство по выбору идеальных солнцезащитных очков
                  </CardDescription>
                </CardHeader>
              </Card>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Eye" size={20} className="mr-2 text-primary" />
                      По типу активности
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Городская жизнь</h4>
                        <p className="text-sm text-gray-600 mb-2">UV-400, стандартные или поляризационные линзы</p>
                        <div className="flex flex-wrap gap-1">
                          <Badge variant="outline" className="text-xs">Wayfarer</Badge>
                          <Badge variant="outline" className="text-xs">Aviator</Badge>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Спорт и активность</h4>
                        <p className="text-sm text-gray-600 mb-2">Ударопрочные, поляризационные, спортивная посадка</p>
                        <div className="flex flex-wrap gap-1">
                          <Badge variant="outline" className="text-xs">Oakley</Badge>
                          <Badge variant="outline" className="text-xs">Спортивные</Badge>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Вождение</h4>
                        <p className="text-sm text-gray-600 mb-2">Поляризационные, антибликовые</p>
                        <div className="flex flex-wrap gap-1">
                          <Badge variant="outline" className="text-xs">Поляризация</Badge>
                          <Badge variant="outline" className="text-xs">Градиент</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Palette" size={20} className="mr-2 text-primary" />
                      По цвету линз
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <div className="w-4 h-4 bg-gray-600 rounded-full mr-2"></div>
                          Серые линзы
                        </h4>
                        <p className="text-sm text-gray-600">Универсальные, не искажают цвета</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <div className="w-4 h-4 bg-amber-600 rounded-full mr-2"></div>
                          Коричневые линзы
                        </h4>
                        <p className="text-sm text-gray-600">Повышают контрастность, хороши для вождения</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <div className="w-4 h-4 bg-green-600 rounded-full mr-2"></div>
                          Зеленые линзы
                        </h4>
                        <p className="text-sm text-gray-600">Снижают блики, комфортны для глаз</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <div className="w-4 h-4 bg-blue-600 rounded-full mr-2"></div>
                          Синие линзы
                        </h4>
                        <p className="text-sm text-gray-600">Модные, подходят для пляжа</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Users" size={20} className="mr-2 text-primary" />
                    Рекомендации по форме лица
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <Icon name="Circle" size={24} className="text-blue-600" />
                      </div>
                      <h4 className="font-semibold mb-2">Круглое лицо</h4>
                      <p className="text-sm text-gray-600">Квадратные и прямоугольные оправы</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <Icon name="Square" size={24} className="text-green-600" />
                      </div>
                      <h4 className="font-semibold mb-2">Квадратное лицо</h4>
                      <p className="text-sm text-gray-600">Круглые и овальные оправы</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <Icon name="Triangle" size={24} className="text-purple-600" />
                      </div>
                      <h4 className="font-semibold mb-2">Треугольное лицо</h4>
                      <p className="text-sm text-gray-600">Широкие оправы, cat-eye</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <Icon name="Ellipsis" size={24} className="text-orange-600" />
                      </div>
                      <h4 className="font-semibold mb-2">Овальное лицо</h4>
                      <p className="text-sm text-gray-600">Подходят любые формы</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
                <CardContent className="text-center py-8">
                  <Icon name="Lightbulb" size={48} className="text-yellow-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Нужна помощь в выборе?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Наши специалисты помогут подобрать идеальные солнцезащитные очки
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button>
                      <Icon name="Calendar" size={16} className="mr-2" />
                      Записаться на консультацию
                    </Button>
                    <Button variant="outline">
                      <Icon name="Phone" size={16} className="mr-2" />
                      Позвонить специалисту
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

export default Sunglasses;