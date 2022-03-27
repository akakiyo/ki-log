import qs from "qs"; //https://zenn.dev/fujiyama/articles/bf26790ed81964
import axios from "axios";

export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  try {
    const mergedOptions = {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };
    const queryString = qs.stringify(urlParamsObject);
    // populate：　https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/populating-fields.html#field-selection
    // filter: https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/filtering-locale-publication.html#filtering
    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ""}`
    )}`;
    const res = await axios.get(requestUrl, mergedOptions);
    return res.data;
  } catch (err) {
    console.error(err);
  }
}
