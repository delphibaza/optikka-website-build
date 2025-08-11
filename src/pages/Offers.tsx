import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

const Offers = () => {
  const [selectedOffer, setSelectedOffer] = useState<string | null>(null);

  const currentOffers = [
    {
      id: 'second-glasses',
      title: 'Вторые очки в подарок',
      description: 'При покупке очков от 15 000 ₽ - вторая пара солнцезащитных в подарок',
      discount: '50%',
      validUntil: '2024-08-31',
      category: 'glasses',
      conditions: [
        'Минимальная сумма покупки 15 000 ₽',
        'Солнцезащитные очки из специальной коллекции',
        'Не суммируется с другими скидками',
        'Действует во всех салонах сети'
      ],
      image: '/placeholder.svg',
      popularity: 85,
      saved: 'до 8 000 ₽'
    },
    {
      id: 'student-discount',
      title: 'Скидка студентам',
      description: 'Специальная скидка 25% студентам при предъявлении студенческого билета',
      discount: '25%',
      validUntil: 'постоянно',
      category: 'discount',
      conditions: [
        'Действующий студенческий билет',
        'Очная или заочная форма обучения',
        'Распространяется на оправы и линзы',
        'Можно использовать несколько раз в год'
      ],
      image: '/placeholder.svg',
      popularity: 92,
      saved: 'до 5 000 ₽'
    },
    {
      id: 'family-package',
      title: 'Семейный пакет',
      description: 'Скидка 30% при покупке очков для всей семьи (от 3 пар)',
      discount: '30%',
      validUntil: '2024-09-15',
      category: 'family',
      conditions: [
        'Минимум 3 пары очков',
        'Покупка в течение одного дня',
        'Действует на оправы среднего ценового сегмента',
        'Бесплатная диагностика для всех членов семьи'
      ],
      image: '/placeholder.svg',
      popularity: 78,
      saved: 'до 12 000 ₽'
    },
    {
      id: 'progressive-lenses',
      title: 'Прогрессивные линзы со скидкой',
      description: 'Скидка 40% на прогрессивные линзы премиум-класса',
      discount: '40%',
      validUntil: '2024-07-31',
      category: 'lenses',
      conditions: [
        'Только на линзы премиум-сегмента',
        'Бесплатная адаптация в течение месяца',
        'Гарантия 2 года',
        'Консультация специалиста включена'
      ],
      image: '/placeholder.svg',
      popularity: 65,
      saved: 'до 15 000 ₽'
    },
    {
      id: 'contact-lenses-trial',
      title: 'Пробный месяц контактных линз',
      description: 'Первый месяц контактных линз бесплатно при покупке годового запаса',
      discount: 'Бесплатно',
      validUntil: '2024-08-15',
      category: 'contacts',
      conditions: [
        'Покупка годового запаса линз',
        'Первичная консультация включена',
        'Обучение правильному использованию',
        'Средства ухода в подарок'
      ],
      image: '/placeholder.svg',
      popularity: 71,
      saved: 'до 3 000 ₽'
    },
    {
      id: 'senior-discount',
      title: 'Скидка пенсионерам',
      description: 'Постоянная скидка 20% для пенсионеров на все услуги',
      discount: '20%',
      validUntil: 'постоянно',
      category: 'discount',
      conditions: [
        'Пенсионное удостоверение',
        'Действует на все товары и услуги',
        'Дополнительная скидка на ремонт',
        'Бесплатная чистка очков'
      ],
      image: '/placeholder.svg',
      popularity: 88,
      saved: 'до 4 000 ₽'
    }
  ];

  const expiredOffers = [
    {
      id: 'spring-sale',
      title: 'Весенняя распродажа',
      description: 'Скидки до 50% на коллекцию прошлого сезона',
      discount: '50%',
      validUntil: '2024-05-31',
      category: 'seasonal'
    },
    {
      id: 'mothers-day',
      title: 'День матери',
      description: 'Специальные цены для мам в честь праздника',
      discount: '35%',
      validUntil: '2024-05-26',
      category: 'holiday'
    }
  ];

  const upcomingOffers = [
    {
      id: 'back-to-school',
      title: 'Готовимся к школе',
      description: 'Специальные предложения для школьников и студентов',
      discount: '30%',
      startsFrom: '2024-08-15',
      category: 'seasonal'
    },
    {
      id: 'autumn-collection',
      title: 'Осенняя коллекция',
      description: 'Новые модели оправ в осенних тонах',
      discount: '25%',
      startsFrom: '2024-09-01',
      category: 'new'
    }
  ];

  const categories = [
    { id: 'all', name: 'Все акции', icon: 'Tag' },
    { id: 'glasses', name: 'Очки', icon: 'Glasses' },
    { id: 'lenses', name: 'Линзы', icon: 'Circle' },
    { id: 'contacts', name: 'Контактные линзы', icon: 'Eye' },
    { id: 'discount', name: 'Скидки', icon: 'Percent' },
    { id: 'family', name: 'Семейные', icon: 'Users' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredOffers = selectedCategory === 'all' 
    ? currentOffers 
    : currentOffers.filter(offer => offer.category === selectedCategory);

  const getDiscountColor = (discount: string) => {
    const numDiscount = parseInt(discount);
    if (numDiscount >= 40) return 'bg-red-500';
    if (numDiscount >= 25) return 'bg-orange-500';
    if (numDiscount >= 15) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-4">Актуальные акции</h1>
          <p className="text-xl opacity-90">Выгодные предложения для наших клиентов</p>
          <div className="mt-6 flex items-center gap-4">
            <Badge className="bg-white/20 text-white border-white/30">
              <Icon name="Clock" size={16} className="mr-2" />
              Обновляется ежедневно
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30">
              <Icon name="Gift" size={16} className="mr-2" />
              {currentOffers.length} активных предложений
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Категории акций</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2"
              >
                <Icon name={category.icon as any} size={16} />
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <Tabs defaultValue="current" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="current">Текущие акции</TabsTrigger>
            <TabsTrigger value="upcoming">Скоро</TabsTrigger>
            <TabsTrigger value="expired">Завершенные</TabsTrigger>
          </TabsList>

          {/* Current Offers */}
          <TabsContent value="current" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredOffers.map((offer) => (
                <Card key={offer.id} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  {/* Discount Badge */}
                  <div className={`absolute top-0 right-0 w-20 h-20 ${getDiscountColor(offer.discount)} flex items-center justify-center transform rotate-12 translate-x-6 -translate-y-6`}>
                    <span className="text-white font-bold text-sm transform -rotate-12">
                      -{offer.discount}
                    </span>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                      <Icon name="Gift" size={48} className="text-gray-400" />
                      <div className="absolute bottom-2 right-2">
                        <Badge variant="secondary" className="text-xs">
                          Популярность: {offer.popularity}%
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-primary mb-2">{offer.title}</CardTitle>
                    <CardDescription className="text-gray-600">{offer.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-green-100 text-green-800">
                          {offer.validUntil === 'постоянно' ? 'Постоянная акция' : `До ${offer.validUntil}`}
                        </Badge>
                        <span className="text-sm font-semibold text-primary">
                          Экономия {offer.saved}
                        </span>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Популярность</span>
                          <span>{offer.popularity}%</span>
                        </div>
                        <Progress value={offer.popularity} className="h-2" />
                      </div>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full">
                            <Icon name="Info" size={16} className="mr-2" />
                            Подробнее
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="flex items-center">
                              <Icon name="Gift" size={24} className="mr-3 text-primary" />
                              {offer.title}
                            </DialogTitle>
                            <DialogDescription>{offer.description}</DialogDescription>
                          </DialogHeader>
                          
                          <div className="mt-4 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="text-center p-4 bg-primary/10 rounded-lg">
                                <div className="text-3xl font-bold text-primary mb-1">
                                  {offer.discount}
                                </div>
                                <div className="text-sm text-gray-600">Скидка</div>
                              </div>
                              <div className="text-center p-4 bg-green-50 rounded-lg">
                                <div className="text-3xl font-bold text-green-600 mb-1">
                                  {offer.saved.replace('до ', '')}
                                </div>
                                <div className="text-sm text-gray-600">Экономия</div>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Условия акции:</h4>
                              <ul className="space-y-1">
                                {offer.conditions.map((condition, index) => (
                                  <li key={index} className="flex items-start">
                                    <Icon name="Check" size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm">{condition}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="flex gap-2">
                              <Button className="flex-1">
                                <Icon name="ShoppingCart" size={16} className="mr-2" />
                                Воспользоваться
                              </Button>
                              <Button variant="outline" className="flex-1">
                                <Icon name="Share" size={16} className="mr-2" />
                                Поделиться
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredOffers.length === 0 && (
              <div className="text-center py-12">
                <Icon name="Search" size={48} className="text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Акции не найдены
                </h3>
                <p className="text-gray-600">
                  В выбранной категории пока нет активных предложений
                </p>
              </div>
            )}
          </TabsContent>

          {/* Upcoming Offers */}
          <TabsContent value="upcoming" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingOffers.map((offer) => (
                <Card key={offer.id} className="relative">
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-500">Скоро</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{offer.title}</CardTitle>
                    <CardDescription>{offer.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">
                        Начнется {offer.startsFrom}
                      </Badge>
                      <span className="text-lg font-bold text-primary">
                        -{offer.discount}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Expired Offers */}
          <TabsContent value="expired" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              {expiredOffers.map((offer) => (
                <Card key={offer.id} className="relative opacity-60">
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">Завершена</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{offer.title}</CardTitle>
                    <CardDescription>{offer.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">
                        Действовала до {offer.validUntil}
                      </Badge>
                      <span className="text-lg font-bold text-gray-500">
                        -{offer.discount}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Newsletter Signup */}
        <Card className="mt-16 bg-gradient-to-r from-primary/10 to-blue-500/10">
          <CardContent className="text-center py-12">
            <Icon name="Bell" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Не пропустите новые акции!
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Подпишитесь на уведомления о новых акциях и специальных предложениях. 
              Будьте первыми, кто узнает о выгодных скидках!
            </p>
            <Button size="lg">
              <Icon name="Mail" size={20} className="mr-2" />
              Подписаться на рассылку
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Offers;