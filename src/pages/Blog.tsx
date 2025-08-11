import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'Как правильно выбрать оправу по форме лица',
      excerpt: 'Подробное руководство по выбору идеальной оправы в зависимости от формы вашего лица. Советы от профессиональных стилистов.',
      content: 'Выбор правильной оправы — это искусство, которое требует понимания особенностей вашего лица...',
      author: 'Анна Петрова',
      date: '2024-06-15',
      category: 'style',
      tags: ['оправы', 'стиль', 'выбор'],
      readTime: '5 мин',
      image: '/placeholder.svg',
      views: 1250,
      likes: 89
    },
    {
      id: 2,
      title: 'Прогрессивные линзы: все, что нужно знать',
      excerpt: 'Разбираемся в особенностях прогрессивных линз, их преимуществах и недостатках. Кому они подходят и как к ним привыкнуть.',
      content: 'Прогрессивные линзы — это современное решение для коррекции пресбиопии...',
      author: 'Михаил Сидоров',
      date: '2024-06-10',
      category: 'health',
      tags: ['линзы', 'пресбиопия', 'коррекция зрения'],
      readTime: '7 мин',
      image: '/placeholder.svg',
      views: 980,
      likes: 67
    },
    {
      id: 3,
      title: 'Уход за очками: продлеваем срок службы',
      excerpt: 'Простые правила ухода за очками, которые помогут сохранить их в идеальном состоянии на долгие годы.',
      content: 'Правильный уход за очками не только продлевает их срок службы, но и обеспечивает комфорт...',
      author: 'Елена Козлова',
      date: '2024-06-05',
      category: 'care',
      tags: ['уход', 'очки', 'советы'],
      readTime: '4 мин',
      image: '/placeholder.svg',
      views: 756,
      likes: 45
    },
    {
      id: 4,
      title: 'Детское зрение: когда нужны первые очки',
      excerpt: 'Признаки проблем со зрением у детей и рекомендации по выбору детских очков. Советы родителям.',
      content: 'Зрение ребенка формируется постепенно, и важно вовремя заметить возможные проблемы...',
      author: 'Анна Петрова',
      date: '2024-05-28',
      category: 'health',
      tags: ['дети', 'зрение', 'профилактика'],
      readTime: '6 мин',
      image: '/placeholder.svg',
      views: 1100,
      likes: 78
    },
    {
      id: 5,
      title: 'Солнцезащитные очки: мода или необходимость?',
      excerpt: 'Разбираемся в важности UV-защиты для глаз и как выбрать качественные солнцезащитные очки.',
      content: 'Солнцезащитные очки — это не просто модный аксессуар, но и важная защита для ваших глаз...',
      author: 'Дмитрий Волков',
      date: '2024-05-20',
      category: 'health',
      tags: ['солнцезащитные очки', 'UV-защита', 'здоровье'],
      readTime: '5 мин',
      image: '/placeholder.svg',
      views: 890,
      likes: 56
    },
    {
      id: 6,
      title: 'Контактные линзы vs очки: что выбрать?',
      excerpt: 'Сравнение преимуществ и недостатков контактных линз и очков. Помогаем сделать правильный выбор.',
      content: 'Выбор между контактными линзами и очками зависит от многих факторов...',
      author: 'Михаил Сидоров',
      date: '2024-05-15',
      category: 'comparison',
      tags: ['контактные линзы', 'очки', 'сравнение'],
      readTime: '8 мин',
      image: '/placeholder.svg',
      views: 1350,
      likes: 92
    }
  ];

  const categories = [
    { value: 'all', label: 'Все категории' },
    { value: 'health', label: 'Здоровье глаз' },
    { value: 'style', label: 'Стиль и мода' },
    { value: 'care', label: 'Уход за очками' },
    { value: 'comparison', label: 'Сравнения' }
  ];

  const popularTags = [
    'очки', 'линзы', 'зрение', 'стиль', 'здоровье', 'уход', 'дети', 'солнцезащитные очки'
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Блог о зрении</h1>
          <p className="text-xl text-gray-600">Полезные статьи и советы от наших экспертов</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Featured Post */}
        <Card className="mb-12 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="aspect-video lg:aspect-auto bg-gray-200 flex items-center justify-center">
              <Icon name="Image" size={64} className="text-gray-400" />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-primary">Рекомендуем</Badge>
                <Badge variant="outline">{featuredPost.category}</Badge>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Icon name="User" size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-600">{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-600">{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-600">{featuredPost.readTime}</span>
                  </div>
                </div>
              </div>
              <Button size="lg">
                Читать статью
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </Card>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex-1">
                <Input
                  placeholder="Поиск по статьям..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                      <Icon name="FileText" size={32} className="text-gray-400" />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {categories.find(c => c.value === post.category)?.label}
                      </Badge>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Icon name="Eye" size={14} />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Heart" size={14} />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500">
                        {post.date}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                          <Icon name="User" size={12} className="text-gray-600" />
                        </div>
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                      <Button variant="outline" size="sm">
                        Читать
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <Icon name="Search" size={48} className="text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Статьи не найдены
                </h3>
                <p className="text-gray-600">
                  Попробуйте изменить параметры поиска
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Recent Posts */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Последние статьи</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <div key={post.id} className="flex gap-3">
                        <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name="FileText" size={16} className="text-gray-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm line-clamp-2 mb-1">
                            {post.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Популярные теги</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="cursor-pointer hover:bg-primary hover:text-white transition-colors"
                        onClick={() => setSearchTerm(tag)}
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="bg-primary text-white">
                <CardHeader>
                  <CardTitle className="text-lg">Подписка на новости</CardTitle>
                  <CardDescription className="text-white/80">
                    Получайте новые статьи на email
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Input 
                      placeholder="Ваш email" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                    <Button variant="secondary" className="w-full">
                      <Icon name="Mail" size={16} className="mr-2" />
                      Подписаться
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Категории</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.slice(1).map((category) => {
                      const count = blogPosts.filter(post => post.category === category.value).length;
                      return (
                        <div 
                          key={category.value}
                          className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                          onClick={() => setSelectedCategory(category.value)}
                        >
                          <span className="text-sm">{category.label}</span>
                          <Badge variant="secondary" className="text-xs">
                            {count}
                          </Badge>
                        </div>
                      );
                    })}
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

export default Blog;