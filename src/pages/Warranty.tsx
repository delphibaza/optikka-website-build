import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Warranty = () => {
  const [warrantyNumber, setWarrantyNumber] = useState('');
  const [warrantyResult, setWarrantyResult] = useState<any>(null);

  const warrantyTypes = [
    {
      type: 'frames',
      title: 'Оправы',
      period: '12 месяцев',
      coverage: [
        'Производственные дефекты',
        'Поломка креплений',
        'Дефекты материала',
        'Нарушение геометрии'
      ],
      notCovered: [
        'Механические повреждения',
        'Царапины от неправильного ухода',
        'Повреждения от падения',
        'Износ от длительного использования'
      ],
      color: 'blue'
    },
    {
      type: 'lenses',
      title: 'Линзы',
      period: '6 месяцев',
      coverage: [
        'Дефекты покрытия',
        'Оптические искажения',
        'Отслоение покрытий',
        'Производственный брак'
      ],
      notCovered: [
        'Царапины',
        'Сколы',
        'Повреждения от химических веществ',
        'Неправильная эксплуатация'
      ],
      color: 'green'
    },
    {
      type: 'repair',
      title: 'Ремонт',
      period: '3 месяца',
      coverage: [
        'Качество выполненных работ',
        'Замененные детали',
        'Повторная поломка того же элемента'
      ],
      notCovered: [
        'Новые повреждения',
        'Поломки других элементов',
        'Износ отремонтированных деталей'
      ],
      color: 'orange'
    }
  ];

  const warrantyProcess = [
    {
      step: 1,
      title: 'Обращение',
      description: 'Обратитесь в любой салон с очками и гарантийным талоном',
      icon: 'Phone'
    },
    {
      step: 2,
      title: 'Диагностика',
      description: 'Специалист проведет диагностику и определит причину дефекта',
      icon: 'Search'
    },
    {
      step: 3,
      title: 'Решение',
      description: 'При подтверждении гарантийного случая - бесплатный ремонт или замена',
      icon: 'CheckCircle'
    },
    {
      step: 4,
      title: 'Получение',
      description: 'Получите отремонтированные или новые очки',
      icon: 'Package'
    }
  ];

  const handleWarrantyCheck = () => {
    // Симуляция проверки гарантии
    if (warrantyNumber.length >= 8) {
      setWarrantyResult({
        valid: true,
        product: 'Очки Ray-Ban Aviator',
        purchaseDate: '2024-03-15',
        warrantyPeriod: '12 месяцев',
        remainingDays: 245,
        status: 'active',
        coverage: 'Полная гарантия'
      });
    } else {
      setWarrantyResult({
        valid: false,
        message: 'Гарантийный номер не найден'
      });
    }
  };

  const faqItems = [
    {
      question: 'Что делать, если потерял гарантийный талон?',
      answer: 'При утере гарантийного талона мы можем найти информацию о покупке по номеру телефона или email, указанным при покупке. Также сохраняется электронная копия чека.'
    },
    {
      question: 'Распространяется ли гарантия на солнцезащитные очки?',
      answer: 'Да, на солнцезащитные очки распространяется такая же гарантия: 12 месяцев на оправу и 6 месяцев на линзы.'
    },
    {
      question: 'Можно ли вернуть очки, если они не подошли?',
      answer: 'В течение 14 дней с момента покупки вы можете вернуть очки при условии сохранения товарного вида и наличия чека.'
    },
    {
      question: 'Что делать, если очки сломались в другом городе?',
      answer: 'Обратитесь в любой салон нашей сети или к официальным партнерам. Список партнеров можно найти на сайте или уточнить по телефону горячей линии.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Гарантия и возврат</h1>
          <p className="text-xl text-gray-600">Информация о гарантийных обязательствах</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="warranty-info" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="warranty-info">Условия гарантии</TabsTrigger>
            <TabsTrigger value="check-warranty">Проверить гарантию</TabsTrigger>
            <TabsTrigger value="warranty-process">Процедура</TabsTrigger>
            <TabsTrigger value="faq">Вопросы</TabsTrigger>
          </TabsList>

          {/* Warranty Information */}
          <TabsContent value="warranty-info" className="mt-8">
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              {warrantyTypes.map((warranty, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-${warranty.color}-500`}></div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{warranty.title}</CardTitle>
                      <Badge className={`bg-${warranty.color}-100 text-${warranty.color}-800`}>
                        {warranty.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                          <Icon name="Check" size={16} className="mr-2" />
                          Покрывается гарантией:
                        </h4>
                        <ul className="space-y-1">
                          {warranty.coverage.map((item, i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-center">
                              <Icon name="Dot" size={16} className="mr-1 text-green-500" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-red-700 mb-2 flex items-center">
                          <Icon name="X" size={16} className="mr-2" />
                          Не покрывается:
                        </h4>
                        <ul className="space-y-1">
                          {warranty.notCovered.map((item, i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-center">
                              <Icon name="Dot" size={16} className="mr-1 text-red-500" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Shield" size={24} className="mr-3 text-primary" />
                    Дополнительные условия
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Icon name="Clock" size={16} className="mr-3 mt-1 text-blue-500" />
                      <div>
                        <p className="font-medium">Срок рассмотрения</p>
                        <p className="text-sm text-gray-600">До 14 рабочих дней</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Icon name="FileText" size={16} className="mr-3 mt-1 text-blue-500" />
                      <div>
                        <p className="font-medium">Необходимые документы</p>
                        <p className="text-sm text-gray-600">Гарантийный талон и чек</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Icon name="MapPin" size={16} className="mr-3 mt-1 text-blue-500" />
                      <div>
                        <p className="font-medium">Место обращения</p>
                        <p className="text-sm text-gray-600">Любой салон сети</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Phone" size={16} className="mr-3 mt-1 text-blue-500" />
                      <div>
                        <p className="font-medium">Горячая линия</p>
                        <p className="text-sm text-gray-600">+7 (800) 555-01-02</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="RotateCcw" size={24} className="mr-3 text-primary" />
                    Возврат товара
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Alert>
                      <Icon name="Info" size={16} />
                      <AlertDescription>
                        Возврат возможен в течение 14 дней с момента покупки
                      </AlertDescription>
                    </Alert>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium text-green-700">Условия возврата:</p>
                        <ul className="text-sm text-gray-600 mt-1 space-y-1">
                          <li>• Сохранен товарный вид</li>
                          <li>• Наличие чека или гарантийного талона</li>
                          <li>• Отсутствие следов эксплуатации</li>
                          <li>• Полная комплектация</li>
                        </ul>
                      </div>
                      
                      <div>
                        <p className="font-medium text-red-700">Не подлежат возврату:</p>
                        <ul className="text-sm text-gray-600 mt-1 space-y-1">
                          <li>• Очки по индивидуальному заказу</li>
                          <li>• Контактные линзы</li>
                          <li>• Товары со следами использования</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Check Warranty */}
          <TabsContent value="check-warranty" className="mt-8">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Проверка гарантии</CardTitle>
                  <CardDescription>
                    Введите номер гарантийного талона для проверки статуса
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Номер гарантийного талона
                      </label>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Например: GT-2024-001234"
                          value={warrantyNumber}
                          onChange={(e) => setWarrantyNumber(e.target.value)}
                          className="flex-1"
                        />
                        <Button onClick={handleWarrantyCheck}>
                          <Icon name="Search" size={16} className="mr-2" />
                          Проверить
                        </Button>
                      </div>
                    </div>

                    {warrantyResult && (
                      <div className="mt-6">
                        {warrantyResult.valid ? (
                          <Card className="bg-green-50 border-green-200">
                            <CardHeader>
                              <CardTitle className="text-green-800 flex items-center">
                                <Icon name="CheckCircle" size={20} className="mr-2" />
                                Гарантия действительна
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                  <p className="text-sm text-gray-600">Товар:</p>
                                  <p className="font-semibold">{warrantyResult.product}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-600">Дата покупки:</p>
                                  <p className="font-semibold">{warrantyResult.purchaseDate}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-600">Период гарантии:</p>
                                  <p className="font-semibold">{warrantyResult.warrantyPeriod}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-600">Статус:</p>
                                  <Badge className="bg-green-500">
                                    {warrantyResult.status === 'active' ? 'Активна' : 'Истекла'}
                                  </Badge>
                                </div>
                              </div>
                              
                              <div className="mt-4">
                                <div className="flex justify-between text-sm mb-2">
                                  <span>Осталось дней гарантии:</span>
                                  <span className="font-semibold">{warrantyResult.remainingDays}</span>
                                </div>
                                <Progress 
                                  value={(warrantyResult.remainingDays / 365) * 100} 
                                  className="h-2"
                                />
                              </div>

                              <div className="mt-4 pt-4 border-t">
                                <Button className="w-full">
                                  <Icon name="Phone" size={16} className="mr-2" />
                                  Обратиться по гарантии
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ) : (
                          <Alert className="border-red-200 bg-red-50">
                            <Icon name="AlertCircle" size={16} className="text-red-600" />
                            <AlertDescription className="text-red-800">
                              {warrantyResult.message}
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
                  <CardTitle className="text-lg">Где найти номер гарантийного талона?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Icon name="FileText" size={20} className="text-primary mt-1" />
                      <div>
                        <p className="font-medium">Гарантийный талон</p>
                        <p className="text-sm text-gray-600">
                          Номер указан в верхней части талона
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Receipt" size={20} className="text-primary mt-1" />
                      <div>
                        <p className="font-medium">Чек</p>
                        <p className="text-sm text-gray-600">
                          Дублируется в нижней части чека
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Mail" size={20} className="text-primary mt-1" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-gray-600">
                          Отправляется на электронную почту
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Smartphone" size={20} className="text-primary mt-1" />
                      <div>
                        <p className="font-medium">SMS</p>
                        <p className="text-sm text-gray-600">
                          Приходит в SMS после покупки
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Warranty Process */}
          <TabsContent value="warranty-process" className="mt-8">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Процедура гарантийного обслуживания</CardTitle>
                  <CardDescription>
                    Пошаговая инструкция для обращения по гарантии
                  </CardDescription>
                </CardHeader>
              </Card>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {warrantyProcess.map((step, index) => (
                  <Card key={index} className="text-center relative">
                    {index < warrantyProcess.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30 transform -translate-y-1/2"></div>
                    )}
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name={step.icon as any} size={24} className="text-primary" />
                      </div>
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold text-sm">{step.step}</span>
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Clock" size={20} className="mr-2 text-primary" />
                      Сроки рассмотрения
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Простые случаи</span>
                        <Badge variant="outline">1-3 дня</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Экспертиза</span>
                        <Badge variant="outline">7-14 дней</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Сложные случаи</span>
                        <Badge variant="outline">до 30 дней</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="FileText" size={20} className="mr-2 text-primary" />
                      Необходимые документы
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Icon name="Check" size={16} className="mr-2 text-green-500" />
                        <span className="text-sm">Гарантийный талон</span>
                      </li>
                      <li className="flex items-center">
                        <Icon name="Check" size={16} className="mr-2 text-green-500" />
                        <span className="text-sm">Чек или документ об оплате</span>
                      </li>
                      <li className="flex items-center">
                        <Icon name="Check" size={16} className="mr-2 text-green-500" />
                        <span className="text-sm">Паспорт покупателя</span>
                      </li>
                      <li className="flex items-center">
                        <Icon name="Check" size={16} className="mr-2 text-green-500" />
                        <span className="text-sm">Дефектные очки</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* FAQ */}
          <TabsContent value="faq" className="mt-8">
            <div className="max-w-3xl mx-auto">
              <Card className="mb-6">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Часто задаваемые вопросы</CardTitle>
                  <CardDescription>
                    Ответы на популярные вопросы о гарантии
                  </CardDescription>
                </CardHeader>
              </Card>

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
                  <Icon name="Phone" size={48} className="mx-auto mb-4 opacity-80" />
                  <h3 className="text-xl font-bold mb-2">Остались вопросы?</h3>
                  <p className="mb-6 opacity-90">
                    Свяжитесь с нашей службой поддержки для получения консультации
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="secondary">
                      <Icon name="Phone" size={16} className="mr-2" />
                      +7 (800) 555-01-02
                    </Button>
                    <Button variant="outline" className="text-white border-white/30 hover:bg-white/10">
                      <Icon name="Mail" size={16} className="mr-2" />
                      warranty@optikka.ru
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

export default Warranty;