export const tokens = {
  colors: {
    text: {
      primary: 'text-neutral-900',
      secondary: 'text-neutral-500',
      muted: 'text-neutral-400',
      success: 'text-green-500',
      error: 'text-red-500',
      warning: 'text-amber-500'
    },
    background: {
      success: 'bg-green-100',
      error: 'bg-red-100',
      warning: 'bg-amber-100',
      muted: 'bg-neutral-100',
      overlay: {
        success: 'bg-green-500/10',
        error: 'bg-red-500/10',
        warning: 'bg-amber-500/10',
        neutral: 'bg-neutral-500/10'
      }
    },
    status: {
      active: 'bg-green-100 text-green-700',
      pending: 'bg-amber-100 text-amber-700',
      completed: 'bg-blue-100 text-blue-700',
      cancelled: 'bg-red-100 text-red-700'
    }
  },
  spacing: {
    card: 'p-6',
    section: 'space-y-8',
    stack: 'space-y-4',
    inline: 'space-x-4'
  },
  typography: {
    h1: 'text-3xl font-semibold tracking-tight',
    h2: 'text-2xl font-semibold',
    h3: 'text-xl font-semibold',
    h4: 'text-lg font-medium',
    body: 'text-sm',
    small: 'text-xs'
  },
  icons: {
    sizes: {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6'
    }
  },
  rounded: {
    full: 'rounded-full',
    lg: 'rounded-lg',
    md: 'rounded-md'
  }
} 