/**
 * Compiler configuration
 *
 * @see {@link https://bud.js.org/guides/configure bud.js configuration guide}
 *
 * @param {import('@roots/bud').Bud} app
 */
export default async (app) => {
  app.html({
    template: `./index.html`,
  });

  app
    .setPath(`@src`, `resources`)
    .setPath("@scripts", "resources/scripts")
    .setPath("@modules", "node_modules");

  /*
   * @see {@link https://bud.js.org/docs/bud.hash}
   */
  app.hash(false);

  // app.runtime("single");

  /*
   * @see {@link https://bud.js.org/docs/bud.entry}
   * @see {@link https://bud.js.org/docs/bud.assets}
   */
  app
    .entry({
      app: [`scripts/app.js`, "styles/app.scss"],
    })
    .assets(["images"]);

  /**
   * Set public path
   *
   * @see {@link https://bud.js.org/docs/bud.setPublicPath}
   */
  app.setPublicPath("/public/");

  /**
   * Development server settings
   *
   * @see {@link https://bud.js.org/docs/bud.setUrl}
   * @see {@link https://bud.js.org/docs/bud.setProxyUrl}
   * @see {@link https://bud.js.org/docs/bud.watch}
   */
  app.serve("http://localhost:3000").watch(["index.html", "resources/**/*"]);
};
