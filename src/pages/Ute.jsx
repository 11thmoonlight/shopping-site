import Manifesto from "../ui/Manifesto";
import tw, { styled } from "twin.macro";
import Products from "../ui/Products";
import { productData } from "../data/uteData";

const Flex = styled.div`
  ${tw`flex justify-center`}
`;

const Container = styled.div`
  ${tw`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-2 pb-3 w-[336px] sm:w-[548px] md:w-auto
gap-5 lg:gap-8 xl:gap-16
lg:mt-16 md:mt-14 sm:mt-12 mt-10`}
`;

function Ute() {
  return (
    <div>
      {Manifesto({
        src: "/uten.jpg",
        boldText: "kitchen utensils",
        text: "i'm loving that spoon!",
      })}

      <Flex>
        <Container>
          {productData.map((product) => (
            <Products
              src={product.src}
              price={product.price}
              preprice={product.preprice}
              productName={product.productName}
              description={product.description}
              key={product.id}
            />
          ))}
        </Container>
      </Flex>
    </div>
  );
}

export default Ute;
