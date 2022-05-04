// By nature of webpack's file-loader, we are treating
//   all of the "asset" files as modules that serve up
//   a string. These strings represent the absolute
//   path to the file when the site is launched.
//
// TODO: Is there a way to not have to copy/paste this
//   for every extension?
declare module '*.jpg' {
  const url: string;
  export default url;
}

declare module '*.css' {
  const url: string;
  export default url;
}
