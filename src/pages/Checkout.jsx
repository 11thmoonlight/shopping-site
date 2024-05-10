import Header from "../ui/Header";
import UserForm from "../ui/UserForm";
import { cartData } from "../data/cartData";
import tw, { styled } from "twin.macro";
import CheckoutTable from "../ui/CheckoutTable";
import { NavLink } from "react-router-dom";
import { userData } from "../data/userData";

const Container = styled.label`
  ${tw`flex flex-col lg:items-center overflow-y-scroll pb-4
    lg:mt-14 md:mt-12 sm:mt-10 mt-8`}
`;

const Button = styled(NavLink)`
  ${tw`text-center pt-4 bg-teal-500 hover:bg-teal-600 w-60 h-14 text-white tracking-wide font-semibold text-sm cursor-pointer mt-5`}
`;

const TotalPrePrice = cartData
  .map((data) => data.preprice)
  .reduce((acc, cur) => acc.concat(+cur), [])
  .reduce((acc, cur) => acc + cur, 0);

const totalPrice = cartData
  .map((data) => data.price)
  .reduce((acc, cur) => acc.concat(+cur), [])
  .reduce((acc, cur) => acc + cur, 0);

const discounts =
  cartData
    .map((data) => data.preprice)
    .reduce((acc, cur) => acc.concat(+cur), [])
    .reduce((acc, cur) => acc + cur, 0) - totalPrice;

function Checkout() {
  return (
    <div>
      <Header />
      <h2
        className="md:text-4xl text-2xl px-2
    lg:mt-12 md:mt-10 sm:mt-8 mt-6
    flex justify-center"
      >
        <img
          src="/checkout.jpg"
          alt=""
          className="rounded-2xl shadow-xl w-36 sm:w-44"
        />
        <div className="flex flex-col justify-center sm:pl-6 pl-3">
          <span className="block font-semibold">checkout</span>
          <span className="block mt-2">let's review your order</span>
        </div>
      </h2>

      <Container>
        {cartData.map((product, i) => (
          <CheckoutTable
            key={product.id}
            number={i + 1}
            prePrice={product.preprice}
            src={product.src}
            description={product.description}
            discount={product.preprice - product.price}
            price={product.price}
          />
        ))}
      </Container>

      <h2
        className="md:text-4xl text-2xl px-2
    lg:mt-12 md:mt-10 sm:mt-8 mt-6
    flex justify-center"
      >
        <div className="flex flex-col justify-around sm:pl-6 pl-3">
          <span className="block font-semibold">
            we'll now need some details
          </span>
          <span className="block mt-2">shipping information</span>
        </div>
      </h2>

      <div
        className="md:flex max-w-5xl mx-auto md:justify-around
    lg:mt-12 md:mt-10 sm:mt-8 mt-6 mb-10"
      >
        <div className="flex flex-col items-center">
          <UserForm />
        </div>
        <div className="flex flex-col items-center mt-6">
          <span className="block text-sm text-neutral-400 font-bold mb-2">
            items add up to
          </span>
          <span className="block text-lg text-neutral-700 font-bold mb-4">
            ${TotalPrePrice}
          </span>
          <span className="block text-sm text-neutral-400 font-bold mb-2">
            shipping
          </span>
          <span className="block text-lg text-neutral-700 font-bold mb-4">
            select your country
          </span>
          <span className="block text-sm text-neutral-400 font-bold mb-2">
            discount
          </span>
          <span className="block text-lg text-red-500 font-bold mb-4">
            ${discounts}
          </span>
          <span className="block text-sm text-neutral-400 font-bold mb-2">
            total due
          </span>
          <span className="block text-2xl text-neutral-700 font-bold mb-4">
            ${totalPrice}
          </span>
          <span className="block text-sm text-neutral-400 font-bold mb-2">
            payment method
          </span>
          <div className="flex">
            <img
              src="/btc-bw.png"
              className="w-20 p-3 rounded-xl"
              title="Bitcoin | BTC is currently unavailable"
            />
            <img
              src="/eth-bw.png"
              className="w-20 p-3 rounded-xl"
              title="Ethereum | ETH is currently unavailable"
            />
            <img
              src="/usdt.png"
              className="w-20 p-3 rounded-xl cursor-pointer border-2 border-green-500"
              title="Tether | USDT"
            />
          </div>
          <Button to="/payment">CONTINUE</Button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
