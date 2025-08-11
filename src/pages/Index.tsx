import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const forumSections = [
    { title: "Планирование беременности", icon: "Calendar", count: "234 темы" },
    { title: "Беременность и роды", icon: "Baby", count: "456 тем" },
    { title: "Материнство и воспитание", icon: "Heart", count: "789 тем" },
    { title: "Здоровье мамы и ребёнка", icon: "Shield", count: "321 тема" },
    { title: "Советы экспертов", icon: "GraduationCap", count: "125 статей" },
  ];

  const experts = [
    {
      name: "Др. Анна Петрова",
      specialty: "Акушер-гинеколог",
      experience: "15 лет опыта",
      rating: "4.9",
      available: true
    },
    {
      name: "Марина Сидорова",
      specialty: "Педиатр",
      experience: "12 лет опыта",
      rating: "4.8",
      available: true
    },
    {
      name: "Елена Козлова",
      specialty: "Психолог",
      experience: "10 лет опыта",
      rating: "4.9",
      available: false
    }
  ];

  const popularTopics = [
    { title: "Первые шевеления малыша", replies: 42, views: "1.2k", category: "Беременность" },
    { title: "Как подготовиться к родам?", replies: 38, views: "2.1k", category: "Роды" },
    { title: "Грудное вскармливание: советы", replies: 56, views: "1.8k", category: "Материнство" },
    { title: "Детский сон и режим дня", replies: 29, views: "0.9k", category: "Воспитание" }
  ];

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
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Главная</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Разделы</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Эксперты</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">О проекте</a>
              <Button className="bg-primary hover:bg-primary/90">Войти</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero секция */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Путь к материнству <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                вместе с заботой
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Онлайн-пространство для женщин на пути к материнству: от планирования беременности 
              до воспитания ребёнка. Делитесь опытом, получайте поддержку.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Присоединиться к обсуждениям
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться к эксперту
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Разделы форума */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Разделы форума</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {forumSections.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={section.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{section.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{section.count}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Эксперты */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Наши эксперты</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Получите профессиональную консультацию от опытных специалистов в области материнства и детского здоровья
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experts.map((expert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                    <Icon name="UserRound" size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{expert.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{expert.specialty}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="Star" size={16} className="text-yellow-500" />
                    <span>{expert.rating}</span>
                    <span>•</span>
                    <span>{expert.experience}</span>
                  </div>
                  <Button 
                    className={`w-full ${expert.available ? 'bg-primary hover:bg-primary/90' : 'bg-muted text-muted-foreground cursor-not-allowed'}`}
                    disabled={!expert.available}
                  >
                    {expert.available ? (
                      <>
                        <Icon name="Calendar" size={16} className="mr-2" />
                        Записаться на консультацию
                      </>
                    ) : (
                      <>
                        <Icon name="Clock" size={16} className="mr-2" />
                        Временно недоступен
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Популярные темы */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Популярные обсуждения</h3>
          <div className="max-w-4xl mx-auto space-y-4">
            {popularTopics.map((topic, index) => (
              <Card key={index} className="hover:shadow-md transition-all duration-200 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge variant="secondary" className="text-xs">{topic.category}</Badge>
                        <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {topic.title}
                        </h4>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Icon name="MessageSquare" size={14} />
                          <span>{topic.replies} ответов</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Eye" size={14} />
                          <span>{topic.views} просмотров</span>
                        </div>
                      </div>
                    </div>
                    <Icon name="ChevronRight" size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Посмотреть все обсуждения
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Изображение материнства */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <img 
              src="/img/fc8c8ffb-7139-48ae-88ac-309d4e76b044.jpg" 
              alt="Материнство и забота" 
              className="w-full max-w-md mx-auto rounded-3xl shadow-lg mb-8"
            />
            <h3 className="text-2xl font-bold text-foreground mb-4">Вместе мы сильнее</h3>
            <p className="text-muted-foreground leading-relaxed">
              Каждая мама уникальна, но путь материнства объединяет всех нас. 
              Здесь вы найдёте поддержку, понимание и ответы на свои вопросы.
            </p>
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
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#" className="hover:text-background transition-colors">Планирование беременности</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Беременность и роды</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Материнство</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Здоровье</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Помощь</h5>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#" className="hover:text-background transition-colors">Эксперты</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Консультации</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Поддержка</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Связаться с нами</h5>
              <div className="flex space-x-3">
                <Button size="sm" variant="outline" className="border-background/30 text-background/70 hover:bg-background hover:text-foreground">
                  <Icon name="Mail" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="border-background/30 text-background/70 hover:bg-background hover:text-foreground">
                  <Icon name="Phone" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="border-background/30 text-background/70 hover:bg-background hover:text-foreground">
                  <Icon name="MessageCircle" size={16} />
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