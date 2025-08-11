import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const About = () => {
  const team = [
    {
      name: "Анна Петрова",
      position: "Главный врач-офтальмолог",
      experience: "15 лет",
      education: "РНИМУ им. Н.И. Пирогова",
      specialization: ["Диагностика зрения", "Детская офтальмология", "Коррекция зрения"],
      photo: "/placeholder.svg"
    },
    {
      name: "Михаил Сидоров",
      position: "Врач-оптометрист",
      experience: "12 лет",
      education: "МГМСУ им. А.И. Евдокимова",
      specialization: ["Подбор очков", "Контактная коррекция", "Бинокулярное зрение"],
      photo: "/placeholder.svg"
    },
    {
      name: "Елена Козлова",
      position: "Консультант-оптик",
      experience: "8 лет",
      education: "Московский колледж оптики",
      specialization: ["Подбор оправ", "Стилистические консультации", "Работа с клиентами"],
      photo: "/placeholder.svg"
    },
    {
      name: "Дмитрий Волков",
      position: "Мастер по изготовлению линз",
      experience: "10 лет",
      education: "Техникум точной механики и оптики",
      specialization: ["Изготовление линз", "Ремонт очков", "Настройка оборудования"],
      photo: "/placeholder.svg"
    }
  ];

  const achievements = [
    {
      year: "2014",
      title: "Основание компании",
      description: "Открытие первого салона оптики в центре Москвы"
    },
    {
      year: "2016",
      title: "Расширение сети",
      description: "Открытие второго и третьего салонов"
    },
    {
      year: "2018",
      title: "Премия качества",
      description: "Получение награды 'Лучший салон оптики года'"
    },
    {
      year: "2020",
      title: "Цифровизация",
      description: "Внедрение современных технологий диагностики"
    },
    {
      year: "2022",
      title: "10 000 клиентов",
      description: "Достижение отметки в 10 тысяч довольных клиентов"
    },
    {
      year: "2024",
      title: "Инновации",
      description: "Внедрение AI-технологий в подбор оправ"
    }
  ];

  const values = [
    {
      icon: "Heart",
      title: "Забота о клиентах",
      description: "Индивидуальный подход к каждому клиенту и внимание к деталям"
    },
    {
      icon: "Award",
      title: "Качество",
      description: "Только проверенные бренды и материалы высочайшего качества"
    },
    {
      icon: "Users",
      title: "Профессионализм",
      description: "Команда опытных специалистов с медицинским образованием"
    },
    {
      icon: "Lightbulb",
      title: "Инновации",
      description: "Современное оборудование и передовые технологии"
    },
    {
      icon: "Shield",
      title: "Надежность",
      description: "Гарантия на все услуги и долгосрочная поддержка клиентов"
    },
    {
      icon: "Smile",
      title: "Комфорт",
      description: "Уютная атмосфера и удобное расположение салонов"
    }
  ];

  const stats = [
    { number: "10+", label: "лет опыта" },
    { number: "15 000+", label: "довольных клиентов" },
    { number: "3", label: "салона в Москве" },
    { number: "1 500+", label: "видов оправ" },
    { number: "50+", label: "брендов" },
    { number: "24/7", label: "поддержка клиентов" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">О компании</h1>
          <p className="text-xl text-gray-600">Узнайте больше о нашей истории и команде</p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-blue-500/10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Четкое зрение — наша миссия
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Салон оптики "Оптикка" работает с 2014 года, предоставляя качественные услуги 
                по диагностике зрения и подбору оптических изделий. Мы объединили традиционный 
                подход к заботе о зрении с современными технологиями и инновационными решениями.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Наша команда состоит из квалифицированных врачей-офтальмологов, оптометристов 
                и консультантов, которые помогут вам найти идеальное решение для коррекции зрения.
              </p>
              <Button size="lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
            <div>
              <img 
                src="/img/0f443cc4-e5a8-416e-bf6b-0d5948aa64f8.jpg"
                alt="Наш салон"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши ценности</h2>
            <p className="text-xl text-gray-600">Принципы, которыми мы руководствуемся в работе</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={value.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наша команда</h2>
            <p className="text-xl text-gray-600">Профессионалы, которые заботятся о вашем зрении</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={32} className="text-gray-400" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <Badge variant="outline" className="mb-2">
                        Опыт: {member.experience}
                      </Badge>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Образование:</p>
                      <p className="text-sm font-medium">{member.education}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Специализация:</p>
                      <div className="flex flex-wrap gap-1">
                        {member.specialization.map((spec, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">История развития</h2>
            <p className="text-xl text-gray-600">Основные вехи нашего пути</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
              {achievements.map((achievement, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <Badge className="bg-primary text-white">
                            {achievement.year}
                          </Badge>
                          <CardTitle className="text-lg">{achievement.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{achievement.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы позаботиться о своем зрении?</h2>
          <p className="text-xl mb-8 opacity-90">
            Запишитесь на консультацию к нашим специалистам
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на прием
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить нам
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;