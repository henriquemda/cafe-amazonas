export interface Product {
    id: string;
    name: string;
    tagline: string;
    price: number;
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
    // ── TIMBUYACU: LÍNEA CLÁSICA ──
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
        description: "El perfil tradicional de la Finca Timbuyacu. Notas dulces y acidez cítrica brillante.",
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

    // ── TIMBUYACU: EDICIÓN LIMITADA ──
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
        id: "TL-BOURBON",
        name: "Timbuyacu Bourbon",
        tagline: "Lavado — Edición Limitada 250g",
        price: 26,
        roast: "Medio-Claro",
        intensity: 5,
        mood: "limitada",
        notes: ["Caramelo", "Manzana", "Nuez"],
        image: "/images/default-pack.jpg",
        description: "Varietal clásico Bourbon. Taza limpia, dulce y con acidez málica.",
        color: "#FBBF24", // Amber
        gradient: "radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.15), transparent 70%)",
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

    // ── TIMBUYACU: FILTER ──
    {
        id: "TF-15",
        name: "Timbuyacu Filter Unit",
        tagline: "Drip Bag — 15g Unit",
        price: 4,
        roast: "Medio",
        intensity: 6,
        mood: "filter",
        notes: ["Práctico", "Dulce", "Equilibrado"],
        image: "/images/default-pack.jpg",
        description: "Café de especialidad en formato drip-bag para preparar en cualquier lugar.",
        color: "#9CA3AF", // Gray
        gradient: "radial-gradient(circle at 50% 50%, rgba(156, 163, 175, 0.15), transparent 70%)",
        isHero: false
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
        id: "TF-SET-MUG",
        name: "Timbuyacu Filters + Taza",
        tagline: "Timbuyacu Collection",
        price: 35,
        roast: "Medio",
        intensity: 6,
        mood: "filter",
        notes: ["Pack Regalo", "Cerámica", "Premium"],
        image: "/images/default-pack.jpg",
        description: "Incluye filtros Timbuyacu y una taza de cerámica artesanal.",
        color: "#D4AF37",
        gradient: "radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.15), transparent 70%)",
        isHero: false
    },

    // ── TIMBUYACU: EXPERIENCIAS & REGALOS ──
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
        description: "Una caja premium de degustación con tres microlotes excepcionales cosechados en parcelas específicas de Rodríguez de Mendoza.",
        color: "#EAB308", // Yellow/Gold
        gradient: "radial-gradient(circle at 50% 50%, rgba(234, 179, 8, 0.2), transparent 70%)",
        isHero: true // Hero Layout
    },
    {
        id: "TE-AMAZONICO",
        name: "Set Amazónico Timbuyacu + Buenamoza",
        tagline: "Timbuyacu + Buenamoza",
        price: 45,
        roast: "Doble Origen",
        intensity: 7,
        mood: "experiencia",
        notes: ["Colaboración", "Contrastes", "Selva"],
        image: "/images/default-pack.jpg",
        description: "La unión de dos fincas legendarias en un solo viaje sensorial amazonense.",
        color: "#10B981", // Emerald
        gradient: "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.15), transparent 70%)",
        isHero: false
    },
    {
        id: "TE-NAVIDAD",
        name: "Set Navideño Timbuyacu",
        tagline: "Edición Festiva",
        price: 50,
        roast: "Especial",
        intensity: 8,
        mood: "experiencia",
        notes: ["Especias", "Cacao", "Cálido"],
        image: "/images/default-pack.jpg",
        description: "Un perfil de tueste diseñado para acompañar los dulces de temporada.",
        color: "#EF4444", // Red
        gradient: "radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.15), transparent 70%)",
        isHero: false
    },
    {
        id: "TE-FILTERS-MUG-SPL",
        name: "Set Filters + Taza Clásica",
        tagline: "Edición Especial",
        price: 38,
        roast: "Medio",
        intensity: 6,
        mood: "experiencia",
        notes: ["Edición Limitada", "Cerámica", "Regalo"],
        image: "/images/default-pack.jpg",
        description: "Caja de regalo premium con filtros y la taza oficial de Finca Timbuyacu.",
        color: "#D4AF37",
        gradient: "radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.15), transparent 70%)",
        isHero: false
    },

    // ── BUENAMOZA (CAFÉ MUJER) ──
    {
        id: "BM-CLASICO",
        name: "Buenamoza Clásico",
        tagline: "Línea Principal — 250g",
        price: 20,
        roast: "Medio-Oscuro",
        intensity: 7,
        mood: "buenamoza",
        notes: ["Chocolate Oscuro", "Nuez", "Caramelo"],
        image: "/images/default-pack.jpg",
        description: "Producido íntegramente por mujeres cafetaleras. Un perfil más intenso y achocolatado.",
        color: "#9333EA", // Purple
        gradient: "radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.15), transparent 70%)",
        isHero: true
    },
    {
        id: "BM-RESERVA",
        name: "Buenamoza Reserva",
        tagline: "Selección Especial — 250g",
        price: 28,
        roast: "Medio",
        intensity: 6,
        mood: "buenamoza",
        notes: ["Cacao", "Frutos Rojos", "Vino"],
        image: "/images/default-pack.jpg",
        description: "Los mejores lotes de la asociación Buenamoza. Complejo y vinoso.",
        color: "#DB2777", // Pink
        gradient: "radial-gradient(circle at 50% 50%, rgba(219, 39, 119, 0.15), transparent 70%)",
        isHero: false
    },
    {
        id: "BM-MERCH",
        name: "Tote Bag Buenamoza",
        tagline: "Apoya a la Mujer Cafetalera",
        price: 15,
        roast: "Accesorios",
        intensity: 0,
        mood: "buenamoza",
        notes: ["Algodón Orgánico", "Artesanal", "Comunidad"],
        image: "/images/default-pack.jpg",
        description: "Bolsa de tela 100% algodón orgánico tejida y bordada por las mujeres de la asociación.",
        color: "#EC4899", // Fuchsia
        gradient: "radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.15), transparent 70%)",
        isHero: false
    },

    // ── CAFÉ MONTEVERDE (CLÁSICO) ──
    {
        id: "MV-ESTANDAR-250",
        name: "Monteverde Clásico 250g",
        tagline: "Línea Tradicional",
        price: 16,
        roast: "Medio",
        intensity: 5,
        mood: "monteverde",
        notes: ["Mandarina", "Miel", "Floral"],
        image: "/images/default-pack.jpg",
        description: "El café que inició todo. Un perfil de Rodriguez de Mendoza extremadamente limpio y brillante.",
        color: "#10B981", // Green
        gradient: "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.15), transparent 70%)",
        isHero: true
    },
    {
        id: "MV-ESTANDAR-500",
        name: "Monteverde Clásico 500g",
        tagline: "Línea Tradicional",
        price: 29,
        roast: "Medio",
        intensity: 5,
        mood: "monteverde",
        notes: ["Mandarina", "Miel", "Floral"],
        image: "/images/default-pack.jpg",
        description: "Formato de medio kilo de nuestro perfil tradicional.",
        color: "#10B981", // Green
        gradient: "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.15), transparent 70%)",
        isHero: false
    },
    {
        id: "MV-TAZA",
        name: "Taza Monteverde",
        tagline: "Cerámica Gres",
        price: 22,
        roast: "Accesorios",
        intensity: 0,
        mood: "monteverde",
        notes: ["Artesanal", "Térmica", "Verde"],
        image: "/images/default-pack.jpg",
        description: "Diseñada para retener la temperatura perfecta. Esmalte verde selva.",
        color: "#059669", // Darker Green
        gradient: "radial-gradient(circle at 50% 50%, rgba(5, 150, 105, 0.15), transparent 70%)",
        isHero: false
    }
];
