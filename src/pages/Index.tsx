import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const forumTopics = [
    {
      title: "Когда лучше планировать беременность?",
      author: "Анна К.",
      replies: 12,
      views: 245,
      category: "planning",
      time: "2 часа назад"
    },
    {
      title: "УЗИ на 20 неделе — что важно знать?",
      author: "Мария П.",
      replies: 8,
      views: 156,
      category: "pregnancy",
      time: "4 часа назад"
    },
    {
      title: "Первые прикормы: с чего начать?",
      author: "Екатерина М.",
      replies: 23,
      views: 378,
      category: "motherhood",
      time: "6 часов назад"
    },
    {
      title: "Подготовка к родам: курсы или самостоятельно?",
      author: "Ольга В.",
      replies: 15,
      views: 289,
      category: "pregnancy",
      time: "1 день назад"
    }
  ];

  const blogPosts = [
    {
      title: "10 признаков готовности к зачатию",
      description: "Физическое и эмоциональное состояние будущих родителей — ключ к успешной беременности",
      image: "/img/1772d898-f8ec-4a68-99ba-c5ab0d34ac88.jpg",
      readTime: "5 мин",
      category: "Планирование"
    },
    {
      title: "Питание во время беременности: что можно и нельзя",
      description: "Полный гид по здоровому питанию для будущей мамы и развития малыша",
      image: "/img/2ff88340-994d-4c99-939d-4bba28e793f5.jpg",
      readTime: "8 мин",
      category: "Беременность"
    },
    {
      title: "Развитие речи у детей до года",
      description: "Как стимулировать речевое развитие малыша с первых месяцев жизни",
      image: "/img/d67f49a6-dcbb-4be0-ac7b-6a1a1a1de95e.jpg",
      readTime: "6 мин",
      category: "Развитие"
    }
  ];

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'planning': return 'Планирование';
      case 'pregnancy': return 'Беременность';
      case 'motherhood': return 'Мамы с детьми';
      default: return 'Все';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      {/* Навигация */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Baby" size={20} className="text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">Матрона Форум</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Планирование</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Беременность</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Мамы с детьми</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Форум</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Блог</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Контакты</a>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Вход
              </Button>
              <Button className="bg-primary hover:bg-primary/90">
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Блок 1: Планирование */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6 leading-tight">
                Планируете стать родителями?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Статьи, советы экспертов, калькуляторы и чек-листы для подготовки. 
                Всё необходимое для осознанного планирования беременности и создания крепкой семьи.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                <Icon name="Calendar" size={20} className="mr-2" />
                Перейти в раздел
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/img/1772d898-f8ec-4a68-99ba-c5ab0d34ac88.jpg" 
                alt="Планирование беременности" 
                className="w-full rounded-3xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Блок 2: Беременность */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h2 className="text-4xl font-bold text-foreground mb-6 leading-tight">
                Беременность — особенное время
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Календарь беременности, списки вещей, советы по питанию и подготовке к родам. 
                Сопровождаем вас на каждом этапе этого удивительного путешествия.
              </p>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3">
                <Icon name="Heart" size={20} className="mr-2" />
                Перейти в раздел
              </Button>
            </div>
            <div className="lg:order-1 relative">
              <img 
                src="/img/2ff88340-994d-4c99-939d-4bba28e793f5.jpg" 
                alt="Беременность" 
                className="w-full rounded-3xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/10 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Блок 3: Мамы с детьми */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6 leading-tight">
                Растём вместе с малышом
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Руководства по развитию, советы педиатров, подбор игрушек и занятий. 
                Поддерживаем мам на каждом этапе роста и развития ребёнка.
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3">
                <Icon name="Baby" size={20} className="mr-2" />
                Перейти в раздел
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/img/d67f49a6-dcbb-4be0-ac7b-6a1a1a1de95e.jpg" 
                alt="Мама с ребёнком" 
                className="w-full rounded-3xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Блок форума */}
      <section className="py-16 px-4 bg-white/70">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              <Icon name="MessageCircle" size={32} className="inline mr-3 text-primary" />
              Активные обсуждения
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Присоединяйтесь к живому общению с другими мамами. Делитесь опытом, задавайте вопросы, находите поддержку.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-muted/50">
              <TabsTrigger value="all">Все темы</TabsTrigger>
              <TabsTrigger value="planning">Планирование</TabsTrigger>
              <TabsTrigger value="pregnancy">Беременность</TabsTrigger>
              <TabsTrigger value="motherhood">Мамы с детьми</TabsTrigger>
            </TabsList>
            
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-2">
                <Icon name="TrendingUp" size={20} className="text-primary" />
                <span className="font-semibold text-foreground">Популярные сегодня</span>
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                <Icon name="Plus" size={16} className="mr-2" />
                Создать тему
              </Button>
            </div>

            <TabsContent value="all" className="space-y-4">
              {forumTopics.map((topic, index) => (
                <Card key={index} className="hover:shadow-md transition-all duration-200 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <Badge variant="secondary" className="text-xs">
                            {getCategoryName(topic.category)}
                          </Badge>
                          <span className="text-sm text-muted-foreground">от {topic.author}</span>
                          <span className="text-sm text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">{topic.time}</span>
                        </div>
                        <h4 className="text-lg font-semibold group-hover:text-primary transition-colors mb-3">
                          {topic.title}
                        </h4>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Icon name="MessageSquare" size={14} />
                            <span>{topic.replies}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="Eye" size={14} />
                            <span>{topic.views}</span>
                          </div>
                        </div>
                      </div>
                      <Icon name="ChevronRight" size={20} className="text-muted-foreground group-hover:text-primary transition-colors ml-4" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="planning" className="space-y-4">
              {forumTopics.filter(topic => topic.category === 'planning').map((topic, index) => (
                <Card key={index} className="hover:shadow-md transition-all duration-200 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <Badge variant="secondary" className="text-xs">
                            {getCategoryName(topic.category)}
                          </Badge>
                          <span className="text-sm text-muted-foreground">от {topic.author}</span>
                          <span className="text-sm text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">{topic.time}</span>
                        </div>
                        <h4 className="text-lg font-semibold group-hover:text-primary transition-colors mb-3">
                          {topic.title}
                        </h4>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Icon name="MessageSquare" size={14} />
                            <span>{topic.replies}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="Eye" size={14} />
                            <span>{topic.views}</span>
                          </div>
                        </div>
                      </div>
                      <Icon name="ChevronRight" size={20} className="text-muted-foreground group-hover:text-primary transition-colors ml-4" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Посмотреть все обсуждения
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Блок блога */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              <Icon name="BookOpen" size={32} className="inline mr-3 text-secondary" />
              Полезные статьи
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Экспертные материалы от врачей, психологов и опытных мам. Актуальная информация для каждого этапа материнства.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="leading-relaxed">
                    {post.description}
                  </CardDescription>
                  <div className="flex items-center mt-4 text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                    Читать далее
                    <Icon name="ArrowRight" size={14} className="ml-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              Читать все статьи
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Baby" size={16} className="text-primary-foreground" />
                </div>
                <h4 className="text-lg font-bold">Матрона Форум</h4>
              </div>
              <p className="text-background/70 text-sm leading-relaxed">
                Онлайн-пространство для женщин на пути к материнству
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Разделы</h5>
              <ul className="space-y-3 text-sm text-background/70">
                <li><a href="#" className="hover:text-background transition-colors">Планирование беременности</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Беременность и роды</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Мамы с детьми</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Форум</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Блог</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">О проекте</h5>
              <ul className="space-y-3 text-sm text-background/70">
                <li><a href="#" className="hover:text-background transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Реклама</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Контакты</a></li>
              </ul>
              <div className="flex space-x-3 mt-6">
                <Button size="sm" variant="outline" className="border-background/30 text-background/70 hover:bg-background hover:text-foreground">
                  <Icon name="Instagram" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="border-background/30 text-background/70 hover:bg-background hover:text-foreground">
                  <Icon name="MessageCircle" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="border-background/30 text-background/70 hover:bg-background hover:text-foreground">
                  <Icon name="Send" size={16} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/50 text-sm">
            © 2024 Матрона Форум. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;