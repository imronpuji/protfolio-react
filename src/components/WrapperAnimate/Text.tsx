import {motion} from "framer-motion"
export default function FadeInWhenVisible({
    children,
    duration = 0.4,
    visible = { opacity: 1, scale: 1 , y:0 },
    hidden = { opacity: 0, scale: 1, y:100 },
  }: any) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration }}
        variants={{
          visible,
          hidden,
        }}
      >
        {children}
      </motion.div>
    )
  }