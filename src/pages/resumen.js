import Link from 'next/link';

export default function Resumen() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Resumen del Pedido</h1>
      <p>Revisa tu pedido antes de confirmarlo.</p>

      {/* Botón para volver al carrito */}
      <Link href="/carrito">
        <button className="btn btn-warning me-2">Volver al Carrito</button>
      </Link>

      {/* Botón para confirmar el pedido */}
      <button className="btn btn-success">Confirmar Pedido</button>
    </div>
  );
}
