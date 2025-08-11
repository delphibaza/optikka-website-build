import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Brands = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const brands = [
    {
      id: 1,
      name: 'Ray-Ban',
      country: 'Италия',
      founded: '1937',
      category: 'premium',
      priceRange: 'high',
      description: 'Легендарный американский бренд солнцезащитных очков, известный своими культовыми моделями Aviator и Wayfarer.',
      specialties: ['Солнцезащитные очки', 'Классический дизайн', 'Авиаторы'],
      popularModels: ['Aviator', 'Wayfarer', 'Clubmaster', 'Round'],
      priceFrom: 8000,
      priceTo: 25000,
      logo: '/placeholder.svg',
      rating: 4.8,
      reviews: 1250,
      inStock: 45,
      features: ['UV-400 защита', 'Поляризация', 'Кристальные линзы']
    },
    {
      id: 2,
      name: 'Oakley',
      country: 'США',
      founded: '1975',
      category: 'sport',
      priceRange: 'high',
      description: 'Американский бренд спортивных очков, известный инновационными технологиями и высокой производительностью.',
      specialties: ['Спортивные очки', 'Инновации', 'Технологии'],
      popularModels: ['Holbrook', 'Frogskins', 'Radar', 'Jawbreaker'],
      priceFrom: 12000,
      priceTo: 35000,
      logo: '/placeholder.svg',
      rating: 4.7,
      reviews: 890,
      inStock: 32,
      features: ['Prizm технология', 'Ударопрочность', 'Спортивная посадка']
    },
    {
      id: 3,
      name: 'Persol',
      country: 'Италия',
      founded: '1917',
      category: 'luxury',
      priceRange: 'high',
      description: 'Итальянский люксовый бренд, известный элегантным дизайном и высочайшим качеством изготовления.',
      specialties: ['Люксовые очки', 'Итальянский дизайн', 'Ручная работа'],
      popularModels: ['714', '649', '3019S', '2445S'],
      priceFrom: 15000,
      priceTo: 45000,
      logo: '/placeholder.svg',
      rating: 4.9,
      reviews: 567,
      inStock: 28,
      features: ['Ручная работа', 'Кристальные линзы', 'Уникальный дизайн']
    },
    {
      id: 4,
      name: 'Tom Ford',
      country: 'США',
      founded: '2005',
      category: 'luxury',
      priceRange: 'high',
      description: 'Американский дизайнерский бренд, создающий роскошные очки с современным и элегантным дизайном.',
      specialties: ['Дизайнерские очки', 'Роскошь', 'Мода'],
      popularModels: ['Jennifer', 'Snowdon', 'Marko', 'Anoushka'],
      priceFrom: 20000,
      priceTo: 60000,
      logo: '/placeholder.svg',
      rating: 4.6,
      reviews: 423,
      inStock: 19,
      features: ['Премиум материалы', 'Дизайнерский стиль', 'Ограниченные серии']
    },
    {
      id: 5,
      name: 'Silhouette',
      country: 'Австрия',
      founded: '1964',
      category: 'premium',
      priceRange: 'medium',
      description: 'Австрийский бренд, специализирующийся на легких безободковых очках и инновационных материалах.',
      specialties: ['Безободковые очки', 'Легкий вес', 'Минимализм'],
      popularModels: ['Titan Minimal Art', 'Dynamics', 'Urban', 'Explorer'],
      priceFrom: 12000,
      priceTo: 30000,
      logo: '/placeholder.svg',
      rating: 4.5,
      reviews: 678,
      inStock: 41,
      features: ['Титановые оправы', 'Безободковый дизайн', 'Легкий вес']
    },
    {
      id: 6,
      name: 'Lindberg',
      country: 'Дания',
      founded: '1983',
      category: 'luxury',
      priceRange: 'high',
      description: 'Датский бренд, известный минималистичным дизайном и использованием инновационных материалов.',
      specialties: ['Минимализм', 'Инновации', 'Скандинавский дизайн'],
      popularModels: ['Strip', 'Rim', 'Air', 'Horn'],
      priceFrom: 25000,
      priceTo: 80000,
      logo: '/placeholder.svg',
      rating: 4.8,
      reviews: 234,
      inStock: 15,
      features: ['Без винтов', 'Гипоаллергенные', 'Индивидуальная подгонка']
    },
    {
      id: 7,
      name: 'Moscot',
      country: 'США',
      founded: '1915',
      category: 'vintage',
      priceRange: 'medium',
      description: 'Американский семейный бренд с более чем вековой историей, известный винтажным дизайном.',
      specialties: ['Винтажный стиль', 'Семейная традиция', 'Нью-Йорк'],
      popularModels: ['Lemtosh', 'Miltzen', 'Nebb', 'Zev'],
      priceFrom: 8000,
      priceTo: 20000,
      logo: '/placeholder.svg',
      rating: 4.4,
      reviews: 512,
      inStock: 38,
      features: ['Винтажный дизайн', 'Ацетатные оправы', 'Классические формы']
    },
    {
      id: 8,
      name: 'Maui Jim',
      country: 'США',
      founded: '1980',
      category: 'sport',
      priceRange: 'medium',
      description: 'Американский бренд солнцезащитных очков, специализирующийся на поляризационных линзах.',
      specialties: ['Поляризация', 'Солнцезащитные очки', 'Водные виды спорта'],
      popularModels: ['Peahi', 'Breakwall', 'Ho\'okipa', 'Cliff House'],
      priceFrom: 10000,
      priceTo: 28000,
      logo: '/placeholder.svg',
      rating: 4.6,
      reviews: 789,
      inStock: 33,
      features: ['PolarizedPlus2', 'Цветопередача', 'UV-защита']
    }
  ];

  const categories = [
    { value: 'all', label: 'Все категории' },
    { value: 'luxury', label: 'Люксовые' },
    { value: 'premium', label: 'Премиум' },
    { value: 'sport', label: 'Спортивные' },
    { value: 'vintage', label: 'Винтажные' }
  ];

  const priceRanges = [
    { value: 'all', label: 'Все цены' },
    { value: 'low', label: 'До 15 000 ₽' },
    { value: 'medium', label: '15 000 - 30 000 ₽' },
    { value: 'high', label: 'От 30 000 ₽' }
  ];

  const filteredBrands = brands.filter(brand => {
    const matchesSearch = brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         brand.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         brand.specialties.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || brand.category === selectedCategory;
    const matchesPrice = priceRange === 'all' || brand.priceRange === priceRange;
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const featuredBrands = brands.filter(brand => brand.rating >= 4.7).slice(0, 3);
  const newBrands = brands.slice(-2);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Бренды очков</h1>
          <p className="text-xl text-gray-600">Лучшие мировые производители оптики</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Featured Brands */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Рекомендуемые бренды</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredBrands.map((brand) => (
              <Card key={brand.id} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-yellow-500">Топ выбор</Badge>
                </div>
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="Glasses" size={32} className="text-gray-400" />
                  </div>
                  <CardTitle className="text-xl">{brand.name}</CardTitle>
                  <CardDescription>{brand.country} • {brand.founded}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={16}
                          className={`${
                            i < Math.floor(brand.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {brand.rating} ({brand.reviews})
                    </span>
                  </div>
                  <p className="text-center text-gray-600 text-sm mb-4 line-clamp-2">
                    {brand.description}
                  </p>
                  <div className="text-center">
                    <span className="text-lg font-bold text-primary">
                      от {brand.priceFrom.toLocaleString()} ₽
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Tabs defaultValue="all-brands" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all-brands">Все бренды</TabsTrigger>
            <TabsTrigger value="new-brands">Новинки</TabsTrigger>
            <TabsTrigger value="comparison">Сравнение</TabsTrigger>
          </TabsList>

          <TabsContent value="all-brands" className="mt-8">
            {/* Filters */}
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
              <div className="flex-1">
                <Input
                  placeholder="Поиск брендов..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {priceRanges.map(range => (
                    <SelectItem key={range.value} value={range.value}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Brands Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBrands.map((brand) => (
                <Card key={brand.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Icon name="Glasses" size={24} className="text-gray-400" />
                      </div>
                      <Badge variant={
                        brand.category === 'luxury' ? 'default' :
                        brand.category === 'premium' ? 'secondary' :
                        'outline'
                      }>
                        {categories.find(c => c.value === brand.category)?.label}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{brand.name}</CardTitle>
                    <CardDescription>
                      {brand.country} • Основан в {brand.founded}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {brand.description}
                    </p>

                    <div className="space-y-3 mb-4">
                      <div>
                        <p className="text-xs font-medium text-gray-500 mb-1">Специализация:</p>
                        <div className="flex flex-wrap gap-1">
                          {brand.specialties.slice(0, 2).map((specialty, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-xs font-medium text-gray-500 mb-1">Популярные модели:</p>
                        <p className="text-xs text-gray-600">
                          {brand.popularModels.slice(0, 3).join(', ')}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
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
                        <span className="ml-2 text-sm text-gray-600">
                          {brand.rating}
                        </span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {brand.inStock} моделей
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-primary">
                          {brand.priceFrom.toLocaleString()} - {brand.priceTo.toLocaleString()} ₽
                        </span>
                      </div>
                      <Button size="sm">
                        Смотреть модели
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredBrands.length === 0 && (
              <div className="text-center py-12">
                <Icon name="Search" size={48} className="text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Бренды не найдены
                </h3>
                <p className="text-gray-600">
                  Попробуйте изменить параметры поиска
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="new-brands" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              {newBrands.map((brand) => (
                <Card key={brand.id} className="relative">
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-500">Новинка</Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Icon name="Glasses" size={24} className="text-gray-400" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{brand.name}</CardTitle>
                        <CardDescription>{brand.country}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{brand.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">
                        от {brand.priceFrom.toLocaleString()} ₽
                      </span>
                      <Button>Узнать больше</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="comparison" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Сравнение брендов</CardTitle>
                <CardDescription>
                  Выберите до 3 брендов для сравнения характеристик
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Icon name="BarChart3" size={48} className="text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Инструмент сравнения
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Здесь будет размещен интерактивный инструмент для сравнения брендов
                  </p>
                  <Button>
                    <Icon name="Plus" size={16} className="mr-2" />
                    Добавить бренд для сравнения
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Brands;