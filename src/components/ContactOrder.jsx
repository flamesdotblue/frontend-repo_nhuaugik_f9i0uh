import { motion } from 'framer-motion';
import { Search, FileText, Truck, Instagram, MessageCircle } from 'lucide-react';

const whatsappNumber = '15551234567';
const message = encodeURIComponent('Hi Merfliq, I would like to place an order. Please assist.');
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

export default function ContactOrder() {
  return (
    <section id="contact" className="relative overflow-hidden bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl text-neutral-900 sm:text-4xl"
          >
            How it works
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-neutral-600"
          >
            A seamless three‑step experience — crafted to be effortless and refined.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { Icon: Search, title: 'Explore', desc: 'Discover our curated collection.' },
            { Icon: FileText, title: 'Fill Details', desc: 'Send your order via WhatsApp.' },
            { Icon: Truck, title: 'Delivered', desc: 'We prepare and ship with care.' },
          ].map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-white">
                <Icon size={20} />
              </div>
              <h4 className="mt-4 text-lg font-semibold text-neutral-900">{title}</h4>
              <p className="mt-1 text-sm text-neutral-600">{desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-12 flex max-w-xl flex-col items-center gap-4 text-center"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-600"
          >
            <MessageCircle size={18} />
            Send Order via WhatsApp
          </a>
          <div className="flex items-center gap-3 text-sm text-neutral-600">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-neutral-800 shadow-sm ring-1 ring-neutral-200 transition hover:ring-neutral-300"
            >
              <Instagram size={16} /> Follow on Instagram
            </a>
          </div>
        </motion.div>

        <div className="mt-20 border-t border-neutral-200 pt-8 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} Merfliq — Luxury Haircare. All rights reserved. Contact: hello@merfliq.com
        </div>
      </div>
    </section>
  );
}
