import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Доска обрезная 50x150x6000',
      category: 'boards',
      price: '2 500',
      description: 'Качественная доска из сосны первого сорта',
      image: '/img/7e1173bb-3797-41d6-8334-cbdc5ca96408.jpg'
    },
    {
      id: 2,
      name: 'Брус 100x100x6000',
      category: 'timber',
      price: '4 200',
      description: 'Строительный брус из лиственницы',
      image: '/img/7e1173bb-3797-41d6-8334-cbdc5ca96408.jpg'
    },
    {
      id: 3,
      name: 'Вагонка сосна 14x96x3000',
      category: 'cladding',
      price: '850',
      description: 'Евровагонка класса "Экстра"',
      image: '/img/7e1173bb-3797-41d6-8334-cbdc5ca96408.jpg'
    },
    {
      id: 4,
      name: 'Доска террасная 28x142x4000',
      category: 'decking',
      price: '3 100',
      description: 'Террасная доска из лиственницы',
      image: '/img/7e1173bb-3797-41d6-8334-cbdc5ca96408.jpg'
    }
  ];

  const categories = [
    { id: 'all', name: 'Все товары', icon: 'Grid3X3' },
    { id: 'boards', name: 'Доски', icon: 'Package' },
    { id: 'timber', name: 'Брус', icon: 'Box' },
    { id: 'cladding', name: 'Вагонка', icon: 'Layers' },
    { id: 'decking', name: 'Террасная доска', icon: 'Home' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-forest-light to-forest-dark">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <header className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <Icon name="TreePine" size={48} className="text-white mr-4" />
              <h1 className="text-5xl font-heading font-bold text-white">ЛесПром</h1>
            </div>
            <p className="text-xl text-forest-light max-w-2xl mx-auto">
              Качественные пиломатериалы для строительства и отделки
            </p>
          </header>

          {/* Hero Section */}
          <div className="relative mb-16 animate-slide-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center">
              <img 
                src="/img/7e1173bb-3797-41d6-8334-cbdc5ca96408.jpg" 
                alt="Лесопильное производство" 
                className="w-full h-64 object-cover rounded-2xl mb-8"
              />
              <h2 className="text-3xl font-heading font-bold text-white mb-4">
                Добро пожаловать в мир качественных пиломатериалов
              </h2>
              <p className="text-forest-light mb-8">
                Более 15 лет опыта в производстве и продаже строительных материалов из дерева
              </p>
            </div>
          </div>

          {/* Login Form */}
          <div className="max-w-md mx-auto">
            <Card className="bg-white/95 backdrop-blur-sm border-wood/20 animate-fade-in">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-heading text-wood-dark">
                  Вход в систему
                </CardTitle>
                <CardDescription>
                  Войдите в свой аккаунт для просмотра каталога
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-wood-dark">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com"
                    className="border-wood/30 focus:border-wood"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-wood-dark">Пароль</label>
                  <Input 
                    type="password" 
                    placeholder="••••••••"
                    className="border-wood/30 focus:border-wood"
                  />
                </div>
                <Button 
                  onClick={() => setIsLoggedIn(true)}
                  className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 hover:scale-105"
                >
                  <Icon name="LogIn" size={20} className="mr-2" />
                  Войти
                </Button>
                <div className="text-center">
                  <Button 
                    variant="ghost" 
                    className="text-wood hover:text-wood-dark"
                  >
                    Нет аккаунта? Регистрация
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-light/20 to-accent/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-8 animate-fade-in">
          <div className="flex items-center">
            <Icon name="TreePine" size={40} className="text-primary mr-3" />
            <h1 className="text-3xl font-heading font-bold text-wood-dark">ЛесПром</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="bg-forest text-white">
              <Icon name="User" size={16} className="mr-1" />
              Пользователь
            </Badge>
            <Button 
              variant="ghost"
              onClick={() => setIsLoggedIn(false)}
              className="text-wood-dark hover:text-primary"
            >
              <Icon name="LogOut" size={20} />
            </Button>
          </div>
        </header>

        {/* Categories */}
        <div className="mb-8 animate-slide-up">
          <h2 className="text-2xl font-heading font-bold text-wood-dark mb-6">Каталог товаров</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id 
                    ? 'bg-primary text-white' 
                    : 'border-wood/30 text-wood-dark hover:border-primary'
                }`}
              >
                <Icon name={category.icon} size={18} className="mr-2" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
          {filteredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="group bg-white border-wood/20 hover:border-primary transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 right-3 bg-forest text-white">
                    {product.price} ₽
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg font-heading text-wood-dark mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600 mb-4">
                  {product.description}
                </CardDescription>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300"
                >
                  <Icon name="ShoppingCart" size={18} className="mr-2" />
                  В корзину
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <Icon name="Package" size={64} className="text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-heading text-wood-dark mb-2">Товары не найдены</h3>
            <p className="text-gray-600">Попробуйте изменить категорию или вернуться ко всем товарам</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;