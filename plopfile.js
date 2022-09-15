module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "create astro component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{kebabCase name}}.astro",
        templateFile: "plop-templates/component.astro.hbs",
      },
    ],
  });
};
