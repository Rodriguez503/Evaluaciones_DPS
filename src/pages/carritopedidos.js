export default function CarritoPedidos({ carrito, setCarrito }) {
    const eliminarDelCarrito = (id) => {
      setCarrito(carrito.filter((producto) => producto.id !== id));
    };
  
    const calcularTotal = () => {
      return carrito.reduce((total, producto) => total + producto.precio, 0);
    };
  
    return (
      <div>
        {carrito.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <ul className="list-group">
            {carrito.map((producto) => (
              <li key={producto.id} className="list-group-item d-flex justify-content-between align-items-center">
                {producto.nombre} - ${producto.precio}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => eliminarDelCarrito(producto.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}
        {carrito.length > 0 && (
          <div className="mt-3">
            <h5>Total: ${calcularTotal()}</h5>
          </div>
        )}
      </div>
    );
  }