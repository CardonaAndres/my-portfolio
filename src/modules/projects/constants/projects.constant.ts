import type { ProjectCategory, ProjectItem } from "@/modules/projects/interfaces/project.interface";

export const PROJECT_CATEGORIES: {
  id: ProjectCategory;
  label: { es: string; en: string };
}[] = [
  { id: "all", label: { es: "Todos", en: "All" } },
  { id: "fullstack", label: { es: "Full Stack", en: "Full Stack" } },
  { id: "ai", label: { es: "AI & Agentes", en: "AI & Agents" } },
  { id: "backend", label: { es: "Backend & APIs", en: "Backend & APIs" } },
  { id: "cloud", label: { es: "Cloud & DevOps", en: "Cloud & DevOps" } },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "ecommerce-multitenant-platform",
    category: "fullstack",
    isFeatured: true,
    year: "2025",
    status: {
      es: "En Producción",
      en: "In Production",
    },
    title: {
      es: "Plataforma E-commerce B2C Multi-Tenant",
      en: "Multi-Tenant B2C E-commerce Platform",
    },
    tagline: {
      es: "Arquitectura escalable de alto rendimiento con despliegue blue-green y aislamiento de datos por tenant",
      en: "High-throughput scalable architecture with blue-green deployments and per-tenant data isolation",
    },
    description: {
      es: "Diseño y desarrollo end-to-end de una plataforma de comercio electrónico multi-inquilino. Cuenta con catálogo reactivo, pagos integrados, colas asíncronas con Redis y despliegue continuo sin tiempo de inactividad sobre contenedores Docker.",
      en: "End-to-end design and development of a multi-tenant e-commerce platform. Features a reactive catalog, integrated payment gateways, Redis-backed async queues, and zero-downtime continuous deployments on Docker containers.",
    },
    architecture: {
      es: "Microservicios modulares con NestJS, frontend SSR con React/Next.js y orquestación Blue-Green en Nginx y Docker.",
      en: "Modular microservices with NestJS, SSR frontend with React/Next.js, and Blue-Green orchestration on Nginx & Docker.",
    },
    media: {
      type: "image",
      url: "/imgs/me-hero.png", // Usamos una imagen inicial disponible mientras el usuario suministra el arte específico o video
      alt: "Plataforma E-commerce B2C Multi-Tenant",
      aspectRatio: "16/9",
    },
    technologies: [
      "NestJS",
      "React",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Nginx",
      "GitHub Actions",
    ],
    highlights: {
      es: [
        "Despliegues continuos Blue-Green con cero caídas de servicio (Zero Downtime).",
        "Aislamiento riguroso de esquemas y parametrización independiente por inquilino.",
        "Colas de procesamiento asíncrono para notificaciones, reportes y conciliaciones.",
      ],
      en: [
        "Blue-Green continuous deployments guaranteeing zero service downtime in production.",
        "Strict schema isolation and independent tenant configuration.",
        "Asynchronous job queues for notifications, reporting, and reconciliations.",
      ],
    },
    metrics: [
      { label: "Disponibilidad", value: "99.98% Uptime" },
      { label: "Despliegue", value: "Zero Downtime" },
      { label: "Procesamiento", value: "Redis Queues" },
    ],
    links: {
      live: "https://example.com/demo",
      github: "https://github.com/AndresCardona10",
    },
  },
  {
    id: "ai-rag-knowledge-assistant",
    category: "ai",
    isFeatured: true,
    year: "2025",
    status: {
      es: "Caso de Estudio",
      en: "Case Study",
    },
    title: {
      es: "Motor RAG & Agente Autónomo para Documentación",
      en: "RAG Engine & Autonomous Documentation Agent",
    },
    tagline: {
      es: "Búsqueda semántica con embeddings vectoriales, flujos RAG y agentes autónomos para análisis técnico",
      en: "Semantic search with vector embeddings, RAG pipelines, and autonomous agents for technical analysis",
    },
    description: {
      es: "Asistente inteligente con arquitectura RAG avanzada (Retrieval-Augmented Generation) que indexa bases de conocimiento corporativas, genera respuestas contextualizadas con citas de fuentes y ejecuta flujos de automatización mediante agentes.",
      en: "Intelligent assistant featuring an advanced RAG architecture indexing corporate knowledge bases, generating context-rich responses with verifiable citations, and executing autonomous agent automation workflows.",
    },
    architecture: {
      es: "Pipeline de ingestión con LangChain/LlamaIndex, pgvector para base de datos vectorial y modelos LLM con streaming reactivo.",
      en: "Ingestion pipeline with LangChain/LlamaIndex, pgvector for vector store, and LLM streaming integration.",
    },
    media: {
      type: "image",
      url: "/imgs/stack-img.png",
      alt: "Motor RAG & Agente Autónomo",
      aspectRatio: "16/9",
    },
    technologies: [
      "Python",
      "FastAPI",
      "TypeScript",
      "React",
      "PostgreSQL",
      "Docker",
    ],
    highlights: {
      es: [
        "Indexación vectorial optimizada con embeddings semánticos y re-ranking.",
        "Agentes autónomos con llamadas a herramientas (function calling) y validaciones.",
        "Interfaz interactiva con streaming de respuestas en tiempo real.",
      ],
      en: [
        "Optimized vector indexing with semantic embeddings and re-ranking pipelines.",
        "Autonomous agents with tool calling, schema validation, and guardrails.",
        "Interactive UI featuring real-time token streaming.",
      ],
    },
    metrics: [
      { label: "Latencia Búsqueda", value: "< 120ms" },
      { label: "Precisión RAG", value: "96.4%" },
      { label: "Tokens", value: "Streaming Activo" },
    ],
    links: {
      github: "https://github.com/AndresCardona10",
    },
  },
  {
    id: "atmopel-b2c-ecommerce",
    category: "fullstack",
    isFeatured: false,
    year: "2024 – 2025",
    status: {
      es: "En Producción",
      en: "In Production",
    },
    title: {
      es: "Plataforma E-commerce B2C Atmopel",
      en: "Atmopel B2C E-commerce Platform",
    },
    tagline: {
      es: "Soporte evolutivo continuo, modernización brownfield, contenedorización Docker e integración ERP Siesa de misión crítica",
      en: "Continuous evolutionary support, brownfield modernization, Docker containerization, and mission-critical Siesa ERP sync",
    },
    myRole: {
      es: "Soporte Evolutivo, DevOps & Integraciones Core",
      en: "Evolutionary Support, DevOps & Core Integrations",
    },
    challenge: {
      es: "Asumir la titularidad técnica de una tienda virtual B2C en producción continua con deuda técnica acumulada, dependencias desalineadas entre entornos y procesos de sincronización manual propensos a inconsistencias de catálogo, stock y tarifas frente al ERP empresarial central.",
      en: "Taking technical ownership of an active, production-grade B2C e-commerce platform with legacy technical debt, inconsistent environments, and manual synchronization prone to inventory and pricing discrepancies against the central enterprise ERP.",
    },
    solution: {
      es: "Orquesté la contenedorización completa de cliente y servidor mediante Docker y Docker Compose para paridad estricta dev/prod, vinculándola a una red de monitoreo externa. Automaticé la sincronización bidireccional de inventario y precios contra Web Services SOAP del ERP Siesa mediante cron schedulers resilientes, instrumenté telemetría HTTP en tiempo real con Prometheus (prom-client) y estandaricé el flujo de Git bajo convenciones estrictas.",
      en: "Architected complete containerization across client and server via Docker & Docker Compose for strict dev/prod parity connected to an external observability network. Automated bi-directional inventory and pricing synchronization against Siesa ERP SOAP Web Services with resilient cron jobs, instrumented real-time HTTP telemetry using Prometheus (prom-client), and standardized Git development workflows.",
    },
    description: {
      es: "Gestión técnica, mantenimiento evolutivo y desarrollo de nuevas funcionalidades para la plataforma e-commerce de Atmopel (líder en distribución mayorista y minorista de repuestos y accesorios en Colombia). Implementación de infraestructura Dockerizada, optimización de queries MySQL críticas, automatización de integraciones SOAP y monitoreo preventivo de tráfico.",
      en: "Technical management, evolutionary maintenance, and feature development for Atmopel's e-commerce platform (leading distributor of automotive and motorcycle parts in Colombia). Containerized infrastructure deployment, critical MySQL query tuning, automated SOAP integrations, and proactive HTTP traffic monitoring.",
    },
    architecture: {
      es: "Frontend SSR con Express.js + plantillas EJS y gestión de sesiones; Backend REST API en Node.js/Express con MySQL relacional y orquestador de cron jobs; Infraestructura en Docker Compose vinculada a red de monitoreo externa (Prometheus, Promtail/Loki).",
      en: "SSR Frontend with Express.js + EJS templates and session management; REST API Backend in Node.js/Express with relational MySQL and cron schedulers; Docker Compose infrastructure connected to an external monitoring network (Prometheus, Promtail/Loki).",
    },
    media: {
      type: "image",
      url: "/imgs/project-img.png", // Imagen preview principal de la card (o pega tu URL de S3)
      alt: "Plataforma E-commerce B2C Atmopel",
      aspectRatio: "16/9",
    },
    // Galería multimedia para el Modal: puedes añadir todas las fotos y videos desde tu S3 aquí
    gallery: [
      /*
      {
        type: "video",
        url: "https://tu-bucket.s3.amazonaws.com/videos/atmopel-demo.mp4",
        poster: "https://tu-bucket.s3.amazonaws.com/posters/atmopel-poster.png",
        alt: "Demostración en Video del E-commerce Atmopel",
      },
      {
        type: "image",
        url: "https://tu-bucket.s3.amazonaws.com/imgs/atmopel-catalogo.png",
        alt: "Catálogo y Búsqueda de Productos Atmopel",
      },
      */
    ],
    technologies: [
      "Node.js",
      "Express",
      "MySQL",
      "Docker",
      "Git",
      "Linux",
    ],
    highlights: {
      es: [
        "Contenedorización integral con Docker y Docker Compose (dev/prod) garantizando aislamiento y despliegues reproducibles.",
        "Automatización de sincronización de referencias, stock activo y reglas de precios mediante Web Services SOAP de Siesa ERP.",
        "Instrumentación de telemetría HTTP en tiempo real con Prometheus (prom-client) capturando throughput, histogramas de latencia y errores.",
        "Desarrollo de nuevas funcionalidades comerciales: filtrado de productos destacados, validación de pedidos, formularios y plantillas dinámicas.",
        "Reestructuración del flujo de Git con commits convencionales y resolución de cuellos de botella en consultas críticas de MySQL.",
      ],
      en: [
        "Full containerization with Docker & Docker Compose (dev/prod) ensuring environment parity and isolated runtime dependencies.",
        "Automated synchronization of inventory references, live stock, and pricing rules against Siesa ERP SOAP Web Services.",
        "Real-time HTTP telemetry instrumentation via Prometheus (prom-client) capturing throughput, latency histograms, and error rates.",
        "Shipped business-critical features: featured product filters, order validation workflows, forms, and dynamic templates.",
        "Git workflow standardization with conventional commits and elimination of SQL query bottlenecks in MySQL.",
      ],
    },
    metrics: [
      { label: "Infraestructura", value: "Dockerizada" },
      { label: "Integración", value: "SOAP Siesa" },
      { label: "Monitoreo", value: "Prometheus" },
    ],
    links: {
      // live: "https://tienda.atmopel.com", // Descomenta y coloca la URL si está pública
    },
  },
  {
    id: "atmopel-data-sync",
    category: "backend",
    isFeatured: false,
    year: "2024 – 2025",
    status: {
      es: "En Producción",
      en: "In Production",
    },
    title: {
      es: "Motor ETL & Sincronización ERP para Power BI",
      en: "ETL Engine & ERP Data Sync for Power BI",
    },
    tagline: {
      es: "Pipeline de streaming reactivo con Fastify, procesamiento masivo por lotes y carga transaccional en MySQL",
      en: "Reactive streaming pipeline with Fastify, bulk batch processing, and transactional MySQL ingestion",
    },
    myRole: {
      es: "Mantenimiento Evolutivo, Arquitectura de Datos & Backend",
      en: "Evolutionary Maintenance, Data Architecture & Backend",
    },
    challenge: {
      es: "Garantizar la continuidad operativa y escalabilidad de un pipeline de ingesta masiva que alimenta la reportería analítica y tableros de Power BI corporativos. El reto residía en sincronizar más de 25 entidades maestras y transaccionales desde el ERP empresarial central evitando desbordamientos de memoria (Node.js heap) ante respuestas JSON de decenas de megabytes, garantizando atomicidad transaccional y registro de auditoría ante fallos.",
      en: "Ensuring operational continuity and scale for a massive data ingestion pipeline feeding corporate Power BI analytics dashboards. The challenge lay in syncing 25+ master and transactional entities from the central enterprise ERP without Node.js memory exhaustion on heavy JSON payloads, ensuring transactional atomicity and audit logging.",
    },
    solution: {
      es: "Optimizé el pipeline empleando Fastify y streaming reactivo con stream-json para procesar y filtrar datos en vuelo sin sobrecargar la memoria. Diseñé e integré el repositorio genérico de inserción masiva (insertBulkGeneric) que fragmenta grandes volúmenes en chunks de 400 registros con pausas reguladas, transacciones ACID con rollback y registro detallado de auditoría. Amplié el catálogo de entidades e integré gestión continua mediante PM2.",
      en: "Optimized the pipeline using Fastify and reactive streaming via stream-json to parse and filter heavy data on the fly without memory overhead. Designed and integrated a generic bulk insertion repository (insertBulkGeneric) slicing heavy datasets into 400-record chunks with rate-limiting delays, ACID transaction rollbacks, and detailed auditing. Expanded entity coverage and supervised execution with PM2.",
    },
    description: {
      es: "Servicio backend de alto rendimiento para extracción, transformación y carga (ETL) periódica de datos desde el ERP central hacia almacenes de datos MySQL optimizados para Power BI. Soporta más de 25 entidades comerciales (facturación, pedidos de compra, remisiones, traslados, inventarios y maestros de terceros) con supervisión en PM2 y trazabilidad completa de lotes.",
      en: "High-performance backend service for automated periodic ETL extraction, transformation, and loading from the central ERP into an optimized MySQL analytics store for Power BI reporting. Processes over 25 business domains (invoicing, purchase orders, referrals, transfers, inventory, and master catalogs) with PM2 process supervision and full batch traceability.",
    },
    architecture: {
      es: "Microservicio en Fastify + TypeScript, cliente HTTP con Axios/Undici, streaming de payloads con stream-json, repositorio de inserción masiva por lotes (chunkSize: 400), pool de conexiones MySQL con transacciones ACID y gestión de procesos con PM2.",
      en: "Fastify + TypeScript microservice, HTTP transport via Axios/Undici, memory-safe payload streaming with stream-json, chunked bulk-insertion engine (400 records/batch), MySQL connection pool with ACID transactions, and PM2 process management.",
    },
    media: {
      type: "image",
      url: "/imgs/stack-img.png", // Imagen preview principal de la card (o pega tu URL de S3)
      alt: "Motor ETL & Sincronización ERP Atmopel",
      aspectRatio: "16/9",
    },
    // Galería multimedia para el Modal: puedes añadir todas las fotos y videos desde tu S3 aquí
    gallery: [
      /*
      {
        type: "video",
        url: "https://tu-bucket.s3.amazonaws.com/videos/datasync-demo.mp4",
        poster: "https://tu-bucket.s3.amazonaws.com/posters/datasync-poster.png",
        alt: "Demostración de Ejecución y Sincronización de Datos",
      },
      {
        type: "image",
        url: "https://tu-bucket.s3.amazonaws.com/imgs/datasync-powerbi.png",
        alt: "Modelo de Datos y Visualización en Power BI",
      },
      */
    ],
    technologies: [
      "Fastify",
      "Node.js",
      "TypeScript",
      "MySQL",
      "Linux",
    ],
    highlights: {
      es: [
        "Pipeline de streaming reactivo con stream-json que previene cuellos de botella y desbordamientos de memoria en Node.js.",
        "Motor de inserción masiva transaccional por lotes (chunks de 400 registros) con rollback automático y auditoría ante fallos.",
        "Sincronización automatizada de más de 25 entidades maestras y transaccionales (facturas, pedidos, traslados, stock y retenciones).",
        "Optimización de consultas a la base de datos MySQL y reducción drástica de tiempos de ingesta para Power BI.",
        "Operación desatendida y monitoreo en servidor Linux administrado mediante PM2.",
      ],
      en: [
        "Reactive payload streaming via stream-json eliminating memory leaks and Node.js heap crashes on heavy responses.",
        "Transactional chunked bulk-insert engine (400-record batches) with automated rollback and granular error audit logging.",
        "Automated synchronization of 25+ master and transactional entities (invoices, orders, transfers, stock, and withholdings).",
        "MySQL query optimization drastically decreasing ingestion latency for corporate Power BI dashboards.",
        "Unattended execution and process supervision on Linux production servers managed with PM2.",
      ],
    },
    metrics: [
      { label: "Entidades", value: "+25 Modelos" },
      { label: "Ingesta", value: "Chunked Bulk" },
      { label: "Destino", value: "Power BI" },
    ],
    links: {
      // Repositorio y endpoints privados empresariales
    },
  },
  {
    id: "cloud-devops-bluegreen-pipeline",
    category: "cloud",
    isFeatured: false,
    year: "2024",
    status: {
      es: "Infraestructura",
      en: "Infrastructure",
    },
    title: {
      es: "Infraestructura Cloud & CI/CD Blue-Green",
      en: "Cloud Infrastructure & Blue-Green CI/CD",
    },
    tagline: {
      es: "Pipeline de integración y despliegue continuo automatizado con balanceo de carga y rollback instantáneo",
      en: "Automated continuous delivery pipeline with load balancing and instant rollback capabilities",
    },
    description: {
      es: "Infraestructura contenerizada con Docker y Nginx como reverse proxy. Permite alternar tráfico entre instancias activas e inactivas (Blue/Green) para publicar actualizaciones sin interrumpir la operación de los usuarios.",
      en: "Containerized infrastructure with Docker and Nginx reverse proxy. Seamlessly switches traffic between active and inactive slots (Blue/Green) to release software updates without interrupting users.",
    },
    architecture: {
      es: "Contenedores Docker multi-stage, proxy inverso Nginx con health checks y pipelines en GitHub Actions.",
      en: "Multi-stage Docker containers, Nginx reverse proxy with health checks, and GitHub Actions pipelines.",
    },
    media: {
      type: "image",
      url: "/imgs/stack-img.png",
      alt: "Infraestructura Cloud CI/CD",
      aspectRatio: "16/9",
    },
    technologies: [
      "Docker",
      "Nginx",
      "GitHub Actions",
      "Linux",
      "TypeScript",
    ],
    highlights: {
      es: [
        "Despliegues automatizados directos a producción sin desconexión de clientes.",
        "Health checks automáticos con rollback en caso de fallo durante el despliegue.",
        "Imágenes Docker multi-etapa ligeras y optimizadas para seguridad.",
      ],
      en: [
        "Automated direct-to-production releases with zero client connection dropouts.",
        "Automatic health checking with instant rollback on deployment anomalies.",
        "Lightweight multi-stage Docker images hardened for security.",
      ],
    },
    metrics: [
      { label: "Downtime Despliegue", value: "0 segundos" },
      { label: "Tiempo de Build", value: "< 3 min" },
      { label: "Rollback", value: "Instantáneo" },
    ],
    links: {
      github: "https://github.com/AndresCardona10",
    },
  },
  {
    id: "api-gateway-rate-limiter",
    category: "backend",
    isFeatured: false,
    year: "2024",
    status: {
      es: "En Producción",
      en: "In Production",
    },
    title: {
      es: "API Gateway & Rate Limiting Distribuido",
      en: "Distributed API Gateway & Rate Limiter",
    },
    tagline: {
      es: "Gateway inverso de alta concurrencia con control de tasa token-bucket sobre Redis y auth JWT",
      en: "High-concurrency reverse gateway featuring Redis token-bucket rate limiting and JWT auth",
    },
    description: {
      es: "Gateway perimetral para proteger servicios internos contra picos de tráfico y ataques de denegación de servicio. Implementa algoritmo Token Bucket en memoria compartida con Redis, autenticación centralizada y observabilidad de peticiones.",
      en: "Edge gateway safeguarding internal services from traffic surges and abuse. Employs Token Bucket algorithms backed by shared Redis clusters, centralized auth middleware, and comprehensive telemetry.",
    },
    architecture: {
      es: "Node.js, Express, Redis Cluster, Docker y proxy reverso Nginx con balanceo round-robin.",
      en: "Node.js, Express, Redis Cluster, Docker, and Nginx reverse proxy with round-robin balancing.",
    },
    media: {
      type: "image",
      url: "/imgs/stack-img.png",
      alt: "API Gateway & Rate Limiting",
      aspectRatio: "16/9",
    },
    technologies: [
      "Node.js",
      "Express",
      "TypeScript",
      "Redis",
      "Docker",
      "Nginx",
      "Linux",
    ],
    highlights: {
      es: [
        "Capacidad de gestión de más de 12.000 req/s con latencia promedio menor a 8ms.",
        "Algoritmo Token Bucket distribuido con políticas diferenciadas por plan de cliente.",
        "Métricas en tiempo real y logs estructurados para auditoría de tráfico.",
      ],
      en: [
        "Processes +12,000 req/s with median latency under 8ms.",
        "Distributed Token Bucket algorithm with tier-based quota throttling.",
        "Real-time telemetry and structured logging for comprehensive request auditing.",
      ],
    },
    metrics: [
      { label: "Throughput", value: "+12k req/s" },
      { label: "Latencia P99", value: "< 8ms" },
      { label: "Disponibilidad", value: "99.99%" },
    ],
    links: {
      github: "https://github.com/AndresCardona10",
    },
  },
];
