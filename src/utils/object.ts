export const flattenProperties = (
  object: Record<string, string | Record<string, any>>,
  prefix: string = ""
): Record<string, string> => {
  return Object.entries(object).reduce<Record<string, string>>(
    (acc, [key, value]) => {
      const prefixedKey = prefix ? `${prefix}-${key}` : key;
      if (typeof value === "object") {
        return { ...acc, ...flattenProperties(value, prefixedKey) };
      }
      acc[prefixedKey] = value;
      return acc;
    },
    {}
  );
};
