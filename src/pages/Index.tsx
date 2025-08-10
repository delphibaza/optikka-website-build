import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

interface EyeTestResult {
  step: number;
  result: string;
}

const Index = () => {
  const [eyeTestStep, setEyeTestStep] = useState(0);
  const [eyeTestResults, setEyeTestResults] = useState<EyeTestResult[]>([]);
  const [isEyeTestOpen, setIsEyeTestOpen] = useState(false);

  const eyeTestQuestions = [
    {
      question: "Закройте левый глаз. Можете ли вы четко видеть букву 'E' в верхнем ряду?",
      chart: "E F P T O Z",
      options: ["Да, четко", "Размыто", "Совсем не вижу"]
    },
    {
      question: "Теперь закройте правый глаз. Видите ли вы среднюю линию четко?",
      chart: "D F P O T E C",
      options: ["Да, четко", "Размыто", "Совсем не вижу"]
    },
    {
      question: "Откройте оба глаза. Можете ли вы прочитать нижнюю строку?",
      chart: "P E D F C Z P",
      options: ["Да, легко", "С трудом", "Не могу прочитать"]
    }
  ];

  const handleEyeTestAnswer = (answer: string) => {
    const newResult: EyeTestResult = { step: eyeTestStep + 1, result: answer };
    setEyeTestResults([...eyeTestResults, newResult]);
    
    if (eyeTestStep < eyeTestQuestions.length - 1) {
      setEyeTestStep(eyeTestStep + 1);
    } else {
      // Тест завершен
      setTimeout(() => {
        setIsEyeTestOpen(false);
        setEyeTestStep(0);
        setEyeTestResults([]);
      }, 2000);
    }
  };

  const resetEyeTest = () => {
    setEyeTestStep(0);
    setEyeTestResults([]);
  };

  const frames = [
    {
      id: 1,
      name: "Classic Round",
      brand: "Оптикка Premium",
      price: "12 990",
      image: "/placeholder.svg",
      features: ["Титан", "UV защита", "Антибликовое покрытие"],
      discount: "-20%"
    },
    {
      id: 2,
      name: "Modern Square",
      brand: "Оптикка Style",
      price: "8 990",
      image: "/placeholder.svg", 
      features: ["Металл", "Легкий вес", "Гипоаллергенный"],
      discount: ""
    },
    {
      id: 3,
      name: "Sport Active",
      brand: "Оптикка Sport",
      price: "15 990",
      image: "/placeholder.svg",
      features: ["Поликарбонат", "Ударопрочный", "Гибкая оправа"],
      discount: "-15%"
    }
  ];

  const services = [
    {
      icon: "Eye",
      title: "Диагностика зрения",
      description: "Полное обследование зрения на современном оборудовании",
      price: "от 1 500 ₽"
    },
    {
      icon: "Glasses",
      title: "Подбор оправы",
      description: "Индивидуальный подбор оправы по форме лица и стилю",
      price: "Бесплатно"
    },
    {
      icon: "Settings",
      title: "Изготовление линз",
      description: "Изготовление линз любой сложности за 30 минут",
      price: "от 2 900 ₽"
    },
    {
      icon: "Shield",
      title: "Ремонт очков",
      description: "Профессиональный ремонт оправ и замена комплектующих",
      price: "от 500 ₽"
    }
  ];

  const offers = [
    {
      title: "Вторые очки в подарок",
      description: "При покупке очков от 15 000 ₽ - вторая пара солнцезащитных в подарок",
      validity: "до 31 августа",
      discount: "50%"
    },
    {
      title: "Скидка студентам",
      description: "Специальная скидка 25% студентам при предъявлении студенческого билета",
      validity: "постоянно",
      discount: "25%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Glasses" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Оптикка</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-gray-600 hover:text-primary transition-colors">Каталог</a>
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#offers" className="text-gray-600 hover:text-primary transition-colors">Акции</a>
              <a href="#contacts" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О нас</a>
            </nav>
            <Button className="hidden md:flex">
              <Icon name="Phone" size={18} className="mr-2" />
              Записаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10"></div>
        <div className="container mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Четкое зрение — <span className="text-primary">яркая жизнь</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Современные технологии диагностики, широкий выбор оправ и индивидуальный подход к каждому клиенту
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog open={isEyeTestOpen} onOpenChange={setIsEyeTestOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="text-lg px-8 py-3">
                      <Icon name="Eye" size={20} className="mr-2" />
                      Тест зрения онлайн
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Онлайн-тест зрения</DialogTitle>
                      <DialogDescription>
                        Простая предварительная проверка зрения. Не заменяет профессиональную диагностику.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-6">
                      {eyeTestStep < eyeTestQuestions.length ? (
                        <div className="text-center space-y-6">
                          <Progress value={(eyeTestStep + 1) / eyeTestQuestions.length * 100} className="w-full" />
                          <div className="bg-gray-50 p-8 rounded-xl">
                            <div className="text-4xl font-mono tracking-widest mb-4 text-gray-900">
                              {eyeTestQuestions[eyeTestStep].chart}
                            </div>
                            <p className="text-sm text-gray-500">Отойдите на расстояние 50-60 см от экрана</p>
                          </div>
                          <p className="text-lg font-medium">{eyeTestQuestions[eyeTestStep].question}</p>
                          <div className="flex flex-col space-y-2">
                            {eyeTestQuestions[eyeTestStep].options.map((option, index) => (
                              <Button
                                key={index}
                                variant="outline"
                                onClick={() => handleEyeTestAnswer(option)}
                                className="text-left justify-start"
                              >
                                {option}
                              </Button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="text-center space-y-4">
                          <Icon name="CheckCircle" size={48} className="text-green-500 mx-auto" />
                          <h3 className="text-xl font-bold">Тест завершен!</h3>
                          <p className="text-gray-600">Для точной диагностики запишитесь на прием к нашему специалисту</p>
                          <Button onClick={resetEyeTest}>Пройти тест заново</Button>
                        </div>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  <Icon name="MapPin" size={20} className="mr-2" />
                  Наши адреса
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src={`/img/0f443cc4-e5a8-416e-bf6b-0d5948aa64f8.jpg`}
                alt="Современный салон оптики"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Популярные оправы</h2>
            <p className="text-xl text-gray-600">Выберите идеальную оправу для вашего стиля</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {frames.map((frame) => (
              <Card key={frame.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                    <Icon name="Glasses" size={64} className="text-gray-400" />
                    {frame.discount && (
                      <Badge className="absolute top-3 right-3 bg-red-500">{frame.discount}</Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{frame.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{frame.brand}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {frame.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">{feature}</Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">{frame.price} ₽</span>
                    <Button className="group-hover:bg-primary/90">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Показать все оправы
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Профессиональный уход за вашим зрением</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Badge variant="outline" className="text-primary border-primary">{service.price}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section id="offers" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Актуальные акции</h2>
            <p className="text-xl text-gray-600">Выгодные предложения для наших клиентов</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {offers.map((offer, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">-{offer.discount}</span>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary mb-2">{offer.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base">{offer.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-green-100 text-green-800">Действует {offer.validity}</Badge>
                    <Button>Подробнее</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Мы всегда рады вам помочь</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="MapPin" size={24} className="mr-3 text-primary" />
                  Адрес
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">ул. Пушкина, 15<br />г. Москва, 125009</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Phone" size={24} className="mr-3 text-primary" />
                  Телефон
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">+7 (495) 123-45-67<br />+7 (800) 555-01-02</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Clock" size={24} className="mr-3 text-primary" />
                  Режим работы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Пн-Вс: 10:00-21:00<br />Без выходных</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">О нас</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Салон оптики "Оптикка" работает уже более 10 лет, предоставляя качественные услуги 
              по диагностике зрения и подбору оптических изделий. Наша команда профессиональных 
              оптометристов использует современное оборудование для точной диагностики и подбора очков.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <p className="text-gray-600">лет опыта</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                <p className="text-gray-600">довольных клиентов</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <p className="text-gray-600">видов оправ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Glasses" size={18} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">Оптикка</h3>
              </div>
              <p className="text-gray-400">Четкое зрение — яркая жизнь</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Диагностика зрения</li>
                <li>Подбор оправы</li>
                <li>Изготовление линз</li>
                <li>Ремонт очков</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О компании</li>
                <li>Акции</li>
                <li>Гарантия</li>
                <li>Доставка</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@optikka.ru</li>
                <li>ул. Пушкина, 15</li>
                <li>г. Москва</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Оптикка. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;