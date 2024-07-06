
import { Section } from "../components";
import {links} from "@/app/data/products";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Pay() {
  return (
      <main>
        <Header />
        <Section>
          <h3 style={{backgroundColor: '#E4DDD4', fontSize: 24, padding: 10, textAlign: 'center'}}>Информация о компании «Камень в дом»</h3>
          <p style={{fontSize: 24, fontWeight: 300, padding: 20, lineHeight: '190%'}}>
            Доставка изделий из камня осуществляется в специально изготавливаемой упаковке под каждое изделие, на
            специализированном автотранспорте оборудованном пирамидой. <br/></p>
            <ul style={{fontSize: 24, fontWeight: 300, padding: 20, lineHeight: '190%'}}>
              <li>Доставка по Москве - от <span style={{color: '#992728'}}>2500</span> рублей. При заказе монтажа
                изделий, разгрузка и подъем изделий - бесплатно.
              </li>
              <li>По Московской области - от <span style={{color: '#992728'}}>3500</span> рублей.</li>
            </ul>
          <p style={{fontSize: 24, fontWeight: 300, paddingLeft: 20, lineHeight: '190%'}}>
            Подъем свыше первого этажа при вместимости изделий в лифт - бесплатно. <br/><br/>

            Оплата осуществляется по частям, по желанию заказчика оплата делится на 2 или 3 частями:</p>

            <ul style={{fontSize: 24, fontWeight: 300, paddingLeft: 20, lineHeight: '190%'}}>
              <li>При монтаже: 70% аванс и 30% после монтажа или 50% аванс, 25% при доставке изделий
                на объект и оставшиеся 25% после монтажа.
              </li>
              <li>При изготовлении без монтажа с доставкой 70% аванс и 30% после доставки.
                При изготовлении без доставки 50% аванс и 50 % при самовывозе.
              </li>
            </ul>
            <br/>
          <p style={{fontSize: 24, fontWeight: 300, padding: 20, lineHeight: '190%'}}>
            Вы также можете самостоятельно забрать заказ со склада-производства. При самовывозе загрузка изделия -
            бесплатно.
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
        <Footer links={links} />
      </main>
  );
}
