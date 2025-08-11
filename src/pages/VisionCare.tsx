import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";

const VisionCare = () => {
  const [dailyHabitsScore, setDailyHabitsScore] = useState(0);
  const [selectedExercise, setSelectedExercise] = useState('palming');

  const visionExercises = [
    {
      id: 'palming',
      name: 'Пальминг',
      duration: '3-5 минут',
      difficulty: 'Легко',
      description: 'Расслабление глаз с помощью ладоней',
      instructions: [
        'Сядьте удобно, локти на стол',
        'Закройте глаза ладонями, не давя на веки',
        'Пальцы скрестите на лбу',
        'Расслабьтесь и дышите глубоко',
        'Представляйте абсолютную темноту'
      ],
      benefits: ['Снятие напряжения', 'Улучшение кровообращения', 'Расслабление мышц'],
      frequency: '3-4 раза в день',
      icon: 'Hand'
    },
    {
      id: 'blinking',
      name: 'Моргание',
      duration: '1-2 минуты',
      difficulty: 'Легко',
      description: 'Упражнения для увлажнения глаз',
      instructions: [
        'Моргайте медленно и полно 10 раз',
        'Зажмурьтесь на 3 секунды',
        'Откройте глаза и расслабьтесь',
        'Повторите 5-10 раз',
        'Делайте перерывы между подходами'
      ],
      benefits: ['Увлажнение глаз', 'Очищение роговицы', 'Снятие сухости'],
      frequency: 'Каждый час работы',
      icon: 'Eye'
    },
    {
      id: 'focusing',
      name: 'Фокусировка',
      duration: '5-10 минут',
      difficulty: 'Средне',
      description: 'Тренировка аккомодации',
      instructions: [
        'Держите палец на расстоянии 15 см от лица',
        'Фокусируйтесь на пальце 3 секунды',
        'Переведите взгляд на далекий объект',
        'Фокусируйтесь на нем 3 секунды',
        'Повторите 10-15 раз'
      ],
      benefits: ['Тренировка аккомодации', 'Улучшение фокусировки', 'Профилактика близорукости'],
      frequency: '2-3 раза в день',
      icon: 'Target'
    },
    {
      id: 'figure-eight',
      name: 'Восьмерка',
      duration: '2-3 минуты',
      difficulty: 'Средне',
      description: 'Движения глаз по траектории восьмерки',
      instructions: [
        'Представьте большую восьмерку перед собой',
        'Медленно обводите глазами контур',
        'Сначала в одну сторону 5 раз',
        'Затем в другую сторону 5 раз',
        'Отдохните и повторите'
      ],
      benefits: ['Укрепление глазных мышц', 'Улучшение координации', 'Расширение поля зрения'],
      frequency: '2-3 раза в день',
      icon: 'RotateCcw'
    },
    {
      id: 'distance-viewing',
      name: 'Взгляд вдаль',
      duration: '5-10 минут',
      difficulty: 'Легко',
      description: 'Расслабление при взгляде на далекие объекты',
      instructions: [
        'Подойдите к окну',
        'Найдите объект вдали (дерево, здание)',
        'Смотрите на него расслабленно',
        'Не напрягайте глаза',
        'Дышите спокойно'
      ],
      benefits: ['Расслабление аккомодации', 'Профилактика близорукости', 'Отдых для глаз'],
      frequency: 'Каждые 2 часа',
      icon: 'Mountain'
    },
    {
      id: 'massage',
      name: 'Массаж век',
      duration: '3-5 минут',
      difficulty: 'Легко',
      description: 'Легкий массаж для улучшения кровообращения',
      instructions: [
        'Закройте глаза',
        'Легко массируйте веки круговыми движениями',
        'Массируйте область вокруг глаз',
        'Не давите сильно',
        'Завершите легкими поглаживаниями'
      ],
      benefits: ['Улучшение кровообращения', 'Снятие отеков', 'Расслабление мышц'],
      frequency: 'Утром и вечером',
      icon: 'Zap'
    }
  ];

  const dailyHabits = [
    { habit: 'Делаю перерывы каждый час при работе за компьютером', points: 2, checked: false },
    { habit: 'Использую правило 20-20-20', points: 2, checked: false },
    { habit: 'Провожу на свежем воздухе минимум 2 часа в день', points: 3, checked: false },
    { habit: 'Читаю при хорошем освещении', points: 1, checked: false },
    { habit: 'Держу правильную осанку при работе', points: 1, checked: false },
    { habit: 'Делаю упражнения для глаз', points: 2, checked: false },
    { habit: 'Ограничиваю время у экранов перед сном', points: 2, checked: false },
    { habit: 'Использую увлажняющие капли при сухости', points: 1, checked: false },
    { habit: 'Регулярно прохожу осмотр у офтальмолога', points: 3, checked: false },
    { habit: 'Ношу солнцезащитные очки в яркую погоду', points: 2, checked: false }
  ];

  const [habits, setHabits] = useState(dailyHabits);

  const nutritionForEyes = [
    {
      nutrient: 'Лютеин и зеаксантин',
      sources: ['Шпинат', 'Капуста', 'Кукуруза', 'Яичные желтки'],
      benefit: 'Защита сетчатки от повреждений',
      dailyNeed: '10-20 мг',
      icon: 'Leaf'
    },
    {
      nutrient: 'Витамин A',
      sources: ['Морковь', 'Сладкий картофель', 'Печень', 'Молочные продукты'],
      benefit: 'Поддержание ночного зрения',
      dailyNeed: '900 мкг',
      icon: 'Carrot'
    },
    {
      nutrient: 'Омега-3',
      sources: ['Рыба', 'Орехи', 'Семена льна', 'Авокадо'],
      benefit: 'Предотвращение сухости глаз',
      dailyNeed: '1-2 г',
      icon: 'Fish'
    },
    {
      nutrient: 'Витамин C',
      sources: ['Цитрусовые', 'Ягоды', 'Киви', 'Болгарский перец'],
      benefit: 'Укрепление сосудов глаза',
      dailyNeed: '90 мг',
      icon: 'Orange'
    },
    {
      nutrient: 'Цинк',
      sources: ['Мясо', 'Орехи', 'Семена', 'Бобовые'],
      benefit: 'Транспорт витамина A к сетчатке',
      dailyNeed: '11 мг',
      icon: 'Beef'
    },
    {
      nutrient: 'Витамин E',
      sources: ['Орехи', 'Растительные масла', 'Семена', 'Зеленые овощи'],
      benefit: 'Антиоксидантная защита',
      dailyNeed: '15 мг',
      icon: 'Nut'
    }
  ];

  const handleHabitChange = (index: number) => {
    const updatedHabits = habits.map((habit, i) =>
      i === index ? { ...habit, checked: !habit.checked } : habit
    );
    setHabits(updatedHabits);
    
    const score = updatedHabits
      .filter(habit => habit.checked)
      .reduce((sum, habit) => sum + habit.points, 0);
    setDailyHabitsScore(score);
  };

  const getHabitsAssessment = () => {
    if (dailyHabitsScore >= 15) return { level: 'Отлично', color: 'green', description: 'Вы отлично заботитесь о своем зрении!' };
    if (dailyHabitsScore >= 10) return { level: 'Хорошо', color: 'blue', description: 'Хорошие привычки, есть куда расти' };
    if (dailyHabitsScore >= 5) return { level: 'Удовлетворительно', color: 'yellow', description: 'Стоит больше внимания уделить зрению' };
    return { level: 'Требует внимания', color: 'red', description: 'Необходимо изменить привычки' };
  };

  const assessment = getHabitsAssessment();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-4">Забота о зрении</h1>
          <p className="text-xl opacity-90">Упражнения и советы для здоровья глаз</p>
          <div className="mt-6 flex items-center gap-4">
            <Badge className="bg-white/20 text-white border-white/30">
              <Icon name="Heart" size={16} className="mr-2" />
              Ежедневная забота
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30">
              <Icon name="Zap" size={16} className="mr-2" />
              Простые упражнения
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="exercises" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="exercises">Упражнения</TabsTrigger>
            <TabsTrigger value="habits">Полезные привычки</TabsTrigger>
            <TabsTrigger value="nutrition">Питание для глаз</TabsTrigger>
            <TabsTrigger value="workplace">Гигиена зрения</TabsTrigger>
          </TabsList>

          {/* Eye Exercises */}
          <TabsContent value="exercises" className="mt-8">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Exercise List */}
              <div className="lg:col-span-1">
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle className="text-lg">Упражнения</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {visionExercises.map((exercise) => (
                        <button
                          key={exercise.id}
                          onClick={() => setSelectedExercise(exercise.id)}
                          className={`w-full text-left p-3 rounded-lg transition-colors ${
                            selectedExercise === exercise.id 
                              ? 'bg-primary text-white' 
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <Icon 
                              name={exercise.icon as any} 
                              size={16} 
                              className={selectedExercise === exercise.id ? 'text-white' : 'text-primary'} 
                            />
                            <span className="text-sm font-medium">{exercise.name}</span>
                          </div>
                          <p className={`text-xs mt-1 ${
                            selectedExercise === exercise.id ? 'text-white/80' : 'text-gray-600'
                          }`}>
                            {exercise.duration}
                          </p>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Exercise Details */}
              <div className="lg:col-span-3">
                {visionExercises
                  .filter(exercise => exercise.id === selectedExercise)
                  .map((exercise) => (
                    <Card key={exercise.id}>
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                            <Icon name={exercise.icon as any} size={32} className="text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl">{exercise.name}</CardTitle>
                            <CardDescription className="text-lg">{exercise.description}</CardDescription>
                            <div className="flex gap-2 mt-2">
                              <Badge variant="outline">{exercise.duration}</Badge>
                              <Badge variant="secondary">{exercise.difficulty}</Badge>
                              <Badge className="bg-green-100 text-green-800">{exercise.frequency}</Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h3 className="text-lg font-semibold mb-4">Как выполнять:</h3>
                            <ol className="space-y-3">
                              {exercise.instructions.map((instruction, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5 flex-shrink-0">
                                    {index + 1}
                                  </span>
                                  <span className="text-sm">{instruction}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-4">Польза:</h3>
                            <ul className="space-y-2">
                              {exercise.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center">
                                  <Icon name="Check" size={16} className="mr-2 text-green-500" />
                                  <span className="text-sm">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                            
                            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                              <h4 className="font-semibold text-blue-800 mb-2">Рекомендации:</h4>
                              <p className="text-sm text-blue-700">
                                Выполняйте упражнение {exercise.frequency.toLowerCase()}. 
                                Регулярность важнее интенсивности.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          </TabsContent>

          {/* Daily Habits */}
          <TabsContent value="habits" className="mt-8">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Оценка ваших привычек</CardTitle>
                  <CardDescription>
                    Отметьте привычки, которые вы соблюдаете ежедневно
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    {habits.map((habit, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                        <input
                          type="checkbox"
                          id={`habit-${index}`}
                          checked={habit.checked}
                          onChange={() => handleHabitChange(index)}
                          className="w-4 h-4 text-primary"
                        />
                        <label 
                          htmlFor={`habit-${index}`}
                          className="flex-1 text-sm cursor-pointer"
                        >
                          {habit.habit}
                        </label>
                        <Badge variant="outline" className="text-xs">
                          +{habit.points}
                        </Badge>
                      </div>
                    ))}
                  </div>

                  <Card className={`bg-${assessment.color}-50 border-${assessment.color}-200`}>
                    <CardContent className="text-center py-6">
                      <div className={`text-4xl font-bold text-${assessment.color}-600 mb-2`}>
                        {dailyHabitsScore}/19
                      </div>
                      <div className={`text-xl font-semibold text-${assessment.color}-700 mb-2`}>
                        {assessment.level}
                      </div>
                      <p className={`text-${assessment.color}-600 mb-4`}>
                        {assessment.description}
                      </p>
                      <Progress 
                        value={(dailyHabitsScore / 19) * 100} 
                        className="mb-4"
                      />
                      <Button>
                        <Icon name="TrendingUp" size={16} className="mr-2" />
                        Улучшить привычки
                      </Button>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Sun" size={20} className="mr-2 text-yellow-500" />
                      Утренние привычки
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Icon name="Check" size={14} className="mr-2 text-green-500" />
                        Массаж век после пробуждения
                      </li>
                      <li className="flex items-center">
                        <Icon name="Check" size={14} className="mr-2 text-green-500" />
                        Упражнения для глаз
                      </li>
                      <li className="flex items-center">
                        <Icon name="Check" size={14} className="mr-2 text-green-500" />
                        Контрастный душ для лица
                      </li>
                      <li className="flex items-center">
                        <Icon name="Check" size={14} className="mr-2 text-green-500" />
                        Полезный завтрак для глаз
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Monitor" size={20} className="mr-2 text-blue-500" />
                      Рабочие привычки
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Icon name="Check" size={14} className="mr-2 text-green-500" />
                        Правило 20-20-20
                      </li>
                      <li className="flex items-center">
                        <Icon name="Check" size={14} className="mr-2 text-green-500" />
                        Правильная осанка
                      </li>
                      <li className="flex items-center">
                        <Icon name="Check" size={14} className="mr-2 text-green-500" />
                        Достаточное освещение
                      </li>
                      <li className="flex items-center">
                        <Icon name="Check" size={14} className="mr-2 text-green-500" />
                        Регулярные перерывы
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Moon" size={20} className="mr-2 text-purple-500" />
                      Вечерние привычки
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Icon name="Check" size={14} className="mr-2 text-green-500" />
                        Ограничение экранов за 2 часа до сна
                      </li>
                      <li className="flex items-center">
                        <Icon name="Check" size={14} className="mr-2 text-green-500" />
                        Теплые компрессы на глаза
                      </li>
                      <li className="flex items-center">
                        <Icon name="Check" size={14} className="mr-2 text-green-500" />
                        Расслабляющий массаж
                      </li>
                      <li className="flex items-center">
                        <Icon name="Check" size={14} className="mr-2 text-green-500" />
                        Достаточный сон (7-8 часов)
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Nutrition */}
          <TabsContent value="nutrition" className="mt-8">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Питание для здоровья глаз</CardTitle>
                  <CardDescription>
                    Важные питательные вещества для поддержания зрения
                  </CardDescription>
                </CardHeader>
              </Card>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {nutritionForEyes.map((nutrition, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <Icon name={nutrition.icon as any} size={20} className="text-green-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{nutrition.nutrient}</CardTitle>
                          <Badge variant="outline" className="text-xs">
                            {nutrition.dailyNeed}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <p className="text-sm text-gray-600">{nutrition.benefit}</p>
                        
                        <div>
                          <p className="text-xs font-medium text-gray-500 mb-1">Источники:</p>
                          <div className="flex flex-wrap gap-1">
                            {nutrition.sources.map((source, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {source}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="text-center">Примерное меню на день</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-orange-600">Завтрак</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Омлет с шпинатом</li>
                        <li>• Морковный сок</li>
                        <li>• Орехи</li>
                        <li>• Ягоды</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-green-600">Обед</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Салат с листовой зеленью</li>
                        <li>• Рыба на пару</li>
                        <li>• Тушеная морковь</li>
                        <li>• Цитрусовые</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-600">Полдник</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Черника</li>
                        <li>• Семена подсолнечника</li>
                        <li>• Зеленый чай</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-purple-600">Ужин</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Печень говяжья</li>
                        <li>• Брокколи</li>
                        <li>• Авокадо</li>
                        <li>• Молочные продукты</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Workplace Hygiene */}
          <TabsContent value="workplace" className="mt-8">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Гигиена зрения на рабочем месте</CardTitle>
                  <CardDescription>
                    Создайте комфортные условия для ваших глаз
                  </CardDescription>
                </CardHeader>
              </Card>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Lightbulb" size={20} className="mr-2 text-yellow-500" />
                      Освещение
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Оптимальные параметры:</h4>
                        <ul className="space-y-1 text-sm">
                          <li className="flex justify-between">
                            <span>Общее освещение:</span>
                            <Badge variant="outline">300-500 лк</Badge>
                          </li>
                          <li className="flex justify-between">
                            <span>Рабочая зона:</span>
                            <Badge variant="outline">500-750 лк</Badge>
                          </li>
                          <li className="flex justify-between">
                            <span>Яркость экрана:</span>
                            <Badge variant="outline">120 кд/м²</Badge>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Рекомендации:</h4>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center">
                            <Icon name="Check" size={14} className="mr-2 text-green-500" />
                            Избегайте бликов на экране
                          </li>
                          <li className="flex items-center">
                            <Icon name="Check" size={14} className="mr-2 text-green-500" />
                            Используйте настольную лампу
                          </li>
                          <li className="flex items-center">
                            <Icon name="Check" size={14} className="mr-2 text-green-500" />
                            Регулируйте яркость экрана
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Monitor" size={20} className="mr-2 text-blue-500" />
                      Настройка экрана
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Позиционирование:</h4>
                        <ul className="space-y-1 text-sm">
                          <li className="flex justify-between">
                            <span>Расстояние:</span>
                            <Badge variant="outline">50-70 см</Badge>
                          </li>
                          <li className="flex justify-between">
                            <span>Угол наклона:</span>
                            <Badge variant="outline">10-20° вниз</Badge>
                          </li>
                          <li className="flex justify-between">
                            <span>Высота:</span>
                            <Badge variant="outline">На уровне глаз</Badge>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Настройки:</h4>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center">
                            <Icon name="Check" size={14} className="mr-2 text-green-500" />
                            Контрастность 60-70%
                          </li>
                          <li className="flex items-center">
                            <Icon name="Check" size={14} className="mr-2 text-green-500" />
                            Частота обновления 60+ Гц
                          </li>
                          <li className="flex items-center">
                            <Icon name="Check" size={14} className="mr-2 text-green-500" />
                            Размер шрифта 12+ пт
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Режим работы и отдыха</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">20</div>
                      <p className="text-sm text-gray-600">минут работы</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">20</div>
                      <p className="text-sm text-gray-600">секунд отдыха</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">20</div>
                      <p className="text-sm text-gray-600">футов (6 метров)</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">2</div>
                      <p className="text-sm text-gray-600">часа - большой перерыв</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
                <CardContent className="text-center py-8">
                  <Icon name="Heart" size={48} className="text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Начните заботиться о зрении уже сегодня
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Простые ежедневные привычки помогут сохранить здоровье ваших глаз
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg">
                      <Icon name="Download" size={20} className="mr-2" />
                      Скачать план упражнений
                    </Button>
                    <Button size="lg" variant="outline">
                      <Icon name="Calendar" size={20} className="mr-2" />
                      Консультация специалиста
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

export default VisionCare;