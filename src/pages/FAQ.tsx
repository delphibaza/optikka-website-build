import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqCategories = [
    { id: 'all', name: 'Все вопросы', icon: 'HelpCircle' },
    { id: 'services', name: 'Услуги', icon: 'Settings' },
    { id: 'glasses', name: 'Очки', icon: 'Glasses' },
    { id: 'lenses', name: 'Линзы', icon: 'Circle' },
    { id: 'payment', name: 'Оплата', icon: 'CreditCard' },
    { id: 'warranty', name: 'Гарантия', icon: 'Shield' },
    { id: 'appointment', name: 'Запись', icon: 'Calendar' }
  ];

  const faqItems = [
    {
      id: 1,
      category: 'services',
      question: 'Как записаться на прием к врачу?',
      answer: 'Записаться на прием можно несколькими способами: через наш сайт в разделе "Записаться на прием", по телефону +7 (495) 123-45-67, или лично в любом из наших салонов. Онлайн-запись доступна 24/7, а по телефону мы принимаем звонки с 9:00 до 22:00.',
      tags: ['запись', 'прием', 'врач'],
      helpful: 45,
      views: 1250
    },
    {
      id: 2,
      category: 'glasses',
      question: 'Сколько времени занимает изготовление очков?',
      answer: 'Время изготовления зависит от сложности заказа: стандартные очки с простыми линзами изготавливаются за 30-60 минут, прогрессивные линзы - 1-2 дня, сложные рецепты или специальные покрытия могут потребовать до 3-5 дней. Точное время сообщит специалист после осмотра.',
      tags: ['изготовление', 'время', 'линзы'],
      helpful: 38,
      views: 980
    },
    {
      id: 3,
      category: 'warranty',
      question: 'Какая гарантия предоставляется на очки?',
      answer: 'Мы предоставляем гарантию 1 год на оправы и 6 месяцев на линзы. Гарантия покрывает производственные дефекты, но не распространяется на механические повреждения. Также действует 14-дневный период возврата при неудовлетворенности покупкой.',
      tags: ['гарантия', 'возврат', 'дефекты'],
      helpful: 52,
      views: 1450
    },
    {
      id: 4,
      category: 'lenses',
      question: 'В чем разница между обычными и прогрессивными линзами?',
      answer: 'Обычные линзы корректируют зрение на одном расстоянии (близь или даль), а прогрессивные линзы позволяют четко видеть на всех расстояниях без видимых переходов. Прогрессивные линзы особенно полезны людям старше 40 лет с пресбиопией.',
      tags: ['прогрессивные', 'линзы', 'пресбиопия'],
      helpful: 29,
      views: 756
    },
    {
      id: 5,
      category: 'payment',
      question: 'Какие способы оплаты вы принимаете?',
      answer: 'Мы принимаем наличные, банковские карты (Visa, MasterCard, МИР), бесконтактную оплату через телефон, а также работаем с рассрочкой от банков-партнеров. Возможна оплата через QR-код и электронные кошельки.',
      tags: ['оплата', 'карты', 'рассрочка'],
      helpful: 33,
      views: 890
    },
    {
      id: 6,
      category: 'services',
      question: 'Проводите ли вы диагностику детям?',
      answer: 'Да, мы проводим диагностику зрения детям от 3 лет. У нас есть специальное детское оборудование и опытные специалисты, работающие с детьми. Рекомендуем первую проверку зрения в 3-4 года, затем ежегодно.',
      tags: ['дети', 'диагностика', 'возраст'],
      helpful: 41,
      views: 1100
    },
    {
      id: 7,
      category: 'glasses',
      question: 'Можно ли заказать очки онлайн?',
      answer: 'Для точного подбора очков необходим личный визит к специалисту. Однако вы можете выбрать понравившуюся оправу на сайте и забронировать её для примерки в салоне. Это поможет сэкономить время при посещении.',
      tags: ['онлайн', 'заказ', 'примерка'],
      helpful: 27,
      views: 645
    },
    {
      id: 8,
      category: 'lenses',
      question: 'Что такое антибликовое покрытие и нужно ли оно?',
      answer: 'Антибликовое покрытие уменьшает отражения на поверхности линз, улучшает четкость зрения и снижает усталость глаз, особенно при работе с компьютером или вождении. Мы рекомендуем это покрытие практически всем клиентам.',
      tags: ['антибликовое', 'покрытие', 'компьютер'],
      helpful: 35,
      views: 823
    },
    {
      id: 9,
      category: 'appointment',
      question: 'Можно ли перенести или отменить запись?',
      answer: 'Да, вы можете перенести или отменить запись не позднее чем за 2 часа до назначенного времени. Это можно сделать по телефону или через личный кабинет на сайте. При отмене менее чем за 2 часа может взиматься штраф.',
      tags: ['перенос', 'отмена', 'штраф'],
      helpful: 22,
      views: 567
    },
    {
      id: 10,
      category: 'services',
      question: 'Работаете ли вы со страховыми компаниями?',
      answer: 'Мы сотрудничаем с основными страховыми компаниями России. Список партнеров можно уточнить у администратора. Обычно страховка покрывает диагностику и частично стоимость очков. Необходимо предъявить полис при записи.',
      tags: ['страховка', 'полис', 'компенсация'],
      helpful: 18,
      views: 434
    },
    {
      id: 11,
      category: 'glasses',
      question: 'Как правильно ухаживать за очками?',
      answer: 'Очки следует протирать специальной салфеткой из микрофибры, хранить в футляре, избегать контакта с горячими поверхностями. Раз в неделю можно мыть теплой водой с мылом. Не используйте бумажные салфетки или одежду для протирания линз.',
      tags: ['уход', 'чистка', 'хранение'],
      helpful: 31,
      views: 712
    },
    {
      id: 12,
      category: 'payment',
      question: 'Предоставляете ли вы рассрочку?',
      answer: 'Да, мы предоставляем рассрочку на срок от 3 до 12 месяцев через банки-партнеры. Рассрочка доступна при покупке от 5000 рублей. Решение принимается в течение 5-10 минут, необходим только паспорт.',
      tags: ['рассрочка', 'кредит', 'банк'],
      helpful: 26,
      views: 598
    }
  ];

  const filteredFAQ = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const popularQuestions = faqItems
    .sort((a, b) => b.views - a.views)
    .slice(0, 5);

  const handleHelpful = (id: number) => {
    console.log('Marked as helpful:', id);
    // Здесь будет логика отметки "полезно"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Часто задаваемые вопросы</h1>
          <p className="text-xl text-gray-600">Найдите ответы на популярные вопросы</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Search and Categories */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="mb-6">
            <div className="relative">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Поиск по вопросам..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {faqCategories.map(category => (
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

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main FAQ Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="all">Все вопросы</TabsTrigger>
                <TabsTrigger value="popular">Популярные</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6">
                {filteredFAQ.length > 0 ? (
                  <Accordion type="single" collapsible className="space-y-4">
                    {filteredFAQ.map((item) => (
                      <AccordionItem key={item.id} value={`item-${item.id}`}>
                        <Card>
                          <AccordionTrigger className="px-6 py-4 hover:no-underline">
                            <div className="flex items-start gap-4 text-left">
                              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <Icon name="HelpCircle" size={16} className="text-primary" />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-lg mb-2">{item.question}</h3>
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                  <div className="flex items-center gap-1">
                                    <Icon name="Eye" size={14} />
                                    <span>{item.views}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Icon name="ThumbsUp" size={14} />
                                    <span>{item.helpful}</span>
                                  </div>
                                  <Badge variant="outline" className="text-xs">
                                    {faqCategories.find(c => c.id === item.category)?.name}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="px-6 pb-4">
                              <div className="ml-12">
                                <p className="text-gray-700 leading-relaxed mb-4">
                                  {item.answer}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mb-4">
                                  {item.tags.map((tag, index) => (
                                    <Badge key={index} variant="secondary" className="text-xs">
                                      #{tag}
                                    </Badge>
                                  ))}
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t">
                                  <button
                                    onClick={() => handleHelpful(item.id)}
                                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors"
                                  >
                                    <Icon name="ThumbsUp" size={16} />
                                    Полезно ({item.helpful})
                                  </button>
                                  <div className="flex gap-2">
                                    <Button variant="ghost" size="sm">
                                      <Icon name="Share" size={14} className="mr-1" />
                                      Поделиться
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </AccordionContent>
                        </Card>
                      </AccordionItem>
                    ))}
                  </Accordion>
                ) : (
                  <div className="text-center py-12">
                    <Icon name="Search" size={48} className="text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Вопросы не найдены
                    </h3>
                    <p className="text-gray-600">
                      Попробуйте изменить поисковый запрос или выбрать другую категорию
                    </p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="popular" className="mt-6">
                <div className="space-y-4">
                  {popularQuestions.map((item, index) => (
                    <Card key={item.id}>
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-yellow-600 font-bold text-sm">#{index + 1}</span>
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg mb-2">{item.question}</CardTitle>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <Icon name="Eye" size={14} />
                                <span>{item.views} просмотров</span>
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {faqCategories.find(c => c.id === item.category)?.name}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Статистика</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Всего вопросов</span>
                      <Badge variant="secondary">{faqItems.length}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Категорий</span>
                      <Badge variant="secondary">{faqCategories.length - 1}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Среднее время ответа</span>
                      <Badge variant="secondary">2 часа</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Support */}
              <Card className="bg-primary text-white">
                <CardHeader>
                  <CardTitle className="text-lg">Не нашли ответ?</CardTitle>
                  <CardDescription className="text-white/80">
                    Свяжитесь с нашей службой поддержки
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="secondary" className="w-full">
                      <Icon name="Phone" size={16} className="mr-2" />
                      Позвонить
                    </Button>
                    <Button variant="outline" className="w-full text-white border-white/30 hover:bg-white/10">
                      <Icon name="Mail" size={16} className="mr-2" />
                      Написать
                    </Button>
                    <Button variant="outline" className="w-full text-white border-white/30 hover:bg-white/10">
                      <Icon name="MessageCircle" size={16} className="mr-2" />
                      Онлайн-чат
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Popular Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Популярные темы</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {faqCategories.slice(1, 6).map((category) => {
                      const count = faqItems.filter(item => item.category === category.id).length;
                      return (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors text-left"
                        >
                          <div className="flex items-center gap-2">
                            <Icon name={category.icon as any} size={16} className="text-primary" />
                            <span className="text-sm">{category.name}</span>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {count}
                          </Badge>
                        </button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Helpful Resources */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Полезные ресурсы</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <a href="/eye-test" className="flex items-center gap-2 text-sm text-primary hover:underline">
                      <Icon name="Eye" size={16} />
                      Тест зрения онлайн
                    </a>
                    <a href="/appointment" className="flex items-center gap-2 text-sm text-primary hover:underline">
                      <Icon name="Calendar" size={16} />
                      Записаться на прием
                    </a>
                    <a href="/blog" className="flex items-center gap-2 text-sm text-primary hover:underline">
                      <Icon name="BookOpen" size={16} />
                      Блог о зрении
                    </a>
                    <a href="/contacts" className="flex items-center gap-2 text-sm text-primary hover:underline">
                      <Icon name="MapPin" size={16} />
                      Наши адреса
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;