// Design tokens extracted from Figma
export const designTokens = {
  colors: {
    // Base colors
    white: '#ffffff',
    black: '#000000',
    hunterGreen: '#172815',
    woodland: '#3e5622',
    transparent: '#ffffff00',

    // Color schemes
    colorScheme1: {
      background: '#31441b',
      foreground: '#3e5622',
      text: '#ffffff',
      border: '#ffffff33',
    },
    colorScheme2: {
      background: '#172815',
      foreground: '#122010',
      text: '#ffffff',
      border: '#ffffff33',
    },
  },

  typography: {
    fontFamilies: {
      heading: '"Instrument Serif", serif',
      body: '"Fira Code", monospace',
    },

    sizes: {
      h1: '56px',
      h2: '48px',
      h3: '40px',
      textMedium: '18px',
      textRegular: '16px',
      textSmall: '14px',
    },

    weights: {
      regular: 400,
      medium: 500,
      semibold: 600,
    },

    lineHeights: {
      heading: 1.2,
      body: 1.5,
    },

    // Complete font styles
    styles: {
      h1: {
        fontFamily: '"Instrument Serif", serif',
        fontSize: '56px',
        fontWeight: 400,
        lineHeight: 1.2,
      },
      h2: {
        fontFamily: '"Instrument Serif", serif',
        fontSize: '48px',
        fontWeight: 400,
        lineHeight: 1.2,
      },
      h3: {
        fontFamily: '"Instrument Serif", serif',
        fontSize: '40px',
        fontWeight: 400,
        lineHeight: 1.2,
      },
      textMediumNormal: {
        fontFamily: '"Fira Code", monospace',
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: 1.5,
      },
      textRegularNormal: {
        fontFamily: '"Fira Code", monospace',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: 1.5,
      },
      textRegularMedium: {
        fontFamily: '"Fira Code", monospace',
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: 1.5,
      },
      textRegularSemiBold: {
        fontFamily: '"Fira Code", monospace',
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: 1.5,
      },
      textSmallNormal: {
        fontFamily: '"Fira Code", monospace',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: 1.5,
      },
      textSmallSemiBold: {
        fontFamily: '"Fira Code", monospace',
        fontSize: '14px',
        fontWeight: 600,
        lineHeight: 1.5,
      },
    },
  },

  spacing: {
    paddingGlobal: '64px',
    paddingSectionLarge: '112px',
    paddingSectionMedium: '80px',
  },

  radius: {
    large: '40px',
    medium: '32px',
  },

  stroke: {
    borderWidth: '0',
    dividerWidth: '1px',
  },

  container: {
    large: '1280px',
  },

  maxWidth: {
    large: '768px',
    medium: '560px',
    xsmall: '400px',
  },
};

// CSS custom properties for easier usage
export const cssVariables = `
  :root {
    /* Colors */
    --color-white: ${designTokens.colors.white};
    --color-black: ${designTokens.colors.black};
    --color-hunter-green: ${designTokens.colors.hunterGreen};
    --color-woodland: ${designTokens.colors.woodland};

    /* Color Scheme 1 */
    --color-scheme-1-bg: ${designTokens.colors.colorScheme1.background};
    --color-scheme-1-fg: ${designTokens.colors.colorScheme1.foreground};
    --color-scheme-1-text: ${designTokens.colors.colorScheme1.text};
    --color-scheme-1-border: ${designTokens.colors.colorScheme1.border};

    /* Color Scheme 2 */
    --color-scheme-2-bg: ${designTokens.colors.colorScheme2.background};
    --color-scheme-2-fg: ${designTokens.colors.colorScheme2.foreground};
    --color-scheme-2-text: ${designTokens.colors.colorScheme2.text};
    --color-scheme-2-border: ${designTokens.colors.colorScheme2.border};

    /* Typography */
    --font-heading: ${designTokens.typography.fontFamilies.heading};
    --font-body: ${designTokens.typography.fontFamilies.body};

    /* Font Sizes */
    --text-h1: ${designTokens.typography.sizes.h1};
    --text-h2: ${designTokens.typography.sizes.h2};
    --text-h3: ${designTokens.typography.sizes.h3};
    --text-medium: ${designTokens.typography.sizes.textMedium};
    --text-regular: ${designTokens.typography.sizes.textRegular};
    --text-small: ${designTokens.typography.sizes.textSmall};

    /* Spacing */
    --padding-global: ${designTokens.spacing.paddingGlobal};
    --padding-section-large: ${designTokens.spacing.paddingSectionLarge};
    --padding-section-medium: ${designTokens.spacing.paddingSectionMedium};

    /* Radius */
    --radius-large: ${designTokens.radius.large};
    --radius-medium: ${designTokens.radius.medium};

    /* Container */
    --container-large: ${designTokens.container.large};
  }
`;