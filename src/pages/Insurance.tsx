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

const Insurance = () => {
  const [selectedInsurance, setSelectedInsurance] = useState('');
  const [policyNumber, setPolicyNumber] = useState('');
  const [checkResult, setCheckResult] = useState<any>(null);

  const insuranceCompanies = [
    {
      id: 'sogaz',
      name: 'СОГАЗ',
      logo: '/placeholder.svg',
      coverage: {
        examination: 100,
        glasses: 80,
        lenses: 70,
        repair: 50
      },
      limits: {
        annual: 15000,
        glasses: 10000,
        examination: 2000
      },
      features: [
        'Полная диагностика зрения',
        'Компенсация до 80% стоимости очков',
        'Работа с детьми',
        'Экстренная помощь'
      ],
      documents: ['Полис ОМС', 'Паспорт', 'Направление врача'],
      rating: 4.7,
      clients: 1200
    },
    {
      id: 'reso',
      name: 'РЕСО-Гарантия',
      logo: '/placeholder.svg',
      coverage: {
        examination: 100,
        glasses: 75,
        lenses: 65,
        repair: 40
      },
      limits: {
        annual: 12000,
        glasses: 8000,
        examination: 1500
      },
      features: [
        'Быстрое оформление',
        'Онлайн-консультации',
        'Сеть партнеров',
        'Семейные программы'
      ],
      documents: ['Полис ДМС', 'Паспорт', 'Справка от врача'],
      rating: 4.5,
      clients: 890
    },
    {
      id: 'ingos',
      name: 'ИНГОССТРАХ',
      logo: '/placeholder.svg',
      coverage: {
        examination: 90,
        glasses: 70,
        lenses: 60,
        repair: 30
      },
      limits: {
        annual: 10000,
        glasses: 7000,
        examination: 1200
      },
      features: [
        'Широкая сеть клиник',
        'Телемедицина',
        'Профилактические программы',
        'Корпоративные тарифы'
      ],
      documents: ['Полис ДМС', 'Паспорт'],
      rating: 4.3,
      clients: 756
    },
    {
      id: 'alfastrah',
      name: 'АльфаСтрахование',
      logo: '/placeholder.svg',
      coverage: {
        examination: 100,
        glasses: 85,
        lenses: 75,
        repair: 60
      },
      limits: {
        annual: 20000,
        glasses: 15000,
        examination: 3000
      },
      features: [
        'Премиум обслуживание',
        'Индивидуальный подход',
        'Консьерж-сервис',
        'VIP-программы'
      ],
      documents: ['Полис ДМС', 'Паспорт', 'Карта клиента'],
      rating: 4.8,
      clients: 2100
    }
  ];

  const coverageTypes = [
    {
      type: 'examination',
      name: 'Диагностика зрения',
      description: 'Полное обследование у офтальмолога',
      icon: 'Eye',
      typical: '100%',
      includes: [
        'Проверка остроты зрения',
        'Измерение внутриглазного давления',
        'Осмотр глазного дна',
        'Консультация врача'
      ]
    },
    {
      type: 'glasses',
      name: 'Очки и оправы',
      description: 'Компенсация стоимости очков',
      icon: 'Glasses',
      typical: '70-85%',
      includes: [
        'Оправы из утвержденного списка',
        'Стандартные линзы',
        'Базовые покрытия',
        'Работа оптика'
      ]
    },
    {
      type: 'lenses',
      name: 'Специальные линзы',
      description: 'Прогрессивные и специализированные линзы',
      icon: 'Circle',
      typical: '60-75%',
      includes: [
        'Прогрессивные линзы',
        'Фотохромные линзы',
        'Антибликовые покрытия',
        'Поляризационные линзы'
      ]
    },
    {
      type: 'repair',
      name: 'Ремонт и обслуживание',
      description: 'Восстановление поврежденных очков',
      icon: 'Wrench',
      typical: '30-60%',
      includes: [
        'Замена винтов и носоупоров',
        'Ремонт оправы',
        'Регулировка посадки',
        'Профессиональная чистка'
      ]
    }
  ];

  const claimProcess = [
    {
      step: 1,
      title: 'Получение услуги',
      description: 'Пройдите обследование или купите очки в нашем салоне',
      icon: 'ShoppingCart',
      documents: ['Чек об оплате', 'Медицинская справка']
    },
    {
      step: 2,
      title: 'Сбор документов',
      description: 'Подготовьте необходимые документы для страховой',
      icon: 'FileText',
      documents: ['Полис страхования', 'Паспорт', 'Справка врача']
    },
    {
      step: 3,
      title: 'Подача заявления',
      description: 'Подайте заявление в страховую компанию',
      icon: 'Send',
      documents: ['Заявление', 'Копии документов', 'Оригиналы чеков']
    },
    {
      step: 4,
      title: 'Рассмотрение',
      description: 'Страховая компания рассматривает заявление',
      icon: 'Clock',
      documents: ['Может потребоваться дополнительная экспертиза']
    },
    {
      step: 5,
      title: 'Выплата',
      description: 'Получение компенсации на банковский счет',
      icon: 'CreditCard',
      documents: ['Реквизиты банковского счета']
    }
  ];

  const handleInsuranceCheck = () => {
    if (policyNumber.length >= 8 && selectedInsurance) {
      const company = insuranceCompanies.find(c => c.id === selectedInsurance);
      setCheckResult({
        valid: true,
        company: company?.name,
        coverage: company?.coverage,
        limits: company?.limits,
        remainingAmount: company?.limits.annual ? company.limits.annual - 3500 : 0,
        usedAmount: 3500,
        validUntil: '2024-12-31'
      });
    } else {
      setCheckResult({
        valid: false,
        message: 'Полис не найден или данные введены неверно'
      });
    }
  };

  const faqItems = [
    {
      question: 'Какие документы нужны для получения компенсации?',
      answer: 'Обычно требуется полис страхования, паспорт, справка от врача-офтальмолога, чек об оплате услуг и заявление на компенсацию.'
    },
    {
      question: 'Сколько времени занимает рассмотрение заявления?',
      answer: 'Стандартный срок рассмотрения составляет 10-30 рабочих дней в зависимости от страховой компании и сложности случая.'
    },
    {
      question: 'Можно ли получить компенсацию за очки, купленные в другом салоне?',
      answer: 'Да, если салон входит в сеть партнеров вашей страховой компании или если ваш полис предусматривает свободный выбор поставщика услуг.'
    },
    {
      question: 'Покрывается ли страховкой ремонт очков?',
      answer: 'Это зависит от условий вашего полиса. Некоторые страховые компании частично компенсируют стоимость ремонта, особенно если поломка произошла не по вине владельца.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-4">Страхование и ДМС</h1>
          <p className="text-xl opacity-90">Получите компенсацию за услуги оптики</p>
          <div className="mt-6 flex items-center gap-4">
            <Badge className="bg-white/20 text-white border-white/30">
              <Icon name="Shield" size={16} className="mr-2" />
              Работаем со всеми страховыми
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30">
              <Icon name="CreditCard" size={16} className="mr-2" />
              Компенсация до 100%
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="companies" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="companies">Страховые компании</TabsTrigger>
            <TabsTrigger value="check-policy">Проверить полис</TabsTrigger>
            <TabsTrigger value="claim-process">Процедура возмещения</TabsTrigger>
            <TabsTrigger value="faq">Вопросы</TabsTrigger>
          </TabsList>

          {/* Insurance Companies */}
          <TabsContent value="companies" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {insuranceCompanies.map((company) => (
                <Card key={company.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <Icon name="Building" size={32} className="text-gray-400" />
                    </div>
                    <CardTitle className="text-lg">{company.name}</CardTitle>
                    <div className="flex items-center justify-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            size={14}
                            className={`${
                              i < Math.floor(company.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">{company.rating}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div>
                        <p className="text-xs font-medium text-gray-500 mb-1">Покрытие:</p>
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span>Диагностика:</span>
                            <Badge variant="outline">{company.coverage.examination}%</Badge>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span>Очки:</span>
                            <Badge variant="outline">{company.coverage.glasses}%</Badge>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="text-xs font-medium text-gray-500 mb-1">Лимиты в год:</p>
                        <div className="text-center">
                          <span className="text-lg font-bold text-primary">
                            {company.limits.annual.toLocaleString()} ₽
                          </span>
                        </div>
                      </div>

                      <div>
                        <p className="text-xs font-medium text-gray-500 mb-1">Клиентов:</p>
                        <div className="text-center">
                          <Badge variant="secondary">{company.clients}</Badge>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full" size="sm">
                      Подробнее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-center">Типы покрытия</CardTitle>
                <CardDescription className="text-center">
                  Что обычно покрывает страховка
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {coverageTypes.map((coverage) => (
                    <Card key={coverage.type} className="border-l-4 border-l-primary">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <Icon name={coverage.icon as any} size={20} className="text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{coverage.name}</CardTitle>
                            <Badge variant="outline" className="text-xs">
                              {coverage.typical}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 mb-3">{coverage.description}</p>
                        <div>
                          <p className="text-xs font-medium text-gray-500 mb-1">Включает:</p>
                          <ul className="space-y-1">
                            {coverage.includes.slice(0, 3).map((item, index) => (
                              <li key={index} className="text-xs flex items-center">
                                <Icon name="Check" size={12} className="mr-1 text-green-500" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Policy Check */}
          <TabsContent value="check-policy" className="mt-8">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Проверка полиса</CardTitle>
                  <CardDescription>
                    Узнайте, какие услуги покрывает ваша страховка
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Страховая компания *</label>
                      <Select value={selectedInsurance} onValueChange={setSelectedInsurance}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите страховую компанию" />
                        </SelectTrigger>
                        <SelectContent>
                          {insuranceCompanies.map(company => (
                            <SelectItem key={company.id} value={company.id}>
                              {company.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Номер полиса *</label>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Введите номер полиса"
                          value={policyNumber}
                          onChange={(e) => setPolicyNumber(e.target.value)}
                          className="flex-1"
                        />
                        <Button onClick={handleInsuranceCheck}>
                          <Icon name="Search" size={16} className="mr-2" />
                          Проверить
                        </Button>
                      </div>
                    </div>

                    {checkResult && (
                      <div className="mt-6">
                        {checkResult.valid ? (
                          <Card className="bg-green-50 border-green-200">
                            <CardHeader>
                              <CardTitle className="text-green-800 flex items-center">
                                <Icon name="CheckCircle" size={20} className="mr-2" />
                                Полис действителен
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                  <div>
                                    <p className="text-sm text-gray-600">Страховая компания:</p>
                                    <p className="font-semibold">{checkResult.company}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-gray-600">Действует до:</p>
                                    <p className="font-semibold">{checkResult.validUntil}</p>
                                  </div>
                                </div>

                                <div>
                                  <p className="text-sm text-gray-600 mb-2">Использовано в этом году:</p>
                                  <div className="flex justify-between text-sm mb-1">
                                    <span>{checkResult.usedAmount.toLocaleString()} ₽</span>
                                    <span>{checkResult.limits.annual.toLocaleString()} ₽</span>
                                  </div>
                                  <Progress 
                                    value={(checkResult.usedAmount / checkResult.limits.annual) * 100} 
                                    className="h-2"
                                  />
                                  <p className="text-xs text-gray-500 mt-1">
                                    Остаток: {checkResult.remainingAmount.toLocaleString()} ₽
                                  </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                                    <div className="text-2xl font-bold text-blue-600">
                                      {checkResult.coverage.examination}%
                                    </div>
                                    <div className="text-xs text-gray-600">Диагностика</div>
                                  </div>
                                  <div className="text-center p-3 bg-green-50 rounded-lg">
                                    <div className="text-2xl font-bold text-green-600">
                                      {checkResult.coverage.glasses}%
                                    </div>
                                    <div className="text-xs text-gray-600">Очки</div>
                                  </div>
                                </div>

                                <Button className="w-full">
                                  <Icon name="Calendar" size={16} className="mr-2" />
                                  Записаться по страховке
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ) : (
                          <Alert className="border-red-200 bg-red-50">
                            <Icon name="AlertCircle" size={16} className="text-red-600" />
                            <AlertDescription className="text-red-800">
                              {checkResult.message}
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
                  <CardTitle>Как найти номер полиса?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Icon name="CreditCard" size={20} className="text-primary mt-1" />
                      <div>
                        <p className="font-medium">Пластиковая карта</p>
                        <p className="text-sm text-gray-600">
                          Номер указан на лицевой стороне карты полиса
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="FileText" size={20} className="text-primary mt-1" />
                      <div>
                        <p className="font-medium">Договор страхования</p>
                        <p className="text-sm text-gray-600">
                          В верхней части документа
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Smartphone" size={20} className="text-primary mt-1" />
                      <div>
                        <p className="font-medium">Мобильное приложение</p>
                        <p className="text-sm text-gray-600">
                          В личном кабинете страховой компании
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Phone" size={20} className="text-primary mt-1" />
                      <div>
                        <p className="font-medium">Звонок в страховую</p>
                        <p className="text-sm text-gray-600">
                          По паспортным данным
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Claim Process */}
          <TabsContent value="claim-process" className="mt-8">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Процедура получения компенсации</CardTitle>
                  <CardDescription>
                    Пошаговая инструкция для возмещения расходов
                  </CardDescription>
                </CardHeader>
              </Card>

              <div className="grid md:grid-cols-5 gap-4 mb-8">
                {claimProcess.map((step, index) => (
                  <Card key={index} className="text-center relative">
                    {index < claimProcess.length - 1 && (
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
                      <div className="space-y-1">
                        {step.documents.map((doc, i) => (
                          <p key={i} className="text-xs text-gray-500">• {doc}</p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="FileText" size={20} className="mr-2 text-primary" />
                      Необходимые документы
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold mb-2">Обязательные:</h4>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center">
                            <Icon name="Check" size={14} className="mr-2 text-green-500" />
                            Полис страхования (оригинал)
                          </li>
                          <li className="flex items-center">
                            <Icon name="Check" size={14} className="mr-2 text-green-500" />
                            Паспорт (копия)
                          </li>
                          <li className="flex items-center">
                            <Icon name="Check" size={14} className="mr-2 text-green-500" />
                            Справка врача-офтальмолога
                          </li>
                          <li className="flex items-center">
                            <Icon name="Check" size={14} className="mr-2 text-green-500" />
                            Чек об оплате услуг
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Дополнительные:</h4>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center">
                            <Icon name="Minus" size={14} className="mr-2 text-gray-400" />
                            Рецепт на очки
                          </li>
                          <li className="flex items-center">
                            <Icon name="Minus" size={14} className="mr-2 text-gray-400" />
                            Результаты обследований
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Clock" size={20} className="mr-2 text-primary" />
                      Сроки и условия
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Подача документов</span>
                        <Badge variant="outline">до 30 дней</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Рассмотрение заявления</span>
                        <Badge variant="outline">10-30 дней</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Выплата компенсации</span>
                        <Badge variant="outline">5-10 дней</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Срок действия справки</span>
                        <Badge variant="outline">30 дней</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Alert className="mt-6">
                <Icon name="Info" size={16} />
                <AlertDescription>
                  <strong>Важно:</strong> Перед получением услуг обязательно уточните у своей страховой компании 
                  актуальные условия покрытия и список необходимых документов.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>

          {/* FAQ */}
          <TabsContent value="faq" className="mt-8">
            <div className="max-w-3xl mx-auto">
              <Card className="mb-6">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Часто задаваемые вопросы</CardTitle>
                  <CardDescription>
                    Ответы на популярные вопросы о страховании
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

              <Card className="mt-8 bg-gradient-to-r from-green-50 to-teal-50 border-green-200">
                <CardContent className="text-center py-8">
                  <Icon name="Headphones" size={48} className="text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Нужна помощь со страховкой?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Наши специалисты помогут разобраться с документами и процедурами
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg">
                      <Icon name="Phone" size={20} className="mr-2" />
                      Консультация по страховке
                    </Button>
                    <Button size="lg" variant="outline">
                      <Icon name="FileText" size={20} className="mr-2" />
                      Помощь с документами
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

export default Insurance;