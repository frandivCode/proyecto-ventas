// Funcionalidades del Integrante 1 - Gestión de Habitaciones

function altaHabitacion() {
    console.log("[ISSUE 1] Ejecutando: Alta de nueva habitación...");
    console.log("-> Resultado: Habitación registrada en el sistema.");
}

function cambiarDisponibilidad() {
    console.log("[ISSUE 2] Ejecutando: Cambio de estado de disponibilidad...");
    console.log("-> Resultado: Habitación marcada como Ocupada/Libre.");
}

function reporteOcupacion() {
    console.log("[ISSUE 3] Ejecutando: Generación de reporte de ocupación...");
    console.log("-> Resultado: Mostrando lista de habitaciones ocupadas.");
}

// Funcionamiento
altaHabitacion();
cambiarDisponibilidad();
reporteOcupacion();

console.log("Cargando cabecera")

console.log("cargando impuestos")
// Funcionalidades del Integrante 2 - Gestión de Impuestos

function calcularIVA() {
    console.log("[ISSUE 4] Ejecutando: Cálculo de IVA sobre el total...");
    console.log("-> Resultado: IVA calculado correctamente.");
}

function aplicarRetenciones() {
    console.log("[ISSUE 5] Ejecutando: Aplicando retenciones de ingresos brutos...");
    console.log("-> Resultado: Retenciones aplicadas a la factura.");
}

function generarReporteFiscal() {
    console.log("[ISSUE 6] Ejecutando: Generación de reporte para AFIP...");
    console.log("-> Resultado: Mostrando resumen de impuestos devengados.");
}

// Funcionamiento
calcularIVA();
aplicarRetenciones();
generarReporteFiscal();

console.log("SubTotal")

// Funcionalidades del Integrante 2 - Tarea 5: Subtotal y Detalles

function calcularSubtotal(productos) {
    let subtotal = 0;
    
    console.log("[ISSUE 5] Ejecutando: Calculando subtotal de la factura...");
    
    // Recorremos los productos para sumar los precios
    productos.forEach(item => {
        console.log("-> Detalle: " + item.nombre + " | Cantidad: " + item.cantidad + " | Precio Unit: $" + item.precio);
        subtotal += item.precio * item.cantidad;
    });

    console.log("-> Resultado: Subtotal calculado: $" + subtotal);
    return subtotal;
}

// Funcionamiento (Ejemplo para probar)
const carrito = [
    { nombre: "Habitación Simple", cantidad: 1, precio: 5000 },
    { nombre: "Servicio de Limpieza", cantidad: 1, precio: 1200 },
    { nombre: "Desayuno", cantidad: 2, precio: 800 }
];

calcularSubtotal(carrito);

// Lista de proveedores del hotel
const proveedores = [
    { rubro: "Textiles", empresa: "Mimatex", producto: "Sábanas y Toallas" },
    { rubro: "Amenidades", empresa: "Naturae", producto: "Jabones Biodegradables" },
    { rubro: "Alimentos", empresa: "GastroGlobal", producto: "Café y Panadería" },
    { rubro: "Software", empresa: "CloudStay", producto: "Sistema PMS" },
    { rubro: "Mantenimiento", empresa: "TermoControl", producto: "Aire Acondicionado" }
];

// Función simple para mostrar qué hace cada uno
function mostrarProveedores() {
    console.log("--- LISTA DE PROVEEDORES ACTIVOS ---");
    
    proveedores.forEach(p => {
        console.log(`El rubro de ${p.rubro} lo cubre ${p.empresa}, entregando: ${p.producto}.`);
    });
}

// Ejecutar la función
mostrarProveedores();
