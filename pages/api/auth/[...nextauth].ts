import NextAuth from "next-auth"
import { getToken, encode} from "next-auth/jwt";
import {JWTEncodeParams} from "next-auth/jwt/types"
import Auth0Provider from 'next-auth/providers/auth0';
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import axios, {AxiosRequestConfig, Method, AxiosRequestHeaders} from 'axios'

type configProps = {
  method : Method,
  url: string,
  data: any ,
  headers: AxiosRequestHeaders
}
async function requestToPublicAPI(url : string, method : Method , token?: string, data?: any, isFile?: Boolean) {
  const options : AxiosRequestConfig<configProps> = {
    method,
    url: `${process.env.NEXT_PUBLIC_API_URL}${url}`,
    data,
    headers: {},
  };

  if (token && options.headers) {
    options.headers["Authorization"] = `Bearer ${token}`;
  }

  if (isFile && options.headers) {
    options.headers["Content-Type"] = "multipart/form-data;";
  }

  const res = await axios(options);

  return res.data;
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_ID || '',
      clientSecret: process.env.AUTH0_SECRET ||'',
      issuer: process.env.AUTH0_ISSUER ||'',

    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || '',
      // wellKnown: "https:aliolam.us.auth0.com/.well-known/openid-configuration"
    }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_CLIENT_ID || '',
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET ||'',
    // })
    // ...add more providers here
  ],
  callbacks: {
    async jwt(props){
      console.log(props)
      const { token, user, account, profile, isNewUser} = props
      if(account?.access_token) 
        token.access_token = account?.access_token;
      if(account?.id_token) 
        token.id_token = account?.id_token ;
      return token;
    },
    async session({session, token}){
      console.log("session call")
      try {
        const data = await requestToPublicAPI('/accounts/users/', 'get', token.id_token as string);
        console.log(data);
      } catch (error) {
        // console.log(error)
      }
      return session;
    }
    
  },
  secret: "5ef46f49e1f04c936d524d806c16a0625e0d0129d0934033a5100c127748c299"

})