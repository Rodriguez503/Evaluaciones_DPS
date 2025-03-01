import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Carrito() {
  const router = useRouter();
  // Obtener el carrito desde la query
  const carrito = router.query.carrito ? JSON.parse(router.query.carrito) : [];

  return (
    <div className="container mt-5">
      <h1 className="text-center">Carrito de Pedidos</h1>
      <p>Aquí verás los productos seleccionados.</p>

      {/* Mostrar los productos en el carrito */}
      {carrito.length === 0 ? (
        <p>No has agregado productos al carrito.</p>
      ) : (
        <ul>
          {carrito.map((platillo) => (
            <li key={platillo.id} className="d-flex justify-content-between">
              <span>
                {platillo.nombre} - ${platillo.precio} x {platillo.cantidad}
              </span>
              <span>${platillo.precio * platillo.cantidad}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Botón para volver al menú */}
      <Link href="/">
        <button className="btn btn-secondary me-2">Volver al Menú</button>
      </Link>

      {/* Botón para ir al resumen del pedido */}
      <Link href="/resumen">
        <button className="btn btn-success">Confirmar Pedido</button>
      </Link>
    </div>
  );
}
