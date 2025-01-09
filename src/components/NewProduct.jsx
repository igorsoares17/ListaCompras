import Name from './Name';
import Value from './Value';
import Amount from './Amount';

const NewProduct = ({ children, productDivs, total}) => {

  return (
    <>
      <div className="App">
        <header>
          <h1>LISTA DE COMPRAS</h1>
        </header>

        <main>

        <div id="products">

          {productDivs.map((item) => {

            return (

            <div key={item.id} className="product">

              <div className="atribute">

                <Name name={productDivs[item.id].name} />

                <input
                  className="input-product input-product-name"
                  type="text"
                  name="name"
                  autoComplete="off"
                  placeholder="Nome"

                />

              </div>

              <div className="atribute">

                <Value value={productDivs[item.id].value} />

                <input
                  className="input-product input-product-money"
                  type="text"
                  name="money"
                  autoComplete="off"
                  placeholder="Valor"
                />

              </div>

              <div className="atribute">

                <Amount amount={productDivs[item.id].amount} />

                <input
                  className="input-product input-product-qtd"
                  type="text"
                  name="qtd"
                  autoComplete="off"
                  placeholder="Quantidade"
                />

              </div>

            </div>

          )})}

          {children}

        </div>

          <div id="total">
            <h2>TOTAL (R$){total}</h2>
          </div>

        </main>

      </div>
    </>
  );
}

export default NewProduct;