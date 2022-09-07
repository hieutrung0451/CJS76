import ProductCard from "./ProductCard";

const Section = () => {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <ProductCard
            name="Fancy Product"
            price1="40.00"
            price2="80.00"
            promotionalPrice={false}
          />
          <ProductCard
            name="Special Item"
            price1="20.00"
            price2="18.00"
            promotionalPrice={true}
            checkStar={true}
            checkSale={true}
          />
          <ProductCard
            name="Sale Item"
            price1="50.00"
            price2="25.00"
            promotionalPrice={true}
            checkSale={true}
          />
          <ProductCard name="Popular Item" price1="40.00" checkStar={true} />
          <ProductCard
            name="Sale Item"
            price1="50.00"
            price2="25.00"
            promotionalPrice={true}
            checkSale={true}
          />
          <ProductCard name="Fancy Product" price1="120.00" price2="280.00" />
          <ProductCard
            name="Special Item"
            price1="20.00"
            price2="18.00"
            promotionalPrice={true}
            checkStar={true}
            checkSale={true}
          />
          <ProductCard name="Popular Item" price1="40.00" />
        </div>
      </div>
    </section>
  );
};

export default Section;
