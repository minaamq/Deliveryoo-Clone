import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
    // projectId:"xzgbwvv4",
    projectId:"qwoxusny",
    dataset:"production",
    useCdn:true,
    apiVersion:"2021-10-21",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
//RUN this to add exception for localhost 3000 CORS policy
//sanity cors


export default client;