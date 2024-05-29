import { CardGrid } from "@/app/styles";
import { Card, Section } from "./components";
import { links, products } from "@/app/data/products";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main>
      <Section title="Мы изготавливаем">
        <CardGrid>
          {products.map((item) => (
              <Card key={item.id} image={item.image} name={item.name} description={item.description}/>
          ))}
        </CardGrid>
      </Section>
      <Section title="Камень в дом - это..." image="background.png">
        dfdf
      </Section>
      <Footer links={links} />
    </main>
  );
}
