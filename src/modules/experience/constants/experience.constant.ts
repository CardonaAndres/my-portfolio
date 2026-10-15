import type { ExperienceItem } from "@/modules/experience/interfaces/experience.interface";

export const EXPERIENCES_DATA: readonly ExperienceItem[] = [
  {
    id: "pedbox",
    company: "PedBox S.A.S",
    role: {
      es: "Ingeniero de Desarrollo de Software",
      en: "Software Development Engineer",
    },
    period: {
      es: "Octubre 2025 – Actual",
      en: "October 2025 – Present",
    },
    location: "Itagüí, Colombia",
    isCurrent: true,
    contractType: {
      es: "Tiempo Completo",
      en: "Full-time",
    },
    summary: {
      es: "Desarrollo de productos empresariales de alta disponibilidad, diseño de arquitecturas escalables y orquestación de infraestructura de despliegue continuo con cero tiempo de inactividad.",
      en: "Development of high-availability enterprise products, scalable architecture design, and continuous deployment orchestration with zero downtime.",
    },
    products: [
      {
        id: "ecommerce-b2c-multitenant",
        isFeatured: true,
        type: "production",
        title: {
          es: "E-commerce B2C Multi-Tenant & Infraestructura Zero-Downtime",
          en: "Multi-Tenant B2C E-commerce & Zero-Downtime Infrastructure",
        },
        role: {
          es: "Líder Técnico & Desarrollo End-to-End",
          en: "Tech Lead & End-to-End Development",
        },
        description: {
          es: "Lideré el desarrollo integral de la plataforma multi-inquilino y diseñé su arquitectura de despliegue continuo con estrategia azul-verde (blue-green) sobre Docker.",
          en: "Led the full end-to-end development of the multi-tenant platform and architected its continuous deployment infrastructure using a blue-green strategy on Docker.",
        },
        metrics: [
          { label: "Disponibilidad", value: "Zero Downtime" },
          { label: "Arquitectura", value: "Multi-Tenant" },
          { label: "Procesamiento", value: "Colas Asíncronas" },
        ],
        achievements: {
          es: [
            "Diseño e implementación de despliegue continuo Blue-Green sobre Docker, garantizando cero downtime en producción.",
            "Incorporación de Redis para caché de alto rendimiento y gestión de colas de procesamiento asíncrono en ambos extremos de la aplicación.",
            "Garantía de aislamiento de datos y parametrización independiente por inquilino.",
          ],
          en: [
            "Designed and implemented Blue-Green continuous deployment on Docker, ensuring zero downtime in production releases.",
            "Integrated Redis for high-throughput caching and asynchronous task queue management across frontend and backend.",
            "Guaranteed data isolation and independent configuration per tenant.",
          ],
        },
        technologies: [
          "NestJS",
          "React",
          "Docker",
          "Redis",
          "Nginx",
          "GitHub Actions",
          "PostgreSQL",
          "TypeScript",
        ],
      },
      {
        id: "sistema-liquidacion-acuerdos",
        isFeatured: true,
        type: "production",
        title: {
          es: "Sistema de Liquidación de Acuerdos Comerciales",
          en: "Commercial Agreements Settlement System",
        },
        role: {
          es: "Líder de Desarrollo End-to-End",
          en: "End-to-End Lead Developer",
        },
        description: {
          es: "Plataforma centralizada que automatiza acuerdos comerciales complejos, portafolios y liquidaciones masivas periódicas.",
          en: "Centralized platform automating complex commercial agreements, portfolios, and periodic bulk settlements.",
        },
        metrics: [
          { label: "Optimización", value: "Carga Masiva" },
          { label: "Automatización", value: "Schedulers / Cron" },
          { label: "Despliegue", value: "CI/CD Automatizado" },
        ],
        achievements: {
          es: [
            "Reducción sustancial de procesos manuales mediante procesamiento eficiente de carga masiva de archivos y validación de reglas de negocio.",
            "Implementación de tareas programadas (cron jobs) para liquidaciones automáticas y dashboard analítico de seguimiento.",
            "Pipeline de integración y despliegue continuo automatizado en producción.",
          ],
          en: [
            "Drastically reduced manual workflows via high-efficiency bulk data loading and business rule validations.",
            "Implemented scheduled cron jobs for autonomous settlement execution and an analytical tracking dashboard.",
            "Configured an automated CI/CD pipeline directly into production environments.",
          ],
        },
        technologies: [
          "React",
          "NestJS",
          "TypeScript",
          "PostgreSQL",
          "Docker",
          "GitHub Actions",
        ],
      },
      {
        id: "erp-pedbox-one",
        type: "production",
        title: {
          es: "ERP PedBox ONE",
          en: "ERP PedBox ONE",
        },
        role: {
          es: "Desarrollador Full Stack",
          en: "Full Stack Developer",
        },
        description: {
          es: "Evolución y desarrollo de módulos troncales de la suite ERP corporativa bajo el estándar estricto JSON:API.",
          en: "Development and evolution of core modules within the enterprise ERP suite compliant with the JSON:API standard.",
        },
        metrics: [
          { label: "Estándar API", value: "JSON:API" },
          { label: "Sincronización", value: "State Sync Engine" },
        ],
        achievements: {
          es: [
            "Desarrollo full stack de interfaces modulares con React + MUI y microservicios backend con NestJS.",
            "Consumo y estandarización bajo especificación JSON:API, resolviendo cuellos de botella e incidencias críticas de sincronización cliente-servidor.",
          ],
          en: [
            "Engineered modular frontend interfaces with React + MUI and backend microservices with NestJS.",
            "Integrated and standardized data transfer under JSON:API specs, resolving critical client-server synchronization bottlenecks.",
          ],
        },
        technologies: [
          "React",
          "MUI",
          "NestJS",
          "TypeScript",
          "JSON:API",
          "PostgreSQL",
        ],
      },
      {
        id: "mantenimiento-legacy-sistemas",
        type: "internal",
        title: {
          es: "Estabilización y Mantenimiento de Sistemas Legacy",
          en: "Legacy Systems Stabilization & Maintenance",
        },
        role: {
          es: "Ingeniero de Mantenimiento & Backend",
          en: "Backend Maintenance Engineer",
        },
        description: {
          es: "Soporte evolutivo continuo y resolución de fallos críticos en arquitecturas monolíticas de alto volumen.",
          en: "Continuous evolutionary support and critical bug remediation across high-volume monolithic architectures.",
        },
        metrics: [
          { label: "Estabilidad", value: "99.9% Uptime" },
          { label: "Respuesta", value: "Hotfixes Críticos" },
        ],
        achievements: {
          es: [
            "Identificación y corrección de bugs críticos en producción sobre bases de código Node.js/Express.js sin interrumpir la operación continua.",
            "Optimización de consultas a bases de datos y refactorización orientada a la mantenibilidad del código.",
          ],
          en: [
            "Diagnosed and resolved critical production bugs across legacy Node.js/Express.js codebases without impacting operational continuity.",
            "Optimized heavy database queries and performed targeted refactoring for long-term maintainability.",
          ],
        },
        technologies: [
          "Node.js",
          "Express.js",
          "JavaScript",
          "SQL",
          "Linux",
        ],
      },
    ],
  },
  {
    id: "new-stetic",
    company: "New Stetic S.A",
    role: {
      es: "Desarrollador de Software",
      en: "Software Developer",
    },
    period: {
      es: "Abril 2025 – Octubre 2025",
      en: "April 2025 – October 2025",
    },
    location: "Guarne, Colombia",
    contractType: {
      es: "Jornada Completa",
      en: "Full-time",
    },
    summary: {
      es: "Liderazgo en la modernización de sistemas corporativos industriales mediante arquitecturas de microservicios e ingeniería de software orientada a la optimización operativa medible.",
      en: "Led enterprise software modernization for industrial operations using microservices architectures and efficiency-driven engineering.",
    },
    products: [
      {
        id: "ordenes-compra-nacionales",
        isFeatured: true,
        type: "production",
        title: {
          es: "Plataforma Centralizada de Órdenes de Compra Nacionales",
          en: "National Purchase Orders Centralized Platform",
        },
        role: {
          es: "Diseño & Desarrollo de Solución",
          en: "Solution Design & Development",
        },
        description: {
          es: "Diseño integral de la plataforma de aprovisionamiento corporativo para la emisión, aprobación y control de compras.",
          en: "End-to-end design of the corporate procurement platform for issuing, approving, and auditing national purchases.",
        },
        metrics: [
          { label: "Tiempo de Gestión", value: "-45%" },
          { label: "Tiempo Operativo", value: "-60%" },
          { label: "Relación Proveedor", value: "Trazabilidad 100%" },
        ],
        achievements: {
          es: [
            "Reducción directa del 45% en tiempos de gestión y del 60% en tiempos operativos de todo el flujo de compras corporativas.",
            "Canal unificado de comunicación y seguimiento en tiempo real con proveedores nacionales.",
            "Mecanismos de auditoría y flujos de aprobación jerárquica con trazabilidad total.",
          ],
          en: [
            "Achieved a 45% reduction in management turnaround and 60% cut in operational cycle times across procurement.",
            "Unified real-time communication and tracking channel with national suppliers.",
            "Built hierarchical approval flows and audit logs ensuring 100% operational transparency.",
          ],
        },
        technologies: [
          "Node.js",
          "React",
          "TypeScript",
          "PostgreSQL",
          "Docker",
          "Tailwind CSS",
        ],
      },
      {
        id: "sst-microservicios",
        isFeatured: true,
        type: "internal",
        title: {
          es: "Sistema de Seguridad y Salud en el Trabajo (SST)",
          en: "Occupational Health & Safety (SST) System",
        },
        role: {
          es: "Líder Técnico de Microservicios",
          en: "Microservices Tech Lead",
        },
        description: {
          es: "Arquitectura desacoplada basada en microservicios para la gestión normativa y prevención de riesgos laborales.",
          en: "Decoupled microservices architecture for regulatory compliance and workplace risk management.",
        },
        metrics: [
          { label: "Arquitectura", value: "Microservicios" },
          { label: "Escalabilidad", value: "Servicios Desacoplados" },
        ],
        achievements: {
          es: [
            "Lideré el diseño y desarrollo de la arquitectura basada en microservicios, asegurando alta cohesión y bajo acoplamiento.",
            "Automatización del registro de incidentes, matrices de riesgo y planes de prevención para cumplimiento regulatorio estricto.",
          ],
          en: [
            "Led the architecture and development using microservices, guaranteeing high cohesion and minimal coupling.",
            "Automated incident reporting, risk matrices, and action plans to meet stringent statutory safety requirements.",
          ],
        },
        technologies: [
          "Microservicios",
          "NestJS",
          "PostgreSQL",
          "Docker",
          "React",
          "TypeScript",
        ],
      },
    ],
  },
  {
    id: "tuvision-micodigo",
    company: "TuVisión, MiCódigo",
    role: {
      es: "Desarrollador de Software Full Stack",
      en: "Full Stack Software Developer",
    },
    period: {
      es: "2024 – 2025",
      en: "2024 – 2025",
    },
    location: "Medellín, Colombia",
    contractType: {
      es: "Desarrollo de Soluciones & Consultoría",
      en: "Solutions Development & Consulting",
    },
    summary: {
      es: "Construcción de soluciones digitales end-to-end para diversos clientes: asistentes conversacionales con Inteligencia Artificial, sistemas de facturación fiscal electrónica y CRMs de alta conversión.",
      en: "Built end-to-end digital products for diverse clients: AI-driven conversational bots, compliant e-invoicing fiscal systems, and high-conversion CRMs.",
    },
    products: [
      {
        id: "tintasya-bot-ia-crm",
        isFeatured: true,
        type: "client",
        title: {
          es: "CRM con Meta API & Bot de WhatsApp con IA (TintasYa)",
          en: "Meta API CRM & WhatsApp AI Bot (TintasYa)",
        },
        role: {
          es: "Ingeniero Full Stack & Automatización IA",
          en: "Full Stack & AI Automation Engineer",
        },
        description: {
          es: "Integración de Inteligencia Artificial y Meta Cloud API para la toma automatizada de pedidos y sincronización de leads comerciales.",
          en: "Integration of Artificial Intelligence with Meta Cloud API for autonomous order placement and instant lead synchronization.",
        },
        metrics: [
          { label: "Canal", value: "WhatsApp Cloud API" },
          { label: "Inteligencia", value: "Procesamiento IA" },
          { label: "Toma de Pedidos", value: "100% Automatizada" },
        ],
        achievements: {
          es: [
            "Desarrollo de bot conversacional inteligente sobre WhatsApp capaz de interpretar solicitudes de clientes y registrar pedidos comerciales automáticamente.",
            "Integración bidireccional con CRM centralizado para el equipo de ventas, eliminando tareas operativas repetitivas.",
          ],
          en: [
            "Engineered an intelligent WhatsApp conversational bot capable of parsing customer inquiries and placing verified orders automatically.",
            "Implemented two-way real-time sync with a centralized CRM for sales reps, eradicating manual data entry.",
          ],
        },
        technologies: [
          "NestJS",
          "Node.js",
          "WhatsApp Cloud API",
          "IA / LLM",
          "React",
          "PostgreSQL",
          "Docker",
        ],
      },
      {
        id: "pos-facturacion-dian",
        isFeatured: true,
        type: "client",
        title: {
          es: "Sistema POS con Facturación Electrónica DIAN (UBL 2.1)",
          en: "POS System with DIAN Electronic Invoicing (UBL 2.1)",
        },
        role: {
          es: "Desarrollo Backend & Integración Fiscal",
          en: "Backend & Fiscal Integration Developer",
        },
        description: {
          es: "Punto de venta transaccional con emisión de documentos tributarios electrónicos validados ante la autoridad fiscal colombiana (DIAN).",
          en: "Transactional Point of Sale platform generating compliant electronic fiscal documents validated by Colombia's tax authority (DIAN).",
        },
        metrics: [
          { label: "Estándar Fiscal", value: "DIAN UBL 2.1" },
          { label: "Seguridad", value: "Firma Digital XML" },
          { label: "Validación", value: "Tiempo Real" },
        ],
        achievements: {
          es: [
            "Implementación técnica de la normativa colombiana DIAN bajo el estándar UBL 2.1 para facturación electrónica y notas de crédito/débito.",
            "Generación automatizada de archivos XML estructurados, firma digital y consumo de servicios SOAP/REST de la DIAN con validación previa.",
          ],
          en: [
            "Engineered full technical compliance with Colombia's DIAN standard under UBL 2.1 for e-invoicing and credit/debit notes.",
            "Automated structured XML generation, cryptographic digital signatures, and DIAN SOAP/REST service integration with pre-validation.",
          ],
        },
        technologies: [
          "NestJS",
          "Node.js",
          "UBL 2.1 / XML",
          "PostgreSQL",
          "React",
          "TypeScript",
        ],
      },
      {
        id: "crms-a-medida",
        type: "client",
        title: {
          es: "CRMs a Medida: Ventas, Inventario & Email Marketing",
          en: "Custom CRMs: Sales, Multi-Warehouse Inventory & Email Marketing",
        },
        role: {
          es: "Desarrollador Full Stack End-to-End",
          en: "Full Stack End-to-End Developer",
        },
        description: {
          es: "Plataformas operativas integrales desarrolladas a medida para negocios con necesidades comerciales multicanal.",
          en: "Custom end-to-end operating suites built for businesses with omni-channel commercial requirements.",
        },
        metrics: [
          { label: "Módulos", value: "Ventas & Stock" },
          { label: "Marketing", value: "Email Automatizado" },
        ],
        achievements: {
          es: [
            "Desarrollo de módulos de control de inventario en tiempo real, alertas de stock mínimo y trazabilidad de pedidos.",
            "Integración de automatización de campañas de email marketing e interfaces de reportería analítica interactiva.",
          ],
          en: [
            "Built real-time inventory management with low-stock alerts, order tracking, and warehouse dispatching.",
            "Integrated automated email marketing campaigns and interactive analytics reporting dashboards.",
          ],
        },
        technologies: [
          "React",
          "Node.js",
          "NestJS",
          "MySQL",
          "TypeScript",
          "Tailwind CSS",
        ],
      },
    ],
  },
] as const;
