export const libraries: Array<Library> = [
  {
    name: "NuxtLabs UI",
    logo: "nuxt.svg",
    url: "https://ui.nuxtlabs.com",
    repoOwner: "nuxtlabs",
    repoName: "ui",
    package: "@nuxthq/ui",
    componentMatchings: [
      "Accordion",
      "Alert",
      "Avatar",
      "Badge",
      "Button",
      "Button Group",
      // "Date Picker" // Available only as un example using dependency
      "Dropdown",
      "Keyboard Key",
      "Input",
      "Textarea",
      "Select",
      "Dropdown",
      "Checkbox",
      "Radio",
      "Toggle",
      "Range",
      "Form Group",
      "Form",
      "Table",
      "Vertical Navigation",
      "Command Palette",
      "Pagination",
      "Tabs",
      "Modal",
      "Slideover",
      "Popover",
      "Tooltip",
      "Context Menu",
      "Toast",
      "Card",
      "Container",
      "Skeleton",
    ],
    filterMatchings: [
      { id: "FStyled" },
      { id: "FImported" },
      { id: "FTailwind" },
      { id: "FComponents" },
      { id: "FFree" },
      { id: "FAccessible" },
      { id: "FSemanticColors" },
      { id: "FDarkMode" },
      { id: "FOfficial" },
      { id: "FRoadmap" },
      { id: "FRTLSupport" },
      { id: "FTyped" },
      { id: "FNuxt" },
    ],
  },
  {
    name: "Prime Vue",
    logo: "primevue.svg",
    url: "https://primevue.org",
    repoOwner: "primefaces",
    repoName: "primevue",
    package: "primevue",
    componentMatchings: [
      "Auto Complete",
      "Date Picker",
      "Select",
      "Checkbox",
      "Input Chips",
      "Color Picker",
      "Dropdown",
      "Rich Text Editor",
      "Input Mask",
      "Toggle",
      "Button",
      "Button Group",
      "Input",
      "Knob",
      "Password Indicator",
      "Radio",
      "Rating",
      "Range",
      "Textarea",
      "Speed Dial",
      "Table",
      "Order List",
      "Tree",
      "Pagination",
      "Pick List",
      "Timeline",
      "Virtual Scroller",
      "Accordion",
      "Card",
      "Divider",
      "Scroll Bar",
      "Panel Splitter",
      "Tabs",
      "Modal",
      "Popover",
      "Slideover",
      "Tooltip",
      "File Input",
      "Breadcrumb",
      "Context Menu",
      "Dock",
      "Vertical Navigation",
      "Navbar",
      "Steps",
      "Alert",
      "Toast",
      "Carousel",
      "Avatar",
      "Badge",
      "Indicator",
      "Scroll Top",
      "Skeleton",
      "Progress",
      "Listbox",
    ],
    filterMatchings: [
      { id: "FStyled" },
      { id: "FUnstyled" },
      { id: "FImported" },
      { id: "FTailwind" }, // but not forced, two versions
      { id: "FComponents" },
      { id: "FAccessible" },
      { id: "FFigma" },
      { id: "FFree" }, // not for Figma
      { id: "FRoadmap" }, // https://primevue.org/roadmap/
      { id: "FThemeGenerator" }, // https://designer.primevue.org/
      { id: "FBuiltinThemes" }, // https://primevue.org/theming/#builtinthemes
      { id: "FSemanticColors" }, // https://primevue.org/colors/
      { id: "FVue" },
    ],
  },
  {
    name: "Quasar",
    logo: "quasar.svg",
    logoDark: "quasar_dark.svg",
    url: "https://quasar.dev",
    repoOwner: "quasarframework",
    repoName: "quasar",
    package: "quasar",
    componentMatchings: [],
    filterMatchings: [],
  },
  {
    name: "Vuetify",
    logo: "vuetify.svg",
    url: "https://vuetifyjs.com",
    repoOwner: "vuetifyjs",
    repoName: "vuetify",
    package: "vuetify",
    componentMatchings: [],
    filterMatchings: [],
  },
  {
    name: "Headless UI",
    repoOwner: "tailwindlabs",
    repoName: "headlessui",
    package: "@headlessui/vue",
    logo: "headlessui.svg",
    url: "https://headlessui.com/",
    componentMatchings: [
      "Dropdown",
      "Command Palette",
      "Toggle",
      "Accordion",
      "Modal",
      "Popover",
      "Radio",
      "Tabs",
    ],
    filterMatchings: [
      { id: "FUnstyled" },
      { id: "FComponents" },
      { id: "FImported" },
      { id: "FTailwind" },
      { id: "FAccessible" },
      { id: "FFree" },
      { id: "FOfficial" },
      { id: "FVue" },
    ],
  },
  {
    name: "Tailwind UI",
    subName: "on top of Headless UI",
    logo: "tailwind.svg",
    url: "https://tailwindui.com",
    componentMatchings: [
      "Navbar",
      "Popover",
      "Select",
      "Form",
      "Form Group",
      "Input",
      "Textarea",
      "Radio",
      "Checkbox",
      "Toggle",
      "Modal",
      "Alert",
      "Pagination",
      "Tabs",
      "Vertical Navigation",
      "Slideover",
      "Breadcrumb",
      "Steps",
      "Command Palette",
      "Toast",
      "Avatar",
      "Badge",
      "Dropdown",
      "Button",
      "Button Group",
      "Divider",
      "Container",
      "Card",
    ],
    filterMatchings: [
      { id: "FStyled" },
      { id: "FPasted" },
      { id: "FComponents" },
      { id: "FTailwind" },
      { id: "FAccessible" },
      { id: "FOfficial" },
    ],
  },
  {
    name: "Daisy UI",
    repoOwner: "saadeghi",
    repoName: "daisyui",
    package: "daisyui",
    logo: "daisyui.svg",
    url: "https://daisyui.com",
    componentMatchings: [
      "Accordion",
      "Alert",
      "Avatar",
      "Badge",
      "Bottom Tabs",
      "Breadcrumb",
      "Button",
      "Button Group",
      "Card",
      "Carousel",
      "Chat Bubble",
      "Checkbox",
      "Divider",
      "File Input",
      "Indicator",
      "Input",
      "Keyboard Key",
      "Vertical Navigation",
      "Mockup",
      "Modal",
      "Navbar",
      "Pagination",
      "Progress",
      "Radio",
      "Range",
      "Rating",
      "Select",
      "Slideover",
      "Stack",
      "Steps",
      "Swap",
      "Tabs",
      "Table",
      "Textarea",
      "Toggle",
      "Tooltip",
      "Popover",
    ],
    filterMatchings: [
      { id: "FStyled" },
      { id: "FImported" },
      { id: "FCSS" },
      { id: "FTailwind" },
      { id: "FFree" },
      { id: "FBuiltinThemes" },
      { id: "FThemeGenerator" },
      { id: "FSemanticColors" },
      { id: "FDarkMode" },
      { id: "FRTLSupport" },
    ],
  },
  {
    name: "Flowbite Vue",
    logo: "flowbite-vue.svg",
    url: "https://flowbite-vue.com",
    repoOwner: "themesberg",
    repoName: "flowbite-vue",
    package: "flowbite-vue",
    componentMatchings: [
      "Accordion",
      "Alert",
      "Avatar",
      "Breadcrumb",
      "Button",
      "Badge",
      "Button Group",
      "Card",
      "Carousel",
      "Dropdown",
      "Pagination",
      "Progress",
      "Rating",
      "Table",
      "Tabs",
      "Timeline",
      "Tooltip",
      "Modal",
      "Navbar",
      "Vertical Navigation",
      "Input",
      "File Input",
      "Checkbox",
      "Select",
      "Toast",
      "Toggle",
      "Textarea",
      "Range",
      "Radio",
    ],
    filterMatchings: [
      { id: "FStyled" },
      { id: "FComponents" },
      { id: "FTailwind" },
      { id: "FFree" },
      { id: "FFigma" },
      { id: "FVue" },
    ],
  },
];
