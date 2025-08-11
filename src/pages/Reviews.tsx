import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

const Reviews = () => {
  const [selectedRating, setSelectedRating] = useState('all');
  const [selectedService, setSelectedService] = useState('all');
  const [newReview, setNewReview] = useState({
    name: '',
    email: '',
    service: '',
    rating: 5,
    title: '',
    comment: '',
    recommend: true
  });

  const reviews = [
    {
      id: 1,
      name: 'Анна Смирнова',
      rating: 5,
      date: '2024-06-10',
      service: 'Диагностика зрения',
      title: 'Отличная диагностика и сервис',
      comment: 'Очень довольна качеством обслуживания! Врач провел тщательную диагностику, объяснил все результаты. Современное оборудование, профессиональный подход. Обязательно вернусь сюда снова.',
      helpful: 23,
      verified: true,
      response: {
        author: 'Администрация Оптикка',
        date: '2024-06-11',
        text: 'Анна, спасибо за отзыв! Мы рады, что вы остались довольны нашим сервисом. Ждем вас снова!'
      }
    },
    {
      id: 2,
      name: 'Михаил Петров',
      rating: 4,
      date: '2024-06-08',
      service: 'Подбор оправы',
      title: 'Хороший выбор оправ',
      comment: 'Большой выбор оправ, консультант помогла подобрать идеальную модель. Единственный минус - долго ждал в очереди, но результатом доволен.',
      helpful: 15,
      verified: true
    },
    {
      id: 3,
      name: 'Елена Козлова',
      rating: 5,
      date: '2024-06-05',
      service: 'Изготовление линз',
      title: 'Быстро и качественно',
      comment: 'Линзы изготовили за 30 минут, как и обещали. Качество отличное, все четко и ясно. Цены адекватные. Рекомендую!',
      helpful: 31,
      verified: true,
      response: {
        author: 'Мастер Дмитрий',
        date: '2024-06-06',
        text: 'Елена, благодарим за доверие! Рады, что смогли помочь вам быстро и качественно.'
      }
    },
    {
      id: 4,
      name: 'Дмитрий Волков',
      rating: 3,
      date: '2024-06-03',
      service: 'Ремонт очков',
      title: 'Средний сервис',
      comment: 'Очки отремонтировали, но пришлось ждать дольше обещанного времени. Качество ремонта нормальное, но ожидал большего за такую цену.',
      helpful: 8,
      verified: false
    },
    {
      id: 5,
      name: 'Ольга Иванова',
      rating: 5,
      date: '2024-06-01',
      service: 'Контактные линзы',
      title: 'Профессиональный подбор линз',
      comment: 'Первый раз покупала контактные линзы. Специалист очень терпеливо все объяснил, научил правильно надевать и снимать. Отличный сервис!',
      helpful: 19,
      verified: true
    },
    {
      id: 6,
      name: 'Александр Сидоров',
      rating: 4,
      date: '2024-05-28',
      service: 'Солнцезащитные очки',
      title: 'Хорошие солнцезащитные очки',
      comment: 'Купил солнцезащитные очки Ray-Ban. Консультант помог с выбором, рассказал про UV-защиту. Качество отличное, но цена кусается.',
      helpful: 12,
      verified: true
    }
  ];

  const services = [
    { value: 'all', label: 'Все услуги' },
    { value: 'Диагностика зрения', label: 'Диагностика зрения' },
    { value: 'Подбор оправы', label: 'Подбор оправы' },
    { value: 'Изготовление линз', label: 'Изготовление линз' },
    { value: 'Ремонт очков', label: 'Ремонт очков' },
    { value: 'Контактные линзы', label: 'Контактные линзы' },
    { value: 'Солнцезащитные очки', label: 'Солнцезащитные очки' }
  ];

  const ratingFilters = [
    { value: 'all', label: 'Все оценки' },
    { value: '5', label: '5 звезд' },
    { value: '4', label: '4 звезды' },
    { value: '3', label: '3 звезды' },
    { value: '2', label: '2 звезды' },
    { value: '1', label: '1 звезда' }
  ];

  const filteredReviews = reviews.filter(review => {
    const matchesRating = selectedRating === 'all' || review.rating.toString() === selectedRating;
    const matchesService = selectedService === 'all' || review.service === selectedService;
    return matchesRating && matchesService;
  });

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(review => review.rating === rating).length,
    percentage: (reviews.filter(review => review.rating === rating).length / totalReviews) * 100
  }));

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New review submitted:', newReview);
    // Здесь будет логика отправки отзыва
  };

  const handleHelpful = (reviewId: number) => {
    console.log('Marked as helpful:', reviewId);
    // Здесь будет логика отметки "полезно"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Отзывы клиентов</h1>
          <p className="text-xl text-gray-600">Мнения наших клиентов о качестве услуг</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar with Stats */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Overall Rating */}
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-bold text-primary">
                    {averageRating.toFixed(1)}
                  </CardTitle>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={20}
                        className={`${
                          i < Math.floor(averageRating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <CardDescription>
                    На основе {totalReviews} отзывов
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {ratingDistribution.map(({ rating, count, percentage }) => (
                      <div key={rating} className="flex items-center gap-2">
                        <span className="text-sm w-8">{rating}★</span>
                        <Progress value={percentage} className="flex-1 h-2" />
                        <span className="text-sm text-gray-600 w-8">{count}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Filters */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Фильтры</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Оценка</label>
                    <Select value={selectedRating} onValueChange={setSelectedRating}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {ratingFilters.map(filter => (
                          <SelectItem key={filter.value} value={filter.value}>
                            {filter.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Услуга</label>
                    <Select value={selectedService} onValueChange={setSelectedService}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map(service => (
                          <SelectItem key={service.value} value={service.value}>
                            {service.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Write Review Button */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full" size="lg">
                    <Icon name="PenTool" size={20} className="mr-2" />
                    Написать отзыв
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Оставить отзыв</DialogTitle>
                    <DialogDescription>
                      Поделитесь своим опытом посещения нашего салона
                    </DialogDescription>
                  </DialogHeader>
                  
                  <form onSubmit={handleSubmitReview} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Имя *</label>
                        <Input
                          required
                          value={newReview.name}
                          onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                          placeholder="Ваше имя"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email *</label>
                        <Input
                          required
                          type="email"
                          value={newReview.email}
                          onChange={(e) => setNewReview({...newReview, email: e.target.value})}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Услуга *</label>
                      <Select 
                        required
                        value={newReview.service} 
                        onValueChange={(value) => setNewReview({...newReview, service: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите услугу" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.slice(1).map(service => (
                            <SelectItem key={service.value} value={service.value}>
                              {service.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Оценка *</label>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <button
                            key={rating}
                            type="button"
                            onClick={() => setNewReview({...newReview, rating})}
                            className="p-1"
                          >
                            <Icon
                              name="Star"
                              size={24}
                              className={`${
                                rating <= newReview.rating
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              } hover:text-yellow-400 transition-colors`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Заголовок отзыва *</label>
                      <Input
                        required
                        value={newReview.title}
                        onChange={(e) => setNewReview({...newReview, title: e.target.value})}
                        placeholder="Краткое описание вашего опыта"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Отзыв *</label>
                      <Textarea
                        required
                        value={newReview.comment}
                        onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                        placeholder="Расскажите подробнее о вашем опыте..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить отзыв
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Отзывы ({filteredReviews.length})
              </h2>
              <Select defaultValue="newest">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Сначала новые</SelectItem>
                  <SelectItem value="oldest">Сначала старые</SelectItem>
                  <SelectItem value="highest">Высокая оценка</SelectItem>
                  <SelectItem value="lowest">Низкая оценка</SelectItem>
                  <SelectItem value="helpful">Самые полезные</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-6">
              {filteredReviews.map((review) => (
                <Card key={review.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon name="User" size={20} className="text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{review.name}</h3>
                            {review.verified && (
                              <Badge variant="secondary" className="text-xs">
                                <Icon name="CheckCircle" size={12} className="mr-1" />
                                Проверен
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Icon
                                  key={i}
                                  name="Star"
                                  size={14}
                                  className={`${
                                    i < review.rating
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline">{review.service}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-lg mb-2">{review.title}</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">{review.comment}</p>
                    
                    {review.response && (
                      <div className="bg-blue-50 border-l-4 border-blue-200 p-4 mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon name="MessageSquare" size={16} className="text-blue-600" />
                          <span className="font-medium text-blue-900">{review.response.author}</span>
                          <span className="text-sm text-blue-600">{review.response.date}</span>
                        </div>
                        <p className="text-blue-800">{review.response.text}</p>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => handleHelpful(review.id)}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        <Icon name="ThumbsUp" size={16} />
                        Полезно ({review.helpful})
                      </button>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Icon name="Flag" size={14} className="mr-1" />
                          Пожаловаться
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Icon name="Share" size={14} className="mr-1" />
                          Поделиться
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredReviews.length === 0 && (
              <div className="text-center py-12">
                <Icon name="MessageSquare" size={48} className="text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Отзывы не найдены
                </h3>
                <p className="text-gray-600">
                  Попробуйте изменить фильтры поиска
                </p>
              </div>
            )}

            {/* Load More */}
            {filteredReviews.length > 0 && (
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  Показать еще отзывы
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;