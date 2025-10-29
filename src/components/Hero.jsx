import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const handleScrollToProduct = () => {
    const el = document.getElementById('product');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/HVx7nA7oFco0H0Zc/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-neutral-950/90" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-300"
        >
          Merfliq Collection
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif text-4xl leading-tight sm:text-6xl md:text-7xl"
          style={{ fontFeatureSettings: '"ss01" on, "liga" on' }}
        >
          Refined. Modern. <span className="text-neutral-200">Marfliq.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-neutral-300"
        >
          A minimal expression of luxury haircare — engineered textures, elevated materials, and timeless form.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-10"
        >
          <button
            onClick={handleScrollToProduct}
            className="rounded-full bg-white/90 px-7 py-3 text-sm font-medium text-black shadow-lg shadow-white/10 backdrop-blur transition hover:bg-white"
          >
            Shop Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
