import { CardGrid } from "@/app/styles";
import { Card, Section } from "./components";
import { links, products } from "@/app/data/products";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import StoneCatalog from "@/app/components/StoneCatalog";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection
          title="Изделия из натурального камня"
          subtitle="Мы производим оригинальные и надежные изделия из камня"
          backgroundImage="hero.png"
      />
      {/*<Section title="Выполним монтаж всех изделий, которые изготовим по заказу">*/}

      {/*</Section>*/}
      <Section title="Каталог камней">
        <StoneCatalog />
      </Section>
      <Section title="Мы изготавливаем">
        <CardGrid>
          {products.map((item) => (
              <Card key={item.id} image={item.image} name={item.name} description={item.description}/>
          ))}
        </CardGrid>
      </Section>
      {/*<Section title="Камень в дом - это..." image="background.png">*/}
      {/*  dfdf*/}
      {/*</Section>*/}
      <Footer links={links} />
    </main>
  );
}
