import request, { gql } from "graphql-request";

const MASTER_URL = 'https://api-us-west-2.hygraph.com/v2/'+process.env.NEXT_PUBLIC_HYGRAPH_API_KEY+'/master'


const getAllMain = async ()=>{
    const  query = gql `
    query Assets {
        mains {
          image {
            url
          }
          description
          title
        }
      }
    `
    const result = await request(MASTER_URL,query);
    return result;
}

const getAllAboutPage = async ()=>{
  const query = gql `
  query Assets {
    abouts {
      imageAbout {
        url
      }
    }
  }  
  `
  const result = await request(MASTER_URL,query);
  return result;

}

const GlobalsApi = {
  getAllMain,
  getAllAboutPage,
};

export default GlobalsApi;