import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  // Estado del carrito: array vacío por defecto
  const [carrito, setCarrito] = useState([]);
  const [pedidoConfirmado, setPedidoConfirmado] = useState(false); // Estado para manejar el mensaje de confirmación

  // Listado de platillos
  const menuPlatillos = [
    { id: 1, nombre: 'Pizza Margherita', precio: 10 },
    { id: 2, nombre: 'Tacos al Pastor', precio: 5 },
    { id: 3, nombre: 'Ensalada César', precio: 7 },
    { id: 4, nombre: 'Hamburguesa', precio: 8 },
    { id: 5, nombre: 'Pasta Alfredo', precio: 12 },
  ];

  // Función para agregar platillo al carrito
  const agregarAlCarrito = (platillo) => {
    // Verificar si el platillo ya está en el carrito
    const itemExistente = carrito.find((item) => item.id === platillo.id);

    if (itemExistente) {
      // Si el platillo ya existe, aumentar la cantidad
      const nuevoCarrito = carrito.map((item) =>
        item.id === platillo.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
      setCarrito(nuevoCarrito);
    } else {
      // Si el platillo no existe, agregarlo con cantidad 1
      setCarrito([...carrito, { ...platillo, cantidad: 1 }]);
    }
  };

  // Función para eliminar un platillo del carrito
  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  // Función para actualizar la cantidad de un platillo
  const actualizarCantidad = (id, cantidad) => {
    if (cantidad <= 0) return; // Evitar cantidad negativa o cero
    const nuevoCarrito = carrito.map((item) =>
      item.id === id ? { ...item, cantidad: cantidad } : item
    );
    setCarrito(nuevoCarrito);
  };

  // Función para confirmar el pedido
  const confirmarPedido = () => {
    if (carrito.length === 0) {
      alert('Tu carrito está vacío. Por favor, agrega productos antes de confirmar.');
    } else {
      // Mostrar mensaje de confirmación y resetear carrito
      setPedidoConfirmado(true);
      setCarrito([]);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Menú de Restaurante</h1>
      <p>Selecciona tus platillos favoritos y agrégales al carrito.</p>

      {/* Listado de platillos */}
      <div className="row">
        {menuPlatillos.map((platillo) => (
          <div key={platillo.id} className="col-12 col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{platillo.nombre}</h5>
                <p className="card-text">Precio: ${platillo.precio}</p>
                <button
                  onClick={() => agregarAlCarrito(platillo)}
                  className="btn btn-success"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="mt-4">Carrito</h3>
      {carrito.length === 0 ? (
        <p>No has agregado productos al carrito.</p>
      ) : (
        <ul>
          {carrito.map((platillo) => (
            <li key={platillo.id} className="d-flex justify-content-between">
              <span>
                {platillo.nombre} - ${platillo.precio} x{' '}
                <input
                  type="number"
                  value={platillo.cantidad}
                  onChange={(e) =>
                    actualizarCantidad(platillo.id, parseInt(e.target.value))
                  }
                  min="1"
                  className="form-control w-25 d-inline"
                />
              </span>
              <span>
                ${platillo.precio * platillo.cantidad}{' '}
                <button
                  onClick={() => eliminarDelCarrito(platillo.id)}
                  className="btn btn-danger btn-sm ms-2"
                >
                  Eliminar
                </button>
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* Botón para ir al carrito (redirección) */}
      <Link href="/carrito">
        <button className="btn btn-primary mt-3">Ver Carrito</button>
      </Link>

      {/* Botón para confirmar el pedido */}
      <button
        onClick={confirmarPedido}
        className="btn btn-warning mt-4"
        disabled={carrito.length === 0} // Deshabilitar el botón si el carrito está vacío
      >
        Confirmar Pedido
      </button>

      {/* Mostrar mensaje de confirmación si el pedido fue realizado */}
      {pedidoConfirmado && (
        <div className="alert alert-success mt-4">
          <strong>¡Pedido confirmado!</strong> Tu pedido ha sido realizado exitosamente.
        </div>
      )}
    </div>
  );
}
