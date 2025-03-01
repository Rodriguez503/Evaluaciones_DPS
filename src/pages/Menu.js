export default function Menu({ setCarrito }) {
    const productos = [
      { id: 1, nombre: 'Pizza', precio: 10 },
      { id: 2, nombre: 'Hamburguesa', precio: 7 },
      { id: 3, nombre: 'Pasta', precio: 8 },
    ];
  
    const agregarAlCarrito = (producto) => {
      setCarrito((prevCarrito) => [...prevCarrito, producto]);
    };
  
    return (
      <div className="row">
        {productos.map((producto) => (
          <div className="col-md-4" key={producto.id}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">${producto.precio}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => agregarAlCarrito(producto)}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }