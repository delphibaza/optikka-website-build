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

const ChildrenGlasses = () => {
  const [selectedAge, setSelectedAge] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [checklistProgress, setChecklistProgress] = useState(0);

  const ageGroups = [
    { value: 'all', label: 'Все возрасты' },
    { value: '3-6', label: '3-6 лет' },
    { value: '7-10', label: '7-10 лет' },
    { value: '11-14', label: '11-14 лет' },
    { value: '15-18', label: '15-18 лет' }
  ];

  const childrenFrames = [
    {
      id: 1,
      name: 'Funny Bear',
      ageGroup: '3-6',
      material: 'Силикон',
      price: 4990,
      features: ['Гибкая оправа', 'Яркие цвета', 'Безопасные материалы'],
      colors: ['Розовый', 'Синий', 'Зеленый', 'Красный'],
      safety: ['Без острых углов', 'Гипоаллергенный', 'Ударопрочный'],
      inStock: true,
      rating: 4.9,
      reviews: 67
    },
    {
      id: 2,
      name: 'School Smart',
      ageGroup: '7-10',
      material: 'TR-90',
      price: 6990,
      features: ['Легкий вес', 'Прочная конструкция', 'Регулируемые дужки'],
      colors: ['Черный', 'Синий', 'Фиолетовый'],
      safety: ['Гибкие дужки', 'Мягкие носоупоры', 'Безопасное стекло'],
      inStock: true,
      rating: 4.7,
      reviews: 89
    },
    {
      id: 3,
      name: 'Teen Style',
      ageGroup: '11-14',
      material: 'Металл',
      price: 8990,
      features: ['Модный дизайн', 'Взрослый стиль', 'Качественные материалы'],
      colors: ['Черный', 'Серебристый', 'Золотой'],
      safety: ['Закругленные края', 'Прочные петли', 'Качественные линзы'],
      inStock: true,
      rating: 4.6,
      reviews: 124
    },
    {
      id: 4,
      name: 'Sport Active Kids',
      ageGroup: '7-14',
      material: 'Поликарбонат',
      price: 7990,
      features: ['Спортивная оправа', 'Ремешок в комплекте', 'Ударопрочность'],
      colors: ['Черный/красный', 'Синий/белый', 'Зеленый/желтый'],
      safety: ['Максимальная защита', 'Эластичный ремешок', 'Поликарбонатные линзы'],
      inStock: true,
      rating: 4.8,
      reviews: 156
    }
  ];

  const warningSignsChecklist = [
    { id: 1, text: 'Ребенок щурится при рассматривании предметов', checked: false },
    { id: 2, text: 'Часто трет глаза или жалуется на усталость', checked: false },
    { id: 3, text: 'Держит книги очень близко к лицу', checked: false },
    { id: 4, text: 'Наклоняет голову при чтении или письме', checked: false },
    { id: 5, text: 'Жалуется на головные боли', checked: false },
    { id: 6, text: 'Избегает чтения или близкой работы', checked: false },
    { id: 7, text: 'Плохо видит доску в школе', checked: false },
    { id: 8, text: 'Один глаз косит или закрывается', checked: false },
    { id: 9, text: 'Спотыкается или неуклюже двигается', checked: false },
    { id: 10, text: 'Плохие оценки в школе без видимых причин', checked: false }
  ];

  const [checklist, setChecklist] = useState(warningSignsChecklist);

  const developmentStages = [
    {
      age: '0-2 года',
      title: 'Раннее развитие',
      milestones: [
        'Фокусировка на лицах',
        'Следование за движущимися объектами',
        'Координация глаз и рук'
      ],
      checkups: 'При подозрениях на проблемы'
    },
    {
      age: '3-5 лет',
      title: 'Дошкольный возраст',
      milestones: [
        'Развитие бинокулярного зрения',
        'Цветовосприятие',
        'Пространственное восприятие'
      ],
      checkups: 'Обязательный осмотр в 3-4 года'
    },
    {
      age: '6-12 лет',
      title: 'Школьный возраст',
      milestones: [
        'Формирование рефракции',
        'Развитие аккомодации',
        'Зрительная выносливость'
      ],
      checkups: 'Ежегодно, особенно при нагрузках'
    },
    {
      age: '13-18 лет',
      title: 'Подростковый период',
      milestones: [
        'Завершение формирования',
        'Стабилизация рефракции',
        'Готовность к контактным линзам'
      ],
      checkups: 'Каждые 6-12 месяцев'
    }
  ];

  const handleChecklistChange = (id: number) => {
    const updatedChecklist = checklist.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setChecklist(updatedChecklist);
    
    const checkedCount = updatedChecklist.filter(item => item.checked).length;
    setChecklistProgress((checkedCount / checklist.length) * 100);
  };

  const getChecklistRecommendation = () => {
    const checkedCount = checklist.filter(item => item.checked).length;
    if (checkedCount >= 5) {
      return {
        level: 'urgent',
        title: 'Срочно обратитесь к врачу',
        description: 'Обнаружено много признаков проблем со зрением',
        color: 'red'
      };
    } else if (checkedCount >= 3) {
      return {
        level: 'recommended',
        title: 'Рекомендуется консультация',
        description: 'Желательно показать ребенка специалисту',
        color: 'yellow'
      };
    } else if (checkedCount >= 1) {
      return {
        level: 'watch',
        title: 'Наблюдайте за ребенком',
        description: 'Следите за развитием симптомов',
        color: 'blue'
      };
    } else {
      return {
        level: 'good',
        title: 'Все в порядке',
        description: 'Признаков проблем не обнаружено',
        color: 'green'
      };
    }
  };

  const filteredFrames = childrenFrames.filter(frame => {
    const matchesAge = selectedAge === 'all' || frame.ageGroup === selectedAge;
    const matchesMaterial = selectedMaterial === 'all' || frame.material === selectedMaterial;
    return matchesAge && matchesMaterial;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-400 to-purple-500 text-white">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-4">Детские очки</h1>
          <p className="text-xl opacity-90">Забота о зрении с самого детства</p>
          <div className="mt-6 flex items-center gap-4">
            <Badge className="bg-white/20 text-white border-white/30">
              <Icon name="Heart" size={16} className="mr-2" />
              Безопасные материалы
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30">
              <Icon name="Shield" size={16} className="mr-2" />
              Ударопрочные линзы
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="catalog" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="catalog">Каталог</TabsTrigger>
            <TabsTrigger value="development">Развитие зрения</TabsTrigger>
            <TabsTrigger value="checklist">Проверка симптомов</TabsTrigger>
            <TabsTrigger value="care">Уход и безопасность</TabsTrigger>
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
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Возраст ребенка</label>
                      <Select value={selectedAge} onValueChange={setSelectedAge}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {ageGroups.map(age => (
                            <SelectItem key={age.value} value={age.value}>
                              {age.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Материал оправы</label>
                      <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Все материалы</SelectItem>
                          <SelectItem value="Силикон">Силикон</SelectItem>
                          <SelectItem value="TR-90">TR-90</SelectItem>
                          <SelectItem value="Металл">Металл</SelectItem>
                          <SelectItem value="Поликарбонат">Поликарбонат</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Products */}
              <div className="lg:col-span-3">
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredFrames.map((frame) => (
                    <Card key={frame.id} className="group hover:shadow-xl transition-all duration-300">
                      <CardHeader className="pb-4">
                        <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                          <Icon name="Glasses" size={64} className="text-purple-400" />
                          <Badge className="absolute top-3 right-3 bg-pink-500">
                            {frame.ageGroup}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{frame.name}</CardTitle>
                        <CardDescription>
                          Для детей {frame.ageGroup}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3 mb-4">
                          <div>
                            <p className="text-xs font-medium text-gray-500 mb-1">Материал:</p>
                            <Badge variant="outline" className="text-xs">{frame.material}</Badge>
                          </div>
                          
                          <div>
                            <p className="text-xs font-medium text-gray-500 mb-1">Доступные цвета:</p>
                            <div className="flex flex-wrap gap-1">
                              {frame.colors.slice(0, 3).map((color, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {color}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <p className="text-xs font-medium text-gray-500 mb-1">Безопасность:</p>
                            <div className="flex flex-wrap gap-1">
                              {frame.safety.slice(0, 2).map((safety, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {safety}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center mb-4">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Icon
                                key={i}
                                name="Star"
                                size={14}
                                className={`${
                                  i < Math.floor(frame.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600 ml-2">
                            {frame.rating} ({frame.reviews})
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-primary">
                            {frame.price.toLocaleString()} ₽
                          </span>
                          <Button className="group-hover:bg-primary/90">
                            <Icon name="ShoppingCart" size={16} className="mr-2" />
                            В корзину
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Vision Development */}
          <TabsContent value="development" className="mt-8">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Развитие зрения у детей</CardTitle>
                  <CardDescription>
                    Этапы формирования зрительной системы
                  </CardDescription>
                </CardHeader>
              </Card>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {developmentStages.map((stage, index) => (
                  <Card key={index}>
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="Baby" size={32} className="text-primary" />
                      </div>
                      <CardTitle className="text-lg">{stage.age}</CardTitle>
                      <CardDescription>{stage.title}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs font-medium text-gray-500 mb-1">Ключевые этапы:</p>
                          <ul className="space-y-1">
                            {stage.milestones.map((milestone, i) => (
                              <li key={i} className="text-xs flex items-center">
                                <Icon name="Dot" size={12} className="mr-1 text-primary" />
                                {milestone}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <p className="text-xs font-medium text-gray-500 mb-1">Осмотры:</p>
                          <p className="text-xs text-gray-600">{stage.checkups}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="AlertTriangle" size={20} className="mr-2 text-yellow-500" />
                      Факторы риска
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Icon name="Dot" size={14} className="mr-2 text-red-500" />
                        Наследственность (близорукость родителей)
                      </li>
                      <li className="flex items-center">
                        <Icon name="Dot" size={14} className="mr-2 text-red-500" />
                        Недоношенность
                      </li>
                      <li className="flex items-center">
                        <Icon name="Dot" size={14} className="mr-2 text-red-500" />
                        Чрезмерные зрительные нагрузки
                      </li>
                      <li className="flex items-center">
                        <Icon name="Dot" size={14} className="mr-2 text-red-500" />
                        Недостаток времени на улице
                      </li>
                      <li className="flex items-center">
                        <Icon name="Dot" size={14} className="mr-2 text-red-500" />
                        Неправильная осанка при чтении
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Shield" size={20} className="mr-2 text-green-500" />
                      Профилактика
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Icon name="Dot" size={14} className="mr-2 text-green-500" />
                        Регулярные перерывы при чтении (правило 20-20-20)
                      </li>
                      <li className="flex items-center">
                        <Icon name="Dot" size={14} className="mr-2 text-green-500" />
                        Достаточное освещение рабочего места
                      </li>
                      <li className="flex items-center">
                        <Icon name="Dot" size={14} className="mr-2 text-green-500" />
                        Минимум 2 часа на свежем воздухе ежедневно
                      </li>
                      <li className="flex items-center">
                        <Icon name="Dot" size={14} className="mr-2 text-green-500" />
                        Правильная осанка и расстояние до книги
                      </li>
                      <li className="flex items-center">
                        <Icon name="Dot" size={14} className="mr-2 text-green-500" />
                        Ограничение времени у экранов
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Symptoms Checklist */}
          <TabsContent value="checklist" className="mt-8">
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Проверка симптомов</CardTitle>
                  <CardDescription>
                    Отметьте симптомы, которые вы замечали у ребенка
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    {checklist.map((item) => (
                      <div key={item.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                        <input
                          type="checkbox"
                          id={`symptom-${item.id}`}
                          checked={item.checked}
                          onChange={() => handleChecklistChange(item.id)}
                          className="w-4 h-4 text-primary"
                        />
                        <label 
                          htmlFor={`symptom-${item.id}`}
                          className="flex-1 text-sm cursor-pointer"
                        >
                          {item.text}
                        </label>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Прогресс проверки:</span>
                      <span>{checklist.filter(item => item.checked).length} из {checklist.length}</span>
                    </div>
                    <Progress value={checklistProgress} className="h-2" />
                  </div>

                  {checklistProgress > 0 && (
                    <Alert className={`border-${getChecklistRecommendation().color}-200 bg-${getChecklistRecommendation().color}-50`}>
                      <Icon name="Info" size={16} className={`text-${getChecklistRecommendation().color}-600`} />
                      <AlertDescription className={`text-${getChecklistRecommendation().color}-800`}>
                        <strong>{getChecklistRecommendation().title}:</strong> {getChecklistRecommendation().description}
                      </AlertDescription>
                    </Alert>
                  )}

                  <div className="text-center mt-6">
                    <Button size="lg">
                      <Icon name="Calendar" size={20} className="mr-2" />
                      Записаться к детскому офтальмологу
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Care and Safety */}
          <TabsContent value="care" className="mt-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Heart" size={20} className="mr-2 text-red-500" />
                      Уход за детскими очками
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Ежедневный уход:</h4>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center">
                            <Icon name="Droplets" size={14} className="mr-2 text-blue-500" />
                            Протирать специальной салфеткой
                          </li>
                          <li className="flex items-center">
                            <Icon name="Home" size={14} className="mr-2 text-blue-500" />
                            Хранить в футляре дома
                          </li>
                          <li className="flex items-center">
                            <Icon name="Wrench" size={14} className="mr-2 text-blue-500" />
                            Регулярно проверять крепления
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Еженедельный уход:</h4>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center">
                            <Icon name="Soap" size={14} className="mr-2 text-green-500" />
                            Мыть теплой водой с мылом
                          </li>
                          <li className="flex items-center">
                            <Icon name="Settings" size={14} className="mr-2 text-green-500" />
                            Проверять регулировку
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Shield" size={20} className="mr-2 text-green-500" />
                      Безопасность
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Требования к детским очкам:</h4>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center">
                            <Icon name="Check" size={14} className="mr-2 text-green-500" />
                            Поликарбонатные линзы (ударопрочные)
                          </li>
                          <li className="flex items-center">
                            <Icon name="Check" size={14} className="mr-2 text-green-500" />
                            Гибкая оправа
                          </li>
                          <li className="flex items-center">
                            <Icon name="Check" size={14} className="mr-2 text-green-500" />
                            Мягкие носоупоры
                          </li>
                          <li className="flex items-center">
                            <Icon name="Check" size={14} className="mr-2 text-green-500" />
                            Регулируемые дужки
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Для спорта:</h4>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center">
                            <Icon name="Check" size={14} className="mr-2 text-blue-500" />
                            Спортивная оправа с ремешком
                          </li>
                          <li className="flex items-center">
                            <Icon name="Check" size={14} className="mr-2 text-blue-500" />
                            Дополнительная защита
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Советы родителям</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Icon name="Users" size={32} className="text-blue-600" />
                      </div>
                      <h4 className="font-semibold mb-2">Привыкание</h4>
                      <p className="text-sm text-gray-600">
                        Дайте ребенку время привыкнуть к очкам. Начните с коротких периодов ношения.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Icon name="Heart" size={32} className="text-green-600" />
                      </div>
                      <h4 className="font-semibold mb-2">Поддержка</h4>
                      <p className="text-sm text-gray-600">
                        Поощряйте ребенка носить очки, объясните их важность для здоровья.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Icon name="Eye" size={32} className="text-purple-600" />
                      </div>
                      <h4 className="font-semibold mb-2">Контроль</h4>
                      <p className="text-sm text-gray-600">
                        Регулярно проверяйте состояние очков и комфорт ребенка.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6 bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
                <CardContent className="text-center py-8">
                  <Icon name="Baby" size={48} className="text-pink-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Нужна консультация детского офтальмолога?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Наши специалисты имеют большой опыт работы с детьми
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg">
                      <Icon name="Calendar" size={20} className="mr-2" />
                      Записаться к врачу
                    </Button>
                    <Button size="lg" variant="outline">
                      <Icon name="Phone" size={20} className="mr-2" />
                      Получить консультацию
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

export default ChildrenGlasses;