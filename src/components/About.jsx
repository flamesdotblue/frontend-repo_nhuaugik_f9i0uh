import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-50 via-neutral-100 to-neutral-50 py-24 text-neutral-800"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1542202229-7d93c33f5d07?q=80&w=2000&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'multiply',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl"
        >
          Elegance, engineered.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-3xl text-lg text-neutral-700"
        >
          Merfliq embodies a quiet, modern luxury. Minimal silhouettes, tactile finishes, and uncompromising formulas merge to deliver a sensorial ritual that elevates your everyday. Crafted in small batches with ethically sourced botanicals and active complexes.
        </motion.p>
      </div>
    </section>
  );
}
