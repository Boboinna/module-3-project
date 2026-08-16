import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main>
      <section className="hero">
        <div>
          <p className="eyebrow">SODAS, BEERS AND JUICES</p>
          <h1>Your favourite drinks in one place</h1>
          <p>
            Browse refreshing drinks, add them to your cart and manage the
            products from the administrator portal.
          </p>
          <Link to="/shop" className="button-link">
            Browse drinks
          </Link>
        </div>

        <img src="/drink-placeholder.svg" alt="Bottle and glass" />
      </section>

      <section className="categories-section">
        <h2>Shop by category</h2>
        <div className="category-grid">
          <article>
            <h3>Sodas</h3>
            <p>Carbonated soft drinks.</p>
          </article>
          <article>
            <h3>Beers</h3>
            <p>Lagers and other beer choices.</p>
          </article>
          <article>
            <h3>Juices</h3>
            <p>Fruit juices for every taste.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
