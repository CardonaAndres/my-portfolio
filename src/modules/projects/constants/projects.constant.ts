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
    id: "stackstore-s3-object-storage",
    category: "cloud",
    isFeatured: true,
    year: "2024 – 2025",
    status: {
      es: "En Producción",
      en: "In Production",
    },
    title: {
      es: "StackStore: Almacenamiento de Objetos S3 en Rust",
      en: "StackStore: Multi-Tenant S3 Object Storage in Rust",
    },
    tagline: {
      es: "Infraestructura de almacenamiento compatible con Amazon S3 centralizada en RustFS, TLS automático con Caddy y aislamiento IAM multi-tenant",
      en: "Centralized Amazon S3-compatible object storage infrastructure powered by RustFS, automated Caddy TLS, and multi-tenant IAM isolation",
    },
    myRole: {
      es: "Arquitectura de Sistemas, Infraestructura & DevOps",
      en: "Systems Architecture, Infrastructure & DevOps",
    },
    challenge: {
      es: "Eliminar la redundancia operativa y el desperdicio de memoria en servidores donde múltiples aplicaciones y contenedores (como el e-commerce B2C) desplegaban sus propias instancias locales de almacenamiento. Este esquema provocaba colisiones de puertos (puerto 9000), gestión fragmentada de volúmenes en disco y riesgos de seguridad por falta de políticas de acceso aisladas.",
      en: "Eliminating operational redundancy and memory waste across servers where multiple applications and containers (such as the B2C e-commerce) spun up isolated, ad-hoc storage instances. This led to network port conflicts (port 9000), fragmented disk volume management, and heightened security risks due to unsegmented access credentials.",
    },
    solution: {
      es: "Diseñé e implementé StackStore: una plataforma centralizada de almacenamiento de objetos a nivel de servidor basada en RustFS (motor de alto rendimiento en Rust con bajo consumo de memoria y concurrencia asíncrona). Implementé una arquitectura multi-inquilino con buckets dedicados y credenciales IAM de mínimos privilegios por proyecto, orquestación en Docker Compose con comprobación de salud activa (HEALTHCHECK en /health), comunicación inter-contenedor de ultra baja latencia por red bridge interna ('stack-store-net') y proxy Caddy con terminación TLS automática (Let's Encrypt / ACME), streaming de subidas sin buffering hasta 5GB y validación estricta de firmas SigV4.",
      en: "Engineered and deployed StackStore: a centralized server-level object storage platform built on RustFS (a high-performance, low-memory, asynchronous Rust storage engine). Architected a multi-tenant layout with isolated buckets and least-privilege project-scoped IAM credentials, Docker Compose orchestration with active HEALTHCHECK on /health, ultra-low-latency inter-container routing via a dedicated bridge network ('stack-store-net'), and Caddy reverse proxy with automated Let's Encrypt TLS, unbuffered upload streaming up to 5GB, and strict AWS SigV4 cryptographic signature compliance.",
    },
    description: {
      es: "Solución de almacenamiento de objetos compatible con AWS S3 diseñada para dar servicio unificado a todos los proyectos y microservicios del servidor. Combina la velocidad y seguridad de memoria de Rust con la facilidad de administración web en el puerto 9001 y compatibilidad transparente con SDKs de AWS S3 (@aws-sdk/client-s3, boto3, minio-go) mediante direccionamiento path-style.",
      en: "Turnkey Amazon S3-compatible object storage solution engineered to serve all applications and microservices running on the server. Leverages Rust's speed and memory safety alongside an intuitive web admin console on port 9001 and transparent integration with standard AWS S3 SDKs (@aws-sdk/client-s3, boto3, minio-go) via path-style routing.",
    },
    architecture: {
      es: "Servicio core RustFS (API S3 :9000, Consola :9001) con imagen Docker personalizada y healthcheck; Proxy Caddy con TLS Let's Encrypt y bypass de buffering; Enlace de red interna 'stack-store-net'; Persistencia en volúmenes Docker (data, logs, certs).",
      en: "Core RustFS service (S3 API :9000, Web Console :9001) with custom Dockerfile healthcheck; Caddy proxy with Let's Encrypt TLS and unbuffered streaming; Dedicated 'stack-store-net' bridge; Persistent Docker volumes (data, logs, certs).",
    },
    media: {
      type: "image",
      url: "/imgs/stack-img.png", // Imagen preview principal de la card (o pega tu URL de S3)
      alt: "StackStore: Almacenamiento de Objetos S3 en Rust",
      aspectRatio: "16/9",
    },
    // Galería multimedia para el Modal: puedes añadir todas las fotos y videos desde tu S3 aquí
    gallery: [
      /*
      {
        type: "video",
        url: "https://tu-bucket.s3.amazonaws.com/videos/stackstore-demo.mp4",
        poster: "https://tu-bucket.s3.amazonaws.com/posters/stackstore-poster.png",
        alt: "Demostración de Consola Web y Subida de Objetos",
      },
      {
        type: "image",
        url: "https://tu-bucket.s3.amazonaws.com/imgs/stackstore-console.png",
        alt: "Consola de Administración de Buckets y Políticas IAM",
      },
      */
    ],
    technologies: [
      "Rust",
      "Docker",
      "Caddy",
      "Linux",
      "Git",
    ],
    highlights: {
      es: [
        "Unificación de almacenamiento a nivel de servidor: un solo engine para todos los proyectos eliminando instancias duplicadas.",
        "Motor RustFS de alto rendimiento en Rust con bajísima latencia y mínima huella de memoria RAM.",
        "Aislamiento multi-tenant estricto con políticas IAM y llaves independientes por proyecto (cero exposición de llaves root).",
        "Compatibilidad nativa con AWS S3 SDK (@aws-sdk/client-s3, boto3) sin necesidad de modificar código aplicativo.",
        "Proxy inverso Caddy con terminación TLS automática, renovación Let's Encrypt y soporte para subidas pesadas sin buffering.",
        "Red bridge Docker dedicada para transferencia interna de alta velocidad y documentación exhaustiva de recetas de proxy.",
      ],
      en: [
        "Server-level storage consolidation: single engine serving all hosted projects, eradicating duplicate instances.",
        "High-performance RustFS engine in Rust delivering microsecond response times with minimal memory footprint.",
        "Strict multi-tenant isolation with granular IAM policies and project-scoped keys (zero root credential exposure).",
        "Native drop-in AWS S3 SDK compatibility (@aws-sdk/client-s3, boto3) requiring zero changes to application code.",
        "Caddy reverse proxy with automated TLS termination, Let's Encrypt renewals, and unbuffered streaming for heavy uploads.",
        "Dedicated internal Docker bridge network for high-speed local data transfer and exhaustive deployment guides.",
      ],
    },
    metrics: [
      { label: "Motor Core", value: "RustFS (Rust)" },
      { label: "Protocolo", value: "AWS S3 / SigV4" },
      { label: "Seguridad", value: "IAM Multi-Tenant" },
    ],
    links: {
      github: "https://github.com/CardonaAndres/StackStore",
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
      { label: "Runtime", value: "Node.js 9" },
      { label: "Servidor", value: "Ubuntu Linux" },
      { label: "Disponibilidad", value: "99.9% Uptime" },
    ],
    links: {
      // Repositorio y accesos privados corporativos
    },
  },
  {
    id: "pedbox-orders-api-kurapika",
    category: "backend",
    isFeatured: false,
    year: "2024 – 2026",
    status: {
      es: "En Producción",
      en: "In Production",
    },
    title: {
      es: "API de Procesamiento de Pedidos & Integración Multi-ERP (Pedbox)",
      en: "Order Processing API & Multi-ERP Integration Engine (Pedbox)",
    },
    tagline: {
      es: "Soporte evolutivo continuo, arquitectura desacoplada de integraciones (Contapyme, Siesa, Odoo) y resiliencia en despacho de pedidos",
      en: "Continuous evolutionary support, decoupled integration architecture (Contapyme, Siesa, Odoo), and resilient order dispatching",
    },
    myRole: {
      es: "Soporte Evolutivo, Backend Engineer & Nuevas Integraciones ERP",
      en: "Evolutionary Support, Backend Engineer & New ERP Integrations",
    },
    challenge: {
      es: "Asumir la titularidad técnica del backend central que procesa pedidos, cotizaciones y facturación para múltiples empresas clientes de Pedbox (multitenancy empresarial). El sistema presentaba puntos de fallo por dependencias heterogéneas entre ERPs externos (Contapyme, Siesa, Odoo, DMS), incidencias por caídas de conectividad y timeouts durante la sincronización, requiriendo mecanismos de reintento automático e idempotencia para evitar pedidos duplicados o perdidos.",
      en: "Taking technical ownership of the central backend processing orders, quotations, and invoicing across multiple Pedbox client enterprises (enterprise multi-tenancy). The system faced points of failure due to heterogeneous external ERP APIs (Contapyme, Siesa, Odoo, DMS), latency timeouts, and connectivity disruptions, demanding automated retry mechanisms and strict idempotency to prevent duplicated or lost orders.",
    },
    solution: {
      es: "Estabilicé la API en producción y desarrollé soporte evolutivo continuo. Diseñé e implementé una arquitectura desacoplada de integraciones mediante un Factory Pattern ('erp.factory.js'), desarrollando desde cero el adaptador de integración para el ERP Contapyme ('contapyme.erp.js') con gestión de tokens de sesión y transformación de esquemas de datos. Añadí políticas de resiliencia con timeouts defensivos, colas de reintento automatizado ('sendAgainOrder') para pedidos retenidos, validación multi-empresa (IGB, Varroc, Wali, Siesa, Contapyme), notificaciones push en tiempo real a clientes y repartidores con Firebase Cloud Messaging (FCM) y generación dinámica de comprobantes de despacho en PDF con html-pdf.",
      en: "Stabilized the production API and spearheaded continuous evolutionary maintenance. Architected a decoupled integration layer using an ERP Factory Pattern ('erp.factory.js'), building from scratch the adapter for Contapyme ERP ('contapyme.erp.js') with session token lifecycle and payload transformation. Engineered resilience policies with defensive timeouts, automated retry queues ('sendAgainOrder') for held orders, multi-tenant company validation (IGB, Varroc, Wali, Siesa, Contapyme), real-time push alerts via Firebase Cloud Messaging (FCM), and dynamic dispatch PDF receipt generation with html-pdf.",
    },
    description: {
      es: "Motor transaccional REST central que procesa y enruta pedidos de clientes, cotizaciones y facturas desde aplicaciones móviles y plataformas web hacia los ERPs de diversas compañías clientes de Pedbox. Gestiona validación de stock, esquemas de descuentos escalonados, sincronización de bases de datos híbridas MySQL y SQL Server, y notificación de novedades de entrega.",
      en: "Central transactional REST engine processing and dispatching customer orders, quotations, and invoices from mobile apps and web platforms into the enterprise ERPs of Pedbox client businesses. Manages stock validation, tiered discount calculations, hybrid MySQL & SQL Server database synchronization, and automated delivery status alerts.",
    },
    architecture: {
      es: "API REST en Express.js y Node.js; Patrón Factory de ERPs (Contapyme REST, Siesa SOAP/XML, Odoo, DMS); Bases de datos híbridas relacionales MySQL y Microsoft SQL Server; Notificaciones push en tiempo real con Firebase Admin SDK; Generador de reportes PDF con html-pdf.",
      en: "REST API in Express.js and Node.js; ERP Factory Pattern (Contapyme REST, Siesa SOAP/XML, Odoo, DMS); Hybrid MySQL and Microsoft SQL Server relational databases; Real-time push notifications via Firebase Admin SDK; Automated dispatch PDF generation with html-pdf.",
    },
    media: {
      type: "image",
      url: "/imgs/stack-img.png", // Imagen preview principal de la card (o pega tu URL de S3)
      alt: "API de Procesamiento de Pedidos Pedbox (Kurapika)",
      aspectRatio: "16/9",
    },
    // Galería multimedia para el Modal: puedes añadir todas las fotos y videos desde tu S3 aquí
    gallery: [
      /*
      {
        type: "video",
        url: "https://tu-bucket.s3.amazonaws.com/videos/pedbox-orders-demo.mp4",
        poster: "https://tu-bucket.s3.amazonaws.com/posters/pedbox-orders-poster.png",
        alt: "Demostración de Enrutamiento y Despacho de Pedidos",
      },
      {
        type: "image",
        url: "https://tu-bucket.s3.amazonaws.com/imgs/pedbox-orders-flow.png",
        alt: "Flujo de Integración Multi-ERP",
      },
      */
    ],
    technologies: [
      "Node.js",
      "Express",
      "MySQL",
      "SQL Server",
      "Firebase",
      "Linux",
    ],
    highlights: {
      es: [
        "Soporte técnico y mantenimiento correctivo/evolutivo continuo en producción para el backend core de pedidos de Pedbox.",
        "Diseño y desarrollo del adaptador de integración para el ERP Contapyme y orquestador desacoplado erp.factory.",
        "Mecanismo de resiliencia con colas de reintento automático para pedidos retenidos o fallidos por desconexión del ERP.",
        "Parametrización y lógica de negocio multi-empresa personalizada (IGB, Varroc, Wali, Siesa, Contapyme).",
        "Envío de notificaciones push en tiempo real mediante Firebase Admin SDK (FCM) y generación de reportes PDF.",
        "Coordinación y consistencia de datos transaccionales en bases de datos MySQL y Microsoft SQL Server.",
      ],
      en: [
        "Continuous technical support and evolutionary maintenance in production for Pedbox's core order backend.",
        "Designed and developed the Contapyme ERP integration adapter and decoupled erp.factory dispatch orchestrator.",
        "Resilient automated retry queues for held or failed orders during third-party ERP connectivity drops.",
        "Custom multi-tenant business logic and rule parametrization across enterprise clients (IGB, Varroc, Wali, Siesa, Contapyme).",
        "Real-time push alerts via Firebase Admin SDK (FCM) and automated dispatch receipt generation in PDF.",
        "Data consistency and coordination across hybrid MySQL and Microsoft SQL Server relational databases.",
      ],
    },
    metrics: [
      { label: "Integraciones", value: "+4 ERPs" },
      { label: "Mensajería", value: "Firebase FCM" },
      { label: "Databases", value: "MySQL + MSSQL" },
    ],
    links: {
      // Repositorio y endpoints privados corporativos Pedbox S.A.S
    },
  },
  {
    id: "pedbox-sync-api-bakugo",
    category: "backend",
    isFeatured: false,
    year: "2024 – 2026",
    status: {
      es: "En Producción",
      en: "In Production",
    },
    title: {
      es: "API de Sincronización de Datos Maestros & ERPs (Pedbox Sync)",
      en: "Master Data & Multi-ERP Sync Engine (Pedbox Sync)",
    },
    tagline: {
      es: "Soporte evolutivo, ingesta masiva SOAP/REST, desduplicación de datos y sincronización de catálogo, cartera y clientes multi-tenant",
      en: "Evolutionary support, SOAP/REST bulk ingestion, data deduplication, and multi-tenant catalog, portfolio & customer sync",
    },
    myRole: {
      es: "Soporte Evolutivo, Backend Engineer & Optimización de Datos",
      en: "Evolutionary Support, Backend Engineer & Data Optimization",
    },
    challenge: {
      es: "Mantener y evolucionar el motor neurálgico de sincronización de datos maestros de Pedbox, encargado de alimentar en tiempo real el catálogo de productos, existencias, cartera de clientes y rutas logísticas desde los ERPs empresariales. El reto radicaba en procesar respuestas SOAP/XML heterogéneas con grandes volúmenes de datos, evitar la duplicación de terceros en la base de datos relacional y asegurar la consistencia de inventario en plataformas móviles y e-commerce.",
      en: "Maintaining and scaling Pedbox's core master data synchronization engine, responsible for feeding live product catalogs, stock, client credit portfolios, and logistics routes from enterprise ERPs. The challenge lay in ingesting heavy, heterogeneous SOAP/XML payloads, preventing client record duplication across relational schemas, and ensuring inventory consistency across mobile apps and e-commerce.",
    },
    solution: {
      es: "Lideré el soporte correctivo y evolutivo de la API en producción. Diseñé algoritmos de desduplicación y sanitización en vuelo para terceros y sucursales, optimizando la asignación de vendedores y usuarios CRM. Implementé validaciones y adaptaciones multi-empresa (empresas 47, 50, etc.), mejoré el parser de diffgrams SOAP XML para soportar múltiples DataSets relacionales, incorporé soporte para ingesta por lotes desde archivos Excel con xlsx, y reorganicé los endpoints de sincronización dedicados para e-commerce y geolocalización.",
      en: "Led continuous corrective and evolutionary maintenance for the production API. Engineered in-flight deduplication and data sanitization algorithms for customers and branch offices, streamlining seller assignments and CRM workflows. Rolled out multi-tenant company adapters (companies 47, 50, etc.), refined the SOAP XML diffgram parser across complex multi-table DataSets, added batch ingestion from Excel files via xlsx, and restructured dedicated sync pipelines for e-commerce and logistics geolocation.",
    },
    description: {
      es: "Servicio backend especializado en la extracción, transformación e ingesta masiva de entidades maestras (productos, stock, clientes, listas de precios, cartera crediticia y fletes) entre sistemas de gestión ERP (Siesa, DMS, servicios SOAP) y la plataforma transaccional Pedbox. Cuenta con autenticación JWT, sincronización automática periódica y canales de actualización para e-commerce.",
      en: "Specialized backend service for bulk extraction, transformation, and ingestion of master entities (products, stock, customers, price books, credit balances, and freight rules) between enterprise ERPs (Siesa, DMS, SOAP web services) and the Pedbox transactional platform. Features JWT authentication, scheduled periodic sync, and dedicated update channels for e-commerce.",
    },
    architecture: {
      es: "Microservicio en Node.js y Express; Integración SOAP/XML con easysoap, fast-xml-parser y sax; Base de datos relacional MySQL con procesamiento por lotes; Procesamiento de hojas de cálculo con xlsx; Seguridad con JWT.",
      en: "Node.js and Express microservice; SOAP/XML integration via easysoap, fast-xml-parser, and sax; Relational MySQL database with bulk batch processing; Spreadsheet parser with xlsx; Security with JWT.",
    },
    media: {
      type: "image",
      url: "/imgs/project-img.png", // Imagen preview principal de la card (o pega tu URL de S3)
      alt: "API de Sincronización de Datos Maestros Pedbox (Bakugo)",
      aspectRatio: "16/9",
    },
    // Galería multimedia para el Modal: puedes añadir todas las fotos y videos desde tu S3 aquí
    gallery: [
      /*
      {
        type: "video",
        url: "https://tu-bucket.s3.amazonaws.com/videos/pedbox-sync-demo.mp4",
        poster: "https://tu-bucket.s3.amazonaws.com/posters/pedbox-sync-poster.png",
        alt: "Demostración de Sincronización Masiva de Clientes y Productos",
      },
      {
        type: "image",
        url: "https://tu-bucket.s3.amazonaws.com/imgs/pedbox-sync-flow.png",
        alt: "Flujo de Integración SOAP/REST de Datos Maestros",
      },
      */
    ],
    technologies: [
      "Node.js",
      "Express",
      "MySQL",
      "Linux",
      "Git",
    ],
    highlights: {
      es: [
        "Soporte evolutivo continuo y resolución de incidencias en producción para el motor de sincronización de Pedbox.",
        "Desarrollo de lógica de desduplicación de clientes y sucursales en la sincronización masiva hacia MySQL.",
        "Integración de protocolos SOAP y parseo de respuestas XML diffgram complejas con múltiples DataSets.",
        "Parametrización y reglas de sincronización multi-tenant para diversas empresas clientes (compañías 47, 50, etc.).",
        "Sincronización de cartera de crédito, estados de cuenta y listas de precios segmentadas por cliente.",
        "Pipeline de actualización en tiempo real de inventario y referencias para tiendas e-commerce.",
      ],
      en: [
        "Continuous evolutionary maintenance and production incident resolution for Pedbox's synchronization engine.",
        "Engineered customer and branch office deduplication logic during heavy MySQL batch synchronization.",
        "Integrated SOAP protocols with robust XML diffgram parsing across complex relational DataSets.",
        "Parametrization and multi-tenant synchronization logic tailored for distinct enterprise clients (companies 47, 50, etc.).",
        "Automated credit portfolio, billing balances, and tiered customer price list synchronization.",
        "Real-time inventory and catalog update pipeline dedicated to e-commerce storefronts.",
      ],
    },
    metrics: [
      { label: "Entidades", value: "Master Data" },
      { label: "Protocolos", value: "SOAP & REST" },
      { label: "Operación", value: "Batch Sync" },
    ],
    links: {
      // Repositorio y endpoints privados corporativos Pedbox S.A.S
    },
  },
  {
    id: "motozone-clubvip-loyalty",
    category: "fullstack",
    isFeatured: false,
    year: "2023 – 2024",
    status: {
      es: "En Producción",
      en: "In Production",
    },
    title: {
      es: "Portal de Fidelización & Club VIP Motozone",
      en: "Motozone Club VIP Loyalty & Rewards Portal",
    },
    tagline: {
      es: "Soporte correctivo, mantenimiento operativo y estabilización de sistema transaccional legacy en Node.js 9 y MySQL",
      en: "Corrective support, operational maintenance, and stabilization of a legacy transactional system on Node.js 9 & MySQL",
    },
    myRole: {
      es: "Ingeniero de Soporte & Mantenimiento de Sistemas Legacy",
      en: "Legacy Systems Support & Maintenance Engineer",
    },
    challenge: {
      es: "Asegurar la continuidad operativa de la plataforma de lealtad 'Club VIP' de Motozone, implementada sobre un entorno heredado de Node.js 9 y un servidor Ubuntu con dependencias deprecadas. El portal atiende a una red masiva de distribuidores, vendedores y mecánicos para la redención de premios, requiriendo intervención técnica ágil para resolver incidencias en canje de puntos, cierres de sesión inesperados y fallos en la emisión de comprobantes transaccionales por correo sin posibilidad de refactorización estructural.",
      en: "Ensuring uninterrupted operational uptime for Motozone's 'Club VIP' rewards portal, running on a legacy Node.js 9 runtime and an older Ubuntu server with frozen dependencies. Serving a large network of distributors, sellers, and mechanics for reward redemptions, the platform required agile technical diagnosis to resolve point exchange drops, unexpected session timeouts, and transactional email dispatch failures without the option of full architectural rewrites.",
    },
    solution: {
      es: "Brindé soporte correctivo y evolutivo continuo directamente en producción. Depuré cuellos de botella en la persistencia de sesiones de express-session, optimicé consultas SQL directas para el cálculo dinámico de saldos e historial de puntos en MySQL, estabilicé la sincronización de usuarios y productos del catálogo, y corregí fallos en el módulo administrativo de transacciones y notificaciones automáticas por correo con Nodemailer, garantizando alta disponibilidad del portal.",
      en: "Delivered continuous corrective and evolutionary maintenance directly in production. Troubleshot memory leaks in express-session persistence, tuned raw MySQL queries for dynamic points ledger calculation, stabilized user and catalog product synchronization, and repaired transactional email triggers within the administrative module using Nodemailer, sustaining high availability.",
    },
    description: {
      es: "Plataforma web transaccional de incentivos comerciales y fidelización para Motozone. Permite a clientes, talleres y mecánicos acumular puntos por compras mayoristas, consultar catálogos de recompensas y tramitar redenciones en tiempo real, complementado con un panel de administración para control de transacciones y usuarios.",
      en: "Transactional web rewards and commercial loyalty platform for Motozone. Enables enterprise clients, repair shops, and mechanics to earn points on wholesale purchases, browse reward catalogs, and process live redemptions, supported by an administrative backoffice for transaction ledger auditing and user management.",
    },
    architecture: {
      es: "Arquitectura monolítica MVC clásica: Runtime Node.js 9, servidor Express.js con motor de plantillas EJS, gestión de sesiones con express-session, base de datos relacional MySQL y orquestación de procesos en servidor Ubuntu Linux.",
      en: "Classic MVC monolith: Node.js 9 runtime, Express.js server with EJS template engine, session management via express-session, relational MySQL database, and process management on legacy Ubuntu Linux server.",
    },
    media: {
      type: "image",
      url: "/imgs/me-hero.png", // Imagen preview principal de la card (o pega tu URL de S3)
      alt: "Portal de Fidelización Motozone ClubVIP",
      aspectRatio: "16/9",
    },
    // Galería multimedia para el Modal: puedes añadir todas las fotos y videos desde tu S3 aquí
    gallery: [
      /*
      {
        type: "image",
        url: "https://tu-bucket.s3.amazonaws.com/imgs/motozone-clubvip-portal.png",
        alt: "Portal de Canje de Puntos Motozone ClubVIP",
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
        "Soporte técnico continuo y atención de incidencias críticas en producción bajo entorno legacy Node.js 9.",
        "Mantenimiento y depuración del flujo transaccional de redención de premios, saldo de puntos y catálogo.",
        "Optimización de consultas a la base de datos MySQL y prevención de caídas de sesiones de usuario.",
        "Ajustes operativos y soporte al panel administrativo de auditoría de transacciones y usuarios.",
        "Supervisión y mantenimiento de servicios en servidor físico Ubuntu Linux garantizando estabilidad continua.",
      ],
      en: [
        "Continuous technical support and critical incident resolution in production under legacy Node.js 9 runtime.",
        "Maintenance and debugging of the transactional point redemption flow, balance ledger, and reward catalog.",
        "MySQL query performance tuning and elimination of user session drops in express-session.",
        "Operational adjustments and technical support for the administrative transaction and user audit panel.",
        "Process supervision and maintenance on Ubuntu Linux production servers ensuring uninterrupted stability.",
      ],
    },
    metrics: [
      { label: "Runtime", value: "Node.js 9" },
      { label: "Servidor", value: "Ubuntu Linux" },
      { label: "Disponibilidad", value: "99.9% Uptime" },
    ],
    links: {
      // Repositorio y accesos privados corporativos
    },
  },
];
