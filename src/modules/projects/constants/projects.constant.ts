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
    id: "monitoring-system-observability",
    category: "cloud",
    isFeatured: true,
    year: "2024 – 2025",
    status: {
      es: "En Producción",
      en: "In Production",
    },
    title: {
      es: "Stack de Observabilidad & Telemetría Distribuida",
      en: "Distributed Observability & Telemetry Stack",
    },
    tagline: {
      es: "Infraestructura centralizada de métricas, logs, trazas y alertas multi-tenant con Grafana, Prometheus, Loki y OTel",
      en: "Centralized multi-tenant metrics, logs, traces, and alerting infrastructure with Grafana, Prometheus, Loki & OTel",
    },
    myRole: {
      es: "Diseño, Orquestación DevOps & Observabilidad",
      en: "Design, DevOps Orchestration & Observability",
    },
    challenge: {
      es: "Unificar la supervisión de múltiples aplicaciones y proyectos empresariales que operaban de forma dispersa sin observabilidad centralizada. El objetivo era evitar silos operativos, detectar cuellos de botella antes de que afectaran a los usuarios y eliminar el monitoreo manual mediante una solución contenerizada, escalable y reutilizable sin generar sobrecarga en los servidores.",
      en: "Unifying the supervision of multiple enterprise applications and projects operating in isolation without centralized observability. The goal was to eliminate operational silos, detect bottlenecks proactively before impacting end-users, and eradicate manual server checks through a containerized, scalable, and reusable stack with minimal resource overhead.",
    },
    solution: {
      es: "Diseñé y desplegué un stack completo de observabilidad multi-servicio sobre Docker Compose. Orquesté la captura de métricas temporales (Prometheus + Node Exporter + cAdvisor) con descubrimiento dinámico de targets por archivos (file_sd), agregación centralizada de logs de contenedores (Loki + Promtail), trazas distribuidas con OpenTelemetry Collector y Tempo, y enrutamiento inteligente de alertas automáticas hacia Discord y correo mediante Alertmanager. Adicionalmente, desarrollé kits reutilizables de integración para microservicios NestJS y APIs en Express.",
      en: "Architected and deployed an end-to-end multi-service observability stack on Docker Compose. Orchestrated time-series metrics collection (Prometheus + Node Exporter + cAdvisor) with dynamic file-based service discovery (file_sd), centralized container log aggregation (Loki + Promtail), distributed tracing with OpenTelemetry Collector and Tempo, and automated smart alert routing to Discord and email via Alertmanager. Additionally engineered plug-and-play integration SDKs for NestJS and Express applications.",
    },
    description: {
      es: "Plataforma integral de observabilidad y telemetría empresarial de despliegue rápido. Centraliza en paneles interactivos de Grafana el estado de salud de la infraestructura host, el consumo de contenedores Docker, los logs estructurados y el tracing distribuido de múltiples proyectos conectados a una red de monitoreo compartida, con notificación de incidentes en tiempo real.",
      en: "Turnkey enterprise observability and telemetry platform. Centralizes host infrastructure health, Docker container resource consumption, structured logs, and distributed request tracing across multiple connected projects into Grafana dashboards, with real-time proactive incident alerting.",
    },
    architecture: {
      es: "Orquestación contenerizada en Docker Compose: Grafana (UI), Prometheus (TSDB + File Service Discovery), Alertmanager (Webhooks Discord/SMTP), Loki + Promtail (Logs), Tempo + OTel Collector (Tracing OTLP), Node Exporter (Host) y cAdvisor (Contenedores), vinculados en red puente dedicada.",
      en: "Containerized orchestration via Docker Compose: Grafana (UI), Prometheus (TSDB + File Service Discovery), Alertmanager (Discord/SMTP Webhooks), Loki + Promtail (Logs), Tempo + OTel Collector (OTLP Tracing), Node Exporter (Host), and cAdvisor (Containers), linked via a dedicated bridge network.",
    },
    media: {
      type: "image",
      url: "/imgs/stack-img.png", // Imagen preview principal de la card (o pega tu URL de S3)
      alt: "Stack de Observabilidad y Telemetría Distribuida",
      aspectRatio: "16/9",
    },
    // Galería multimedia para el Modal: puedes añadir todas las fotos y videos desde tu S3 aquí
    gallery: [
      /*
      {
        type: "video",
        url: "https://tu-bucket.s3.amazonaws.com/videos/monitoring-demo.mp4",
        poster: "https://tu-bucket.s3.amazonaws.com/posters/monitoring-poster.png",
        alt: "Demostración de Telemetría y Dashboards en Vivo",
      },
      {
        type: "image",
        url: "https://tu-bucket.s3.amazonaws.com/imgs/grafana-dashboard.png",
        alt: "Dashboards Interactivos en Grafana",
      },
      {
        type: "image",
        url: "https://tu-bucket.s3.amazonaws.com/imgs/loki-logs.png",
        alt: "Exploración de Logs en Loki",
      },
      */
    ],
    technologies: [
      "Docker",
      "Prometheus",
      "Grafana",
      "Linux",
      "Node.js",
    ],
    highlights: {
      es: [
        "Stack integral de observabilidad (Métricas, Logs, Trazas y Alertas) desplegable con Docker Compose.",
        "Descubrimiento dinámico de nuevos servicios sin reinicio mediante configuración file_sd en Prometheus.",
        "Agregación automática de logs de todos los contenedores Docker a través del socket con Promtail hacia Loki.",
        "Tracing distribuido extremo a extremo con OpenTelemetry Collector y Grafana Tempo.",
        "Alertas automatizadas y canalizadas hacia canales de Discord y correo electrónico mediante Alertmanager.",
        "Kits de integración SDK modulares desarrollados para microservicios NestJS y APIs en Express.",
      ],
      en: [
        "Complete observability stack (Metrics, Logs, Traces & Alerts) deployable via Docker Compose.",
        "Dynamic zero-restart service discovery for newly added application targets using Prometheus file_sd.",
        "Automated Docker socket log aggregation across all active containers with Promtail shipping to Loki.",
        "End-to-end distributed tracing pipelines with OpenTelemetry Collector and Grafana Tempo.",
        "Automated alerting engine with webhook delivery to Discord channels and email via Alertmanager.",
        "Modular plug-and-play integration SDK kits engineered for NestJS microservices and Express APIs.",
      ],
    },
    metrics: [
      { label: "Servicios", value: "9 Contenedores" },
      { label: "Alertas", value: "Email" },
      { label: "Tracing", value: "OTel + Tempo" },
    ],
    links: {
      github: "https://github.com/CardonaAndres/MonitoringSystem",
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
    id: "igb-calidosos-loyalty",
    category: "fullstack",
    isFeatured: false,
    year: "2023 – 2024",
    status: {
      es: "En Producción",
      en: "In Production",
    },
    title: {
      es: "Portal de Fidelización & Recompensas IGB (Calidosos)",
      en: "IGB Calidosos Loyalty & Rewards Platform",
    },
    tagline: {
      es: "Estabilización y soporte operativo de sistema transaccional legacy sobre Node.js 9 y servidor Ubuntu antiguo",
      en: "Operational stabilization and maintenance for legacy transactional system on Node.js 9 & legacy Ubuntu",
    },
    myRole: {
      es: "Ingeniero de Soporte & Mantenimiento de Sistemas Legacy",
      en: "Legacy Systems Support & Maintenance Engineer",
    },
    challenge: {
      es: "Garantizar la disponibilidad 24/7 de un portal corporativo de fidelización y redención de puntos montado sobre una arquitectura legacy de Node.js 9 y un servidor físico Ubuntu con sistema operativo antiguo. El reto principal fue atender incidencias críticas, fallos de sesión y bloqueos en producción sin opción de reescribir la plataforma, operando bajo dependencias deprecadas y restricciones severas de compatibilidad.",
      en: "Ensuring 24/7 availability for an active corporate loyalty & points redemption portal built on legacy Node.js 9 and hosted on an aged Ubuntu server. The primary challenge was diagnosing critical production incidents, session drops, and bottlenecks without full rewrites, maneuvering through deprecated packages and rigid infrastructure constraints.",
    },
    solution: {
      es: "Lideré el soporte y mantenimiento correctivo continuo, diagnosticando y solventando fallos críticos en producción sin interrumpir el servicio comercial. Optimicé consultas directas a MySQL para acelerar la carga de catálogos y balances de puntos, estabilicé el manejo de sesiones en Express y administré la persistencia y supervisión de procesos directamente sobre el servidor Ubuntu.",
      en: "Delivered continuous corrective maintenance, isolating and resolving critical production bugs without interrupting commercial operations. Optimized raw MySQL queries to speed up catalog and balance lookups, stabilized Express session lifecycles, and managed process supervision directly on the legacy Ubuntu server.",
    },
    description: {
      es: "Mantenimiento operativo y soporte continuo para la plataforma de fidelización 'Calidosos' de IGB (programa de incentivos y catálogo de redención para distribuidores y vendedores de repuestos de motocicletas). Operación técnica sobre una base de código monolítica en Node.js 9, vistas EJS y base de datos MySQL en servidor Linux Ubuntu heredado.",
      en: "Operational maintenance and ongoing support for IGB's 'Calidosos' loyalty platform (rewards and points redemption program for motorcycle parts distributors and sales reps). Technical maintenance over a legacy monolithic codebase built on Node.js 9, EJS views, and MySQL on an older Ubuntu Linux server.",
    },
    architecture: {
      es: "Monolito MVC clásico: Runtime Node.js 9, servidor Express.js con motor de plantillas EJS, gestión de sesiones con express-session, base de datos relacional MySQL y orquestación de procesos en servidor Ubuntu Linux.",
      en: "Classic MVC monolith: Node.js 9 runtime, Express.js server with EJS template engine, session management via express-session, relational MySQL database, and process management on legacy Ubuntu Linux server.",
    },
    media: {
      type: "image",
      url: "/imgs/me-hero.png", // Imagen preview principal de la card (o pega tu URL de S3)
      alt: "Portal de Fidelización IGB Calidosos",
      aspectRatio: "16/9",
    },
    gallery: [
      /*
      {
        type: "image",
        url: "https://tu-bucket.s3.amazonaws.com/imgs/calidosos-portal.png",
        alt: "Portal de Clientes Calidosos",
      },
      */
    ],
    technologies: [
      "Node.js",
      "Express",
      "MySQL",
      "JavaScript",
      "Linux",
    ],
    highlights: {
      es: [
        "Soporte técnico continuo y resolución de fallos críticos en producción bajo entorno legacy Node.js 9.",
        "Depuración y corrección de incidencias en flujos de redención de puntos, catálogo y sesiones de usuario.",
        "Optimización de consultas SQL y estabilización de conexiones contra base de datos MySQL.",
        "Mantenimiento y supervisión de procesos en servidor Ubuntu Linux legacy garantizando cero caídas del portal.",
      ],
      en: [
        "Continuous technical support and critical bug resolution in production under legacy Node.js 9 environment.",
        "Debugging and troubleshooting points redemption workflows, catalog queries, and user session drops.",
        "SQL query optimization and connection pool stabilization against MySQL database.",
        "Process supervision and maintenance on legacy Ubuntu Linux server guaranteeing zero downtime.",
      ],
    },
    metrics: [
      { label: "Runtime", value: "Node.js 9 Legacy" },
      { label: "Servidor", value: "Ubuntu Linux" },
      { label: "Disponibilidad", value: "99.9% Uptime" },
    ],
    links: {
      // Repositorio y accesos privados corporativos
    },
  },
];
