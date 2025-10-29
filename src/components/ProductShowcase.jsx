import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const whatsappNumber = '15551234567';
const message = encodeURIComponent(
  'Hello Merfliq, I would like to order the Merfliq Shampoo Bottle. Please share purchase details.'
);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

export default function ProductShowcase() {
  return (
    <section id="product" className="relative bg-white py-24 text-neutral-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-neutral-100 bg-neutral-50 shadow-xl">
          <Spline
            scene="https://prod.spline.design/2k8pJ0Tn7o2T1sQW/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
        </div>
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl sm:text-4xl"
          >
            Merfliq Shampoo Bottle
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-neutral-600"
          >
            A balanced, sulfate-free cleanser designed to fortify strands, preserve color, and enhance shine. Encased in a matte vessel with a precision label for a gallery-grade presentation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6"
          >
            <h4 className="text-sm font-medium tracking-wide text-neutral-800">Key Ingredients</h4>
            <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-neutral-600 sm:grid-cols-2">
              <li className="rounded-full bg-neutral-100 px-3 py-2">Marine Collagen Complex</li>
              <li className="rounded-full bg-neutral-100 px-3 py-2">Cold-pressed Argan Oil</li>
              <li className="rounded-full bg-neutral-100 px-3 py-2">Botanical Keratin</li>
              <li className="rounded-full bg-neutral-100 px-3 py-2">Vitamin B5</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-black/20 transition hover:bg-black"
            >
              Buy Now
            </a>
            <span className="text-sm text-neutral-500">WhatsApp order with pre‑filled message</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
