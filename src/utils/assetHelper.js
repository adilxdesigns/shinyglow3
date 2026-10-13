/**
 * Safely resolves asset paths for both local development and GitHub Pages sub-path hosting.
 * Automatically prepends the Vite configured base URL (e.g. /shinyglow3/) to public assets.
 */
export const getAssetUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;

  // If the path already has the base prefix, return as is
  if (path.startsWith(cleanBase)) {
    return path;
  }

  // Remove leading './' or '/'
  let cleanPath = path;
  if (cleanPath.startsWith('./')) {
    cleanPath = cleanPath.slice(2);
  } else if (cleanPath.startsWith('/')) {
    cleanPath = cleanPath.slice(1);
  }

  return `${cleanBase}${cleanPath}`;
};

export default getAssetUrl;
