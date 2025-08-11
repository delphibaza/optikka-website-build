import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Icon from "@/components/ui/icon";

interface TestResult {
  step: number;
  question: string;
  answer: string;
  score: number;
}

const EyeTest = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [isTestCompleted, setIsTestCompleted] = useState(false);
  const [testStarted, setTestStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [isTimerActive, setIsTimerActive] = useState(false);

  const testSteps = [
    {
      id: 1,
      type: 'visual-acuity',
      title: 'Проверка остроты зрения',
      instruction: 'Отойдите на 50-60 см от экрана. Закройте левый глаз рукой.',
      chart: 'E F P T O Z',
      fontSize: '4xl',
      question: 'Можете ли вы четко видеть все буквы в строке?',
      options: [
        { text: 'Да, все буквы четкие', score: 10 },
        { text: 'Вижу, но некоторые размыто', score: 7 },
        { text: 'Вижу только первые 2-3 буквы', score: 4 },
        { text: 'Не вижу ни одной буквы четко', score: 1 }
      ]
    },
    {
      id: 2,
      type: 'visual-acuity',
      title: 'Проверка правого глаза',
      instruction: 'Теперь закройте правый глаз. Смотрите на экран левым глазом.',
      chart: 'D F P O T E C',
      fontSize: '3xl',
      question: 'Как четко вы видите эту строку левым глазом?',
      options: [
        { text: 'Очень четко, все буквы ясные', score: 10 },
        { text: 'Четко, но с небольшим усилием', score: 8 },
        { text: 'Размыто, но могу разобрать', score: 5 },
        { text: 'Очень размыто или не вижу', score: 2 }
      ]
    },
    {
      id: 3,
      type: 'color-vision',
      title: 'Цветовосприятие',
      instruction: 'Откройте оба глаза. Посмотрите на цветные круги ниже.',
      chart: '● ● ● ●',
      colors: ['text-red-500', 'text-green-500', 'text-blue-500', 'text-yellow-500'],
      fontSize: '6xl',
      question: 'Сколько разных цветов вы видите?',
      options: [
        { text: '4 разных цвета', score: 10 },
        { text: '3 цвета', score: 7 },
        { text: '2 цвета', score: 4 },
        { text: '1 цвет или все одинаковые', score: 1 }
      ]
    },
    {
      id: 4,
      type: 'contrast',
      title: 'Контрастная чувствительность',
      instruction: 'Посмотрите на серые полосы разной интенсивности.',
      chart: '█ ▓ ▒ ░',
      fontSize: '5xl',
      question: 'Сколько разных оттенков серого вы различаете?',
      options: [
        { text: '4 четких оттенка', score: 10 },
        { text: '3 оттенка', score: 8 },
        { text: '2 оттенка', score: 5 },
        { text: '1 оттенок или все одинаково', score: 2 }
      ]
    },
    {
      id: 5,
      type: 'peripheral',
      title: 'Периферическое зрение',
      instruction: 'Смотрите в центр экрана, не двигая глазами. Обращайте внимание на края.',
      chart: '• → ◉ ← •',
      fontSize: '3xl',
      question: 'Видите ли вы точки по краям, не отводя взгляд от центра?',
      options: [
        { text: 'Вижу все точки четко', score: 10 },
        { text: 'Вижу, но не очень четко', score: 7 },
        { text: 'Вижу только одну сторону', score: 4 },
        { text: 'Не вижу боковые точки', score: 1 }
      ]
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(time => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setIsTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, timeRemaining]);

  const startTest = () => {
    setTestStarted(true);
    setCurrentStep(0);
    setTestResults([]);
    setIsTestCompleted(false);
    setTimeRemaining(30);
    setIsTimerActive(true);
  };

  const handleAnswer = (answer: string, score: number) => {
    const currentTest = testSteps[currentStep];
    const result: TestResult = {
      step: currentStep + 1,
      question: currentTest.question,
      answer,
      score
    };

    const newResults = [...testResults, result];
    setTestResults(newResults);

    if (currentStep < testSteps.length - 1) {
      setCurrentStep(currentStep + 1);
      setTimeRemaining(30);
      setIsTimerActive(true);
    } else {
      setIsTestCompleted(true);
      setIsTimerActive(false);
    }
  };

  const resetTest = () => {
    setTestStarted(false);
    setCurrentStep(0);
    setTestResults([]);
    setIsTestCompleted(false);
    setIsTimerActive(false);
    setTimeRemaining(30);
  };

  const calculateTotalScore = () => {
    return testResults.reduce((total, result) => total + result.score, 0);
  };

  const getScoreInterpretation = (score: number) => {
    if (score >= 45) return { level: 'Отличное', color: 'text-green-600', description: 'Ваше зрение в отличном состоянии' };
    if (score >= 35) return { level: 'Хорошее', color: 'text-blue-600', description: 'Зрение в норме, возможны незначительные отклонения' };
    if (score >= 25) return { level: 'Удовлетворительное', color: 'text-yellow-600', description: 'Рекомендуется консультация специалиста' };
    return { level: 'Требует внимания', color: 'text-red-600', description: 'Необходима профессиональная диагностика' };
  };

  if (!testStarted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Онлайн-тест зрения</h1>
            <p className="text-xl text-gray-600">Предварительная проверка остроты зрения</p>
          </div>
        </div>

        <div className="container mx-auto px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <Alert className="mb-8 border-yellow-200 bg-yellow-50">
              <Icon name="AlertTriangle" size={20} className="text-yellow-600" />
              <AlertDescription className="text-yellow-800">
                <strong>Важно:</strong> Этот тест не заменяет профессиональную диагностику у врача-офтальмолога. 
                Результаты носят ориентировочный характер.
              </AlertDescription>
            </Alert>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Eye" size={24} className="mr-3 text-primary" />
                    Что проверяем
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-green-500 mr-3" />
                      Остроту зрения каждого глаза
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-green-500 mr-3" />
                      Цветовосприятие
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-green-500 mr-3" />
                      Контрастную чувствительность
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-green-500 mr-3" />
                      Периферическое зрение
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Info" size={24} className="mr-3 text-primary" />
                    Инструкции
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Icon name="Monitor" size={16} className="text-blue-500 mr-3 mt-1" />
                      Отойдите на 50-60 см от экрана
                    </li>
                    <li className="flex items-start">
                      <Icon name="Sun" size={16} className="text-blue-500 mr-3 mt-1" />
                      Обеспечьте хорошее освещение
                    </li>
                    <li className="flex items-start">
                      <Icon name="Clock" size={16} className="text-blue-500 mr-3 mt-1" />
                      Тест займет около 5 минут
                    </li>
                    <li className="flex items-start">
                      <Icon name="Glasses" size={16} className="text-blue-500 mr-3 mt-1" />
                      Снимите очки, если носите
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8">
              <CardContent className="text-center py-12">
                <Icon name="Play" size={64} className="text-primary mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Готовы начать тест?
                </h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Убедитесь, что вы находитесь в хорошо освещенном помещении и готовы 
                  уделить тесту несколько минут без отвлечений.
                </p>
                <Button size="lg" onClick={startTest} className="px-12">
                  <Icon name="Eye" size={20} className="mr-2" />
                  Начать тест
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (isTestCompleted) {
    const totalScore = calculateTotalScore();
    const interpretation = getScoreInterpretation(totalScore);

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Результаты теста</h1>
            <p className="text-xl text-gray-600">Ваши результаты готовы</p>
          </div>
        </div>

        <div className="container mx-auto px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={48} className="text-primary" />
                </div>
                <CardTitle className="text-3xl">Тест завершен!</CardTitle>
                <CardDescription>Ваш общий результат</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <div className="text-6xl font-bold text-primary mb-2">
                    {totalScore}/50
                  </div>
                  <div className={`text-2xl font-semibold ${interpretation.color} mb-2`}>
                    {interpretation.level}
                  </div>
                  <p className="text-gray-600">{interpretation.description}</p>
                </div>
                <Progress value={(totalScore / 50) * 100} className="h-3 mb-6" />
              </CardContent>
            </Card>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Детальные результаты</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {testResults.map((result, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">Шаг {result.step}</p>
                          <p className="text-sm text-gray-600">{result.answer}</p>
                        </div>
                        <Badge variant={result.score >= 8 ? "default" : result.score >= 5 ? "secondary" : "destructive"}>
                          {result.score}/10
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Рекомендации</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {totalScore >= 40 ? (
                      <>
                        <div className="flex items-start">
                          <Icon name="CheckCircle" size={20} className="text-green-500 mr-3 mt-1" />
                          <div>
                            <p className="font-medium">Отличные результаты</p>
                            <p className="text-sm text-gray-600">Ваше зрение в хорошем состоянии</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Icon name="Calendar" size={20} className="text-blue-500 mr-3 mt-1" />
                          <div>
                            <p className="font-medium">Профилактический осмотр</p>
                            <p className="text-sm text-gray-600">Рекомендуем проходить раз в год</p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-start">
                          <Icon name="AlertCircle" size={20} className="text-yellow-500 mr-3 mt-1" />
                          <div>
                            <p className="font-medium">Консультация специалиста</p>
                            <p className="text-sm text-gray-600">Рекомендуем записаться к офтальмологу</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Icon name="Eye" size={20} className="text-primary mr-3 mt-1" />
                          <div>
                            <p className="font-medium">Полная диагностика</p>
                            <p className="text-sm text-gray-600">Необходимо профессиональное обследование</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={resetTest}>
                <Icon name="RotateCcw" size={20} className="mr-2" />
                Пройти тест заново
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться к врачу
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать результаты
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentTest = testSteps[currentStep];
  const progress = ((currentStep + 1) / testSteps.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Тест зрения</h1>
              <p className="text-gray-600">Шаг {currentStep + 1} из {testSteps.length}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={16} className="text-gray-500" />
                <span className={`font-mono ${timeRemaining <= 10 ? 'text-red-500' : 'text-gray-700'}`}>
                  {timeRemaining}s
                </span>
              </div>
              <Button variant="outline" size="sm" onClick={resetTest}>
                <Icon name="X" size={16} className="mr-2" />
                Завершить
              </Button>
            </div>
          </div>
          <Progress value={progress} className="mt-4" />
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{currentTest.title}</CardTitle>
              <CardDescription className="text-lg">
                {currentTest.instruction}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-8">
                <div className={`font-mono ${currentTest.fontSize} mb-4 p-8 bg-white border-2 border-gray-200 rounded-xl`}>
                  {currentTest.type === 'color-vision' ? (
                    <div className="flex justify-center gap-4">
                      {currentTest.chart?.split(' ').map((char, index) => (
                        <span key={index} className={currentTest.colors?.[index] || 'text-gray-900'}>
                          {char}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="tracking-widest">{currentTest.chart}</span>
                  )}
                </div>
                <p className="text-sm text-gray-500">
                  Расстояние до экрана: 50-60 см
                </p>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-4">{currentTest.question}</h3>
              </div>

              <div className="grid gap-3 max-w-2xl mx-auto">
                {currentTest.options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    onClick={() => handleAnswer(option.text, option.score)}
                    className="text-left justify-start h-auto py-4 px-6"
                  >
                    <div className="flex items-center w-full">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-primary font-semibold">{index + 1}</span>
                      </div>
                      <span>{option.text}</span>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EyeTest;