import { CardGrid } from "@/app/styles";
import { Card, Section } from "../components";
import {links, products, works} from "@/app/data/products";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function About() {
  return (
      <main>
        <Header />
        <Section>
          <h3 style={{backgroundColor: '#E4DDD4', fontSize: 24, padding: 10, textAlign: 'center', marginBottom: 20, lineHeight: '190%'}}>Информация о компании «Камень в дом»</h3>
          <p style={{fontSize: 24, fontWeight: 300}}>Компания "Наш Камень" предлагает Вам полный спектр услуг, связанный
            с производством <br/> различных изделий как из натурального и природного камня, так и искусственного.<br/>
            За нами изготовление изделий для домашнего уюта, ступени, столешницы, подоконники<br/>
            и многое другое. Один звонок и вы уже обладатель каменного произведения искусства<br/>
            в своем доме.
            <br/><br/>
            Мы стараемся сделать всё быстро и аккуратно. Начинаем с бесплатной консультации,<br/>
            где обсуждаем ваши предпочтения и предлагаем оптимальные решения. Затем наш замерщик выезжает на объект
            для<br/>
            точных измерений. На основе этих данных разрабатываем индивидуальный проект, который после вашего<br/>
            утверждения переходит в стадию изготовления на нашем современном оборудовании.<br/>
            <br/><br/>
            Завершающие этапы — это профессиональная доставка и монтаж, гарантирующие идеальное воплощение вашего<br/>
            замысла. Мы предлагаем и послепродажное обслуживание для поддержания красоты и долговечности ступеней.<br/>
          </p>
        </Section>

        <Section>
          <h3 style={{
            backgroundColor: '#E4DDD4',
            fontSize: 24,
            fontWeight: 300,
            paddingTop: 40,
            paddingBottom: 40,
            textAlign: 'center',
            marginBottom: 20,
            lineHeight: '190%'
          }}>Наши менеджеры ответят на любой интересующий<br/>
            вас вопрос ежедневно с 9.00 до 20.00<br/>
            по телефону: <a style={{color: '#970C0D'}} href="tel:+79803921912">+7(980) 392-19-12.</a><br/>
            Консультируйтесь или вызовите к себе<br/>
            менеджера для заказа.<br/>
            Мы всегда рады вашему звонку и обращению!</h3>
        </Section>
        <Section title="Мы изготавливаем">
          <CardGrid>
            {works.map((item) => (
                <Card key={item.id} image={item.image} description={item.description}/>
            ))}
          </CardGrid>
        </Section>
        <Footer links={links} />
      </main>
  );
}
