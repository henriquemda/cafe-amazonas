export interface Product {
    id: string;
    name: string;
    tagline: string;
    price: number;
    priceMayor?: number;
    roast: string;
    intensity: number;
    mood: string;
    notes: string[];
    image: string;
    description: string;
    color: string;
    gradient: string;
    isHero: boolean;
}

export const PRODUCTS: Product[] = [
    // ── CAFÉ MONTEVERDE (CLÁSICO) ──
    {
        id: "MV-250",
        name: "Monteverde 250g",
        tagline: "Línea Tradicional",
        price: 20,
        priceMayor: 18,
        roast: "Medio",
        intensity: 5,
        mood: "monteverde",
        notes: ["Mandarina", "Miel", "Floral"],
        image: "/images/default-pack.jpg",
        description: "El café que inició todo. Una mezcla curada de cafés sostenibles con puntaje mayor a 84 puntos.",
        color: "#10B981", // Green
        gradient: "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.15), transparent 70%)",
        isHero: false
    },
    {
        id: "MV-500",
        name: "Monteverde 500g",
        tagline: "Línea Tradicional",
        price: 40,
        priceMayor: 36,
        roast: "Medio",
        intensity: 5,
        mood: "monteverde",
        notes: ["Mandarina", "Miel", "Floral"],
        image: "/images/default-pack.jpg",
        description: "Formato de medio kilo de nuestro perfil brillante y sostenible.",
        color: "#10B981", // Green
        gradient: "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.15), transparent 70%)",
        isHero: false
    },
    {
        id: "MV-1000",
        name: "Monteverde 1kg",
        tagline: "Línea Tradicional",
        price: 80,
        priceMayor: 72,
        roast: "Medio",
        intensity: 5,
        mood: "monteverde",
        notes: ["Mandarina", "Miel", "Floral"],
        image: "/images/default-pack.jpg",
        description: "Máximo rendimiento. 1 kilogramo del perfil puro de Guayabamba.",
        color: "#10B981", // Green
        gradient: "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.15), transparent 70%)",
        isHero: true
    },
    {
        id: "MV-DUO",
        name: "Pack Dúo Monteverde",
        tagline: "2 x 500g",
        price: 85,
        roast: "Medio",
        intensity: 5,
        mood: "monteverde",
        notes: ["Pack", "Ahorro", "Diario"],
        image: "/images/default-pack.jpg",
        description: "Pack dúo para el consumo continuo en casa, conservando la frescura.",
        color: "#059669", 
        gradient: "radial-gradient(circle at 50% 50%, rgba(5, 150, 105, 0.15), transparent 70%)",
        isHero: false
    },
    {
        id: "MV-TRIO",
        name: "Pack Trío Especialidad",
        tagline: "3 x 500g",
        price: 120,
        roast: "Curaduría",
        intensity: 6,
        mood: "monteverde",
        notes: ["Degustación", "Complejo", "Especialidad"],
        image: "/images/default-pack.jpg",
        description: "La triada perfecta para explorar la complejidad del Valle de Guayabamba.",
        color: "#047857",
        gradient: "radial-gradient(circle at 50% 50%, rgba(4, 120, 87, 0.15), transparent 70%)",
        isHero: false
    },
    {
        id: "MV-RESERVA",
        name: "Pack Reserva / Experiencia",
        tagline: "4 x 500g",
        price: 155,
        roast: "Premium",
        intensity: 7,
        mood: "monteverde",
        notes: ["Colección", "Reserva", "Limitado"],
        image: "/images/default-pack.jpg",
        description: "La máxima experiencia Monteverde. Cuatro paquetes de medio kilo de los lotes más exquisitos.",
        color: "#064E3B",
        gradient: "radial-gradient(circle at 50% 50%, rgba(6, 78, 59, 0.15), transparent 70%)",
        isHero: true
    },

    // ── BUENAMOZA (CAFÉ MUJER) ──
    {
        id: "BM-250",
        name: "Buenamoza 250g",
        tagline: "Café Mujer",
        price: 25,
        priceMayor: 20,
        roast: "Medio-Oscuro",
        intensity: 7,
        mood: "buenamoza",
        notes: ["Chocolate Oscuro", "Nuez", "Caramelo"],
        image: "/images/default-pack.jpg",
        description: "Café de origen procesado y cultivado por mujeres cafetaleras.",
        color: "#9333EA", // Purple
        gradient: "radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.15), transparent 70%)",
        isHero: false
    },
    {
        id: "BM-500",
        name: "Buenamoza 500g",
        tagline: "Café Mujer",
        price: 50,
        priceMayor: 40,
        roast: "Medio-Oscuro",
        intensity: 7,
        mood: "buenamoza",
        notes: ["Chocolate Oscuro", "Nuez", "Caramelo"],
        image: "/images/default-pack.jpg",
        description: "Medio kilo de nuestro café homenaje al trabajo agrícola femenino.",
        color: "#9333EA", // Purple
        gradient: "radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.15), transparent 70%)",
        isHero: false
    },
    {
        id: "BM-1000",
        name: "Buenamoza 1kg",
        tagline: "Café Mujer",
        price: 100,
        priceMayor: 80,
        roast: "Medio-Oscuro",
        intensity: 7,
        mood: "buenamoza",
        notes: ["Chocolate Oscuro", "Nuez", "Caramelo"],
        image: "/images/default-pack.jpg",
        description: "Presentación de gran volumen para el café insignia de nuestras productoras.",
        color: "#DB2777", // Pink
        gradient: "radial-gradient(circle at 50% 50%, rgba(219, 39, 119, 0.15), transparent 70%)",
        isHero: true
    },

    // ── TIMBUYACU: LÍNEA CLÁSICA Y EDICIONES ──
    {
        id: "TC-250",
        name: "Timbuyacu Clásico 250g",
        tagline: "Línea Clásica",
        price: 18,
        roast: "Medio",
        intensity: 6,
        mood: "timbuyacu",
        notes: ["Panela", "Naranja", "Cacao"],
        image: "/images/default-pack.jpg",
        description: "El perfil tradicional de la Finca Timbuyacu. Notas frutales y acidez cítrica brillante.",
        color: "#D4AF37", // Gold
        gradient: "radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.15), transparent 70%)",
        isHero: false
    },
    {
        id: "TC-500",
        name: "Timbuyacu Clásico 500g",
        tagline: "Línea Clásica",
        price: 32,
        roast: "Medio",
        intensity: 6,
        mood: "timbuyacu",
        notes: ["Panela", "Naranja", "Cacao"],
        image: "/images/default-pack.jpg",
        description: "El perfil tradicional de la Finca Timbuyacu. Formato medio kilo.",
        color: "#D4AF37", // Gold
        gradient: "radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.15), transparent 70%)",
        isHero: false
    },
    {
        id: "TL-MARAGO",
        name: "Timbuyacu Maragogype",
        tagline: "Lavado — Edición Limitada 250g",
        price: 28,
        roast: "Claro",
        intensity: 7,
        mood: "limitada",
        notes: ["Miel", "Floral", "Frutos Rojos"],
        image: "/images/default-pack.jpg",
        description: "Granos 'Elefante' de tamaño excepcional. Cosecha selectiva de Maragogype.",
        color: "#F87171", // Soft Red
        gradient: "radial-gradient(circle at 50% 50%, rgba(248, 113, 113, 0.15), transparent 70%)",
        isHero: false
    },
    {
        id: "TL-GEISHA",
        name: "Timbuyacu Geisha",
        tagline: "Lavado — Edición Limitada 250g",
        price: 55,
        roast: "Claro",
        intensity: 8,
        mood: "limitada",
        notes: ["Jazmín", "Bergamota", "Té de Papaya"],
        image: "/images/default-pack.jpg",
        description: "El rey de los varietales. Perfil aromático hiper-complejo y floral.",
        color: "#A78BFA", // Violet/Purple
        gradient: "radial-gradient(circle at 50% 50%, rgba(167, 139, 250, 0.15), transparent 70%)",
        isHero: true // Hero Layout
    },
    {
        id: "TF-SET-5",
        name: "Set 5 Timbuyacu Filters",
        tagline: "Timbuyacu Drip Bags",
        price: 18,
        roast: "Medio",
        intensity: 6,
        mood: "filter",
        notes: ["Pack Semanal", "Oficina", "Viaje"],
        image: "/images/default-pack.jpg",
        description: "Caja de 5 unidades. Tu dosis semanal de Amazonas lista para el filtro.",
        color: "#9CA3AF",
        gradient: "radial-gradient(circle at 50% 50%, rgba(156, 163, 175, 0.15), transparent 70%)",
        isHero: false
    },
    {
        id: "TE-COFRE",
        name: "Cofre de la Finca Timbuyacu",
        tagline: "3 Microlotes Exclusivos",
        price: 85,
        roast: "Curaduría",
        intensity: 9,
        mood: "experiencia",
        notes: ["Mirador", "Jergón", "Shapingo"],
        image: "/images/default-pack.jpg",
        description: "Una caja premium de degustación con tres microlotes excepcionales cosechados en parcelas específicas.",
        color: "#EAB308", // Yellow/Gold
        gradient: "radial-gradient(circle at 50% 50%, rgba(234, 179, 8, 0.2), transparent 70%)",
        isHero: true // Hero Layout
    }
];
