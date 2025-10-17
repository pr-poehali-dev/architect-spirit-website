import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const works = [
    {
      id: 1,
      image: 'https://cdn.poehali.dev/projects/13cac258-7031-47c3-85ee-de48fa0d5836/files/c4d59046-5e68-44ba-8105-5cbd40d92d36.jpg',
      title: 'Современный минимализм',
    },
    {
      id: 2,
      image: 'https://cdn.poehali.dev/projects/13cac258-7031-47c3-85ee-de48fa0d5836/files/96375098-639c-453b-bd52-97a2f372679b.jpg',
      title: 'Скандинавский стиль',
    },
    {
      id: 3,
      image: 'https://cdn.poehali.dev/projects/13cac258-7031-47c3-85ee-de48fa0d5836/files/cc5cd655-78da-4fe5-a11c-e98170684673.jpg',
      title: 'Контемпорари дизайн',
    },
  ];

  const services = [
    {
      id: 1,
      title: 'Эскиз',
      subtitle: 'Набросок дома',
      description:
        'Чертежей недостаточно для строительства, но с эскизным проектом вы сможете выбрать идеальную планировку помещений в доме и наглядно увидеть в 3D, как будет выглядеть ваш будущий дом.',
      price: '150₽/м²',
      icon: 'Pencil',
    },
    {
      id: 2,
      title: 'АР',
      subtitle: 'Архитектурные решения',
      description: 'Комплект чертежей достаточно для строительства.',
      price: '300₽/м²',
      icon: 'Home',
    },
    {
      id: 3,
      title: 'АР+КР',
      subtitle: 'Архитектурные и Конструктивные решения',
      description: 'Детальный комплект чертежей, подходящий для строительства.',
      price: '550₽/м²',
      icon: 'Building2',
    },
    {
      id: 4,
      title: 'Дизайн Мебели',
      subtitle: 'Проектирование интерьера',
      description:
        'Если у вас уже есть готовое помещение, но там совсем пусто, я сделаю подходящую мебель для комнат и по необходимости подберем текстуры пола, обоев и потолка.',
      price: '550₽/м²',
      icon: 'Sofa',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Елена Соколова',
      text: 'Потрясающая работа! Юрий помог воплотить мою мечту в реальность. Дом получился именно таким, каким я его представляла.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Дмитрий Волков',
      text: 'Профессиональный подход на всех этапах проектирования. Все сроки соблюдены, качество чертежей на высоте.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Мария Петрова',
      text: 'Благодарю за терпение и внимание к деталям. Особенно понравился этап эскизного проектирования — сразу понятно, что получится.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-muted via-background to-muted overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzJDNUYyRCIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-40"></div>
        <div className="container mx-auto px-6 text-center relative z-10 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-light mb-6 text-foreground tracking-tight">
            Дух Архитектора
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
            Создаём пространства, где живёт вдохновение
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-6 hover:scale-105 transition-transform"
            onClick={() => {
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Начать проект
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-16 animate-fade-in">
            Наши работы
          </h2>
          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {works.map((work, index) => (
                  <CarouselItem key={work.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <CardContent className="p-0">
                          <div className="relative aspect-[3/4] overflow-hidden group">
                            <img
                              src={work.image}
                              alt={work.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                              <h3 className="text-white text-xl font-light">{work.title}</h3>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-6 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-16 animate-fade-in">
            Услуги
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={service.id}
                className="group hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 hover:border-primary animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon name={service.icon} size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-semibold mb-1">{service.title}</h3>
                      <p className="text-muted-foreground text-sm">{service.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-foreground/80 mb-6 leading-relaxed min-h-[80px]">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-light text-primary">{service.price}</span>
                    <Button
                      variant={selectedService === service.id ? 'default' : 'outline'}
                      size="sm"
                      className="group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                      {selectedService === service.id ? 'Скрыть' : 'Подробнее'}
                      <Icon
                        name={selectedService === service.id ? 'ChevronUp' : 'ChevronDown'}
                        size={16}
                        className="ml-2"
                      />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-16 animate-fade-in">
            Отзывы клиентов
          </h2>
          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={testimonial.id}>
                    <Card className="border-0 shadow-lg animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardContent className="p-12 text-center">
                        <div className="flex justify-center mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Icon key={i} name="Star" size={24} className="text-secondary fill-secondary" />
                          ))}
                        </div>
                        <p className="text-xl md:text-2xl font-light text-foreground/90 mb-8 leading-relaxed italic">
                          "{testimonial.text}"
                        </p>
                        <p className="text-lg font-semibold text-primary">{testimonial.name}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-light mb-8 animate-fade-in">
            Готовы начать?
          </h2>
          <p className="text-xl mb-12 opacity-90 font-light">
            Свяжитесь с нами, и мы создадим дом вашей мечты
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 hover:scale-105 transition-transform"
            >
              <Icon name="Mail" size={20} className="mr-2" />
              Написать нам
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:scale-105 transition-all"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 bg-foreground text-background">
        <div className="container mx-auto text-center">
          <p className="text-sm opacity-70">© 2024 Дух Архитектора. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
