/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // Link de la bio de Instagram: agenda de diagnóstico gratuito en Cal.com.
        // Temporal (307) para poder cambiar el destino sin que quede cacheado.
        source: "/diagnostico",
        destination: "https://cal.com/juancode.dev/diagnostico",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
