import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const products = [
    {
      id: 1,
      name: "Classic Round",
      brand: "Оптикка Premium",
      price: 12990,
      originalPrice: 16990,
      category: "classic",
      material: "Титан",
      features: ["UV защита", "Антибликовое покрытие", "Легкий вес"],
      rating: 4.8,
      reviews: 124,
      discount: 25,
      inStock: true
    },
    {
      id: 2,
      name: "Modern Square",
      brand: "Оптикка Style",
      price: 8990,
      category: "modern",
      material: "Металл",
      features: ["Гипоаллергенный", "Регулируемые носоупоры"],
      rating: 4.6,
      reviews: 89,
      inStock: true
    },
    {
      id: 3,
      name: "Sport Active",
      brand: "Оптикка Sport",
      price: 15990,
      category: "sport",
      material: "Поликарбонат",
      features: ["Ударопрочный", "Гибкая оправа", "Водостойкий"],
      rating: 4.9,
      reviews: 156,
      inStock: false
    },
    {
      id: 4,
      name: "Vintage Cat Eye",
      brand: "Оптикка Retro",
      price: 11990,
      category: "vintage",
      material: "Ацетат",
      features: ["Ручная работа", "Уникальный дизайн"],
      rating: 4.7,
      reviews: 67,
      inStock: true
    },
    {
      id: 5,
      name: "Business Professional",
      brand: "Оптикка Business",
      price: 18990,
      category: "business",
      material: "Титан",
      features: ["Премиум качество", "Элегантный дизайн", "Долговечность"],
      rating: 4.9,
      reviews: 203,
      inStock: true
    },
    {
      id: 6,
      name: "Youth Trendy",
      brand: "Оптикка Young",
      price: 6990,
      category: "youth",
      material: "Пластик",
      features: ["Яркие цвета", "Модный дизайн", "Доступная цена"],
      rating: 4.4,
      reviews: 45,
      inStock: true
    }
  ];

  const categories = [
    { value: 'all', label: 'Все категории' },
    { value: 'classic', label: 'Классические' },
    { value: 'modern', label: 'Современные' },
    { value: 'sport', label: 'Спортивные' },
    { value: 'vintage', label: 'Винтажные' },
    { value: 'business', label: 'Деловые' },
    { value: 'youth', label: 'Молодежные' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Каталог оправ</h1>
          <p className="text-xl text-gray-600">Найдите идеальную оправу из нашей коллекции</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Filter" size={20} className="mr-2" />
                  Фильтры
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Поиск</label>
                  <Input
                    placeholder="Название или бренд..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Категория</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
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

                {/* Price Range */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Цена: {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()} ₽
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={50000}
                    min={0}
                    step={1000}
                    className="mt-2"
                  />
                </div>

                {/* Sort */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Сортировка</label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">По популярности</SelectItem>
                      <SelectItem value="price-low">Цена: по возрастанию</SelectItem>
                      <SelectItem value="price-high">Цена: по убыванию</SelectItem>
                      <SelectItem value="rating">По рейтингу</SelectItem>
                      <SelectItem value="newest">Новинки</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Найдено {filteredProducts.length} товаров
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Icon name="Grid3X3" size={16} />
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="List" size={16} />
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                      <Icon name="Glasses" size={64} className="text-gray-400" />
                      {product.discount && (
                        <Badge className="absolute top-3 right-3 bg-red-500">
                          -{product.discount}%
                        </Badge>
                      )}
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <Badge variant="secondary">Нет в наличии</Badge>
                        </div>
                      )}
                    </div>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {product.brand}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            size={14}
                            className={`${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      <Badge variant="secondary" className="text-xs">
                        {product.material}
                      </Badge>
                      {product.features.slice(0, 2).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold text-gray-900">
                          {product.price.toLocaleString()} ₽
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            {product.originalPrice.toLocaleString()} ₽
                          </span>
                        )}
                      </div>
                      <Button 
                        disabled={!product.inStock}
                        className="group-hover:bg-primary/90"
                      >
                        <Icon name="ShoppingCart" size={16} className="mr-2" />
                        {product.inStock ? 'В корзину' : 'Нет в наличии'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <Icon name="Search" size={48} className="text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Товары не найдены
                </h3>
                <p className="text-gray-600">
                  Попробуйте изменить параметры поиска или фильтры
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;