const screens = {
  mobile: 0,
  mobile360: 360,
  desktop: 1280,
};

const mediaQuery = (key: keyof typeof screens) => {
  return (style: TemplateStringsArray | string) =>
    `@media (min-width: ${screens[key]}px) { ${style} }`;
};

export default mediaQuery;
