export const contentDefaultVariant = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
}

export const defaultMotionProps = {
  variants: contentDefaultVariant,
  transition: {
    stiffness: 600,
    damping: 100,
    duration: 0.2,
  },
}
