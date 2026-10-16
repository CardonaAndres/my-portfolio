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
    id: "bulk-financial-settlement-engine",
    category: "backend",
    isFeatured: false,
    year: "2024",
    status: {
      es: "En Producción",
      en: "In Production",
    },
    title: {
      es: "Motor de Liquidación & Carga Masiva Financiera",
      en: "Bulk Financial Settlement & Processing Engine",
    },
    tagline: {
      es: "Procesamiento batch de alto volumen para acuerdos comerciales y conciliación contable periódica",
      en: "High-volume batch processing for commercial agreements and periodic ledger reconciliations",
    },
    description: {
      es: "Sistema transaccional de misión crítica que automatiza la ingesta masiva de archivos financieros, validación de reglas de negocio en lotes y liquidación automatizada con cron jobs resilientes ante fallos.",
      en: "Mission-critical transactional system automating bulk financial file ingestion, batch business rule validation, and automated settlement workflows with fault-tolerant cron schedulers.",
    },
    architecture: {
      es: "Arquitectura hexagonal en NestJS, base de datos relacional con particionamiento y transacciones ACID.",
      en: "Hexagonal architecture in NestJS, partitioned relational database, and strict ACID transaction management.",
    },
    media: {
      type: "image",
      url: "/imgs/me-hero.png",
      alt: "Motor de Liquidación Financiera",
      aspectRatio: "16/9",
    },
    technologies: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Docker",
      "GitHub Actions",
    ],
    highlights: {
      es: [
        "Procesamiento masivo de miles de transacciones por lote con validación estricta.",
        "Schedulers automatizados con reintentos exponenciales y alertas en tiempo real.",
        "Auditoría y trazabilidad completa de cada liquidación generada.",
      ],
      en: [
        "Bulk processing of thousands of transactions per batch with strict validation.",
        "Automated schedulers with exponential backoff retries and real-time alerts.",
        "Full audit trails and traceability for every executed settlement.",
      ],
    },
    metrics: [
      { label: "Transacciones", value: "+50k / lote" },
      { label: "Error Rate", value: "< 0.01%" },
      { label: "Automatización", value: "100% Schedulers" },
    ],
    links: {
      github: "https://github.com/AndresCardona10",
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
